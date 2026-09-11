import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { expect, test, vi } from 'vitest'
import Controlled from '../__demos__/controlled.vue'
import SplitButton from '..'
import Button from '../../button'
import Space from '../../space'
import { MenuOption } from '../../dropdown-menu'

vi.mock('@cedarjs/ui', () => ({ Message: { info: vi.fn() } }))
vi.mock('../__demos__/locale', () => ({ t: key => key }))

test('controlled demo stays open after the external click, then closes on selection or outside click', async () => {
  const host = document.createElement('div')
  document.body.append(host)
  const components = Object.fromEntries([SplitButton, Button, Space, MenuOption].map(component => [component.name, component]))
  const wrapper = mount(Controlled, { attachTo: host, global: { components } })
  const button = label => wrapper.findAll('button').find(item => item.text() === label)
  const settle = async () => { await nextTick(); await new Promise(resolve => setTimeout(resolve, 50)) }
  try {
    button('openMenu').element.click()
    await settle()
    expect(wrapper.text()).toContain('opened')
    expect(wrapper.find('[aria-haspopup="menu"]').attributes('aria-expanded')).toBe('true')
    document.querySelector('[data-dropdown-menu-item]').click()
    await settle()
    expect(wrapper.find('[aria-haspopup="menu"]').attributes('aria-expanded')).toBe('false')
    button('openMenu').element.click()
    await settle()
    document.body.click()
    await settle()
    expect(wrapper.find('[aria-haspopup="menu"]').attributes('aria-expanded')).toBe('false')
  } finally {
    wrapper.unmount()
    host.remove()
  }
})
