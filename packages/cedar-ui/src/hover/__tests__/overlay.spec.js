import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HoverOverlay from '../HoverOverlay.vue'

test('explicit focus is retained together with hover', async () => {
  const wrapper = mount(HoverOverlay, { props: { hovering: true, focusing: true } })
  expect(wrapper.classes()).toContain('c-hover-overlay--hovering')
  expect(wrapper.classes()).toContain('c-hover-overlay--focusing')
  await wrapper.setProps({ hovering: false })
  expect(wrapper.classes()).not.toContain('c-hover-overlay--hovering')
  expect(wrapper.classes()).toContain('c-hover-overlay--focusing')
  wrapper.unmount()
})
