import { defineComponent, h, KeepAlive, nextTick, ref, watch } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import Picker from '../Picker.vue'
import { dayjs } from '../../../_utils/date'

const cleanups: Array<() => void> = []
afterEach(() => { cleanups.splice(0).reverse().forEach(cleanup => cleanup()) })
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
  const config = ref<Record<string, any>>({ defaultOpen: true, defaultValue: '2025-01-01', previewShortcut: true })
  const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, {}, () => shown.value ? h(Picker, config.value) : null) }), {
    global: { stubs: { PickerPanel: true } },
  })
  await nextTick()
  const picker = wrapper.findComponent(Picker), vm = picker.vm as any
  const pending = new Map<number, () => void>()
  const nativeSet = globalThis.setTimeout, nativeClear = globalThis.clearTimeout
  let sequence = 10000
  replace(globalThis, 'setTimeout', (callback: () => void, delay?: number, ...args: any[]) => {
    if (delay !== 100) return nativeSet(callback, delay, ...args)
    pending.set(++sequence, callback); return sequence
  })
  replace(globalThis, 'clearTimeout', (id: any) => {
    if (!pending.delete(id)) nativeClear(id)
  })
  cleanups.push(() => wrapper.unmount())
  const enter = vm.panelProps.onShortcutMouseEnter
  const leave = vm.panelProps.onShortcutMouseLeave
  const date = (value = '2025-02-05') => dayjs(value)
  const preview = () => vm.panelValue?.format('YYYY-MM-DD')
  const arm = () => {
    enter(date()); leave()
    const [id, callback] = [...pending.entries()][0]
    return { id, callback, deliver() { pending.delete(id); callback() } }
  }
  return { shown, config, wrapper, picker, vm, pending, enter, leave, date, preview, arm }
}

test('current100ms leave clears preview without committing a value', async () => {
  const f = await fixture(); const task = f.arm()
  expect(f.preview()).toBe('2025-02-05'); expect(f.pending.size).toBe(1)
  task.deliver(); expect(f.preview()).toBe('2025-01-01')
  expect(f.picker.emitted('update:modelValue')).toBeUndefined()
})

test('cancelled old clear cannot erase a newer hover preview', async () => {
  const f = await fixture(); const task = f.arm()
  f.enter(f.date('2025-03-06')); task.callback()
  expect(f.preview()).toBe('2025-03-06')
})

test('consumed clear cannot be replayed against another preview', async () => {
  const f = await fixture(); const task = f.arm(); task.deliver()
  f.enter(f.date('2025-03-06')); task.callback()
  expect(f.preview()).toBe('2025-03-06')
})

for (const action of ['disabled', 'readonly', 'previewShortcut', 'open', 'modelValue'] as const) {
  test(`${action} change cancels pending preview cleanup`, async () => {
    const f = await fixture(); f.arm()
    f.config.value[action] = action === 'disabled' || action === 'readonly' ? true : action === 'modelValue' ? '2025-04-07' : false
    await nextTick()
    expect(f.pending.size).toBe(0)
  })
}

test('deactivation clears the old timer and retained preview commands are inert', async () => {
  const f = await fixture(); const task = f.arm()
  f.shown.value = false; await nextTick()
  expect(f.pending.size).toBe(0)
  f.enter(f.date('2025-03-06')); f.leave()
  expect(f.pending.size).toBe(0)
  expect(f.preview()).not.toBe('2025-03-06')
  task.callback()
})

test('old timer cannot cross reactivation and erase fresh preview', async () => {
  const f = await fixture(); const task = f.arm()
  f.shown.value = false; await nextTick()
  f.shown.value = true; await nextTick()
  f.enter(f.date('2025-03-06')); task.callback()
  expect(f.preview()).toBe('2025-03-06')
})

test('ordinary unmount already clears the current timer', async () => {
  const f = await fixture(); f.arm(); f.wrapper.unmount()
  expect(f.pending.size).toBe(0)
})

for (const action of ['disabled', 'readonly', 'previewShortcut', 'open'] as const) {
  test(`${action} rejects retained enter and leave commands`, async () => {
    const f = await fixture()
    f.config.value[action] = action === 'disabled' || action === 'readonly'
    await nextTick()
    f.enter(f.date()); f.leave()
    expect(f.pending.size).toBe(0)
    expect(f.preview()).toBe('2025-01-01')
  })
}

test('preview setter reentry preserves the newer input draft', async () => {
  const f = await fixture(); let reenter = true
  const stop = watch(() => f.vm.panelValue, () => {
    if (!reenter) return
    reenter = false
    f.enter(f.date('2025-03-06'))
    f.vm.inputValue = 'fresh draft'
  }, { flush: 'sync' })
  cleanups.push(stop)
  f.enter(f.date())
  expect(f.preview()).toBe('2025-03-06')
  expect(f.vm.inputValue).toBe('fresh draft')
})
