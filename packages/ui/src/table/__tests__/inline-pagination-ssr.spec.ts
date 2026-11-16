import { createSSRApp, h, nextTick } from 'vue'
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
