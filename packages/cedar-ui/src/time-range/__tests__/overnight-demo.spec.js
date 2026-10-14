import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { expect, it } from 'vitest'
import TimeRange from '../index'
import Button from '../../button'
import Demo from '../__demos__/show-next-day.vue'

it('overnight demo preserves endpoint order and exposes clear/reset model state', async () => {
  const wrapper = mount(Demo, {
    global: { components: { CTimeRange: TimeRange, CButton: Button } },
  })
  const field = wrapper.getComponent(TimeRange)
  expect(field.props()).toMatchObject({
    modelValue: ['22:00', '06:00'],
    showNextDay: true,
    inputEditable: true,
    format: 'HH:mm',
  })
  field.vm.$emit('update:modelValue', undefined)
  await nextTick()
  expect(wrapper.get('output').text()).toBe('undefined')
  const reset = wrapper
    .findAllComponents(Button)
    .find((button) => button.text() === '重置')
  expect(reset).toBeTruthy()
  await reset.trigger('click')
  expect(field.props('modelValue')).toEqual(['22:00', '06:00'])
  expect(wrapper.get('output').text()).toBe('["22:00","06:00"]')
  wrapper.unmount()
})
