import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref, watch } from 'vue'
import { useSchedulerNow } from '../use-now'
import { captureTimerGlobals, restoreTimerFixture } from './timer-globals'

const owners: Array<ReturnType<typeof mount>> = []
let restoreGlobals: () => void
beforeEach(() => {
  restoreGlobals = captureTimerGlobals()
  vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] })
  vi.setSystemTime(new Date('2026-10-16T02:00:00Z'))
  vi.spyOn(document, 'hidden', 'get').mockReturnValue(false)
})
afterEach(() => {
  try { owners.splice(0).forEach((owner) => owner.unmount()) } finally { restoreTimerFixture(restoreGlobals) }
})

function fixture() {
  const active = ref(true)
  const enabled = ref(true)
  let now!: ReturnType<typeof useSchedulerNow>
  const Host = defineComponent({
    setup() { now = useSchedulerNow(() => enabled.value); return () => null },
  })
  const owner = mount(defineComponent({
    setup: () => () => h(KeepAlive, null, { default: () => active.value ? h(Host) : null }),
  }))
  owners.push(owner)
  return { active, enabled, now, owner }
}

test('current clock retains the thirty-second cadence', () => {
  const { now } = fixture()
  const initial = +now.value!
  vi.advanceTimersByTime(29999)
  expect(+now.value!).toBe(initial)
  vi.advanceTimersByTime(1)
  expect(+now.value!).toBe(initial + 30000)
})

test('deactivation cancels the clock instead of ticking in the background', async () => {
  const { active, now } = fixture()
  const initial = now.value
  active.value = false
  await nextTick()
  expect(vi.getTimerCount()).toBe(0)
  vi.advanceTimersByTime(60000)
  expect(now.value).toBe(initial)
})

test('enabled changes while inactive cannot start a background clock', async () => {
  const { active, enabled } = fixture()
  active.value = false
  await nextTick()
  enabled.value = false
  await nextTick()
  enabled.value = true
  await nextTick()
  expect(vi.getTimerCount()).toBe(0)
})

test('an old interval cannot write after disposal', () => {
  const interval = vi.spyOn(globalThis, 'setInterval')
  const { now, owner } = fixture()
  const callback = interval.mock.calls[0][0] as () => void
  const initial = now.value
  owners.pop()
  owner.unmount()
  vi.setSystemTime(new Date('2026-10-16T03:00:00Z'))
  callback()
  expect(now.value).toBe(initial)
})

test('an old interval cannot restore a disabled indicator', async () => {
  const interval = vi.spyOn(globalThis, 'setInterval')
  const { enabled, now } = fixture()
  const callback = interval.mock.calls[0][0] as () => void
  enabled.value = false
  await nextTick()
  callback()
  expect(now.value).toBeUndefined()
})

test('old interval delivery cannot cross activation, while a fresh clock works', async () => {
  const interval = vi.spyOn(globalThis, 'setInterval')
  const { active, now } = fixture()
  const callback = interval.mock.calls[0][0] as () => void
  active.value = false
  await nextTick()
  vi.setSystemTime(new Date('2026-10-16T03:00:00Z'))
  active.value = true
  await nextTick()
  const current = now.value
  vi.setSystemTime(new Date('2026-10-16T04:00:00Z'))
  callback()
  expect(now.value).toBe(current)
  vi.advanceTimersByTime(30000)
  expect(+now.value!).toBe(+new Date('2026-10-16T04:00:30Z'))
})

test('old visibility binding cannot replace a fresh activation clock', async () => {
  const add = vi.spyOn(document, 'addEventListener')
  const interval = vi.spyOn(globalThis, 'setInterval')
  const { active } = fixture()
  const old = add.mock.calls.find(([event]) => event === 'visibilitychange')![1] as EventListener
  active.value = false
  await nextTick()
  active.value = true
  await nextTick()
  const count = interval.mock.calls.length
  old(new Event('visibilitychange'))
  expect(interval.mock.calls.length).toBe(count)
})

test('visibility reentry disposal cannot leave a replacement interval', () => {
  const { now, owner } = fixture()
  const stop = watch(now, () => owner.unmount(), { flush: 'sync' })
  try {
    document.dispatchEvent(new Event('visibilitychange'))
    expect(vi.getTimerCount()).toBe(0)
  } finally {
    stop()
    owners.pop()
  }
})

test('suspension removes the original listener and activation binds a new identity', async () => {
  const add = vi.spyOn(document, 'addEventListener')
  const remove = vi.spyOn(document, 'removeEventListener')
  const { active, owner } = fixture()
  const first = add.mock.calls.find(([event]) => event === 'visibilitychange')![1]
  active.value = false
  await nextTick()
  expect(remove).toHaveBeenCalledWith('visibilitychange', first)
  active.value = true
  await nextTick()
  const handlers = add.mock.calls.filter(([event]) => event === 'visibilitychange')
  expect(handlers).toHaveLength(2)
  expect(handlers[1][1]).not.toBe(first)
  owners.pop()
  owner.unmount()
  expect(remove).toHaveBeenCalledWith('visibilitychange', handlers[1][1])
  expect(vi.getTimerCount()).toBe(0)
})

test('hidden-page old interval delivery cannot update the clock', () => {
  const interval = vi.spyOn(globalThis, 'setInterval')
  const { now } = fixture()
  const callback = interval.mock.calls[0][0] as () => void
  vi.spyOn(document, 'hidden', 'get').mockReturnValue(true)
  document.dispatchEvent(new Event('visibilitychange'))
  const current = now.value
  vi.setSystemTime(new Date('2026-10-16T05:00:00Z'))
  callback()
  expect(now.value).toBe(current)
  expect(vi.getTimerCount()).toBe(0)
})
