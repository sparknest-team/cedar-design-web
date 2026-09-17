import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ConfigProvider } from '../../config-provider'
import { Empty } from '../index'

describe('Empty', () => {
  test('config provider empty slot replaces the default empty', () => {
    const wrapper = mount(ConfigProvider, {
      slots: {
        empty: () => h('div', { class: 'from-config' }, 'config empty'),
        default: () => h(Empty),
      },
    })
    expect(wrapper.find('.from-config').text()).toBe('config empty')
    expect(wrapper.find('.c-empty').exists()).toBe(false)
    wrapper.unmount()
  })

  test('config provider empty does not recurse when the slot renders Empty', () => {
    const wrapper = mount(ConfigProvider, {
      slots: {
        empty: () => h(Empty, { description: 'from slot' }),
        default: () => h(Empty),
      },
    })
    expect(wrapper.find('.c-empty__description').text()).toBe('from slot')
    expect(wrapper.findAll('.c-empty')).toHaveLength(1)
    wrapper.unmount()
  })
})
