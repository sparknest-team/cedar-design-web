import { readdir, readFile, rm, writeFile, mkdir } from 'node:fs/promises'
import { basename, dirname, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { optimize } from 'svgo'

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const svgRoot = resolve(packageRoot, 'svg')
const sourceRoot = resolve(packageRoot, 'src')
const check = process.argv.includes('--check')

async function walk(root) {
  const entries = await readdir(root, { withFileTypes: true })
  return (await Promise.all(entries.map(async (entry) => {
    const path = resolve(root, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  }))).flat()
}

function pascalCase(value) {
  return value.split(/[-_\s]+/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('')
}

function kebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase()
}

function iconVue(name, componentName, svg) {
  return `<template>\n  ${svg}\n</template>\n\n<script setup lang="ts">\nimport { computed, type CSSProperties } from 'vue'\nimport { getPrefixCls } from '../_utils/global-config'\nimport { isNumber } from '../_utils/is'\n\ndefineOptions({ name: '${componentName}' })\n\nconst props = withDefaults(defineProps<{\n  size?: string | number\n  strokeWidth?: number\n  strokeLinecap?: 'butt' | 'round' | 'square'\n  strokeLinejoin?: 'bevel' | 'inherit' | 'miter' | 'round'\n  rotate?: number\n  spin?: boolean\n}>(), {\n  strokeWidth: 4,\n  strokeLinecap: 'butt',\n  strokeLinejoin: 'miter',\n})\n\nconst emit = defineEmits<{ click: [event: MouseEvent] }>()\nconst prefixCls = getPrefixCls('icon')\nconst cls = computed(() => [prefixCls, \`\${prefixCls}-${name.slice(5)}\`, { [\`\${prefixCls}-spin\`]: props.spin }])\nconst innerStyle = computed<CSSProperties>(() => ({\n  ...(props.size ? { fontSize: isNumber(props.size) ? \`\${props.size}px\` : props.size } : {}),\n  ...(props.rotate ? { transform: \`rotate(\${props.rotate}deg)\` } : {}),\n}))\n</script>\n`
}

function componentIndex(name, componentName) {
  const exportName = `Icon${componentName}`
  return `import type { App } from 'vue'\nimport type { CedarIconOptions } from '../_utils/types'\nimport _${exportName} from './${name}.vue'\n\nexport const ${exportName} = Object.assign(_${exportName}, {\n  install(app: App, options?: CedarIconOptions) {\n    app.component(options?.iconPrefix ? options.iconPrefix + '${exportName}' : _${exportName}.name, _${exportName})\n  },\n})\n`
}

async function expectedFiles() {
  const svgFiles = (await walk(svgRoot)).filter((path) => path.endsWith('.svg')).sort()
  const seen = new Map()
  const icons = []
  const files = new Map()

  for (const path of svgFiles) {
    // Public icon subpaths must always be lowercase kebab-case. Resolver names
    // come from Vue component names, so preserving camelCase from an SVG file
    // would create an unresolvable path on case-sensitive file systems.
    const name = `icon-${kebabCase(basename(path, '.svg'))}`
    if (seen.has(name)) throw new Error(`Duplicate icon name ${name}:\n${seen.get(name)}\n${path}`)
    seen.set(name, path)
    const componentName = pascalCase(name.slice('icon-'.length))
    const source = await readFile(path, 'utf8')
    const result = optimize(source, {
      path,
      plugins: [
        { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
        'removeStyleElement',
        'removeScriptElement',
        'removeDimensions',
        { name: 'removeAttrs', params: { attrs: ['class', 'style', 'stroke-width', 'stroke-linecap', 'stroke-linejoin'] } },
        { name: 'addAttributesToSVGElement', params: { attributes: [
          { ':class': 'cls' }, { ':style': 'innerStyle' }, { ':stroke-width': 'props.strokeWidth' },
          { ':stroke-linecap': 'props.strokeLinecap' }, { ':stroke-linejoin': 'props.strokeLinejoin' },
          { '@click': 'emit(\'click\', $event)' },
        ] } },
      ],
    })
    icons.push({ name, componentName, category: relative(svgRoot, path).split(sep)[0] })
    files.set(`${name}/${name}.vue`, iconVue(name, `CIcon${componentName}`, result.data))
    files.set(`${name}/index.ts`, componentIndex(name, componentName))
  }

  const imports = icons.map(({ name, componentName }) => `import { Icon${componentName} } from './${name}'`).join('\n')
  const members = icons.map(({ componentName }) => `  Icon${componentName},`).join('\n')
  const exports = icons.map(({ name, componentName }) => `export { Icon${componentName} } from './${name}'`).join('\n')
  files.set('cedar-vue-icon.ts', `import type { App } from 'vue'\nimport type { CedarIconOptions } from './_utils/types'\n${imports}\n\nconst icons = {\n${members}\n}\n\nexport default {\n  ...icons,\n  install(app: App, options?: CedarIconOptions) {\n    Object.values(icons).forEach((icon) => app.use(icon, options))\n  },\n}\n`)
  files.set('index.ts', `export { default } from './cedar-vue-icon'\n${exports}\n`)
  files.set('icons.json', `${JSON.stringify(icons, null, 2)}\n`)
  return files
}

const files = await expectedFiles()
const failures = []
for (const [target, content] of files) {
  const path = resolve(sourceRoot, target)
  if (check) {
    try {
      if (await readFile(path, 'utf8') !== content) failures.push(target)
    } catch {
      failures.push(target)
    }
  } else {
    await mkdir(dirname(path), { recursive: true })
    await writeFile(path, content)
  }
}

const sourceEntries = await readdir(sourceRoot, { withFileTypes: true })
const expectedIconDirs = new Set([...files.keys()].filter((path) => path.startsWith('icon-')).map((path) => path.split('/')[0]))
for (const entry of sourceEntries) {
  if (entry.isDirectory() && entry.name.startsWith('icon-') && !expectedIconDirs.has(entry.name)) {
    if (check) failures.push(entry.name)
    else await rm(resolve(sourceRoot, entry.name), { recursive: true, force: true })
  }
}

if (failures.length) {
  throw new Error(`Generated icon sources are stale:\n${failures.join('\n')}\nRun pnpm generate.`)
}

console.log(`${check ? 'Checked' : 'Generated'} ${files.size} files from ${[...files.keys()].filter((path) => path.endsWith('.vue')).length} SVG icons.`)
