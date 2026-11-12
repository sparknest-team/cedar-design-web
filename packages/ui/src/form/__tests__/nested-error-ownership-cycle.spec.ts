import { createSSRApp, h, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Form from '../Form.vue'
import FormItem from '../FormItem.vue'
import Input from '../../input'

test('a dynamic no-style field follows its owning visible error through both directions', async () => {
  const noStyle = ref(true)
  const description = ref('first-help')
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { outer: '', inner: '' } },
    slots: { default: () => h(FormItem, { field: 'outer', label: 'Outer' }, () =>
      h(FormItem, { field: 'inner', noStyle: noStyle.value, label: 'Inner' }, () =>
        h(Input, { 'aria-describedby': description.value }))) },
  })
  try {
    const form = wrapper.vm as any
    const input = () => wrapper.get('input')
    const expectDescription = (message: string, help: string) => {
      const ids = input().attributes('aria-describedby')!.split(/\s+/)
      expect(ids).toHaveLength(2)
      expect(ids[0]).toBe(help)
      expect(wrapper.get(`[id="${ids[1]}"]`).text()).toContain(message)
      return ids[1]
    }
    form.setFields({ outer: { message: 'Outer error' }, inner: { message: 'Inner error' } })
    await nextTick()
    const outerId = expectDescription('Outer error', 'first-help')
    noStyle.value = false
    await nextTick()
    const innerId = expectDescription('Inner error', 'first-help')
    expect(innerId).not.toBe(outerId)
    description.value = 'second-help'
    await nextTick()
    expect(expectDescription('Inner error', 'second-help')).toBe(innerId)
    noStyle.value = true
    await nextTick()
    expect(expectDescription('Outer error', 'second-help')).toBe(outerId)
    form.clearValidate()
    await nextTick()
    expect(input().attributes('aria-describedby')).toBe('second-help')
  } finally { wrapper.unmount() }
})

test.each([true, false])('SSR does not reference a missing error message with noStyle=%s', async (noStyle) => {
  const html = await renderToString(createSSRApp({
    render: () => h(Form, { editMode: 'direct', model: { outer: '', inner: '' } }, {
      default: () => h(FormItem, { field: 'outer', validateStatus: 'error' }, () =>
        h(FormItem, { field: 'inner', noStyle, validateStatus: 'error' }, () =>
          h(Input, { 'aria-describedby': 'external' }))),
    }),
  }))
  expect(html).toContain('aria-describedby="external"')
  expect(html).not.toContain('c-form-error-')
  expect(html).not.toContain('role="alert"')
})

test('reusing and unmounting a field does not expose its previous error to another field', async () => {
  const field = ref('first')
  const shown = ref(true)
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { first: '', second: '' } },
    slots: { default: () => shown.value ? h(FormItem, { field: field.value }, () => h(Input, { 'aria-describedby': 'help' })) : null },
  })
  try {
    const form = wrapper.vm as any
    const input = () => wrapper.get('input')
    form.setFields({ first: { message: 'First error' } })
    await nextTick()
    const firstId = input().attributes('aria-describedby')!.split(/\s+/)[1]
    expect(wrapper.get(`[id="${firstId}"]`).text()).toContain('First error')
    field.value = 'second'
    await nextTick()
    expect(input().attributes('aria-describedby')).toBe('help')
    expect(wrapper.text()).not.toContain('First error')
    form.setFields({ second: { message: 'Second error' } })
    await nextTick()
    const secondId = input().attributes('aria-describedby')!.split(/\s+/)[1]
    expect(wrapper.get(`[id="${secondId}"]`).text()).toContain('Second error')
    shown.value = false
    await nextTick()
    expect(wrapper.find('input').exists()).toBe(false)
    expect(wrapper.find(`[id="${secondId}"]`).exists()).toBe(false)
    shown.value = true
    await nextTick()
    expect(input().attributes('aria-describedby')).toBe('help')
  } finally { wrapper.unmount() }
})

test('changing noStyle transfers an existing child error to and from the parent', async () => {
  const noStyle = ref(false)
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { inner: '' } },
    slots: { default: () => h(FormItem, { label: 'Parent' }, () =>
      h(FormItem, { field: 'inner', noStyle: noStyle.value, label: 'Child' }, () => h(Input))) },
  })
  try {
    ;(wrapper.vm as any).setFields({ inner: { message: 'Child error' } })
    await nextTick()
    expect(wrapper.findAll('[data-form-errors]')).toHaveLength(1)
    noStyle.value = true
    await nextTick()
    const input = wrapper.get('input')
    const errorId = input.attributes('aria-describedby')
    expect(errorId).toBeTruthy()
    expect(wrapper.get(`[id="${errorId}"]`).text()).toContain('Child error')
    expect(wrapper.findAll('[data-form-errors]')).toHaveLength(1)
    noStyle.value = false
    await nextTick()
    expect(wrapper.findAll('[data-form-errors]')).toHaveLength(1)
    const newId = wrapper.get('input').attributes('aria-describedby')
    expect(wrapper.get(`[id="${newId}"]`).text()).toContain('Child error')
  } finally { wrapper.unmount() }
})

test('removing a no-style child removes its delegated error and preserves a sibling error', async () => {
  const shown = ref(true)
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { first: '', second: '' } },
    slots: { default: () => h(FormItem, { label: 'Parent' }, () => [
      shown.value ? h(FormItem, { field: 'first', noStyle: true }, () => h(Input)) : null,
      h(FormItem, { field: 'second', noStyle: true }, () => h(Input)),
    ]) },
  })
  try {
    ;(wrapper.vm as any).setFields({ first: { message: 'First error' }, second: { message: 'Second error' } })
    await nextTick()
    expect(wrapper.get('[data-form-errors]').text()).toContain('First error')
    expect(wrapper.get('[data-form-errors]').text()).toContain('Second error')
    shown.value = false
    await nextTick()
    expect(wrapper.get('[data-form-errors]').text()).not.toContain('First error')
    expect(wrapper.get('[data-form-errors]').text()).toContain('Second error')
    const id = wrapper.get('input').attributes('aria-describedby')
    expect(wrapper.get(`[id="${id}"]`).text()).toContain('Second error')
  } finally { wrapper.unmount() }
})

test('removing one of two no-style controls for the same field retains the remaining error', async () => {
  const shown = ref(true)
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { value: '' } },
    slots: { default: () => h(FormItem, { label: 'Parent' }, () => [
      shown.value ? h(FormItem, { field: 'value', noStyle: true }, () => h(Input)) : null,
      h(FormItem, { field: 'value', noStyle: true }, () => h(Input)),
    ]) },
  })
  try {
    ;(wrapper.vm as any).setFields({ value: { message: 'Shared error' } })
    await nextTick()
    expect(wrapper.get('[data-form-errors]').text()).toContain('Shared error')
    shown.value = false
    await nextTick()
    const id = wrapper.get('input').attributes('aria-describedby')
    expect(id).toBeTruthy()
    expect(wrapper.get(`[id="${id}"]`).text()).toContain('Shared error')
  } finally { wrapper.unmount() }
})

test('a successful same-field sibling cannot hide another sibling validation error', async () => {
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { value: 'example' } },
    slots: { default: () => h(FormItem, { label: 'Parent' }, () => [
      h(FormItem, { field: 'value', noStyle: true, validateTrigger: [], rules: [{ validator: (_value: unknown, done: (error?: string) => void) => done('First error') }] }, () => h(Input)),
      h(FormItem, { field: 'value', noStyle: true, validateTrigger: [], rules: [{ validator: (_value: unknown, done: (error?: string) => void) => done() }] }, () => h(Input)),
    ]) },
  })
  try {
    await (wrapper.vm as any).validate()
    await nextTick()
    const id = wrapper.get('input').attributes('aria-describedby')
    expect(id).toBeTruthy()
    expect(wrapper.get(`[id="${id}"]`).text()).toContain('First error')
  } finally { wrapper.unmount() }
})

test('a later async success cannot erase another same-field sibling error', async () => {
  const pending: Array<(error?: string) => void> = []
  const rule = { validator: (_value: unknown, done: (error?: string) => void) => new Promise<void>((resolve) => {
    pending.push((error) => { done(error); resolve() })
  }) }
  const wrapper = mount(Form, {
    props: { editMode: 'direct', model: { value: 'example' } },
    slots: { default: () => h(FormItem, { label: 'Parent' }, () => [
      h(FormItem, { field: 'value', noStyle: true, validateTrigger: [], rules: [rule] }, () => h(Input)),
      h(FormItem, { field: 'value', noStyle: true, validateTrigger: [], rules: [rule] }, () => h(Input)),
    ]) },
  })
  try {
    const validation = (wrapper.vm as any).validate()
    await flushPromises()
    expect(pending).toHaveLength(2)
    pending[0]('First error')
    await flushPromises()
    pending[1]()
    await validation
    await nextTick()
    const id = wrapper.get('input').attributes('aria-describedby')
    expect(id).toBeTruthy()
    expect(wrapper.get(`[id="${id}"]`).text()).toContain('First error')
  } finally { wrapper.unmount() }
})
