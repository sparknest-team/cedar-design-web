import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'
import MapSelect from '../map-select'
import type { MapSdk, MapSdkMapOptions, MapSdkSearchOptions } from '../sdk'
import { getMapInitData } from '../utils'

function createSdk() {
  const init = vi.fn(async (_type: string, _key: string) => {})
  const configs: MapSdkSearchOptions[] = []
  class LatLng {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class MapView {
    center: LatLng
    constructor(options: MapSdkMapOptions) { this.center = options.center as LatLng }
    getCenter() { return this.center }
    setCenter(value: LatLng) { this.center = value }
    on() {}
  }
  class Search {
    constructor(options: MapSdkSearchOptions) { configs.push(options) }
    geocoder() { return {} }
    search() {}
  }
  const sdk: MapSdk = { LngLat: LatLng, Map: MapView, MapService: { init }, SearchService: Search }
  return { sdk, init, configs }
}

test.each([
  ['qqmaps', false, 'qqmaps', '/api/gis/v2/in/map/rgeo'],
  ['amaps', false, 'amaps', '/api/gis/v2/in/map/rgeo'],
  ['google', false, 'google', '/api/node/api/v1/gis/rgeo'],
  ['qqmaps', true, 'google', '/api/node/api/v1/gis/rgeo'],
  ['amaps', true, 'google', '/api/node/api/v1/gis/rgeo'],
] as const)('SDK and geocoder agree for %s with international=%s', async (mapType, isInternational, expectedType, expectedUrl) => {
  const f = createSdk()
  const owner = mount(MapComponent, { props: { sdk: f.sdk, modelValue: { longitude: 1, latitude: 2 }, basePath: '/api', mapType, isInternational } })
  try {
    await flushPromises()
    expect(f.init).toHaveBeenCalledTimes(1)
    expect(f.init.mock.calls[0][0]).toBe(expectedType)
    expect(f.init.mock.calls[0][1] === getMapInitData(expectedType, '/api').key).toBe(true)
    expect(f.configs[0].geocoderUrl).toBe(expectedUrl)
  } finally { owner.unmount() }
})

test('MapSelect fallback uses the effective map type and responds to international mode changes', async () => {
  const get = vi.fn(async () => ({ isValid: () => true, data: { address: 'Address' } }))
  const owner = mount(MapSelect, { props: { modelValue: { longitude: 1, latitude: 2 }, basePath: '/api', mapType: 'qqmaps', isInternational: true, fetch: { get, post: vi.fn() } } })
  try {
    await flushPromises()
    expect(get.mock.calls[0][0]).toBe('/api/node/api/v1/gis/rgeo')
    await owner.setProps({ isInternational: false })
    await flushPromises()
    expect(get.mock.calls[1][0]).toBe('/api/gis/v2/in/map/rgeo')
  } finally { owner.unmount() }
})

test('a previous MapSelect geocoder response cannot overwrite the new international mode', async () => {
  const pending: Array<(value: unknown) => void> = []
  const get = vi.fn(() => new Promise(resolve => pending.push(resolve)))
  const owner = mount(MapSelect, { props: { modelValue: { longitude: 1, latitude: 2 }, mapType: 'qqmaps', isInternational: true, fetch: { get, post: vi.fn() } } })
  try {
    await flushPromises()
    await owner.setProps({ isInternational: false })
    await flushPromises()
    expect(pending).toHaveLength(2)
    pending[1]({ isValid: () => true, data: { address: 'Current' } })
    await flushPromises()
    pending[0]({ isValid: () => true, data: { address: 'Stale' } })
    await flushPromises()
    expect(owner.emitted('update:modelValue')).toHaveLength(1)
    expect(owner.emitted('update:modelValue')![0][0]).toMatchObject({ address: 'Current' })
  } finally { owner.unmount() }
})

test('an explicit geocoder URL takes precedence over the effective type default', async () => {
  const f = createSdk()
  const owner = mount(MapComponent, { props: { sdk: f.sdk, modelValue: {}, mapType: 'qqmaps', isInternational: true, geocoderUrl: '/custom' } })
  try {
    await flushPromises()
    expect(f.configs[0].geocoderUrl).toBe('/custom')
  } finally { owner.unmount() }
})
