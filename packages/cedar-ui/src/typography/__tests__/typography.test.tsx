import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Typography, TypographyParagraph, TypographyText, TypographyTitle } from '../index'

describe('Typography', () => {
  test('render', async () => {
    const wrapper = mount(Typography)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('declares and forwards common props on text', () => {
    const wrapper = mount(TypographyText, {
      props: { status: 'success', bold: true },
      slots: { default: 'Ready' },
    })

    expect(wrapper.classes()).toContain('c-typography-success')
    expect(wrapper.get('b').text()).toBe('Ready')
  })

  test('renders title and paragraph semantic elements', () => {
    const title = mount(TypographyTitle, {
      props: { heading: 3, status: 'warning' },
      slots: { default: 'Heading' },
    })
    const paragraph = mount(TypographyParagraph, {
      props: { blockquote: true, spacing: 'close' },
      slots: { default: 'Quote' },
    })

    expect(title.get('h3').classes()).toContain('c-typography-warning')
    expect(paragraph.get('blockquote').classes()).toContain('c-typography-spacing-close')
  })
})
