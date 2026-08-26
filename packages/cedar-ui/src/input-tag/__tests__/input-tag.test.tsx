import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { InputTag, inputTagProps } from '../index'

describe('InputTag', () => {
  test('exposes the public contract and an editable input', () => {
    const wrapper = mount(InputTag, { props: { placeholder: 'Add tag' } })
    expect(InputTag.name).toBe('CInputTag')
    expect(inputTagProps.maxTagCount.validator(0)).toBe(true)
    expect(wrapper.get('input').attributes('placeholder')).toBe('Add tag')
  })
})
