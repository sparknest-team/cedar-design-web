import assert from 'node:assert/strict'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { generateLibraryEntry } from '../src/generateLibraryEntry.mjs'

test('includes plugins declared with an install arrow property', async () => {
  const root = await mkdtemp(join(tmpdir(), 'cedar-library-entry-'))

  try {
    await mkdir(join(root, 'src', 'message'), { recursive: true })
    await writeFile(join(root, 'package.json'), '{"version":"1.0.0"}')
    await writeFile(
      join(root, 'src', 'message', 'index.ts'),
      [
        'const Message = {',
        '  install: (app: App) => app,',
        '}',
        'export default Message',
      ].join('\n'),
    )

    await generateLibraryEntry({ root })

    const entry = await readFile(join(root, 'src', 'cedar-vue.ts'), 'utf8')
    assert.match(entry, /import Message from '.\/message'/)
    assert.match(entry, /Message: Message as Plugin/)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})
