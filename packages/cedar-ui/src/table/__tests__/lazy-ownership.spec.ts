import { h, KeepAlive, nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import Table from '../table'
import Td from '../table-td'
import { tableInjectionKey } from '../context'
import type { TableData } from '../types'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach(owner => owner.unmount()))
const parent = (name: string) => ({ key: 'same', name })
const child = (name: string) => ({ key: name, name, isLeaf: true })
function table() {
  const jobs: ((children?: TableData[]) => void)[] = []
  const load = vi.fn((_record, done) => { jobs.push(done) })
  const owner = mount(Table, { props: { columns: [{ dataIndex: 'name', title: 'Name' }], data: [parent('Old parent')], loadMore: load, pagination: false, defaultExpandedKeys: ['same'] } })
  owners.push(owner); return { owner, jobs, load }
}
test('same-key replacement may start new work before the old callback arrives', async () => {
  const f = table(); await flushPromises()
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  await f.owner.setProps({ data: [parent('New parent')] })
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(f.load).toHaveBeenCalledTimes(2)
  f.jobs[1]([child('New child')]); await flushPromises()
  f.jobs[0]([child('Old child')]); await flushPromises()
  expect(f.owner.get('tbody').text()).toContain('New child')
  expect(f.owner.get('tbody').text()).not.toContain('Old child')
})
test('node replacement cannot inherit a completed cache only because its key matches', async () => {
  const f = table(); await flushPromises()
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  f.jobs[0]([child('Old cached child')]); await flushPromises()
  expect(f.owner.get('tbody').text()).toContain('Old cached child')
  await f.owner.setProps({ data: [parent('Replacement')] }); await flushPromises()
  expect(f.owner.get('tbody').text()).not.toContain('Old cached child')
})
function cell(errorHandler = vi.fn()) {
  const jobs: ((children?: TableData[]) => void)[] = [], add = vi.fn()
  const context = { loadMore: vi.fn((_record, done) => { jobs.push(done) }), addLazyLoadData: add }
  const record = { key: 'same', raw: parent('Parent'), isLeaf: false }
  const owner = mount(Td, { props: { record, column: { dataIndex: 'name' }, showExpandBtn: true }, global: { config: { errorHandler }, provide: { [tableInjectionKey as symbol]: context } } })
  owners.push(owner); return { owner, jobs, add, context }
}
test('late callbacks after unmount never publish children to the table owner', async () => {
  const f = cell(); await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  f.owner.unmount(); owners.splice(owners.indexOf(f.owner), 1)
  f.jobs[0]([child('Detached child')]); await flushPromises()
  expect(f.add).not.toHaveBeenCalled()
})
test('duplicate clicks and duplicate completions retain a single callback contract', async () => {
  const f = cell(); await f.owner.get('.c-table-cell-inline-icon').trigger('click'); await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(f.context.loadMore).toHaveBeenCalledTimes(1)
  f.jobs[0]([child('First')]); f.jobs[0]([child('Duplicate')]); await flushPromises()
  expect(f.add).toHaveBeenCalledTimes(1)
  expect(f.add.mock.calls[0][0][0].name).toBe('First')
})
test('deactivation invalidates old callbacks even if a new activation has started', async () => {
  const show = ref(true), jobs: ((children?: TableData[]) => void)[] = [], add = vi.fn()
  const context = { loadMore: vi.fn((_record, done) => { jobs.push(done) }), addLazyLoadData: add }
  const record = { key: 'same', raw: parent('Parent'), isLeaf: false }
  const owner = mount({ setup: () => () => h(KeepAlive, null, { default: () => show.value ? h(Td, { record, column: { dataIndex: 'name' }, showExpandBtn: true }) : null }) }, { global: { provide: { [tableInjectionKey as symbol]: context } } }); owners.push(owner)
  await owner.get('.c-table-cell-inline-icon').trigger('click')
  show.value = false; await nextTick(); show.value = true; await nextTick()
  await owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(jobs).toHaveLength(2)
  jobs[0]([child('Old')]); await flushPromises(); expect(add).not.toHaveBeenCalled()
  jobs[1]([child('Current')]); await flushPromises(); expect(add).toHaveBeenCalledTimes(1)
})

test('replacing the loader invalidates a completed node cache and the old pending callback', async () => {
  const f = table(); await flushPromises()
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  f.jobs[0]([child('Old source child')]); await flushPromises()
  const next: ((children?: TableData[]) => void)[] = []
  await f.owner.setProps({ loadMore: vi.fn((_record, done) => next.push(done)) }); await flushPromises()
  expect(f.owner.get('tbody').text()).not.toContain('Old source child')
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  next[0]([child('New source child')]); await flushPromises()
  expect(f.owner.get('tbody').text()).toContain('New source child')
})
test('done without children releases pending and permits a retry', async () => {
  const f = cell(); await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  f.jobs[0](); await flushPromises()
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(f.context.loadMore).toHaveBeenCalledTimes(2)
})
test('a synchronous loader exception reaches Vue and releases pending for retry', async () => {
  const report = vi.fn(), f = cell(report), cause = new Error('lazy loader exception')
  f.context.loadMore.mockImplementationOnce(() => { throw cause })
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(report.mock.calls[0][0]).toBe(cause)
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(f.context.loadMore).toHaveBeenCalledTimes(2)
  f.jobs[0]([child('Retry child')]); await flushPromises()
  expect(f.add).toHaveBeenCalledTimes(1)
})

test('an async loader rejection reaches Vue and releases only its pending callback task', async () => {
  const report = vi.fn(), f = cell(report), cause = new Error('async lazy loader')
  f.context.loadMore.mockImplementationOnce(() => Promise.reject(cause))
  await f.owner.get('.c-table-cell-inline-icon').trigger('click'); await flushPromises()
  expect(report.mock.calls[0][0]).toBe(cause)
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(f.context.loadMore).toHaveBeenCalledTimes(2)
  f.jobs[0]([child('Retried')]); await flushPromises()
  expect(f.add).toHaveBeenCalledTimes(1)
})
test('a fulfilled return Promise does not replace done or publish returned children', async () => {
  const f = cell()
  f.context.loadMore.mockImplementationOnce((_record, done) => { f.jobs.push(done); return Promise.resolve([child('Not a completion')]) })
  await f.owner.get('.c-table-cell-inline-icon').trigger('click'); await flushPromises()
  expect(f.add).not.toHaveBeenCalled()
  await f.owner.get('.c-table-cell-inline-icon').trigger('click')
  expect(f.context.loadMore).toHaveBeenCalledTimes(1)
  f.jobs[0]([child('Callback completion')]); await flushPromises()
  expect(f.add).toHaveBeenCalledTimes(1)
  expect(f.add.mock.calls[0][0][0].name).toBe('Callback completion')
})
