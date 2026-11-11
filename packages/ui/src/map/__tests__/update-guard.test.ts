import { afterEach, expect, test, vi } from 'vitest'
import { createMapUpdateGuard } from '../update-guard'

afterEach(() => vi.useRealTimers())

test('a later map update owns the suppression window', () => {
  vi.useFakeTimers()
  const states: boolean[] = []
  const guard = createMapUpdateGuard((active) => states.push(active))
  const first = guard.begin()
  guard.releaseAfter(first, 300)
  vi.advanceTimersByTime(200)
  const second = guard.begin()
  guard.releaseAfter(second, 500)
  vi.advanceTimersByTime(100)
  expect(states).toEqual([true, true])
  vi.advanceTimersByTime(400)
  expect(states).toEqual([true, true, false])
})

test('stale completions and disposal cannot release or restart an update', () => {
  vi.useFakeTimers()
  const states: boolean[] = []
  const guard = createMapUpdateGuard((active) => states.push(active))
  const first = guard.begin()
  const second = guard.begin()
  expect(guard.current(first)).toBe(false)
  guard.releaseAfter(first, 1)
  guard.releaseAfter(second, 500)
  guard.dispose()
  vi.runAllTimers()
  expect(states).toEqual([true, true])
  expect(guard.current(second)).toBe(false)
  expect(vi.getTimerCount()).toBe(0)
})
