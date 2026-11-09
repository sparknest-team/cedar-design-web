import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test('unmount during SDK initialization does not create a map or service', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  let finish!: () => void
  const sdkInit = vi.fn(() => new Promise<void>((resolve) => { finish = resolve }))
  const createMap = vi.fn()
  const createSearch = vi.fn()
  class FakeMap extends NativeMap<any, any> {
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      if (sdk) createMap()
    }
  }
  class FakeSearch { constructor() { createSearch() } }
  class FakeLngLat { constructor(_lng: number, _lat: number) {} }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: sdkInit } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 } } })
    expect(sdkInit).toHaveBeenCalledTimes(1)
    wrapper.unmount()
    wrapper = undefined
    finish()
    await flushPromises()
    expect(createMap).not.toHaveBeenCalled()
    expect(createSearch).not.toHaveBeenCalled()
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})

test('unmount during initial geocoding does not emit initialization', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  let finish!: (value: unknown) => void
  const geocoder = vi.fn(() => new Promise((resolve) => { finish = resolve }))
  class FakeLngLat {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      this.center = sdk ? options.center : new FakeLngLat(0, 0)
    }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on() {}
  }
  class FakeSearch { geocoder = geocoder }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const onInit = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 }, onInit } })
    await flushPromises()
    expect(geocoder).toHaveBeenCalledTimes(1)
    wrapper.unmount()
    wrapper = undefined
    const read = vi.fn(() => 'Late result')
    finish(Object.defineProperty({}, 'city', { enumerable: true, get: read }))
    await flushPromises()
    expect(read).not.toHaveBeenCalled()
    expect(onInit).not.toHaveBeenCalled()
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})

test('model changes during initial geocoding do not start a second SDK instance', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const init = vi.fn(async () => {})
  const created = vi.fn()
  const onInit = vi.fn()
  let latestMap: FakeMap | undefined
  let finish!: (value: unknown) => void
  const geocoder = vi.fn(() => new Promise((resolve) => { finish = resolve }))
  class FakeLngLat {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      this.center = sdk ? options.center : new FakeLngLat(0, 0)
      if (sdk) { created(); latestMap = this }
    }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on() {}
  }
  class FakeSearch { geocoder = geocoder }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 }, onInit } })
    await flushPromises()
    expect(geocoder).toHaveBeenCalledTimes(1)
    await wrapper.setProps({ modelValue: { longitude: 3, latitude: 4 } })
    await flushPromises()
    expect(init).toHaveBeenCalledTimes(1)
    expect(created).toHaveBeenCalledTimes(1)
    finish({ city: 'Old city' })
    await flushPromises()
    expect(latestMap?.center.getLng()).toBe(3)
    expect(latestMap?.center.getLat()).toBe(4)
    expect(onInit).toHaveBeenCalledTimes(1)
    expect(onInit.mock.calls[0][1]).toEqual(expect.objectContaining({ longitude: 3, latitude: 4 }))
    expect(onInit.mock.calls[0][1].city).not.toBe('Old city')
  } finally {
    wrapper?.unmount()
    finish({ city: 'Late result' })
    await flushPromises()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
