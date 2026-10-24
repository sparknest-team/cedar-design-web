import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { TreeSelect } from '../index'

describe('TreeSelect', () => {
  test('uses the shared field decorator and renders the selected node', async () => {
    const wrapper = mount(TreeSelect, {
      props: {
        data: [{ value: 'beijing', label: 'Beijing' }],
        modelValue: 'beijing',
      },
    })
    await nextTick()

    const field = wrapper.find('.c-field-decorator')
    expect(field.exists()).toBe(true)
    expect(field.classes()).toContain('c-field-decorator--variant-filled')
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
    expect(wrapper.text()).toContain('Beijing')
  })
})
