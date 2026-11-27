import { h } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Drawer from '..'

test('footer close is guarded while instance close bypasses the guard', async () => {
  const guard = vi.fn(() => false)
  const w = mount(Drawer, {
    attachTo: document.body,
    props: { defaultOpen: true, popupContainer: false, beforeClose: guard },
    slots: { footer: ({ close }) => h('button', { id: 'request-footer', onClick: close }, 'Request close') },
  })
  await w.get('#request-footer').trigger('click')
  await flushPromises()
  expect(guard).toHaveBeenCalledTimes(1)
  expect(w.get('[role=dialog]').isVisible()).toBe(true)
  w.vm.close()
  await flushPromises()
  expect(guard).toHaveBeenCalledTimes(1)
  expect(w.get('[role=dialog]').isVisible()).toBe(false)
  expect(w.emitted('confirm')).toBeUndefined()
  expect(w.emitted('cancel')).toBeUndefined()
  w.unmount()
})
test('a direct instance command still leaves a controlled parent in charge', async () => {
  const guard = vi.fn(() => false)
  const w = mount(Drawer, { attachTo: document.body, props: { open: true, popupContainer: false, beforeClose: guard } })
  w.vm.close()
  await flushPromises()
  expect(guard).not.toHaveBeenCalled()
  expect(w.emitted('update:open')).toEqual([[false]])
  expect(w.get('[role=dialog]').isVisible()).toBe(true)
  w.unmount()
})
test('forced closure aborts a pending guard and late approval cannot close a reopened drawer', async () => {
  let resolve!: (value: boolean) => void
  let signal!: AbortSignal
  const w = mount(Drawer, {
    attachTo: document.body,
    props: {
      open: true,
      popupContainer: false,
      beforeClose: (_payload, _done, context) => {
        signal = context.signal
        return new Promise<boolean>((settle) => {
          resolve = settle
        })
      },
    },
  })
  w.vm.confirm()
  await flushPromises()
  expect(w.get('[role=dialog]').attributes('aria-busy')).toBe('true')
  w.vm.close()
  expect(signal.aborted).toBe(true)
  await w.setProps({ open: false })
  await w.setProps({ open: true })
  resolve(true)
  await flushPromises()
  expect(w.emitted('confirm')).toBeUndefined()
  expect(w.emitted('update:open')).toEqual([[false]])
  expect(w.get('[role=dialog]').isVisible()).toBe(true)
  expect(w.get('[role=dialog]').attributes('aria-busy')).toBeUndefined()
  w.unmount()
})
test('external controlled open=false bypasses the UI guard', async () => {
  const guard = vi.fn(() => false)
  const w = mount(Drawer, { attachTo: document.body, props: { open: true, popupContainer: false, beforeClose: guard } })
  await w.setProps({ open: false })
  await flushPromises()
  expect(guard).not.toHaveBeenCalled()
  expect(w.get('[role=dialog]').isVisible()).toBe(false)
  w.unmount()
})
