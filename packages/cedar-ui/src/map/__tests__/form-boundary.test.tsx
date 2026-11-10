import { flushPromises, mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { expect, test, vi } from 'vitest'
import Form from '../../form/Form.vue'
import FormItem from '../../form/FormItem.vue'
import MapSelect from '../map-select'

test('MapSelect exposes the form error on its field, not on the map search', async () => {
  const NativeMap = globalThis.Map
  const names = ['Map', 'MapService', 'SearchService', 'LngLat'] as const
  const originals = names.map(name => Object.getOwnPropertyDescriptor(globalThis, name))
  class FakeLngLat { constructor(public lng: number, public lat: number) {} getLng() { return this.lng } getLat() { return this.lat } }
  class FakeMap extends NativeMap<any, any> {
    center: FakeLngLat
    constructor(options: any) { const sdk = options && !Array.isArray(options) && 'center' in options; super(sdk ? undefined : options); this.center = sdk ? options.center : new FakeLngLat(0, 0) }
    setCenter(center: FakeLngLat) { this.center = center }
    getCenter() { return this.center }
    on() {}
  }
  class FakeSearch { geocoder = vi.fn(async () => ({})); search() {} }
  Object.defineProperty(globalThis, 'Map', { configurable: true, writable: true, value: FakeMap })
  Object.defineProperty(globalThis, 'MapService', { configurable: true, writable: true, value: { init: async () => {} } })
  Object.defineProperty(globalThis, 'SearchService', { configurable: true, writable: true, value: FakeSearch })
  Object.defineProperty(globalThis, 'LngLat', { configurable: true, writable: true, value: FakeLngLat })
  const validate = vi.fn((_value: unknown, done: (message?: string) => void) => done())
  let wrapper: ReturnType<typeof mount> | undefined
  try {
    wrapper = mount(Form, { props: { editMode: 'direct', model: { location: {} } }, slots: { default: () => h(FormItem, { field: 'location', label: 'Location', validateTrigger: 'focus', rules: [{ validator: validate }] }, () => h(MapSelect, { modelValue: { address: 'Existing' }, popupContainer: false, 'aria-describedby': 'help' })) } })
    ;(wrapper.vm as any).setFields({ location: { message: 'Location error' } })
    await nextTick()
    const id = wrapper.get('[data-form-errors]').attributes('id')
    const field = wrapper.get('input[role="button"]')
    expect(field.attributes('aria-describedby')?.split(/\s+/)).toEqual(['help', id])
    await field.trigger('focus')
    await flushPromises()
    expect(validate).toHaveBeenCalled()
    ;(wrapper.vm as any).setFields({ location: { message: 'Location error' } })
    await nextTick()
    await field.trigger('keydown', { key: 'Enter' })
    await flushPromises()
    const search = wrapper.get('.map-search-input input')
    expect(search.attributes('aria-describedby')).toBeUndefined()
    expect(search.attributes('aria-invalid')).toBeUndefined()
    validate.mockClear()
    await search.trigger('focus')
    await flushPromises()
    expect(validate).not.toHaveBeenCalled()
    ;(wrapper.vm as any).clearValidate()
    await nextTick()
    expect(field.attributes('aria-describedby')).toBe('help')
  } finally {
    wrapper?.unmount()
    names.forEach((name, index) => originals[index] ? Object.defineProperty(globalThis, name, originals[index]!) : Reflect.deleteProperty(globalThis, name))
  }
})
