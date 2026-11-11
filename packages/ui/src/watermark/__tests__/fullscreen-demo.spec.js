import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Watermark from '..'
import Button from '../../button'
import Demo from '../__demos__/fullscreen.vue'

test('fullscreen Demo reuses its local layer and removes the body layer on unmount', async () => {
  const context = {
    drawImage: vi.fn(), fillText: vi.fn(), measureText: (text) => ({ width: text.length * 8 }),
    rotate: vi.fn(), scale: vi.fn(), translate: vi.fn(),
  }
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(context)
  vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/png;base64,watermark')
  const wrapper = mount(Demo, { global: { components: { CWatermark: Watermark, CButton: Button } } })
  try {
    await flushPromises()
    const layer = wrapper.get('.c-watermark__layer').element
    const toggle = async () => {
      await wrapper.get('button').trigger('click')
      await flushPromises()
    }
    await toggle()
    expect(document.body.querySelectorAll('.c-watermark__layer--fullscreen')).toHaveLength(1)
    expect(document.body.contains(layer)).toBe(true)
    expect(wrapper.get('button').text()).toBe('退出全屏水印')
    await toggle()
    expect(document.body.querySelectorAll('.c-watermark__layer--fullscreen')).toHaveLength(0)
    expect(wrapper.get('.c-watermark__layer').element).toBe(layer)
    await toggle()
    expect(document.body.querySelectorAll('.c-watermark__layer--fullscreen')).toHaveLength(1)
  } finally {
    wrapper.unmount()
    vi.restoreAllMocks()
  }
  expect(document.body.querySelectorAll('.c-watermark__layer--fullscreen')).toHaveLength(0)
})
