import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { Grid } from '../index'

describe('Grid', () => {
  test('render', async () => {
    vi.stubGlobal('matchMedia', () => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
    const wrapper = mount(Grid)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
