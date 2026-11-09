import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import FilterForm from '..'
import { FormItem } from '../../form'
import Grid, { GridItem } from '../../grid'

const Control = defineComponent({
  props: { modelValue: String, disabled: Boolean },
  emits: ['update:modelValue'],
  setup: (props) => () => h('input', { value: props.modelValue }),
})
const originalMedia = globalThis.matchMedia
const owners: ReturnType<typeof mount>[] = []
beforeEach(() => {
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
})
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  vi.stubGlobal('matchMedia', originalMedia)
})
function fixture(props: Record<string, unknown> = {}, slots = {}) {
  const w = mount(FilterForm, {
    props: {
      fields: [{ component: Control, field: 'query' }],
      cols: 1,
      collapsible: false,
      changeDebounce: 0,
      ...props,
    },
    slots,
  })
  owners.push(w)
  return w
}

test('inner Form reset stays local; replacing the business model synchronizes without synthetic updates', async () => {
  const w = fixture({ modelValue: { query: 'first' } })
  await nextTick()
  await w.setProps({ modelValue: { query: 'external' } })
  expect(w.getComponent(Control).props('modelValue')).toBe('external')
  w.vm.formRef.resetFields('query')
  await nextTick()
  expect(w.getComponent(Control).props('modelValue')).toBe('first')
  expect(w.props('modelValue')).toEqual({ query: 'external' })
  expect(w.emitted('update:modelValue')).toBeUndefined()
  await w.setProps({ modelValue: { query: 'business reset' } })
  expect(w.getComponent(Control).props('modelValue')).toBe('business reset')
  expect(w.emitted('update:modelValue')).toBeUndefined()
})

test('model and collapsed mirrors keep unaccepted local proposals until an external replacement', async () => {
  const fields = ['query', 'b', 'c'].map((field) => ({ component: Control, field }))
  const w = fixture({ fields, collapsible: true, collapsed: true, modelValue: { query: 'parent' } })
  await nextTick()
  await nextTick()
  w.getComponent(Control).vm.$emit('update:modelValue', 'local')
  await nextTick()
  expect(w.getComponent(Control).props('modelValue')).toBe('local')
  expect(w.props('modelValue')).toEqual({ query: 'parent' })
  await w.get('button.c-filter-form__collapse').trigger('click')
  expect(w.props('collapsed')).toBe(true)
  expect(w.getComponent(Grid).props('collapsed')).toBe(false)
  expect(w.emitted('update:collapsed')).toEqual([[false]])
  await w.setProps({ modelValue: { query: 'replaced' }, collapsed: false })
  await w.setProps({ collapsed: true })
  expect(w.getComponent(Control).props('modelValue')).toBe('replaced')
  expect(w.getComponent(Grid).props('collapsed')).toBe(true)
})

test('field, nested Grid and FormItem overrides retain their current explicit priorities', () => {
  const w = fixture({
    modelValue: { query: 'actual' },
    cols: 1,
    collapsed: true,
    gridProps: { cols: 2, colGap: 12, collapsed: false, collapsedRows: 4 },
    fieldMap: { native: { component: Control, defaultProps: { modelValue: 'registration', disabled: true } } },
    fields: [
      {
        component: 'native',
        field: 'query',
        label: 'Schema label',
        props: { modelValue: 'field', disabled: false },
        gridItemProps: { span: 2 },
        formItemProps: { field: 'validation-key', label: 'Override label' },
      },
    ],
  })
  expect(w.getComponent(Control).props('modelValue')).toBe('actual')
  expect(w.getComponent(Control).props('disabled')).toBe(false)
  expect(w.getComponent(Grid).props()).toMatchObject({ cols: 2, colGap: 12, collapsed: false, collapsedRows: 4 })
  expect(w.getComponent(GridItem).props('span')).toBe(2)
  expect(w.getComponent(FormItem).props()).toMatchObject({ field: 'validation-key', label: 'Override label' })
})

test('actions exposes no scoped helpers and remains available with collapsible=false', () => {
  const scopes: unknown[] = []
  const w = fixture(
    {},
    {
      actions: (scope: unknown) => {
        scopes.push(scope)
        return h('button', { type: 'button', 'data-custom': '' }, 'Search')
      },
    },
  )
  expect(w.find('[data-custom]').exists()).toBe(true)
  expect(w.find('button.c-filter-form__collapse').exists()).toBe(false)
  expect(scopes.length).toBeGreaterThan(0)
  expect(scopes.every((scope) => Object.keys(scope as object).length === 0)).toBe(true)
})
