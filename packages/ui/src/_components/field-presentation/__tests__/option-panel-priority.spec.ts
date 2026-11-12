import { flushPromises, mount } from '@vue/test-utils'
import { h, reactive } from 'vue'
import { afterEach, expect, test, vi } from 'vitest'
import Form from '../../../form/Form.vue'
import FormItem from '../../../form/FormItem.vue'
import AutoComplete from '../../../auto-complete'
import TreeSelect from '../../../tree-select'
import PeopleSelect from '../../../people-select'
import EditorPanel from '../EditorPanel.vue'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => { owners.splice(0).forEach((owner) => owner.unmount()); vi.restoreAllMocks() })
const cases = [
  ['AutoComplete', AutoComplete, { options: ['old', 'new'], shouldOpen: () => true }],
  ['TreeSelect', TreeSelect, { data: [{ value: 'old', label: 'Old' }, { value: 'disabled', label: 'Disabled', disabled: true }, { value: 'new', label: 'New' }], filterable: true }],
  ['PeopleSelect', PeopleSelect, { options: ['old', 'new', 'disabled'].map(value => ({ value, label: `${value}（${value}）` })) }],
] as const
function fixture(Field: any, extra: any, editMode = 'click', initial: unknown = 'old') {
  const model = reactive({ value: initial })
  const wrapper = mount(Form, { attachTo: document.body, props: { model, editMode }, slots: { default: () => h(FormItem, { field: 'value', label: 'Field' }, () => h(Field, { ...('needConfirm' in ((Field as any).props ?? {}) ? { needConfirm: true } : {}),  ...extra, modelValue: model.value, 'onUpdate:modelValue': (value: unknown) => { model.value = value } })) } })
  owners.push(wrapper)
  const panel = () => wrapper.getComponent(EditorPanel)
  const open = async () => { await wrapper.get('.c-field-presentation__edit').trigger('click'); await flushPromises(); if (panel().get('input').attributes('aria-expanded') !== 'true') { await panel().get('input').trigger('click'); await flushPromises() } }
  return { wrapper, model, panel, open }
}
for (const [name, Field, props] of cases) {
  for (const editMode of ['click', 'dblclick']) {
    test(`${name} ${editMode}: edit icon, owned popup clicks, and two-stage Escape`, async () => {
      const f = fixture(Field, props, editMode)
      expect(f.wrapper.get('.c-field-presentation__reference-group').attributes('title')).toBe(editMode === 'click' ? '单击编辑' : '双击编辑')
      await f.open()
      const popup = document.querySelector<HTMLElement>('[trigger-placement]')!
      expect(popup).toBeTruthy()
      popup.click(); await flushPromises()
      expect(f.model.value).toBe('old')
      expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(true)
      await f.panel().get('input').trigger('keydown', { key: 'Escape' }); await flushPromises()
      expect(f.panel().get('input').attributes('aria-expanded')).toBe('false')
      expect(document.activeElement).toBe(f.panel().get('input').element)
      await f.panel().get('input').trigger('keydown', { key: 'Escape' }); await flushPromises()
      expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(false)
      expect(f.model.value).toBe('old')
    })
  }
  test(`${name}: Enter chooses the active candidate before the next Enter saves the Form field`, async () => {
    const f = fixture(Field, props)
    await f.open()
    const input = f.panel().get('input')
    if (name === 'AutoComplete') { await input.setValue('new'); await flushPromises() }
    else if (name === 'TreeSelect') await input.trigger('keydown', { key: 'ArrowDown' })
    else {
      const candidate = [...document.querySelectorAll<HTMLElement>('[role=option]')].find((node) => node.textContent?.trim() === 'new（new）')!
      expect(candidate).toBeTruthy()
      candidate.dispatchEvent(new MouseEvent('mouseenter'))
    }
    await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
    expect(f.model.value).toBe('old')
    expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(true)
    expect(input.attributes('aria-expanded')).toBe('false')
    await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
    expect(f.model.value).toBe('new')
    expect(f.wrapper.findComponent(EditorPanel).exists()).toBe(false)
  })
  test(`${name}: disabled, readonly and readPretty do not expose an edit icon`, async () => {
    const f = fixture(Field, props)
    for (const restriction of ['disabled', 'readonly', 'readPretty']) {
      await f.wrapper.setProps({ [restriction]: true }); await flushPromises()
      expect(f.wrapper.find('.c-field-presentation__edit').exists()).toBe(false)
      await f.wrapper.setProps({ [restriction]: false }); await flushPromises()
    }
  })
}

test('TreeSelect multiple keyboard checking retains the draft across Escape and uses the existing check rules', async () => {
  const f = fixture(TreeSelect, { ...cases[1][2], multiple: true, treeCheckable: true }, 'click', ['old'])
  await f.open()
  const input = f.panel().get('input')
  await input.trigger('keydown', { key: 'ArrowDown' })
  await input.trigger('keydown', { key: 'Enter', isComposing: true }); await flushPromises()
  expect(f.model.value).toEqual(['old'])
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(input.attributes('aria-expanded')).toBe('true')
  expect(f.model.value).toEqual(['old'])
  await input.trigger('keydown', { key: 'Escape' }); await flushPromises()
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toEqual(['old', 'new'])
})
test('TreeSelect navigation honors custom field names and numeric zero keys', async () => {
  const f = fixture(TreeSelect, { data: [{ id: 0, name: 'Zero' }, { id: 'old', name: 'Old' }, { id: 'blocked', name: 'Blocked', blocked: true }, { id: 'new', name: 'New' }], fieldNames: { value: 'id', label: 'name', disabled: 'blocked' } })
  await f.open()
  const input = f.panel().get('input')
  await input.trigger('keydown', { key: 'Home' }); await flushPromises()
  expect(input.attributes('aria-activedescendant')).toContain('number-0')
  await input.trigger('keydown', { key: 'ArrowDown' })
  await input.trigger('keydown', { key: 'ArrowDown' }); await flushPromises()
  expect(input.attributes('aria-activedescendant')).toContain('string-new')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('new')
})

test('TreeSelect search makes the matching leaf active instead of a retained ancestor', async () => {
  const f = fixture(TreeSelect, { data: [{ value: 'parent', label: 'Parent', children: [{ value: 'old', label: 'Old' }, { value: 'new', label: 'New' }] }], treeProps: { defaultExpandAll: true, animation: false }, filterable: true, filterTreeNode: (query: string, node: any) => node.label.includes(query) })
  await f.open()
  const input = f.panel().get('input')
  await input.setValue('New'); await new Promise((resolve) => setTimeout(resolve, 130)); await flushPromises()
  expect(input.attributes('aria-activedescendant')).toContain('string-new')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('new')
})
test('TreeSelect Enter expands a nonselectable parent before choosing a visible leaf', async () => {
  const f = fixture(TreeSelect, { data: [{ value: 'parent', label: 'Parent', children: [{ value: 'new', label: 'New' }] }], selectable: 'leaf', treeProps: { animation: false, defaultExpandAll: false } }, 'click', '')
  await f.open()
  const input = f.panel().get('input')
  const tree = f.panel().getComponent({ name: 'CTree' }).vm as any
  expect(tree.visibleTreeNodeList[0].isLeaf).toBe(false)
  expect(tree.visibleTreeNodeList[0].selectable).toBe(false)
  const expansion = vi.spyOn(tree.treeContext, 'onExpand')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(expansion).toHaveBeenCalledTimes(1)
  expect(input.attributes('aria-expanded')).toBe('true')
  expect(f.model.value).toBe('')
  expect((f.panel().getComponent({ name: 'CTree' }).vm as any).computedExpandedValues).toContain('parent')
  expect([...document.querySelectorAll('[role=treeitem]')].map((node) => node.textContent)).toContain('New')
  await input.trigger('keydown', { key: 'ArrowRight' }); await flushPromises()
  expect(input.attributes('aria-activedescendant')).toContain('string-new')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(input.attributes('aria-expanded')).toBe('false')
  expect(f.model.value).toBe('')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('new')
})
