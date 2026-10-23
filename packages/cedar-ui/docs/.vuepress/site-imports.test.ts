import { expect, test } from 'vitest'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import { createSiteImportPlugin, createSiteResolver, readSiteExports } from './site-imports'

const sourceDir = fileURLToPath(new URL('../../src', import.meta.url))
test('routes components and image preview services to public family entries', () => {
  const modules = readSiteExports(sourceDir)
  expect(modules.get('_ImageComponent')).toBe(`${sourceDir}/image`)
  expect(modules.get('previewImage')).toBe(`${sourceDir}/image`)
  expect(modules.get('_TableColumnComponent')).toBe(`${sourceDir}/table`)
  const resolvers = createSiteResolver(sourceDir)
  const resolved = resolvers.map(resolver => resolver.resolve('CImage')).find(Boolean)
  expect(resolved?.from).toBe(`${sourceDir}/image`)
  const names = JSON.parse(readFileSync(`${sourceDir}/../../cedar-resolver/src/component-names.json`, 'utf8')) as string[]
  expect(names.filter(name => !modules.has(`_${name}Component`))).toEqual([])
})
test('preserves aliases and splits mixed demo services without entering the runtime barrel', () => {
  const plugin = createSiteImportPlugin(sourceDir)
  const transform = plugin.transform as Function
  const result = transform("import { Message, imagePreview as openPreview } from '@cedarjs/ui';", 'demo.vue')
  expect(result.code).toContain(`from "${sourceDir}/message"`)
  expect(result.code).toContain(`{ imagePreview as openPreview } from "${sourceDir}/image"`)
  expect(result.code).not.toContain('@cedarjs/ui')
  expect(transform("import type { ImageProps } from '@cedarjs/ui';", 'demo.vue')).toBeUndefined()
})
