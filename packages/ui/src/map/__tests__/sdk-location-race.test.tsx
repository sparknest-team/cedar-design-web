import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test('an older place lookup cannot overwrite a newer selected place', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const pending: Array<(value: unknown) => void> = []
  let complete!: (result: unknown, status: string) => void
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
    constructor(options: any) { complete = options.complete }
    geocoder() { return new Promise((resolve) => pending.push(resolve)) }
  }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const updates = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapComponent, { props: { modelValue: { longitude: 1, latitude: 2, address: 'Initial' }, 'onUpdate:modelValue': updates } })
    await flushPromises()
    // Initialization may start an unrelated coordinate lookup.
    pending.length = 0
    complete({ list: [
      { name: 'First', address: 'First', longitude: 10, latitude: 11 },
      { name: 'Second', address: 'Second', longitude: 20, latitude: 21 },
    ] }, 'success')
    await wrapper.vm.$nextTick()
    const choices = wrapper.findAll('.map-search-box-item')
    expect(choices).toHaveLength(2)
    await choices[0].trigger('click')
    await choices[1].trigger('click')
    expect(pending).toHaveLength(2)
    pending[1]({ city: 'New city' })
    await flushPromises()
    pending[0]({ city: 'Old city' })
    await flushPromises()
    expect(updates).toHaveBeenCalledTimes(1)
    expect(updates).toHaveBeenCalledWith(expect.objectContaining({ longitude: 20, latitude: 21, city: 'New city' }))
    await choices[0].trigger('click')
    expect(pending).toHaveLength(3)
    wrapper.unmount()
    wrapper = undefined
    pending[2]({ city: 'After unmount' })
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
