import { flushPromises, mount } from '@vue/test-utils'
import { createSSRApp, defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, test, vi } from 'vitest'
import MapSelect from '../map-select'

describe('MapSelect model and geocoding', () => {
  test('reflects replacement, empty values and address without coordinates', async () => {
    const wrapper = mount(MapSelect, { props: { modelValue: { address: 'Old' } } })
    const input = () => wrapper.find('input')
    expect(input().element.value).toBe('Old')
    await wrapper.setProps({ modelValue: {} })
    expect(input().element.value).toBe('')
    await wrapper.setProps({ modelValue: { address: 'Only address' } })
    expect(input().element.value).toBe('Only address')
    wrapper.unmount()
  })

  test('rejects stale results, handles zero coordinates, and never mutates the parent', async () => {
    const pending: Array<(value: object) => void> = []
    const handler = vi.fn(() => new Promise<object>((resolve) => pending.push(resolve)))
    const original = Object.freeze({ longitude: 1, latitude: 2, extra: 'keep' })
    const replacement = Object.freeze({ longitude: 0, latitude: 0, extra: 'keep' })
    const wrapper = mount(MapSelect, { props: { modelValue: original, geocoderHandler: handler } })
    await wrapper.setProps({ modelValue: replacement })
    expect(handler).toHaveBeenNthCalledWith(2, 0, 0)
    pending[1]({ address: 'New' })
    await flushPromises()
    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toMatchObject({ longitude: 0, latitude: 0, address: 'New', extra: 'keep' })
    expect(wrapper.find('input').element.value).toBe('') // Parent has not accepted the proposal.
    pending[0]({ address: 'Old' })
    await flushPromises()
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    expect(original).toEqual({ longitude: 1, latitude: 2, extra: 'keep' })
    await wrapper.setProps({ modelValue: wrapper.emitted('update:modelValue')![0][0] as object })
    await nextTick()
    expect(wrapper.find('input').element.value).toBe('New')
    wrapper.unmount()
  })

  test('reports current failures and ignores completion after unmount', async () => {
    let reject!: (error: Error) => void
    const handler = vi.fn(() => new Promise((_resolve, fail) => { reject = fail }))
    const onError = vi.fn()
    const onUpdate = vi.fn()
    const wrapper = mount(MapSelect, { props: { modelValue: { longitude: 1, latitude: 2 }, geocoderHandler: handler, onError, 'onUpdate:modelValue': onUpdate } })
    const cause = new Error('offline')
    reject(cause)
    await flushPromises()
    expect(wrapper.emitted('error')?.[0]).toEqual([cause])
    await wrapper.setProps({ modelValue: { longitude: 3, latitude: 4 } })
    wrapper.unmount()
    reject(new Error('late'))
    await flushPromises()
    expect(onError).toHaveBeenCalledTimes(1)
    expect(onUpdate).not.toHaveBeenCalled()
  })

  test('reports invalid service responses and avoids proposals without a service', async () => {
    const missing = mount(MapSelect, { props: { modelValue: { longitude: 1, latitude: 2 } } })
    await flushPromises()
    expect(missing.emitted('update:modelValue')).toBeUndefined()
    missing.unmount()
    const wrapper = mount(MapSelect, { props: { modelValue: { longitude: 1, latitude: 2 }, fetch: { get: vi.fn(async () => ({ isValid: () => false })), post: vi.fn() } } })
    await flushPromises()
    expect(wrapper.emitted('error')?.[0]?.[0]).toBeInstanceOf(Error)
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    wrapper.unmount()
  })

  test('provides a named keyboard trigger and immutable clear proposal', async () => {
    const model = Object.freeze({ address: 'Old', extra: 'keep' })
    const wrapper = mount(MapSelect, { attachTo: document.body, props: { modelValue: model, clearable: true }, attrs: { id: 'location', 'aria-label': 'Location' } })
    const input = wrapper.get('input')
    expect(input.attributes()).toMatchObject({ id: 'location', 'aria-label': 'Location', role: 'button', 'aria-haspopup': 'dialog', 'aria-expanded': 'false', readonly: '' })
    await wrapper.get('button[aria-label="清空"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toMatchObject({ address: undefined, extra: 'keep' })
    expect(model.address).toBe('Old')
    expect(input.element.value).toBe('Old')
    await input.trigger('keydown', { key: 'Enter' })
    expect(input.attributes('aria-expanded')).toBe('true')
    wrapper.unmount()
  })

  test('does not open when disabled', async () => {
    const wrapper = mount(MapSelect, { props: { modelValue: {}, disabled: true } })
    await wrapper.get('input').trigger('keydown', { key: ' ' })
    await wrapper.get('input').trigger('click')
    expect(wrapper.get('input').attributes('aria-expanded')).toBe('false')
    wrapper.unmount()
  })

  test('closes an open dialog when disabled', async () => {
    const wrapper = mount(MapSelect, { props: { modelValue: {} } })
    await wrapper.get('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.get('input').attributes('aria-expanded')).toBe('true')
    await wrapper.setProps({ disabled: true })
    expect(wrapper.get('input').attributes('aria-expanded')).toBe('false')
    wrapper.unmount()
  })

  test('discards pending work on deactivation and refreshes on reactivation', async () => {
    const visible = ref(true)
    const pending: Array<(value: object) => void> = []
    const handler = vi.fn(() => new Promise<object>((resolve) => pending.push(resolve)))
    const update = vi.fn()
    const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => visible.value ? h(MapSelect, { modelValue: { longitude: 1, latitude: 2 }, geocoderHandler: handler, 'onUpdate:modelValue': update }) : null }) }))
    visible.value = false
    await nextTick()
    pending[0]({ address: 'stale' })
    await flushPromises()
    expect(update).not.toHaveBeenCalled()
    visible.value = true
    await nextTick()
    expect(handler).toHaveBeenCalledTimes(2)
    pending[1]({ address: 'current' })
    await flushPromises()
    expect(update).toHaveBeenCalledTimes(1)
    wrapper.unmount()
  })

  test('does not start geocoding during server rendering', async () => {
    const handler = vi.fn()
    await renderToString(createSSRApp({ render: () => h(MapSelect, { modelValue: { longitude: 1, latitude: 2 }, geocoderHandler: handler }) }))
    expect(handler).not.toHaveBeenCalled()
  })

  test('reacts to alias and geocoder URL changes while preserving zero coordinates', async () => {
    const get = vi.fn(async () => ({ isValid: () => true, data: { address: 'resolved' } }))
    const wrapper = mount(MapSelect, { props: { modelValue: { lng: 0, lat: 0 }, fetch: { get, post: vi.fn() }, geocoderUrl: '/first' } })
    await flushPromises()
    expect(get).not.toHaveBeenCalled()
    await wrapper.setProps({ valueKeyAlias: { longitude: 'lng', latitude: 'lat', address: 'label' } })
    await flushPromises()
    expect(get).toHaveBeenLastCalledWith('/first', expect.objectContaining({ params: expect.objectContaining({ latitude: 0, longitude: 0 }) }))
    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toMatchObject({ lng: 0, lat: 0, label: 'resolved' })
    await wrapper.setProps({ geocoderUrl: '/second' })
    await flushPromises()
    expect(get).toHaveBeenLastCalledWith('/second', expect.anything())
    wrapper.unmount()
  })
})

test('keyboard entry ignores composing and previously prevented events', async () => {
  const wrapper = mount(MapSelect, { props: { modelValue: {} } })
  try {
    const input = wrapper.get('input').element as HTMLInputElement
    const composition = new KeyboardEvent('keydown', { key: 'Enter', keyCode: 229, bubbles: true, cancelable: true })
    input.dispatchEvent(composition)
    await nextTick()
    expect(composition.defaultPrevented).toBe(false)
    expect(input.getAttribute('aria-expanded')).toBe('false')
    const consumed = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
    consumed.preventDefault()
    input.dispatchEvent(consumed)
    await nextTick()
    expect(input.getAttribute('aria-expanded')).toBe('false')
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))
    await nextTick()
    expect(input.getAttribute('aria-expanded')).toBe('true')
  } finally { wrapper.unmount() }
})

test('map entry does not open on an already prevented Enter', async () => {
  const wrapper = mount(MapSelect, { props: { modelValue: {} } })
  try {
    const input = wrapper.get('input').element as HTMLInputElement
    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
    event.preventDefault()
    input.dispatchEvent(event)
    await nextTick()
    expect(input.getAttribute('aria-expanded')).toBe('false')
  } finally { wrapper.unmount() }
})
