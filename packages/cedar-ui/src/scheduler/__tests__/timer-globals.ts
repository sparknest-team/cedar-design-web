import { vi } from 'vitest'

const timerNames = ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'] as const

export function captureTimerGlobals() {
  const originals = timerNames.map((name) => [name, Object.getOwnPropertyDescriptor(globalThis, name)] as const)
  return () => {
    for (const [name, descriptor] of originals) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor)
      else Reflect.deleteProperty(globalThis, name)
    }
  }
}

export function restoreTimerFixture(restoreGlobals: () => void) {
  try {
    vi.clearAllTimers()
    vi.restoreAllMocks()
    vi.useRealTimers()
  } finally {
    // Vitest0.22 mockRestore resets spies but may leave the timer wrapper in
    // place. Its fake-clock uninstall can then delete the original global.
    restoreGlobals()
  }
}
