import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import ResizeBox from '..'

const wrappers = [],
  hosts = []
function setup(component, options = {}, dir = 'rtl') {
  const host = document.createElement('div')
  host.dir = dir
  document.body.append(host)
  hosts.push(host)
  const wrapper = mount(component, { attachTo: host, ...options })
  wrappers.push(wrapper)
  return wrapper
}
async function settled() {
  await nextTick()
  await Promise.resolve()
  await nextTick()
  await nextTick()
}
afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount())
  hosts.splice(0).forEach((h) => h.remove())
})
function geometry(el, width = 200, height = 200) {
  const current = (axis, initial) =>
    Number.isFinite(parseFloat(el.style[axis])) ? parseFloat(el.style[axis]) : initial
  Object.defineProperties(el, {
    clientWidth: { configurable: true, get: () => current('width', width) },
    clientHeight: { configurable: true, get: () => current('height', height) },
  })
}
function pointer(type, x, y = 0) {
  window.dispatchEvent(
    new PointerEvent(type, {
      pointerId: 7,
      isPrimary: true,
      buttons: type === 'pointerup' ? 0 : 1,
      pointerType: 'mouse',
      clientX: x,
      clientY: y,
      bubbles: true,
    }),
  )
}

test('physical left/right handles keep their size delta in both reading directions', async () => {
  const w = setup(ResizeBox, { props: { directions: ['left', 'right', 'top', 'bottom'] } })
  geometry(w.element, 200, 120)
  await settled()
  for (const dir of ['rtl', 'ltr']) {
    hosts[0].dir = dir
    await settled()
    const beforeLeft = w.element.clientWidth
    await w.get('.c-resizebox-direction-left').trigger('pointerdown', {
      pointerId: 7,
      isPrimary: true,
      buttons: 1,
      pointerType: 'mouse',
      clientX: 100,
      button: 0,
    })
    pointer('pointermove', 80)
    pointer('pointerup', 80)
    expect(w.emitted('update:width').at(-1)).toEqual([beforeLeft + 20])
    const beforeRight = w.element.clientWidth
    await w.get('.c-resizebox-direction-right').trigger('pointerdown', {
      pointerId: 7,
      isPrimary: true,
      buttons: 1,
      pointerType: 'mouse',
      clientX: 100,
      button: 0,
    })
    pointer('pointermove', 120)
    pointer('pointerup', 120)
    expect(w.emitted('update:width').at(-1)).toEqual([beforeRight + 20])
    const beforeTop = w.element.clientHeight
    await w.get('.c-resizebox-direction-top').trigger('keydown', { key: 'ArrowUp' })
    expect(w.emitted('update:height').at(-1)).toEqual([beforeTop + 10])
    const beforeBottom = w.element.clientHeight
    await w.get('.c-resizebox-direction-bottom').trigger('keydown', { key: 'ArrowUp' })
    expect(w.emitted('update:height').at(-1)).toEqual([beforeBottom + 10])
  }
})
test('negative dimensions clamp to zero and removing an active edge cancels its listener', async () => {
  const w = setup(ResizeBox)
  geometry(w.element)
  await settled()
  await w.get('[role="spinbutton"]').trigger('pointerdown', {
    pointerId: 7,
    isPrimary: true,
    buttons: 1,
    pointerType: 'mouse',
    clientX: 100,
    button: 0,
  })
  pointer('pointermove', -150)
  expect(w.emitted('update:width').at(-1)).toEqual([0])
  const count = w.emitted('update:width').length
  await w.setProps({ directions: [] })
  pointer('pointermove', 150)
  expect(w.emitted('update:width')).toHaveLength(count)
})
