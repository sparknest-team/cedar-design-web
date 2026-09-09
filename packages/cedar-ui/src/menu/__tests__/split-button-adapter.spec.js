import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { expect, test, vi } from 'vitest'
import Menu from '..'
import Trigger from '../../trigger'

test('screen offsets and popup class reach Trigger; resize and disabled methods are respected', async () => {
  const wrapper = mount(Menu, {
    props: { popupClass: ['custom'], offsetX: '12px', offsetY: -4, popupContainer: false },
    slots: { default: '<button>Open</button>' },
  })
  try {
    const trigger = wrapper.findComponent(Trigger)
    expect(trigger.props('popupTranslate')).toEqual([12, -4])
    expect(trigger.props('popupOffset')).toBe(4)
    expect(trigger.props('popupClass')).toEqual(['custom'])
    const resize = vi.spyOn(wrapper.vm.menu, 'resize')
    wrapper.vm.open()
    await nextTick()
    expect(wrapper.emitted('update:open')[0]).toEqual([true])
    wrapper.vm.resize()
    expect(resize).toHaveBeenCalled()
    resize.mockClear()
    await wrapper.setProps({ offsetX: 20 })
    await nextTick()
    expect(trigger.props('popupTranslate')).toEqual([20, -4])
    expect(resize).toHaveBeenCalled()
    wrapper.vm.close()
    await nextTick()
    await wrapper.setProps({ disabled: true })
    const requests = wrapper.emitted('update:open').length
    wrapper.vm.open()
    await nextTick()
    expect(wrapper.emitted('update:open')).toHaveLength(requests)
  } finally { wrapper.unmount() }
})
