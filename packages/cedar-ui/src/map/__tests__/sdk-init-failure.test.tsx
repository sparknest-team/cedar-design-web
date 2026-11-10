import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'
import MapSelect from '../map-select'

test.each(['init', 'search', 'geocoder'] as const)('reports %s initialization failure, cleans up and retries', async (stage) => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const failure = new Error(`${stage} failure`)
  const sdkInit = vi.fn(async () => { if (stage === 'init' && sdkInit.mock.calls.length === 1) throw failure })
  const destroyMap = vi.fn()
  let searchCount = 0
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
    destroy = destroyMap
  }
  class FakeSearch {
    constructor() { searchCount++; if (stage === 'search' && searchCount === 1) throw failure }
    geocoder = vi.fn(async () => { if (stage === 'geocoder' && searchCount === 1) throw failure; return {} })
  }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: sdkInit } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const errors = vi.fn(), unhandled = vi.fn(), initialized = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 }, onError: errors, onInit: initialized }, global: { config: { errorHandler: unhandled } } })
    await flushPromises()
    expect(errors).toHaveBeenCalledOnce()
    expect(errors).toHaveBeenCalledWith(failure)
    expect(unhandled).not.toHaveBeenCalled()
    expect(initialized).not.toHaveBeenCalled()
    expect(destroyMap).toHaveBeenCalledTimes(stage === 'init' ? 0 : 1)
    await wrapper.get('[data-map-retry]').trigger('click')
    await flushPromises()
    expect(sdkInit).toHaveBeenCalledTimes(2)
    expect(initialized).toHaveBeenCalledTimes(1)
    expect(wrapper.find('[data-map-retry]').exists()).toBe(false)
    if (stage === 'init') {
      wrapper.unmount()
      sdkInit.mockClear()
      const selectErrors = vi.fn()
      wrapper = mount(MapSelect, { props: { modelValue: {}, popupContainer: false, onError: selectErrors } })
      await wrapper.get('input').trigger('keydown', { key: 'Enter' })
      await flushPromises()
      expect(selectErrors).toHaveBeenCalledOnce()
      expect(selectErrors).toHaveBeenCalledWith(failure)
      await wrapper.get('[data-map-retry]').trigger('click')
      await flushPromises()
      expect(sdkInit).toHaveBeenCalledTimes(2)
      expect(wrapper.find('[data-map-retry]').exists()).toBe(false)
    }
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
