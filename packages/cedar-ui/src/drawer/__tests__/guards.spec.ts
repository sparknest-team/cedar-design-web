import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Drawer from '../drawer.vue'

test('only beforeClose guards actions; retired beforeConfirm and beforeCancel do not run', async () => {
  const beforeConfirm = vi.fn(), beforeCancel = vi.fn()
  const blocked = vi.fn(() => false), allowed = vi.fn(() => true)
  const owner = mount(Drawer, { props: { defaultOpen: true, popupContainer: false, beforeClose: blocked }, attrs: { beforeConfirm, beforeCancel } })
  try {
    for (const action of ['confirm', 'cancel'] as const) {
      owner.vm[action]()
      await flushPromises()
      expect(blocked).toHaveBeenLastCalledWith({ action }, expect.any(Function), expect.objectContaining({ signal: expect.any(AbortSignal) }))
      expect(owner.emitted(action)).toBeUndefined()
    }
    expect(beforeConfirm).not.toHaveBeenCalled()
    expect(beforeCancel).not.toHaveBeenCalled()
    await owner.setProps({ beforeClose: allowed })
    owner.vm.confirm()
    await flushPromises()
    expect(allowed).toHaveBeenCalledTimes(1)
    expect(owner.emitted('confirm')).toHaveLength(1)
    expect(beforeConfirm).not.toHaveBeenCalled()
    expect(beforeCancel).not.toHaveBeenCalled()
    await owner.setProps({ beforeClose: blocked })
    expect(owner.get('[role=dialog]').isVisible()).toBe(false)
  } finally { owner.unmount() }
})

test('rejected async guard reports error/action and clears busy without closing', async () => {
  const error = new Error('drawer guard rejected')
  let reject!: (error: Error) => void
  const owner = mount(Drawer, { props: { defaultOpen: true, popupContainer: false, beforeClose: () => new Promise((_resolve, fail) => { reject = fail }) } })
  try {
    owner.vm.confirm()
    await flushPromises()
    expect(owner.get('[role=dialog]').attributes('aria-busy')).toBe('true')
    reject(error)
    await flushPromises()
    expect(owner.emitted('guard-error')).toEqual([[error, 'confirm']])
    expect(owner.get('[role=dialog]').attributes('aria-busy')).toBeUndefined()
    expect(owner.emitted('update:open')).toBeUndefined()
  } finally { owner.unmount() }
})
