import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Tree from '../Tree.vue'

test('node load failures report the node, clear busy state, and allow retry', async () => {
  const node = { value: 'a', label: 'Alpha', isLeaf: false }
  const cause = new Error('offline')
  let reject!: (reason: unknown) => void
  const pending = new Promise<void>((_, fail) => { reject = fail })
  const loadMore = vi.fn().mockReturnValueOnce(pending).mockResolvedValueOnce(undefined)
  const owner = mount(Tree, { props: { data: [node], loadMore, animation: false } })
  try {
    const run = owner.vm.treeContext.onLoadMore!('a')
    await owner.vm.$nextTick()
    expect(owner.get('[role=treeitem]').attributes('aria-busy')).toBe('true')
    reject(cause); await run; await flushPromises()
    expect(owner.emitted('load-error')).toEqual([[cause, node]])
    expect(owner.get('[role=treeitem]').attributes('aria-busy')).toBeUndefined()
    await owner.vm.treeContext.onLoadMore!('a')
    expect(loadMore).toHaveBeenCalledTimes(2)
  } finally { owner.unmount() }
})

test('a rejected request for a replaced node does not report stale errors', async () => {
  let reject!: (reason: unknown) => void
  const pending = new Promise<void>((_, fail) => { reject = fail })
  const owner = mount(Tree, { props: { data: [{ value: 'a', label: 'Old', isLeaf: false }], loadMore: () => pending } })
  try {
    const run = owner.vm.treeContext.onLoadMore!('a')
    await owner.setProps({ data: [{ value: 'a', label: 'New', isLeaf: false }] })
    reject(new Error('stale')); await run; await flushPromises()
    expect(owner.emitted('load-error')).toBeUndefined()
    expect(owner.get('[role=treeitem]').attributes('aria-busy')).toBeUndefined()
  } finally { owner.unmount() }
})
