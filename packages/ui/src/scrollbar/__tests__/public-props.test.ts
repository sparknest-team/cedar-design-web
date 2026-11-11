import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Public from '../Scrollbar.vue'
import Legacy from '../src/Scrollbar.vue'
for (const [name, Component] of [['public', Public], ['legacy', Legacy]] as const) test(`${name} supports conditional false StyleValue without warning or stale outer styles`, async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const w = mount(Component, { props: { outerStyle: { width: '300px' } } })
  expect(w.element.style.width).toBe('300px')
  await w.setProps({ outerStyle: false })
  expect(w.element.style.width).toBe('')
  expect(warn).not.toHaveBeenCalled()
  w.unmount(); warn.mockRestore()
})
