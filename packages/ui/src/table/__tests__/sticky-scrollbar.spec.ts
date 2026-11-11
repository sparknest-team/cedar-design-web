import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import StickyScrollbar from '../StickyScrollbar.vue'
import Scrollbar from '../../scrollbar'
test('sticky horizontal rail tracks body scroll, updates geometry and detaches old containers', async () => {
  const body = document.createElement('div')
  Object.defineProperty(body, 'clientWidth', { value: 300 })
  Object.defineProperty(body, 'scrollWidth', { value: 900 })
  const wrapper = mount(StickyScrollbar, { props: { container: body } })
  try {
    await flushPromises()
    const shared = wrapper.getComponent(Scrollbar)
    expect(shared.props('type')).toBe('embed')
    expect(shared.props('disableVertical')).toBe(true)
    const rail = wrapper.get('[role=region]')
    Object.defineProperties(rail.element, { clientWidth: { value: 300 }, offsetWidth: { value: 300 }, scrollWidth: { value: 900 } })
    shared.vm.handleResize()
    await flushPromises()
    expect(wrapper.findAll('.c-scrollbar-thumb-direction-horizontal')).toHaveLength(1)
    ;(rail.element as HTMLElement).scrollLeft = 120
    await rail.trigger('scroll')
    expect(body.scrollLeft).toBe(120)
    body.scrollLeft = 240
    body.dispatchEvent(new Event('scroll'))
    expect((rail.element as HTMLElement).scrollLeft).toBe(240)
    const narrow = document.createElement('div')
    Object.defineProperty(narrow, 'clientWidth', { value: 300 })
    Object.defineProperty(narrow, 'scrollWidth', { value: 300 })
    await wrapper.setProps({ container: narrow }); await flushPromises()
    expect(wrapper.find('[role=region]').exists()).toBe(false)
    body.scrollLeft = 0; body.dispatchEvent(new Event('scroll'))
    expect(narrow.scrollLeft).toBe(0)
  } finally { wrapper.unmount() }
})

test('a detached RTL rail follows its source scope and keyboard uses normalized reading offsets', async () => {
  const source = document.createElement('div'); source.dir = 'rtl'; document.body.append(source)
  Object.defineProperties(source, { clientWidth: { value: 300 }, scrollWidth: { value: 900 } })
  const wrapper = mount(StickyScrollbar, { attachTo: document.body, props: { container: source } })
  try {
    await flushPromises()
    const rail = wrapper.get('[role=region]')
    Object.defineProperties(rail.element, { clientWidth: { value: 300 }, scrollWidth: { value: 900 } })
    expect(rail.attributes('dir')).toBe('rtl')
    source.scrollLeft = -120; source.dispatchEvent(new Event('scroll')); expect(rail.element.scrollLeft).toBe(-120)
    source.scrollLeft = -200; await rail.trigger('scroll'); expect(source.scrollLeft).toBe(-200)
    source.dispatchEvent(new Event('scroll')); expect(rail.element.scrollLeft).toBe(-200)
    await rail.trigger('keydown', { key: 'ArrowLeft' }); expect(source.scrollLeft).toBe(-240)
    await rail.trigger('keydown', { key: 'End' }); expect(source.scrollLeft).toBe(-600)
    source.dir = 'ltr'; source.scrollLeft = 120; await flushPromises()
    source.dispatchEvent(new Event('scroll')); expect(rail.element.scrollLeft).toBe(120)
    expect(rail.attributes('dir')).toBe('ltr')
  } finally { wrapper.unmount(); source.remove() }
})
