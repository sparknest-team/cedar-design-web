import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TreeSelect from '..'

describe('TreeSelect canonical filterable API', () => {
  test.each([
    { multiple: false, filterable: undefined, expected: false },
    { multiple: true, filterable: undefined, expected: true },
    { multiple: false, filterable: true, expected: true },
    { multiple: true, filterable: false, expected: false },
  ])('searchable input follows $multiple / $filterable', async ({ expected, ...props }) => {
    const wrapper = mount(TreeSelect, { props: { editMode: 'direct', data: [{ value: 'a', label: 'Alpha' }], ...props } })
    try {
      const input = wrapper.get('input[role="combobox"]')
      expect(input.attributes('aria-autocomplete')).toBe(expected ? 'list' : 'none')
      expect(input.attributes('readonly') !== undefined).toBe(!expected)
      await wrapper.setProps({ filterable: !expected })
      expect(input.attributes('aria-autocomplete')).toBe(expected ? 'none' : 'list')
    } finally { wrapper.unmount() }
  })
})
