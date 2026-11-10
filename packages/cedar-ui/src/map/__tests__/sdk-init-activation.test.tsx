import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import MapComponent from '../map'

test.each(['sdk', 'geocode', 'retry'] as const)('inactive %s initialization is retired and restarts on activation', async (stage) => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map((name) => Object.getOwnPropertyDescriptor(globalThis, name))
  let finish!: (value?: any) => void
  let calls = 0, mapCount = 0, searchCount = 0
  const destroyed = vi.fn(), onInit = vi.fn()
  const sdkInit = vi.fn(() => {
    calls++
    if (stage === 'retry' && calls === 1) return Promise.reject(new Error('first attempt failed'))
    return (stage === 'sdk' && calls === 1) || (stage === 'retry' && calls === 2)
      ? new Promise<void>((resolve) => { finish = resolve }) : Promise.resolve()
  })
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
      if (sdk) mapCount++
    }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on() {}
    destroy = destroyed
  }
  class FakeSearch {
    number = ++searchCount
    geocoder() { return stage === 'geocode' && this.number === 1 ? new Promise((resolve) => { finish = resolve }) : Promise.resolve({}) }
  }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: sdkInit } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const visible = ref(true)
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => visible.value ? h(MapComponent, { modelValue: { longitude: 1, latitude: 2 }, onInit }) : null }) }))
    await flushPromises()
    if (stage === 'retry') {
      await wrapper.get('[data-map-retry]').trigger('click')
      await flushPromises()
    }
    expect(finish).toBeTypeOf('function')
    visible.value = false
    await nextTick()
    expect(destroyed).toHaveBeenCalledTimes(stage === 'geocode' ? 1 : 0)
    visible.value = true
    await nextTick()
    await flushPromises()
    expect(onInit).toHaveBeenCalledTimes(1)
    expect(mapCount).toBe(stage === 'geocode' ? 2 : 1)
    finish(stage === 'geocode' ? { city: 'obsolete' } : undefined)
    await flushPromises()
    expect(onInit).toHaveBeenCalledTimes(1)
    expect(mapCount).toBe(stage === 'geocode' ? 2 : 1)
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => {
      if (originals[index]) Object.defineProperty(globalThis, name, originals[index]!)
      else Reflect.deleteProperty(globalThis, name)
    })
  }
})
