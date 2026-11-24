import { mount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import Card from '..'
import Tooltip from '../../tooltip'
import Demo from '../__demos__/tooltip.vue'
import EnglishDemo from '../__demos__/tooltip.en-US.vue'

for (const [language, component] of [['zh-CN', Demo], ['en-US', EnglishDemo]]) {
  it.each(['title', 'description'])(language + ' opens the full %s', async (slot) => {
    const wrapper = mount(component, {
      attachTo: document.body,
      global: { components: { 'c-card': Card, 'c-tooltip': Tooltip } },
    })
    try {
      const trigger = wrapper.get(`.c-card__${slot} .long-text`)
      await trigger.trigger('mouseenter')
      await vi.waitFor(() => {
        expect(document.querySelector('[role="tooltip"]')?.textContent).toBe(trigger.text())
      })
    } finally {
      wrapper.unmount()
    }
  })
}
