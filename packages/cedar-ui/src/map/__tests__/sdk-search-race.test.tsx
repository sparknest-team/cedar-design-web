import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test('coordinate search ignores results from an older query or a cleared input', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat', 'PoiInfo'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const pending: Array<(value: unknown) => void> = []
  const suggestions: Array<(value: unknown) => void> = []
  let defer = false
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
  class FakeSearch {
    geocoder() { return defer ? new Promise((resolve) => pending.push(resolve)) : Promise.resolve({ address: 'Initial' }) }
  }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  Object.defineProperty(globalThis, 'PoiInfo', { configurable: true, writable: true, value: class {} })
  const updates = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2, address: 'Initial' }, enableGisSearch: true, fetch: { get: () => new Promise((resolve) => suggestions.push(resolve)), post: vi.fn() }, 'onUpdate:modelValue': updates } })
    await flushPromises()
    defer = true
    const input = wrapper.get('input')
    await input.setValue('3,4')
    await input.setValue('5,6')
    expect(pending).toHaveLength(2)
    pending[1]({ address: 'New' })
    await flushPromises()
    pending[0]({ address: 'Old' })
    await flushPromises()
    expect(updates).toHaveBeenCalledTimes(1)
    expect(updates).toHaveBeenCalledWith(expect.objectContaining({ longitude: 5, latitude: 6, address: 'New' }))
    await input.setValue('7,8')
    expect(pending).toHaveLength(3)
    await input.setValue('')
    pending[2]({ address: 'Cleared' })
    await flushPromises()
    expect(updates).toHaveBeenCalledTimes(1)
    await input.setValue('old query')
    await input.setValue('new query')
    suggestions[1]({ data: [{ name: 'New suggestion' }] })
    await flushPromises()
    suggestions[0]({ data: [{ name: 'Old suggestion' }] })
    await flushPromises()
    expect(wrapper.text()).toContain('New suggestion')
    expect(wrapper.text()).not.toContain('Old suggestion')
    await input.setValue('pending query')
    await input.setValue('')
    suggestions[2]({ data: [{ name: 'Cleared suggestion' }] })
    await flushPromises()
    expect(wrapper.text()).not.toContain('Cleared suggestion')
    await input.setValue('9,10')
    await wrapper.setProps({ modelValue: { longitude: 11, latitude: 12, address: 'Parent' } })
    pending[3]({ address: 'Superseded' })
    await flushPromises()
    expect(updates).toHaveBeenCalledTimes(1)
    await input.setValue('13,14')
    wrapper.unmount()
    wrapper = undefined
    pending[4]({ address: 'Unmounted' })
    await flushPromises()
    expect(updates).toHaveBeenCalledTimes(1)
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
