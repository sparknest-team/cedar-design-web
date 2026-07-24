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
    await wrapper.find('.c-page-header-back-btn').trigger('click')
    expect(onBack).toHaveBeenCalled()
  })

  test('default hide back', async () => {
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Title',
      },
    })
    expect(wrapper.find('.c-page-header-back-btn').exists()).toBe(false)
  })

  test('breadcrumb and content slots', async () => {
    const wrapper = mount(PageHeader, {
      props: {
        title: 'Title',
      },
      slots: {
        breadcrumb: '<div class="breadcrumb-slot">crumb</div>',
        default: '<div class="content-slot">content</div>',
        extra: '<div class="extra-slot">extra</div>',
      },
    })
    expect(wrapper.find('.c-page-header-with-breadcrumb').exists()).toBe(true)
    expect(wrapper.find('.c-page-header-with-content').exists()).toBe(true)
    expect(wrapper.find('.breadcrumb-slot').exists()).toBe(true)
    expect(wrapper.find('.content-slot').exists()).toBe(true)
    expect(wrapper.find('.extra-slot').exists()).toBe(true)
  })
})
