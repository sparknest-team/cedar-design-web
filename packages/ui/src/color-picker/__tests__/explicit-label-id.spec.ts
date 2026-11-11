import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form from '../../form/Form.vue'
import FormItem from '../../form/FormItem.vue'
import Color from '../../color'
import ColorPicker from '..'

for (const component of [Color, ColorPicker]) {
  test(`${component.name} keeps the explicit label associated with the trigger`, async () => {
    const id = ref('accent')
    const name = ref<string | undefined>()
    const wrapper = mount(Form, {
      attachTo: document.body,
      props: { editMode: 'direct', model: { color: '#ffffff' } },
      slots: { default: () => h(FormItem, { field: 'color', label: 'Accent color', labelAttrs: { for: id.value } }, () =>
        h(component, { id: id.value, 'aria-label': name.value, hideTrigger: false, editMode: 'direct', triggerProps: { open: true, popupContainer: false } })) },
    })
    try {
      const label = () => wrapper.get('label').element as HTMLLabelElement
      const button = () => wrapper.get('button.c-color-picker').element as HTMLButtonElement
      expect(label().control).toBe(button())
      expect(button().getAttribute('aria-labelledby')?.split(/\s+/)[0]).toBe(label().id)
      expect(wrapper.element.querySelectorAll('[id="accent"]')).toHaveLength(1)
      id.value = 'updated'
      await nextTick()
      expect(label().control).toBe(button())
      expect(wrapper.element.querySelectorAll('[id="updated"]')).toHaveLength(1)
      expect(wrapper.element.querySelectorAll('[id="accent"]')).toHaveLength(0)
      name.value = 'Custom name'
      await nextTick()
      expect(button().getAttribute('aria-label')).toBe('Custom name')
      expect(button().hasAttribute('aria-labelledby')).toBe(false)
    } finally { wrapper.unmount() }
  })
}

test('moving between inline and trigger modes keeps the caller id unique', async () => {
  const wrapper = mount(ColorPicker, { attachTo: document.body, props: { hideTrigger: true }, attrs: { id: 'color-field' } })
  try {
    expect(wrapper.get('.c-color-picker-panel').attributes('id')).toBe('color-field')
    await wrapper.setProps({ hideTrigger: false })
    expect(wrapper.get('button.c-color-picker').attributes('id')).toBe('color-field')
    expect(document.querySelectorAll('[id="color-field"]')).toHaveLength(1)
    await wrapper.setProps({ hideTrigger: true })
    expect(wrapper.get('.c-color-picker-panel').attributes('id')).toBe('color-field')
  } finally { wrapper.unmount() }
})
