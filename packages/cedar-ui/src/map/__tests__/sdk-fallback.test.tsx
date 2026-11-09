import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import MapComponent from '../map'

const globals = ['MapService', 'SearchService', 'LngLat'] as const
const originals = globals.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
const owners: Array<ReturnType<typeof mount>> = []
const InputStub = defineComponent({ render: () => h('input') })
let cooldownCalls: () => number
let timeoutDescriptor: PropertyDescriptor | undefined

function setDependency(name: typeof globals[number], value: unknown) {
  Object.defineProperty(globalThis, name, { configurable: true, writable: true, value })
}

async function settle() {
  await Promise.resolve()
  await nextTick()
}

function expectNoMapWork(wrapper: ReturnType<typeof mount>) {
  expect(wrapper.emitted('init')).toBeUndefined()
  expect(wrapper.emitted('change')).toBeUndefined()
  expect(wrapper.emitted('loading:address')).toBeUndefined()
  expect(wrapper.emitted('loaded:address')).toBeUndefined()
  expect(cooldownCalls()).toBe(0)
}

beforeEach(() => {
  timeoutDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'setTimeout')
  vi.useFakeTimers()
  // Runner/dependency timers are not Map's two cooldown policies.
  const timer = vi.spyOn(globalThis, 'setTimeout')
  cooldownCalls = () => timer.mock.calls.filter(([, delay]) => delay === 300 || delay === 500).length
  globals.forEach((name) => setDependency(name, undefined))
})

afterEach(() => {
  owners.splice(0).forEach((wrapper) => wrapper.unmount())
  vi.clearAllTimers()
  vi.restoreAllMocks()
  vi.useRealTimers()
  if (timeoutDescriptor) Object.defineProperty(globalThis, 'setTimeout', timeoutDescriptor)
  globals.forEach((name, index) => {
    const descriptor = originals[index]
    if (descriptor) Object.defineProperty(globalThis, name, descriptor)
    else Reflect.deleteProperty(globalThis, name)
  })
})

describe('Map missing-SDK fallback (not SDK lifecycle acceptance)', () => {
  test('timer probe detects both cooldown durations (fixture control only)', () => {
    const completed = vi.fn()
    setTimeout(completed, 300)
    setTimeout(completed, 500)
    expect(cooldownCalls()).toBe(2)
    vi.advanceTimersByTime(500)
    expect(completed).toHaveBeenCalledTimes(2)
  })
  for (const missing of globals) {
    test(`does not initialize SDK or cooldown timers when ${missing} is unavailable`, async () => {
      const init = vi.fn()
      const search = vi.fn()
      const coordinates = vi.fn()
      setDependency('MapService', missing === 'MapService' ? undefined : { init })
      setDependency('SearchService', missing === 'SearchService' ? undefined : search)
      setDependency('LngLat', missing === 'LngLat' ? undefined : coordinates)
      const wrapper = mount(MapComponent, {
        props: { modelValue: {} },
        global: { stubs: { Input: InputStub } },
      })
      owners.push(wrapper)
      await settle()
      expect(wrapper.find('.map-search-box-empty').exists()).toBe(true)
      expect(init).not.toHaveBeenCalled()
      expect(search).not.toHaveBeenCalled()
      expect(coordinates).not.toHaveBeenCalled()
      expectNoMapWork(wrapper)
    })
  }

  test('model replacement and disposal in fallback do not enqueue map cooldown work', async () => {
    const wrapper = mount(MapComponent, {
      props: { modelValue: { longitude: 1, latitude: 2 } },
      global: { stubs: { Input: InputStub } },
    })
    owners.push(wrapper)
    await settle()
    await wrapper.setProps({ modelValue: { longitude: 3, latitude: 4 } })
    expectNoMapWork(wrapper)
    owners.pop()
    wrapper.unmount()
    vi.advanceTimersByTime(1000)
    await settle()
    expectNoMapWork(wrapper)
  })

  test('reflects a replaced model when the SDK is unavailable', async () => {
    const wrapper = mount(MapComponent, { props: { modelValue: { address: 'Old' } } })
    owners.push(wrapper)
    expect(wrapper.find('.poi-address span').text()).toBe('Old')
    await wrapper.setProps({ modelValue: { address: 'New' } })
    expect(wrapper.find('.poi-address span').text()).toBe('New')
    expectNoMapWork(wrapper)
  })

  test('updates the address when aliases change in fallback mode', async () => {
    const wrapper = mount(MapComponent, { props: { modelValue: { address: 'Old', label: 'New' } } })
    owners.push(wrapper)
    await wrapper.setProps({ valueKeyAlias: { address: 'label' } })
    expect(wrapper.find('.poi-address span').text()).toBe('New')
    expectNoMapWork(wrapper)
  })

  test('fallback suspension/reactivation has no map callbacks to replay', async () => {
    const active = ref(true)
    const host = mount(defineComponent({
      setup: () => () => h(KeepAlive, null, {
        default: () => active.value ? h(MapComponent, { modelValue: {} }) : null,
      }),
    }), { global: { stubs: { Input: InputStub } } })
    owners.push(host)
    await settle()
    const map = host.findComponent(MapComponent)
    active.value = false
    await settle()
    vi.advanceTimersByTime(1000)
    expectNoMapWork(map)
    active.value = true
    await settle()
    expect(host.find('.map-search-box-empty').exists()).toBe(true)
    expectNoMapWork(map)
  })
})
