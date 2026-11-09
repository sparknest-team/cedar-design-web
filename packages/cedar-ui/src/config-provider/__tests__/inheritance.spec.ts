import { defineComponent, h, inject, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import ConfigProvider from '..'
import { configProviderInjectionKey } from '../context'
import { getPrefixCls } from '../../_utils/global-config'
import enUS from '../../locale/lang/en-us'
import zhCN from '../../locale/lang/zh-cn'
import Empty from '../../empty'
import Loading from '../../loading'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach(w => w.unmount()))
const keep = (w: ReturnType<typeof mount>) => { owners.push(w); return w }
const Probe = defineComponent({ setup() {
  const config = inject(configProviderInjectionKey, undefined)
  return () => h('pre', { id: 'config-values' }, JSON.stringify({ prefix: config?.prefixCls ?? null, namespace: getPrefixCls('scope'), size: config?.size ?? null, locale: config?.locale?.locale ?? null, update: config?.updateAtScroll ?? null, scroll: config?.scrollToClose ?? null, dir: config?.dir ?? null }))
} })
const read = (w: ReturnType<typeof mount>) => JSON.parse(w.get('#config-values').text())
test('empty nested provider inherits ambient fields rather than reinstalling defaults', () => {
  const w = keep(mount(ConfigProvider, { props: { prefixCls: 'outer', size: 'lg', locale: enUS, updateAtScroll: true, scrollToClose: true, dir: 'rtl' }, slots: { default: () => h(ConfigProvider, {}, () => h(Probe)) } }))
  expect(read(w)).toEqual({ prefix: 'outer', namespace: 'outer-scope', size: 'lg', locale: 'en-US', update: true, scroll: true, dir: 'rtl' })
})
test('explicit local false and scalar fields override inherited values', () => {
  const w = keep(mount(ConfigProvider, { props: { prefixCls: 'outer', size: 'lg', locale: enUS, updateAtScroll: true, scrollToClose: true, dir: 'rtl' }, slots: { default: () => h(ConfigProvider, { prefixCls: 'inner', size: 'sm', locale: zhCN, updateAtScroll: false, scrollToClose: false, dir: 'ltr' }, () => h(Probe)) } }))
  expect(read(w)).toEqual({ prefix: 'inner', namespace: 'inner-scope', size: 'sm', locale: 'zh-CN', update: false, scroll: false, dir: 'ltr' })
})
test('inherited fields remain reactive and removing a local override reveals the current parent', async () => {
  const size = ref<'lg' | 'sm'>('lg'), local = ref<'xs' | undefined>(undefined), locale = ref(enUS)
  const w = keep(mount({ render: () => h(ConfigProvider, { size: size.value, locale: locale.value }, () => h(ConfigProvider, { size: local.value }, () => h(Probe))) }))
  expect(read(w).size).toBe('lg')
  size.value = 'sm'; locale.value = zhCN
  await flushPromises()
  expect(read(w).size).toBe('sm'); expect(read(w).locale).toBe('zh-CN')
  local.value = 'xs'; await flushPromises(); expect(read(w).size).toBe('xs')
  local.value = undefined; await flushPromises(); expect(read(w).size).toBe('sm')
})
test('consumer slots inherit individually and follow conditional local additions/removals', async () => {
  const local = ref(false)
  const w = keep(mount({ render: () => h(ConfigProvider, {}, {
    empty: () => h('span', { 'data-parent-empty': '' }, 'Parent empty'),
    loading: () => h('span', { 'data-parent-loading': '' }, 'Parent loading'),
    default: () => h(ConfigProvider, {}, { default: () => [h(Empty), h(Loading)], ...(local.value ? { empty: () => h('span', { 'data-local-empty': '' }, 'Local empty') } : {}) }),
  }) }))
  expect(w.find('[data-parent-empty]').exists()).toBe(true)
  expect(w.find('[data-parent-loading]').exists()).toBe(true)
  local.value = true; await flushPromises()
  expect(w.find('[data-local-empty]').exists()).toBe(true)
  expect(w.find('[data-parent-empty]').exists()).toBe(false)
  expect(w.find('[data-parent-loading]').exists()).toBe(true)
  local.value = false; await flushPromises()
  expect(w.find('[data-parent-empty]').exists()).toBe(true)
})
test('an empty nested provider never inherits and repeats the parent default subtree', () => {
  const w = keep(mount(ConfigProvider, { slots: { default: () => [h('p', 'One subtree'), h(ConfigProvider)] } }))
  expect(w.text()).toBe('One subtree')
  expect(w.findAll('p')).toHaveLength(1)
})
test('root effective defaults remain c and false without claiming a size or locale', () => {
  const w = keep(mount(ConfigProvider, { slots: { default: () => h(Probe) } }))
  expect(read(w)).toEqual({ prefix: 'c', namespace: 'c-scope', size: null, locale: null, update: false, scroll: false, dir: null })
})
test('global selects application injection only during setup', async () => {
  const global = ref(false)
  const w = keep(mount({ render: () => h(ConfigProvider, { global: global.value, size: 'lg' }, () => h(Probe)) }))
  expect(w.vm.$.appContext.provides[configProviderInjectionKey as symbol]).toBeUndefined()
  global.value = true; await flushPromises()
  expect(w.vm.$.appContext.provides[configProviderInjectionKey as symbol]).toBeUndefined()
  expect(read(w).size).toBe('lg')
})
test('application config fields update while mounted and installation is not restored on provider removal', async () => {
  const w = keep(mount(ConfigProvider, { props: { global: true, size: 'lg' }, slots: { default: () => h(Probe) } }))
  const context = w.vm.$.appContext
  const installed = context.provides[configProviderInjectionKey as symbol]
  expect(installed.size).toBe('lg')
  await w.setProps({ size: 'sm', global: false })
  expect(installed.size).toBe('sm')
  expect(context.provides[configProviderInjectionKey as symbol]).toBe(installed)
  w.unmount(); owners.splice(owners.indexOf(w), 1)
  expect(context.provides[configProviderInjectionKey as symbol]).toBe(installed)
})
