import { createHash } from 'node:crypto'
import type { App } from '@vuepress/core'
import type { Plugin } from 'vite'
import type { CodeSource } from '../../shared'

const stores = new WeakMap<App, Map<string, { id: string; json: string }>>()
function sources(app: App) {
  let store = stores.get(app)
  if (!store) stores.set(app, store = new Map())
  return store
}

export function registerSource(app: App, key: string, source: CodeSource) {
  const json = JSON.stringify(source)
  const id = createHash('sha256').update(json).digest('hex')
  // Replace a file's old version during HMR rather than retaining every edit.
  sources(app).set(key, { id, json })
  return `${app.options.base}__demo-sources/${id}.json`
}

export function sourceAssetsPlugin(app: App): Plugin {
  let ssr = false
  return {
    name: 'cedar-demo-source-assets',
    configResolved(config) { ssr = !!config.build.ssr },
    configureServer(server) {
      server.middlewares.use(`${app.options.base}__demo-sources/`, (request, response) => {
        const id = request.url?.split('?')[0]?.match(/^\/?([a-f0-9]{64})\.json$/)?.[1]
        const source = id && [...sources(app).values()].find(item => item.id === id)
        if (!source) { response.statusCode = 404; response.end(); return }
        response.setHeader('Content-Type', 'application/json; charset=utf-8')
        response.setHeader('Cache-Control', 'no-cache')
        response.end(source.json)
      })
    },
    generateBundle() {
      if (ssr) return
      const emitted = new Set<string>()
      for (const { id, json } of sources(app).values()) {
        if (emitted.has(id)) continue
        emitted.add(id)
        this.emitFile({ type: 'asset', fileName: `__demo-sources/${id}.json`, source: json })
      }
    },
  }
}
