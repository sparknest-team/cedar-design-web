import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import Countdown from '../index'
import { delay } from '../../_utils/maple/test'

afterEach(() => vi.restoreAllMocks())

describe('Countdown', () => {
  test('plugin', () => {
    const app = createApp({}).use(Countdown)
    expect(app.component(Countdown.name)).toBeTruthy()
  })

  test('format', async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: 108000000,
        format: 'HH-mm-ss-SS',
      },
    })

    await delay(0)
    expect(/(\d{2}-){3}\d{2}/.test(wrapper.text())).toBe(true)
    wrapper.unmount()
  })

  test('autoStart false does not tick', async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: 10800,
        autoStart: false,
      },
    })

    await delay(0)
    const text = wrapper.text()
    await delay(100)
    expect(wrapper.text()).toBe(text)
    wrapper.unmount()
  })

  test('emit change', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Countdown, {
      props: {
        time: 1,
        onChange,
      },
    })

    await delay(10)
    expect(onChange).toHaveBeenCalled()
    expect(onChange.mock.calls[0][0]).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 1,
    })
    wrapper.unmount()
  })

  test('emit end', async () => {
    const onEnd = vi.fn()
    const wrapper = mount(Countdown, {
      props: {
        time: 1,
        onEnd,
      },
    })

    await delay(100)
    expect(onEnd).toHaveBeenCalled()
    wrapper.unmount()
  })

  test('start pause reset', async () => {
    let callCount = 0
    vi.spyOn(performance, 'now').mockImplementation(() => {
      callCount += 1
      return 1000 + 500 * callCount
    })

    const wrapper = mount(Countdown, {
      props: {
        time: 108000,
        autoStart: false,
      },
    })

    await delay(0)
    const initial = wrapper.text()
    await delay(50)
    expect(wrapper.text()).toBe(initial)

    wrapper.vm.start()
    await delay(600)
    expect(wrapper.text()).not.toBe(initial)

    wrapper.vm.pause()
    await nextTick()
    const paused = wrapper.text()
    await delay(50)
    expect(wrapper.text()).toBe(paused)

    vi.spyOn(performance, 'now').mockReturnValue(1000)
    wrapper.vm.reset()
    await delay(50)
    expect(wrapper.text()).toBe(initial)

    wrapper.unmount()
  })
})
