import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test.each(['clear', 'deactivate', 'model', 'configuration'] as const)('%s releases a pending selection before another map move', async (mode) => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map(name => Object.getOwnPropertyDescriptor(globalThis, name))
  const pending: Array<(value: unknown) => void> = []
  const geocode = vi.fn(() => geocode.mock.calls.length === 1 ? Promise.resolve({}) : new Promise(resolve => pending.push(resolve)))
  let instance: FakeMap | undefined
  class FakeLngLat { constructor(public lng: number, public lat: number) {} getLng() { return this.lng } getLat() { return this.lat } }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    move!: () => Promise<void>
    constructor(options: any) {
      const sdk = options && !Array.isArray(options) && 'center' in options
      super(sdk ? undefined : options)
      this.center = sdk ? options.center : new FakeLngLat(0, 0)
      if (sdk) instance = this
    }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on(_name: string, handler: () => Promise<void>) { this.move = handler }
  }
  class FakeSearch { geocoder = geocode }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const shown = ref(true), model = ref({ longitude: 1, latitude: 2, address: 'Original' }), basePath = ref('/old'), updates = vi.fn(), errors = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    const props = { modelValue: { longitude: 1, latitude: 2, address: 'Original' }, enableGisSearch: true, fetch: { get: async () => ({ data: [{ name: 'Candidate', address: 'Other', lng: 3, lat: 4 }] }), post: vi.fn() }, 'onUpdate:modelValue': updates, onError: errors }
    wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => shown.value ? h(MapComponent, { ...props, modelValue: model.value, basePath: basePath.value }) : null }) }))
    await flushPromises()
    await wrapper.get('input').setValue('candidate')
    await flushPromises()
    await wrapper.get('.map-search-box-item').trigger('click')
    expect(pending).toHaveLength(1)
    if (mode === 'clear') await wrapper.get('input').setValue('')
    else if (mode === 'deactivate') { shown.value = false; await nextTick(); shown.value = true; await nextTick() }
    else if (mode === 'model') { model.value = { longitude: 1, latitude: 2, address: 'External' }; await nextTick() }
    else {
      basePath.value = '/new'
      await nextTick()
      await flushPromises()
      // The replacement service performs its own initial geocode.
      expect(pending).toHaveLength(2)
      pending.splice(1, 1)[0]({})
      await flushPromises()
    }
    instance!.center = new FakeLngLat(5, 6)
    const move = instance!.move()
    expect(pending).toHaveLength(2)
    pending[1]({ address: 'Moved' })
    await move
    pending[0]({ address: 'Late selection' })
    await flushPromises()
    expect(updates).toHaveBeenCalledTimes(1)
    expect(updates).toHaveBeenCalledWith(expect.objectContaining({ longitude: 5, latitude: 6 }))
    expect(errors).not.toHaveBeenCalled()
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => originals[index] ? Object.defineProperty(globalThis, name, originals[index]!) : Reflect.deleteProperty(globalThis, name))
  }
})
