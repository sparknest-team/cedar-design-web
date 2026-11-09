import { defineComponent, h, nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Popconfirm from '..'

const Fixture = defineComponent({
  setup() {
    const open = ref(false)
    return () => h('main', [
      h(Popconfirm, { content: 'Delete this item?', open: open.value, 'onUpdate:open': (value: boolean) => { open.value = value } }, { default: () => h('button', { id: 'reference' }, 'Delete') }),
      h('button', { id: 'after' }, 'After'),
    ])
  },
})

test('connects reference and dialog, enters on open and restores focus on Escape', async () => {
  const owner = mount(Fixture, { attachTo: document.body })
  try {
    const reference = owner.get('#reference').element as HTMLButtonElement
    reference.focus()
    await nextTick()
    expect(reference.getAttribute('aria-expanded')).toBe('false')
    await owner.get('#reference').trigger('click')
    await flushPromises()
    const dialog = document.querySelector<HTMLElement>('[role=dialog]')!
    expect(dialog).toBeTruthy()
    expect(reference.getAttribute('aria-expanded')).toBe('true')
    expect(reference.getAttribute('aria-haspopup')).toBe('dialog')
    expect(reference.getAttribute('aria-controls')).toBe(dialog.id)
    expect(document.getElementById(dialog.getAttribute('aria-describedby')!)?.textContent).toBe('Delete this item?')
    expect(document.activeElement).toBe(dialog)
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await flushPromises()
    expect(reference.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(reference)
  } finally { owner.unmount() }
})

test('controlled close requests do not restore focus while the parent keeps it open', async () => {
  const owner = mount(Popconfirm, { attachTo: document.body, props: { open: true, content: 'Still open' }, slots: { default: () => h('button', 'Open') } })
  try {
    await flushPromises()
    const dialog = document.querySelector<HTMLElement>('[role=dialog]')!
    expect(document.activeElement).toBe(dialog)
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await nextTick()
    expect(owner.emitted('update:open')?.at(-1)).toEqual([false])
    expect(document.activeElement).toBe(dialog)
  } finally { owner.unmount() }
})
