import { afterEach, expect, test, vi } from 'vitest'
import { mount, flushPromises, type VueWrapper } from '@vue/test-utils'
import { createSSRApp, h, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import Segmented from '..'
import Form from '../../form'
import FormItem from '../../form/FormItem.vue'

const owners: VueWrapper[] = []
afterEach(() => { owners.splice(0).forEach(w => w.unmount()); document.body.innerHTML = '' })
const keep = (w: VueWrapper) => { owners.push(w); return w }
const checked = (w: VueWrapper) => w.findAll<HTMLInputElement>('input').map(n => n.element.checked)

test('controlled rejection restores both native radios and never caches a rejected proposal', async () => {
  const w = keep(mount(Segmented, { attachTo: document.body, props: { options: ['a', 'b', 'c'], modelValue: 'a', defaultValue: 'c' } }))
  w.findAll<HTMLInputElement>('input')[1].element.click()
  await flushPromises()
  expect(checked(w)).toEqual([true, false, false])
  expect(w.emitted('change')?.map(args => args[0])).toEqual(['b'])
  await w.setProps({ modelValue: undefined })
  expect(checked(w)).toEqual([false, false, true])
})

test('accepted proposals and uncontrolled activation notify exactly once', async () => {
  const value = ref('a'), change = vi.fn()
  const w = keep(mount({ render: () => h(Segmented, { options: ['a', 'b'], modelValue: value.value, 'onUpdate:modelValue': next => value.value = next, onChange: change }) }, { attachTo: document.body }))
  w.findAll<HTMLInputElement>('input')[1].element.click(); await flushPromises()
  expect(value.value).toBe('b'); expect(checked(w)).toEqual([false, true]); expect(change).toHaveBeenCalledTimes(1)
  w.findAll<HTMLInputElement>('input')[1].element.click(); await flushPromises()
  expect(change).toHaveBeenCalledTimes(1)
})

test('defaultValue is initialization only and missing labels fall back to the typed value', async () => {
  const w = keep(mount(Segmented, { props: { options: [{ value: 0 }, { value: 'b' }], defaultValue: 0 } }))
  expect(w.findAll('label').map(n => n.text())).toEqual(['0', 'b'])
  await w.setProps({ defaultValue: 'b' })
  expect(checked(w)).toEqual([true, false]); expect(w.emitted('change')).toBeUndefined()
})

test('form disabled and size inherit, while explicit false and local size override them', async () => {
  const disabled = ref<boolean | undefined>(undefined), size = ref<'sm' | undefined>(undefined)
  const w = keep(mount({ render: () => h(Form, { model: {}, disabled: true, size: 'lg' }, () => h(Segmented, { options: ['a', 'b'], disabled: disabled.value, size: size.value })) }))
  expect(w.findAll<HTMLInputElement>('input').every(n => n.element.disabled)).toBe(true)
  expect(w.get('[role="radiogroup"]').classes()).toContain('c-segmented--size-lg')
  disabled.value = false; size.value = 'sm'; await flushPromises()
  expect(w.findAll<HTMLInputElement>('input').every(n => !n.element.disabled)).toBe(true)
  expect(w.get('[role="radiogroup"]').classes()).toContain('c-segmented--size-sm')
  size.value = undefined; await flushPromises()
  expect(w.get('[role="radiogroup"]').classes()).toContain('c-segmented--size-lg')
})

test('form readonly prevents native selection and proposals, with explicit false override', async () => {
  const readonly = ref<boolean | undefined>(undefined), change = vi.fn()
  const w = keep(mount({ render: () => h(Form, { model: {}, readonly: true }, () => h(Segmented, { options: ['a', 'b'], defaultValue: 'a', readonly: readonly.value, onChange: change })) }, { attachTo: document.body }))
  w.findAll<HTMLInputElement>('input')[1].element.click(); await flushPromises()
  expect(checked(w)).toEqual([true, false]); expect(change).not.toHaveBeenCalled()
  expect(w.get('[role="radiogroup"]').attributes('aria-readonly')).toBe('true')
  readonly.value = false; await flushPromises()
  w.findAll<HTMLInputElement>('input')[1].element.click(); await flushPromises()
  expect(checked(w)).toEqual([false, true]); expect(change).toHaveBeenCalledTimes(1)
})

test('number and string values retain distinct DOM identity across reorder and removal', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const w = keep(mount(Segmented, { props: { options: [{ value: 1, label: 'Number' }, { value: '1', label: 'String' }, { value: 2, label: 'Two' }], defaultValue: 1 } }))
  try {
    await w.setProps({ options: [{ value: '1', label: 'String' }, { value: 1, label: 'Number' }] })
    expect(w.findAll('label').map(n => n.text())).toEqual(['String', 'Number'])
    expect(checked(w)).toEqual([false, true])
    expect(warn.mock.calls.some(args => String(args[0]).includes('Duplicate keys'))).toBe(false)
  } finally { warn.mockRestore() }
})

test('duplicate same-type values use the first option without duplicate radios', () => {
  const w = keep(mount(Segmented, { props: { options: [{ value: 1, label: 'First' }, { value: 1, label: 'Second' }, { value: '1', label: 'String' }] } }))
  expect(w.findAll('label').map(n => n.text())).toEqual(['First', 'String'])
})

test('FormItem error presentation marks the group and native controls invalid without a new error prop', () => {
  const w = keep(mount(Form, { props: { model: { pick: 'a' } }, slots: { default: () => h(FormItem, { field: 'pick', validateStatus: 'error' }, () => h(Segmented, { options: ['a', 'b'], modelValue: 'a' })) } }))
  expect(w.get('[role="radiogroup"]').attributes('aria-invalid')).toBe('true')
  expect(w.findAll('input').every(n => n.attributes('aria-invalid') === 'true')).toBe(true)
})

test('explicit name is preserved and disabled options never propose changes', async () => {
  const w = keep(mount(Segmented, { props: { name: 'billing', options: [{ value: 'a' }, { value: 'b', disabled: true }], defaultValue: 'a' } }))
  expect(w.findAll('input').every(n => n.attributes('name') === 'billing')).toBe(true)
  await w.findAll('input')[1].trigger('change')
  expect(w.emitted('change')).toBeUndefined(); expect(checked(w)).toEqual([true, false])
})

test('generated native names are deterministic across fresh SSR renders and hydrate unchanged', async () => {
  const Root = { render: () => h('main', [h(Segmented, { options: ['a', 'b'] }), h(Segmented, { options: ['a', 'b'] })]) }
  const html = await renderToString(createSSRApp(Root))
  expect(await renderToString(createSSRApp(Root))).toBe(html)
  const host = document.createElement('div'); host.innerHTML = html; document.body.append(host)
  const names = () => Array.from(host.querySelectorAll('input')).map(n => n.name)
  const before = names(); expect(before[0]).toBe(before[1]); expect(before[0]).not.toBe(before[2])
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const app = createSSRApp(Root)
  try { app.mount(host); await flushPromises(); expect(names()).toEqual(before); expect(warn.mock.calls.some(args => String(args[0]).includes('Hydration'))).toBe(false) }
  finally { app.unmount(); warn.mockRestore() }
})
