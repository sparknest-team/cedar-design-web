import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Tree from '../Tree.vue'

test('tree owns focus and checkbox pointer activation updates the node once', async () => {
  const owner = mount(Tree, { attachTo: document.body, props: {
    checkable: true, animation: false, data: [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }],
  } })
  try {
    await flushPromises()
    const root = owner.get('[role=tree]')
    const checkbox = owner.findAll('input[type=checkbox]')[1]
    expect(checkbox.attributes('tabindex')).toBe('-1')
    expect(checkbox.element.closest('[aria-hidden=true]')).not.toBeNull()
    ;(root.element as HTMLElement).focus()
    await checkbox.trigger('click')
    await flushPromises()
    expect(document.activeElement).toBe(root.element)
    expect(owner.emitted('check')).toHaveLength(1)
    expect(owner.emitted('update:checkedValues')?.at(-1)?.[0]).toEqual(['b'])
    expect(document.getElementById(root.attributes('aria-activedescendant')!)?.textContent).toContain('Beta')
  } finally { owner.unmount() }
})
