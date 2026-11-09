import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { Breadcrumb, BreadcrumbItem } from '../index'

describe('Breadcrumb', () => {
  test('render', async () => {
    const wrapper = mount(Breadcrumb)
    await nextTick()
    expect(wrapper.attributes('role')).toBe('navigation')
    expect(wrapper.attributes('aria-label')).toBe('面包屑导航')
  })

  test('renders route paths as links', async () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        routes: [
          { path: '/', label: 'Home' },
          { path: '/channel', label: 'Channel' },
          { path: '/news', label: 'News' },
        ],
      },
    })
    await nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))
    await nextTick()
    expect(wrapper.findAll('.c-breadcrumb-item')).toHaveLength(3)
    expect(wrapper.findAll('a')).toHaveLength(2)
    expect(wrapper.find('a').attributes('href')).toBe('/')
  })

  test('marks droplist items as clickable', async () => {
    const wrapper = mount(Breadcrumb, {
      slots: {
        default: () => [
          h(BreadcrumbItem, { droplist: [{ path: '/goods', label: 'Goods' }] }, { default: () => 'Channel' }),
          h(BreadcrumbItem, null, { default: () => 'News' }),
        ],
      },
    })
    await nextTick()
    expect(wrapper.find('.c-breadcrumb-item--with-dropdown').exists()).toBe(true)
  })

  test('supports href and click on non-last items', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Breadcrumb, {
      slots: {
        default: () => [
          h(BreadcrumbItem, { href: '#/home', onClick }, { default: () => 'Home' }),
          h(BreadcrumbItem, null, { default: () => 'News' }),
        ],
      },
    })
    await nextTick()
    await wrapper.find('a').trigger('click')
    expect(wrapper.find('a').attributes('href')).toBe('#/home')
    expect(onClick).toHaveBeenCalledOnce()
  })

  test('exposes omitted route data to more-icon', async () => {
    let moreSlotData: any
    const routes = ['Home', 'A', 'B', 'C', 'D', 'Post'].map((label, index) => ({
      label,
      path: `/${index}`,
    }))
    const wrapper = mount(Breadcrumb, {
      props: { routes, maxCount: 3 },
      slots: {
        'more-icon': (data: any) => {
          moreSlotData = data
          return h('span', { class: 'custom-more' })
        },
      },
    })
    await nextTick()
    expect(wrapper.findAll('.c-breadcrumb-item')).toHaveLength(4)
    expect(wrapper.find('.custom-more').exists()).toBe(true)
    expect(moreSlotData).toMatchObject({
      omittedItems: routes.slice(1, 4),
      count: 3,
      start: 1,
      end: 3,
    })
  })
})
