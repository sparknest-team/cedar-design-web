import { h } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Dialog from '../../dialog'
import Popover from '../../popover'
import Drawer from '../drawer.vue'

function touch(target: Element, type: string, clientY: number) {
  const event = new Event(type, { bubbles: true, cancelable: true, composed: true })
  const touches = [{ identifier: 1, clientX: 20, clientY }]
  Object.assign(event, { touches, changedTouches: touches })
  target.dispatchEvent(event)
  return event
}

test('leaves touch scrolling in nested desktop popovers to the browser', async () => {
  const local = document.createElement('div')
  document.body.append(local)
  const popover = (label: string) =>
    h(
      Popover,
      { open: true, popupContainer: local },
      {
        default: () => h('button', label),
        content: () => h('div', { 'data-scroll-region': label, style: { overflowY: 'auto' } }, [h('span', label)]),
      },
    )
  const wrapper = mount(Drawer, {
    attachTo: document.body,
    props: { open: true, popupContainer: false, zIndex: 100 },
    slots: {
      default: () => [
        popover('lower'),
        h(
          Dialog,
          { open: true, popupContainer: false, zIndex: 200 },
          {
            default: () => popover('upper'),
          },
        ),
      ],
    },
  })
  try {
    await flushPromises()
    for (const region of local.querySelectorAll('[data-scroll-region]')) {
      Object.defineProperties(region, { clientHeight: { value: 100 }, scrollHeight: { value: 300 } })
    }
    const lower = local.querySelector('[data-scroll-region="lower"] span')!
    const upper = local.querySelector('[data-scroll-region="upper"] span')!
    touch(upper, 'touchstart', 100)
    expect(touch(upper, 'touchmove', 70).defaultPrevented).toBe(false)
    touch(lower, 'touchstart', 100)
    expect(touch(lower, 'touchmove', 70).defaultPrevented).toBe(false)
  } finally {
    wrapper.unmount()
    local.remove()
  }
})
