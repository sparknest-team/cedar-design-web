// @vitest-environment node
import { createSSRApp, h, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { expect, it, vi } from 'vitest'

// Vue 3.2 can synchronously read the container during SSR setup.
vi.mock('../../_utils/direction', async (importOriginal) => {
  const original = await importOriginal<typeof import('../../_utils/direction')>()
  return {
    ...original,
    useDirection: (getElement: () => unknown) => {
      getElement()
      return { dir: ref('ltr') }
    },
  }
})

import Table from '../table'

it('renders before the table container and split state are initialized', async () => {
  const app = createSSRApp({
    render: () => h(Table, {
      columns: [{ title: 'Name', dataIndex: 'name' }],
      data: [{ key: 1, name: 'Alpha' }],
      pagination: false,
    }),
  })
  expect(await renderToString(app)).toContain('Alpha')
})
