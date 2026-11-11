import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Affix, affixProps } from '../index'

describe('Affix', () => {
  test('exposes a stable component contract', () => {
    const wrapper = mount(Affix, {
      props: { cssMode: true, offsetTop: 12 },
      slots: { default: 'content' },
    })

    expect(Affix.name).toBe('CAffix')
    expect(affixProps.offsetTop.default).toBe(0)
    expect(wrapper.attributes('style')).toContain('top: 12px')
  })
})
