import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TreeSelect from '..'

for (const controlled of [false, true])
  test(`refreshes ${controlled ? 'controlled' : 'local'} labels when data arrives`, async () => {
    const wrapper = mount(TreeSelect, {
      props: { editMode: 'direct', ...(controlled ? { modelValue: 'a' } : { defaultValue: 'a' }), data: [] },
    })
    try {
      await wrapper.setProps({ data: [{ value: 'a', label: 'Alpha' }] })
      await flushPromises()
      expect(wrapper.text()).toContain('Alpha')
      await wrapper.setProps({ data: [{ value: 'a', label: 'Renamed' }] })
      expect(wrapper.text()).toContain('Renamed')
      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      expect(wrapper.emitted('change')).toBeUndefined()
    } finally {
      wrapper.unmount()
    }
  })
for (const controlled of [false, true])
  test(`preserves explicit ${controlled ? 'controlled' : 'local'} label`, async () => {
    const value = { value: 'a', label: 'Chosen' }
    const wrapper = mount(TreeSelect, {
      props: {
        editMode: 'direct',
        labelInValue: true,
        ...(controlled ? { modelValue: value } : { defaultValue: value }),
        data: [],
      },
    })
    try {
      await wrapper.setProps({ data: [{ value: 'a', label: 'Alpha' }] })
      expect(wrapper.text()).toContain('Chosen')
    } finally {
      wrapper.unmount()
    }
  })
