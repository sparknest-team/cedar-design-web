import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { Empty } from '../index'

describe('Empty', () => {
  test('render', async () => {
    const wrapper = mount(Empty)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('description', () => {
    const wrapper = mount(Empty, { props: { description: 'No data' } })
    expect(wrapper.find('.c-empty-description').text()).toBe('No data')
  })

  test('default locale description', () => {
    const wrapper = mount(Empty)
    expect(wrapper.find('.c-empty-description').text()).toBe('暂无数据')
  })

  test('imageUrl and alt', () => {
    const wrapper = mount(Empty, {
      props: { imageUrl: 'https://cdn.example.com/empty.svg', alt: 'empty' },
    })
    expect(wrapper.find('img').attributes('src')).toBe('https://cdn.example.com/empty.svg')
    expect(wrapper.find('img').attributes('alt')).toBe('empty')
  })

  test('showIcon false', () => {
    const wrapper = mount(Empty, { props: { showIcon: false } })
    expect(wrapper.find('.c-empty-image').exists()).toBe(false)
  })

  test('showDescription false', () => {
    const wrapper = mount(Empty, { props: { showDescription: false } })
    expect(wrapper.find('.c-empty-description').exists()).toBe(false)
  })

  test('click', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Empty, { props: { onClick } })
    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
