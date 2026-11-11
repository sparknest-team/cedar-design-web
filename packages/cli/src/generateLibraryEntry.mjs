import { existsSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const INDEX_FILES = ['index.ts', 'index.tsx', 'index.js']
const SKIP_DIRS = new Set([
  '_utils',
  '_hooks',
  '_components',
  '__tests__',
  '__quality__',
])
/** Not components: locale/hooks-only / utils / themes / bare SFC wrappers */
const INSTALL_SKIP_DIRS = new Set([
  'locale',
  'utils',
  'context',
  'themes',
  'ellipsis',
  'loading',
])
/** Still export from root index, but never app.use */
const NON_INSTALL_EXPORT_DIRS = new Set(['locale', 'utils', 'context', 'themes', 'ellipsis', 'loading'])

/** export * would clash with another package member; use explicit lines instead */
const EXPLICIT_INDEX_EXPORTS = new Map([
  [
    'color-picker',
    [
      "export { default as ColorPicker, colorPickerProps, _ColorPickerComponent } from './color-picker'",
      "export type { ColorPickerInstance, ColorPickerProps, RGB, HSV } from './color-picker'",
    ],
  ],
])

function pascalCase(dir) {
  return dir
    .split('-')
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join('')
}

function componentName(dir) {
  return pascalCase(dir)
}

function importPath(dir) {
  return `./${dir}`
}

async function hasPublicIndex(dirPath) {
  return INDEX_FILES.some((file) => existsSync(resolve(dirPath, file)))
}

async function getPublicDirs(srcDir) {
  const entries = await readdir(srcDir, { withFileTypes: true })
  const dirs = []

  for (const entry of entries) {
    if (!entry.isDirectory() || SKIP_DIRS.has(entry.name)) {
      continue
    }
    if (await hasPublicIndex(resolve(srcDir, entry.name))) {
      dirs.push(entry.name)
    }
  }

  return dirs.sort()
}

function parseSubcomponentExports(source) {
  const names = new Set()

  for (const match of source.matchAll(/export\s*\{\s*_\w+\s+as\s+(\w+)/g)) {
    names.add(match[1])
  }

  for (const match of source.matchAll(/export\s*\{([^}]+)\}/g)) {
    if (match[0].includes('export type')) {
      continue
    }
    for (const part of match[1].split(',')) {
      const trimmed = part.trim()
      if (!trimmed || trimmed.startsWith('type ')) {
        continue
      }
      const aliasMatch = trimmed.match(/(?:\w+\s+as\s+)?(\w+)$/)
      if (!aliasMatch) {
        continue
      }
      const name = aliasMatch[1]
      if (!/^[A-Z][A-Za-z0-9]*$/.test(name)) {
        continue
      }
      if (name.endsWith('Props') || name.endsWith('Instance')) {
        continue
      }
      names.add(name)
    }
  }

  return [...names]
}

async function readIndexSource(srcDir, dir) {
  for (const file of INDEX_FILES) {
    const path = resolve(srcDir, dir, file)
    if (existsSync(path)) {
      return readFile(path, 'utf8')
    }
  }
  return ''
}

function hasDefaultExport(source) {
  return /^export\s+default\b/m.test(source) || /export\s*\{\s*default\b/m.test(source)
}

function isInstallablePlugin(source) {
  return (
    /withInstall\s*\(/.test(source) ||
    /\binstall\s*\(\s*app\b/.test(source) ||
    /\binstall\s*:\s*\(\s*app\b/.test(source)
  )
}

async function getInstallDirs(srcDir, publicDirs) {
  const dirs = []
  for (const dir of publicDirs) {
    if (INSTALL_SKIP_DIRS.has(dir)) {
      continue
    }
    const source = await readIndexSource(srcDir, dir)
    if (hasDefaultExport(source) && isInstallablePlugin(source)) {
      dirs.push(dir)
    }
  }
  return dirs
}

async function getVersion(packageJsonPath) {
  const pkg = JSON.parse(await readFile(packageJsonPath, 'utf8'))
  return pkg.version ?? '0.0.0'
}

export async function generateLibraryEntry({ root }) {
  const srcDir = resolve(root, 'src')
  const packageJsonPath = resolve(root, 'package.json')
  const publicDirs = await getPublicDirs(srcDir)
  const version = await getVersion(packageJsonPath)

  const installDirs = await getInstallDirs(srcDir, publicDirs)

  const imports = []
  const installNames = []
  const spreadNames = new Set()
  const namedImportsByDir = new Map()
  const indexExports = []

  for (const dir of installDirs) {
    const name = componentName(dir)
    installNames.push(name)
    namedImportsByDir.set(dir, new Set())
  }

  for (const dir of installDirs) {
    const source = await readIndexSource(srcDir, dir)
    const self = componentName(dir)
    for (const exportName of parseSubcomponentExports(source)) {
      if (exportName === self || installNames.includes(exportName)) {
        continue
      }
      spreadNames.add(exportName)
      namedImportsByDir.get(dir)?.add(exportName)
    }
  }

  for (const dir of installDirs) {
    const name = componentName(dir)
    const named = [...(namedImportsByDir.get(dir) ?? [])].sort()
    if (named.length) {
      imports.push(`import ${name}, { ${named.join(', ')} } from '${importPath(dir)}'`)
    } else {
      imports.push(`import ${name} from '${importPath(dir)}'`)
    }
  }

  imports.push(`import { addI18nMessages, useLocale, getLocale } from './locale'`)
  imports.push(`import { useFormItem } from './_hooks/use-form-item'`)

  indexExports.push(`export * from './locale'`)
  indexExports.push(`export * from './ellipsis'`)

  for (const dir of publicDirs) {
    if (dir === 'locale' || dir === 'ellipsis') {
      continue
    }
    const explicit = EXPLICIT_INDEX_EXPORTS.get(dir)
    if (explicit) {
      indexExports.push(...explicit)
      continue
    }
    indexExports.push(`export * from '${importPath(dir)}'`)
  }

  const cedarVue = `import type { App, Plugin } from 'vue'
import type { CedarOptions } from './_utils/types'
${imports.join('\n')}

const components: Record<string, Plugin> = {
${installNames.map((name) => `  ${name}: ${name} as Plugin,`).join('\n')}
}

const install = (app: App, options?: CedarOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

const CedarVue: Record<string, any> = {
  ...components,
${[...spreadNames].sort().map((name) => `  ${name},`).join('\n')}
  install,
  addI18nMessages,
  useLocale,
  getLocale,
  useFormItem,
}

export default CedarVue
`

  const index = `export { default } from './cedar-vue'
export { addI18nMessages, useLocale, getLocale } from './locale'
export { useFormItem } from './_hooks/use-form-item'
export { componentSizes, semanticStatuses } from './_utils/constant'
export type { PopupContainer } from './_utils/popup-container'
export type {
  ComponentSize,
  SemanticStatus,
  MessageType,
  Orientation,
} from './_utils/constant'
${indexExports.join('\n')}
`

  await writeFile(resolve(srcDir, 'cedar-vue.ts'), cedarVue)
  await writeFile(resolve(srcDir, 'index.ts'), index)

  return {
    publicDirs: publicDirs.length,
    installComponents: installNames.length,
    version,
  }
}
