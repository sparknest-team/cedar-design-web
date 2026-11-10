import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'
import MapSelect from '../map-select'

test('search and selection failures report only current errors and preserve the selected location', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map(name => Object.getOwnPropertyDescriptor(globalThis, name))
  let rejectSearch!: (error: unknown) => void
  let rejectGeocode!: (error: unknown) => void
  let initial = true
  const get = vi.fn(() => new Promise((_resolve, reject) => { rejectSearch = reject }))
  class FakeLngLat { constructor(public lng: number, public lat: number) {} getLng() { return this.lng } getLat() { return this.lat } }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    constructor(options: any) { const sdk = options && !Array.isArray(options) && 'center' in options; super(sdk ? undefined : options); this.center = sdk ? options.center : new FakeLngLat(0, 0) }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on() {}
  }
  class FakeSearch { geocoder() { if (initial) { initial = false; return Promise.resolve({}) } return new Promise((_resolve, reject) => { rejectGeocode = reject }) } }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const errors = vi.fn(), updates = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2, address: 'Original' }, enableGisSearch: true, fetch: { get, post: vi.fn() }, onError: errors, 'onUpdate:modelValue': updates } })
    await flushPromises()
    const input = wrapper.get('input')
    await input.setValue('old')
    await input.setValue('')
    rejectSearch(new Error('stale'))
    await flushPromises()
    expect(errors).not.toHaveBeenCalled()
    await input.setValue('current')
    const searchError = new Error('search failed')
    rejectSearch(searchError)
    await flushPromises()
    expect(errors).toHaveBeenCalledWith(searchError)
    await input.setValue('3,4')
    const coordinateError = new Error('coordinate failed')
    rejectGeocode(coordinateError)
    await flushPromises()
    expect(errors).toHaveBeenCalledWith(coordinateError)
    expect(updates).not.toHaveBeenCalled()
    expect(wrapper.text()).toContain('Original')
    get.mockImplementationOnce(async () => ({ data: [{ name: 'Candidate', address: 'Other', lng: 3, lat: 4 }] }))
    await input.setValue('candidate')
    await flushPromises()
    await wrapper.get('.map-search-box-item').trigger('click')
    const selectionError = new Error('selection failed')
    rejectGeocode(selectionError)
    await flushPromises()
    expect(errors).toHaveBeenCalledWith(selectionError)
    expect(updates).not.toHaveBeenCalled()
    expect(wrapper.text()).toContain('Original')
    await wrapper.get('.map-search-box-item').trigger('click')
    await input.setValue('')
    rejectGeocode(new Error('stale selection'))
    await flushPromises()
    expect(errors).toHaveBeenCalledTimes(3)
    expect(updates).not.toHaveBeenCalled()
    wrapper.unmount()
    initial = true
    const selectErrors = vi.fn()
    wrapper = mount(MapSelect, { props: { modelValue: {}, popupContainer: false, enableGisSearch: true, fetch: { get, post: vi.fn() }, onError: selectErrors } })
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    await flushPromises()
    await wrapper.get('.map-search-input input').setValue('query')
    const selectError = new Error('map select search failed')
    rejectSearch(selectError)
    await flushPromises()
    expect(selectErrors).toHaveBeenCalledOnce()
    expect(selectErrors).toHaveBeenCalledWith(selectError)
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => originals[index] ? Object.defineProperty(globalThis, name, originals[index]!) : Reflect.deleteProperty(globalThis, name))
  }
})
