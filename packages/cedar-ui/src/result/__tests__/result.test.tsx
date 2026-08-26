import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Result } from '../index'

describe('Result', () => {
  test('renders status, title and subtitle', () => {
    const wrapper = mount(Result, {
      props: { status: 'success', title: 'Saved', subtitle: 'All changes are live' },
    })

    expect(wrapper.find('.c-result-icon-success').exists()).toBe(true)
    expect(wrapper.get('.c-result-title').text()).toBe('Saved')
    expect(wrapper.get('.c-result-subtitle').text()).toBe('All changes are live')
  })

  test('uses the shared danger status vocabulary', () => {
    const wrapper = mount(Result, { props: { status: 'danger' } })

    expect(wrapper.find('.c-result-icon-danger').exists()).toBe(true)
  })

  test('renders content slots', () => {
    const wrapper = mount(Result, {
      slots: { default: 'Details', extra: 'Retry' },
    })

    expect(wrapper.get('.c-result-content').text()).toBe('Details')
    expect(wrapper.get('.c-result-extra').text()).toBe('Retry')
  })
})
