import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import FieldPresentation from '../FieldPresentation.vue'
import { claimEditing, editingOwner } from '../editing-owner'

test('a pending target does not open after waiting for the previous editor to save', async () => {
  let finish!: (saved: boolean) => void
  const save = vi.fn()
    .mockImplementationOnce(() => new Promise<boolean>(resolve => { finish = resolve }))
    .mockResolvedValue(true)
  const previous = { save, focus: vi.fn() }
  const release = claimEditing(document, previous)
  const wrapper = mount(FieldPresentation, {
    attachTo: document.body,
    props: { editMode: 'click', open: false, pending: false, text: 'Value' },
  })
  try {
    await wrapper.get('button[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    expect(save).toHaveBeenCalledTimes(1)
    await wrapper.setProps({ pending: true })
    finish(true)
    await flushPromises()
    expect(wrapper.emitted('open')).toBeUndefined()
    expect(editingOwner(document)).toBe(previous)
    await wrapper.setProps({ pending: false })
    await wrapper.get('button[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    expect(wrapper.emitted('open')).toEqual([[true]])
  } finally { wrapper.unmount(); release() }
})

test('handoff uses the current pending state when the previous save completes', async () => {
  let finish!: (saved: boolean) => void
  const release = claimEditing(document, {
    save: () => new Promise<boolean>(resolve => { finish = resolve }),
    focus: vi.fn(),
  })
  const wrapper = mount(FieldPresentation, {
    attachTo: document.body,
    props: { editMode: 'click', open: false, pending: false, text: 'Value' },
  })
  try {
    await wrapper.get('button[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    await wrapper.setProps({ pending: true })
    await wrapper.setProps({ pending: false })
    finish(true)
    await flushPromises()
    expect(wrapper.emitted('open')).toEqual([[true]])
  } finally { wrapper.unmount(); release() }
})
