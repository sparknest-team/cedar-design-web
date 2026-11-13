import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Cascader } from '../index'

describe('Cascader', () => {
  test('uses the shared field decorator and renders the selected option', async () => {
    const wrapper = mount(Cascader, {
      props: {
        options: [{ value: 'beijing', label: 'Beijing' }],
        modelValue: 'beijing',
      },
    })
    try {
      await nextTick()

      const field = wrapper.find('.c-field-decorator')
      expect(field.exists()).toBe(true)
      expect(field.classes()).toContain('c-field-decorator--variant-outline')
      expect(wrapper.find('input').attributes('readonly')).toBeDefined()
      expect(wrapper.text()).toContain('Beijing')
    } finally {
      wrapper.unmount()
    }
  })
})
