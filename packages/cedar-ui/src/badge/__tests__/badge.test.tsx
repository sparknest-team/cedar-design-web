import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Badge } from '../index'
import ConfigProvider from '../../config-provider'

describe('Badge', () => {
  test('caps numeric content and renders the description', () => {
    const wrapper = mount(Badge, {
      props: { content: 120, max: 99, description: 'Messages' },
    })

    expect(wrapper.text()).toContain('99+')
    expect(wrapper.text()).toContain('Messages')
  })

  test('honors visibility rules for zero', async () => {
    const wrapper = mount(Badge, { props: { content: 0 } })
    expect(wrapper.find('.c-badge__content').exists()).toBe(false)

    await wrapper.setProps({ showZero: true })
    expect(wrapper.get('.c-badge__content').text()).toBe('0')
  })

  test('resolves namespace from the nearest config provider', () => {
    const wrapper = mount(ConfigProvider, {
      props: { prefixCls: 'acme' },
      slots: { default: () => <Badge content={1} /> },
    })

    expect(wrapper.find('.acme-badge').exists()).toBe(true)
    expect(wrapper.find('.c-badge').exists()).toBe(false)
  })

  test('uses mode for layout without overloading the type prop', () => {
    const wrapper = mount(Badge, {
      props: { mode: 'inline', content: 2, description: 'Updates' },
    })

    expect(wrapper.classes()).toContain('c-badge--mode-inline')
  })
})
