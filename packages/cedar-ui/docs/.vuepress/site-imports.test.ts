import { expect, test } from 'vitest'
import { fileURLToPath } from 'node:url'
import { readFileSync, readdirSync } from 'node:fs'
import { createSiteImportPlugin, createSiteResolver, getSiteComponentExcludes, readSiteExports } from './site-imports'

const sourceDir = fileURLToPath(new URL('../../src', import.meta.url))
test('nested documented panels and style examples retain automatic imports without admitting runtime files', () => {
  const excluded = (file: string) => getSiteComponentExcludes(sourceDir).some(rule => rule.test(file))
  for (const demo of ['date/picker/__demos__/basic.vue', 'time/picker/__demos__/panel-behavior.vue', 'style/atomic-css/__demos__/starter.vue']) {
    for (const id of [`${sourceDir}/${demo}`, `/@fs${sourceDir}/${demo}`, `${sourceDir}/${demo}?vue&type=script&lang.ts`]) {
      expect(excluded(id), id).toBe(false)
    }
  }
  expect(excluded(`${sourceDir}/date/picker/DatePicker.vue`)).toBe(true)
  expect(excluded(`${sourceDir}/date/picker/pickers/day-picker.tsx`)).toBe(true)
})
test('keeps internal imports explicit without intercepting Vue HMR', () => {
  const excluded = (file: string) => getSiteComponentExcludes(sourceDir).some(rule => rule.test(file))
  expect(excluded(`${sourceDir}/image/PreviewGroup.vue`)).toBe(true)
  expect(excluded(`${sourceDir}/image/preview-api.ts`)).toBe(true)
  expect(excluded(`${sourceDir}/upload/upload.vue?vue&type=script&lang.ts`)).toBe(true)
  expect(excluded(`/@fs${sourceDir}/upload/upload.vue`)).toBe(true)
  expect(excluded(`${sourceDir}/upload/__demos__/basic.vue`)).toBe(false)
  const plugin = createSiteImportPlugin(sourceDir)
  expect(plugin.handleHotUpdate).toBeUndefined()
  const config = readFileSync(new URL('./config.ts', import.meta.url), 'utf8')
  for (const name of ['components', 'AutoImport']) {
    expect(config).toMatch(new RegExp(`${name}\\(\\{[^}]*exclude: getSiteComponentExcludes\\(`))
  }
})
test('automatic imports exclude every implementation file, including SFC queries and /@fs paths', () => {
  const excluded = (file: string) => getSiteComponentExcludes(sourceDir).some(rule => rule.test(file))
  let count = 0
  function walk(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const file = `${dir}/${entry.name}`
      if (entry.isDirectory()) {
        if (!/^(?:__.*__|example|examples|docs)$/.test(entry.name)) walk(file)
      } else if (/\.(?:vue|[cm]?[jt]sx?)$/.test(entry.name) && !/\.d\.ts$/.test(entry.name)) {
        for (const id of [file, `/@fs${file}`, `${file}?vue&type=script&lang.ts`]) expect(excluded(id), id).toBe(true)
        count++
      }
    }
  }
  walk(sourceDir)
  expect(count).toBeGreaterThan(500)
})
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
  const result = transform("import { Message, imagePreview as openPreview } from '@cedar-design/ui';", 'demo.vue')
  expect(result.code).toContain(`from "${sourceDir}/message"`)
  expect(result.code).toContain(`{ imagePreview as openPreview } from "${sourceDir}/image"`)
  expect(result.code).not.toContain('@cedar-design/ui')
  expect(transform("import type { ImageProps } from '@cedar-design/ui';", 'demo.vue')).toBeUndefined()
})


test('named icon imports use published deep entries while intentional catalog imports stay intact', () => {
  const transform = createSiteImportPlugin(sourceDir).transform as Function
  const result = transform("import { IconClockCircle, IconClose as CloseIcon } from '@cedar-design/icons-vue';", 'input.vue')
  expect(result.code).toContain('from "@cedar-design/icons-vue/icon-clock-circle"')
  expect(result.code).toContain('{ IconClose as CloseIcon } from "@cedar-design/icons-vue/icon-close"')
  expect(transform("import * as Icons from '@cedar-design/icons-vue';", 'catalog.vue')).toBeUndefined()
  expect(transform("import { iconNames } from '@cedar-design/icons-vue';", 'catalog.vue')).toBeUndefined()
})
