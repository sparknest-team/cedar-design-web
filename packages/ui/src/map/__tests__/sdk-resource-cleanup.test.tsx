import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test('unmount detaches the exact map listener and disposes map and search services', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const on = vi.fn(), off = vi.fn(), destroyMap = vi.fn(), destroySearch = vi.fn()
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
    on = on
    off = off
    destroy = destroyMap
  }
  class FakeSearch { geocoder = vi.fn(async () => ({})); destroy = destroySearch }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 } } })
    await flushPromises()
    expect(on).toHaveBeenCalledTimes(1)
    const listener = on.mock.calls[0][1]
    wrapper.unmount()
    wrapper = undefined
    expect(off).toHaveBeenCalledTimes(1)
    expect(off).toHaveBeenCalledWith('moveend', listener, null)
    expect(destroySearch).toHaveBeenCalledTimes(1)
    expect(destroyMap).toHaveBeenCalledTimes(1)
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
