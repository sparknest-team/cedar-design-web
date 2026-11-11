import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'
import MapSelect from '../map-select'

test.each([
  ['map', 0, 0], ['map', 0, 5], ['map', 5, 0],
  ['select', 0, 0], ['select', 0, 5], ['select', 5, 0],
] as const)('%s preserves GIS coordinates (%i, %i) when selecting a suggestion', async (kind, lng, lat) => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map(name => Object.getOwnPropertyDescriptor(globalThis, name))
  const geocoder = vi.fn(async () => ({}))
  class FakeLngLat { constructor(public lng: number, public lat: number) {} getLng() { return this.lng } getLat() { return this.lat } }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    constructor(options: any) { const sdk = options && !Array.isArray(options) && 'center' in options; super(sdk ? undefined : options); this.center = sdk ? options.center : new FakeLngLat(0, 0) }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on() {}
  }
  class FakeSearch { geocoder = geocoder }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const updates = vi.fn()
  const props = { modelValue: { longitude: 1, latitude: 2, address: 'Original' }, enableGisSearch: true, fetch: { get: vi.fn(async () => ({ data: [{ name: 'Zero', address: 'Origin', lng, lat }] })), post: vi.fn() }, 'onUpdate:modelValue': updates }
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = kind === 'map' ? mount(MapComponent, { props }) : mount(MapSelect, { props: { ...props, popupContainer: false } })
    if (kind === 'select') await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    await flushPromises()
    await wrapper.get('.map-search-input input').setValue('zero')
    await flushPromises()
    await wrapper.get('.map-search-box-item').trigger('click')
    await flushPromises()
    expect(geocoder).toHaveBeenLastCalledWith(lng, lat)
    if (kind === 'select') { await wrapper.findAll('.c-dialog-footer button').at(-1)!.trigger('click'); await flushPromises() }
    expect(updates).toHaveBeenCalledWith(expect.objectContaining({ longitude: lng, latitude: lat }))
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => originals[index] ? Object.defineProperty(globalThis, name, originals[index]!) : Reflect.deleteProperty(globalThis, name))
  }
})
