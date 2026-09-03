import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Avatar, AvatarGroup, avatarGroupProps, avatarProps } from '../index'

const avatarPropNames = [
  'shape',
  'imageUrl',
  'alt',
  'size',
  'autoFixFontSize',
  'triggerType',
  'triggerIconStyle',
  'objectFit',
  'color',
  'bordered',
  'borderColor',
  'loading',
  'error',
  'lazy',
  'hoverable',
]

const avatarGroupPropNames = [
  'shape',
  'size',
  'autoFixFontSize',
  'maxCount',
  'zIndexAscend',
  'maxStyle',
  'maxPopoverProps',
  'offset',
  'vertical',
]

describe('Avatar', () => {
  test('keeps the shared Avatar contract', () => {
    expect(Object.keys(avatarProps)).toEqual(avatarPropNames)
    expect(Object.keys(avatarGroupProps)).toEqual(avatarGroupPropNames)
  })

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

  test('applies color, bordered and lazy', () => {
    const wrapper = mount(Avatar, {
      props: {
        color: '#00bebe',
        bordered: true,
        borderColor: '#111',
        imageUrl: '/avatar.png',
        lazy: true,
        hoverable: true,
      },
    })

    expect(wrapper.classes()).toContain('c-avatar-bordered')
    expect(wrapper.classes()).toContain('c-avatar-hoverable')
    expect(wrapper.attributes('style')).toContain('background-color')
    expect(wrapper.attributes('style')).toContain('border-color')
    expect(wrapper.get('img').attributes('loading')).toBe('lazy')
  })
})

describe('AvatarGroup', () => {
  test('stacks vertically and applies offset', () => {
    const wrapper = mount(AvatarGroup, {
      props: { vertical: true, offset: -12 },
      slots: {
        default: () => [
          h(Avatar, { color: '#00bebe' }, () => 'A'),
          h(Avatar, { color: '#7b61ff' }, () => 'B'),
        ],
      },
    })

    expect(wrapper.classes()).toContain('c-avatar-group-vertical')
    expect(wrapper.attributes('style')).toContain('--c-avatar-group-offset: -12px')
  })
})
