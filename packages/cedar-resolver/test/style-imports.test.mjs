import assert from 'node:assert/strict'
import test from 'node:test'
import { createRequire } from 'node:module'
import { CedarStyleImports } from '../lib/index.js'

const cliRequire = createRequire(new URL('../../cedar-ui/package.json', import.meta.url))
const viteRequire = createRequire(cliRequire.resolve('vite'))
const { parseAst } = await import(viteRequire.resolve('rollup/parseAst'))
const transform = (source, options, id = '/src/demo.js') => CedarStyleImports(options).transform.call({ parse: parseAst }, source, id)

test('explicit functions and aliases add the original export styles', () => {
  const source = "import { Message as notify, Dialog } from '@cedar-design/ui'; notify('hello')"
  const result = transform(source)
  assert(result.code.includes('import "@cedar-design/ui/message/style";'))
  assert(result.code.includes('import "@cedar-design/ui/dialog/style";'))
  assert(result.code.startsWith(source))
})
test('components and internal resolver imports share the same style mapping', () => {
  const result = transform("import { Button, _ButtonComponent, Row, GridItem, ImagePreviewFn } from '@cedar-design/ui'")
  assert.equal(result.code.split('import "@cedar-design/ui/button/style";').length - 1, 1)
  for (const name of ['row', 'grid', 'image']) assert(result.code.includes('@cedar-design/ui/' + name + '/style'))
})
test('is idempotent and does not duplicate existing side-effect imports', () => {
  const result = transform("import { Message } from '@cedar-design/ui'")
  assert.equal(transform(result.code), undefined)
  assert.equal(transform("import { Message } from '@cedar-design/ui'; import '@cedar-design/ui/message/style'"), undefined)
})
test('ignores other packages, namespace imports, comments, strings and styleless exports', () => {
  for (const source of [
    "import { Message } from 'another-library'",
    "import * as Cedar from '@cedar-design/ui'",
    "// import { Message } from '@cedar-design/ui'",
    `const text = "import { Message } from '@cedar-design/ui'"`,
    "import { Context, ThemeProvider, messageProps } from '@cedar-design/ui'",
  ]) assert.equal(transform(source), undefined)
})
test('supports disabling styles and skips non-script requests', () => {
  const source = "import { Message } from '@cedar-design/ui'"
  assert.equal(transform(source, { importStyle: false }), undefined)
  assert.equal(transform(source, {}, '/src/demo.vue?vue&type=style&index=0'), undefined)
  assert.equal(transform(source, {}, '/src/demo.css'), undefined)
})
test('runs after TypeScript erasure without generating styles for type-only imports', async () => {
  const vite = await import(cliRequire.resolve('vite'))
  const { transformWithEsbuild } = vite.default ?? vite
  const { code } = await transformWithEsbuild("import type { MessageOptions } from '@cedar-design/ui'; import { Message as notify } from '@cedar-design/ui'; notify('hello')", '/src/demo.ts', { loader: 'ts' })
  const result = transform(code, {}, '/src/demo.ts')
  assert(result.code.includes('@cedar-design/ui/message/style'))
  assert(!result.code.includes('message-options/style'))
})

test('covers every documented Cedar programmatic API and preview alias', () => {
  for (const [name, style] of [['Message', 'message'], ['Notification', 'notification'], ['Dialog', 'dialog'], ['Drawer', 'drawer'], ['ImagePreviewFn', 'image'], ['previewImage', 'image'], ['imagePreview', 'image']]) {
    const result = transform("import { " + name + " as invoke } from '@cedar-design/ui'; invoke({})")
    assert(result.code.includes('@cedar-design/ui/' + style + '/style'), name)
  }
})

test('Color named imports include the wrapper style entry', () => {
  const result = transform("import { Color, _ColorComponent } from '@cedar-design/ui'")
  assert.equal(result.code.split('import "@cedar-design/ui/color/style";').length - 1, 1)
})
