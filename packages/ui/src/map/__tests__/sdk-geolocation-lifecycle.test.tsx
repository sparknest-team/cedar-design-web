import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import MapComponent from '../map'
import MapSelect from '../map-select'

test('geolocation failures are reported and retryable; late success after unmount is ignored', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const geoOriginal = Object.getOwnPropertyDescriptor(navigator, 'geolocation')
  const requests: Array<{ success: PositionCallback; failure?: PositionErrorCallback }> = []
  const getCurrentPosition = vi.fn((success: PositionCallback, failure?: PositionErrorCallback) => { requests.push({ success, failure }) })
  const setCenter = vi.fn()
  const geocodeError = new Error('geocoding failed')
  let rejectGeocoder = false
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
    setCenter(center: FakeLngLat) { setCenter(center); this.center = center }
    getCenter() { return this.center }
    on() {}
  }
  class FakeSearch { geocoder = vi.fn(async () => { if (rejectGeocoder) throw geocodeError; return {} }) }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { getCurrentPosition } })
  const errors = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 }, showLocateMeButton: true, onError: errors } })
    await flushPromises()
    await wrapper.get('.locate-me-btn').trigger('click')
    expect(requests).toHaveLength(1)
    expect(requests[0].failure).toBeTypeOf('function')
    const denied = { code: 1, message: 'permission denied' } as GeolocationPositionError
    requests[0].failure!(denied)
    await flushPromises()
    expect(errors).toHaveBeenCalledWith(denied)
    Object.defineProperty(navigator, 'geolocation', { configurable: true, value: undefined })
    await wrapper.get('.locate-me-btn').trigger('click')
    await flushPromises()
    expect(errors).toHaveBeenCalledTimes(2)
    expect(errors.mock.calls[1][0]).toBeInstanceOf(Error)
    Object.defineProperty(navigator, 'geolocation', { configurable: true, value: { getCurrentPosition } })
    await wrapper.get('.locate-me-btn').trigger('click')
    expect(requests).toHaveLength(2)
    setCenter.mockClear()
    wrapper.unmount()
    wrapper = undefined
    requests[1].success({ coords: { latitude: 3, longitude: 4 } } as GeolocationPosition)
    await flushPromises()
    expect(setCenter).not.toHaveBeenCalled()
    expect(errors).toHaveBeenCalledTimes(2)
    const selectErrors = vi.fn()
    wrapper = mount(MapSelect, { props: { modelValue: {}, popupContainer: false, showLocateMeButton: true, onError: selectErrors } })
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    await flushPromises()
    await wrapper.get('.locate-me-btn').trigger('click')
    expect(requests).toHaveLength(3)
    requests[2].failure!(denied)
    await flushPromises()
    expect(selectErrors).toHaveBeenCalledTimes(1)
    expect(selectErrors).toHaveBeenCalledWith(denied)
    wrapper.unmount()
    const visible = ref(true)
    const keepErrors = vi.fn()
    wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => visible.value ? h(MapComponent, { modelValue: { longitude: 1, latitude: 2 }, showLocateMeButton: true, onError: keepErrors }) : null }) }))
    await flushPromises()
    await wrapper.get('.locate-me-btn').trigger('click')
    expect(requests).toHaveLength(4)
    visible.value = false
    await nextTick()
    visible.value = true
    await nextTick()
    await wrapper.get('.locate-me-btn').trigger('click')
    expect(requests).toHaveLength(5)
    setCenter.mockClear()
    requests[3].success({ coords: { latitude: 30, longitude: 40 } } as GeolocationPosition)
    await flushPromises()
    expect(setCenter).not.toHaveBeenCalled()
    requests[4].success({ coords: { latitude: 3, longitude: 4 } } as GeolocationPosition)
    await flushPromises()
    expect(setCenter).toHaveBeenCalledTimes(1)
    rejectGeocoder = true
    await wrapper.get('.locate-me-btn').trigger('click')
    requests[5].success({ coords: { latitude: 5, longitude: 6 } } as GeolocationPosition)
    await flushPromises()
    expect(keepErrors).toHaveBeenCalledOnce()
    expect(keepErrors).toHaveBeenCalledWith(geocodeError)
  } finally {
    wrapper?.unmount()
    if (geoOriginal) Object.defineProperty(navigator, 'geolocation', geoOriginal)
    else Reflect.deleteProperty(navigator, 'geolocation')
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
