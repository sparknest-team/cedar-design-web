import { buildLibrary as buildLibraryBase } from '@sparknest/ui-build'

export { defineConfig, browserTargets } from '@sparknest/ui-build'
export { generateLibraryEntry } from './generateLibraryEntry.mjs'
export * from './release.mjs'

export async function buildLibrary(config) {
  await buildLibraryBase(config)
}
