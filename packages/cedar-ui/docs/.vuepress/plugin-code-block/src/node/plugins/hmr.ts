import { handlePageChange as handleVuePressPageChange } from '@vuepress/cli'
import type { App } from '@vuepress/core'
import type { Plugin, HmrContext } from 'vite'

// https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate
export const vitePageHMR = (app: App): Plugin => {
  return {
    name: '@bfehub/vuepress-plugin-code-block:hmr',
    enforce: 'post',
    apply: 'serve',
    async handleHotUpdate(ctx: HmrContext) {
      const paths = new Set<string>()
      for (const module of ctx.modules) {
        for (const importer of module.importers) {
          const tempPath = importer.file
          if (tempPath?.endsWith('.html.vue')) {
            paths.add(tempPath)
          }
        }
      }
      const files = new Set(app.pages
        .filter(page => paths.has(page.componentFilePath) && !(page as any)._PageMapPluginOptions)
        .map(page => page.filePath)
        .filter((file): file is string => !!file))
      for (const file of files) await handleVuePressPageChange(app, file)
    },
  }
}
