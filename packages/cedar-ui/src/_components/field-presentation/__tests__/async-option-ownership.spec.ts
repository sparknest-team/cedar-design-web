import { flushPromises, mount } from '@vue/test-utils'
import { h, reactive, nextTick } from 'vue'
import { afterEach, expect, test, vi } from 'vitest'
import Form from '../../../form/Form.vue'
import FormItem from '../../../form/FormItem.vue'
import PeopleSelect from '../../../people-select'
import AutoComplete from '../../../auto-complete'
import TreeSelect from '../../../tree-select'
import Tree from '../../../tree'
import EditorPanel from '../EditorPanel.vue'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => { owners.splice(0).forEach((owner) => owner.unmount()); vi.restoreAllMocks() })
function deferred<T = void>() { let resolve!: (value: T) => void; const promise = new Promise<T>((done) => { resolve = done }); return { promise, resolve } }
function formField(Field: any, extra: any, initial: any = 'old', rules?: any) {
  const model = reactive({ value: initial })
  const owner = mount(Form, { attachTo: document.body, props: { model, presentation: 'click' }, slots: { default: () => h(FormItem, { field: 'value', label: 'Field', rules }, () => h(Field, { ...extra, modelValue: model.value, 'onUpdate:modelValue': (value: any) => { model.value = value } })) } })
  owners.push(owner)
  const panel = () => owner.getComponent(EditorPanel)
  const open = async () => { await owner.get('.c-field-presentation__edit').trigger('click'); await flushPromises(); if (panel().get('input').attributes('aria-expanded') !== 'true') { await panel().get('input').trigger('click'); await flushPromises() } }
  return { model, owner, panel, open }
}
const person = (key: string) => ({ user_id: key, worker_user_id: key, display_name: key })
const result = (...keys: string[]) => ({ resultCode: 'success', data: { result_list: keys.map(person) } })
const detail = async (_url: string, { params }: any) => ({ resultCode: 'success', data: { list: [person(params.worker_user_id)] } })
const waitSearch = async () => { await new Promise((resolve) => setTimeout(resolve, 10)); await flushPromises() }

test('PeopleSelect ignores old searches; pending and failed searches cannot select stale or echo-only candidates', async () => {
  const first = deferred<any>(), second = deferred<any>()
  const fetch = { get: detail, post: vi.fn(async (_url: string, { params }: any) => params.name === 'first' ? first.promise : params.name === 'second' ? second.promise : result('old', 'initial')) }
  const f = formField(PeopleSelect, { fetch, searchDelay: 0 })
  await f.open(); const input = f.panel().get('input')
  await input.setValue('first'); await waitSearch()
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  await input.setValue('second'); await waitSearch(); second.resolve(result('fresh')); await flushPromises()
  first.resolve(result('obsolete')); await flushPromises()
  const candidates = [...document.querySelectorAll('[role=option]')].map((node) => node.textContent)
  expect(candidates.some((text) => text?.includes('fresh'))).toBe(true)
  expect(candidates.some((text) => text?.includes('obsolete'))).toBe(false)
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('fresh')
})
test('PeopleSelect reset closes both layers and rejects a late search response', async () => {
  const task = deferred<any>()
  const f = formField(PeopleSelect, { fetch: { get: detail, post: async () => task.promise } })
  await f.open(); f.owner.vm.resetFields(); await flushPromises()
  task.resolve(result('late')); await flushPromises()
  expect(f.owner.findComponent(EditorPanel).exists()).toBe(false)
  expect(f.model.value).toBe('old')
  expect(document.querySelector('[role=option]')).toBeNull()
})
test('AutoComplete candidate replacement retires the old keyboard key and keeps a rejected draft', async () => {
  const props = reactive({ options: ['old', 'stale'], filterOption: false, shouldOpen: () => true })
  const rules = [{ validator: (value: unknown, callback: (message?: string) => void) => callback(value === 'fresh' ? 'Rejected draft' : undefined) }]
  const f = formField(AutoComplete, props, 'old', rules)
  await f.open(); const input = f.panel().get('input')
  props.options = []; await nextTick()
  await input.trigger('keydown', { key: 'ArrowDown' })
  props.options = ['fresh']; await flushPromises()
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.panel().get('[role=alert]').text()).toContain('Rejected draft')
  expect(input.element.value).toBe('fresh')
  props.options = ['fixed']; await input.setValue('fixed'); await input.trigger('keydown', { key: 'Escape' }); await flushPromises()
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('fixed')
})
test('TreeSelect async branch loading is deduplicated and Enter uses newly loaded candidates', async () => {
  const task = deferred()
  const data = reactive<any[]>([{ key: 'parent', title: 'Parent', isLeaf: false }])
  const loadMore = vi.fn(async (node: any) => { await task.promise; node.children = [{ key: 'fresh', title: 'Fresh', isLeaf: true }] })
  const f = formField(TreeSelect, { data, loadMore, selectable: 'leaf', treeProps: { defaultExpandAll: false, animation: true } })
  await f.open(); const input = f.panel().get('input')
  await input.trigger('keydown', { key: 'Enter' }); await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(loadMore).toHaveBeenCalledTimes(1)
  task.resolve(); await flushPromises()
  await input.trigger('keydown', { key: 'ArrowRight' }); await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('fresh')
})
test('TreeSelect reset retires late expansion/checking and asynchronous confirmation', async () => {
  const load = deferred(), save = deferred<void | false>()
  const data = reactive<any[]>([{ key: 'parent', title: 'Parent', isLeaf: false }])
  const loadMore = vi.fn(async (node: any) => { await load.promise; node.children = [{ key: 'fresh', title: 'Fresh', isLeaf: true }] })
  const f = formField(TreeSelect, { data, loadMore, multiple: true, treeCheckable: true, beforeCommit: () => save.promise, treeProps: { defaultExpandAll: false, animation: false } }, ['parent'])
  await f.open(); const tree = f.owner.getComponent(Tree)
  const pendingLoad = (tree.vm as any).treeContext.onLoadMore('parent')
  f.owner.vm.resetFields(); await flushPromises(); load.resolve(); await pendingLoad; await flushPromises()
  expect(tree.emitted('expand')).toBeUndefined()
  expect(tree.emitted('check')).toBeUndefined()
  expect(f.owner.findComponent(EditorPanel).exists()).toBe(false)
  expect(f.model.value).toEqual(['parent'])
  await f.open(); (f.owner.getComponent(Tree).vm as any).toggleCheck('parent', new MouseEvent('click')); await flushPromises(); await f.panel().get('footer button').trigger('click'); await flushPromises()
  expect(f.panel().attributes('aria-busy')).toBe('true')
  await f.panel().get('input').trigger('keydown', { key: 'Escape' }); await flushPromises()
  expect(f.owner.findComponent(EditorPanel).exists()).toBe(true)
  f.owner.vm.resetFields(); await flushPromises(); save.resolve(false); await flushPromises()
  expect(f.owner.findComponent(EditorPanel).exists()).toBe(false)
  expect(f.model.value).toEqual(['parent'])
})

test('TreeSelect cancels pending filter work on reset and keeps numeric zero searchable', async () => {
  const filter = vi.fn((query: string, node: any) => node.title.includes(query))
  const f = formField(TreeSelect, { data: [{ key: 0, title: 'Zero' }, { key: 'old', title: 'Old' }], allowSearch: true, filterTreeNode: filter })
  await f.open(); await f.panel().get('input').setValue('Zero'); await flushPromises()
  f.owner.vm.resetFields(); await flushPromises()
  const calls = filter.mock.calls.length
  await new Promise((resolve) => setTimeout(resolve, 130)); await flushPromises()
  expect(filter).toHaveBeenCalledTimes(calls)
  expect(f.owner.findComponent(EditorPanel).exists()).toBe(false)
  await f.open(); const input = f.panel().get('input')
  await input.setValue('Zero'); await new Promise((resolve) => setTimeout(resolve, 130)); await flushPromises()
  expect([...document.querySelectorAll('[role=treeitem]')].map((node) => node.textContent)).toEqual(['Zero'])
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe(0)
})

test('PeopleSelect a failed latest request leaves no stale selectable candidates while preserving ID echo', async () => {
  const fetch = { get: detail, post: async (_url: string, { params }: any) => { if (params.name) throw new Error('Failed search'); return result('old', 'initial') } }
  const f = formField(PeopleSelect, { fetch, searchDelay: 0 })
  await f.open(); const input = f.panel().get('input')
  await input.setValue('failed'); await waitSearch()
  expect(document.querySelectorAll('[role=option]')).toHaveLength(0)
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  expect(f.owner.findComponent(EditorPanel).exists()).toBe(true)
  await input.trigger('keydown', { key: 'Escape' }); await flushPromises()
  expect(f.panel().text()).toContain('old（old）')
})

test('PeopleSelect retires old candidates during the search debounce window, before the request starts', async () => {
  const task = deferred<any>()
  const fetch = { get: detail, post: vi.fn(async (_url: string, { params }: any) => params.name ? task.promise : result('old', 'stale')) }
  const f = formField(PeopleSelect, { fetch, searchDelay: 80 })
  await f.open(); const input = f.panel().get('input')
  await input.setValue('fresh'); await flushPromises()
  expect(fetch.post).toHaveBeenCalledTimes(1)
  expect(document.querySelectorAll('[role=option]')).toHaveLength(0)
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('old')
  expect(f.owner.findComponent(EditorPanel).exists()).toBe(true)
  await new Promise((resolve) => setTimeout(resolve, 100)); await flushPromises()
  task.resolve(result('fresh')); await flushPromises()
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  await input.trigger('keydown', { key: 'Enter' }); await flushPromises()
  expect(f.model.value).toBe('fresh')
})


test('Tree replacement under the same key owns its loading state and expansion', async () => {
  const oldLoad = deferred(), newLoad = deferred()
  const loadMore = vi.fn((node: any) => node.title === 'Old branch' ? oldLoad.promise : newLoad.promise)
  const owner = mount(Tree, { props: { data: [{ key: 'parent', title: 'Old branch', isLeaf: false }], loadMore, defaultExpandAll: false } })
  owners.push(owner)
  const context = (owner.vm as any).treeContext
  const first = context.onLoadMore('parent')
  await owner.setProps({ data: [{ key: 'parent', title: 'New branch', isLeaf: false }] })
  const second = context.onLoadMore('parent')
  expect(loadMore).toHaveBeenCalledTimes(2)
  oldLoad.resolve(); await first
  expect(context.loadingKeys).toEqual(['parent'])
  expect(owner.emitted('expand')).toBeUndefined()
  newLoad.resolve(); await second
  expect(context.loadingKeys).toEqual([])
  expect(owner.emitted('expand')).toHaveLength(1)
})
