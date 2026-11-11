import { buildLibrary as buildLibraryBase } from '@sparknest/ui-build-vue'

export { defineConfig, browserTargets } from '@sparknest/ui-build-vue'
export { generateLibraryEntry } from './generateLibraryEntry.mjs'
export * from './release.mjs'

export async function buildLibrary(config) {
  await buildLibraryBase(config)
}
