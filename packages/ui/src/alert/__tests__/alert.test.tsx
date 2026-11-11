import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { Alert } from '../index'

describe('Alert', () => {
  test('render basic', async () => {
    const wrapper = mount(Alert)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('type modifier classes', async () => {
    for (const status of ['info', 'success', 'warning', 'danger', 'default'] as const) {
      const wrapper = mount(Alert, { props: { status } })
      expect(wrapper.find('.c-alert').classes()).toContain(`c-alert--${status}`)
    }
  })

  test('variant modifier classes', async () => {
    for (const variant of ['standard', 'tonal', 'outline'] as const) {
      const wrapper = mount(Alert, { props: { variant } })
      expect(wrapper.find('.c-alert').classes()).toContain(`c-alert--${variant}`)
    }
  })

  test('default type hides built-in icon', async () => {
    const wrapper = mount(Alert, { props: { status: 'default' } })
    expect(wrapper.find('.c-alert__icon').exists()).toBe(false)
  })

  test('default type shows custom icon slot', async () => {
    const wrapper = mount(Alert, {
      props: { status: 'default' },
      slots: { icon: () => <i class="custom-icon" /> },
    })
    expect(wrapper.find('.c-alert__icon .custom-icon').exists()).toBe(true)
  })

  test('showIcon=false hides icon', async () => {
    const wrapper = mount(Alert, { props: { status: 'info', showIcon: false } })
    expect(wrapper.find('.c-alert__icon').exists()).toBe(false)
  })

  test('closable triggers onClose', async () => {
    const onClose = vi.fn()
    const wrapper = mount(Alert, { props: { closable: true, onClose } })
    await wrapper.find('.c-alert__close-btn').trigger('click')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('banner / center modifiers', async () => {
    const w1 = mount(Alert, { props: { banner: true } })
    expect(w1.find('.c-alert').classes()).toContain('c-alert--banner')
    const w2 = mount(Alert, { props: { center: true } })
    expect(w2.find('.c-alert').classes()).toContain('c-alert--center')
  })

  test('color overrides background-color', async () => {
    const wrapper = mount(Alert, { props: { color: 'rgb(255, 0, 0)' } })
    const el = wrapper.find('.c-alert').element as HTMLElement
    expect(el.style.backgroundColor).toBe('rgb(255, 0, 0)')
  })

  test('title slot beats title prop', async () => {
    const wrapper = mount(Alert, {
      props: { title: 'A' },
      slots: { title: 'B' },
    })
    expect(wrapper.find('.c-alert__title').text()).toBe('B')
  })
})
