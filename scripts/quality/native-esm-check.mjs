import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Check the built entry in Node itself: a bundler can hide unresolved ESM subpaths.
const packageRoot = resolve(process.argv[2] ?? 'packages/ui')
const entry = await import(pathToFileURL(resolve(packageRoot, 'es/index.mjs')).href)
assert.equal(entry.cedarEnUS.locale, 'en-US')
assert.equal(entry.cedarZhCN.locale, 'zh-CN')
assert.ok(entry.Date)
console.log('Cedar native ESM entry verified')
