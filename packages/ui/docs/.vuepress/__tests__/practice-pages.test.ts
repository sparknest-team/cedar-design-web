// @vitest-environment jsdom
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { expect, test, vi } from 'vitest'
import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc'
import { createPracticeWorkspace, projectError, usePracticeData } from '../../practices/__demos__/shared/usePracticeData.js'
import { zhSideBar, enSideBar, componentSideBar } from '../configs/sidebar'
import { zhNavBar } from '../configs/navbar/zh'
const modes = ['dashboard', 'list', 'card', 'detail', 'form', 'result']

test('project data remains consistent across filtering, creation, selection and reset', () => {
  const data = usePracticeData(createPracticeWorkspace())
  expect(data.pageRows.value).toHaveLength(4)
  data.current.value = 2
  expect(data.pageRows.value[0].key).toBe('P-1005')
  data.query.value.keyword = '设计'
  data.search()
  expect(data.current.value).toBe(1)
  expect(data.filtered.value).toHaveLength(2)
  data.query.value.keyword = '没有这个项目'
  data.search()
  expect(data.filtered.value).toHaveLength(0)
  data.clear()
  data.startCreate()
  data.draft.value.name = '新项目'
  data.create({ errors: { owner: '必填' } })
  expect(data.rows.value).toHaveLength(6)
  data.draft.value.owner = '测试团队'
  data.create({})
  expect(data.rows.value).toHaveLength(7)
  expect(data.createOpen.value).toBe(false)
  data.draft.value.name = '未提交修改'
  expect(data.rows.value[0].name).toBe('新项目')
  data.selected.value = ['P-1001', 'P-1002']
  data.finishSelected()
  expect(data.done.value).toBe(3)
  expect(data.rows.value.find(row => row.key === 'P-1002')?.progress).toBe(100)
  data.reset()
  expect(data.rows.value).toHaveLength(6)
  expect(data.done.value).toBe(1)
})

test('practice pages use the getting started menu while standards stay in the component menu', () => {
  const zh = zhSideBar as Record<string, unknown>
  const en = enSideBar as Record<string, unknown>
  expect(JSON.stringify(componentSideBar)).not.toContain('"link":"/practices/"')
  expect(JSON.stringify(zh['/practices/'])).toContain('/practices/dashboard/')
  expect(zh['/practices/utility-spec/']).toBe(componentSideBar)
  expect(JSON.stringify(en['/en/practices/'])).toContain('/en/practices/form/')
  const items = zhNavBar as Array<{text: string, activeMatch: string}>
  expect(items.map(item => item.text)).toEqual(['开始使用', '组件', 'AI 与工具'])
  const start = new RegExp(items.find(item => item.text === '开始使用')!.activeMatch)
  const components = new RegExp(items.find(item => item.text === '组件')!.activeMatch)
  for (const prefix of ['', '/en']) {
    for (const slug of modes) {
      expect(start.test(`${prefix}/practices/${slug}/`)).toBe(true)
      expect(components.test(`${prefix}/practices/${slug}/`)).toBe(false)
    }
    expect(components.test(`${prefix}/practices/utility-spec/`)).toBe(true)
  }
})

test('all page UI uses our components and scripts/templates compile on both platforms', () => {
  for (const [root, prefix] of [[resolve('docs/practices/__demos__'), 'c-'], [resolve('../../../maple-design-mobile/packages/ui/docs/practices-examples'), 'mp-']]) {
    for (const file of ['overview.vue', ...modes.map(mode => `${mode}/basic.vue`)]) {
      const filename = resolve(root, file)
      const source = readFileSync(filename, 'utf8')
      const { descriptor, errors } = parse(source, { filename })
      expect(errors).toEqual([])
      const script = compileScript(descriptor, { id: file })
      const compiled = compileTemplate({ source: descriptor.template!.content, filename, id: file, compilerOptions: { bindingMetadata: script.bindings } })
      expect(compiled.errors).toEqual([])
      const tags = [...descriptor.template!.content.matchAll(/<([a-z][\w-]*)\b/g)].map(match => match[1])
      expect(tags.filter(tag => tag !== 'template' && !tag.startsWith(prefix))).toEqual([])
      expect(source).not.toMatch(/from ['"](?:ant-design|@arco-design|tdesign|element-plus)/)
    }
  }
})


test('one workspace connects create, edit, tasks, notes, reversible archive and CSV across pages', () => {
  const workspace = createPracticeWorkspace()
  const list = usePracticeData(workspace)
  const cards = usePracticeData(workspace)
  list.startCreate()
  list.draft.value.name = '=本地测试项目'
  list.draft.value.owner = '测试团队'
  const project = list.create({})!
  expect(cards.projects.value.find(row => row.key === project.key)?.name).toBe('=本地测试项目')
  cards.startEdit(project)
  cards.draft.value.name = '未保存草稿'
  cards.createOpen.value = false
  expect(project.name).toBe('=本地测试项目')
  cards.startEdit(project)
  cards.draft.value.budget = 12000
  cards.create({})
  expect(list.rows.value.find(row => row.key === project.key)?.budget).toBe(12000)
  const row = list.rows.value.find(item => item.key === project.key)!
  workspace.toggleTask(row, row.tasks[0].key, true)
  expect(row.progress).toBe(25)
  expect(row.status).toBe('进行中')
  expect(workspace.note(row, '补充验收计划')).toBe(true)
  expect(workspace.activity.value[0].text).toContain('补充验收计划')
  list.requestArchive([row.key])
  expect(cards.projects.value.some(item => item.key === row.key)).toBe(true)
  list.confirmArchive()
  expect(cards.projects.value.some(item => item.key === row.key)).toBe(false)
  cards.restore(row)
  expect(list.projects.value.some(item => item.key === row.key)).toBe(true)
  expect(list.csv()).toContain("'=本地测试项目")
  workspace.dispose()
})

test('session persistence restores project identity, saved drafts and budget/date validation', () => {
  const entries = new Map()
  const storage = { getItem: key => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value) }
  const first = createPracticeWorkspace(storage)
  const page = usePracticeData(first)
  page.startCreate()
  page.draft.value.name = '刷新后保留'
  page.draft.value.owner = '测试团队'
  first.savedDraft.value = { ...page.draft.value }
  const project = page.create({})!
  const restored = createPracticeWorkspace(storage)
  expect(restored.rows.value.find(row => row.key === project.key)?.name).toBe('刷新后保留')
  expect(restored.savedDraft.value?.name).toBe('刷新后保留')
  expect(projectError({ ...project, budget: -1 })).toContain('预算')
  expect(projectError({ ...project, startDate: '2026-11-02', dueDate: '2026-11-01' })).toContain('截止')
  const next = restored.save({ ...project, name: '另一个项目' })!
  expect(next.key).not.toBe(project.key)
  first.dispose(); restored.dispose()
})


test('the PC page and mobile preview consume storage changes without writing them back in a loop', () => {
  const key = 'practice-preview-sync-test'
  window.sessionStorage.removeItem(key)
  const first = createPracticeWorkspace(window.sessionStorage, key)
  const second = createPracticeWorkspace(window.sessionStorage, key)
  const row = first.save({ ...first.rows.value[0], name: '手机创建的项目' })!
  const snapshot = window.sessionStorage.getItem(key)
  const writes = vi.spyOn(Storage.prototype, 'setItem')
  try {
    window.dispatchEvent(new StorageEvent('storage', { key, newValue: snapshot, storageArea: window.sessionStorage }))
    expect(second.rows.value.find(item => item.key === row.key)?.name).toBe('手机创建的项目')
    expect(writes).not.toHaveBeenCalled()
  } finally { writes.mockRestore(); first.dispose(); second.dispose(); window.sessionStorage.removeItem(key) }
})
