import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Section from '..'

it('installs CSection and defaults to a lined h2 without a marker', () => {
  expect(createApp({}).use(Section).component('CSection')).toBe(Section)
  const wrapper = mount(Section, {
    props: { id: 'members', title: 'Members', description: 'Project access' },
  })
  expect(wrapper.classes()).toContain('c-section--heading-line')
  expect(wrapper.get('h2').attributes('id')).toBe(wrapper.attributes('aria-labelledby'))
  expect(wrapper.get('.c-section__description').attributes('id')).toBe(wrapper.attributes('aria-describedby'))
  expect(wrapper.find('.c-section__label--marked').exists()).toBe(false)
  expect(wrapper.find('.c-section__line').exists()).toBe(true)
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
  await wrapper.setProps({ variant: 'heading-line', headingLevel: 4 })
  expect(wrapper.get('h4').text()).toBe('Members')
  expect(wrapper.get('.c-section__description').text()).toBe('Access')
  expect(wrapper.get('button').text()).toBe('Edit')
  expect(wrapper.get('.c-section__line').attributes('aria-hidden')).toBe('true')
  expect(wrapper.get('input').element).toBe(field)
  wrapper.unmount()
})

it('changes visual size independently of the heading level', async () => {
  const wrapper = mount(Section, { props: { title: 'Members', headingLevel: 4 } })
  const heading = wrapper.get('h4').element
  expect(wrapper.classes()).toContain('c-section--size-md')
  for (const size of ['xs', 'sm', 'lg', 'xl'] as const) {
    await wrapper.setProps({ size })
    expect(wrapper.classes()).toContain(`c-section--size-${size}`)
    expect(wrapper.get('h4').element).toBe(heading)
  }
  await wrapper.setProps({ headingLevel: 2 })
  expect(wrapper.classes()).toContain('c-section--size-xl')
  expect(wrapper.get('h2').attributes('id')).toBe(wrapper.attributes('aria-labelledby'))
  wrapper.unmount()
})
