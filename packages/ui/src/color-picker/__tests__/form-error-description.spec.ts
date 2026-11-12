import { h, nextTick, ref } from 'vue'
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

test('custom trigger can associate the external description and dynamic form error', async () => {
  const wrapper = mount(Form, {
    props: { model: { color: '#ffffff' } },
    slots: { default: () => h(FormItem, { field: 'color', label: 'Color' }, () => h(ColorPicker,
      { hideTrigger: false, 'aria-describedby': 'external' },
      { default: (scope: any) => h('button', { type: 'button', 'data-custom-trigger': '', 'aria-describedby': scope?.describedBy }, 'Pick color') },
    )) },
  })
  try {
    const trigger = () => wrapper.get('[data-custom-trigger]')
    expect(trigger().attributes('aria-describedby')).toBe('external')
    ;(wrapper.vm as any).setFields({ color: { message: 'Invalid color' } })
    await nextTick()
    const id = wrapper.get('[role=alert]').element.closest('[id]')!.id
    expect(trigger().attributes('aria-describedby')?.split(/\s+/)).toEqual(['external', id])
    ;(wrapper.vm as any).clearValidate('color')
    await nextTick()
    expect(trigger().attributes('aria-describedby')).toBe('external')
  } finally { wrapper.unmount() }
})


for (const component of [ColorPicker, Color]) {
  test(`${component.name} trigger combines its FormItem label and action without overriding caller names`, async () => {
    const attrs = ref<Record<string, string>>({})
    const labelAttrs = ref<Record<string, string>>({})
    const wrapper = mount(Form, {
      props: { editMode: 'direct', model: { color: '#ffffff' } },
      slots: { default: () => h(FormItem, { field: 'color', label: 'Accent color', labelAttrs: labelAttrs.value }, () =>
        h(component, { hideTrigger: false, editMode: 'direct', ...attrs.value })) },
    })
    try {
      const button = () => wrapper.get('button.c-color-picker')
      const labelId = wrapper.get('label').attributes('id')
      const names = button().attributes('aria-labelledby')?.split(/\s+/) ?? []
      expect(names[0]).toBe(labelId)
      expect(names).toHaveLength(2)
      expect(wrapper.get(`[id="${names[1]}"]`).text()).toBeTruthy()
      attrs.value = { 'aria-label': 'Custom color' }
      await nextTick()
      expect(button().attributes('aria-label')).toBe('Custom color')
      expect(button().attributes('aria-labelledby')).toBeUndefined()
      attrs.value = { 'aria-labelledby': 'custom-label' }
      await nextTick()
      expect(button().attributes('aria-labelledby')).toBe('custom-label')
      attrs.value = {}
      labelAttrs.value = { for: 'other-field' }
      await nextTick()
      expect(button().attributes('aria-labelledby')).toBeUndefined()
    } finally { wrapper.unmount() }
  })
}

test('inline color panel uses its FormItem label without overriding explicit names, roles or targets', async () => {
  const attrs = ref<Record<string, string>>({})
  const labelAttrs = ref<Record<string, string>>({})
  const wrapper = mount(Form, {
    props: { model: { color: '#ffffff' } },
    slots: { default: () => h(FormItem, { field: 'color', label: 'Accent color', labelAttrs: labelAttrs.value }, () =>
      h(ColorPicker, { hideTrigger: true, ...attrs.value })) },
  })
  try {
    const panel = () => wrapper.get('.c-color-picker-panel')
    const labelId = wrapper.get('label').attributes('id')
    expect(panel().attributes('role')).toBe('group')
    expect(panel().attributes('aria-labelledby')).toBe(labelId)
    attrs.value = { 'aria-label': 'Custom panel' }
    await nextTick()
    expect(panel().attributes('aria-label')).toBe('Custom panel')
    expect(panel().attributes('aria-labelledby')).toBeUndefined()
    attrs.value = { 'aria-labelledby': 'external-label' }
    await nextTick()
    expect(panel().attributes('aria-labelledby')).toBe('external-label')
    attrs.value = { role: 'presentation' }
    await nextTick()
    expect(panel().attributes('role')).toBe('presentation')
    expect(panel().attributes('aria-labelledby')).toBeUndefined()
    attrs.value = {}
    labelAttrs.value = { for: 'other-field' }
    await nextTick()
    expect(panel().attributes('aria-labelledby')).toBeUndefined()
  } finally { wrapper.unmount() }
})

test('custom trigger owns its label target while the popup has a distinct id', async () => {
  const wrapper = mount(Form, {
    attachTo: document.body,
    props: { model: { color: '#ffffff' } },
    slots: { default: () => h(FormItem, { field: 'color', label: 'Color', labelAttrs: { for: 'pick-color' } }, () => h(ColorPicker,
      { hideTrigger: false, id: 'color-popup', triggerProps: { popupContainer: false, animationName: '' } },
      { default: () => h('button', { id: 'pick-color', type: 'button' }, 'Pick color') },
    )) },
  })
  try {
    await wrapper.get('button#pick-color').trigger('click')
    await nextTick()
    expect(document.querySelectorAll('#pick-color')).toHaveLength(1)
    expect(document.querySelectorAll('#color-popup')).toHaveLength(1)
    expect((wrapper.get('label').element as HTMLLabelElement).control).toBe(wrapper.get('button#pick-color').element)
  } finally { wrapper.unmount() }
})
