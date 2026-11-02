import { h } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'
import Loading from '../../loading'

test('native table slots honor manual loading and keep their editable DOM', async () => {
  const owner = mount(Table, { props: { loading: false, pagination: false }, slots: { default: () => h('tbody', [h('tr', [h('td', [h('input', { defaultValue: 'draft' })])])]) } })
  try {
    const row = owner.get('tr').element, input = owner.get('input').element
    input.value = 'edited draft'
    await owner.setProps({ loading: true })
    expect(owner.attributes('aria-busy')).toBe('true')
    expect(owner.findComponent(Loading).props('loading')).toBe(true)
    expect(owner.find('.c-loading__body').exists()).toBe(true)
    expect(owner.get('tr').element).toBe(row)
    expect(owner.get('input').element.value).toBe('edited draft')
    await owner.setProps({ loading: { loading: false, size: 24 } })
    expect(owner.attributes('aria-busy')).toBeUndefined()
    expect(owner.find('.c-loading__body').exists()).toBe(false)
    await owner.setProps({ loading: { size: 24 } })
    expect(owner.find('.c-loading__body').exists()).toBe(false)
    await owner.setProps({ loading: { loading: true, size: 24 } })
    expect(owner.find('.c-loading__body').exists()).toBe(true)
    expect(owner.get('tr').element).toBe(row)
  } finally { owner.unmount() }
})
test('data and native table modes expose the same explicit root busy state', async () => {
  const owner = mount(Table, { props: { columns: [{ dataIndex: 'name' }], data: [{ key: 'a', name: 'A' }], loading: true, pagination: false } })
  try {
    expect(owner.attributes('aria-busy')).toBe('true')
    await owner.setProps({ loading: false })
    expect(owner.attributes('aria-busy')).toBeUndefined()
  } finally { owner.unmount() }
})
