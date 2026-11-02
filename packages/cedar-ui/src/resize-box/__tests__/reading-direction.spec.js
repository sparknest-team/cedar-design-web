import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
const wrappers = [], hosts = []
function setup(component, options = {}, dir = 'rtl') {
  const host = document.createElement('div'); host.dir = dir; document.body.append(host); hosts.push(host)
  const wrapper = mount(component, { attachTo: host, ...options }); wrappers.push(wrapper); return wrapper
}
async function settled() { await nextTick(); await Promise.resolve(); await nextTick(); await nextTick() }
afterEach(() => { wrappers.splice(0).forEach(w => w.unmount()); hosts.splice(0).forEach(h => h.remove()) })
function geometry(el, width = 200, height = 200) { Object.defineProperties(el, { clientWidth: { configurable: true, value: width }, clientHeight: { configurable: true, value: height } }) }
function mouse(type, x, y = 0) { window.dispatchEvent(new MouseEvent(type, { clientX: x, clientY: y, bubbles: true })) }
import ResizeBox from '..'
test('physical left/right handles keep their size delta in both reading directions', async () => {
  const w = setup(ResizeBox, { props: { directions: ['left', 'right', 'top', 'bottom'] } }); geometry(w.element, 200, 120); await settled()
  for (const dir of ['rtl', 'ltr']) {
    hosts[0].dir = dir; await settled()
    await w.get('.c-resizebox-direction-left').trigger('mousedown', { clientX: 100, button: 0 }); mouse('mousemove', 80); mouse('mouseup', 80)
    expect(w.emitted('update:width').at(-1)).toEqual([220])
    await w.get('.c-resizebox-direction-right').trigger('mousedown', { clientX: 100, button: 0 }); mouse('mousemove', 120); mouse('mouseup', 120)
    expect(w.emitted('update:width').at(-1)).toEqual([220])
    await w.get('.c-resizebox-direction-top').trigger('keydown', { key: 'ArrowUp' }); expect(w.emitted('update:height').at(-1)).toEqual([130])
    await w.get('.c-resizebox-direction-bottom').trigger('keydown', { key: 'ArrowDown' }); expect(w.emitted('update:height').at(-1)).toEqual([130])
  }
})
test('negative dimensions clamp to zero and removing an active edge cancels its listener', async () => {
  const w = setup(ResizeBox); geometry(w.element); await settled()
  await w.get('[role="separator"]').trigger('mousedown', { clientX: 100, button: 0 }); mouse('mousemove', -150)
  expect(w.emitted('update:width').at(-1)).toEqual([0])
  const count = w.emitted('update:width').length
  await w.setProps({ directions: [] }); mouse('mousemove', 150)
  expect(w.emitted('update:width')).toHaveLength(count)
})
