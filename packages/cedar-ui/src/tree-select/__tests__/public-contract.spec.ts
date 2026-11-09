import { h } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import TreeSelect from '..'

const data = [{ value: 'a', label: 'Alpha' }]
for (const editMode of ['direct', 'click'] as const) {
  test(`${editMode}: a user default slot does not replace the owned editor`, async () => {
    const content = vi.fn(() => h('p', 'Unused default'))
    const owner = mount(TreeSelect, { props: { editMode, open: true, data }, slots: { default: content } })
    try {
      await flushPromises()
      expect(content).not.toHaveBeenCalled()
    } finally {
      owner.unmount()
    }
  })
}
test('shared field slots render their actual state and clear through the normal action', async () => {
  const arrow = vi.fn((_scope: unknown) => h('span', 'Arrow'))
  const owner = mount(TreeSelect, {
    props: { editMode: 'direct', defaultValue: 'a', data, clearable: true },
    slots: {
      suffix: () => h('span', { 'data-suffix': '' }, 'Suffix'),
      'arrow-icon': arrow,
      'clear-icon': ({ clear }: any) =>
        h('button', { 'data-custom-clear': '', onClick: () => clear() }, 'Clear custom'),
      selected: () => h('strong', { 'data-selected': '' }, 'Selected custom'),
    },
  })
  try {
    await flushPromises()
    expect(owner.find('[data-suffix]').exists()).toBe(true)
    expect(owner.find('[data-selected]').exists()).toBe(true)
    await owner.get('input').trigger('focus')
    expect(arrow.mock.calls.at(-1)?.[0]).toMatchObject({ focus: true, menuOpen: false })
    await owner.get('[data-custom-clear]').trigger('click')
    expect(owner.emitted('update:modelValue')).toEqual([[undefined]])
    expect(owner.emitted('clear')).toHaveLength(1)
  } finally {
    owner.unmount()
  }
})
test('field loading icon and popup loader keep distinct scopes, including line layout', async () => {
  const owner = mount(TreeSelect, {
    attachTo: document.body,
    props: { editMode: 'direct', open: true, data, loading: true },
    slots: {
      'loading-icon': () => h('span', { 'data-field-loading': '' }, 'Field wait'),
      loader: () => h('div', { 'data-panel-loading': '' }, 'Panel wait'),
    },
  })
  try {
    await flushPromises()
    expect(owner.find('[data-field-loading]').exists()).toBe(true)
    expect(document.querySelector('[data-panel-loading]')).not.toBeNull()
    await owner.setProps({ loadingMode: 'line' })
    expect(owner.find('[data-field-loading]').exists()).toBe(false)
    expect(document.querySelector('[data-panel-loading]')).not.toBeNull()
  } finally {
    owner.unmount()
  }
})
test('read scope preserves explicit label values and nullable empty values', async () => {
  const read = vi.fn((_scope: unknown) => h('span', 'Reading'))
  const value = { value: 'a', label: 'Chosen' }
  const owner = mount(TreeSelect, { props: { readPretty: true, modelValue: value, data }, slots: { read } })
  try {
    await flushPromises()
    expect(read.mock.calls.at(-1)?.[0]).toEqual({ value, text: 'Chosen' })
    await owner.setProps({ modelValue: null, emptyText: 'None' })
    expect(read.mock.calls.at(-1)?.[0]).toEqual({ value: null, text: '' })
  } finally {
    owner.unmount()
  }
})
test('treeCheckable controls value shape while explicit filterable controls search', async () => {
  const owner = mount(TreeSelect, { props: { editMode: 'direct', treeCheckable: true, data } })
  try {
    await flushPromises()
    expect(owner.get('input').attributes('aria-autocomplete')).toBe('none')
    await owner.setProps({ filterable: true })
    expect(owner.get('input').attributes('aria-autocomplete')).toBe('list')
  } finally {
    owner.unmount()
  }
})

test('tree label forwarding retains raw-node and status arguments', async () => {
  const label = vi.fn((node: Record<string, unknown>, _status: unknown) =>
    h('span', { 'data-tree-label': '' }, String(node.label)),
  )
  const owner = mount(TreeSelect, {
    attachTo: document.body,
    props: { editMode: 'direct', open: true, data, modelValue: 'a' },
    slots: { 'tree-slot-label': label },
  })
  try {
    await flushPromises()
    expect(label.mock.calls.at(-1)?.[0]).toMatchObject({ value: 'a', label: 'Alpha' })
    expect(label.mock.calls.at(-1)?.[1]).toMatchObject({ selected: true })
  } finally {
    owner.unmount()
  }
})
