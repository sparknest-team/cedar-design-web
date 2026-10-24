import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'
import type { Plugin } from 'vite'

// Only the shell styles listed in this entry are combined. CSS modules and
// optional theme features keep their normal imports. Production is unchanged.
export function bundleThemeStyles(entry: string): Plugin {
  const require = createRequire(import.meta.url)
  const client = resolve(dirname(require.resolve('vuepress-theme-hope/package.json')), 'lib/client')
  const styles = new Set([...readFileSync(entry, 'utf8').matchAll(/@use "cedar-theme\/([^"]+)"/g)]
    .map(match => resolve(client, match[1])))
  return {
    name: 'cedar:theme-styles',
    apply: 'serve',
    enforce: 'pre',
    configResolved(config) {
      const scss = config.css.preprocessorOptions!.scss!
      const additionalData = scss.additionalData
      const importer = {
        canonicalize(url: string) {
          if (!url.startsWith('cedar-theme/')) return null
          const file = resolve(client, url.slice('cedar-theme/'.length))
          return styles.has(file) ? pathToFileURL(file) : null
        },
        async load(url: URL) {
          const file = fileURLToPath(url)
          const raw = readFileSync(file, 'utf8')
          // Sass palette injection normally applies to every entry. Preserve
          // that module scope when the same entries share one compilation.
          const result = typeof additionalData === 'function'
            ? await additionalData(raw, file)
            : (additionalData ?? '') + raw
          return { contents: typeof result === 'string' ? result : result.content, syntax: 'scss' as const, sourceMapUrl: url }
        },
      }
      scss.importers = [...(scss.importers ?? []), importer]
    },
    transform(code, id) {
      const file = id.split('?')[0]
      if (!file.endsWith('.js') || !code.includes('.scss')) return
      const next = code.replace(/^[\t ]*import\s*(["'])([^"']+\.scss)\1\s*;?/gm, (statement, _quote, from) => {
        let target: string
        if (from.startsWith('vuepress-theme-hope/')) {
          try { target = require.resolve(from) } catch { return statement }
        } else target = resolve(dirname(file), from)
        return styles.has(target) ? `import ${JSON.stringify(entry)};` : statement
      })
      if (next !== code) return { code: next, map: null }
    },
  }
}
