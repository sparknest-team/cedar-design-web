import { expect, test, vi } from 'vitest'
import { codeBlockPlugin } from '../src/node/codeBlockPlugin'
import { prepareClientIframe, prepareVmiComponents } from '../src/node/prepare'

vi.mock('../src/node/prepare', () => ({ prepareClientIframe: vi.fn(), prepareVmiComponents: vi.fn() }))
vi.mock('../src/node/resolve', () => ({
  resolveOptions: () => ({}), resolveHtmlBlock: vi.fn(), resolveScriptSetup: vi.fn(), resolvePageHeaders: vi.fn(),
}))
vi.mock('../src/node/plugins', () => ({ vitePageHMR: vi.fn(), vitePageProxy: vi.fn(), vitePageIframe: vi.fn() }))

test('initialization batches all pages into one map; only dev changes refresh it', async () => {
  for (const isDev of [false, true]) {
    vi.mocked(prepareVmiComponents).mockClear()
    const plugin = codeBlockPlugin() as any
    const app = { env: { isDev }, pages: [] }
    for (let i = 0; i < 100; i++) await plugin.extendsPage({}, app)
    expect(prepareVmiComponents).not.toHaveBeenCalled()
    await plugin.onInitialized(app)
    expect(prepareClientIframe).toHaveBeenCalled()
    expect(prepareVmiComponents).toHaveBeenCalledTimes(1)
    await plugin.extendsPage({}, app)
    expect(prepareVmiComponents).toHaveBeenCalledTimes(isDev ? 2 : 1)
  }
})
