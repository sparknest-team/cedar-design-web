import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { assertTableLayoutContract } from './table-layout-contract.mjs'

const base = new URL('../../artifacts/table-orchestration-refactor/', import.meta.url)
const read = path => JSON.parse(readFileSync(new URL(path, base), 'utf8'))
const capture = stage => Object.fromEntries(['report', 'runtime', 'declarations'].map(name => [name, read(`release-verified/${stage}/${name}.json`)]))

test('summary/virtual extraction retains the published API, types, SSR and measured budgets', () => {
  assertTableLayoutContract(capture('after'), capture('before'))
  assert.equal(read('release-verified/comparison.json').comparison, 'passed')
})

test('both emitted formats retain thirteen summary/virtual markup and callback traces', () => {
  const before = capture('before').runtime
  const after = capture('after').runtime
  for (const format of ['esm', 'cjs']) {
    assert.equal(Object.keys(before[format].orchestration).length, 13)
    assert.deepEqual(after[format].orchestration, before[format].orchestration)
    assert.deepEqual(after[format].orchestration['summary-callback-page'].trace[0].keys, ['b'])
    assert.equal(after[format].orchestration['summary-callback-page'].trace[0].rawIdentity, true)
    assert.ok(!after[format].orchestration['virtual-offscreen'].trace.includes(199))
  }
  const mutated = structuredClone(capture('after'))
  mutated.runtime.esm.orchestration['virtual-offscreen'].trace.push(199)
  assert.throws(() => assertTableLayoutContract(mutated, capture('before')), /runtime API/)
})

test('Core and optional state/client consumer bytes and dependency graphs are unchanged', () => {
  const before = capture('before').report.bundles
  const after = capture('after').report.bundles
  for (const name of Object.keys(before).filter(name => name.startsWith('core'))) {
    assert.deepEqual(after[name], before[name], name)
  }
  for (const name of ['summaryProps', 'virtualProps']) {
    assert.deepEqual(after[name].css, before[name].css)
  }
  for (const feature of ['summary/use-summary-data', 'summary/use-summary-render', 'virtual/row-plan', 'virtual/render-body']) {
    assert.ok(after.full.modules.some(module => module.endsWith(`/features/${feature}.mjs`)), feature)
  }
})

test('paired release comparison keeps the immutable original Table reference', () => {
  const manifest = readFileSync(new URL('original-table/manifest.json', base))
  assert.equal(createHash('sha256').update(manifest).digest('hex'), read('release-verified/comparison.json').originalManifestSha256)
  for (const [path, hash] of Object.entries(JSON.parse(manifest))) {
    assert.equal(createHash('sha256').update(readFileSync(new URL(`original-table/${path}.txt`, base))).digest('hex'), hash, path)
  }
})
