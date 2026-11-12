import { mount } from '@vue/test-utils'
import { h, nextTick, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import Table from '..'
import CompiledFixture from './fixtures/dynamic-content-slot.vue'

for (const kind of ['empty', 'footer', 'summary-cell', 'value'] as const) {
  test(`conditional ${kind} slot updates with stable data and columns`, async () => {
    const enabled = ref(false)
    const columns = [{ title: 'Name', dataIndex: 'name', ...(kind === 'value' ? { slotName: 'value' } : {}) }]
    const data = kind === 'empty' ? [] : [{ key: 'a', name: 'Ada' }]
    const wrapper = mount({ render: () => h(Table, { columns, data, pagination: false, height: 200, summary: kind === 'summary-cell' },
      enabled.value ? { [kind]: () => h('span', { 'data-dynamic-content': kind }, `Custom ${kind}`) } : {}) })
    try {
      const target = () => wrapper.find(`[data-dynamic-content="${kind}"]`)
      expect(target().exists()).toBe(false)
      enabled.value = true
      await nextTick()
      expect(target().exists()).toBe(true)
      enabled.value = false
      await nextTick()
      expect(target().exists()).toBe(false)
    } finally { wrapper.unmount() }
  })
}

for (const kind of ['empty', 'footer', 'summary-cell', 'value'] as const) {
  test(`replacing ${kind} slot updates the content and restores it`, async () => {
    const first = ref(true)
    const columns = [{ title: 'Name', dataIndex: 'name', ...(kind === 'value' ? { slotName: 'value' } : {}) }]
    const data = kind === 'empty' ? [] : [{ key: 'a', name: 'Ada' }]
    const alpha = () => h('span', { 'data-choice': 'alpha' }, 'Alpha')
    const beta = () => h('span', { 'data-choice': 'beta' }, 'Beta')
    const wrapper = mount({ render: () => h(Table, { columns, data, pagination: false, height: 200, summary: kind === 'summary-cell' }, { [kind]: first.value ? alpha : beta }) })
    try {
      expect(wrapper.find('[data-choice="alpha"]').exists()).toBe(true)
      first.value = false
      await nextTick()
      expect(wrapper.find('[data-choice="beta"]').exists()).toBe(true)
      expect(wrapper.find('[data-choice="alpha"]').exists()).toBe(false)
      first.value = true
      await nextTick()
      expect(wrapper.find('[data-choice="alpha"]').exists()).toBe(true)
    } finally { wrapper.unmount() }
  })
}

test('changing a footer preserves input node, draft and focus', async () => {
  const enabled = ref(false)
  const columns = [{ title: 'Name', dataIndex: 'name', slotName: 'editor' }]
  const data = [{ key: 'a', name: 'Ada' }]
  const editor = () => h('input', { 'data-editor': '' })
  const footer = () => h('span', { 'data-footer': '' }, 'Footer')
  const wrapper = mount({ render: () => h(Table, { columns, data, pagination: false, height: 200 },
    enabled.value ? { editor, footer } : { editor }) }, { attachTo: document.body })
  try {
    const input = wrapper.get('input[data-editor]').element as HTMLInputElement
    input.value = 'Draft'
    input.focus()
    enabled.value = true
    await nextTick()
    expect(wrapper.find('[data-footer]').exists()).toBe(true)
    expect(wrapper.get('input[data-editor]').element).toBe(input)
    expect(input.value).toBe('Draft')
    expect(document.activeElement).toBe(input)
    enabled.value = false
    await nextTick()
    expect(wrapper.find('[data-footer]').exists()).toBe(false)
    expect(wrapper.get('input[data-editor]').element).toBe(input)
    expect(input.value).toBe('Draft')
  } finally { wrapper.unmount() }
})

for (const kind of ['expand-row', 'expand-icon', 'drag-handle-icon', 'pagination', 'pagination-left', 'pagination-right'] as const) {
  test(`conditional ${kind} slot updates and falls back`, async () => {
    const enabled = ref(false)
    const columns = [{ title: 'Name', dataIndex: 'name' }]
    const data = kind === 'expand-icon' ? [{ key: 'a', name: 'Ada', children: [{ key: 'b', name: 'Bob' }] }] : [{ key: 'a', name: 'Ada' }]
    const pagination = kind.startsWith('pagination') ? {} : false
    const draggable = kind === 'drag-handle-icon' ? { type: 'handle' as const } : undefined
    const expandedKeys = ['a']
    const slot = () => h('span', { 'data-dynamic-extra': kind }, 'Custom')
    const wrapper = mount({ render: () => h(Table, { columns, data, pagination, draggable, expandedKeys }, enabled.value ? { [kind]: slot } : {}) })
    try {
      const target = () => wrapper.find(`[data-dynamic-extra="${kind}"]`)
      expect(target().exists()).toBe(false)
      enabled.value = true
      await nextTick()
      expect(target().exists()).toBe(true)
      enabled.value = false
      await nextTick()
      expect(target().exists()).toBe(false)
    } finally { wrapper.unmount() }
  })
}


test('unrelated parent updates do not re-render stable cell slots', async () => {
  const counter = ref(0)
  const columns = [{ title: 'Name', dataIndex: 'name', slotName: 'value' }]
  const data = [{ key: 'a', name: 'Ada' }]
  const value = vi.fn(() => h('span', 'Cell'))
  const stableSlots = { value }
  const wrapper = mount({ render: () => h('section', [h('output', String(counter.value)), h(Table, { columns, data, pagination: false }, stableSlots)]) })
  try {
    const calls = value.mock.calls.length
    expect(calls).toBeGreaterThan(0)
    counter.value++
    await nextTick()
    expect(value).toHaveBeenCalledTimes(calls)
  } finally { wrapper.unmount() }
})


for (const kind of ['empty', 'footer', 'summary-cell', 'value'] as const) {
  test(`compiled ${kind} content slot toggles with stable props`, async () => {
    const wrapper = mount(CompiledFixture, { props: { kind } })
    try {
      const target = () => wrapper.find(`[data-dynamic-content="${kind}"]`)
      expect(target().exists()).toBe(false)
      await wrapper.get('#toggle').trigger('click')
      expect(target().exists()).toBe(true)
      await wrapper.get('#toggle').trigger('click')
      expect(target().exists()).toBe(false)
    } finally { wrapper.unmount() }
  })
}

test('unrelated parent updates do not re-render stable custom headers', async () => {
  const counter = ref(0)
  const columns = [{ title: 'Name', dataIndex: 'name' }]
  const data = [{ key: 'a', name: 'Ada' }]
  const th = vi.fn(() => h('th', { 'data-custom-header': '' }))
  const stableSlots = { th }
  const wrapper = mount({ render: () => h('section', [h('output', String(counter.value)), h(Table, { columns, data, pagination: false }, stableSlots)]) })
  try {
    const calls = th.mock.calls.length
    expect(calls).toBeGreaterThan(0)
    counter.value++
    await nextTick()
    expect(th).toHaveBeenCalledTimes(calls)
  } finally { wrapper.unmount() }
})
