import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { assertTableLayoutContract, canonicalTableDeclaration } from './table-layout-contract.mjs'

const capture = stage => Object.fromEntries(['report', 'runtime', 'declarations'].map(name => [name,
  JSON.parse(readFileSync(new URL(`../../artifacts/table-layout-refactor/${stage}/${name}.json`, import.meta.url), 'utf8')),
]))

test('recorded release consumers retain their contract within the measured size budget', () => {
  assertTableLayoutContract(capture('after'), capture('before'))
})

test('original and extracted layouts are also equivalent with concurrent component/style fixes', () => {
  assertTableLayoutContract(capture('release-after'), capture('release-before'))
})

for (const [name, mutate, message] of [
  ['public runtime', value => { value.runtime.esm.methods.select = 0 }, /runtime API/],
  ['SSR output', value => { value.runtime.esm.html = '<table></table>' }, /runtime API/],
  ['declaration', value => { delete value.declarations['table/index.d.ts'] }, /declaration changed/],
  ['JavaScript budget', value => { value.report.bundles.full.js.gzip *= 2 }, /exceeds measured baseline budget/],
  ['CSS drift', value => { value.report.bundles.full.css.minified++ }, /CSS changed/],
  ['incomparable tooling', value => { value.report.environment.vue = 'different' }, /identical tools/],
  ['different source context', value => { value.report.contextSha256 = 'different' }, /source context changed/],
]) {
  test(`rejects ${name} regressions without updating the reference`, () => {
    const previous = capture('before')
    const current = structuredClone(previous)
    mutate(current)
    assert.throws(() => assertTableLayoutContract(current, previous), message)
  })
}


test('declaration normalization ignores only unique object-property ordering', () => {
  const before = 'declare const value: { first?: string; readonly second: number; method: (value: string) => void };'
  assert.equal(canonicalTableDeclaration(before), canonicalTableDeclaration('declare const value: { method: (value: string) => void; readonly second: number; first?: string };'))
  for (const changed of [before.replace('first?', 'first'), before.replace('readonly ', ''), before.replace('number', 'boolean'), before.replace('(value: string)', '(value: number)')]) {
    assert.notEqual(canonicalTableDeclaration(before), canonicalTableDeclaration(changed))
  }
  assert.notEqual(canonicalTableDeclaration('type Value = [string, number]'), canonicalTableDeclaration('type Value = [number, string]'))
})
