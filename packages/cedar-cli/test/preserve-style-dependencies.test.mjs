import assert from 'node:assert/strict'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { preserveStyleDependencies } from '../src/preserveStyleDependencies.mjs'

test('preserves foundation, component, and local CSS imports in built style entries', async () => {
  const root = await mkdtemp(join(tmpdir(), 'cedar-style-dependencies-'))

  try {
    const styleDir = join(root, 'src', 'transfer', 'style')
    await mkdir(styleDir, { recursive: true })
    await writeFile(
      join(styleDir, 'index.ts'),
      [
        "import '../../style/index.less'",
        "import '../../popover/style'",
        "import './index.less'",
      ].join('\n'),
    )

    await preserveStyleDependencies({ root })

    assert.equal(
      await readFile(join(root, 'es', 'transfer', 'style', 'index.mjs'), 'utf8'),
      [
        "import '../../style/index.css'",
        "import '../../popover/style'",
        "import './index.css'",
        '',
      ].join('\n'),
    )
    assert.equal(
      await readFile(join(root, 'lib', 'transfer', 'style', 'index.js'), 'utf8'),
      [
        "require('../../style/index.css')",
        "require('../../popover/style')",
        "require('./index.css')",
        '',
      ].join('\n'),
    )
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})
