import { afterEach, expect, test } from 'vitest'
import { scrollTo } from '../utils'

const cleanups: Array<() => void> = []
let clock = 0
afterEach(() => { cleanups.splice(0).reverse().forEach((cleanup) => cleanup()) })

function replace(target: object, key: string, value: unknown) {
  const descriptor = Object.getOwnPropertyDescriptor(target, key)
  Object.defineProperty(target, key, { configurable: true, writable: true, value })
  cleanups.push(() => {
    if (descriptor) Object.defineProperty(target, key, descriptor)
    else Reflect.deleteProperty(target, key)
  })
}

function frameQueue(target: object) {
  const pending = new Map<number, FrameRequestCallback>()
  const all = new Map<number, FrameRequestCallback>()
  let sequence = 0
  replace(target, 'requestAnimationFrame', (callback: FrameRequestCallback) => {
    pending.set(++sequence, callback); all.set(sequence, callback); return sequence
  })
  replace(target, 'cancelAnimationFrame', (id: number) => { pending.delete(id) })
  return { pending, all, run(time: number) {
    const first = pending.entries().next().value
    expect(first, 'expected a controlled frame').toBeDefined()
    const [id, callback] = first!
    pending.delete(id); clock = time; callback(time)
  } }
}

function fixture(iframe = false) {
  clock = 0
  replace(Date, 'now', () => clock)
  const frame = iframe ? document.createElement('iframe') : undefined
  if (frame) { document.body.appendChild(frame); cleanups.push(() => frame.remove()) }
  const doc = frame?.contentDocument ?? document
  const view = doc.defaultView!
  const element = doc.createElement('div')
  doc.body.appendChild(element); cleanups.push(() => element.remove())
  const owner = frameQueue(view)
  const global = (globalThis as unknown) === view ? owner : frameQueue(globalThis)
  replace(view.performance, 'now', () => clock)
  let reduced = false
  replace(view, 'matchMedia', () => ({ matches: reduced }))
  return {
    element, owner, global, reduce: () => { reduced = true },
    run(time: number) { (global.pending.size ? global : owner).run(time) },
    pending: () => owner.pending.size + (owner === global ? 0 : global.pending.size),
  }
}

for (const duration of [0, -1, NaN, Infinity]) {
  test(`nonpositive/nonfinite duration ${duration} targets immediately without frames`, () => {
    const f = fixture(); scrollTo(f.element, 200, duration)
    expect(f.element.scrollTop).toBe(200)
    expect(f.pending()).toBe(0)
  })
}

test('normal100ms scroll retains linear midpoint and endpoint', () => {
  const f = fixture(); scrollTo(f.element, 200, 100)
  f.run(0); f.run(50); expect(f.element.scrollTop).toBe(100)
  f.run(100); expect(f.element.scrollTop).toBe(200)
})

test('replacement rejects an already-started old tween callback', () => {
  const f = fixture(); scrollTo(f.element, 200, 100); f.run(0)
  const old = [...f.owner.pending.values(), ...f.global.pending.values()]
  scrollTo(f.element, 400, 0)
  clock = 50; old.forEach((callback) => callback(50))
  expect(f.element.scrollTop).toBe(400)
  expect(f.pending()).toBe(0)
})

test('replayed entry frame cannot fork another animation', () => {
  const f = fixture(); scrollTo(f.element, 200, 100)
  const entry = [...f.owner.pending.values(), ...f.global.pending.values()][0]
  f.run(0); entry(0)
  expect(f.pending()).toBe(1)
})

test('iframe target uses its actual owner RAF', () => {
  const f = fixture(true); scrollTo(f.element, 200, 100)
  expect(f.owner.pending.size).toBe(1)
  expect(f.global.pending.size).toBe(0)
})

test('initial owner reduced motion targets without interpolation', () => {
  const f = fixture(); f.reduce(); scrollTo(f.element, 200, 100)
  expect(f.element.scrollTop).toBe(200)
  expect(f.pending()).toBe(0)
})

test('dynamic owner reduced motion finishes on the next frame', () => {
  const f = fixture(); scrollTo(f.element, 200, 100); f.run(0); f.reduce(); f.run(50)
  expect(f.element.scrollTop).toBe(200)
  expect(f.pending()).toBe(0)
})

test('private cancellation is idempotent and rejects retained frames', () => {
  const f = fixture(); const cancel = scrollTo(f.element, 200, 100); f.run(0)
  const old = [...f.owner.pending.values()][0]
  cancel(); cancel(); old(50)
  expect(f.element.scrollTop).toBe(0)
  expect(f.pending()).toBe(0)
})

test('old disposer cannot cancel its replacement', () => {
  const f = fixture(); const cancel = scrollTo(f.element, 200, 100)
  scrollTo(f.element, 400, 100); cancel()
  f.run(0); f.run(100)
  expect(f.element.scrollTop).toBe(400)
  expect(f.pending()).toBe(0)
})

test('scroll getter reentry cannot resume the old interpolation', () => {
  const f = fixture(); let value = 0; let reenter = true
  Object.defineProperty(f.element, 'scrollTop', { configurable: true,
    get() {
      if (reenter) { reenter = false; scrollTo(f.element, 400, 0) }
      return value
    },
    set(next) { value = next },
  })
  scrollTo(f.element, 200, 100); f.run(0)
  expect(value).toBe(400)
  expect(f.pending()).toBe(0)
})

test('scroll setter reentry preserves the new task', () => {
  const f = fixture(); let value = 0; let reenter = true
  Object.defineProperty(f.element, 'scrollTop', { configurable: true,
    get() { return value },
    set(next) {
      value = next
      if (reenter) { reenter = false; scrollTo(f.element, 400, 100) }
    },
  })
  scrollTo(f.element, 200, 100); f.run(0)
  expect(f.pending()).toBe(1)
  f.run(0); f.run(100)
  expect(value).toBe(400)
  expect(f.pending()).toBe(0)
})
