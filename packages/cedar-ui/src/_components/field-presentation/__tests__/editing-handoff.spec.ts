import { h, reactive } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import AutoComplete from '../../../auto-complete'
import Form from '../../../form/Form.vue'
import FormItem from '../../../form/FormItem.vue'
import Input from '../../../input/input.vue'
import Select from '../../../select/select'
import Textarea from '../../../textarea'
import EditorPanel from '../EditorPanel.vue'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  vi.restoreAllMocks()
})
function fixture(extra: Record<string, unknown> = {}, rules?: any, first: any = Input) {
  const model = reactive({ first: 'old', second: 'other' })
  const wrapper = mount(Form, {
    attachTo: document.body,
    props: { model, editMode: 'click' },
    slots: {
      default: () => [
        h(FormItem, { field: 'first', label: 'First', rules }, () =>
          h(first, {
            modelValue: model.first,
            ...extra,
            'onUpdate:modelValue': (value: string) => {
              model.first = value
            },
          }),
        ),
        h(FormItem, { field: 'second', label: 'Second' }, () =>
          h(Input, {
            modelValue: model.second,
            'onUpdate:modelValue': (value: string) => {
              model.second = value
            },
          }),
        ),
        h('button', { type: 'button', id: 'outside' }, 'Outside'),
      ],
    },
  })
  owners.push(wrapper)
  const open = async (index = 0) => {
    await wrapper.findAll('[aria-haspopup=dialog]')[index].trigger('click')
    await flushPromises()
  }
  const panel = () => wrapper.getComponent(EditorPanel)
  return { wrapper, model, open, panel }
}
test('outside saves once, and switching saves before opening the next field without stealing focus', async () => {
  const f = fixture()
  await f.open()
  await f.panel().get('input').setValue('saved')
  await f.wrapper.get('#outside').trigger('click')
  await flushPromises()
  expect(f.model.first).toBe('saved')
  expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(false)
  await f.open()
  await f.panel().get('input').setValue('switched')
  await f.open(1)
  expect(f.model.first).toBe('switched')
  expect(f.wrapper.findAllComponents(EditorPanel)).toHaveLength(1)
  expect(f.panel().get('input').element.value).toBe('other')
  expect(document.activeElement).toBe(f.panel().get('input').element)
})
test('failed validation keeps the draft and blocks switching; corrected Enter saves, Escape discards', async () => {
  const f = fixture({}, [
    {
      validator: (value: unknown, callback: (error?: string) => void) =>
        callback(value === 'bad' ? 'Invalid draft' : undefined),
    },
  ])
  await f.open()
  await f.panel().get('input').setValue('bad')
  await f.open(1)
  expect(f.model.first).toBe('old')
  expect(f.wrapper.findAllComponents(EditorPanel)).toHaveLength(1)
  expect(f.panel().get('input').element.value).toBe('bad')
  expect(f.panel().get('[role=alert]').text()).toContain('Invalid draft')
  await f.panel().get('input').setValue('fixed')
  await f.panel().get('input').trigger('keydown', { key: 'Enter' })
  await flushPromises()
  expect(f.model.first).toBe('fixed')
  await f.open()
  await f.panel().get('input').setValue('discard')
  await f.panel().get('input').trigger('keydown', { key: 'Escape' })
  await flushPromises()
  expect(f.model.first).toBe('fixed')
  expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(false)
})
test('async confirmation coalesces outside and switch requests; reset prevents a late commit', async () => {
  let resolve!: () => void
  const beforeCommit = vi.fn(
    () =>
      new Promise<void>((done) => {
        resolve = done
      }),
  )
  const f = fixture({ beforeCommit })
  await f.open()
  await f.panel().get('input').setValue('pending')
  await f.wrapper.get('#outside').trigger('click')
  await flushPromises()
  await f.open(1)
  expect(beforeCommit).toHaveBeenCalledTimes(1)
  expect(f.wrapper.findAllComponents(EditorPanel)).toHaveLength(1)
  expect(f.panel().attributes('aria-busy')).toBe('true')
  f.wrapper.vm.resetFields()
  await flushPromises()
  expect(f.model.first).toBe('old')
  // Reset releases the handoff even when user work ignores its AbortSignal.
  expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(false)
  await f.open(1)
  expect(f.panel().get('input').element.value).toBe('other')
  resolve()
  await flushPromises()
  expect(f.model.first).toBe('old')
  expect(f.wrapper.findAllComponents(EditorPanel)).toHaveLength(1)
})
test('multiline Enter and composing Enter do not save; Ctrl+Enter saves', async () => {
  const f = fixture({}, undefined, Textarea)
  await f.open()
  await f.panel().get('textarea').setValue('line one\nline two')
  await f.panel().get('textarea').trigger('keydown', { key: 'Enter' })
  await flushPromises()
  expect(f.model.first).toBe('old')
  await f.panel().get('textarea').trigger('keydown', { key: 'Enter', ctrlKey: true, isComposing: true })
  await flushPromises()
  expect(f.model.first).toBe('old')
  await f.panel().get('textarea').trigger('keydown', { key: 'Enter', ctrlKey: true })
  await flushPromises()
  expect(f.model.first).toBe('line one\nline two')
})
test('a teleported native Select menu belongs to the editor and selecting does not commit the outer transaction', async () => {
  const f = fixture(
    {
      options: [
        { value: 'old', label: 'Old' },
        { value: 'new', label: 'New' },
      ],
    },
    undefined,
    Select,
  )
  await f.open()
  const option = [...document.querySelectorAll<HTMLElement>('[role=option]')].find((node) =>
    node.textContent?.includes('New'),
  )!
  expect(option).toBeTruthy()
  option.click()
  await flushPromises()
  expect(f.model.first).toBe('old')
  expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(true)
  await f.panel().get('input').trigger('keydown', { key: 'Enter' })
  await flushPromises()
  expect(f.model.first).toBe('new')
})

test('switching from default inline to click still saves on an outside interaction', async () => {
  const f = fixture()
  await f.wrapper.setProps({ editMode: 'direct' })
  await f.wrapper.setProps({ editMode: 'click' })
  await f.open()
  await f.panel().get('input').setValue('outside')
  await f.wrapper.get('#outside').trigger('click')
  await flushPromises()
  expect(f.model.first).toBe('outside')
  expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(false)
})
test('concurrent field activation waits for confirmation and never renders multiple editors', async () => {
  let resolve!: () => void
  const f = fixture({
    beforeCommit: () =>
      new Promise<void>((done) => {
        resolve = done
      }),
  })
  await f.open()
  await f.panel().get('input').setValue('pending')
  const next = f.wrapper.findAll('[aria-haspopup=dialog]')[1]
  await next.trigger('click')
  await next.trigger('click')
  await flushPromises()
  expect(f.wrapper.findAllComponents(EditorPanel)).toHaveLength(1)
  resolve()
  await flushPromises()
  expect(f.model.first).toBe('pending')
  expect(f.wrapper.findAllComponents(EditorPanel)).toHaveLength(1)
  expect(f.panel().get('input').element.value).toBe('other')
})

test('a failed save dismisses the candidate menu so the retained draft error remains visible', async () => {
  const f = fixture(
    { options: ['old', 'bad'], shouldOpen: () => true },
    [
      {
        validator: (value: unknown, callback: (error?: string) => void) =>
          callback(value === 'bad' ? 'Invalid draft' : undefined),
      },
    ],
    AutoComplete,
  )
  await f.open()
  await f.panel().get('input').setValue('bad')
  await f.wrapper.get('#outside').trigger('click')
  await flushPromises()
  expect(f.model.first).toBe('old')
  expect(f.panel().get('input').element.value).toBe('bad')
  expect(f.panel().get('[role=alert]').text()).toContain('Invalid draft')
  expect(f.panel().get('input').attributes('aria-expanded')).toBe('false')
})
