import { effectScope, reactive } from 'vue'
import { expect, test, vi } from 'vitest'
import useFilterTreeNode from '../hooks/use-filter-tree-node'

test('superseded filter timer cannot publish after a newer search', () => {
  const callbacks: Array<() => void> = []
  const original = globalThis.setTimeout
  const timer = vi.spyOn(globalThis, 'setTimeout').mockImplementation(((fn: TimerHandler, delay?: number, ...args: unknown[]) => {
    if (delay === 100) { callbacks.push(fn as () => void); return 123456 as unknown as ReturnType<typeof setTimeout> }
    return original(fn, delay, ...args)
  }) as typeof setTimeout)
  const scope = effectScope()
  const props = reactive({ searchValue: 'old', flattenTreeData: [{ key: 'a', pathParentKeys: [], treeNodeData: { value: 'a', label: 'Alpha' } }], fieldNames: undefined, filterMethod: (word: string) => word === 'old' })
  try {
    const filter = scope.run(() => useFilterTreeNode(props as any))!
    props.searchValue = 'new'
    expect(callbacks).toHaveLength(2)
    callbacks[0]()
    expect(filter.filterTreeNode.value!({ value: 'a' })).toBe(false)
    callbacks[1]()
    expect(filter.filterTreeNode.value!({ value: 'a' })).toBe(false)
  } finally { scope.stop(); timer.mockRestore() }
})

test('filter callback changing the search cannot publish its obsolete result', () => {
  const callbacks: Array<() => void> = []
  const original = globalThis.setTimeout
  const timer = vi.spyOn(globalThis, 'setTimeout').mockImplementation(((fn: TimerHandler, delay?: number, ...args: unknown[]) => {
    if (delay === 100) { callbacks.push(fn as () => void); return 123456 as unknown as ReturnType<typeof setTimeout> }
    return original(fn, delay, ...args)
  }) as typeof setTimeout)
  const scope = effectScope()
  const props = reactive({ searchValue: 'old', flattenTreeData: [{ key: 'a', pathParentKeys: [], treeNodeData: { value: 'a', label: 'Alpha' } }], fieldNames: undefined, filterMethod: (_word: string) => { props.searchValue = 'new'; return true } })
  try {
    const filter = scope.run(() => useFilterTreeNode(props as any))!
    callbacks[0]()
    expect(props.searchValue).toBe('new')
    expect(filter.filterTreeNode.value!({ value: 'a' })).toBe(false)
  } finally { scope.stop(); timer.mockRestore() }
})
