#!/usr/bin/env node
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { x } from 'tinyexec'
import { generateLibraryEntry } from '../src/generateLibraryEntry.mjs'
import { buildLibrary } from '../src/index.mjs'

const [command, configPath = 'ui-build.config.mjs'] = process.argv.slice(2)

if (command !== 'compile') {
  console.error('Usage: cedar-cli compile [config]')
  process.exitCode = 1
} else {
  process.env.NODE_ENV = 'production'
  const configUrl = pathToFileURL(resolve(configPath))
  const { default: config } = await import(configUrl.href)
  await generateLibraryEntry({ root: config.root ?? process.cwd() })
  if (config.releaseCheck) {
    await x('tsc', ['--runExternalCode', '-p', config.releaseCheck], {
      nodeOptions: { cwd: config.root, stdio: 'inherit' },
      throwOnError: true,
    })
  }
  await buildLibrary(config)
}
