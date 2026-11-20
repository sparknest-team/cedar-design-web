import assert from 'node:assert/strict'

/** Differential SSR fixtures run against both emitted versions, never source aliases. */
export async function captureTableOrchestration(component, require) {
  const { createSSRApp, h } = require('vue')
  const { renderToString } = require('@vue/server-renderer')
  const columns = [{ title: 'Group', children: [{ title: 'Name', dataIndex: 'name', width: 120, fixed: 'left' }, { title: 'Amount', dataIndex: 'account.amount', minWidth: 80 }] }]
  const data = [{ key: 'a', name: 'Alpha', account: { amount: 2 } }, { key: 'b', name: 'Beta', account: { amount: 3 } }, { key: 'c', name: 'Gamma', account: { amount: null } }]
  const virtual = { height: 100, estimatedSize: 30 }
  const captures = {}
  async function render(name, props = {}, slots, trace = []) {
    const app = createSSRApp({ render: () => h(component, { columns, data, pagination: false, ...props }, slots) })
    app.config.idPrefix = `orchestration-${name}`
    const warnings = []
    app.config.warnHandler = message => warnings.push(message)
    const html = await renderToString(app)
    assert.match(html, /<table/)
    assert.deepEqual(warnings, [], name)
    captures[name] = { html, trace }
    return html
  }
  for (const split of [false, true]) {
    const html = await render(`summary-${split}`, { summary: true, height: split ? 180 : undefined, summaryText: 'Total' })
    assert.match(html, /<tfoot>/); assert.match(html, /Total/)
  }
  const summaryTrace = []
  const summary = ({ columns: actual, data: rows }) => {
    summaryTrace.push({ columns: actual.map(column => column.dataIndex), keys: rows.map(row => row.key), rawIdentity: rows.every(row => data.includes(row)) })
    return [{ key: 'total-a', name: 'Callback total', account: { amount: 99 } }, { key: 'total-b', name: 'Second total', account: { amount: 42 } }]
  }
  await render('summary-callback-page', { pagination: { modelValue: 2, pageSize: 1, responsive: false }, summary }, { 'summary-cell': scope => { summaryTrace.push({ slot: scope.column.dataIndex, row: scope.record.key }); return h('strong', `${scope.record.name}:${scope.column.dataIndex}`) } }, summaryTrace)
  assert.deepEqual(summaryTrace[0].keys, ['b']); assert.equal(summaryTrace[0].rawIdentity, true)
  await render('summary-span-selection', { summary: true, rowSelection: { type: 'checkbox' }, summarySpanMethod: ({ columnIndex }) => columnIndex === 1 ? { colspan: 2 } : undefined, height: 180 })
  await render('summary-empty-callback', { summary: () => [], height: 180 })
  await render('summary-virtual', { summary: true, virtualListProps: virtual })
  const tree = [{ key: 'parent', name: 'Parent', children: [{ key: 'child', name: 'Child' }] }, { key: 'empty', name: 'Empty', children: [] }, { key: 'last', name: 'Last' }]
  await render('virtual-tree-empty', { data: tree, expandedKeys: ['parent', 'empty'], virtualListProps: virtual, showEmptyTree: true })
  for (const result of [false, true]) {
    const trace = []
    await render(`virtual-detail-${result}`, { expandedKeys: ['b'], virtualListProps: virtual, expandable: { expandedRowRender: row => { trace.push(row.key); return result ? h('span', `Detail ${row.name}`) : null } } }, undefined, trace)
    assert.ok(trace.length > 0)
  }
  const rows = Array.from({ length: 200 }, (_, key) => ({ key, name: `Row ${key}` }))
  const trace = []
  await render('virtual-offscreen', { data: rows, virtualListProps: virtual, expandedKeys: [199], expandable: { expandedRowRender: row => { trace.push(row.key); return null } } }, undefined, trace)
  assert.ok(!trace.includes(199), 'Offscreen detail callback was evaluated')
  await render('virtual-threshold', { virtualListProps: { ...virtual, threshold: 3 } })
  await render('virtual-custom-body', { virtualListProps: virtual }, { tbody: () => h('tbody', { 'data-custom-body': 'yes' }) })
  await render('virtual-explicit-component', { virtualListProps: { ...virtual, component: { list: 'table', content: 'tbody' } } }, { tbody: () => { throw Error('Explicit component must not invoke tbody slot') } })
  return captures
}
