import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Result from '..'
import Button from '../../button'
import Space from '../../space'
import Demo from '../__demos__/basic.vue'

test('demo changes result status and resets its visible feedback', async () => {
  const owner = mount(Demo, { global: { components: { CResult: Result, CButton: Button, CSpace: Space } } })
  const buttons = owner.findAllComponents(Button)
  for (const status of ['success', 'warning', 'danger', 'question', 'empty', 'info']) {
    await buttons[0].trigger('click')
    expect(owner.findComponent(Result).props('status')).toBe(status)
    expect(owner.text()).toContain('Current status: ' + status)
  }
  await buttons[0].trigger('click')
  await buttons[1].trigger('click')
  expect(owner.findComponent(Result).props('status')).toBe('info')
  owner.unmount()
})
