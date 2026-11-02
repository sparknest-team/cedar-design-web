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
import Split from '..'
test('RTL drag grows the first pane toward the left, preserves ratio units and cancels on live direction switch', async () => {
  const w = setup(Split); geometry(w.element); await settled()
  const handle = w.get('[role="separator"]')
  await handle.trigger('mousedown', { clientX: 100, button: 0 }); mouse('mousemove', 80)
  expect(w.emitted('update:size').at(-1)).toEqual([0.6])
  const count = w.emitted('update:size').length
  hosts[0].dir = 'ltr'; await settled(); mouse('mousemove', 50)
  expect(w.emitted('update:size')).toHaveLength(count)
  await handle.trigger('mousedown', { clientX: 100, button: 0 }); mouse('mousemove', 120); mouse('mouseup', 120)
  expect(w.emitted('update:size').at(-1)).toEqual([0.7])
})
test('separator keys honor bounds and vertical mode is independent of reading direction', async () => {
  const w = setup(Split, { props: { defaultSize: '100px', min: '80px', max: '160px' } }); geometry(w.element); await settled()
  const handle = w.get('[role="separator"]')
  await handle.trigger('keydown', { key: 'ArrowLeft' }); expect(w.emitted('update:size').at(-1)).toEqual(['110px'])
  await handle.trigger('keydown', { key: 'End' }); expect(w.emitted('update:size').at(-1)).toEqual(['160px'])
  await handle.trigger('keydown', { key: 'Home' }); expect(w.emitted('update:size').at(-1)).toEqual(['80px'])
  await w.setProps({ orientation: 'vertical' }); await handle.trigger('keydown', { key: 'ArrowDown' })
  expect(w.emitted('update:size').at(-1)).toEqual(['90px']); expect(handle.attributes('aria-orientation')).toBe('horizontal')
  await w.setProps({ disabled: true }); expect(w.find('[role="separator"]').exists()).toBe(false)
})
test('a local LTR override, controlled rejection and unmount keep size and cursor ownership safe', async () => {
  const updates = []
  const w = setup(Split, { attrs: { dir: 'ltr' }, props: { size: 0.5, 'onUpdate:size': value => updates.push(value) } }); geometry(w.element); await settled()
  await w.get('[role="separator"]').trigger('keydown', { key: 'ArrowRight' }); expect(w.emitted('update:size').at(-1)).toEqual([0.55])
  expect(w.get('.c-split-pane-first').element.style.flex).toContain('50%')
  document.body.style.cursor = 'crosshair'
  await w.get('[role="separator"]').trigger('mousedown', { clientX: 100, button: 0 })
  w.unmount(); wrappers.pop(); expect(document.body.style.cursor).toBe('crosshair')
  const count = updates.length; mouse('mousemove', 150); expect(updates).toHaveLength(count)
  document.body.style.cursor = ''
})
