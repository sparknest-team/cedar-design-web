import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { assertTableLayoutContract } from './table-layout-contract.mjs'

const read = (directory, name) => JSON.parse(readFileSync(new URL(`../../artifacts/table-render-refactor/${directory}/${name}.json`, import.meta.url), 'utf8'))
const capture = directory => Object.fromEntries(['report', 'runtime', 'declarations'].map(name => [name, read(directory, name)]))

test('render/feature extraction retains the complete published Table contract', () => {
  assertTableLayoutContract(capture('final-after'), capture('matched-before'))
})

test('Core and state-only consumers retain isolated dependency graphs and measured budgets', () => {
  const { bundles } = read('final-after', 'report')
  for (const [name, value] of Object.entries(bundles).filter(([name]) => name.startsWith('core'))) {
    assert.doesNotMatch(value.modules.join('\n'), /\/es\/(?:trigger|checkbox|radio|pagination|menu|scrollbar|_components\/(?:virtual-list[^/]*|auto-tooltip))\//, name)
    assert.doesNotMatch(value.modules.join('\n'), /\/table\/(?:desktop\/|table\.(?:mjs|js)|table-th\.(?:mjs|js)|table-td\.(?:mjs|js))/, name)
    assert.ok(value.js.gzip < bundles.full.js.gzip / 4, name)
    assert.ok(value.css.gzip < bundles.full.css.gzip / 4, name)
  }
  assert.doesNotMatch(bundles.core.modules.join('\n'), /\/table\/features\//)
  assert.doesNotMatch(bundles.coreFilterState.modules.join('\n'), /\/filter\/(?:client\/|compute\.)/)
  assert.doesNotMatch(bundles.coreSortState.modules.join('\n'), /\/sort\/(?:client\/|compute\.)/)
  assert.match(bundles.coreLocalFilter.modules.join('\n'), /\/filter\/compute\./)
  assert.match(bundles.coreLocalSort.modules.join('\n'), /\/sort\/compute\./)
})

test('published Core exports, SSR and strict consumer checks are recorded for both module formats', () => {
  const runtime = read('final-after', 'core-runtime')
  assert.deepEqual(runtime.esm, runtime.cjs)
  assert.deepEqual(runtime.esm.exports, ['TableCore', '_TableCoreComponent', 'default', 'tableCoreProps'])
  assert.match(runtime.esm.html, /Core Alpha/)
  assert.deepEqual(read('final-after', 'public-consumer'), { strictTypes: true, featureFormats: ['esm', 'cjs'], packageExports: true })
})
