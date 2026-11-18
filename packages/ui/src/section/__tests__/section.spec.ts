import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Section from '..'

it('installs CSection and defaults to a plain h2 without form decoration', () => {
  expect(createApp({}).use(Section).component('CSection')).toBe(Section)
  const wrapper = mount(Section, {
    props: { id: 'members', title: 'Members', description: 'Project access' },
  })
  expect(wrapper.classes()).toContain('c-section--plain')
  expect(wrapper.get('h2').attributes('id')).toBe(wrapper.attributes('aria-labelledby'))
  expect(wrapper.get('.c-section__description').attributes('id')).toBe(wrapper.attributes('aria-describedby'))
  expect(wrapper.find('.c-section__marker').exists()).toBe(false)
  expect(wrapper.find('.c-section__line').exists()).toBe(false)
  wrapper.unmount()
})

it('renders slots, a configurable heading and a decorative line while preserving content', async () => {
  const wrapper = mount(Section, {
    props: { title: 'Fallback', description: 'Fallback' },
    slots: {
      title: () => 'Members',
      description: () => 'Access',
      extra: () => h('button', 'Edit'),
      default: () => h('input'),
    },
  })
  const field = wrapper.get('input').element
  await wrapper.setProps({ variant: 'line', headingLevel: 4 })
  expect(wrapper.get('h4').text()).toBe('Members')
  expect(wrapper.get('.c-section__description').text()).toBe('Access')
  expect(wrapper.get('button').text()).toBe('Edit')
  expect(wrapper.get('.c-section__line').attributes('aria-hidden')).toBe('true')
  expect(wrapper.get('input').element).toBe(field)
  wrapper.unmount()
})
