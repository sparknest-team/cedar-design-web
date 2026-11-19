import { h, nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form from '../../form/Form.vue'
import FormItem from '../../form/FormItem.vue'
import Transfer from '..'

test('the transfer owns the form error without applying it to its internal controls', async () => {
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { value: [] } },
    slots: { default: () => h(FormItem, { field: 'value', label: 'Items' }, () => h(Transfer, { editMode: 'direct', data: [{ label: 'A', value: 'a' }], 'aria-describedby': 'external' })) },
  })
  try {
    ;(wrapper.vm as any).setFields({ value: { message: 'Choose items' } })
    await nextTick()
    const id = wrapper.get('[role=alert]').element.closest('[id]')!.id
    const group = wrapper.get('.c-transfer')
    expect(group.attributes('role')).toBe('group')
    expect(group.attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', id])
    expect(group.findAll('input').length).toBeGreaterThan(0)
    for (const input of group.findAll('input')) expect(input.attributes('aria-describedby')?.split(/\s+/) ?? []).not.toContain(id)
  } finally { wrapper.unmount() }
})

test('explicit transfer role and description remain owned by the caller', () => {
  const wrapper = mount(Transfer, { props: { data: [] }, attrs: { role: 'region', 'aria-describedby': 'external' } })
  try {
    expect(wrapper.get('.c-transfer').attributes('role')).toBe('region')
    expect(wrapper.get('.c-transfer').attributes('aria-describedby')).toBe('external')
  } finally { wrapper.unmount() }
})

test('the transfer group can use its FormItem label without overriding explicit names or targets', async () => {
  const labelAttrs = ref<Record<string, string>>({})
  const supplied = ref<Record<string, string>>({})
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { value: [] } },
    slots: { default: () => h(FormItem, { field: 'value', label: 'Items', labelAttrs: labelAttrs.value }, () =>
      h(Transfer, { editMode: 'direct', data: [], ...supplied.value })) },
  })
  try {
    const group = () => wrapper.get('.c-transfer')
    const label = () => wrapper.get('label')
    expect(group().attributes('role')).toBe('group')
    expect(group().attributes('aria-labelledby')).toBe(label().attributes('id'))
    supplied.value = { 'aria-label': 'My items' }
    await nextTick()
    expect(group().attributes('aria-label')).toBe('My items')
    expect(group().attributes('aria-labelledby')).toBeUndefined()
    supplied.value = { 'aria-labelledby': 'custom-label' }
    await nextTick()
    expect(group().attributes('aria-labelledby')).toBe('custom-label')
    supplied.value = {}
    labelAttrs.value = { for: 'other-control' }
    await nextTick()
    expect(group().attributes('aria-labelledby')).toBeUndefined()
    labelAttrs.value = {}
    supplied.value = { role: 'presentation' }
    await nextTick()
    expect(group().attributes('role')).toBe('presentation')
    expect(group().attributes('aria-labelledby')).toBeUndefined()
  } finally { wrapper.unmount() }
})

test('a mixed native input and transfer follows explicit label target changes', async () => {
  const mixed = ref(true)
  const wrapper = mount(FormItem, {
    props: { label: 'Items', editMode: 'direct' },
    slots: { default: () => [mixed.value ? h('input', { id: 'other' }) : null, h(Transfer, { data: [], editMode: 'direct' })] },
  })
  try {
    const group = () => wrapper.get('.c-transfer')
    const labelId = wrapper.get('label').attributes('id')
    await flushPromises()
    expect(group().attributes('aria-labelledby')).toBeUndefined()
    expect(wrapper.get('[role=group]').attributes('aria-labelledby')).toBe(labelId)
    await wrapper.setProps({ labelAttrs: { for: 'other' } })
    expect(wrapper.get('label').attributes('for')).toBe('other')
    expect(group().attributes('aria-labelledby')).toBeUndefined()
    await wrapper.setProps({ labelAttrs: {} })
    await flushPromises()
    expect(group().attributes('aria-labelledby')).toBeUndefined()
    expect(wrapper.get('[role=group]').attributes('aria-labelledby')).toBe(labelId)
    mixed.value = false
    await flushPromises()
    expect(group().attributes('aria-labelledby')).toBe(labelId)
  } finally { wrapper.unmount() }
})
