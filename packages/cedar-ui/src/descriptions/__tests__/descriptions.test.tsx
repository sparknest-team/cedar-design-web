import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeAll, describe, test, expect, vi } from 'vitest'
import { Descriptions, descriptionsProps } from '../index'

beforeAll(() => {
  vi.stubGlobal('matchMedia', vi.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })))
})

describe('Descriptions', () => {
  test('render', async () => {
    const wrapper = mount(Descriptions, {
      props: {
        title: 'Account details',
        data: [{ label: 'Owner', value: 'Ada' }],
      },
    })
    await nextTick()
    expect(Descriptions.name).toBe('CDescriptions')
    expect(descriptionsProps.column.default).toBe(3)
    expect(wrapper.get('table').attributes('aria-label')).toBe('Account details')
    expect(wrapper.get('th').attributes('scope')).toBe('row')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
