import { mount } from '@vue/test-utils'
import { h, nextTick, ref } from 'vue'
import { expect, test } from 'vitest'
import Table from '..'
import CompiledFixture from './fixtures/dynamic-th-presence.vue'

for (const height of [undefined, 200]) {
  test(`dynamic th slot presence updates the displayed header and accessible name (${height})`, async () => {
    const enabled = ref(false)
    const columns = [{ title: 'Name', dataIndex: 'name' }]
    const data = [{ key: 'a', name: 'Ada' }]
    const wrapper = mount({ render: () => h(Table, { columns, data, pagination: false, height },
      enabled.value ? { th: () => h('th', { 'data-custom': 'yes', 'aria-label': 'Custom name' }) } : {}) })
    try {
      expect(wrapper.find('th[data-custom]').exists()).toBe(false)
      enabled.value = true
      await nextTick()
      expect(wrapper.find('th[data-custom]').exists()).toBe(true)
      if (height) {
        const cell = wrapper.get('td').element as HTMLTableCellElement
        const header = cell.closest('table')!.querySelector(`th[id="${cell.headers}"]`)
        expect(header?.getAttribute('aria-label')).toBe('Custom name')
      }
      enabled.value = false
      await nextTick()
      expect(wrapper.find('th[data-custom]').exists()).toBe(false)
    } finally { wrapper.unmount() }
  })
}


test('compiled conditional slot updates its visible and semantic names', async () => {
  const wrapper = mount(CompiledFixture)
  try {
    const name = () => {
      const cell = wrapper.get('td').element as HTMLTableCellElement
      return cell.closest('table')!.querySelector(`th[id="${cell.headers}"]`)?.getAttribute('aria-label')
    }
    await wrapper.get('#toggle').trigger('click')
    expect(wrapper.get('th[data-custom]').attributes('aria-label')).toBe('First name')
    expect(name()).toBe('First name')
    await wrapper.get('#rename').trigger('click')
    expect(wrapper.get('th[data-custom]').attributes('aria-label')).toBe('Updated name')
    expect(name()).toBe('Updated name')
    await wrapper.get('#toggle').trigger('click')
    expect(wrapper.find('th[data-custom]').exists()).toBe(false)
    expect(name()).toBeNull()
  } finally { wrapper.unmount() }
})

test('replacing an existing th slot updates its cached semantic header', async () => {
  const first = ref(true)
  const columns = [{ title: 'Name', dataIndex: 'name' }]
  const data = [{ key: 'a', name: 'Ada' }]
  const alpha = () => h('th', { 'aria-label': 'Alpha' })
  const beta = () => h('th', { 'aria-label': 'Beta' })
  const wrapper = mount({ render: () => h(Table, { columns, data, pagination: false, height: 200 }, { th: first.value ? alpha : beta }) })
  try {
    const name = () => {
      const cell = wrapper.get('td').element as HTMLTableCellElement
      return cell.closest('table')!.querySelector(`th[id="${cell.headers}"]`)?.getAttribute('aria-label')
    }
    expect(name()).toBe('Alpha')
    first.value = false
    await nextTick()
    expect(name()).toBe('Beta')
    first.value = true
    await nextTick()
    expect(name()).toBe('Alpha')
  } finally { wrapper.unmount() }
})
