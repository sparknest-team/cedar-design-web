import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Popover } from '../index'
import Trigger from '../../trigger'

describe('Popover', () => {
  test('render', async () => {
    const wrapper = mount(Popover)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('maps placement to trigger position', () => {
    const wrapper = mount(Popover, {
      props: {
        placement: 'top-start',
        trigger: 'manual',
      },
      slots: {
        default: () => <button>trigger</button>,
      },
    })

    expect(wrapper.findComponent(Trigger).props('position')).toBe('tl')
    expect(wrapper.findComponent(Trigger).props('trigger')).toEqual([])
  })

  test('does not open when disabled', async () => {
    const wrapper = mount(Popover, {
      props: {
        disabled: true,
      },
    })

    wrapper.vm.open()
    await nextTick()
    expect(wrapper.emitted('open')).toBeUndefined()
    expect(wrapper.emitted('update:popupVisible')).toBeUndefined()
  })

  test('exposes open and close with lifecycle events', async () => {
    const wrapper = mount(Popover, {
      slots: {
        default: () => <button>trigger</button>,
      },
    })
    const trigger = wrapper.findComponent(Trigger)

    expect(typeof wrapper.vm.resize).toBe('function')
    wrapper.vm.open()
    await nextTick()
    expect(wrapper.emitted('update:popupVisible')?.slice(-1)[0]).toEqual([true])
    expect(wrapper.emitted('open')).toHaveLength(1)

    trigger.vm.$emit('show')
    await nextTick()
    expect(wrapper.emitted('opened')).toHaveLength(1)

    wrapper.vm.close()
    await nextTick()
    expect(wrapper.emitted('update:popupVisible')?.slice(-1)[0]).toEqual([false])
    expect(wrapper.emitted('close')).toHaveLength(1)

    trigger.vm.$emit('hide')
    await nextTick()
    expect(wrapper.emitted('closed')).toHaveLength(1)

    const outsideEvent = new MouseEvent('mousedown')
    trigger.vm.$emit('clickOutside', outsideEvent)
    expect(wrapper.emitted('clickOutside')).toEqual([[outsideEvent]])
  })

  test('closes on Escape', async () => {
    const wrapper = mount(Popover)

    wrapper.vm.open()
    await nextTick()
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()

    expect(wrapper.emitted('close')).toHaveLength(1)
    expect(wrapper.emitted('update:popupVisible')?.slice(-1)[0]).toEqual([false])
  })
})
