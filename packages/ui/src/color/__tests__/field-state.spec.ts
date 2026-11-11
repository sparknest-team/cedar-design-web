import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { expect, test } from 'vitest'
import Color from '..'
import ColorPicker from '../../color-picker'
import Form from '../../form'

test('Color forwards inherited disabled and readonly state to the picker', async () => {
  const w = mount(Form, { props: { model: {}, disabled: true }, slots: { default: () => [h(Color, { id: 'inherited' }), h(Color, { id: 'override', disabled: false })] } })
  try {
    const pickers = w.findAllComponents(ColorPicker)
    expect(pickers[0].props('disabled')).toBe(true)
    expect(pickers[1].props('disabled')).toBe(false)
    await w.setProps({ disabled: false, readonly: true })
    expect(pickers[0].props('disabled')).toBe(true)
    expect(pickers[1].props('disabled')).toBe(true)
  } finally { w.unmount() }
})

test('explicit readonly false overrides the form readonly state', () => {
  const w = mount(Form, { props: { model: {}, readonly: true }, slots: { default: () => h(Color, { readonly: false }) } })
  try { expect(w.findComponent(ColorPicker).props('disabled')).toBe(false) } finally { w.unmount() }
})
