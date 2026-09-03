import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Statistic from '../index'

describe('Statistic', () => {
  test('plugin', () => {
    const app = createApp({}).use(Statistic)
    expect(app.component(Statistic.name)).toBeTruthy()
  })

  test('render title and value', () => {
    const wrapper = mount(Statistic, {
      props: {
        title: 'Downloads',
        value: 125670,
      },
    })

    expect(wrapper.find('.c-statistic__title').text()).toBe('Downloads')
    expect(wrapper.find('.c-statistic__value-integer').text()).toBe('125670')
    wrapper.unmount()
  })

  test('group separator and custom separator', async () => {
    const wrapper = mount(Statistic, {
      props: {
        value: 125670,
        showGroupSeparator: true,
      },
    })

    expect(wrapper.find('.c-statistic__value-integer').text()).toBe('125,670')
    await wrapper.setProps({ separator: ' ' })
    expect(wrapper.find('.c-statistic__value-integer').text()).toBe('125 670')
    wrapper.unmount()
  })

  test('precision', () => {
    const wrapper = mount(Statistic, {
      props: {
        value: 40509.126,
        precision: 2,
      },
    })

    expect(wrapper.find('.c-statistic__value-integer').text()).toBe('40509')
    expect(wrapper.find('.c-statistic__value-decimal').text()).toBe('.13')
    wrapper.unmount()
  })

  test('prefix and suffix props', () => {
    const wrapper = mount(Statistic, {
      props: {
        value: 12.8,
        precision: 1,
        prefix: '$',
        suffix: '%',
      },
    })

    expect(wrapper.find('.c-statistic__prefix').text()).toBe('$')
    expect(wrapper.find('.c-statistic__suffix').text()).toBe('%')
    wrapper.unmount()
  })

  test('prefix and suffix slots', () => {
    const wrapper = mount(Statistic, {
      props: {
        value: 100,
      },
      slots: {
        prefix: () => h('span', { class: 'custom-prefix' }, 'up'),
        suffix: () => 'units',
      },
    })

    expect(wrapper.find('.custom-prefix').text()).toBe('up')
    expect(wrapper.find('.c-statistic__suffix').text()).toBe('units')
    wrapper.unmount()
  })

  test('string value', () => {
    const wrapper = mount(Statistic, {
      props: {
        value: '1.28k',
      },
    })

    expect(wrapper.find('.c-statistic__value').text()).toBe('1.28k')
    wrapper.unmount()
  })

  test('default slot when value is empty', () => {
    const wrapper = mount(Statistic, {
      slots: {
        default: () => h('span', { class: 'custom-value' }, 'custom'),
      },
    })

    expect(wrapper.find('.custom-value').text()).toBe('custom')
    wrapper.unmount()
  })

  test('value prop takes precedence over default slot', () => {
    const wrapper = mount(Statistic, {
      props: {
        value: 88,
      },
      slots: {
        default: () => 'ignored',
      },
    })

    expect(wrapper.find('.c-statistic__value-integer').text()).toBe('88')
    expect(wrapper.text()).not.toContain('ignored')
    wrapper.unmount()
  })

  test('tabular nums class', () => {
    const wrapper = mount(Statistic, {
      props: {
        value: 88,
        tabularNums: true,
      },
    })

    expect(wrapper.find('.c-statistic__value').classes()).toContain('c-statistic__value--tabular-nums')
    wrapper.unmount()
  })

  test('placeholder', () => {
    const wrapper = mount(Statistic, {
      props: {
        placeholder: '暂无数据',
      },
    })

    expect(wrapper.find('.c-statistic__value').text()).toBe('暂无数据')
    wrapper.unmount()
  })

  test('extra', () => {
    const wrapper = mount(Statistic, {
      props: {
        value: 10,
        extra: 'compared to yesterday',
      },
    })

    expect(wrapper.find('.c-statistic__extra').text()).toBe('compared to yesterday')
    wrapper.unmount()
  })
})
