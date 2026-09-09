import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { PageHeader } from '../index'

describe('PageHeader', () => {
  test('render', async () => {
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
      },
    })
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('back event', async () => {
    const onBack = vi.fn()
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Title',
        showBack: true,
        onBack,
      },
    })
    await wrapper.find('.c-page-header__back').trigger('click')
    expect(onBack).toHaveBeenCalled()
  })

  test('default hide back', async () => {
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Title',
      },
    })
    expect(wrapper.find('.c-page-header__back').exists()).toBe(false)
  })

  test('show back without a listener', () => {
    const wrapper = mount(PageHeader, { props: { showBack: true } })
    expect(wrapper.find('.c-page-header__back').exists()).toBe(true)
  })

  test('header, avatar, content, extra and footer slots', async () => {
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Title',
      },
      slots: {
        header: '<div class="header-slot">header</div>',
        avatar: '<div class="avatar-slot">avatar</div>',
        default: '<div class="content-slot">content</div>',
        extra: '<div class="extra-slot">extra</div>',
        footer: '<div class="footer-slot">footer</div>',
      },
    })
    expect(wrapper.find('.header-slot').exists()).toBe(true)
    expect(wrapper.find('.avatar-slot').exists()).toBe(true)
    expect(wrapper.find('.content-slot').exists()).toBe(true)
    expect(wrapper.find('.extra-slot').exists()).toBe(true)
    expect(wrapper.find('.footer-slot').exists()).toBe(true)
  })
})
