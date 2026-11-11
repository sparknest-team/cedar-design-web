import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Tree from '../../tree/Tree.vue'
import Panel from '../panel'

test('a later keyboard target supersedes the queued initial virtual scroll', async () => {
  const owner = mount(Panel, {
    attachTo: document.body,
    props: {
      treeProps: {
        animation: false,
        data: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }],
        virtualListProps: { height: 120, fixedSize: true, estimatedSize: 32, buffer: 1 },
      },
    },
  })
  try {
    await flushPromises()
    const tree = owner.getComponent(Tree)
    const scroll = vi.spyOn(tree.vm, 'scrollIntoView')
    ;(owner.vm as any).resetActive()
    ;(owner.vm as any).handleKeydown(new KeyboardEvent('keydown', { key: 'End', cancelable: true }))
    await flushPromises()
    expect(scroll).toHaveBeenCalledTimes(1)
    expect(scroll).toHaveBeenCalledWith({ value: 'b', align: 'auto' })
  } finally {
    owner.unmount()
  }
})
