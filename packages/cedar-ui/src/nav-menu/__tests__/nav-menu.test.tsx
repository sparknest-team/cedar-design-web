import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import NavMenu from '../index'

// jsdom 未实现 matchMedia，为 useResponsive 提供 mock
window.matchMedia =
  window.matchMedia ||
  ((query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList)

describe('NavMenu', () => {
  test('render', async () => {
    const wrapper = mount(NavMenu)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
