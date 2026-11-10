import { h, nextTick, KeepAlive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import OverflowList from '..'
const mutationDescriptor = Object.getOwnPropertyDescriptor(document.defaultView!, 'MutationObserver')
const owners: ReturnType<typeof mount>[] = []
const hosts: HTMLElement[] = []
function host() { const node = document.createElement('div'); document.body.append(node); hosts.push(node); return node }
beforeEach(() => {
  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(function (this: HTMLElement) { return this.classList.contains('c-overflow-list-overflow') ? 30 : parseFloat(this.style.width) || 0 })
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockImplementation(function (this: HTMLElement) { return parseFloat(this.style.width) || 0 })
  vi.spyOn(HTMLElement.prototype, 'getClientRects').mockImplementation(() => [new DOMRect(0, 0, 221, 20)] as unknown as DOMRectList)
})
afterEach(() => {
  owners.splice(0).forEach(w => w.unmount())
  hosts.splice(0).forEach(node => node.remove())
  vi.restoreAllMocks()
  if (mutationDescriptor) Object.defineProperty(document.defaultView!, 'MutationObserver', mutationDescriptor)
  else Reflect.deleteProperty(document.defaultView!, 'MutationObserver')
})
async function settled() { for (let i = 0; i < 8; i++) await nextTick() }
async function fixture(props: Record<string, unknown> = {}, widths = [60, 60, 60, 60]) {
  const w = mount(OverflowList, { attachTo: host(), props, attrs: { style: { width: '221px' } }, slots: { default: () => widths.map((width, index) => h('span', { key: index, 'data-item': index, style: { width: width + 'px', marginRight: '3px' } }, String(index))) } }); owners.push(w); await settled(); return w
}
const visible = (w: ReturnType<typeof mount>) => w.findAll('[data-item]').map(n => n.attributes('data-item'))
test('a minimum equal to or greater than total retains all items even when they overflow', async () => {
  for (const min of [4, 8]) { const w = await fixture({ min }); expect(visible(w)).toHaveLength(4); expect(w.find('.c-overflow-list-overflow').exists()).toBe(false) }
})
test('a live minimum changes layout without changing container width', async () => {
  const w = await fixture(); expect(visible(w)).toHaveLength(2)
  await w.setProps({ min: 3 }); await settled(); expect(visible(w)).toHaveLength(3)
  await w.setProps({ min: 4 }); await settled(); expect(visible(w)).toHaveLength(4)
})
test('changing the fold end uses the correct item widths', async () => {
  const w = await fixture({}, [40, 40, 100, 100]); expect(visible(w)).toEqual(['0', '1'])
  await w.setProps({ from: 'start' }); await settled(); expect(visible(w)).toEqual(['3'])
})
test('live spacing remeasures and event listener Promises are notifications', async () => {
  const values: number[] = []
  const w = await fixture({ onChange: (number: number) => { values.push(number); return new Promise(() => {}) } })
  await w.setProps({ margin: 0 }); await settled(); expect(visible(w)).toHaveLength(3); expect(values[values.length - 1]).toBe(1)
})
test('spacing preserves caller margins rather than rewriting slot VNodes', async () => {
  const w = await fixture({ min: 4 }); expect(w.get('[data-item]').element.getAttribute('style')).toContain('margin-right: 3px')
})
test('same-count item replacement invalidates width by identity', async () => {
  let wide = false
  const w = mount(OverflowList, { attachTo: host(), attrs: { style: { width: '221px' } }, slots: { default: () => [0, 1, 2, 3].map(index => h('span', { key: wide && index === 0 ? 'replacement' : index, 'data-item': index, style: { width: (wide && index === 0 ? 160 : 60) + 'px' } }, String(index))) } }); owners.push(w)
  await settled(); expect(visible(w)).toEqual(['0', '1'])
  wide = true; w.vm.$forceUpdate(); await settled(); expect(visible(w)).toEqual(['0'])
})
test('invalid numeric and enum values warn and recover to finite defaults', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const w = await fixture({ min: Infinity, margin: NaN, from: 'side' })
  expect(warn).toHaveBeenCalled(); expect(visible(w)).toEqual(['0', '1']); expect(w.html()).not.toMatch(/NaN|Infinity/)
})

test('retired mutation callbacks cannot measure after unmount', async () => {
  const callbacks: MutationCallback[] = []
  const disconnect = vi.fn()
  vi.spyOn(document.defaultView!, 'MutationObserver').mockImplementation(function (callback: MutationCallback) {
    callbacks.push(callback)
    return { observe: vi.fn(), disconnect, takeRecords: () => [] }
  })
  const w = await fixture()
  expect(callbacks.length).toBeGreaterThan(0)
  const reads = vi.spyOn(document.defaultView!, 'getComputedStyle')
  w.unmount()
  reads.mockClear()
  callbacks.forEach(callback => callback([], {} as MutationObserver))
  await settled()
  expect(reads).not.toHaveBeenCalled()
  expect(disconnect).toHaveBeenCalled()
})
test('KeepAlive suspends measurements and remeasures on activation', async () => {
  const callbacks: MutationCallback[] = []
  vi.spyOn(document.defaultView!, 'MutationObserver').mockImplementation(function (callback: MutationCallback) {
    callbacks.push(callback)
    return { observe: vi.fn(), disconnect: vi.fn(), takeRecords: () => [] }
  })
  const active = ref(true), minimum = ref(0)
  const w = mount({ render: () => h(KeepAlive, () => active.value ? h(OverflowList, { min: minimum.value, style: { width: '221px' } }, () => [0, 1, 2, 3].map(index => h('span', { key: index, 'data-item': index, style: { width: '60px' } }))) : null) }, { attachTo: host() })
  owners.push(w)
  await settled(); expect(visible(w)).toHaveLength(2)
  const retired = callbacks.slice()
  active.value = false; await settled()
  expect(callbacks.length).toBeGreaterThan(0)
  const reads = vi.spyOn(document.defaultView!, 'getComputedStyle'); reads.mockClear()
  retired.forEach(callback => callback([], {} as MutationObserver)); await settled()
  expect(reads).not.toHaveBeenCalled()
  minimum.value = 4; active.value = true; await settled()
  expect(visible(w)).toHaveLength(4)
  reads.mockClear(); retired.forEach(callback => callback([], {} as MutationObserver)); await settled()
  expect(reads).not.toHaveBeenCalled()
})
