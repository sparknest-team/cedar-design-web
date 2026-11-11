import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Link } from '../index'

describe('Link', () => {
  test('render', async () => {
    const wrapper = mount(Link)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('removes navigation and exposes disabled semantics while loading', async () => {
    const wrapper = mount(Link, { props: { href: '/settings', loading: true } })

    expect(wrapper.attributes('href')).toBeUndefined()
    expect(wrapper.attributes()).toMatchObject({
      'aria-disabled': 'true',
      'aria-busy': 'true',
      tabindex: '-1',
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  test('supports native target and rel attributes', () => {
    const wrapper = mount(Link, {
      props: { href: '/settings', target: '_blank', rel: 'noopener noreferrer' },
    })

    expect(wrapper.attributes()).toMatchObject({
      href: '/settings',
      target: '_blank',
      rel: 'noopener noreferrer',
    })
  })
})
