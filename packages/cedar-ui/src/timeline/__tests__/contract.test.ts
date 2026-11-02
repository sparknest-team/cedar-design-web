import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { describe, expect, it } from 'vitest'
import Timeline, { TimelineItem } from '..'

describe('timeline public contract', () => {
  it('exports a namespaced component', () => {
    expect(Timeline).toBeTruthy()
    expect(Timeline.name).toMatch(/^C/)
  })

  it('only hides the connecting line of the last item', async () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: () => [
          h(TimelineItem, null, () => 'First'),
          h(TimelineItem, null, () => 'Second'),
          h(TimelineItem, null, () => 'Third'),
        ],
      },
    })

    await nextTick()

    const items = wrapper.findAll('.c-timeline-item')
    expect(items).toHaveLength(3)
    expect(items[0].classes()).not.toContain('c-timeline-item-last')
    expect(items[1].classes()).not.toContain('c-timeline-item-last')
    expect(items[2].classes()).toContain('c-timeline-item-last')
  })
})


it('contentPlacement follows orientation while preserving timeline items', async () => {
  const placement = { value: 'right' }
  const wrapper = mount(Timeline, {
    props: { mode: 'alternate', orientation: 'vertical' },
    slots: { default: () => h(TimelineItem, { contentPlacement: placement.value }, () => 'Milestone') },
  })
  try {
    await nextTick()
    expect(wrapper.find('.c-timeline-item').classes()).toContain('c-timeline-item-vertical-right')
    placement.value = 'bottom'
    await wrapper.setProps({ orientation: 'horizontal' })
    expect(wrapper.find('.c-timeline-item').classes()).toContain('c-timeline-item-horizontal-bottom')
    expect(wrapper.text()).toContain('Milestone')
  } finally {
    wrapper.unmount()
  }
})
