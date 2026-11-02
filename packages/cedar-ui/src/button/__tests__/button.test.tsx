import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Button } from '../index'

describe('Button', () => {
  test('render', async () => {
    const wrapper = mount(Button)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('uses anchor semantics and blocks navigation while disabled', () => {
    const wrapper = mount(Button, {
      attrs: { href: '/danger' },
      props: { component: 'a', disabled: true },
    })
    const click = new MouseEvent('click', { bubbles: true, cancelable: true })

    wrapper.element.dispatchEvent(click)
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes()).toMatchObject({
      role: 'link',
      'aria-disabled': 'true',
      tabindex: '-1',
    })
    expect(wrapper.attributes('href')).toBeUndefined()
    expect(wrapper.attributes('disabled')).toBeUndefined()
    expect(wrapper.attributes('type')).toBeUndefined()
    expect(click.defaultPrevented).toBe(true)
  })

  test('exposes loading state to assistive technology', () => {
    const wrapper = mount(Button, { props: { loading: true } })

    expect(wrapper.attributes()).toMatchObject({ 'aria-busy': 'true', disabled: '' })
  })
})
