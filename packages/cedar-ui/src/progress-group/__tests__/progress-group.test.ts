import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ProgressGroup from '..'

describe('ProgressGroup', () => {
  const items = [
    { label: 'System', value: 24, color: '#64748b' },
    { label: 'Apps', value: 8, color: '#ef4444' },
    { label: 'Media', value: 42, color: '#22c55e' },
  ]

  it('renders segments, legend and total status', () => {
    const wrapper = mount(ProgressGroup, { props: { items, max: 128, status: true } })
    expect(wrapper.findAll('[role="progressbar"]')).toHaveLength(3)
    expect(wrapper.find('.c-progress-group__status').text()).toBe('58%')
    expect(wrapper.findAll('.c-progress-group__item')).toHaveLength(3)
    expect(wrapper.find('[aria-label="System"]').attributes('aria-valuenow')).toBe('24')
  })

  it('normalizes invalid max and clamps item values', () => {
    const wrapper = mount(ProgressGroup, { props: { items: [{ label: 'A', value: 120 }, { label: 'B', value: -1 }], max: 0, status: true } })
    expect(wrapper.find('.c-progress-group__status').text()).toBe('100%')
    expect(wrapper.findAll('[role="progressbar"]')[0].attributes('aria-valuenow')).toBe('100')
  })

  it('renders cumulative circular segments', () => {
    const wrapper = mount(ProgressGroup, { props: { items, max: 128, mode: 'circle', status: true } })
    expect(wrapper.findAll('.c-progress-group__circle-segment')).toHaveLength(3)
    expect(wrapper.find('.c-progress-group__circle-status').text()).toBe('58%')
    expect(wrapper.find('.c-progress-group__circle').attributes('aria-valuenow')).toBe('74')
  })

  it('highlights a hovered segment and shows its tip', async () => {
    const wrapper = mount(ProgressGroup, { props: { items, max: 128 } })
    await wrapper.findAll('.c-progress-group__segment')[0].trigger('mouseenter')
    expect(wrapper.find('.c-progress-group__active-segment').exists()).toBe(true)
    expect(wrapper.find('.c-progress-group__tooltip').text()).toBe('System: 24 (19%)')
  })

  it('renders a circular hover overlay', async () => {
    const wrapper = mount(ProgressGroup, { props: { items, max: 128, mode: 'circle' } })
    await wrapper.findAll('.c-progress-group__circle-segment')[1].trigger('mouseenter')
    expect(wrapper.find('.c-progress-group__circle-active-segment').attributes('stroke-width')).toBe('10')
    expect(wrapper.find('.c-progress-group__tooltip').text()).toBe('Apps: 8 (6%)')
  })
})
