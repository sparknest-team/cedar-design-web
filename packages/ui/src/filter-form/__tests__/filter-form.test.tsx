import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import { FilterForm } from '../index'
import Input from '../../input'
import Select from '../../select'
import type { FilterFormField } from '../types'

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
  test('single-column collapse retains a field above the actions', async () => {
    stubMatchMedia()
    const wrapper = mount(FilterForm, {
      props: {
        cols: 1,
        fields: Array.from({ length: 3 }, (_, i) => ({ component: 'input', field: `f${i}`, label: `F${i}` })),
        fieldMap: { input: { component: Input } },
      },
    })
    try {
      await nextTick()
      await nextTick()
      const items = wrapper.findAll('.c-grid-item')
      expect(items[0].element.style.display).not.toBe('none')
      expect(items[1].element.style.display).toBe('none')
      expect(wrapper.get('.c-filter-form__collapse').attributes('aria-expanded')).toBe('false')
      await wrapper.get('.c-filter-form__collapse').trigger('click')
      expect(items.slice(0, 3).every(item => item.element.style.display !== 'none')).toBe(true)
    } finally {
      wrapper.unmount()
    }
  })
  test('direct components sync nested values only through update:modelValue', async () => {
    stubMatchMedia()
    const wrapper = mount(FilterForm, {
      props: {
        modelValue: { search: { keyword: '' } },
        fields: [{ component: Input, field: 'search.keyword', autoEmitChange: false }],
      },
    })
    const input = wrapper.findComponent(Input)
    input.vm.$emit('change', 'ignored')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    input.vm.$emit('update:modelValue', 'cedar')
    await nextTick()
    expect(wrapper.emitted('update:modelValue')).toEqual([[{ search: { keyword: 'cedar' } }]])
    expect(input.props('modelValue')).toBe('cedar')
    expect(wrapper.emitted('change')).toBeUndefined()
    await wrapper.setProps({ modelValue: { search: { keyword: 'external' } } })
    expect(input.props('modelValue')).toBe('external')
    wrapper.unmount()
  })

  test('registered components merge defaults and receive refreshed options', async () => {
    vi.useFakeTimers()
    try {
    stubMatchMedia()
    const fields = (options: unknown[]): FilterFormField[] => [{
      component: 'select', field: 'status', props: { placeholder: '状态', options },
    }]
    const wrapper = mount(FilterForm, {
      props: {
        fields: fields([]),
        fieldMap: { select: { component: Select, defaultProps: { clearable: true, placeholder: '全部' } } },
        changeDebounce: 0,
      },
    })
    const select = wrapper.findComponent(Select)
    expect(select.props('clearable')).toBe(true)
    expect(select.props('placeholder')).toBe('状态')
    const options = [{ label: '启用', value: 'enabled' }]
    await wrapper.setProps({ fields: fields(options) })
    expect(select.props('options')).toEqual(options)
    select.vm.$emit('update:modelValue', 'enabled')
    select.vm.$emit('change', 'enabled')
    expect(wrapper.emitted('update:modelValue')).toEqual([[{ status: 'enabled' }]])
    vi.runOnlyPendingTimers()
    expect(wrapper.emitted('change')).toEqual([[{ status: 'enabled' }, 'status']])
    await wrapper.setProps({ fields: fields([]) })
    expect(select.props('options')).toEqual([])
    wrapper.unmount()
    } finally {
      vi.useRealTimers()
    }
  })

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
          input: { component: Input },
        },
        fields: [
          {
            component: 'input',
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
            component: 'select',
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
      component: 'input',
      field: `f${i}`,
      label: `F${i}`,
    }))
    const wrapper = mount(FilterForm, {
      props: {
        modelValue: Object.fromEntries(fields.map((f) => [f.field, ''])),
        collapsed: true,
        cols: 3,
        fieldMap: {
          input: { component: Input },
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
    expect(collapseBtn.classes()).toContain('c-link--hoverless')
    expect(collapseBtn.attributes('tabindex')).toBe('0')
    expect(collapseBtn.element.tagName).toBe('A')
    expect(collapseBtn.attributes('role')).toBe('button')
    expect(collapseBtn.attributes('aria-expanded')).toBe('false')
    expect(collapseBtn.text()).toContain('展开')

    await collapseBtn.trigger('click')
    await nextTick()
    expect(wrapper.find('.c-filter-form__collapse').text()).toContain('收起')
    expect(wrapper.find('.c-filter-form__collapse').attributes('aria-expanded')).toBe('true')
    await collapseBtn.trigger('keydown', { key: 'Enter' })
    expect(collapseBtn.attributes('aria-expanded')).toBe('false')
    await collapseBtn.trigger('keydown', { key: ' ' })
    await collapseBtn.trigger('keyup', { key: ' ' })
    expect(collapseBtn.attributes('aria-expanded')).toBe('true')
    expect(wrapper.emitted('update:collapsed')).toEqual([[false], [true], [false]])

    wrapper.unmount()
  })

  test('collapsible works without actions slot', async () => {
    stubMatchMedia()
    const fields = Array.from({ length: 6 }, (_, i) => ({
      component: 'input',
      field: `f${i}`,
      label: `F${i}`,
    }))
    const wrapper = mount(FilterForm, {
      props: {
        modelValue: {},
        cols: 2,
        fieldMap: {
          input: { component: Input },
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
