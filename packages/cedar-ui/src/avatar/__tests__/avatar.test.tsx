import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Avatar } from '../index'

describe('Avatar', () => {
  test('renders text content and emits click', async () => {
    const wrapper = mount(Avatar, {
      props: { shape: 'square', size: 48 },
      slots: { default: 'CD' },
    })

    expect(wrapper.classes()).toContain('c-avatar-square')
    expect(wrapper.attributes('style')).toContain('width: 48px')
    expect(wrapper.text()).toContain('CD')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  test('renders an accessible image', () => {
    const wrapper = mount(Avatar, {
      props: { imageUrl: '/avatar.png', alt: 'Ada Lovelace' },
    })

    expect(wrapper.get('img').attributes()).toMatchObject({
      src: '/avatar.png',
      alt: 'Ada Lovelace',
    })
  })
})
