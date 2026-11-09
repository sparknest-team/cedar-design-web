import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TreeSelect from '../TreeSelect.vue'
import Tree from '../../tree/Tree.vue'

test('TreeSelect forwards node-load failures and exposes busy on its treeitem', async () => {
  const node = { value: 'a', label: 'Alpha', isLeaf: false }
  const cause = new Error('offline')
  let reject!: (reason: unknown) => void
  const pending = new Promise<void>((_, fail) => { reject = fail })
  const owner = mount(TreeSelect, { props: { data: [node], loadMore: () => pending, defaultOpen: true, animation: false },
    global: { stubs: { Trigger: { template: '<div><slot/><slot name="content"/></div>' }, CTrigger: { template: '<div><slot/><slot name="content"/></div>' }, teleport: true } },
  })
  try {
    await flushPromises()
    const tree = owner.getComponent(Tree)
    const run = tree.vm.treeContext.onLoadMore!('a')
    await flushPromises()
    expect(owner.get('[role=treeitem]').attributes('aria-busy')).toBe('true')
    reject(cause); await run; await flushPromises()
    expect(owner.emitted('load-error')).toEqual([[cause, node]])
    expect(owner.get('[role=treeitem]').attributes('aria-busy')).toBeUndefined()
  } finally { owner.unmount() }
})
