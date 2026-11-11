// @vitest-environment node
import { mkdtemp, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { expect, test } from 'vitest'
import { protectTempWrites } from '../atomic-temp'

test('serializes same-page writes, skips identical writes and leaves complete exports', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'cedar-atomic-temp-test-'))
  try {
    const app = { dir: { temp: (file: string) => join(folder, file) } } as any
    protectTempWrites(app)
    const contents = Array.from({ length: 10 }, (_, index) => `export const data = { path: '/page/', version: ${index} }`)
    await Promise.all(contents.map(content => app.writeTemp('page.js', content)))
    expect(await readFile(join(folder, 'page.js'), 'utf8')).toBe(contents[9])
    const before = await stat(join(folder, 'page.js'))
    await app.writeTemp('page.js', contents[9])
    expect((await stat(join(folder, 'page.js'))).mtimeMs).toBe(before.mtimeMs)
    expect(await readdir(folder)).toEqual(['page.js'])
  } finally { await rm(folder, { recursive: true }) }
})

test('recreates cleaned temp directories and never reuses externally changed file content', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'cedar-atomic-clean-'))
  try {
    const app = { dir: { temp: (file: string) => join(folder, file) } } as any
    protectTempWrites(app)
    await app.writeTemp('pages/page.js', 'export const version = 1')
    await rm(join(folder, 'pages'), { recursive: true })
    await app.writeTemp('pages/page.js', 'export const version = 2')
    expect(await readFile(join(folder, 'pages/page.js'), 'utf8')).toBe('export const version = 2')
    await writeFile(join(folder, 'pages/page.js'), 'export const version = 99')
    await app.writeTemp('pages/page.js', 'export const version = 2')
    expect(await readFile(join(folder, 'pages/page.js'), 'utf8')).toBe('export const version = 2')
    expect(await readdir(join(folder, 'pages'))).toEqual(['page.js'])
  } finally { await rm(folder, { recursive: true, force: true }) }
})
