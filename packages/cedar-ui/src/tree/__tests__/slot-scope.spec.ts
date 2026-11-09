import { flushPromises, mount } from '@vue/test-utils'
import { h } from 'vue'
import { expect, test, vi } from 'vitest'
import Tree from '../Tree.vue'

test('tree slots expose original nodes and icon state through their documented scopes', async () => {
  const node = { value: 'a', label: 'Alpha', isLeaf: false }
  let finish!: () => void
  const pending = new Promise<void>(resolve => { finish = resolve })
  const label = vi.fn(() => h('span', 'Label'))
  const extra = vi.fn(() => h('span', 'Extra'))
  const icon = vi.fn(() => h('span', 'Icon'))
  const drag = vi.fn(() => h('span', 'Drag'))
  const switcher = vi.fn(() => h('span', 'Switcher'))
  const loading = vi.fn(() => h('span', 'Loading'))
  const owner = mount(Tree, { props: { data: [node], draggable: true, loadMore: () => pending, animation: false },
    slots: { label, extra, icon, 'drag-icon': drag, 'switcher-icon': switcher, 'loading-icon': loading },
  })
  try {
    await flushPromises()
    for (const slot of [label, extra, switcher]) expect(slot.mock.calls[0][0]).toEqual(node)
    for (const slot of [icon, drag]) expect(slot.mock.calls[0][0]).toMatchObject({ node, loading: false, checked: false })
    const run = owner.vm.treeContext.onLoadMore!('a')
    await flushPromises()
    expect(loading.mock.calls[0][0]).toEqual(node)
    finish(); await run
  } finally { owner.unmount() }
})
