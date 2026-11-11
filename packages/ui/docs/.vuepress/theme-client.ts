import { createRequire } from 'node:module'
import { randomUUID } from 'node:crypto'
import { dirname, basename, resolve } from 'node:path'
import type { Plugin } from 'vite'

// Bundle the immutable theme's presentation code on its first real request.
// Providers/composables, VuePress state, CSS and local UI sources remain native
// modules. The build belongs to one dev server, not to a persistent disk cache.
export function bundleThemeClient(): Plugin {
  const require = createRequire(import.meta.url)
  const client = resolve(dirname(require.resolve('vuepress-theme-hope/package.json')), 'lib/client')
  const entries = ['components/HopeIcon.js', 'layouts/Layout.js', 'layouts/NotFound.js'].map(file => resolve(client, file))
  const generation = randomUUID()
  const entryFile = (id: string) => {
    const file = id.split('?')[0]
    if (entries.includes(file)) return file
    const relative = file.replace(/^(?:vuepress-theme-hope|@theme-hope)\//, '')
    return entries.find(entry => entry === resolve(client, relative))
  }
  const virtual = '\0cedar-theme-client/'
  const publicId = 'virtual:cedar-theme-client/'
  let pending: Promise<Map<string, string>> | undefined
  let inputs = new Set<string>()
  let server: any
  let vueUseDirectory: string | undefined
  const api = { preserveOptimizedImports: true }
  const presentation = (id: string) => id.startsWith(`${client}/`) && id.endsWith('.js')
    && !id.includes('/composables/') && !id.includes('/utils/')
  return {
    name: 'cedar:theme-client', apply: 'serve', enforce: 'pre', api,
    configResolved(config) {
      if (config.optimizeDeps.include?.includes('@vueuse/core')) {
        try { vueUseDirectory = dirname(createRequire(resolve(config.root, 'package.json')).resolve('@vueuse/core')) }
        catch { /* A differently configured root keeps the native dependency. */ }
      }
    },
    // The components plugin generates an absolute VueUse import. Canonicalize
    // only that file and only the exact installed package already optimized by
    // this site; nested versions and authored source imports remain untouched.
    transform(code, id) {
      if (!api.preserveOptimizedImports || !vueUseDirectory
        || !id.split('?')[0].endsWith('/components/config.js')
        || /[?&](?:raw|url)(?:&|$)/.test(id)) return
      const rewritten = code.replace(/(\bfrom\s*)(["'])([^"']+)\2/g, (original, from, quote, specifier) =>
        dirname(specifier) === vueUseDirectory && basename(specifier) === 'index.mjs'
          ? `${from}${quote}@vueuse/core${quote}` : original)
      if (rewritten !== code) return { code: rewritten, map: null }
    },
    configureServer(value) {
      server = value
      server.middlewares.use((request: any, response: any, next: () => void) => {
        const url = request.url || ''
        if (url.includes('cedar-theme-build=') || url.includes('cedar-theme-client/')) {
          const setHeader = response.setHeader
          response.setHeader = function (name: string, content: any) {
            return setHeader.call(this, name, name.toLowerCase() === 'cache-control' ? 'no-cache' : content)
          }
        }
        next()
      })
    },
    resolveId(id) {
      if (id.startsWith(publicId)) return virtual + id.slice(publicId.length)
      if (/[?&](?:raw|url|worker|sharedworker)(?:&|$)/.test(id)) return
      const entry = entryFile(id)
      if (entry && !/[?&]cedar-theme-build=/.test(id)) {
        const query = id.includes('?') ? `${id.slice(id.indexOf('?'))}&` : '?'
        return `${entry}${query}cedar-theme-build=${generation}`
      }
    },
    async load(id) {
      if (/[?&](?:raw|url|worker|sharedworker)(?:&|$)/.test(id)) return
      const file = id.split('?')[0]
      if (!entries.includes(file) && !id.startsWith(virtual)) return
      if (!pending) {
        const context = this
        const requireVite = createRequire(require.resolve('vite'))
        const { build } = requireVite('esbuild')
        pending = build({
          entryPoints: entries, outdir: '/__cedar_theme_bundle__', write: false,
          absWorkingDir: client,
          entryNames: '[name]',
          bundle: true, splitting: true, format: 'esm', platform: 'browser',
          target: 'es2020', sourcemap: 'inline', metafile: true,
          plugins: [{ name: 'theme-native-boundaries', setup(builder: any) {
            builder.onResolve({ filter: /.*/ }, async (args: any) => {
              if (args.kind === 'entry-point') return { path: args.path }
              const found = await context.resolve(args.path, args.importer, { skipSelf: true })
              if (!found) return { path: args.path, external: true }
              if (found.external) return { path: found.id, external: true }
              const target = found.id.split('?')[0]
              return presentation(target) ? { path: target } : { path: found.id, external: true }
            })
          } }],
        }).then((result: any) => {
          inputs = new Set(Object.keys(result.metafile.inputs).map(file => resolve(client, file)))
          for (const file of inputs) context.addWatchFile(file)
          return new Map(result.outputFiles.map((file: any) => [basename(file.path), file.text.replace(
            /(["'])\.\/(chunk-[^"']+\.js)\1/g, (_: string, quote: string, name: string) => `${quote}${publicId}${name}${quote}`,
          )]))
        }).catch((error: unknown) => { pending = undefined; throw error })
      }
      const outputs = await pending
      const name = file.startsWith(virtual) ? file.slice(virtual.length) : basename(file)
      return outputs.get(name)
    },
    handleHotUpdate(context) {
      if (!inputs.has(context.file)) return
      pending = undefined
      // Presentation dependency edits rebuild the same module graph. Source
      // and palette HMR do not invalidate this third-party JS compilation.
      const modules = [...server.moduleGraph.idToModuleMap.values()].filter((module: any) =>
        entries.includes(module.id?.split('?')[0]) || module.id?.startsWith(virtual))
      return modules as any
    },
  }
}
