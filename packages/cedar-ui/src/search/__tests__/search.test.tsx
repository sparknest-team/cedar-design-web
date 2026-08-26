import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { Search } from '../index'

describe('Search', () => {
  test('render', async () => {
    const wrapper = mount(Search)
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('input with fields', async () => {
    const model: Record<string, any> = {}
    const wrapper = mount(Search, {
      props: {
        model,
        defaultField: 'name',
        fields: [
          { value: 'id', label: '设备 ID' },
          { value: 'name', label: '设备名称' },
        ],
      },
    })

    const input = wrapper.find('input.c-input__inner')
    await input.setValue('设备 A')

    expect((input.element as HTMLInputElement).value).toBe('设备 A')
    expect(model.name).toBe('设备 A')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['设备 A'])
    expect(wrapper.emitted('change')?.[0]?.[0]).toBe('设备 A')
  })

  test('history is not filtered by input', async () => {
    const wrapper = mount(Search, {
      props: {
        recentSearches: ['设备 A', '设备 B', '项目 C'],
      },
    })

    const input = wrapper.find('input.c-input__inner')
    await input.trigger('focus')
    await input.setValue('设备 A')
    await nextTick()

    expect(wrapper.find('.c-auto-complete').exists()).toBe(false)
    expect(wrapper.findAll('.c-menu-option')).toHaveLength(3)
  })

  test('select history triggers search immediately', async () => {
    const wrapper = mount(Search, {
      props: {
        recentSearches: ['设备 A', '设备 B'],
      },
    })

    const input = wrapper.find('input.c-input__inner')
    await input.setValue('任意内容')
    await wrapper.find('.c-menu-option').trigger('click')
    await nextTick()

    expect((input.element as HTMLInputElement).value).toBe('设备 A')
    expect(wrapper.emitted('search')?.[0]?.[0]).toMatchObject({
      modelValue: '设备 A',
    })
  })
})
