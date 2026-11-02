import { defineComponent, h, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import Manager from '../TableColumnManager.vue'
import Transfer from '../../transfer'
import { useTableColumnManager } from '../use-table-column-manager'
import type { ColumnCatalog, ColumnDefinition } from '../types'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach(owner => owner.unmount()))
function deferred<T>() { let resolve!: (value: T) => void; const promise = new Promise<T>(done => { resolve = done }); return { promise, resolve } }
const entry = (key: string) => ({ dataIndex: key, title: key })
test('an older catalog cannot unlock or overwrite a newer catalog request', async () => {
  const first = deferred<ColumnCatalog>(), second = deferred<ColumnCatalog>()
  const load = vi.fn().mockReturnValueOnce(first.promise).mockReturnValueOnce(second.promise)
  const owner = mount(Manager, { props: { inline: true, loadOptions: load } }); owners.push(owner)
  const next = (owner.vm as any).loadCatalog()
  first.resolve([entry('old')]); await flushPromises()
  expect(owner.findComponent(Transfer).props('disabled')).toBe(true)
  second.resolve([entry('new')]); await next; await nextTick()
  expect(owner.findComponent(Transfer).props('disabled')).toBe(false)
  expect(owner.findComponent(Transfer).props('data').map((item: any) => item.value)).toEqual(['new'])
})
test('catalog and search pending ownership remain independent', async () => {
  const catalog = deferred<ColumnCatalog>(), search = deferred<void>()
  const owner = mount(Manager, { props: { inline: true, loadOptions: () => catalog.promise, remoteSearch: () => search.promise } }); owners.push(owner)
  owner.findComponent(Transfer).vm.$emit('search', 'keyword', 'source')
  catalog.resolve([entry('catalog')]); await flushPromises()
  expect(owner.findComponent(Transfer).props('disabled')).toBe(true)
  search.resolve(); await flushPromises()
  expect(owner.findComponent(Transfer).props('disabled')).toBe(false)
})
function harness() {
  const searches: ReturnType<typeof deferred<{ items: ColumnDefinition[] }>>[] = []
  const resolutions: ReturnType<typeof deferred<ColumnDefinition[]>>[] = []
  let manager!: ReturnType<typeof useTableColumnManager>
  const owner = mount(defineComponent({ setup() { manager = useTableColumnManager({ defaultColumns: [], columnSource: {
    search: () => { const task = deferred<{ items: ColumnDefinition[] }>(); searches.push(task); return task.promise },
    resolve: () => { const task = deferred<ColumnDefinition[]>(); resolutions.push(task); return task.promise },
  } }); return () => h('div') } })); owners.push(owner)
  return { manager, owner, searches, resolutions }
}
test('loadOptions and remote search share latest catalog ownership in the hook', async () => {
  const f = harness(), old = f.manager.managerProps.value.loadOptions!(), next = f.manager.managerProps.value.remoteSearch!('new')
  f.searches[1].resolve({ items: [entry('new')] }); await next
  f.searches[0].resolve({ items: [entry('old')] }); await old
  expect(f.manager.managerProps.value.options!.map((item: any) => item.dataIndex)).toEqual(['new'])
})
test('old restore resolution cannot replace a newer restored state', async () => {
  const f = harness(), old = f.manager.restore({ version: 2, items: [{ dataIndex: 'old' }] }), next = f.manager.restore({ version: 2, items: [{ dataIndex: 'new' }] })
  f.resolutions[1].resolve([entry('new')]); await next
  f.resolutions[0].resolve([entry('old')]); await old
  expect(f.manager.columns.value.map(item => item.dataIndex)).toEqual(['new'])
})
test('unmount invalidates pending catalog and restore results', async () => {
  const f = harness(), search = f.manager.managerProps.value.remoteSearch!('gone'), restore = f.manager.restore({ version: 2, items: [{ dataIndex: 'gone' }] })
  f.owner.unmount(); owners.splice(owners.indexOf(f.owner), 1)
  f.searches[0].resolve({ items: [entry('gone')] }); f.resolutions[0].resolve([entry('gone')]); await search; await restore
  expect(f.manager.columns.value).toEqual([])
  expect(f.manager.managerProps.value.options).toEqual([])
})

test('public column edits own the state over an older restore result', async () => {
  const f = harness(), old = f.manager.restore({ version: 2, items: [{ dataIndex: 'old' }] })
  f.manager.columns.value.push(entry('local'))
  f.resolutions[0].resolve([entry('old')]); await old
  expect(f.manager.columns.value.map(item => item.dataIndex)).toEqual(['local'])
})
test('bound component catalog updates do not create another automatic load', async () => {
  const tasks: ReturnType<typeof deferred<{ items: ColumnDefinition[] }>>[] = []
  let manager!: ReturnType<typeof useTableColumnManager>
  const owner = mount(defineComponent({ setup() {
    manager = useTableColumnManager({ defaultColumns: [], columnSource: {
      search: () => { const task = deferred<{ items: ColumnDefinition[] }>(); tasks.push(task); return task.promise },
      resolve: async () => [],
    } })
    return () => h(Manager, { ...manager.managerProps.value, inline: true })
  } })); owners.push(owner)
  const load = manager.managerProps.value.loadOptions
  tasks[0].resolve({ items: [entry('only')] }); await flushPromises()
  expect(tasks).toHaveLength(1)
  expect(manager.managerProps.value.loadOptions).toBe(load)
  expect(owner.findComponent(Transfer).props('data').map((item: any) => item.value)).toEqual(['only'])
})

test('rejected old loads cannot unlock current work and the current error remains observable', async () => {
  const reported = vi.fn()
  let rejectFirst!: (error: Error) => void, rejectSecond!: (error: Error) => void
  const a = new Promise<ColumnCatalog>((_, reject) => { rejectFirst = reject })
  const b = new Promise<ColumnCatalog>((_, reject) => { rejectSecond = reject })
  const load = vi.fn().mockReturnValueOnce(a).mockReturnValueOnce(b)
  const owner = mount(Manager, { props: { inline: true, loadOptions: load }, global: { config: { errorHandler: reported } } }); owners.push(owner)
  const result = (owner.vm as any).loadCatalog().catch((error: Error) => error)
  const oldCause = new Error('old load'), cause = new Error('current load')
  rejectFirst(oldCause); await flushPromises()
  expect(reported.mock.calls[0][0]).toBe(oldCause)
  expect(owner.findComponent(Transfer).props('disabled')).toBe(true)
  rejectSecond(cause); expect(await result).toBe(cause); await nextTick()
  expect(owner.findComponent(Transfer).props('disabled')).toBe(false)
})
test('unmount prevents a catalog result or retained method from changing disposed state', async () => {
  const task = deferred<ColumnCatalog>(), load = vi.fn(() => task.promise)
  const owner = mount(Manager, { props: { inline: true, loadOptions: load, modelValue: [{ dataIndex: 'x' }] } }); owners.push(owner)
  const getResult = (owner.vm as any).getResult, refresh = (owner.vm as any).loadCatalog
  const before = getResult()
  owner.unmount(); owners.splice(owners.indexOf(owner), 1)
  task.resolve([{ dataIndex: 'x', title: 'Late overwritten title' }]); await flushPromises(); await refresh()
  expect(getResult()).toEqual(before)
  expect(load).toHaveBeenCalledTimes(1)
})

test('an equivalent options echo preserves pending ownership while a different catalog supersedes it', async () => {
  const task = deferred<ColumnCatalog>()
  const owner = mount(Manager, { props: { inline: true, options: [entry('initial')], loadOptions: () => task.promise } }); owners.push(owner)
  await owner.setProps({ options: [entry('initial')] })
  expect(owner.findComponent(Transfer).props('disabled')).toBe(true)
  await owner.setProps({ options: [entry('replacement')] })
  expect(owner.findComponent(Transfer).props('disabled')).toBe(false)
  task.resolve([entry('late')]); await flushPromises()
  expect(owner.findComponent(Transfer).props('data').map((item: any) => item.value)).toEqual(['replacement'])
})
