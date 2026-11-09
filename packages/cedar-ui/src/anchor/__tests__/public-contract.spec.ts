import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Anchor, { AnchorLink, anchorProps } from '..'

test('finite numeric offsets include negatives and reject nonfinite values', () => {
  expect(anchorProps.boundary.validator(-20)).toBe(true)
  expect(anchorProps.boundary.validator(0)).toBe(true)
  expect(anchorProps.boundary.validator(Infinity)).toBe(false)
  expect(anchorProps.boundary.validator(NaN)).toBe(false)
  expect(anchorProps.boundary.validator('start')).toBe(true)
  expect(anchorProps.boundary.validator('other')).toBe(false)
})

test('current anchor link has location semantics and changes on selection', async () => {
  const wrapper = mount(Anchor, { props: { changeHash: false }, slots: { default: () => [h(AnchorLink, { href: '#one', title: 'One' }), h(AnchorLink, { href: '#two', title: 'Two' })] } })
  try {
    await nextTick()
    const links = wrapper.findAll('a')
    await links[1].trigger('click')
    await nextTick()
    expect(links[0].attributes('aria-current')).toBeUndefined()
    expect(links[1].attributes('aria-current')).toBe('location')
  } finally { wrapper.unmount() }
})
