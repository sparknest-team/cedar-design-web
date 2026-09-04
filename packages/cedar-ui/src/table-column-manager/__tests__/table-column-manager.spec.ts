import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TableColumnManager from '../table-column-manager.vue'
import Transfer from '../../transfer'

describe('TableColumnManager', () => {
  it('uses Transfer and exposes one complete item model', async () => {
    const wrapper = mount(TableColumnManager, {
      props: {
        inline: true,
        modelValue: [{ dataIndex: 'name', title: '自定义姓名', fixed: 'left' }],
        columns: [{ dataIndex: 'name', title: '姓名' }],
        options: [
          {
            title: '基础信息',
            key: 'basic',
            children: [
              { dataIndex: 'name', title: '姓名' },
              { dataIndex: 'age', title: '年龄' },
            ],
          },
        ],
      },
    })

    const transfer = wrapper.findComponent(Transfer)
    expect(transfer.exists()).toBe(true)
    expect(transfer.props('modelValue')).toEqual([{ value: 'name', label: '自定义姓名', fixed: 'left' }])

    transfer.vm.$emit('update:modelValue', [{ value: 'name', label: '姓名', fixed: 'left' }, { value: 'age' }])
    expect(wrapper.emitted('update:modelValue')?.at(-1)?.[0]).toEqual([
      { dataIndex: 'name', title: '姓名', fixed: 'left' },
      { dataIndex: 'age' },
    ])
  })

  it('returns the new persisted state shape', () => {
    const wrapper = mount(TableColumnManager, {
      props: {
        inline: true,
        modelValue: [{ dataIndex: 'name', title: '姓名', fixed: 'left' }],
        columns: [{ dataIndex: 'name', title: '姓名', fixed: 'left', width: 160 }],
        options: [{ dataIndex: 'name', title: '姓名' }],
      },
    })

    const result = (wrapper.vm as unknown as { getResult: () => Record<string, unknown> }).getResult()
    expect(result.version).toBe(2)
    expect(result.items).toEqual([{ dataIndex: 'name', fixed: 'left' }])
    expect(result).not.toHaveProperty('keys')
    expect(result).not.toHaveProperty('fixedMap')
    expect(result).not.toHaveProperty('titleMap')
  })

  it('renders a single neutral tip icon for a long column name', () => {
    const wrapper = mount(TableColumnManager, {
      props: {
        inline: true,
        options: [
          {
            dataIndex: 'areaCompany',
            title: '区域公司区域公司区域公司区域公司区域公司区域公司',
            tip: '区域公司说明',
          },
        ],
      },
    })

    const item = wrapper.find('.c-transfer-view-source .c-transfer-list-item')
    expect(item.findAll('.c-transfer-list-item-tip')).toHaveLength(1)
    expect(item.find('.c-transfer-list-item-tip').classes()).not.toContain('text-red')
  })
})
