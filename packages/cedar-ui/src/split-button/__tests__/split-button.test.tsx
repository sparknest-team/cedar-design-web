import { createApp, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { SplitButton } from '../index'

describe('SplitButton', () => {
  test('render', async () => {
    const wrapper = mount(SplitButton, {
      slots: { default: 'Publish' },
      global: { stubs: { teleport: true } },
    })

    await nextTick()
    expect(wrapper.text()).toContain('Publish')
    expect(wrapper.findAll('button')).toHaveLength(2)
  })

  test('emit click from the primary button', async () => {
    const onClick = vi.fn()
    const wrapper = mount(SplitButton, {
      attrs: { onClick },
      global: { stubs: { teleport: true } },
    })

    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalledOnce()
  })

  test('install as CSplitButton', () => {
    const app = createApp({})
    app.use(SplitButton)

    expect(app.component('CSplitButton')).toBeTruthy()
    expect(app.component('CMenuButton')).toBeUndefined()
  })
})
