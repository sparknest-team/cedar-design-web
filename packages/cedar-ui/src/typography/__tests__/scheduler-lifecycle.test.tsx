import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { defineComponent, h, KeepAlive, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import Base from '../base'
import Operations from '../Operations.vue'
import { clipboard } from '../../_utils/clipboard'
import measure from '../utils/measure'
import { raf, caf } from '../../_utils/raf'

vi.mock('../../_utils/clipboard', () => ({ clipboard: vi.fn() }))
vi.mock('../utils/measure', () => ({ default: vi.fn(() => ({ ellipsis: true, text: 'short' })) }))
vi.mock('../../_utils/raf', () => ({ raf: vi.fn(), caf: vi.fn() }))

const Observer = defineComponent({ emits: ['resize'], setup: (_, { slots }) => () => slots.default?.() })
const mounts: ReturnType<typeof mount>[] = []
const frames: (() => void)[] = []

function setup(props: Record<string, unknown> = {}, onCopy?: () => void) {
  const active = ref(true)
  const config = reactive(props)
  const root = mount(defineComponent({
    setup: () => () => h(KeepAlive, null, {
      default: () => active.value ? h(Base, { component: 'span', copyable: true, ...config, onCopy }, { default: () => 'long content' }) : null,
    }),
  }), { global: { stubs: { CResizeObserver: Observer, CTypographyOperations: true, CTooltip: true } } })
  mounts.push(root)
  const base = root.findComponent(Base)
  const operations = () => base.findComponent(Operations)
  const copy = operations().exists() ? operations().vm.$.vnode.props!.onCopy as () => void : () => {}
  const resize = () => base.findComponent(Observer).vm.$emit('resize')
  return { root, base, active, config, operations, copy, resize }
}

beforeEach(() => {
  vi.useFakeTimers()
  vi.clearAllMocks()
  frames.length = 0
  vi.mocked(raf).mockImplementation((callback: FrameRequestCallback) => {
    frames.push(() => callback(0))
    return frames.length
  })
})
afterEach(() => {
  mounts.splice(0).forEach(root => root.unmount())
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('Typography scheduler ownership', () => {
  test('current copy feedback uses the existing 3000ms delay', async () => {
    const s = setup()
    s.copy(); await nextTick()
    expect(s.operations().props('isCopied')).toBe(true)
    vi.advanceTimersByTime(2999); await nextTick()
    expect(s.operations().props('isCopied')).toBe(true)
    vi.advanceTimersByTime(1); await nextTick()
    expect(s.operations().props('isCopied')).toBe(false)
  })
  test('replacement copy cancels its previous timer', () => {
    const s = setup()
    s.copy(); s.copy()
    expect(vi.getTimerCount()).toBe(1)
  })
  test('old copy completion cannot clear a newer feedback', async () => {
    const s = setup()
    const timers = vi.spyOn(globalThis, 'setTimeout')
    s.copy()
    const old = timers.mock.calls.at(-1)![0] as () => void
    s.copy(); old(); await nextTick()
    expect(s.operations().props('isCopied')).toBe(true)
  })
  test('deactivation cancels feedback and retained copy stays inert', async () => {
    const s = setup()
    s.copy(); s.active.value = false; await nextTick()
    expect(vi.getTimerCount()).toBe(0)
    vi.mocked(clipboard).mockClear(); s.copy()
    expect(clipboard).not.toHaveBeenCalled()
    expect(vi.getTimerCount()).toBe(0)
  })
  test('disposed retained copy stays inert', () => {
    const s = setup()
    s.root.unmount(); s.copy()
    expect(clipboard).not.toHaveBeenCalled()
    expect(vi.getTimerCount()).toBe(0)
  })
  test('reentrant copy listener disposal cannot schedule work', () => {
    let dispose = () => {}
    const s = setup({}, () => dispose())
    dispose = () => s.root.unmount()
    s.copy()
    expect(vi.getTimerCount()).toBe(0)
  })
  test('disabled copy does not write clipboard', () => {
    const s = setup({ disabled: true })
    s.copy()
    expect(clipboard).not.toHaveBeenCalled()
  })
  test('disabled ellipsis remains measurable', () => {
    const s = setup({ disabled: true, ellipsis: true })
    s.resize(); frames.at(-1)!()
    expect(measure).toHaveBeenCalledTimes(1)
  })
  test('superseded measurement callback is inert', () => {
    const s = setup({ ellipsis: true })
    s.resize(); const old = frames.at(-1)!
    s.resize(); old()
    expect(measure).not.toHaveBeenCalled()
  })
  test('current frame is consumed once', () => {
    setup({ ellipsis: true })
    const frame = frames.at(-1)!
    frame(); frame()
    expect(measure).toHaveBeenCalledTimes(1)
  })
  test('deactivation cancels RAF and old callback after activation is inert', async () => {
    const s = setup({ ellipsis: true })
    const old = frames.at(-1)!
    s.active.value = false; await nextTick()
    expect(caf).toHaveBeenCalled()
    s.active.value = true; await nextTick()
    vi.mocked(measure).mockClear(); old()
    expect(measure).not.toHaveBeenCalled()
    s.resize(); frames.at(-1)!()
    expect(measure).toHaveBeenCalledTimes(1)
  })
  test('inactive retained resize cannot enqueue', async () => {
    const s = setup({ ellipsis: true })
    // Keep the callback itself, because the deactivated wrapper is detached.
    const callback = s.base.findComponent(Observer).vm.$.vnode.props!.onResize as () => void
    s.active.value = false; await nextTick()
    const count = frames.length
    callback()
    expect(frames).toHaveLength(count)
  })
  test('ellipsis off cancels pending measurement', async () => {
    const s = setup({ ellipsis: true })
    const old = frames.at(-1)!
    s.config.ellipsis = false
    await nextTick(); old()
    expect(measure).not.toHaveBeenCalled()
  })
  test('disposal during measure suppresses ellipsis notification', () => {
    const s = setup({ ellipsis: true })
    vi.mocked(measure).mockImplementationOnce(() => {
      s.root.unmount()
      return { ellipsis: true, text: 'late' } as any
    })
    frames.at(-1)!()
    expect(s.base.emitted('ellipsis')).toBeUndefined()
  })
  test('copy delay change cancels pending feedback instead of replaying it', async () => {
    const s = setup()
    s.copy(); s.config.copyDelay = 10; await nextTick()
    expect(vi.getTimerCount()).toBe(0)
    expect(s.operations().props('isCopied')).toBe(false)
    s.copy(); vi.advanceTimersByTime(10); await nextTick()
    expect(s.operations().props('isCopied')).toBe(false)
  })
  test('copyable off cancels pending feedback and retained copy', async () => {
    const s = setup()
    s.copy(); s.config.copyable = false; await nextTick()
    vi.mocked(clipboard).mockClear(); s.copy()
    expect(vi.getTimerCount()).toBe(0)
    expect(clipboard).not.toHaveBeenCalled()
  })
  test('old observer binding cannot enqueue after activation', async () => {
    const s = setup({ ellipsis: true })
    const old = s.base.findComponent(Observer).vm.$.vnode.props!.onResize as () => void
    s.active.value = false; await nextTick()
    s.active.value = true; await nextTick()
    const count = frames.length
    old()
    expect(frames).toHaveLength(count)
    s.resize()
    expect(frames).toHaveLength(count + 1)
  })
  test('retained observer and queued frame are inert after disposal', () => {
    const s = setup({ ellipsis: true })
    const old = frames.at(-1)!
    const callback = s.base.findComponent(Observer).vm.$.vnode.props!.onResize as () => void
    s.root.unmount()
    const count = frames.length
    callback(); old()
    expect(frames).toHaveLength(count)
    expect(measure).not.toHaveBeenCalled()
  })
  test('expansion cancels pending measurement', async () => {
    const s = setup({ ellipsis: { expandable: true } })
    const old = frames.at(-1)!
    const expand = s.operations().vm.$.vnode.props!.onExpand as () => void
    expand(); await nextTick(); old()
    expect(measure).not.toHaveBeenCalled()
  })
  test('reentrant copy event keeps only the newest feedback timer', () => {
    let repeat = () => {}
    const s = setup({}, () => repeat())
    repeat = () => { repeat = () => {}; s.copy() }
    s.copy()
    expect(clipboard).toHaveBeenCalledTimes(2)
    expect(vi.getTimerCount()).toBe(1)
  })
  test('reentrant measurement replacement cannot commit stale text', async () => {
    const s = setup({ ellipsis: true })
    vi.mocked(measure).mockImplementationOnce(() => {
      s.resize()
      return { ellipsis: true, text: 'stale' } as any
    })
    frames.at(-1)!(); await nextTick()
    expect(s.base.emitted('ellipsis')).toBeUndefined()
    expect(s.base.text()).not.toContain('stale')
  })
  test('CSS ellipsis observer is inert while inactive and rebinds on activation', async () => {
    const s = setup({ ellipsis: { css: true } })
    const wrapper = s.base.get('span').element
    const content = wrapper.querySelector('span')!
    const descriptor = Object.getOwnPropertyDescriptor(content, 'offsetHeight')
    let reads = 0
    Object.defineProperty(content, 'offsetHeight', { configurable: true, get: () => { reads++; return 20 } })
    try {
      const old = s.base.findComponent(Observer).vm.$.vnode.props!.onResize as () => void
      s.active.value = false; await nextTick(); old()
      expect(reads).toBe(0)
      s.active.value = true; await nextTick()
      const before = reads
      old()
      expect(reads).toBe(before)
      // Activation performs a fresh synchronous CSS measurement, without RAF.
      expect(before).toBeGreaterThan(0)
      expect(frames).toHaveLength(0)
    } finally {
      if (descriptor) Object.defineProperty(content, 'offsetHeight', descriptor)
      else Reflect.deleteProperty(content, 'offsetHeight')
    }
  })
})
