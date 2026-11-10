import { flushPromises, mount } from '@vue/test-utils'
import { reactive, toRaw } from 'vue'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import MapComponent from '../map'
import MapSelect from '../map-select'
import type { MapSdk, MapSdkSearchCompletion, MapSdkSearchOptions } from '../sdk'

function adapter() {
  const maps: any[] = [], services: any[] = []
  class LatLng {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class MapView {
    #center: LatLng
    on = vi.fn()
    off = vi.fn()
    destroy = vi.fn()
    constructor(options: Record<string, any>) { this.#center = options.center; maps.push(this) }
    setCenter(center: LatLng) { this.#center = center }
    getCenter() { return this.#center }
  }
  class Search {
    destroy = vi.fn()
    search = vi.fn()
    geocoder = vi.fn(async () => ({ address: 'Adapter address' }))
    constructor(public options: MapSdkSearchOptions) { services.push(this) }
  }
  const sdk: MapSdk = { LngLat: LatLng, Map: MapView, MapService: { init: vi.fn(async () => {}) }, SearchService: Search }
  return { sdk, maps, services }
}

const globalNames = ['MapService', 'SearchService', 'LngLat'] as const
let descriptors: Array<PropertyDescriptor | undefined>
beforeEach(() => {
  descriptors = globalNames.map(name => Object.getOwnPropertyDescriptor(globalThis, name))
  globalNames.forEach(name => Object.defineProperty(globalThis, name, { configurable: true, value: undefined }))
})
afterEach(() => globalNames.forEach((name, index) => descriptors[index] ? Object.defineProperty(globalThis, name, descriptors[index]!) : Reflect.deleteProperty(globalThis, name)))

test('explicit SDK supports independent instances without replacing native global Map', async () => {
  const originalMap = globalThis.Map
  const first = adapter(), second = adapter()
  const one = mount(MapComponent, { props: { sdk: first.sdk, modelValue: { longitude: 1, latitude: 2 } } })
  const two = mount(MapComponent, { props: { sdk: second.sdk, modelValue: { longitude: 3, latitude: 4 } } })
  try {
    await flushPromises()
    expect(globalThis.Map).toBe(originalMap)
    expect(first.maps).toHaveLength(1)
    expect(second.maps).toHaveLength(1)
    expect(first.maps[0].getCenter().getLng()).toBe(1)
    expect(second.maps[0].getCenter().getLng()).toBe(3)
    expect(first.services[0].options.map).toBe(first.maps[0])
    expect(second.services[0].options.map).toBe(second.maps[0])
    expect(one.get('input').element.disabled).toBe(false)
    expect(two.get('input').element.disabled).toBe(false)
  } finally { one.unmount(); two.unmount() }
  expect(first.maps[0].destroy).toHaveBeenCalledTimes(1)
  expect(second.maps[0].destroy).toHaveBeenCalledTimes(1)
})

test('an incomplete explicit adapter shows the unavailable fallback', async () => {
  const wrapper = mount(MapComponent, { props: { sdk: {} as MapSdk, modelValue: {} } })
  try {
    await flushPromises()
    expect(wrapper.get('input').element.disabled).toBe(true)
    expect(wrapper.text()).toContain('Map SDK unavailable')
    expect(wrapper.emitted('init')).toBeUndefined()
  } finally { wrapper.unmount() }
})

test('a reactive adapter keeps its SDK service instance unproxied', async () => {
  const f = adapter()
  class Initializer {
    #calls = 0
    init() { this.#calls++ }
    count() { return this.#calls }
  }
  const initializer = new Initializer()
  f.sdk.MapService = reactive(initializer)
  const wrapper = mount(MapComponent, { props: { sdk: reactive(f.sdk), modelValue: { longitude: 1, latitude: 2 } } })
  try {
    await flushPromises()
    expect(initializer.count()).toBe(1)
    expect(wrapper.get('input').element.disabled).toBe(false)
    expect(wrapper.emitted('error')).toBeUndefined()
  } finally { wrapper.unmount() }
})

test('an explicit adapter takes precedence over legacy globals', async () => {
  const legacyInit = vi.fn()
  Object.defineProperty(globalThis, 'MapService', { configurable: true, value: { init: legacyInit } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, value: class {} })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, value: class {} })
  const f = adapter()
  const wrapper = mount(MapComponent, { props: { sdk: f.sdk, modelValue: { longitude: 1, latitude: 2 } } })
  try {
    await flushPromises()
    expect(f.maps).toHaveLength(1)
    expect(legacyInit).not.toHaveBeenCalled()
  } finally { wrapper.unmount() }
})

test('SDK can be supplied, replaced, and removed while mounted', async () => {
  const first = adapter(), second = adapter()
  const wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2 } } })
  try {
    await flushPromises()
    expect(wrapper.get('input').element.disabled).toBe(true)
    await wrapper.setProps({ sdk: first.sdk })
    await flushPromises()
    expect(first.maps).toHaveLength(1)
    expect(wrapper.get('input').element.disabled).toBe(false)
    await wrapper.setProps({ sdk: second.sdk })
    await flushPromises()
    expect(first.maps[0].destroy).toHaveBeenCalledTimes(1)
    expect(first.services[0].destroy).toHaveBeenCalledTimes(1)
    expect(second.maps).toHaveLength(1)
    await wrapper.setProps({ sdk: undefined })
    await flushPromises()
    expect(second.maps[0].destroy).toHaveBeenCalledTimes(1)
    expect(wrapper.get('input').element.disabled).toBe(true)
  } finally { wrapper.unmount() }
})

test('MapSelect passes the explicit SDK to its editor', async () => {
  const f = adapter()
  const wrapper = mount(MapSelect, { attachTo: document.body, props: { sdk: f.sdk, popupContainer: false, modelValue: { longitude: 1, latitude: 2, address: 'Original' } } })
  try {
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    await flushPromises()
    expect(f.maps).toHaveLength(1)
    expect(toRaw(wrapper.findComponent(MapComponent).props('sdk')!)).toBe(f.sdk)
    expect(wrapper.get('.map-search-input input').element.disabled).toBe(false)
  } finally { wrapper.unmount() }
})

test('replacing an adapter during initialization ignores the old completion', async () => {
  const first = adapter(), second = adapter()
  let finish!: () => void
  first.sdk.MapService.init = () => new Promise<void>(resolve => { finish = resolve })
  const wrapper = mount(MapComponent, { props: { sdk: first.sdk, modelValue: { longitude: 1, latitude: 2 } } })
  try {
    await flushPromises()
    await wrapper.setProps({ sdk: second.sdk })
    await flushPromises()
    expect(second.maps).toHaveLength(1)
    finish()
    await flushPromises()
    expect(first.maps).toHaveLength(0)
    expect(second.maps).toHaveLength(1)
  } finally { wrapper.unmount() }
})

test('adapter search only accepts callbacks owned by the current query', async () => {
  const f = adapter()
  const callbacks: Array<MapSdkSearchCompletion | undefined> = []
  let shared!: MapSdkSearchOptions['complete']
  f.sdk.SearchService = class {
    constructor(options: MapSdkSearchOptions) { shared = options.complete }
    geocoder = async () => ({})
    search(_query: string, complete?: MapSdkSearchCompletion) { callbacks.push(complete) }
  }
  const wrapper = mount(MapComponent, { props: { sdk: f.sdk, modelValue: { longitude: 1, latitude: 2 } } })
  let mounted = true
  try {
    await flushPromises()
    const input = wrapper.get('input')
    await input.setValue('first')
    await input.setValue('second')
    expect(callbacks).toHaveLength(2)
    expect(callbacks[0]).toBeTypeOf('function')
    callbacks[1]!({ list: [{ name: 'Current', address: 'Current' }] }, 'success')
    callbacks[1]!({ list: [{ name: 'Duplicate', address: 'Duplicate' }] }, 'success')
    callbacks[0]!({ list: [{ name: 'Stale', address: 'Stale' }] }, 'success')
    shared({ list: [{ name: 'Unowned', address: 'Unowned' }] }, 'success')
    await flushPromises()
    expect(wrapper.text()).toContain('Current')
    expect(wrapper.text()).not.toContain('Stale')
    expect(wrapper.text()).not.toContain('Unowned')
    expect(wrapper.text()).not.toContain('Duplicate')
    await input.setValue('')
    callbacks[1]!({ list: [{ name: 'Late', address: 'Late' }] }, 'success')
    await flushPromises()
    expect(wrapper.text()).not.toContain('Late')
    await input.setValue('third')
    const reentrant = { address: 'Reentrant', get name() {
      const element = input.element as HTMLInputElement
      element.value = ''
      element.dispatchEvent(new Event('input', { bubbles: true }))
      return 'Reentrant'
    } }
    callbacks[2]!({ list: [reentrant] }, 'success')
    await flushPromises()
    expect(wrapper.text()).not.toContain('Reentrant')
    await input.setValue('fourth')
    const oldCallback = callbacks[3]!
    const replacement = adapter()
    await wrapper.setProps({ sdk: replacement.sdk })
    await flushPromises()
    oldCallback({ list: [{ name: 'Old adapter', address: 'Old adapter' }] }, 'success')
    await flushPromises()
    expect(wrapper.text()).not.toContain('Old adapter')
    wrapper.unmount()
    mounted = false
    expect(() => oldCallback({ list: [] }, 'success')).not.toThrow()
  } finally { if (mounted) wrapper.unmount() }
})
