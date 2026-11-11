import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Switch } from '../index'

describe('Switch', () => {
  test('render', async () => {
    const wrapper = mount(Switch)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('uses variant and exposes loading semantics', () => {
    const wrapper = mount(Switch, { props: { variant: 'line', loading: true } })

    expect(wrapper.classes()).toContain('c-switch--variant-line')
    expect(wrapper.attributes()).toMatchObject({
      role: 'switch',
      'aria-checked': 'false',
      'aria-busy': 'true',
      disabled: '',
    })
  })
})
