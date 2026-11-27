import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ResizeBox from '../ResizeBox.vue'

for (const boxSizing of ['border-box', 'content-box']) {
  describe(`resize CSS dimensions: ${boxSizing}`, () => {
    it.each([
      ['right', 'ArrowRight', 'width', 210],
      ['left', 'ArrowLeft', 'width', 210],
      ['bottom', 'ArrowUp', 'height', 130],
      ['top', 'ArrowUp', 'height', 130],
    ] as const)('applies a ten CSS pixel increase on %s', async (direction, key, axis, expected) => {
      const wrapper = mount(ResizeBox, {
        attachTo: document.body,
        props: { directions: [direction] },
        attrs: { style: { boxSizing, width: '200px', height: '120px', padding: '8px', border: '2px solid black' } },
      })
      await wrapper.find('[role="spinbutton"]').trigger('keydown', { key })
      expect(wrapper.emitted(`update:${axis}`)?.at(-1)).toEqual([expected])
      expect(wrapper.element.style[axis]).toBe(`${expected}px`)
      wrapper.unmount()
    })
    it('uses the same CSS dimension when handles exist on both edges', async () => {
      const wrapper = mount(ResizeBox, {
        attachTo: document.body,
        props: { directions: ['left', 'right'] },
        attrs: { style: { boxSizing, width: '200px', border: '2px solid black', padding: '8px' } },
      })
      await wrapper.find('.c-resizebox-direction-right').trigger('keydown', { key: 'ArrowRight', shiftKey: true })
      expect(wrapper.emitted('update:width')?.at(-1)).toEqual([250])
      expect(wrapper.element.style.width).toBe('250px')
      wrapper.unmount()
    })
    it('keeps controlled parent refusal while emitting the measured CSS target', async () => {
      const wrapper = mount(ResizeBox, {
        attachTo: document.body,
        props: { width: 200 },
        attrs: { style: { boxSizing, padding: '8px', border: '2px solid black' } },
      })
      await wrapper.find('[role="spinbutton"]').trigger('keydown', { key: 'ArrowRight' })
      expect(wrapper.emitted('update:width')?.at(-1)).toEqual([210])
      expect(wrapper.element.style.width).toBe('200px')
      wrapper.unmount()
    })
  })
}
