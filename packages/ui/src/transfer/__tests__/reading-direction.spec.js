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
import Transfer from '..'
test('switching direction preserves selected identity/order and checkbox actions work in both scopes', async () => {
  const wrapper = setup(Transfer, { props: { data: [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C', required: true }], defaultValue: [{ value: 'b' }] } }); await settled()
  const source = wrapper.get('.c-transfer-view-source')
  await source.findAll('input[type="checkbox"]')[1].setValue(true); await settled()
  expect(wrapper.emitted('update:modelValue').at(-1)[0].map(item => item.value)).toEqual(['b', 'a'])
  const count = wrapper.emitted('change').length
  hosts[0].dir = 'ltr'; await settled(); expect(wrapper.emitted('change')).toHaveLength(count)
  await wrapper.get('.c-transfer-view-header-clear-text').trigger('click'); await settled()
  expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([[]])
})
