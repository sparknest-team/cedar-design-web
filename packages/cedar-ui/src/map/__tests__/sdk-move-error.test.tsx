import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import MapSelect from '../map-select'

test('current map move failure is reported and releases the confirm button', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  const pending: Array<(error: unknown) => void> = []
  let deferred = false
  let map: FakeMap | undefined
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
    on(_event: string, handler: () => Promise<void>) { this.handler = handler }
  }
  class FakeSearch { geocoder() { return deferred ? new Promise((_resolve, reject) => pending.push(reject)) : Promise.resolve({}) } }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const errors = vi.fn()
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(MapSelect, { props: { modelValue: {}, popupContainer: false, onError: errors } })
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    await flushPromises()
    expect(map).toBeDefined()
    await new Promise((resolve) => setTimeout(resolve, 350))
    deferred = true
    map!.center = new FakeLngLat(3, 4)
    const task = map!.handler()
    await flushPromises()
    expect(pending).toHaveLength(1)
    const confirm = wrapper.findAll('.c-dialog-footer button').at(-1)!
    expect(confirm.attributes('disabled')).toBeDefined()
    const failure = new Error('geocode failed')
    pending[0](failure)
    await expect(task).resolves.toBeUndefined()
    await flushPromises()
    expect(errors).toHaveBeenCalledTimes(1)
    expect(errors).toHaveBeenCalledWith(failure)
    expect(confirm.attributes('disabled')).toBeUndefined()
    map!.center = new FakeLngLat(5, 6)
    const first = map!.handler()
    map!.center = new FakeLngLat(7, 8)
    const second = map!.handler()
    await flushPromises()
    expect(pending).toHaveLength(3)
    pending[1](new Error('obsolete failure'))
    await expect(first).resolves.toBeUndefined()
    expect(errors).toHaveBeenCalledTimes(1)
    expect(confirm.attributes('disabled')).toBeDefined()
    const currentFailure = new Error('current failure')
    pending[2](currentFailure)
    await expect(second).resolves.toBeUndefined()
    await flushPromises()
    expect(errors).toHaveBeenCalledTimes(2)
    expect(errors).toHaveBeenLastCalledWith(currentFailure)
    expect(confirm.attributes('disabled')).toBeUndefined()
    map!.center = new FakeLngLat(9, 10)
    const superseded = map!.handler()
    await flushPromises()
    expect(confirm.attributes('disabled')).toBeDefined()
    await wrapper.setProps({ modelValue: { address: 'External address' } })
    await flushPromises()
    expect(confirm.attributes('disabled')).toBeUndefined()
    pending[3](new Error('superseded failure'))
    await expect(superseded).resolves.toBeUndefined()
    expect(errors).toHaveBeenCalledTimes(2)
    await new Promise((resolve) => setTimeout(resolve, 350))
    map!.center = new FakeLngLat(11, 12)
    const retired = map!.handler()
    await flushPromises()
    expect(confirm.attributes('disabled')).toBeDefined()
    await wrapper.findAll('.c-dialog-footer button')[0].trigger('click')
    await flushPromises()
    deferred = false
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    await flushPromises()
    const reopened = wrapper.findAll('.c-dialog-footer button').at(-1)!
    expect(reopened.attributes('disabled')).toBeUndefined()
    pending[4](new Error('closed dialog failure'))
    await expect(retired).resolves.toBeUndefined()
    expect(errors).toHaveBeenCalledTimes(2)
    wrapper.unmount()
    deferred = false
    const visible = ref(true)
    wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => visible.value ? h(MapSelect, { modelValue: {}, popupContainer: false, onError: errors }) : null }) }))
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 350))
    deferred = true
    map!.center = new FakeLngLat(13, 14)
    const inactive = map!.handler()
    await flushPromises()
    expect(wrapper.findAll('.c-dialog-footer button').at(-1)!.attributes('disabled')).toBeDefined()
    visible.value = false
    await nextTick()
    pending[5](new Error('inactive failure'))
    await expect(inactive).resolves.toBeUndefined()
    expect(errors).toHaveBeenCalledTimes(2)
    visible.value = true
    await nextTick()
    await flushPromises()
    expect(wrapper.findAll('.c-dialog-footer button').at(-1)!.attributes('disabled')).toBeUndefined()
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
}, 15000)
