import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import CountTo from '../index'
import { delay } from '../../_utils/maple/test'

describe('CountTo', () => {
  test('plugin', () => {
    const app = createApp({}).use(CountTo)
    expect(app.component(CountTo.name)).toBeTruthy()
  })

  const DURATION = 100

  test('basic animation', async () => {
    const wrapper = mount(CountTo, {
      props: {
        from: 0,
        to: 100,
        duration: DURATION,
      },
    })

    expect(wrapper.text()).toBe('0')
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('100')
    wrapper.unmount()
  })

  test('props change', async () => {
    const wrapper = mount(CountTo, {
      props: {
        from: 0,
        to: 100,
        duration: DURATION,
      },
    })

    expect(wrapper.text()).toBe('0')
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('100')
    await wrapper.setProps({ from: -200, to: 200 })
    await nextTick()
    expect(wrapper.text()).toBe('-200')
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('200')
    wrapper.unmount()
  })

  test('slot', async () => {
    const wrapper = mount(CountTo, {
      props: {
        from: 0,
        to: 100,
        duration: DURATION,
      },
      slots: {
        default: ({ value }: { value: number }) => value * 2,
      },
    })

    expect(wrapper.text()).toBe('0')
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('200')
    wrapper.unmount()
  })

  test('manual control', async () => {
    const wrapper = mount(CountTo, {
      props: {
        from: 0,
        to: 100,
        duration: DURATION,
        autoStart: false,
      },
    })

    expect(wrapper.text()).toBe('0')
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('0')
    await wrapper.vm.start()
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('100')
    await wrapper.vm.reset()
    expect(wrapper.text()).toBe('0')
    await wrapper.vm.pause()
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('0')
    await wrapper.vm.start()
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('100')

    wrapper.unmount()
  })

  test('precision', async () => {
    const wrapper = mount(CountTo, {
      props: {
        from: 0,
        to: 33.333,
        duration: DURATION,
        precision: 2,
      },
    })

    expect(wrapper.text()).toBe('0')
    await delay(DURATION + 20)
    expect(wrapper.text()).toBe('33.33')
    wrapper.unmount()
  })

  test('timing function', async () => {
    const wrapper = mount(CountTo, {
      props: {
        from: 0,
        to: 100,
        duration: DURATION,
        timingFunction: () => 1,
      },
    })

    await delay(20)
    expect(wrapper.text()).toBe('100')
    wrapper.unmount()
  })

  test('end event', async () => {
    const onEnd = vi.fn()

    const wrapper = mount(CountTo, {
      props: {
        from: 0,
        to: 100,
        duration: DURATION,
        onEnd,
      },
    })

    await delay(DURATION + 20)
    expect(onEnd).toHaveBeenCalled()
    wrapper.unmount()
  })
})
