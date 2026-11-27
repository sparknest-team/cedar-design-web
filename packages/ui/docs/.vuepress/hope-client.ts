import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'

/** Resolve the custom client from Hope's exports instead of its old lib layout. */
export function getHopeClientDir() {
  const require = createRequire(import.meta.url)
  const manifest = require.resolve('vuepress-theme-hope/package.json')
  const pkg = JSON.parse(readFileSync(manifest, 'utf8'))
  const client = pkg.exports['./client']['hope-custom'].default
  return dirname(resolve(dirname(manifest), client))
}
