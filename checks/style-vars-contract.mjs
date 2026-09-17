import assert from 'node:assert/strict'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const workspace = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const libraries = [
  {
    name: 'Cedar',
    prefix: 'c',
    source: resolve(workspace, 'cedar-design-web/packages/cedar-ui/src'),
  },
  {
    name: 'Maple',
    prefix: 'mp',
    source: resolve(workspace, 'maple-design-mobile/packages/maple-ui/src'),
  },
]

const sourceExtensions = new Set(['.less', '.css', '.scss', '.vue', '.ts', '.tsx'])

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) {
      return ['node_modules', 'dist', 'coverage'].includes(entry.name) ? [] : walk(path)
    }
    const extension = entry.name.slice(entry.name.lastIndexOf('.'))
    return sourceExtensions.has(extension) ? [path] : []
  })
}

function definitions(source, prefix) {
  const pattern = new RegExp(`(--${prefix}-[a-z0-9-]+)\\s*:`, 'g')
  return new Set([...source.matchAll(pattern)].map((match) => match[1]))
}

function references(source, prefix) {
  const pattern = new RegExp(`var\\(\\s*(--${prefix}-sys-[a-z0-9-]+)`, 'g')
  return new Set([...source.matchAll(pattern)].map((match) => match[1]))
}

function normalized(names, prefix) {
  return [...names].map((name) => name.replace(`--${prefix}-`, '--prefix-')).sort()
}

const contracts = libraries.map((library) => {
  const systemFile = resolve(library.source, 'style/theme/system.less')
  const systemSource = readFileSync(systemFile, 'utf8')
  const systemDefinitions = definitions(systemSource, library.prefix)
  assert.ok(systemDefinitions.size > 0, `${library.name}: system token contract is empty`)
  assert.ok(
    [...systemDefinitions].every((name) => name.startsWith(`--${library.prefix}-sys-`)),
    `${library.name}: system.less may only define --${library.prefix}-sys-* variables`,
  )

  const files = walk(library.source)
  const unresolved = new Map()
  for (const file of files) {
    const source = readFileSync(file, 'utf8')
    for (const reference of references(source, library.prefix)) {
      if (!systemDefinitions.has(reference)) {
        const locations = unresolved.get(reference) ?? []
        locations.push(file.replace(`${library.source}/`, ''))
        unresolved.set(reference, locations)
      }
    }
  }
  assert.deepEqual(
    [...unresolved.entries()],
    [],
    `${library.name}: unresolved system token references`,
  )

  const tabsSource = readFileSync(resolve(library.source, 'tabs/style/token.less'), 'utf8')
  const tabsDefinitions = new Set(
    [...definitions(tabsSource, library.prefix)].filter((name) =>
      name.startsWith(`--${library.prefix}-tabs-`),
    ),
  )
  return { ...library, systemDefinitions, tabsDefinitions }
})

const [cedar, maple] = contracts
assert.deepEqual(
  normalized(cedar.systemDefinitions, cedar.prefix),
  normalized(maple.systemDefinitions, maple.prefix),
  'Cedar and Maple system token names differ',
)
assert.deepEqual(
  normalized(cedar.tabsDefinitions, cedar.prefix),
  normalized(maple.tabsDefinitions, maple.prefix),
  'Cedar and Maple Tabs token names differ',
)

console.log(
  `Style variable contract passed: ${cedar.systemDefinitions.size} shared system tokens, ` +
    `${cedar.tabsDefinitions.size} shared Tabs tokens, and no unresolved system references.`,
)
