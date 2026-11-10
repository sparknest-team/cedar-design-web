// @vitest-environment node
import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it } from 'vitest'
import Fixture from './fixtures/content-slots-ssr.vue'

describe('Table content slots in SSR', () => {
  for (const mode of ['title', 'cell', 'footer', 'empty'] as const) {
    for (const split of [false, true]) {
      it(`${mode}, split=${split}`, async () => {
        const html = await renderToString(createSSRApp({ render: () => h(Fixture, { mode, split }) }))
        expect(html).toContain('data-probe')
        expect(html).toContain('>1</span>')
      })
    }
  }
})
