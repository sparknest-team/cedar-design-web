import { afterEach, describe, expect, test, vi } from 'vitest'
import { defineComponent, h, inject, KeepAlive, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import Anchor from '../Anchor.vue'
import AnchorLink from '../AnchorLink.vue'
import { anchorInjectionKey, type AnchorContext } from '../context'

const ticks: (() => void)[] = []
const completions: (() => void)[] = []
const cancellations: ReturnType<typeof vi.fn>[] = []
let scrollTarget: HTMLElement
vi.mock('vue', async () => {
  const actual = await vi.importActual<any>('vue')
  return { ...actual, nextTick: (callback?: () => void) => {
    if (callback) { ticks.push(callback); return Promise.resolve() }
    return actual.nextTick()
  } }
})
vi.mock('compute-scroll-into-view', () => ({ compute: () => [{ el: scrollTarget, top: 80 }] }))
vi.mock('../utils', () => ({ slide: (_el: HTMLElement, _top: number, done: () => void) => {
  completions.push(done)
  const cancel = vi.fn(); cancellations.push(cancel); return cancel
} }))
vi.mock('../../_utils/raf', () => ({
  raf: (callback: FrameRequestCallback) => window.requestAnimationFrame(callback),
  caf: (id: number) => window.cancelAnimationFrame(id),
}))
const owners: ReturnType<typeof mount>[] = []
const nodes: HTMLElement[] = []
const flush = async () => { await nextTick(); await nextTick() }
afterEach(() => {
  owners.splice(0).forEach(owner => owner.unmount())
  nodes.splice(0).forEach(node => node.remove())
  vi.restoreAllMocks()
  ticks.length = completions.length = cancellations.length = 0
})
async function fixture() {
  const frames: FrameRequestCallback[] = []
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => { frames.push(callback); return frames.length })
  const cancelFrame = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {})
  const view = document.defaultView!
  if (view !== window) {
    vi.spyOn(view, 'requestAnimationFrame').mockImplementation(callback => { frames.push(callback); return frames.length })
    vi.spyOn(view, 'cancelAnimationFrame').mockImplementation(cancelFrame)
  }
  const container = document.createElement('div')
  container.innerHTML = '<section id="anchor-a"></section><section id="anchor-b"></section>'
  document.body.append(container); nodes.push(container); scrollTarget = container
  vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({ top: 0, height: 100 } as DOMRect)
  let selected = 'a'
  for (const key of ['a', 'b']) {
    vi.spyOn(container.querySelector('#anchor-' + key)!, 'getBoundingClientRect').mockImplementation(() => ({ top: selected === key ? 10 : 110 } as DOMRect))
  }
  let context!: AnchorContext
  const Probe = defineComponent({ setup() { context = inject(anchorInjectionKey)!; return () => null } })
  const active = ref(true), target = ref<HTMLElement | Window>(container)
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, () => active.value ? h(Anchor, { scrollContainer: target.value, changeHash: false }, () => [h(AnchorLink, { href: '#anchor-a', title: 'a' }), h(AnchorLink, { href: '#anchor-b', title: 'b' }), h(Probe)]) : null) }))
  owners.push(owner)
  await flush()
  frames.splice(0).forEach(callback => callback(0)); ticks.splice(0).forEach(callback => callback())
  await flush()
  const anchor = owner.findComponent(Anchor)
  const click = (hash = '#anchor-b') => context.handleClick(new MouseEvent('click', { cancelable: true }), hash)
  return { owner, anchor, active, target, container, context, frames, cancelFrame, click, select: (key: string) => { selected = key }, changes: () => anchor.emitted('change')?.length ?? 0 }
}

describe('Anchor scroll consumer ownership', () => {
  test('current link click selects and notifies after render', async () => {
    const f = await fixture(); f.click(); await flush()
    ticks.splice(0).forEach(callback => callback())
    expect(f.context.currentLink).toBe('#anchor-b')
    expect(f.anchor.emitted('select')).toHaveLength(1)
    expect(f.anchor.emitted('change')!.at(-1)).toEqual(['#anchor-b'])
  })
  test('replacement click cancels the previous tween', async () => {
    const f = await fixture(); f.click(); f.click('#anchor-a')
    expect(cancellations[0]).toHaveBeenCalledTimes(1)
  })
  test('deactivation cancels tween and pending measurement frame', async () => {
    const f = await fixture(); f.click(); f.active.value = false; await flush()
    expect(cancellations[0]).toHaveBeenCalledTimes(1)
  })
  test('unmount cancels tween', async () => {
    const f = await fixture(); f.click(); f.owner.unmount()
    expect(cancellations[0]).toHaveBeenCalledTimes(1)
  })
  test('retained inactive click is inert without preventing navigation', async () => {
    const f = await fixture(); f.active.value = false; await flush()
    const event = new MouseEvent('click', { cancelable: true })
    f.context.handleClick(event, '#anchor-b')
    expect(completions).toHaveLength(0)
    expect(event.defaultPrevented).toBe(false)
    expect(f.anchor.emitted('select')).toBeUndefined()
  })
  test('old change cannot notify while inactive', async () => {
    const f = await fixture(); f.click(); const old = ticks.splice(0).at(-1)!
    f.active.value = false; await flush(); const count = f.changes(); old()
    expect(f.changes()).toBe(count)
  })
  test('old change cannot cross activation', async () => {
    const f = await fixture(); f.click(); const old = ticks.splice(0).at(-1)!
    f.active.value = false; await flush(); f.active.value = true; await flush()
    const count = f.changes(); old()
    expect(f.changes()).toBe(count)
  })
  test('replacement change supersedes prior notification', async () => {
    const f = await fixture(); f.click(); const old = ticks.splice(0).at(-1)!
    f.click('#anchor-a'); const count = f.changes(); old()
    expect(f.changes()).toBe(count)
  })
  test('change callback consumes once', async () => {
    const f = await fixture(); f.click(); const current = ticks.splice(0).at(-1)!
    const count = f.changes(); current(); current()
    expect(f.changes()).toBe(count + 1)
  })
  test('same-hash replacement preserves the current pending change once', async () => {
    const f = await fixture(); const count = f.changes()
    f.click(); f.click()
    ticks.splice(0).forEach(callback => callback())
    expect(f.changes()).toBe(count + 1)
  })
  test('deactivation removes the original scroll listener', async () => {
    const f = await fixture(); f.active.value = false; await flush()
    const count = f.frames.length; f.container.dispatchEvent(new Event('scroll'))
    expect(f.frames).toHaveLength(count)
  })
  test('deactivation physically cancels its pending frame', async () => {
    const f = await fixture(); f.container.dispatchEvent(new Event('scroll'))
    f.cancelFrame.mockClear(); f.active.value = false; await flush()
    expect(f.cancelFrame).toHaveBeenCalled()
  })
  test('old measurement cannot select after activation', async () => {
    const f = await fixture(); f.container.dispatchEvent(new Event('scroll'))
    const old = f.frames.at(-1)!; f.active.value = false; await flush()
    f.active.value = true; await flush(); f.select('b'); old(0)
    expect(f.context.currentLink).toBe('#anchor-a')
  })
  test('old tween finish cannot unlock a newer scroll', async () => {
    const f = await fixture(); f.click(); const old = completions[0]
    f.click('#anchor-a'); old(); f.select('b')
    f.container.dispatchEvent(new Event('scroll')); f.frames.splice(0).forEach(callback => callback(0))
    expect(f.context.currentLink).toBe('#anchor-a')
  })
  test('container change removes listener and cancels previous tween', async () => {
    const f = await fixture(); f.click()
    const next = document.createElement('div'); document.body.append(next); nodes.push(next)
    f.target.value = next; await flush()
    const count = f.frames.length; f.container.dispatchEvent(new Event('scroll'))
    expect(f.frames).toHaveLength(count)
    expect(cancellations[0]).toHaveBeenCalled()
  })
  test('geometry getter disposal prevents starting a tween', async () => {
    const f = await fixture()
    // The mocked compute step is intentionally not the geometry probe here.
    vi.spyOn(f.container, 'getBoundingClientRect').mockImplementation(() => { f.owner.unmount(); return { top:0, height:100 } as DOMRect })
    const count = f.changes(); f.container.dispatchEvent(new Event('scroll'))
    f.frames.splice(0).forEach(callback => callback(0)); ticks.splice(0).forEach(callback => callback())
    expect(f.changes()).toBe(count)
  })
  test('measurement getter reentry supersedes the old measurement', async () => {
    const f = await fixture(); f.select('b')
    const rect = f.container.getBoundingClientRect.bind(f.container)
    vi.spyOn(f.container, 'getBoundingClientRect').mockImplementationOnce(() => {
      f.container.dispatchEvent(new Event('scroll'))
      return rect()
    })
    f.container.dispatchEvent(new Event('scroll'))
    f.frames.splice(0).forEach(callback => callback(0))
    expect(f.context.currentLink).toBe('#anchor-a')
    f.frames.splice(0).forEach(callback => callback(0))
    expect(f.context.currentLink).toBe('#anchor-b')
  })
  test('old registration cleanup cannot erase a replacement node', async () => {
    const f = await fixture()
    const old = document.createElement('li'), current = document.createElement('li')
    f.context.addLink('#anchor-b', old); f.context.addLink('#anchor-b', current)
    f.context.removeLink('#anchor-b', old)
    f.select('b'); f.container.dispatchEvent(new Event('scroll'))
    f.frames.splice(0).forEach(callback => callback(0))
    expect(f.context.currentLink).toBe('#anchor-b')
  })
})
