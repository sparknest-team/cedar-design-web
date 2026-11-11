// @vitest-environment node
import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it } from 'vitest'
import Fixture from './fixtures/extra-column-slots-ssr.vue'

describe('Table extra column content slots in SSR', () => {
  for (const mode of ['header', 'cell', 'actions'] as const) {
    for (const split of [false, true]) {
      it(`${mode}, split=${split}`, async () => {
        const html = await renderToString(createSSRApp({ render: () => h(Fixture, { mode, split }) }))
        expect(html).toContain('data-probe')
        expect(html).toContain('>1</span>')
      })
    }
  }
})
