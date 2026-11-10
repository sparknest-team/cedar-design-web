import { expect, test } from 'vitest'
import { buildHeaderAssociations } from '../header-association'

test('maps nested column groups and row-spanning operation headers', () => {
  const map = buildHeaderAssociations([
    [{ id: 'select', rowSpan: 3 }, { id: 'person', colSpan: 3 }, { id: 'status', rowSpan: 3 }],
    [{ id: 'name', rowSpan: 2 }, { id: 'contact', colSpan: 2 }],
    [{ id: 'email' }, { id: 'phone' }],
  ])
  expect(map.columnHeaders).toEqual([
    ['select'], ['person', 'name'], ['person', 'contact', 'email'],
    ['person', 'contact', 'phone'], ['status'],
  ])
  expect(map.headersForSpan(2, 2)).toEqual(['person', 'contact', 'email', 'phone'])
  expect(map.headersForSpan(0, 2)).toEqual(['select', 'person', 'name'])
})

test('rebuilding after a column change removes stale header references', () => {
  const before = buildHeaderAssociations([[{ id: 'group', colSpan: 2 }], [{ id: 'a' }, { id: 'b' }]])
  const after = buildHeaderAssociations([[{ id: 'group' }], [{ id: 'b' }]])
  expect(before.headersForSpan(1)).toEqual(['group', 'b'])
  expect(after.headersForSpan(0)).toEqual(['group', 'b'])
  expect(after.headersForSpan(1)).toEqual([])
})

test('invalid spans cannot make header mapping loop indefinitely', () => {
  const map = buildHeaderAssociations([[{ id: 'first', colSpan: Infinity }, { id: 'second', rowSpan: NaN }]])
  expect(map.columnHeaders).toEqual([['first'], ['second']])
  expect(map.headersForSpan(0, Infinity)).toEqual(['first'])
  expect(buildHeaderAssociations([[{ id: 'wide', colSpan: Number.MAX_VALUE }]]).columnHeaders).toHaveLength(1000)
})
