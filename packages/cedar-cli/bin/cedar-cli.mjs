#!/usr/bin/env node

import { resolve } from 'node:path'
import { buildLibrary } from '@loca/ui-build'

const [command, configPath = 'ui-build.config.mjs'] = process.argv.slice(2)

if (command !== 'compile') {
  console.error('Usage: cedar-cli compile [config]')
  process.exitCode = 1
} else {
  const configUrl = new URL(`file://${resolve(process.cwd(), configPath)}`)
  const configModule = await import(configUrl.href)
  await buildLibrary(configModule.default)
}
