import { h } from 'vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import ResizeBox from '..'
import ConfigProvider from '../../config-provider'
import enUS from '../../locale/lang/en-us'
const owners: VueWrapper[] = []
const hosts: HTMLElement[] = []
function host() { const node = document.createElement('div'); document.body.append(node); hosts.push(node); return node }
afterEach(() => { owners.splice(0).forEach(w => w.unmount()); hosts.splice(0).forEach(node => node.remove()) })
function fixture(direction: string, controlled = false) {
 const w = mount(ResizeBox, { attachTo: host(), props: { directions: [direction], ...(controlled ? { width: 210 } : {}) }, attrs: { style: { width: '210px', height: '120px' } } }); owners.push(w); return w
}
test('unbounded pixel controls expose spinbutton minimum and no fictitious maximum', async () => {
 const w = fixture('right', true), handle = w.get('[role="spinbutton"]')
 expect(handle.attributes('aria-valuenow')).toBe('210'); expect(handle.attributes('aria-valuemin')).toBe('0'); expect(handle.attributes('aria-valuemax')).toBeUndefined(); expect(handle.attributes('aria-orientation')).toBeUndefined()
 await handle.trigger('keydown', { key: 'ArrowUp' }); expect(w.emitted('update:width')?.at(-1)).toEqual([220]); expect(handle.attributes('aria-valuenow')).toBe('210')
})
test('Up/Down, Home and larger steps consistently adjust the numeric dimension on every edge', async () => {
 for (const direction of ['left', 'right', 'top', 'bottom']) {
  const w = fixture(direction), handle = w.get('[role="spinbutton"]'), axis = direction === 'left' || direction === 'right' ? 'width' : 'height', initial = axis === 'width' ? 210 : 120
  await handle.trigger('keydown', { key: 'ArrowUp' }); expect(w.emitted(`update:${axis}`)?.at(-1)).toEqual([initial + 10])
  await handle.trigger('keydown', { key: 'ArrowDown', shiftKey: true }); expect(w.emitted(`update:${axis}`)?.at(-1)).toEqual([initial - 40])
  await handle.trigger('keydown', { key: 'PageUp' }); expect(w.emitted(`update:${axis}`)?.at(-1)).toEqual([initial + 10])
  await handle.trigger('keydown', { key: 'Home' }); expect(w.emitted(`update:${axis}`)?.at(-1)).toEqual([0])
  const count = w.emitted(`update:${axis}`)?.length; await handle.trigger('keydown', { key: 'End' }); expect(w.emitted(`update:${axis}`)).toHaveLength(count!)
 }
})
test('names and pixel value text follow ConfigProvider locale', () => {
 const w = mount(ConfigProvider, { props: { locale: enUS }, slots: { default: () => h(ResizeBox, { width: 210, directions: ['left'] }) } }); owners.push(w)
 const handle = w.get('[role="spinbutton"]'); expect(handle.attributes('aria-label')).toBe('Left edge width'); expect(handle.attributes('aria-valuetext')).toBe('210 pixels')
})
