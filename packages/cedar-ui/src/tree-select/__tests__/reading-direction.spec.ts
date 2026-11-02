import { expect, test } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import Panel from '../panel'
for (const dir of ['ltr', 'rtl']) {
  test(`${dir}: keyboard expands, returns to parent and collapses without committing`, async () => {
    const host = document.createElement('div'); host.dir = dir; document.body.append(host)
    const owner = mount(Panel, { attachTo: host, props: { treeProps: { defaultExpandAll: false, animation: false, fieldNames: { value: 'value', label: 'label', children: 'children' }, data: [{ value: 'root', label: 'Root', children: [{ value: 'blocked', label: 'Disabled', disabled: true }, { value: 'one', label: 'One' }] }] } } })
    const key = async (value: string) => { (owner.vm as any).handleKeydown(new KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true })); await flushPromises() }
    const active = () => owner.get('.c-tree-select-option-active')
    try {
      await flushPromises(); await key('Home')
      expect(active().text()).toBe('Root')
      await key(dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight')
      expect(active().attributes('aria-expanded')).toBe('true')
      await key(dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight')
      expect(active().text()).toBe('One')
      await key(dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft')
      expect(active().text()).toBe('Root')
      await key(dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft')
      expect(active().attributes('aria-expanded')).toBe('false')
      host.dir = dir === 'rtl' ? 'ltr' : 'rtl'; await flushPromises()
      await key(dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft')
      expect(active().attributes('aria-expanded')).toBe('true')
      expect(owner.emitted('change')).toBeUndefined()
    } finally { owner.unmount(); host.remove() }
  })
}
