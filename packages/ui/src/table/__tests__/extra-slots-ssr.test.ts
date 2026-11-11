// @vitest-environment node
import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it } from 'vitest'
import Fixture from './fixtures/extra-slots-ssr.vue'
import FilterFixture from './fixtures/filter-slots-ssr.vue'
import ColumnFixture from './fixtures/column-registration-ssr.vue'
import MemoColumnFixture from './fixtures/column-memo-ssr.vue'
import NestedMemoColumnFixture from './fixtures/column-nested-memo-ssr.vue'
import ColumnFilterFixture from './fixtures/column-filter-ssr.vue'
import ColumnContentFixture from './fixtures/column-content-ssr.vue'
import Table from '../table'

describe('Table additional content slots in SSR', () => {
  for (const mode of ['expandrow', 'expandicon', 'pagination', 'left', 'right', 'summary', 'drag'] as const) {
    for (const split of [false, true]) {
      it(`${mode}, split=${split}`, async () => {
        const html = await renderToString(createSSRApp({ render: () => h(Fixture, { mode, split }) }))
        expect(html).toContain('data-probe')
        expect(html).toContain('>1</span>')
      })
    }
  }
})

describe('Table column registration in SSR', () => {
  for (const split of [false, true]) {
    for (const grouped of [false, true]) {
      it(`renders declared columns, split=${split}, grouped=${grouped}`, async () => {
        const html = await renderToString(createSSRApp({ render: () => h(ColumnFixture, { split, grouped }) }))
        expect(html).toContain('Name')
        expect(html).toContain('Ada')
        if (grouped) expect(html).toContain('Group')
      })
    }
    for (const fixture of [MemoColumnFixture, NestedMemoColumnFixture]) {
      it(`renders dynamic memoized columns, split=${split}`, async () => {
        const html = await renderToString(createSSRApp({ render: () => h(fixture, { split }) }))
        expect(html).toContain('Ada')
        expect(html).toContain('Paris')
      })
    }
  }
})

describe('Table named filter content in SSR', () => {
  for (const split of [false, true]) {
    it(`renders the scoped filter slot, split=${split}`, async () => {
      const html = await renderToString(createSSRApp({ render: () => h(FilterFixture, { split }) }))
      expect(html).toContain('data-probe')
      expect(html).toContain('>1</span>')
    })
  }
})

describe('TableColumn filter slots in SSR', () => {
  for (const mode of ['icon', 'content'] as const) {
    for (const split of [false, true]) {
      it(`${mode}, split=${split}`, async () => {
        const html = await renderToString(createSSRApp({ render: () => h(ColumnFilterFixture, { mode, split }) }))
        expect(html).toContain('data-probe')
        expect(html).toContain('>1</span>')
      })
    }
  }
})

describe('TableColumn title and cell slots in SSR', () => {
  for (const mode of ['title', 'cell'] as const) {
    for (const split of [false, true]) {
      it(`${mode}, split=${split}`, async () => {
        const html = await renderToString(createSSRApp({ render: () => h(ColumnContentFixture, { mode, split }) }))
        expect(html).toContain('data-probe')
        expect(html).toContain('>1</span>')
      })
    }
  }
})

it('renders single values from data-defined column slots in SSR', async () => {
  const columns = [{ dataIndex: 'name', filterable: { filter: () => true, triggerProps: { open: true, popupContainer: false } }, slots: {
    title: () => 'Raw title', cell: () => 'Raw cell', 'filter-icon': () => 'Raw icon', 'filter-content': () => 'Raw filter',
  } }]
  const html = await renderToString(createSSRApp({ render: () => h(Table, { columns, data: [{ key: 'a', name: 'Ada' }], pagination: false }) }))
  for (const value of ['Raw title', 'Raw cell', 'Raw icon', 'Raw filter']) expect(html).toContain(value)
})

it('uses the configured filter icon when a data-defined slot returns nothing in SSR', async () => {
  const columns = [{ dataIndex: 'name', filterable: { filter: () => true, icon: () => h('b', 'Fallback icon') }, slots: {
    title: () => null, cell: () => undefined, 'filter-icon': () => undefined,
  } }]
  const html = await renderToString(createSSRApp({ render: () => h(Table, { columns, data: [{ key: 'a', name: 'Ada' }], pagination: false }) }))
  expect(html).toContain('Fallback icon')
})
