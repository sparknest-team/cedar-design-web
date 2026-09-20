import { buildLibrary as buildLibraryBase } from '@ui-foundation/ui-build'

export { defineConfig } from '@ui-foundation/ui-build'
export { generateLibraryEntry } from './generateLibraryEntry.mjs'
export * from './release.mjs'

export async function buildLibrary(config) {
  await buildLibraryBase(config)
}
