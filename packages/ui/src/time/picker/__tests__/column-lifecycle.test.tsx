import { defineComponent, h, KeepAlive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import TimeColumn from '../TimeColumn.vue'

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
  const shown = ref(true), visible = ref(true), value = ref(0)
  const list = ref([{ value: 0, label: 'Zero' }, { value: 1, label: 'One' }])
  const view = document.defaultView!
  const pending = new Map<number, FrameRequestCallback>()
  let sequence = 0
  replace(view, 'requestAnimationFrame', (callback: FrameRequestCallback) => { pending.set(++sequence, callback); return sequence })
  replace(view, 'cancelAnimationFrame', (id: number) => { pending.delete(id) })
  replace(view, 'matchMedia', () => ({ matches: false }))
  const host = document.createElement('div'); document.body.appendChild(host)
  const wrapper = mount(defineComponent({ setup: () => () => h(KeepAlive, {}, () => shown.value
    ? h(TimeColumn, { prefixCls: 'test-time', value: value.value, visible: visible.value, list: list.value }) : null) }), { attachTo: host })
  cleanups.push(() => { wrapper.unmount(); host.remove() })
  await actualVue.nextTick(); ticks.splice(0).forEach(callback => callback()); await actualVue.nextTick()
  const column = wrapper.findComponent(TimeColumn)
  const element = column.element as HTMLElement
  const selected = element.querySelectorAll('li')[1] as HTMLElement
  Object.defineProperty(selected, 'offsetTop', { configurable: true, get: () => 100 })
  const vm = column.vm as any
  const run = (time: number) => {
    const first = pending.entries().next().value
    expect(first).toBeDefined()
    const [id, callback] = first!
    pending.delete(id); callback(time)
  }
  const animate = async () => { value.value = 1; await actualVue.nextTick(); run(0) }
  return { shown, visible, value, list, wrapper, column, element, selected, vm, pending, run, animate }
}

test('normal value scroll keeps100ms linear timing and current select', async () => {
  const f = await fixture(); await f.animate(); f.run(50)
  expect(f.element.scrollTop).toBe(50)
  f.run(100); expect(f.element.scrollTop).toBe(100)
  f.vm.onItemClick(f.list.value[1]); expect(f.column.emitted('select')).toEqual([[1]])
})

for (const action of ['hide', 'deactivate', 'unmount'] as const) {
  test(`${action} cancels an active private scroll and retained frame`, async () => {
    const f = await fixture(); await f.animate()
    const old = [...f.pending.values()][0]
    if (action === 'hide') f.visible.value = false
    else if (action === 'deactivate') f.shown.value = false
    else f.wrapper.unmount()
    await actualVue.nextTick(); old(50)
    expect(f.element.scrollTop).toBe(0)
    expect(f.pending.size).toBe(0)
  })
}

test('old visibility continuation cannot replace a newer value scroll', async () => {
  const f = await fixture()
  f.visible.value = false; await actualVue.nextTick(); ticks.length = 0
  f.visible.value = true; await actualVue.nextTick()
  const old = ticks.splice(0)
  expect(old.length).toBeGreaterThan(0)
  await f.animate(); old.forEach(callback => callback())
  expect(f.element.scrollTop).toBe(0)
  expect(f.pending.size).toBe(1)
})

test('visibility continuation is consumed once', async () => {
  const f = await fixture()
  f.visible.value = false; await actualVue.nextTick(); ticks.length = 0
  f.value.value = 1; f.visible.value = true; await actualVue.nextTick()
  const old = ticks.splice(0); expect(old.length).toBeGreaterThan(0)
  old.forEach(callback => callback()); f.element.scrollTop = 17
  old.forEach(callback => callback())
  expect(f.element.scrollTop).toBe(17)
})

for (const action of ['deactivate', 'unmount', 'remove', 'disable'] as const) {
  test(`${action} rejects a retained enabled item command`, async () => {
    const f = await fixture(); const item = f.list.value[1]
    if (action === 'deactivate') f.shown.value = false
    else if (action === 'unmount') f.wrapper.unmount()
    else if (action === 'remove') f.list.value = [f.list.value[0]]
    else f.list.value = [f.list.value[0], { ...item, disabled: true } as any]
    await actualVue.nextTick(); f.vm.onItemClick(item)
    expect(f.column.emitted('select') ?? []).toHaveLength(0)
  })
}

test('geometry disposal cannot start a task after measurement', async () => {
  const f = await fixture()
  f.visible.value = false; await actualVue.nextTick(); ticks.length = 0
  f.value.value = 1; f.visible.value = true; await actualVue.nextTick()
  const old = ticks.splice(0)
  let writes = 0
  Object.defineProperty(f.element, 'scrollTop', { configurable: true, get: () => 0, set: () => { writes++ } })
  Object.defineProperty(f.selected, 'offsetTop', { configurable: true, get: () => { f.wrapper.unmount(); return 100 } })
  old.forEach(callback => callback())
  expect(writes).toBe(0)
  expect(f.pending.size).toBe(0)
})

test('fresh activation aligns the current value without reviving animation', async () => {
  const f = await fixture(); await f.animate(); f.run(50)
  f.shown.value = false; await actualVue.nextTick()
  expect(f.pending.size).toBe(0)
  f.shown.value = true; await actualVue.nextTick()
  ticks.splice(0).forEach(callback => callback())
  expect(f.element.scrollTop).toBe(100)
  expect(f.pending.size).toBe(0)
})

test('old visibility continuation cannot cross a fresh activation', async () => {
  const f = await fixture()
  f.visible.value = false; await actualVue.nextTick(); ticks.length = 0
  f.visible.value = true; await actualVue.nextTick(); const old = ticks.splice(0)
  f.shown.value = false; await actualVue.nextTick()
  f.shown.value = true; await actualVue.nextTick()
  ticks.splice(0).forEach(callback => callback()); f.element.scrollTop = 17
  old.forEach(callback => callback())
  expect(f.element.scrollTop).toBe(17)
})

test('hidden retained click is inert while current keyboard selection remains usable', async () => {
  const f = await fixture()
  await f.column.findAll('li')[1].trigger('keydown', { key: 'Enter' })
  await f.column.findAll('li')[1].trigger('keydown', { key: ' ' })
  expect(f.column.emitted('select')).toEqual([[1], [1]])
  f.visible.value = false; await actualVue.nextTick()
  f.vm.onItemClick(f.list.value[1])
  expect(f.column.emitted('select')).toHaveLength(2)
})

test('removed item refs are released and no longer measured', async () => {
  const f = await fixture(); await f.animate()
  f.list.value = [f.list.value[0]]; await actualVue.nextTick()
  expect(f.vm.refMap.has(1)).toBe(false)
  expect(f.pending.size).toBe(0)
})

test('old item unregister cannot delete a same-value replacement registration', async () => {
  const f = await fixture(); const old = f.list.value[1]
  f.list.value = [f.list.value[0], { value: 1, label: 'Replacement' }]
  await actualVue.nextTick()
  const current = f.vm.refMap.get(1)
  expect(current).toBeDefined()
  f.vm.onItemRef(null, old)
  expect(f.vm.refMap.get(1)).toBe(current)
})


test('a column mounted without layout aligns when its dialog becomes measurable, once', async () => {
  let report: () => void = () => {}
  replace(globalThis, 'ResizeObserver', class {
    constructor(callback: () => void) { report = callback }
    observe() {}
    disconnect() {}
  })
  const f = await fixture()
  let height = 0
  Object.defineProperty(f.element, 'clientHeight', { configurable: true, get: () => height })
  const first = f.element.querySelector('li')!
  Object.defineProperty(first, 'offsetTop', { configurable: true, get: () => 120 })
  report()
  expect(f.element.scrollTop).toBe(0)
  height = 240
  report()
  ticks.splice(0).forEach(callback => callback())
  await actualVue.nextTick()
  expect(f.element.scrollTop).toBe(120)
  f.element.scrollTop = 64
  report()
  expect(f.element.scrollTop).toBe(64)
  f.wrapper.unmount()
  report()
  ticks.splice(0).forEach(callback => callback())
  expect(f.element.scrollTop).toBe(64)
})
