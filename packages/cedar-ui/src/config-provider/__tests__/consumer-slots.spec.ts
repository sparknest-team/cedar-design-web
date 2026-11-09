import { h, ref } from 'vue'
import { mount, flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import ConfigProvider from '..'
import Empty from '../../empty'
import Loading from '../../loading'

test('provider consumer slots do not render as ordinary provider content', () => {
  const w = mount(ConfigProvider, { slots: { default: () => h('p', 'Content'), empty: () => h('span', 'Empty override'), loading: () => h('span', 'Loading override') } })
  expect(w.text()).toBe('Content')
  w.unmount()
})
test('real Empty and Loading consumers receive the provider slots', () => {
  const w = mount(ConfigProvider, { slots: { default: () => [h(Empty), h(Loading)], empty: ({ component }) => h('span', { 'data-empty-scope': component }, 'Provider empty'), loading: () => h('span', { 'data-provider-loading': '' }, 'Provider loading') } })
  expect(w.get('[data-empty-scope]').attributes('data-empty-scope')).toBe('empty')
  expect(w.findAll('[data-provider-loading]')).toHaveLength(1)
  expect(w.get('[role="status"]').text()).toContain('Provider loading')
  w.unmount()
})
test('local Empty content and Loading icon take precedence over provider content', () => {
  const w = mount(ConfigProvider, { slots: { default: () => [h(Empty, {}, () => 'Local empty'), h(Loading, {}, { icon: () => h('span', 'Local icon') })], empty: () => h('span', { 'data-provider-empty': '' }), loading: () => h('span', { 'data-provider-loading': '' }) } })
  expect(w.text()).toContain('Local empty')
  expect(w.text()).toContain('Local icon')
  expect(w.find('[data-provider-empty]').exists()).toBe(false)
  expect(w.find('[data-provider-loading]').exists()).toBe(false)
  w.unmount()
})

test('provider fragment roots emit Empty click once and nested Empty keeps recursion protection', async () => {
  let clicks = 0
  const w = mount(ConfigProvider, { slots: {
    default: () => h(Empty, { onClick: () => clicks++ }),
    empty: () => [h('button', { id: 'first' }, 'First'), h('button', { id: 'second' }, 'Second'), h(Empty, { description: 'Nested empty' })],
  } })
  expect(w.text()).toContain('Nested empty')
  await w.get('#first').trigger('click')
  expect(clicks).toBe(1)
  await w.get('#second').trigger('click')
  expect(clicks).toBe(2)
  w.unmount()
})

test('conditional local slots replace provider content and fall back after removal', async () => {
  const local = ref(false)
  const w = mount(ConfigProvider, { slots: { default: () => h(Empty, {}, local.value ? { default: () => 'Local description', extra: () => h('button', 'Reload') } : {}), empty: () => h('span', { 'data-global-empty': '' }, 'Global empty') } })
  expect(w.find('[data-global-empty]').exists()).toBe(true)
  local.value = true
  await flushPromises()
  expect(w.text()).toContain('Local description')
  expect(w.get('button').text()).toBe('Reload')
  expect(w.find('[data-global-empty]').exists()).toBe(false)
  local.value = false
  await flushPromises()
  expect(w.get('[data-global-empty]').text()).toBe('Global empty')
  w.unmount()
})
