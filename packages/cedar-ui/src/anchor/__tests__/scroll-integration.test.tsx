import { expect, test, vi } from 'vitest'
import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Anchor from '../Anchor.vue'
import AnchorLink from '../AnchorLink.vue'

let target: HTMLElement
vi.mock('compute-scroll-into-view', () => ({ compute: () => [{ el: target, top: 80 }] }))
test('actual Anchor/Link/slide composition settles immediate reduced scroll then resumes measurement', async () => {
  const container = document.createElement('div')
  container.innerHTML = '<section id="integration-a"></section><section id="integration-b"></section>'
  document.body.append(container); target = container
  const view = container.ownerDocument.defaultView!
  const frames: FrameRequestCallback[] = []
  const descriptor = Object.getOwnPropertyDescriptor(view, 'matchMedia')
  Object.defineProperty(view, 'matchMedia', { configurable: true, value: () => ({ matches: true }) })
  vi.spyOn(view, 'requestAnimationFrame').mockImplementation(callback => { frames.push(callback); return frames.length })
  vi.spyOn(view, 'cancelAnimationFrame').mockImplementation(() => {})
  vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({ top:0, height:100 } as DOMRect)
  vi.spyOn(container.children[0], 'getBoundingClientRect').mockReturnValue({ top:10 } as DOMRect)
  vi.spyOn(container.children[1], 'getBoundingClientRect').mockReturnValue({ top:110 } as DOMRect)
  const owner = mount(Anchor, { attachTo: document.body, props: { scrollContainer: container, changeHash: false }, slots: { default: () => [h(AnchorLink, { href:'#integration-a', title:'a' }), h(AnchorLink, { href:'#integration-b', title:'b' })] } })
  try {
    await nextTick(); frames.splice(0).forEach(callback => callback(0)); await nextTick()
    await owner.findAll('a')[1].trigger('click'); await nextTick()
    expect(container.scrollTop).toBe(80)
    expect(owner.emitted('change')!.at(-1)).toEqual(['#integration-b'])
    container.dispatchEvent(new Event('scroll'))
    frames.splice(0).forEach(callback => callback(0)); await nextTick()
    expect(owner.emitted('change')!.at(-1)).toEqual(['#integration-a'])
  } finally {
    owner.unmount(); container.remove(); vi.restoreAllMocks()
    if (descriptor) Object.defineProperty(view, 'matchMedia', descriptor)
    else Reflect.deleteProperty(view, 'matchMedia')
  }
})
