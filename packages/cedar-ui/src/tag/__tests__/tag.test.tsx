import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Tag } from '../index'

describe('Tag', () => {
  test('render', async () => {
    const wrapper = mount(Tag)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('supports keyboard interaction when checkable', async () => {
    const wrapper = mount(Tag, {
      props: { checkable: true, defaultChecked: false },
      slots: { default: 'Filter' },
    })

    expect(wrapper.attributes()).toMatchObject({ role: 'checkbox', 'aria-checked': 'false', tabindex: '0' })
    await wrapper.trigger('keydown', { key: ' ' })
    expect(wrapper.attributes('aria-checked')).toBe('true')
    expect(wrapper.emitted('update:checked')?.[0]).toEqual([true])
  })
})
