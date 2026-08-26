import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Textarea } from '../index'

describe('Textarea', () => {
  test('render', async () => {
    const wrapper = mount(Textarea)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('supports readonly and accessible clearing semantics', async () => {
    const wrapper = mount(Textarea, {
      props: { modelValue: 'notes', clearable: true },
    })
    const clear = wrapper.get('button[aria-label="清空"]')

    await clear.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])

    await wrapper.setProps({ readonly: true, modelValue: 'fixed' })
    expect(wrapper.get('textarea').attributes('readonly')).toBeDefined()
    expect(wrapper.find('button[aria-label="清空"]').exists()).toBe(false)
  })
})
