import { expect, test, vi } from 'vitest'
import { captureTimerGlobals, restoreTimerFixture } from './timer-globals'

test('timer spy cleanup preserves the real global timer descriptors', () => {
  const names = ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'] as const
  const originals = names.map((name) => [name, Object.getOwnPropertyDescriptor(globalThis, name)] as const)
  const restoreGlobals = captureTimerGlobals()
  try {
    vi.useFakeTimers()
    vi.spyOn(globalThis, 'setTimeout')
    vi.spyOn(globalThis, 'setInterval')
    restoreTimerFixture(restoreGlobals)
    for (const [name, descriptor] of originals) {
      expect(Object.getOwnPropertyDescriptor(globalThis, name), name).toEqual(descriptor)
    }
  } finally {
    vi.useRealTimers()
    for (const [name, descriptor] of originals) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor)
      else Reflect.deleteProperty(globalThis, name)
    }
  }
})

for (const name of ['setTimeout', 'setInterval'] as const) {
  test(`${name}-only fake clock cleanup preserves real timers`, () => {
    const original = Object.getOwnPropertyDescriptor(globalThis, name)
    const restoreGlobals = captureTimerGlobals()
    try {
      vi.useFakeTimers({ toFake: [name, name === 'setTimeout' ? 'clearTimeout' : 'clearInterval'] })
      vi.spyOn(globalThis, name)
      restoreTimerFixture(restoreGlobals)
      expect(Object.getOwnPropertyDescriptor(globalThis, name)).toEqual(original)
    } finally {
      vi.useRealTimers()
      restoreGlobals()
    }
  })
}
