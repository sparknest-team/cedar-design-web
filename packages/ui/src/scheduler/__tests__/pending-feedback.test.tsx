import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import Scheduler from '../Scheduler.vue'
test('a deactivated scheduler cannot commit an old guard result or clear a new wait', async () => {
 const gates: Array<(v: boolean) => void> = []; const shown = ref(true)
 const event = { id: 'a', title: 'A', start: '2026-10-30T09:00:00', end: '2026-10-30T10:00:00' }
 let commands: any
 const hook = vi.fn(() => new Promise<boolean>(resolve => gates.push(resolve)))
 const Host = defineComponent({ setup: () => () => h(KeepAlive, null, { default: () => shown.value ? h(Scheduler, { ref: (value: any) => { if (value) commands = value }, defaultValue: [event], defaultDate: '2026-10-30', defaultMode: 'agenda', beforeChange: hook }) : null }) })
 const w = mount(Host)
 try {
  await flushPromises(); const owner = w.findComponent(Scheduler)
  const old = commands.change({ type: 'remove', event }); await flushPromises()
  expect(hook).toHaveBeenCalledTimes(1); expect(w.find('.c-pending-feedback').exists()).toBe(true)
  shown.value = false; await nextTick(); shown.value = true; await nextTick()
  const current = commands.change({ type: 'remove', event }); await flushPromises()
  gates[0](true); await old; await flushPromises(); expect(w.find('.c-pending-feedback').exists()).toBe(true)
  gates[1](false); await current; await flushPromises(); expect(w.find('.c-pending-feedback').exists()).toBe(false)
  expect(owner.emitted('change')).toBeUndefined()
 } finally { w.unmount() }
})
