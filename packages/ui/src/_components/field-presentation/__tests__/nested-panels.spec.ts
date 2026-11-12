import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import Cascader from '../../../cascader'
import DateField from '../../../date'
import DateRange from '../../../date-range'
import Input from '../../../input/input.vue'
import Select from '../../../select/select'
import Time from '../../../time'
import TimeRange from '../../../time-range'
import Trigger from '../../../trigger'
import EditorPanel from '../EditorPanel.vue'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  vi.restoreAllMocks()
})
const fields = [
  [
    'Select',
    Select,
    'old',
    {
      options: [
        { value: 'old', label: 'Old' },
        { value: 'new', label: 'New' },
      ],
    },
  ],
  [
    'Cascader',
    Cascader,
    'old',
    {
      options: [
        {
          value: 'parent',
          label: 'Parent',
          children: [
            { value: 'old', label: 'Old' },
            { value: 'new', label: 'New' },
          ],
        },
      ],
    },
  ],
  ['Date', DateField, '2026-10-19', {}],
  ['DateRange', DateRange, ['2026-10-19', '2026-10-22'], {}],
  ['Time', Time, '09:30:00', {}],
  ['TimeRange', TimeRange, ['09:30:00', '18:00:00'], {}],
] as const
for (const [name, Field, value, extra] of fields) {
  test(`${name}: owned panel clicks never save; first Escape closes the panel, second cancels editing`, async () => {
    const owner = mount(Field as any, {
      attachTo: document.body,
      props: { ...('needConfirm' in ((Field as any).props ?? {}) ? { needConfirm: true } : {}),  editMode: 'click', modelValue: value, ...extra },
    })
    owners.push(owner)
    await owner.get('[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    const panel = () => owner.getComponent(EditorPanel)
    const openPanels = () => owner.findAllComponents(Trigger).filter((trigger) => trigger.props('open') === true)
    if (!openPanels().length) {
      await panel().get('input').trigger('click')
      await flushPromises()
    }
    expect(openPanels().length).toBeGreaterThan(0)
    const popup = document.querySelector<HTMLElement>('[trigger-placement]')!
    expect(popup).toBeTruthy()
    popup.click()
    await flushPromises()
    expect(owner.findComponent(EditorPanel).exists()).toBe(true)
    expect(owner.emitted('update:modelValue')).toBeUndefined()
    const popupTarget = popup.querySelector<HTMLElement>('[tabindex="0"]') ?? panel().get('input').element
    popupTarget.focus()
    popupTarget.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await flushPromises()
    expect(owner.findComponent(EditorPanel).exists()).toBe(true)
    expect(openPanels()).toHaveLength(0)
    expect(document.activeElement).toBe(panel().get('input').element)
    expect(owner.emitted('update:modelValue')).toBeUndefined()
    await panel().get('input').trigger('keydown', { key: 'Escape' })
    await flushPromises()
    expect(owner.findComponent(EditorPanel).exists()).toBe(false)
    expect(owner.emitted('update:modelValue')).toBeUndefined()
  })
}
test('Select Enter selects a candidate without saving; the next Enter saves after its panel closes', async () => {
  const owner = mount(Select, {
    attachTo: document.body,
    props: { needConfirm: true,
      editMode: 'click',
      modelValue: 'old',
      options: [
        { value: 'old', label: 'Old' },
        { value: 'new', label: 'New' },
      ],
    },
  })
  owners.push(owner)
  await owner.get('[aria-haspopup=dialog]').trigger('click')
  await flushPromises()
  const input = owner.getComponent(EditorPanel).get('input')
  const candidate = [...document.querySelectorAll<HTMLElement>('[role=option]')].find(
    (element) => element.textContent?.trim() === 'New',
  )!
  candidate.dispatchEvent(new MouseEvent('mouseenter'))
  await input.trigger('keydown', { key: 'Enter' })
  await flushPromises()
  expect(owner.emitted('update:modelValue')).toBeUndefined()
  expect(owner.findComponent(EditorPanel).exists()).toBe(true)
  await input.trigger('keydown', { key: 'Enter' })
  await flushPromises()
  expect(owner.findComponent(EditorPanel).exists()).toBe(false)
  expect(owner.emitted('update:modelValue')).toEqual([['new']])
})
test('an edit icon bypasses dblclick activation, and disabled/readonly/pretty fields expose no edit action', async () => {
  const owner = mount(Input, {
    attachTo: document.body,
    props: { editMode: 'dblclick', modelValue: 'old', 'aria-label': 'Name' },
  })
  owners.push(owner)
  expect(owner.get('.c-field-presentation__reference-group').attributes('title')).toBe('双击编辑')
  expect(owner.find('button button').exists()).toBe(false)
  await owner.get('.c-field-presentation__edit').trigger('click')
  await flushPromises()
  expect(owner.findComponent(EditorPanel).exists()).toBe(true)
  await owner.getComponent(EditorPanel).get('input').trigger('keydown', { key: 'Escape' })
  await flushPromises()
  for (const prop of ['disabled', 'readonly', 'readPretty']) {
    await owner.setProps({ [prop]: true })
    expect(owner.find('.c-field-presentation__edit').exists()).toBe(false)
    await owner.setProps({ [prop]: false })
  }
})

test.each([
  ['Date', DateField, '2026-10-19', '.c-date-field-panel [role=button]', '21', '2026-10-21'],
  ['Time', Time, '09:30:00', '[role=listbox][aria-label=Hours] [role=option]', '10', '10:30:00'],
] as const)(
  '%s: Enter in a native option updates only the draft, then Enter in the closed control saves',
  async (_name, Field, value, selector, label, selected) => {
    const owner = mount(Field as any, { attachTo: document.body, props: { ...('needConfirm' in ((Field as any).props ?? {}) ? { needConfirm: true } : {}),  editMode: 'click', modelValue: value } })
    owners.push(owner)
    await owner.get('[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    const input = owner.getComponent(EditorPanel).get('input')
    await input.trigger('click')
    await flushPromises()
    const option = [...document.querySelectorAll<HTMLElement>(selector)].find(
      (node) => node.textContent?.trim() === label,
    )!
    expect(option).toBeTruthy()
    option.focus()
    option.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await flushPromises()
    expect(owner.findComponent(EditorPanel).exists()).toBe(true)
    expect(owner.emitted('update:modelValue')).toBeUndefined()
    expect(input.element.value).toBe(selected)
    await input.trigger('keydown', { key: 'Enter' })
    await flushPromises()
    expect(owner.findComponent(EditorPanel).exists()).toBe(false)
    expect(owner.emitted('update:modelValue')).toEqual([[selected]])
  },
)

test('closing a multiple Select panel with Escape preserves its selected draft for the outer Enter save', async () => {
  const owner = mount(Select, {
    attachTo: document.body,
    props: { needConfirm: true,
      editMode: 'click',
      multiple: true,
      modelValue: ['old'],
      options: [
        { value: 'old', label: 'Old' },
        { value: 'new', label: 'New' },
      ],
    },
  })
  owners.push(owner)
  await owner.get('[aria-haspopup=dialog]').trigger('click')
  await flushPromises()
  const input = owner.getComponent(EditorPanel).get('input')
  const candidate = [...document.querySelectorAll<HTMLElement>('[role=option]')].find(
    (node) => node.textContent?.trim() === 'New',
  )!
  candidate.click()
  await flushPromises()
  expect(owner.emitted('update:modelValue')).toBeUndefined()
  await input.trigger('keydown', { key: 'Escape' })
  await flushPromises()
  expect(owner.findComponent(EditorPanel).exists()).toBe(true)
  expect(input.attributes('aria-expanded')).toBe('false')
  await input.trigger('keydown', { key: 'Enter' })
  await flushPromises()
  expect(owner.emitted('update:modelValue')).toEqual([[['old', 'new']]])
})
