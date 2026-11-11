import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Panel from '../panel'

test('embedded tree retains owner focus and exposes mixed check state', async () => {
  const input = document.createElement('input')
  document.body.append(input)
  const owner = mount(Panel, { attachTo: document.body, props: {
    showCheckable: true, scrollbar: false, treeProps: { checkable: true, animation: false,
      defaultCheckedValues: ['a'], data: [{ value: 'root', label: 'Root', children: [
        { value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' },
      ] }],
    },
  } })
  try {
    await flushPromises()
    expect(owner.findAll('[role=treeitem]')[0].attributes('aria-checked')).toBe('mixed')
    const checkbox = owner.findAll('input[type=checkbox]')[2]
    expect(checkbox.attributes('tabindex')).toBe('-1')
    expect(checkbox.element.closest('[aria-hidden=true]')).not.toBeNull()
    input.focus()
    await checkbox.trigger('click')
    await flushPromises()
    expect(document.activeElement).toBe(input)
    expect(owner.emitted('change')).toHaveLength(1)
  } finally { owner.unmount(); input.remove() }
})
