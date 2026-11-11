import { expect, test } from 'vitest'
import { formatInputToRgb } from '../../_utils/color'
import { flushPromises, mount } from '@vue/test-utils'
import { h, ref } from 'vue'
import ColorPicker from '..'
import ConfigProvider from '../../config-provider'
import enUS from '../../locale/lang/en-us'

test('RGB percentages and numeric channels are converted and clamped', () => {
  expect(formatInputToRgb('rgb(100%, 50%, 0%)')).toEqual({ r: 255, g: 127.5, b: 0 })
  expect(formatInputToRgb('rgba(300, -20, 12.5, 150%)')).toEqual({ r: 255, g: 0, b: 12.5, a: 1 })
  expect(formatInputToRgb('rgba(0%, 0%, 100%, -10%)')).toEqual({ r: 0, g: 0, b: 255, a: 0 })
})

test('invalid color strings are rejected instead of partially matching', () => {
  for (const value of ['prefix rgb(1, 2, 3)', 'rgb(1, 2, 3) suffix', 'rgb(1, 2, 3', 'rgb(1, 2)', 'rgba(1, 2, 3, 0.5', 'rgb((1,2,3)', 'rgb(1|2|3)', 'rgb(1,,2,3)']) {
    expect(formatInputToRgb(value)).toBe(false)
  }
  expect(formatInputToRgb(' RGB(100%, 0%, 0%) ')).toEqual({ r: 255, g: 0, b: 0 })
})

test('history colors restore RGB and alpha together and invalid entries do not change the value', async () => {
  const w = mount(ColorPicker, { props: { defaultValue: 'rgba(0, 0, 255, 0.5)', format: 'rgb', showHistory: true, historyColors: ['rgba(0, 255, 0, 0.25)', '#0000FF80', 'invalid'] } })
  try {
    const buttons = w.findAll('button[aria-label^="Select color"]')
    await buttons[0].trigger('click')
    expect(w.emitted('change')?.at(-1)).toEqual(['rgba(0, 255, 0, 0.25)'])
    await buttons[1].trigger('click')
    expect(w.emitted('change')?.at(-1)).toEqual(['rgba(0, 0, 255, 0.50)'])
    const count = w.emitted('change')?.length
    await buttons[2].trigger('click')
    expect(w.emitted('change')?.length).toBe(count)
  } finally { w.unmount() }
})

test('external model updates are silent and rejected proposals restore the authoritative color', async () => {
  const w = mount(ColorPicker, { props: { modelValue: '#FF0000', showHistory: true, historyColors: ['#00FF00'] } })
  try {
    await w.setProps({ modelValue: '#0000FF' })
    expect(w.emitted('change')).toBeUndefined()
    await w.get('button[aria-label="Select color #00FF00"]').trigger('click')
    expect(w.emitted('change')?.at(-1)).toEqual(['#00FF00'])
    expect(w.get('.c-color-picker-input-hex input').element.value).toBe('0000FF')
  } finally { w.unmount() }
})

test('default value changes after mount do not reset the picker or notify', async () => {
  const w = mount(ColorPicker, { props: { defaultValue: '#FF0000' } })
  try {
    await w.setProps({ defaultValue: '#0000FF' })
    expect(w.get('.c-color-picker-input-hex input').element.value).toBe('FF0000')
    expect(w.emitted('change')).toBeUndefined()
  } finally { w.unmount() }
})

test('accepted values remain authoritative and an achromatic hue selection is retained', async () => {
  const value = ref('#ffffff')
  const w = mount({ render: () => h(ColorPicker, { modelValue: value.value, showHistory: true, historyColors: ['#00FF00'], 'onUpdate:modelValue': next => { value.value = next } }) })
  try {
    const hue = w.get('[role="slider"][aria-label="色相"]')
    await hue.trigger('keydown', { key: 'ArrowRight' })
    await flushPromises()
    expect(hue.attributes('aria-valuenow')).toBe('4')
    await w.get('button[aria-label="Select color #00FF00"]').trigger('click')
    await flushPromises()
    expect(value.value).toBe('#00FF00')
    expect(w.get('.c-color-picker-input-hex input').element.value).toBe('00FF00')
  } finally { w.unmount() }
})

test('default trigger is a named native button and respects disabled', async () => {
  const w = mount(ColorPicker, { props: { hideTrigger: false }, attrs: { 'aria-label': 'Brand color' } })
  try {
    const button = w.get('button.c-color-picker')
    expect(button.attributes('type')).toBe('button')
    expect(button.attributes('aria-label')).toBe('Brand color')
    await w.setProps({ disabled: true })
    expect(button.attributes('disabled')).toBeDefined()
  } finally { w.unmount() }
})

test('format controls output while the panel keeps its independently selected input mode', async () => {
  const w = mount(ColorPicker, { props: { defaultValue: '#FF0000', format: 'hex', showHistory: true, historyColors: ['#00FF00'] } })
  try {
    expect(w.find('.c-color-picker-input-hex').exists()).toBe(true)
    await w.setProps({ format: 'rgb' })
    expect(w.find('.c-color-picker-input-hex').exists()).toBe(true)
    expect(w.emitted('change')).toBeUndefined()
    await w.get('button[aria-label="Select color #00FF00"]').trigger('click')
    expect(w.emitted('change')?.at(-1)).toEqual(['rgb(0, 255, 0)'])
  } finally { w.unmount() }
})

test('disabled panel removes interactive controls from tab order and disables its format selector', () => {
  const w = mount(ColorPicker, { props: { defaultValue: '#0000FF', disabled: true } })
  try {
    expect(w.get('.c-color-picker-panel').attributes('aria-disabled')).toBe('true')
    for (const item of w.findAll('[role="slider"], [role="application"]')) {
      expect(item.attributes('tabindex')).toBe('-1')
      expect(item.attributes('aria-disabled')).toBe('true')
    }
    expect(w.get('.c-color-picker-select input').attributes('disabled')).toBeDefined()
  } finally { w.unmount() }
})

test('hue slider supports Home and End', async () => {
  const w = mount(ColorPicker, { props: { defaultValue: '#0000FF' } })
  try {
    const hue = w.get('[role="slider"][aria-label="色相"]')
    await hue.trigger('keydown', { key: 'Home' })
    expect(hue.attributes('aria-valuenow')).toBe('0')
    await hue.trigger('keydown', { key: 'End' })
    expect(hue.attributes('aria-valuenow')).toBe('360')
  } finally { w.unmount() }
})

test('color channels expose localized accessible names', () => {
  const zh = mount(ColorPicker, { props: { format: 'rgb' } })
  const en = mount(ConfigProvider, { props: { locale: enUS }, slots: { default: () => h(ColorPicker, { format: 'rgb' }) } })
  try {
    for (const name of ['色相', '不透明度', '红色', '绿色', '蓝色']) expect(zh.find(`[aria-label="${name}"]`).exists()).toBe(true)
    for (const name of ['Hue', 'Opacity', 'Red', 'Green', 'Blue']) expect(en.find(`[aria-label="${name}"]`).exists()).toBe(true)
  } finally { zh.unmount(); en.unmount() }
})
