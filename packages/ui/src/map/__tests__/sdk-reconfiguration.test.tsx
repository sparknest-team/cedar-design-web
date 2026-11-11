import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

const install = (deferFirstGeocoder = false) => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map(name => Object.getOwnPropertyDescriptor(globalThis, name))
  const maps: any[] = [], services: any[] = []
  const sdkInit = vi.fn(async () => {})
  let resolveGeocoder: ((value: unknown) => void) | undefined
  class LatLng {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class FakeMap extends NativeMap<any, any> {
    center: LatLng
    on = vi.fn()
    off = vi.fn()
    destroy = vi.fn()
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      this.center = sdk ? options.center : new LatLng(0, 0)
      if (sdk) maps.push(this)
    }
    setCenter(center: LatLng) { this.center = center }
    getCenter() { return this.center }
  }
  class Search {
    destroy = vi.fn()
    geocoder = vi.fn(() => deferFirstGeocoder && services[0] === this
      ? new Promise(resolve => { resolveGeocoder = resolve })
      : Promise.resolve({}))
    constructor(public options: any) { services.push(this) }
  }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: sdkInit } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: Search })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: LatLng })
  return { maps, services, sdkInit, resolveGeocoder: (value: unknown) => resolveGeocoder?.(value), restore: () => names.forEach((name, index) => originals[index] ? Object.defineProperty(globalThis, name, originals[index]!) : Reflect.deleteProperty(globalThis, name)) }
}

test('changing SDK service configuration retires old resources and creates a service with current options', async () => {
  const f = install()
  const driver = { id: 'old' }, fetch = { get: vi.fn(), post: vi.fn() }
  const handler = vi.fn(), newerHandler = vi.fn(), newerDriver = { id: 'new' }, newerFetch = { get: vi.fn(), post: vi.fn() }
  const wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 }, driver, fetch, geocoderHandler: handler, geocoderUrl: '/old' } })
  try {
    await flushPromises()
    expect(f.services).toHaveLength(1)
    const oldMap = f.maps[0], oldService = f.services[0], oldListener = oldMap.on.mock.calls[0][1]
    await wrapper.setProps({ driver: newerDriver, fetch: newerFetch, geocoderHandler: newerHandler, geocoderUrl: '/new', mapType: 'amaps' })
    await flushPromises()
    expect(oldMap.off).toHaveBeenCalledWith('moveend', oldListener, null)
    expect(oldMap.destroy).toHaveBeenCalledTimes(1)
    expect(oldService.destroy).toHaveBeenCalledTimes(1)
    expect(f.services).toHaveLength(2)
    expect(f.services[1].options).toMatchObject({ driver: newerDriver, fetch: newerFetch, geocoderHandler: newerHandler, geocoderUrl: '/new' })
    expect(f.sdkInit.mock.calls.at(-1)?.[0]).toBe('amaps')
    oldService.options.complete({ list: [{ name: 'Stale suggestion' }] }, 'success')
    f.maps[1].center = new (globalThis as any).LngLat(7, 8)
    const currentGeocodes = f.services[1].geocoder.mock.calls.length
    await oldListener()
    await flushPromises()
    expect(wrapper.text()).not.toContain('Stale suggestion')
    expect(f.services[1].geocoder).toHaveBeenCalledTimes(currentGeocodes)
  } finally { wrapper.unmount(); f.restore() }
})

test('old initial geocoding cannot initialize or alter the replacement service', async () => {
  const f = install(true)
  const onInit = vi.fn()
  const wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 }, geocoderUrl: '/old', onInit } })
  try {
    await flushPromises()
    expect(f.services).toHaveLength(1)
    await wrapper.setProps({ geocoderUrl: '/new' })
    await flushPromises()
    expect(f.services).toHaveLength(2)
    expect(onInit).toHaveBeenCalledTimes(1)
    f.resolveGeocoder({ city: 'Stale city' })
    await flushPromises()
    expect(onInit).toHaveBeenCalledTimes(1)
    expect(JSON.stringify(onInit.mock.calls)).not.toContain('Stale city')
    expect(f.maps[0].destroy).toHaveBeenCalledTimes(1)
  } finally { wrapper.unmount(); f.restore() }
})

test('superseded SDK initialization cannot create a second map when it resolves late', async () => {
  const f = install()
  let finish!: () => void
  f.sdkInit.mockImplementationOnce(() => new Promise<void>(resolve => { finish = resolve }))
  const onInit = vi.fn()
  const wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 }, mapType: 'qqmaps', onInit } })
  try {
    await flushPromises()
    expect(f.maps).toHaveLength(0)
    await wrapper.setProps({ mapType: 'amaps' })
    await flushPromises()
    expect(f.maps).toHaveLength(1)
    expect(f.sdkInit).toHaveBeenCalledTimes(2)
    expect(onInit).toHaveBeenCalledTimes(1)
    finish()
    await flushPromises()
    expect(f.maps).toHaveLength(1)
    expect(onInit).toHaveBeenCalledTimes(1)
  } finally { wrapper.unmount(); f.restore() }
})

test('cached map applies changed parent configuration on reactivation', async () => {
  const f = install()
  const visible = ref(true), url = ref('/old')
  const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, null, {
    default: () => visible.value ? h(MapComponent, { modelValue: { longitude: 1, latitude: 2 }, geocoderUrl: url.value }) : null,
  }) }))
  try {
    await flushPromises()
    visible.value = false
    await nextTick()
    url.value = '/new'
    await nextTick()
    await flushPromises()
    expect(f.maps[0].destroy).not.toHaveBeenCalled()
    expect(f.services).toHaveLength(1)
    visible.value = true
    await nextTick()
    await flushPromises()
    expect(f.maps[0].destroy).toHaveBeenCalledTimes(1)
    expect(f.services).toHaveLength(2)
    expect(f.services[1].options.geocoderUrl).toBe('/new')
  } finally { wrapper.unmount(); f.restore() }
})
