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

    try {
      expect(wrapper.find('.c-select').exists()).toBe(true)
    } finally {
      wrapper.unmount()
    }
  })

  test('passes option tagProps to selected tags in multiple mode', () => {
    const wrapper = mount(Select, {
      props: {
        multiple: true,
        defaultValue: ['urgent', 'long'],
        options: [
          { value: 'urgent', label: '紧急', tagProps: { color: 'red' } },
          {
            value: 'long',
            label: '很长的选项文案',
            tagProps: { nowrap: true, style: { maxWidth: '160px' } },
          },
        ],
      },
    })

    try {
      const tags = wrapper.findAll('.c-tag')
      expect(tags[0].classes()).toContain('c-tag--red')
      expect(tags[1].classes()).toContain('c-tag--nowrap')
      expect((tags[1].element as HTMLElement).style.maxWidth).toBe('160px')
    } finally {
      wrapper.unmount()
    }
  })
})
