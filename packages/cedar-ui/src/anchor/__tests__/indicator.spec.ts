import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Anchor from '../Anchor.vue'
import AnchorLink from '../AnchorLink.vue'

test('background and line measure independently when toggled', async () => {
  const wrapper = mount(Anchor, { props: { showLine: false, showBackground: true }, slots: { default: () => h(AnchorLink, { href: '#item', title: 'Item' }) } })
  try {
    await nextTick()
    await wrapper.get('a').trigger('click')
    await nextTick()
    const link = wrapper.get('.c-anchor__link').element as HTMLElement
    Object.defineProperty(link, 'offsetTop', { configurable: true, value: 24 })
    Object.defineProperty(link.firstElementChild!, 'clientHeight', { configurable: true, value: 30 })
    await wrapper.setProps({ showBackground: false })
    await wrapper.setProps({ showBackground: true })
    const background = wrapper.get('.c-anchor__link-background').element as HTMLElement
    expect(background.style.top).toBe('24px')
    expect(background.style.height).toBe('30px')
    await wrapper.setProps({ showLine: true })
    const line = wrapper.get('.c-anchor__line-slider').element as HTMLElement
    expect(line.style.top).toBe('24px')
    expect(line.style.height).toBe('30px')
  } finally { wrapper.unmount() }
})
