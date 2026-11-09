import { h } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Transfer from '..'
import Form from '../../form'

const data = [{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }]
test.each([{ disabled: true }, { readonly: true }])('form state blocks both native choices and custom clear callback: %o', async state => {
  const update = vi.fn()
  const w = mount(Form, { props: { model: {}, ...state }, slots: { default: () => h(Transfer, { data, defaultValue: [{ value: 'a' }], 'onUpdate:modelValue': update }, { 'target-title': ({ onClear }: { onClear: () => void }) => h('button', { id: 'custom-clear', onClick: onClear }, 'Clear') }) } })
  try {
    expect(w.get('.c-transfer-view-source input[type="checkbox"]').attributes('disabled')).toBeDefined()
    await w.get('#custom-clear').trigger('click')
    expect(update).not.toHaveBeenCalled()
  } finally { w.unmount() }
})

test('explicit false overrides inherited disabled state', () => {
  const w = mount(Form, { props: { model: {}, disabled: true }, slots: { default: () => h(Transfer, { data, disabled: false }) } })
  try { expect(w.get('.c-transfer-view-source input[type="checkbox"]').attributes('disabled')).toBeUndefined() } finally { w.unmount() }
})

test('readonly loads asynchronous options for viewing without enabling changes', async () => {
  const load = vi.fn(async () => data)
  const w = mount(Form, { props: { model: {}, readonly: true }, slots: { default: () => h(Transfer, { data: load }) } })
  try {
    await flushPromises()
    expect(load).toHaveBeenCalled()
    expect(w.get('.c-transfer-view-source').text()).toContain('A')
    expect(w.get('.c-transfer-view-source input[type="checkbox"]').attributes('disabled')).toBeDefined()
  } finally { w.unmount() }
})

test('ordinary transfer rows do not add inert button tab stops; icon actions are native buttons', () => {
  const w = mount(Transfer, { props: { data, defaultValue: [{ value: 'a' }], targetOperation: 'menu', clearText: '' } })
  try {
    for (const row of w.findAll('.c-transfer-list-item')) {
      expect(row.attributes('role')).toBeUndefined()
      expect(row.attributes('tabindex')).toBeUndefined()
    }
    expect(w.get('button.c-transfer-view-header-clear-btn').attributes('aria-label')).toBeTruthy()
    expect(w.get('button.c-transfer-list-item-operation-btn').attributes('aria-label')).toBeTruthy()
  } finally { w.unmount() }
})
