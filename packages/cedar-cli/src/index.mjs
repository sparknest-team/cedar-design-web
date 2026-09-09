import { buildLibrary as buildLibraryBase } from '@loca/ui-build'

export { defineConfig } from '@loca/ui-build'
export { generateLibraryEntry } from './generateLibraryEntry.mjs'
export * from './release.mjs'

export async function buildLibrary(config) {
  await buildLibraryBase(config)
}
