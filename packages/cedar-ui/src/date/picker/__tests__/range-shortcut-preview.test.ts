import { defineComponent, h, KeepAlive, ref, watch } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import Picker from '../DateRangePicker.vue'
import { dayjs } from '../../../_utils/date'

const ticks: Array<() => void> = []
vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return { ...actual, nextTick: (callback?: () => void) => {
    if (callback) ticks.push(callback)
    return Promise.resolve()
  } }
})
const actualVue = await vi.importActual<typeof import('vue')>('vue')
const cleanups: Array<() => void> = []
afterEach(() => { cleanups.splice(0).reverse().forEach(cleanup => cleanup()); ticks.length = 0 })
function replace(target: object, key: string, value: unknown) {
  const descriptor = Object.getOwnPropertyDescriptor(target, key)
  Object.defineProperty(target, key, { configurable: true, writable: true, value })
  cleanups.push(() => {
    if (descriptor) Object.defineProperty(target, key, descriptor)
    else Reflect.deleteProperty(target, key)
  })
}
async function fixture() {
  const shown = ref(true)
  const config = ref<Record<string, any>>({ defaultOpen: true, defaultValue: ['2025-01-01', '2025-01-02'], previewShortcut: true })
  const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, {}, () => shown.value ? h(Picker, config.value) : null) }), {
    global: { stubs: { RangePickerPanel: true } },
  })
  await actualVue.nextTick()
  const picker = wrapper.findComponent(Picker), vm = picker.vm as any
  const pending = new Map<number, () => void>()
  const nativeSet = globalThis.setTimeout, nativeClear = globalThis.clearTimeout
  let sequence = 10000
  replace(globalThis, 'setTimeout', (callback: () => void, delay?: number, ...args: any[]) => {
    if (delay !== 100) return nativeSet(callback, delay, ...args)
    pending.set(++sequence, callback); return sequence
  })
  replace(globalThis, 'clearTimeout', (id: any) => { if (!pending.delete(id)) nativeClear(id) })
  cleanups.push(() => wrapper.unmount())
  const enter = vm.rangePanelProps.onShortcutMouseEnter
  const leave = vm.rangePanelProps.onShortcutMouseLeave
  const range = (month = '02') => [dayjs(`2025-${month}-05`), dayjs(`2025-${month}-06`)]
  const preview = () => vm.panelValue.map((date: any) => date?.format('YYYY-MM-DD'))
  const arm = () => {
    enter(range()); leave()
    const [id, callback] = [...pending.entries()][0]
    return { callback, deliver() { pending.delete(id); callback() } }
  }
  return { shown, config, wrapper, picker, vm, pending, enter, leave, range, preview, arm }
}

test('current100ms clear resets preview/input without committing model', async () => {
  const f = await fixture(); const task = f.arm()
  expect(f.preview()).toEqual(['2025-02-05', '2025-02-06'])
  task.deliver(); expect(f.preview()).toEqual(['2025-01-01', '2025-01-02'])
  expect(f.picker.emitted('update:modelValue')).toBeUndefined()
})
test('cancelled clear cannot erase a newer range preview', async () => {
  const f = await fixture(); const task = f.arm(); f.enter(f.range('03')); task.callback()
  expect(f.preview()).toEqual(['2025-03-05', '2025-03-06'])
})
test('consumed clear cannot replay against another range preview', async () => {
  const f = await fixture(); const task = f.arm(); task.deliver(); f.enter(f.range('03')); task.callback()
  expect(f.preview()).toEqual(['2025-03-05', '2025-03-06'])
})
for (const action of ['disabled', 'readonly', 'previewShortcut', 'open', 'modelValue'] as const) {
  test(`${action} change cancels pending range cleanup`, async () => {
    const f = await fixture(); f.arm()
    f.config.value[action] = action === 'disabled' || action === 'readonly' ? true : action === 'modelValue' ? ['2025-04-01', '2025-04-02'] : false
    await actualVue.nextTick(); expect(f.pending.size).toBe(0)
  })
}
test('deactivation cancels waiting and retained range preview commands', async () => {
  const f = await fixture(); f.arm(); f.shown.value = false; await actualVue.nextTick()
  expect(f.pending.size).toBe(0)
  f.enter(f.range('03')); f.leave()
  expect(f.pending.size).toBe(0)
  expect(f.preview()).not.toEqual(['2025-03-05', '2025-03-06'])
})
test('old clear cannot cross a fresh activation', async () => {
  const f = await fixture(); const task = f.arm()
  f.shown.value = false; await actualVue.nextTick()
  f.shown.value = true; await actualVue.nextTick()
  f.enter(f.range('03')); task.callback()
  expect(f.preview()).toEqual(['2025-03-05', '2025-03-06'])
})
test('ordinary unmount already clears the current timer', async () => {
  const f = await fixture(); f.arm(); f.wrapper.unmount(); expect(f.pending.size).toBe(0)
})
test('queued header reset cannot notify after suspension', async () => {
  const f = await fixture(); const task = f.arm()
  expect(ticks.length).toBeGreaterThan(0)
  ticks.splice(0).forEach(callback => callback())
  task.deliver(); const old = ticks.splice(0); expect(old.length).toBeGreaterThan(0)
  f.shown.value = false; await actualVue.nextTick()
  const before = (f.picker.emitted('picker-value-change') ?? []).length
  old.forEach(callback => callback())
  expect((f.picker.emitted('picker-value-change') ?? []).length).toBe(before)
})
test('header still settles the preview during the100ms leave grace', async () => {
  const f = await fixture(); f.arm()
  expect(ticks.length).toBeGreaterThan(0)
  ticks.splice(0).forEach(callback => callback())
  expect(f.vm.rangePanelProps.startHeaderProps.headerValue.format('YYYY-MM-DD')).toBe('2025-02-05')
})

for (const action of ['disabled', 'readonly', 'previewShortcut', 'open'] as const) {
  test(`${action} rejects retained shortcut enter and leave`, async () => {
    const f = await fixture(); f.config.value[action] = action === 'disabled' || action === 'readonly'
    await actualVue.nextTick(); f.enter(f.range('03')); f.leave()
    expect(f.pending.size).toBe(0)
    expect(f.preview()).toEqual(['2025-01-01', '2025-01-02'])
  })
}
for (const edge of ['enter', 'clear'] as const) {
  test(`${edge} preview write reentry preserves the newer draft`, async () => {
    const f = await fixture(); const task = edge === 'clear' ? f.arm() : undefined
    let reenter = true
    const stop = watch(() => f.vm.panelValue, () => {
      if (!reenter) return
      reenter = false; f.enter(f.range('03')); f.vm.inputValue = ['fresh', 'draft']
    }, { flush: 'sync' })
    cleanups.push(stop)
    if (task) task.deliver()
    else f.enter(f.range())
    expect(f.preview()).toEqual(['2025-03-05', '2025-03-06'])
    expect(f.vm.inputValue).toEqual(['fresh', 'draft'])
  })
}
test('consumed header continuation cannot undo a subsequent navigation', async () => {
  const f = await fixture(); const task = f.arm()
  ticks.splice(0).forEach(callback => callback()); task.deliver()
  const old = ticks.splice(0); old.forEach(callback => callback())
  f.vm.rangePanelProps.startHeaderProps.headerOperations.onSuperPrev()
  const current = f.vm.rangePanelProps.startHeaderProps.headerValue.format('YYYY-MM-DD')
  old.forEach(callback => callback())
  expect(f.vm.rangePanelProps.startHeaderProps.headerValue.format('YYYY-MM-DD')).toBe(current)
})

test('a fresh date-cell selection retires shortcut cleanup before a new input draft', async () => {
  const f = await fixture(); const task = f.arm()
  f.vm.rangePanelProps.onCellClick(f.range('04')[0])
  f.vm.inputValue = ['fresh', 'draft']
  expect(f.pending.size).toBe(0)
  task.callback()
  expect(f.vm.inputValue).toEqual(['fresh', 'draft'])
})
