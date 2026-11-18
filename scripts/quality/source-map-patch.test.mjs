import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { mkdtempSync, mkdirSync, copyFileSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
const require = createRequire(import.meta.url)
const root = fileURLToPath(new URL('../../', import.meta.url))

test('source-map-js patch matches the installed version and preserves sorting', () => {
  const manifest = require.resolve('source-map-js/package.json')
  assert.equal(JSON.parse(readFileSync(manifest, 'utf8')).version, '1.2.2')
  const fixture = mkdtempSync(join(tmpdir(), 'source-map-patch-'))
  try {
    const directory = join(fixture, 'node_modules/source-map-js/lib')
    mkdirSync(directory, { recursive: true })
    copyFileSync(join(dirname(manifest), 'lib/quick-sort.js'), join(directory, 'quick-sort.js'))
    const patch = join(root, 'patches/source-map-js@1.2.2.patch')
    // CI postinstall has already applied the patch; normalize only this disposable copy.
    if (spawnSync('git', ['apply', '--check', patch], { cwd: join(fixture, 'node_modules/source-map-js') }).status !== 0) execFileSync('git', ['apply', '--reverse', patch], { cwd: join(fixture, 'node_modules/source-map-js') })
    execFileSync('git', ['apply', '--check', patch], { cwd: join(fixture, 'node_modules/source-map-js') })
    execFileSync('git', ['apply', patch], { cwd: join(fixture, 'node_modules/source-map-js') })
    const { quickSort } = require(join(directory, 'quick-sort.js'))
    const ascending = [4, 1, 3, 1, 2]
    quickSort(ascending, (a, b) => a - b)
    assert.deepEqual(ascending, [1, 1, 2, 3, 4])
    const descending = [1, 3, 2]
    quickSort(descending, (a, b) => b - a)
    assert.deepEqual(descending, [3, 2, 1])
    const offset = [99, 3, 1, 2]
    quickSort(offset, (a, b) => a - b, 1)
    assert.deepEqual(offset, [99, 1, 2, 3])
    assert.match(readFileSync(join(directory, 'quick-sort.js'), 'utf8'), /function cloneSort\(comparator\) \{\s*return SortTemplate\(comparator\);/)
  } finally { rmSync(fixture, { recursive: true, force: true }) }
})

test('published UI and install lifecycle do not depend on patch-package', () => {
  const rootManifest = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
  const uiManifest = JSON.parse(readFileSync(join(root, 'packages/ui/package.json'), 'utf8'))
  for (const manifest of [rootManifest, uiManifest]) {
    for (const field of ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies']) assert.equal(manifest[field]?.['patch-package'], undefined)
    assert.ok(!Object.values(manifest.scripts || {}).some(script => /\bpatch-package\b/.test(script)))
  }
  assert.equal(rootManifest.pnpm.patchedDependencies['source-map-js@1.2.2'], 'patches/source-map-js@1.2.2.patch')
  assert.equal(rootManifest.pnpm.patchedDependencies['@vuepress/plugin-slimsearch@2.0.0-rc.63'], 'patches/@vuepress__plugin-slimsearch@2.0.0-rc.63.patch')
})
