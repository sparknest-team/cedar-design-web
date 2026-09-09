import { defineComponent, h, inject, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { Form } from '../index'
import { formInjectionKey } from '../context'
import scrollIntoView from 'scroll-into-view-if-needed'

vi.mock('scroll-into-view-if-needed', () => ({ default: vi.fn() }))

const Fields = defineComponent({
  setup() {
    const form = inject(formInjectionKey)!
    // Registration order and numeric key order both differ from rendered order.
    for (const field of ['2', '10']) {
      form.addField({
        field, disabled: false, error: true,
        validate: async () => ({ field, message: 'required' }),
        clearValidate() {}, resetField() {}, setField() {},
      })
    }
    return () => h('div', [h('input', { id: '10' }), h('input', { id: '2' })])
  },
})

describe('Form', () => {
  test('scrollToError selects first/last rendered error, not viewport alignment', async () => {
    const wrapper = mount(Form, {
      props: { model: {}, scrollToError: 'start' },
      slots: { default: () => h(Fields) },
    })
    vi.mocked(scrollIntoView).mockClear()
    await wrapper.vm.validate()
    expect(scrollIntoView).toHaveBeenLastCalledWith(wrapper.get('[id="10"]').element,
      expect.objectContaining({ block: 'nearest' }))
    await wrapper.setProps({ scrollToError: 'end' })
    await wrapper.vm.validate()
    expect(scrollIntoView).toHaveBeenLastCalledWith(wrapper.get('[id="2"]').element,
      expect.objectContaining({ block: 'nearest' }))
    await wrapper.setProps({ scrollToError: undefined })
    vi.mocked(scrollIntoView).mockClear()
    await wrapper.vm.validate()
    expect(scrollIntoView).not.toHaveBeenCalled()
    wrapper.unmount()
  })
  test('render', async () => {
    const wrapper = mount(Form, { props: { model: {} } })
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })
  test('scrollToErrorOffsetY offsets every scroll action', async () => {
    const wrapper = mount(Form, { props: { model: {}, scrollToError: 'start', scrollToErrorOffsetY: '24px' }, slots: { default: () => h(Fields) } })
    try {
      vi.mocked(scrollIntoView).mockClear()
      await wrapper.vm.validate()
      const options = vi.mocked(scrollIntoView).mock.calls[0][1] as any
      const scrollTo = vi.fn()
      options.behavior([{ el: { scrollTo }, top: 100, left: 10 }])
      expect(options.block).toBe('start')
      expect(scrollTo).toHaveBeenCalledWith({ top: 76, left: 10, behavior: 'smooth' })
    } finally { wrapper.unmount() }
  })
})
