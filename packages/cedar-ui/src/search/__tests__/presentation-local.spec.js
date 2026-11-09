import { mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import Search from '..'
import Input from '../../input'

const owners = []
afterEach(() => owners.splice(0).forEach((owner) => owner.unmount()))
test.each(['outline', 'filled', 'standard'])(
  'renders the real Input variant %s with its border enabled',
  async (variant) => {
    const wrapper = mount(Search, {
      props: { variant, size: 'xl', editMode: 'direct' },
    })
    owners.push(wrapper)
    expect(wrapper.find('.c-input .c-field-decorator--variant-' + variant).exists()).toBe(true)
    const child = wrapper.findComponent(Input)
    expect(child.props('line')).not.toBe(false)
    expect(child.props('size')).toBe('xl')
  },
)
