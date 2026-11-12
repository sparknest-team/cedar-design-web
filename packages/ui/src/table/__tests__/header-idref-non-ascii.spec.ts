import { h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Table from '../table'

test('preserves a non-ASCII whitespace IDREF on a split-table semantic header', async () => {
  const target = ref('\u00a0')
  const wrapper = mount({ render: () => h('div', [
    h('span', { id: '\u00a0' }, 'External heading'),
    h(Table, { columns: [{ title: 'Fallback', dataIndex: 'name' }], data: [{ key: 'a', name: 'Ada' }], pagination: false, height: 200 }, {
      th: () => h('th', { 'aria-labelledby': target.value, 'aria-label': 'Fallback label' }),
    }),
  ]) }, { attachTo: document.body })
  try {
    const cell = wrapper.findAll('td').find(item => item.text() === 'Ada')!.element as HTMLTableCellElement
    const header = () => Array.from(cell.closest('table')!.querySelectorAll('th')).find(item => item.id === cell.headers)!
    expect(header().getAttribute('aria-labelledby')).toBe('\u00a0')
    expect(header().getAttribute('aria-label')).toBeNull()
    target.value = '  '
    await nextTick()
    expect(header().getAttribute('aria-labelledby')).toBeNull()
    expect(header().getAttribute('aria-label')).toBe('Fallback label')
  } finally { wrapper.unmount() }
})

test('retains a non-ASCII ID reference in split-table server output', async () => {
  const { createSSRApp } = await import('vue')
  const { renderToString } = await import('@vue/server-renderer')
  const html = await renderToString(createSSRApp({ render: () => h('div', [
    h('span', { id: '\u00a0' }, 'External heading'),
    h(Table, { columns: [{ title: 'Fallback', dataIndex: 'name' }], data: [{ key: 'a', name: 'Ada' }], pagination: false, height: 200 }, {
      th: () => h('th', { 'aria-labelledby': '\u00a0', 'aria-label': 'Fallback label' }),
    }),
  ]) }))
  const root = document.createElement('div')
  root.innerHTML = html
  const cell = Array.from(root.querySelectorAll('td')).find(item => item.textContent?.includes('Ada'))!
  const header = Array.from(cell.closest('table')!.querySelectorAll('th')).find(item => item.id === cell.headers)!
  expect(header.getAttribute('aria-labelledby')).toBe('\u00a0')
  expect(header.getAttribute('aria-label')).toBeNull()
})
