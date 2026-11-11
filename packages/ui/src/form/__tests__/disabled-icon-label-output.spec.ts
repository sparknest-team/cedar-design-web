import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form from '../Form.vue'
import FormItem from '../FormItem.vue'
import Select from '../../select'
import FieldReference from '../../_components/field-presentation/FieldReference.vue'

test.each(['disabled', 'readonly'] as const)('explicit Form label addresses the %s icon-trigger value', async (state) => {
  const active = ref(true)
  const wrapper = mount(Form, {
    attachTo: document.body,
    props: { model: { value: 'one' } },
    slots: { default: () => h(FormItem, { field: 'value', label: 'Choose', labelAttrs: { for: 'select-value' } }, () => h(Select, {
      id: 'select-value', editMode: 'click', openTriggerTarget: 'icon', modelValue: 'one',
      options: [{ label: 'Selected value', value: 'one' }], [state]: active.value,
    })) },
  })
  try {
    const label = wrapper.get('label').element as HTMLLabelElement
    const value = wrapper.get('[class*="reference--icon"]').element as HTMLElement
    expect(label.control).toBe(value)
    expect(value.tagName).toBe('OUTPUT')
    expect(value.textContent?.trim()).toBe('Selected value')
    expect(value.getAttribute('role')).toBe('textbox')
    expect(value.getAttribute('aria-readonly')).toBe('true')
    expect(value.getAttribute('aria-disabled')).toBe(state === 'disabled' ? 'true' : null)
    expect(wrapper.findAll('#select-value')).toHaveLength(1)
    expect(wrapper.find('button[id="select-value"]').exists()).toBe(false)
    active.value = false
    await nextTick()
    const edit = wrapper.get('button[id="select-value"]').element
    expect(label.control).toBe(edit)
    expect(wrapper.findAll('#select-value')).toHaveLength(1)
    active.value = true
    await nextTick()
    expect(label.control).toBe(wrapper.get('[class*="reference--icon"]').element)
    expect(wrapper.findAll('#select-value')).toHaveLength(1)
  } finally { wrapper.unmount() }
})

test('preserves an explicit role and description on a disabled icon value', () => {
  const wrapper = mount(FieldReference, {
    props: { id: 'custom-value', openTriggerTarget: 'icon', disabled: true, unavailable: true, text: 'Selected value' },
    attrs: { role: 'note', 'aria-describedby': 'custom-description' },
  })
  try {
    const value = wrapper.get('#custom-value')
    expect(value.attributes('role')).toBe('note')
    expect(value.attributes('aria-readonly')).toBeUndefined()
    expect(value.attributes('aria-disabled')).toBe('true')
    expect(value.attributes('aria-describedby')).toContain('custom-description')
  } finally { wrapper.unmount() }
})
