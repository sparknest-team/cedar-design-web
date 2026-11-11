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
import Tree from '..'
const data = [{ value: 'p', label: 'Parent', children: [{ value: 'disabled', label: 'disabled', disabled: true }, { value: 'c', label: 'Child' }] }, { value: 's', label: 'Sibling' }]
function focused(wrapper) { return document.getElementById(wrapper.attributes('aria-activedescendant'))?.getAttribute('data-key') }
test('RTL expand/child/parent keys mirror while up/down and selection remain independent', async () => {
  const wrapper = setup(Tree, { props: { data, animation: false } }); await settled(); wrapper.element.focus(); await settled()
  expect(focused(wrapper)).toBe('p')
  await wrapper.trigger('keydown', { key: 'ArrowLeft' }); await settled()
  expect(wrapper.get('[data-key="p"]').attributes('aria-expanded')).toBe('true')
  await wrapper.trigger('keydown', { key: 'ArrowLeft' }); await settled(); expect(focused(wrapper)).toBe('c')
  await wrapper.trigger('keydown', { key: 'ArrowRight' }); await settled(); expect(focused(wrapper)).toBe('p')
  await wrapper.trigger('keydown', { key: 'ArrowRight' }); await settled()
  expect(wrapper.get('[data-key="p"]').attributes('aria-expanded')).toBe('false')
  hosts[0].dir = 'ltr'; await settled()
  await wrapper.trigger('keydown', { key: 'ArrowRight' }); await settled()
  await wrapper.trigger('keydown', { key: 'ArrowDown' }); await settled(); expect(focused(wrapper)).toBe('c')
  expect(wrapper.emitted('select')).toBeUndefined()
  await wrapper.trigger('keydown', { key: 'Enter' }); expect(wrapper.emitted('update:selectedValues').at(-1)).toEqual([['c']])
  await wrapper.trigger('keydown', { key: 'End' }); await settled(); expect(focused(wrapper)).toBe('s')
})
test('native LTR nesting and collapse/filter updates keep an existing active descendant', async () => {
  const wrapper = setup(Tree, { attrs: { dir: 'ltr' }, props: { data, animation: false, defaultExpandAll: true } }); await settled(); wrapper.element.focus(); await settled()
  await wrapper.trigger('keydown', { key: 'ArrowRight' }); await settled(); expect(focused(wrapper)).toBe('c')
  await wrapper.setProps({ expandedValues: [] }); await settled(); expect(focused(wrapper)).toBe('p')
  await wrapper.setProps({ data: [] }); await settled(); expect(wrapper.attributes('aria-activedescendant')).toBeUndefined()
})
test('space checks the focused node and virtual rows keep tree focus across direction changes', async () => {
  const wrapper = setup(Tree, { props: { data, checkable: true, animation: false, virtualListProps: { height: 120, threshold: 0 } } }); await settled(); wrapper.element.focus(); await settled()
  await wrapper.trigger('keydown', { key: ' ' }); await settled(); expect(wrapper.emitted('check')).toHaveLength(1)
  hosts[0].dir = 'ltr'; await settled(); expect(document.activeElement).toBe(wrapper.element); expect(focused(wrapper)).toBe('p')
})
