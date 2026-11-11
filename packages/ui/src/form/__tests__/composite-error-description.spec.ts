import { h, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form from '../Form.vue'
import FormItem from '../FormItem.vue'
import VerificationCode from '../../verification-code'
import Upload from '../../upload'
import Search from '../../search'
import PeopleSelect from '../../people-select'

async function setError(wrapper: any) {
  wrapper.vm.setFields({ value: { message: 'Invalid value' } })
  await nextTick()
  return wrapper.get('[role=alert]').element.closest('[id]').id as string
}

test('verification code describes the group without repeating the error on every digit', async () => {
  const wrapper = mount(Form, { props: { editMode: 'direct', model: { value: '' } }, slots: { default: () => h(FormItem, { field: 'value', label: 'Code' }, () => h(VerificationCode, { editMode: 'direct', 'aria-describedby': 'external' })) } })
  try {
    const errorId = await setError(wrapper)
    const group = wrapper.get('[role=group]')
    expect(group.attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', errorId])
    expect(wrapper.findAll('input').length).toBeGreaterThan(1)
    for (const input of wrapper.findAll('input')) expect(input.attributes('aria-describedby')?.split(/\s+/) ?? []).not.toContain(errorId)
    ;(wrapper.vm as any).clearValidate()
    await nextTick()
    expect(group.attributes('aria-describedby')).toBe('external')
  } finally { wrapper.unmount() }
})

test.each([false, true])('upload describes its trigger (custom=%s)', async custom => {
  const wrapper = mount(Form, { attachTo: document.body, props: { editMode: 'direct', model: { value: [] } }, slots: { default: () => h(FormItem, { field: 'value', label: 'File' }, () => h(Upload, { editMode: 'direct', 'aria-describedby': 'external' }, custom ? { trigger: ({ describedBy }: { describedBy: string | undefined }) => h('button', { type: 'button', 'aria-describedby': describedBy }, 'Choose') } : {})) } })
  try {
    const errorId = await setError(wrapper)
    await nextTick()
    const trigger = wrapper.get(custom ? '[role=group]' : '[role=button]')
    expect(trigger.attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', errorId])
    if (custom) expect(trigger.get('button').attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', errorId])
    ;(wrapper.vm as any).clearValidate()
    await nextTick()
    expect(trigger.attributes('aria-describedby')).toBe('external')
    if (custom) expect(trigger.get('button').attributes('aria-describedby')).toBe('external')
  } finally { wrapper.unmount() }
})


test.each([
  ['search', Search, { inputAttrs: { 'aria-describedby': 'external' } }],
  ['people select', PeopleSelect, { options: [{ label: 'A', value: 'a' }], 'aria-describedby': 'external' }],
] as const)('%s reuses error description on its editable input', async (_name, component, extra) => {
  const wrapper = mount(Form, { props: { editMode: 'direct', model: { value: '' } }, slots: { default: () => h(FormItem, { field: 'value', label: 'Value' }, () => h(component as any, { ...extra, editMode: 'direct' })) } })
  try {
    const errorId = await setError(wrapper)
    const input = wrapper.get('input')
    expect(input.attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', errorId])
  } finally { wrapper.unmount() }
})


test('connects Segmented errors to the group without repeating them on options', async () => {
  const { default: Segmented } = await import('../../segmented/segmented')
  const wrapper = mount(Form, { props: { editMode: 'direct', model: { value: 'a' } }, slots: { default: () => h(FormItem, { field: 'value', label: 'Choice' }, () => h(Segmented, { options: ['a', 'b'], 'aria-describedby': 'external', class: 'custom' })) } })
  try {
    const group = wrapper.get('[role=radiogroup]')
    expect(group.attributes('aria-describedby')).toBe('external')
    const errorId = await setError(wrapper)
    expect(group.attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', errorId])
    expect(group.classes()).toContain('custom')
    expect(wrapper.findAll('input').every(input => !input.attributes('aria-describedby'))).toBe(true)
    ;(wrapper.vm as any).clearValidate()
    await nextTick()
    expect(group.attributes('aria-describedby')).toBe('external')
  } finally { wrapper.unmount() }
})


test.each([
  ['input tag', () => import('../../input-tag')],
  ['tree select', () => import('../../tree-select')],
  ['mention', () => import('../../mention')],
] as const)('%s attaches a form error to its input and retains explicit description', async (_name, load) => {
  const component = (await load()).default
  const wrapper = mount(Form, { props: { editMode: 'direct', model: { value: undefined } }, slots: { default: () => h(FormItem, { field: 'value', label: 'Value' }, () => h(component as any, { editMode: 'direct', 'aria-describedby': 'external' })) } })
  try {
    const input = wrapper.get('input,textarea')
    expect(input.attributes('aria-describedby')).toBe('external')
    const errorId = await setError(wrapper)
    expect(input.attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', errorId])
    ;(wrapper.vm as any).clearValidate()
    await nextTick()
    expect(input.attributes('aria-describedby')).toBe('external')
  } finally { wrapper.unmount() }
})


test('input tag retains the error through deferred editing and removes it in read mode', async () => {
  const { default: InputTag } = await import('../../input-tag')
  const wrapper = mount(Form, { attachTo: document.body, props: { editMode: 'click', model: { value: ['one'] } }, slots: { default: () => h(FormItem, { field: 'value', label: 'Tags' }, () => h(InputTag, { editMode: 'click', 'aria-describedby': 'external' })) } })
  try {
    const errorId = await setError(wrapper)
    const button = wrapper.findAll('button').find(node => node.attributes('aria-describedby')?.split(/\s+/).includes(errorId))
    expect(button).toBeTruthy()
    expect(button!.attributes('aria-describedby')?.split(/\s+/)).toContain('external')
    await button!.trigger('click')
    await flushPromises()
    const input = document.body.querySelector('input')
    expect(input?.getAttribute('aria-describedby')?.split(/\s+/)).toEqual(['external', errorId])
    await wrapper.setProps({ readPretty: true })
    expect(wrapper.find('[role=alert]').exists()).toBe(false)
    expect(Array.from(document.body.querySelectorAll('[aria-describedby]')).every(node => !node.getAttribute('aria-describedby')?.split(/\s+/).includes(errorId))).toBe(true)
  } finally { wrapper.unmount() }
})
