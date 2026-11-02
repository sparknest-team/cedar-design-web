import { h, KeepAlive, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import { useControlBlock } from '../hooks/use-control-block'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => { owners.splice(0).forEach(owner => owner.unmount()); vi.restoreAllMocks() })
const move = (x: number) => new MouseEvent('mousemove', { clientX: x, clientY: 5, buttons: 1 })
function dimensions(el: HTMLElement) {
  Object.defineProperty(el, 'clientWidth', { configurable: true, value: 100 })
  Object.defineProperty(el, 'clientHeight', { configurable: true, value: 20 })
}
test('deactivation ends dragging and stale callbacks cannot revive in a new session', async () => {
  const show = ref(true), change = vi.fn()
  let control!: ReturnType<typeof useControlBlock>
  const Inner = { setup() { control = useControlBlock({ value: [0, 0], onChange: change }); return () => h('div', { ref: control.blockRef }) } }
  const owner = mount({ setup: () => () => h(KeepAlive, null, { default: () => show.value ? h(Inner) : null }) }); owners.push(owner)
  const view = control.blockRef.value!.ownerDocument.defaultView!
  const add = vi.spyOn(view, 'addEventListener')
  dimensions(control.blockRef.value!); control.onMouseDown(new MouseEvent('mousedown', { clientX: 25, buttons: 1 }))
  const old = add.mock.calls.find(([event]) => event === 'mousemove')![1] as EventListener
  expect(change).toHaveBeenCalledTimes(1)
  show.value = false; await nextTick(); view.dispatchEvent(move(75)); old(move(80))
  expect(change).toHaveBeenCalledTimes(1); expect(control.active.value).toBe(false)
  show.value = true; await nextTick(); control.onMouseDown(new MouseEvent('mousedown', { clientX: 40, buttons: 1 }))
  expect(change).toHaveBeenCalledTimes(2); old(move(90)); expect(change).toHaveBeenCalledTimes(2)
  view.dispatchEvent(move(60)); expect(change).toHaveBeenCalledTimes(3)
})
test('listeners use the block owner view and unmount releases that view', () => {
  const iframe = document.createElement('iframe'); document.body.appendChild(iframe)
  let control!: ReturnType<typeof useControlBlock>
  const change = vi.fn(), owner = mount({ setup() { control = useControlBlock({ value: [0, 0], onChange: change }); return () => h('div') } }); owners.push(owner)
  try {
    const view = iframe.contentWindow!, block = iframe.contentDocument!.createElement('div')
    iframe.contentDocument!.body.appendChild(block); dimensions(block); control.blockRef.value = block
    const add = vi.spyOn(view, 'addEventListener'), remove = vi.spyOn(view, 'removeEventListener')
    control.onMouseDown(new MouseEvent('mousedown', { clientX: 20, buttons: 1 }))
    const handler = add.mock.calls.find(([event]) => event === 'mousemove')?.[1]
    expect(handler).toBeTypeOf('function'); window.dispatchEvent(move(30)); expect(change).toHaveBeenCalledTimes(1)
    view.dispatchEvent(move(50)); expect(change).toHaveBeenCalledTimes(2)
    owner.unmount(); owners.splice(owners.indexOf(owner), 1)
    expect(remove.mock.calls.some(([event, fn]) => event === 'mousemove' && fn === handler)).toBe(true)
    view.dispatchEvent(move(80)); expect(change).toHaveBeenCalledTimes(2)
  } finally { iframe.remove() }
})
