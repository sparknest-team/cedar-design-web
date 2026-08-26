import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Skeleton, SkeletonLine, SkeletonShape } from '../index'

describe('Skeleton', () => {
  test('switches from loading content to actual content', async () => {
    const wrapper = mount(Skeleton, {
      props: { animation: true },
      slots: { default: 'Loading', content: 'Loaded' },
    })

    expect(wrapper.classes()).toContain('c-skeleton-animation')
    expect(wrapper.text()).toBe('Loading')

    await wrapper.setProps({ loading: false })
    expect(wrapper.text()).toBe('Loaded')
  })

  test('renders configured lines', () => {
    const wrapper = mount(SkeletonLine, {
      props: { rows: 2, widths: [120, '50%'], lineHeight: 16, lineSpacing: 8 },
    })
    const rows = wrapper.findAll('.c-skeleton-line-row')

    expect(rows).toHaveLength(2)
    expect(rows[0].attributes('style')).toContain('width: 120px')
    expect(rows[1].attributes('style')).toContain('width: 50%')
    expect(rows[1].attributes('style')).toContain('margin-top: 8px')
  })

  test('renders configured shape', () => {
    const wrapper = mount(SkeletonShape, { props: { shape: 'circle', size: 'lg' } })

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['c-skeleton-shape-circle', 'c-skeleton-shape-lg']),
    )
  })
})
