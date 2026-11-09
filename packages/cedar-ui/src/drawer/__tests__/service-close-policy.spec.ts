import { nextTick } from 'vue'
import { expect, test, vi } from 'vitest'
import Drawer from '..'

// Keep actual Vue transitions: preceding VTU mounts install a global VNode stubber.
test('service close bypasses beforeClose and cleans up after the actual closed lifecycle', async () => {
  const guard = vi.fn(() => false)
  let done!: () => void
  const closed = new Promise<void>(resolve => { done = resolve })
  const before = document.body.children.length
  const handle = Drawer.open({ content: 'Service owned drawer', beforeClose: guard, onClosed: done })
  await nextTick()
  expect(document.querySelector('transition-stub')).toBeNull()
  handle.close()
  await closed
  expect(guard).not.toHaveBeenCalled()
  expect(document.body.children.length).toBe(before)
})
