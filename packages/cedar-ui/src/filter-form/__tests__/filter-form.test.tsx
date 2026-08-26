import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { FilterForm } from '../index'
import Input from '../../input'

function stubMatchMedia() {
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }))
}

describe('FilterForm', () => {
  test('render', async () => {
    stubMatchMedia()
    const wrapper = mount(FilterForm)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders registered field from fieldMap', async () => {
    stubMatchMedia()
    const wrapper = mount(FilterForm, {
      props: {
        modelValue: { keyword: '' },
        fieldMap: {
          input: { component: Input, valueEvent: 'update:modelValue' },
        },
        fields: [
          {
            type: 'input',
            field: 'keyword',
            label: '关键词',
          },
        ],
      },
    })
    await nextTick()
    expect(wrapper.find('.c-input').exists() || wrapper.find('input').exists()).toBe(true)
  })

  test('skips unregistered field type', async () => {
    stubMatchMedia()
    const wrapper = mount(FilterForm, {
      props: {
        modelValue: {},
        fields: [
          {
            type: 'select',
            field: 'type',
            label: '类型',
          },
        ],
      },
    })
    await nextTick()
    expect(wrapper.find('.c-select').exists()).toBe(false)
  })

  test('shows expand/collapse when fields overflow', async () => {
    stubMatchMedia()
    const fields = Array.from({ length: 8 }, (_, i) => ({
      type: 'input',
      field: `f${i}`,
      label: `F${i}`,
    }))
    const wrapper = mount(FilterForm, {
      props: {
        modelValue: Object.fromEntries(fields.map((f) => [f.field, ''])),
        collapsed: true,
        cols: 3,
        fieldMap: {
          input: { component: Input, valueEvent: 'update:modelValue' },
        },
        fields,
      },
      slots: {
        actions: '<button class="search-btn">搜索</button>',
      },
      attachTo: document.body,
    })
    await nextTick()
    await nextTick()

    const collapseBtn = wrapper.find('.c-filter-form__collapse')
    expect(collapseBtn.exists()).toBe(true)
    expect(collapseBtn.text()).toContain('展开')

    await collapseBtn.trigger('click')
    await nextTick()
    expect(wrapper.find('.c-filter-form__collapse').text()).toContain('收起')
    expect(wrapper.emitted('update:collapsed')?.[0]).toEqual([false])

    wrapper.unmount()
  })

  test('collapsible works without actions slot', async () => {
    stubMatchMedia()
    const fields = Array.from({ length: 6 }, (_, i) => ({
      type: 'input',
      field: `f${i}`,
      label: `F${i}`,
    }))
    const wrapper = mount(FilterForm, {
      props: {
        modelValue: {},
        cols: 2,
        fieldMap: {
          input: { component: Input, valueEvent: 'update:modelValue' },
        },
        fields,
      },
      attachTo: document.body,
    })
    await nextTick()
    await nextTick()
    expect(wrapper.find('.c-filter-form__collapse').exists()).toBe(true)
    wrapper.unmount()
  })
})
