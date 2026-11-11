import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test('only the latest move geocoding result commits, including after unmount', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const pending: Array<(value: unknown) => void> = []
  let defer = false
  let map: any
  class FakeLngLat {
    constructor(public lng: number, public lat: number) {}
    getLng() { return this.lng }
    getLat() { return this.lat }
  }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    handler!: () => Promise<void>
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      this.center = sdk ? options.center : new FakeLngLat(0, 0)
      if (sdk) map = this
    }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on(_name: string, handler: () => Promise<void>) { this.handler = handler }
  }
  class FakeSearch {
    geocoder() { return defer ? new Promise((resolve) => pending.push(resolve)) : Promise.resolve({ address: 'Initial' }) }
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
    defer = true
    map.center = new FakeLngLat(3, 4)
    const first = map.handler()
    map.center = new FakeLngLat(5, 6)
    const second = map.handler()
    expect(pending).toHaveLength(2)
    pending[1]({ address: 'New' })
    await second
    pending[0]({ address: 'Old' })
    await first
    expect(updates).toHaveBeenCalledTimes(1)
    expect(updates).toHaveBeenCalledWith(expect.objectContaining({ longitude: 5, latitude: 6, address: 'New' }))
    expect(wrapper.emitted('loading:address')).toHaveLength(2)
    expect(wrapper.emitted('loaded:address')).toHaveLength(1)
    await new Promise((resolve) => setTimeout(resolve, 320))
    map.center = new FakeLngLat(7, 8)
    const third = map.handler()
    expect(pending).toHaveLength(3)
    await wrapper.setProps({ modelValue: { longitude: 12, latitude: 13, address: 'Parent' } })
    pending[2]({ address: 'Before parent update' })
    await third
    expect(updates).toHaveBeenCalledTimes(1)
    await new Promise((resolve) => setTimeout(resolve, 320))
    map.center = new FakeLngLat(14, 15)
    const fourth = map.handler()
    expect(pending).toHaveLength(4)
    wrapper.unmount()
    wrapper = undefined
    pending[3]({ address: 'After unmount' })
    await fourth
    expect(updates).toHaveBeenCalledTimes(1)
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
