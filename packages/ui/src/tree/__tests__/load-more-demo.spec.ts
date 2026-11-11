import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Demo from '../__demos__/load-more.vue'
import Tree from '../Tree.vue'

test('lazy demo derives unique child values from their parent values', async () => {
  vi.useFakeTimers()
  const owner = mount(Demo, { global: { components: { CTree: Tree } } })
  try {
    const tree = owner.getComponent(Tree)
    const first = tree.vm.treeContext.onLoadMore!('0-0')
    const second = tree.vm.treeContext.onLoadMore!('0-1-1')
    vi.advanceTimersByTime(1000)
    await Promise.all([first, second]); await tree.vm.$nextTick()
    expect(tree.vm.treeContext.key2TreeNode.has('0-0-1')).toBe(true)
    expect(tree.vm.treeContext.key2TreeNode.has('0-1-1-1')).toBe(true)
  } finally { owner.unmount(); vi.useRealTimers() }
})
