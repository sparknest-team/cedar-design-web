import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, test } from 'vitest'
import BasicDemo from '../__demos__/basic.vue'
import MapComponent from '../map'
import Button from '../../button'
import Space from '../../space'

describe('Map offline demo', () => {
  test('runs without credentials, exposes fallback and changes local values', async () => {
    const wrapper = mount(BasicDemo, { global: { components: { CMap: MapComponent, CButton: Button, CSpace: Space } } })
    try {
      await nextTick()
      expect(wrapper.get('[role="status"]').text()).toContain('北京示例位置')
      expect(wrapper.find('img').exists()).toBe(false)
      expect(wrapper.find('input').attributes('disabled')).toBeDefined()
      await wrapper.findAll('button')[0].trigger('click')
      expect(wrapper.get('[role="status"]').text()).toContain('上海示例位置')
      await wrapper.findAll('button')[1].trigger('click')
      expect(wrapper.get('[role="status"]').text()).toContain('北京示例位置')
    } finally { wrapper.unmount() }
  })
})
