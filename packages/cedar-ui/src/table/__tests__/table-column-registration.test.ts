import { describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent, h, ref } from 'vue'
import Table from '../table'
import TableColumn from '../table-column'

describe('TableColumn public registration', () => {
  it('renders grouped columns and updates child titles through their real names', async () => {
    const title = ref('Name')
    const showScore = ref(true)
    const Fixture = defineComponent({
      setup: () => () => h(Table, { data: [{ key: 'a', name: 'Ada', score: 92 }], pagination: false }, {
        columns: () => h(TableColumn, { title: 'Group' }, {
          default: () => [
            h(TableColumn, { title: title.value, dataIndex: 'name' }, { cell: ({ record }: any) => h('strong', record.name) }),
            showScore.value ? h(TableColumn, { title: 'Score', dataIndex: 'score' }) : null,
          ],
        }),
      }),
    })
    const wrapper = mount(Fixture)
    await flushPromises()
    expect(wrapper.findAll('thead th').map(cell => cell.text())).toEqual(['Group', 'Name', 'Score'])
    expect(wrapper.find('tbody strong').text()).toBe('Ada')
    expect(wrapper.find('tbody').text()).toContain('92')
    title.value = 'Reviewed name'
    showScore.value = false
    await flushPromises()
    expect(wrapper.find('thead').text()).toContain('Reviewed name')
    expect(wrapper.find('thead').text()).not.toContain('Score')
    wrapper.unmount()
  })
})

it('keeps a column filter reference clickable and filters actual table rows', async () => {
  const wrapper = mount(Table, {
    attachTo: document.body,
    props: {
      pagination: false,
      data: [{ key: 'a', name: 'Ada' }, { key: 'b', name: 'Lin' }],
      columns: [{ title: 'Name', dataIndex: 'name', filterable: {
        filters: [{ text: 'Ada', value: 'Ada' }],
        filter: (values: string[], record: any) => values.includes(record.name),
      } }],
    },
  })
  await flushPromises()
  const filter = wrapper.get('.c-table-filters')
  expect(filter.classes()).not.toContain('c-icon-hover--disabled')
  await filter.trigger('click')
  await flushPromises()
  const radio = document.querySelector<HTMLInputElement>('.c-table-filters-content input[type="radio"]')!
  expect(radio).not.toBeNull()
  radio.click()
  await flushPromises()
  const confirm = Array.from(document.querySelectorAll<HTMLButtonElement>('.c-table-filters-bottom button')).find(button => /确定|Confirm/.test(button.textContent ?? ''))!
  confirm.click()
  await flushPromises()
  expect(wrapper.find('tbody').text()).toContain('Ada')
  expect(wrapper.find('tbody').text()).not.toContain('Lin')
  wrapper.unmount()
})

it('updates conditional column filter slots and restores their fallbacks', async () => {
  const show = ref(true)
  const Fixture = defineComponent({
    setup: () => () => h(Table, { data: [{ key: 'a', name: 'Ada' }], pagination: false }, {
      columns: () => h(TableColumn, {
        title: 'Name', dataIndex: 'name', filterable: {
          icon: () => h('b', { class: 'fallback-icon' }, 'Default icon'),
          renderContent: () => h('div', { class: 'fallback-content' }, 'Default content'),
          filter: () => true,
        },
      }, show.value ? {
        'filter-icon': () => h('b', { class: 'custom-icon' }, 'Custom icon'),
        'filter-content': () => h('div', { class: 'custom-content' }, 'Custom content'),
      } : {}),
    }),
  })
  const wrapper = mount(Fixture, { attachTo: document.body })
  try {
    await flushPromises()
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    await wrapper.get('.c-table-filters').trigger('click')
    await flushPromises()
    expect(document.querySelector('.custom-content')).not.toBeNull()
    show.value = false
    await flushPromises()
    expect(wrapper.find('.custom-icon').exists()).toBe(false)
    expect(wrapper.find('.fallback-icon').exists()).toBe(true)
    expect(document.querySelector('.fallback-content')).not.toBeNull()
    show.value = true
    await flushPromises()
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    expect(document.querySelector('.custom-content')).not.toBeNull()
  } finally { wrapper.unmount() }
})
