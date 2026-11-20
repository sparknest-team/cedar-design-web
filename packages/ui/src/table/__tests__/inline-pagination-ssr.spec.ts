import { createSSRApp, h, nextTick, shallowRef } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { expect, test } from 'vitest'
import Table from '..'

test('inline pagination does not require an external teleport target during SSR hydration', async () => {
  const props = { columns: [{ title: 'Name', dataIndex: 'name' }], data: [{ key: 1, name: 'A' }], pagination: { pageSize: 1 } }
  const Root = { render: () => h(Table, props) }
  const root = document.createElement('div'); document.body.append(root)
  const app = createSSRApp(Root); const warnings: string[] = []
  app.config.warnHandler = message => warnings.push(message)
  try {
    const context: { teleports?: Record<string, string> } = {}
    root.innerHTML = await renderToString(createSSRApp(Root), context)
    expect(context.teleports?.body).toBeUndefined()
    const pagination = root.querySelector('.c-pagination')
    expect(pagination).toBeTruthy()
    app.mount(root); await nextTick()
    expect(root.querySelector('.c-pagination')).toBe(pagination)
    expect(warnings).toEqual([])
    app.unmount()
  } finally { root.remove() }
})

test.each([false, true])('preserves inline SSR pagination on its first move (detached root: %s)', async detached => {
  const container = shallowRef<HTMLElement>()
  const Root = { render: () => h(Table, {
    columns: [{ title: 'Name', dataIndex: 'name' }],
    data: [{ key: 1, name: 'A' }],
    pagination: { pageSize: 1, container: container.value },
  }, { 'pagination-left': () => h('input', { 'data-draft': '' }) }) }
  const root = document.createElement('div')
  const target = document.createElement('div')
  if (!detached) document.body.append(root)
  document.body.append(target)
  const app = createSSRApp(Root)
  try {
    root.innerHTML = await renderToString(createSSRApp(Root))
    const input = root.querySelector<HTMLInputElement>('[data-draft]')!
    input.value = 'draft'
    app.mount(root)
    await nextTick()
    container.value = target
    await nextTick()
    expect(target.querySelector('[data-draft]')).toBe(input)
    expect(input.value).toBe('draft')
    container.value = undefined
    await nextTick()
    expect(root.querySelector('[data-draft]')).toBe(input)
    expect(target.childElementCount).toBe(0)
  } finally {
    app.unmount()
    target.remove()
    root.remove()
  }
})
