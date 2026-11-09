import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form from '../../form/Form.vue'
import FormItem from '../../form/FormItem.vue'
import ColorPicker from '..'
import Color from '../../color'

test.each([false, true])('color picker associates the form error with its visible target (inline=%s)', async inline => {
  const wrapper = mount(Form, {
    props: { model: { color: '#ffffff' } },
    slots: { default: () => h(FormItem, { field: 'color', label: 'Color' }, () => h(ColorPicker, { hideTrigger: inline, 'aria-describedby': 'external' })) },
  })
  try {
    ;(wrapper.vm as any).setFields({ color: { message: 'Invalid color' } })
    await nextTick()
    const id = wrapper.get('[role=alert]').element.closest('[id]')!.id
    const target = wrapper.get(inline ? '.c-color-picker-panel[role=group]' : 'button.c-color-picker')
    expect(target.attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', id])
    if (inline) for (const input of target.findAll('input')) expect(input.attributes('aria-describedby')?.split(/\s+/) ?? []).not.toContain(id)
  } finally { wrapper.unmount() }
})

test('inline panel preserves the caller role and class', () => {
  const wrapper = mount(ColorPicker, { props: { hideTrigger: true }, attrs: { role: 'region', class: 'custom-color', 'aria-describedby': 'external' } })
  try {
    const panel = wrapper.get('.c-color-picker-panel')
    expect(panel.classes()).toContain('custom-color')
    expect(panel.attributes('role')).toBe('region')
    expect(panel.attributes('aria-describedby')).toBe('external')
  } finally { wrapper.unmount() }
})

test('Color field forwards the form error to its native trigger', async () => {
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { color: '#ffffff' } },
    slots: { default: () => h(FormItem, { field: 'color', label: 'Color' }, () => h(Color, { editMode: 'direct', 'aria-describedby': 'external' })) },
  })
  try {
    ;(wrapper.vm as any).setFields({ color: { message: 'Invalid color' } })
    await nextTick()
    const id = wrapper.get('[role=alert]').element.closest('[id]')!.id
    expect(wrapper.get('button.c-color-picker').attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', id])
  } finally { wrapper.unmount() }
})
