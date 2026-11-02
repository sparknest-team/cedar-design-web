import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { expect, test } from 'vitest'
import Scheduler from '../Scheduler.vue'
import Demo from '../__demos__/basic.vue'

test('introductory Scheduler demo runs without resource or transport setup', async () => {
  const wrapper = mount(Demo, { global: { components: { CScheduler: Scheduler } } })
  try {
    const scheduler = wrapper.getComponent(Scheduler)
    expect(scheduler.props('resources')).toEqual([])
    expect(scheduler.props('requestResources')).toBeUndefined()
    expect(scheduler.props('modelValue')).toHaveLength(1)
    const changed = [{ ...scheduler.props('modelValue')![0], title: 'Updated meeting' }]
    scheduler.vm.$emit('update:modelValue', changed)
    await nextTick()
    expect(scheduler.props('modelValue')).toEqual(changed)
  } finally { wrapper.unmount() }
})
