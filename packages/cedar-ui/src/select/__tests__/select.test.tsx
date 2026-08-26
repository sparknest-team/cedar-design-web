import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Select, selectProps } from '../index'

describe('Select', () => {
  test('uses a scalar default for explicit single-select mode', () => {
    const getDefault = selectProps.defaultValue.default as (props: { multiple?: boolean }) => unknown

    expect(getDefault({ multiple: false })).toBe('')
    expect(getDefault({ multiple: true })).toEqual([])
  })

  test('renders the real named component', () => {
    const wrapper = mount(Select, {
      props: { options: ['Alpha', 'Beta'], placeholder: 'Choose' },
    })

    expect(wrapper.find('.c-select').exists()).toBe(true)
  })
})
