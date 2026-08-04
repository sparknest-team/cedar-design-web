import { nextTick, type VNode } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Transfer from '../index'

const data = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Disabled', value: '3', disabled: true },
]

describe('Transfer', () => {
  test('renders all options in source and selected options in target', () => {
    const wrapper = mount(Transfer, { props: { data, defaultValue: [{ value: '1' }] } })

    expect(wrapper.find('.c-transfer-view-source').text()).toContain('Option 1')
    expect(wrapper.find('.c-transfer-view-source').text()).toContain('Option 2')
    expect(wrapper.find('.c-transfer-view-target').text()).toContain('Option 1')
    expect(wrapper.find('.c-transfer-view-target').text()).not.toContain('Option 2')
  })

  test('checks an option directly into the target value', async () => {
    const onUpdate = vi.fn()
    const wrapper = mount(Transfer, {
      props: { data, modelValue: [], 'onUpdate:modelValue': onUpdate },
    })

    await wrapper
      .findAll('.c-transfer-view-source .c-transfer-list-item')[1]
      .find('input[type="checkbox"]')
      .setValue(true)

    expect(onUpdate).toHaveBeenCalledWith([{ value: '2' }])
  })

  test('filters each panel with the custom filter', async () => {
    const filterOption = vi.fn((value: string, item: (typeof data)[number]) =>
      item.label.toLowerCase().startsWith(value.toLowerCase())
    )
    const wrapper = mount(Transfer, {
      props: { data, defaultValue: [{ value: '1' }, { value: '2' }], showSearch: true, filterOption },
    })

    wrapper.find('.c-transfer-view-source').findComponent({ name: 'Search' }).vm.$emit('update:modelValue', 'option 2')
    await nextTick()

    const source = wrapper.find('.c-transfer-view-source')
    expect(source.text()).toContain('Option 2')
    expect(source.text()).not.toContain('Option 1')
    expect(filterOption).toHaveBeenCalled()
  })

  test('supports naive-ui filterable props and placeholders', () => {
    const wrapper = mount(Transfer, {
      props: {
        data,
        sourceFilterable: true,
        targetFilterable: true,
        sourceFilterPlaceholder: 'Search source',
        targetFilterPlaceholder: 'Search target',
      },
    })

    const searches = wrapper.findAllComponents({ name: 'Search' })
    expect(searches).toHaveLength(2)
    expect(wrapper.find('.c-transfer-view-source .c-search input').attributes('placeholder')).toBe('Search source')
    expect(wrapper.find('.c-transfer-view-target .c-search input').attributes('placeholder')).toBe('Search target')
  })

  test('renders groups and draggable target in the standard layout', () => {
    const wrapper = mount(Transfer, {
      props: {
        data: [
          { label: 'Name', value: 'name', group: 'Basic' },
          { label: 'Device', value: 'device', group: 'Device' },
        ],
        defaultValue: [{ value: 'name' }],
        targetDraggable: true,
      },
    })

    expect(wrapper.findAll('.c-transfer-view-group-title').map((item) => item.text())).toEqual(['Basic', 'Device'])
    expect(wrapper.find('.c-transfer-view-target .c-transfer-list-item-drag-handle').exists()).toBe(true)
    expect(wrapper.find('.c-transfer-view-header-clear-text').text()).toBe('清空')
  })

  test('virtual scroll renders a bounded window instead of the full list', () => {
    const largeData = Array.from({ length: 42000 }, (_, index) => ({
      label: `Option ${index}`,
      value: index,
    }))
    const wrapper = mount(Transfer, { props: { data: largeData, virtualScroll: true } })

    const source = wrapper.find('.c-transfer-view-source')
    expect(source.find('.c-virtual-list').attributes('style')).toContain('overflow: auto')
    expect(source.findAll('.c-transfer-list-item')).toHaveLength(30)
  })

  test('uses the same label and tip layout on both sides', () => {
    const wrapper = mount(Transfer, {
      props: {
        data: [{ label: 'Option with tip', value: 'tip', tip: 'Description' }],
        defaultValue: [{ value: 'tip' }],
      },
    })

    const sourceDetails = wrapper.find('.c-transfer-view-source .c-transfer-list-item-details')
    const targetDetails = wrapper.find('.c-transfer-view-target .c-transfer-list-item-details')
    expect(sourceDetails.find('.c-transfer-list-item-tip').exists()).toBe(true)
    expect(targetDetails.find('.c-transfer-list-item-tip').exists()).toBe(true)
    expect(sourceDetails.element.children.length).toBe(targetDetails.element.children.length)
  })

  test('freezes, renames and runs custom target actions', async () => {
    const wrapper = mount(Transfer, {
      props: {
        data: [
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ],
        defaultValue: [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
        targetOperation: 'menu',
        targetActions: [{ key: 'preview', label: '预览' }],
      },
    })

    const popover = wrapper.findAllComponents({ name: 'Popover' }).at(-1)!
    const menu = popover.vm.$slots.content?.()[0] as VNode
    const collectButtons = (node: unknown): VNode[] => {
      if (Array.isArray(node)) return node.flatMap(collectButtons)
      if (!node || typeof node !== 'object') return []
      const vnode = node as VNode
      if (vnode.type === 'button') return [vnode]
      return Array.isArray(vnode.children) ? vnode.children.flatMap(collectButtons) : []
    }
    const buttons = collectButtons(menu)
    buttons[1].props?.onClick()
    expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toEqual([
      { value: 'c', fixed: 'left' },
      { value: 'a' },
      { value: 'b' },
    ])

    buttons[4].props?.onClick()
    expect(wrapper.emitted('targetAction')?.at(-1)).toEqual(['preview', expect.objectContaining({ value: 'c' })])

    buttons[0].props?.onClick()
    await nextTick()
    ;(wrapper.vm as unknown as { renameDraft: string }).renameDraft = 'Renamed C'
    ;(wrapper.vm as unknown as { commitRename: () => void }).commitRename()
    expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toEqual([
      { value: 'c', fixed: 'left', label: 'Renamed C' },
      { value: 'a' },
      { value: 'b' },
    ])
  })

  test('switches between remove icon and operation menu', () => {
    const props = {
      data: [{ label: 'A', value: 'a' }],
      defaultValue: [{ value: 'a' }],
    }
    const removeWrapper = mount(Transfer, { props })
    expect(removeWrapper.find('.c-transfer-list-item-remove-btn').exists()).toBe(true)
    expect(removeWrapper.find('.c-transfer-list-item-operation-btn').exists()).toBe(false)

    const menuWrapper = mount(Transfer, {
      props: { ...props, targetOperation: 'menu' },
    })
    expect(menuWrapper.find('.c-transfer-list-item-remove-btn').exists()).toBe(false)
    expect(menuWrapper.find('.c-transfer-list-item-operation-btn').exists()).toBe(true)
  })

  test('uses source fixed metadata when adding target items', async () => {
    const onUpdate = vi.fn()
    const wrapper = mount(Transfer, {
      props: {
        data: [
          { label: 'Normal', value: 'normal' },
          { label: 'Fixed', value: 'fixed', fixed: 'left' },
        ],
        modelValue: [{ value: 'normal' }],
        'onUpdate:modelValue': onUpdate,
      },
    })

    await wrapper
      .findAll('.c-transfer-view-source .c-transfer-list-item')[1]
      .find('input[type="checkbox"]')
      .setValue(true)

    expect(onUpdate).toHaveBeenCalledWith([{ value: 'fixed', fixed: 'left' }, { value: 'normal' }])
  })
})
