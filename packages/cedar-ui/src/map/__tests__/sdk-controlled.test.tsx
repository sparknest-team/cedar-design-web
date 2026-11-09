import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test('SDK proposal does not mutate a rejected parent value', async () => {
  const NativeMap = globalThis.Map
  const originals = ['Map', 'MapService', 'SearchService', 'LngLat'].map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  let instance: any
  class FakeLngLat {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    handler?: () => Promise<void>
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      this.center = sdk ? options.center : new FakeLngLat(0, 0)
      if (sdk) instance = this
    }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on(_event: string, handler: () => Promise<void>) { this.handler = handler }
  }
  class FakeSearch { geocoder = vi.fn(async () => ({ address: 'Resolved' })) }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const parent = Object.freeze({ longitude: 1, latitude: 2, address: 'Original', extra: 'keep' })
  const onUpdate = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: parent, 'onUpdate:modelValue': onUpdate } })
    await flushPromises()
    instance.center = new FakeLngLat(3, 4)
    await instance.handler()
    await flushPromises()
    expect(parent).toEqual({ longitude: 1, latitude: 2, address: 'Original', extra: 'keep' })
    expect(onUpdate).toHaveBeenCalledWith(expect.objectContaining({ longitude: 3, latitude: 4, address: 'Resolved', extra: 'keep' }))
    expect(wrapper.find('.poi-address span').text()).toBe('Original')
    expect(instance.center.getLng()).toBe(1)
    await new Promise((resolve) => setTimeout(resolve, 320))
    onUpdate.mockImplementation((value) => { void wrapper!.setProps({ modelValue: value }) })
    instance.center = new FakeLngLat(5, 6)
    await instance.handler()
    await flushPromises()
    expect(wrapper.find('.poi-address span').text()).toBe('Resolved')
    expect(instance.center.getLng()).toBe(5)
    await wrapper.setProps({ modelValue: { lng: 0, lat: 0, label: 'Zero' }, valueKeyAlias: { longitude: 'lng', latitude: 'lat', address: 'label' } })
    expect(wrapper.find('.poi-address span').text()).toBe('Zero')
    expect(instance.center.getLng()).toBe(0)
    expect(instance.center.getLat()).toBe(0)
  } finally {
    wrapper?.unmount()
    ;['Map', 'MapService', 'SearchService', 'LngLat'].forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})

test('a later programmatic move keeps moveend suppressed after the first cooldown would expire', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  let instance: any
  let search: any
  class FakeLngLat {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    handler?: () => Promise<void>
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      this.center = sdk ? options.center : new FakeLngLat(0, 0)
      if (sdk) instance = this
    }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on(_event: string, handler: () => Promise<void>) { this.handler = handler }
  }
  class FakeSearch {
    geocoder = vi.fn(async () => ({ address: 'Resolved' }))
    constructor() { search = this }
  }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2, address: 'Original' } } })
    await flushPromises()
    vi.useFakeTimers()
    search.geocoder.mockClear()
    await wrapper.setProps({ modelValue: { longitude: 3, latitude: 4, address: 'Original' } })
    vi.advanceTimersByTime(200)
    await wrapper.setProps({ valueKeyAlias: { longitude: 'longitude', latitude: 'latitude', address: 'address' } })
    vi.advanceTimersByTime(100)
    instance.center = new FakeLngLat(8, 9)
    await instance.handler()
    expect(search.geocoder).not.toHaveBeenCalled()
    vi.advanceTimersByTime(200)
    await instance.handler()
    expect(search.geocoder).toHaveBeenCalledTimes(1)
  } finally {
    wrapper?.unmount()
    vi.useRealTimers()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
