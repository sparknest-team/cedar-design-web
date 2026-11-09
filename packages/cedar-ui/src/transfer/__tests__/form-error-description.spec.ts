import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
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
