import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Avatar, AvatarGroup, avatarGroupProps, avatarProps } from '../index'
import { avatarTriggerTypes } from '../props'

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

    expect(wrapper.classes()).toContain('c-avatar--square')
    expect(wrapper.attributes('style')).toContain('width: 48px')
    expect(wrapper.text()).toContain('CD')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  test('renders an accessible image and emits image events', async () => {
    const wrapper = mount(Avatar, {
      props: { imageUrl: '/avatar.png', alt: 'Ada Lovelace' },
    })

    expect(wrapper.get('img').attributes()).toMatchObject({
      src: '/avatar.png',
      alt: 'Ada Lovelace',
    })
    await wrapper.get('img').trigger('load')
    await wrapper.get('img').trigger('error')
    expect(wrapper.emitted('load')).toHaveLength(1)
    expect(wrapper.emitted('error')).toHaveLength(1)
  })

  test('uses overlay terminology for the hover trigger', () => {
    expect(avatarTriggerTypes).toEqual(['button', 'overlay'])
    const wrapper = mount(Avatar, {
      props: { triggerType: 'overlay' },
      slots: { 'trigger-icon': 'edit' },
    })

    expect(wrapper.find('.c-avatar__trigger-icon-overlay').exists()).toBe(true)
    expect(wrapper.classes()).toContain('c-avatar--with-trigger')
  })

  test('applies color, bordered, css size and lazy', () => {
    const wrapper = mount(Avatar, {
      props: {
        color: '#00bebe',
        bordered: true,
        borderColor: '#111',
        imageUrl: '/avatar.png',
        lazy: true,
        hoverable: true,
        size: '3rem',
      },
    })

    expect(wrapper.classes()).toContain('c-avatar--bordered')
    expect(wrapper.classes()).toContain('c-avatar--hoverable')
    expect(wrapper.attributes('style')).toContain('background-color')
    expect(wrapper.attributes('style')).toContain('border-color')
    expect(wrapper.attributes('style')).toContain('width: 3rem')
    expect(wrapper.get('img').attributes('loading')).toBe('lazy')
  })
})

describe('AvatarGroup', () => {
  test('renders children and applies group size', () => {
    const wrapper = mount(AvatarGroup, {
      props: { size: 48 },
      slots: {
        default: () => [h(Avatar), h(Avatar), h(Avatar), h(Avatar)],
      },
    })
    expect(wrapper.findAll('.c-avatar')).toHaveLength(4)
    expect(wrapper.find('.c-avatar').attributes('style')).toContain('width: 48px')
  })

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

    expect(wrapper.classes()).toContain('c-avatar-group--vertical')
    expect(wrapper.attributes('style')).toContain('--c-avatar-group-offset: -12px')
  })

  test('collapses avatars over maxCount', () => {
    const wrapper = mount(AvatarGroup, {
      props: { maxCount: 2, size: 48 },
      slots: {
        default: () => [h(Avatar), h(Avatar), h(Avatar), h(Avatar)],
      },
      global: { stubs: { CPopover: { template: '<div class="c-popover"><slot /></div>' } } },
    })
    expect(wrapper.text()).toContain('+2')
    expect(wrapper.findAll('.c-avatar')).toHaveLength(3)
  })
})
