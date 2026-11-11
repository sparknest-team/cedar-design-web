import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import Dependencies from '../components/SchedulerDependencies.vue'

const owners: Array<ReturnType<typeof mount>> = []
const nodes: HTMLElement[] = []
const originalObserver = Object.getOwnPropertyDescriptor(globalThis, 'ResizeObserver')
const originalOwnerObserver = Object.getOwnPropertyDescriptor(document.defaultView!, 'ResizeObserver')
let observers: Array<{ callback: () => void; disconnect: ReturnType<typeof vi.fn> }>
let frames: Array<{ id: number; callback: FrameRequestCallback }>
let pending: Set<number>
function raf(view: Window) {
  vi.spyOn(view, 'requestAnimationFrame').mockImplementation((callback) => {
    const id = frames.length + 1
    frames.push({ id, callback })
    pending.add(id)
    return id
  })
  vi.spyOn(view, 'cancelAnimationFrame').mockImplementation((id) => { pending.delete(id) })
}
beforeEach(() => {
  observers = []
  frames = []
  pending = new Set()
  raf(window)
  if (document.defaultView !== window) raf(document.defaultView!)
  Object.defineProperty(globalThis, 'ResizeObserver', { configurable: true, value: class {
    disconnect = vi.fn()
    constructor(callback: () => void) { observers.push({ callback, disconnect: this.disconnect }) }
    observe() {}
  } })
  if (document.defaultView !== window) Object.defineProperty(document.defaultView!, 'ResizeObserver', {
    configurable: true, value: globalThis.ResizeObserver,
  })
})
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  nodes.splice(0).forEach((node) => node.remove())
  vi.restoreAllMocks()
  if (originalObserver) Object.defineProperty(globalThis, 'ResizeObserver', originalObserver)
  else Reflect.deleteProperty(globalThis, 'ResizeObserver')
  if (document.defaultView !== window) {
    if (originalOwnerObserver) Object.defineProperty(document.defaultView!, 'ResizeObserver', originalOwnerObserver)
    else Reflect.deleteProperty(document.defaultView!, 'ResizeObserver')
  }
})
function rect(left: number, top: number, width: number, height: number) {
  return { left, top, right: left + width, bottom: top + height, width, height } as DOMRect
}
function host(doc = document) {
  const node = doc.createElement('div')
  doc.body.appendChild(node)
  nodes.push(node)
  vi.spyOn(node, 'getBoundingClientRect').mockReturnValue(rect(0, 0, 400, 200))
  Object.defineProperties(node, { scrollWidth: { configurable: true, value: 400 }, scrollHeight: { configurable: true, value: 200 } })
  for (const [index, id] of ['a', 'b'].entries()) {
    const card = doc.createElement('div')
    card.dataset.schedulerEventId = id
    node.appendChild(card)
    vi.spyOn(card, 'getBoundingClientRect').mockReturnValue(rect(10 + index * 100, 10 + index * 50, 40, 20))
  }
  return node
}
const props = (node: HTMLElement) => ({ host: node, dependencies: [{ id: 'ab', fromId: 'a', toId: 'b' }], events: [] })
async function settle() { await nextTick(); await nextTick() }
async function fixture(node = host()) {
  const active = ref(true)
  const target = ref<HTMLElement | undefined>(node)
  const input = props(node)
  const edges = ref(input.dependencies)
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, {
    default: () => active.value ? h(Dependencies, { ...input, host: target.value, dependencies: edges.value }) : null,
  }) }))
  owners.push(owner)
  await settle()
  return { owner, active, target, node, edges }
}
function deliver(frame = frames[frames.length - 1]) { pending.delete(frame.id); frame.callback(16) }

test('current measurement produces one connector and coalesces scroll', async () => {
  const { owner, node } = await fixture()
  node.dispatchEvent(new Event('scroll'))
  node.dispatchEvent(new Event('scroll'))
  expect(pending.size).toBe(1)
  deliver()
  await settle()
  expect(owner.findAll('svg > path')).toHaveLength(1)
  expect(owner.get('svg').attributes('width')).toBe('400')
})
test('old frame cannot read after disposal', async () => {
  const { owner, node } = await fixture()
  const old = frames[frames.length - 1]
  owners.pop(); owner.unmount()
  vi.mocked(node.getBoundingClientRect).mockClear()
  deliver(old)
  expect(node.getBoundingClientRect).not.toHaveBeenCalled()
})
test('deactivation cancels pending measurement and removes observer', async () => {
  const { active } = await fixture()
  active.value = false
  await settle()
  expect(pending.size).toBe(0)
  expect(observers[0].disconnect).toHaveBeenCalled()
})
test('consumed frame cannot measure twice', async () => {
  const { node } = await fixture()
  const frame = frames[frames.length - 1]
  deliver(frame)
  vi.mocked(node.getBoundingClientRect).mockClear()
  deliver(frame)
  expect(node.getBoundingClientRect).not.toHaveBeenCalled()
})
test('host replacement rejects old frame rather than measuring new host', async () => {
  const { target } = await fixture()
  const old = frames[frames.length - 1]
  const next = host()
  target.value = next
  await settle()
  deliver(old)
  expect(next.getBoundingClientRect).not.toHaveBeenCalled()
})
test('old ResizeObserver cannot schedule after host replacement', async () => {
  const { target } = await fixture()
  const old = observers[0].callback
  target.value = host()
  await settle()
  const count = frames.length
  old()
  expect(frames).toHaveLength(count)
})
test('old scroll binding cannot cross activation', async () => {
  const node = host()
  const add = vi.spyOn(node, 'addEventListener')
  const { active } = await fixture(node)
  const old = add.mock.calls.find(([event]) => event === 'scroll')![1] as EventListener
  active.value = false
  await settle()
  active.value = true
  await settle()
  const count = frames.length
  old(new Event('scroll'))
  expect(frames).toHaveLength(count)
})
test('clearing host clears existing connectors', async () => {
  const { owner, target } = await fixture()
  deliver()
  await settle()
  expect(owner.find('svg').exists()).toBe(true)
  target.value = undefined
  await settle()
  expect(owner.find('svg').exists()).toBe(false)
})
test('iframe host schedules and cancels on its own window', async () => {
  const iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  nodes.push(iframe)
  const view = iframe.contentWindow!
  raf(view)
  const { owner } = await fixture(host(view.document))
  expect(view.requestAnimationFrame).toHaveBeenCalled()
  expect(window.requestAnimationFrame).not.toHaveBeenCalled()
  owners.pop(); owner.unmount()
  expect(view.cancelAnimationFrame).toHaveBeenCalled()
})

test('disposal during host geometry read stops descendant measurement', async () => {
  const { owner, node } = await fixture()
  const query = vi.spyOn(node, 'querySelectorAll')
  vi.mocked(node.getBoundingClientRect).mockImplementationOnce(() => {
    owners.pop(); owner.unmount()
    return rect(0, 0, 400, 200)
  })
  deliver()
  expect(query).not.toHaveBeenCalled()
  expect(pending.size).toBe(0)
})

test('inactive observer is inert and fresh activation can draw again', async () => {
  const { owner, active } = await fixture()
  const old = observers[0].callback
  active.value = false
  await settle()
  const count = frames.length
  old()
  expect(frames).toHaveLength(count)
  active.value = true
  await settle()
  deliver()
  await settle()
  expect(owner.findAll('svg > path')).toHaveLength(1)
})

test('dependency replacement invalidates queued geometry and clears absent edges', async () => {
  const { owner, edges, node } = await fixture()
  const old = frames[frames.length - 1]
  edges.value = []
  await settle()
  deliver(old)
  expect(node.getBoundingClientRect).not.toHaveBeenCalled()
  deliver()
  await settle()
  expect(owner.find('svg').exists()).toBe(false)
})
