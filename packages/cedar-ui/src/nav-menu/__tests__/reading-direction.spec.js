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
import NavMenu from '..'
import Trigger from '../../trigger'
test('horizontal root navigation switches live without selecting or losing focus', async () => {
  const wrapper = setup(NavMenu, { props: { mode: 'horizontal', responsive: false, options: [{ key: 'a', label: 'A' }, { key: 'disabled', label: 'disabled', disabled: true }, { key: 'b', label: 'B' }] } })
  await settled()
  const items = wrapper.findAll('[data-nav-item]'); items[0].element.focus()
  await items[0].trigger('keydown', { key: 'ArrowLeft' }); expect(document.activeElement).toBe(items[2].element)
  hosts[0].dir = 'ltr'; await settled()
  await items[2].trigger('keydown', { key: 'ArrowLeft' }); expect(document.activeElement).toBe(items[0].element)
  expect(wrapper.emitted('select')).toBeUndefined()
})
test('vertical branch keys mirror and preserve parent focus', async () => {
  const wrapper = setup(NavMenu, { props: { options: [{ key: 'parent', label: 'Parent', children: [{ key: 'child', label: 'Child' }] }] } })
  await settled(); const parent = wrapper.get('[data-nav-key="parent"]'); parent.element.focus()
  await parent.trigger('keydown', { key: 'ArrowLeft' }); await settled()
  const child = wrapper.get('[data-nav-key="child"]'); expect(document.activeElement).toBe(child.element)
  await child.trigger('keydown', { key: 'ArrowRight' }); await settled()
  expect(document.activeElement).toBe(parent.element); expect(parent.attributes('aria-expanded')).toBe('false')
})
test('collapsed portals open to inline end and keep the source direction after switching', async () => {
  const wrapper = setup(NavMenu, { props: { collapsed: true, popupClass: 'direction-contract-popup', options: [{ key: 'parent', label: 'Parent', children: [{ key: 'child', label: 'Child' }] }] } })
  await settled(); const parent = wrapper.get('[data-nav-key="parent"]'); parent.element.focus()
  await parent.trigger('keydown', { key: 'ArrowLeft' }); await settled()
  expect(document.querySelector('.direction-contract-popup').closest('[trigger-placement]').getAttribute('dir')).toBe('rtl')
  expect(wrapper.findComponent(Trigger).props('placement')).toBe('left-start')
  hosts[0].dir = 'ltr'; await settled()
  expect(document.querySelector('.direction-contract-popup').closest('[trigger-placement]').getAttribute('dir')).toBe('ltr')
})
