import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizeSelectionEmptyValueImports, normalizeTypeScript, normalizeVueSyntaxSource } from './normalize-source.mjs'

test('only the exact platform empty-value import is mapped', () => {
  const input = `import { x } from '../../_utils/empty-value'; const text = "from '../../_utils/empty-value'"`
  const actual = normalizeSelectionEmptyValueImports(input)
  assert.equal(actual, `import { x } from '../../utils/empty-value'; const text = "from '../../_utils/empty-value'"`)
  assert.equal(normalizeSelectionEmptyValueImports(input.replace('empty-value\';', 'other-value\';')), input.replace('empty-value\';', 'other-value\';'))
  const vue = `<template><span>from '../../_utils/empty-value'</span></template><script setup>${input}</script>`
  assert.match(normalizeSelectionEmptyValueImports(vue, true), /<span>from '\.\.\/\.\.\/_utils\/empty-value'<\/span>/)
})

test('selection TypeScript comparison ignores braces but retains logic and imports', async () => {
  const original = "import { x } from './one'; if (x) return x + 1"
  const formatted = "import { x } from './one'\nif (x) { return x + 1 }"
  assert.equal(await normalizeTypeScript(original), await normalizeTypeScript(formatted))
  assert.notEqual(await normalizeTypeScript(original), await normalizeTypeScript(formatted.replace('x + 1', 'x - 1')))
  assert.notEqual(await normalizeTypeScript(original), await normalizeTypeScript(formatted.replace('./one', './two')))
  assert.notEqual(await normalizeTypeScript("import './a'; import './b'"), await normalizeTypeScript("import './b'; import './a'"))
  const preserveOrder = source => normalizeTypeScript(source, { sortBoundImports: false })
  assert.notEqual(await preserveOrder("import { a } from './a'; import { b } from './b'; export type T = string"), await preserveOrder("import { b } from './b'; import { a } from './a'; export type T = string"))
  assert.notEqual(await preserveOrder('export type T = string'), await preserveOrder('export type T = number'))
})

test('selection SFC comparison preserves template, strings and event behavior', async () => {
  const source = `<script setup lang="ts">const value = ['a', 'b'].join(' '); if (value) emit('change')</script><template><button @click="value">Save</button></template>`
  const format = source.replace("if (value) emit('change')", "if (value) { emit('change') }")
  assert.equal(await normalizeVueSyntaxSource(source), await normalizeVueSyntaxSource(format))
  assert.notEqual(await normalizeVueSyntaxSource(source), await normalizeVueSyntaxSource(source.replace("join(' ')", "join('')")))
  assert.notEqual(await normalizeVueSyntaxSource(source), await normalizeVueSyntaxSource(source.replace("emit('change')", "emit('clear')")))
  assert.notEqual(await normalizeVueSyntaxSource(source), await normalizeVueSyntaxSource(source.replace('@click="value"', '@keydown="value"')))
  assert.notEqual(await normalizeVueSyntaxSource(source), await normalizeVueSyntaxSource(source.replace('Save', 'Cancel')))
})
