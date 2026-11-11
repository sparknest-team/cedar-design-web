import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, relative, resolve } from 'node:path'

async function walk(root) {
  const entries = await readdir(root, { withFileTypes: true })
  return (await Promise.all(entries.map(async (entry) => {
    const path = resolve(root, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  }))).flat()
}

function getStyleImports(source) {
  return [...source.matchAll(/import\s+['"]([^'"]+)['"]/g)]
    .map((match) => match[1].replace(/\.less$/, '.css'))
}

/**
 * The shared compiler emits each style entry as only `import './index.css'`.
 * Recreate the source entry's complete side-effect graph so on-demand imports
 * also load foundation and styles for components rendered internally.
 */
export async function preserveStyleDependencies({ root, sourceDir = 'src' }) {
  const sourceRoot = resolve(root, sourceDir)
  const entries = (await walk(sourceRoot)).filter((path) =>
    /\/style\/index\.ts$/.test(path.replaceAll('\\', '/')),
  )

  await Promise.all(entries.map(async (entry) => {
    const targetDir = dirname(relative(sourceRoot, entry))
    const imports = getStyleImports(await readFile(entry, 'utf8'))
    const esCode = imports.length
      ? `${imports.map((specifier) => `import '${specifier}'`).join('\n')}\n`
      : 'export {}\n'
    const cjsCode = imports.length
      ? `${imports.map((specifier) => `require('${specifier}')`).join('\n')}\n`
      : "'use strict'\n"

    await Promise.all([
      mkdir(resolve(root, 'es', targetDir), { recursive: true }),
      mkdir(resolve(root, 'lib', targetDir), { recursive: true }),
    ])
    await Promise.all([
      writeFile(resolve(root, 'es', targetDir, 'index.mjs'), esCode),
      writeFile(resolve(root, 'lib', targetDir, 'index.js'), cjsCode),
    ])
  }))

}
