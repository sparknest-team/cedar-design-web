import vueJsx from '@vitejs/plugin-vue-jsx'
import { browserTargets } from '@cedar-design/cli-vue'
import path from 'path'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import hopeTheme from './theme'
import { localizedPages } from './i18n/pages'
import { codeBlockPlugin } from './plugin-code-block/src/node'
// import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import type { Plugin } from 'vite'
import { CedarStyleImports } from '@cedar-design/resolver-vue'
import { createSiteImportPlugin, createSiteResolver, getSiteComponentExcludes, readSiteExports } from './site-imports'
import { acquireDocsDevLock } from './dev-lock'
import { atomicTempPlugin } from './atomic-temp'
import { docsDevDependencies } from './dev-dependencies'
import { bundleThemeStyles } from './theme-styles'
import { bundleThemeClient } from './theme-client'
import { flattenStyleImports } from './style-imports'

const projRoot = path.resolve(__dirname, '../../')
const siteExports = readSiteExports(path.resolve(projRoot, 'src'))
if (process.argv.includes('dev')) acquireDocsDevLock(projRoot)
const docsTemp = path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '.temp-build' : '.temp')


function uploadMockPlugin(): Plugin {
  return {
    name: 'cedar-upload-mock',
    configureServer(server) {
      server.middlewares.use('/api/mock/upload', (request, response, next) => {
        if (request.method !== 'POST') {
          next()
          return
        }

        let receivedBytes = 0
        request.on('data', (chunk: Buffer) => {
          receivedBytes += chunk.length
        })
        request.on('end', () => {
          setTimeout(() => {
            response.statusCode = 200
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify({
              code: 0,
              message: 'Upload completed',
              data: {
                url: '/upload-cat.jpg',
                receivedBytes,
              },
            }))
          }, 600)
        })
      })
    },
  }
}

export default defineUserConfig({
  title: 'Cedar Design Web',
  description: 'Cedar Design Web',
  base: (process.env.FX_BASE || '/') as any,
  port: 9991,
  temp: docsTemp,
  // debug: true,
  theme: hopeTheme,
  pagePatterns: ['../README.md', '../CHANGELOG.md', '**/*.md', '!.vuepress', '!node_modules', '../src/**/*.md'],
  markdown: {},
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    '/en/': { lang: 'en-US', title: 'Cedar Design Web', description: 'Vue component library' },
  },
  plugins: [
    atomicTempPlugin(),
    localizedPages(),
    codeBlockPlugin,
    slimsearchPlugin({
      suggestion: false,
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      root: path.resolve(docsTemp, 'vite-root'),
      configFile: false,
      build: { target: [...browserTargets], cssTarget: [...browserTargets] },
      esbuild: {
        jsx: 'preserve',
      },
      ssr: {
        noExternal: ['rrule'],
      },
      plugins: [
        bundleThemeStyles(path.resolve(__dirname, 'hope-styles.scss')),
        bundleThemeClient(),
        uploadMockPlugin(),
        CedarStyleImports(),
        createSiteImportPlugin(path.resolve(projRoot, 'src'), siteExports),
        // @ts-ignore
        vueJsx(),
        components({
          exclude: getSiteComponentExcludes(path.resolve(projRoot, 'src')),
          dts: process.env.CEDAR_DOCS_GENERATE_TYPES === '1',
          resolvers: [
            ...createSiteResolver(path.resolve(projRoot, 'src'), siteExports),
          ],
        }),
        AutoImport({
          exclude: getSiteComponentExcludes(path.resolve(projRoot, 'src')),
          resolvers: [
            ...createSiteResolver(path.resolve(projRoot, 'src'), siteExports),
          ],
          eslintrc: {
            enabled: process.env.CEDAR_DOCS_GENERATE_TYPES === '1',
          },
          dts: process.env.CEDAR_DOCS_GENERATE_TYPES === '1' ? '../../auto-imports.d.ts' : false,
        }),
        flattenStyleImports(path.resolve(projRoot, 'src')),
      ],
      css: {
        // Keep Sass/Less compilation bounded on CI and share one embedded Sass
        // compiler per worker instead of spawning a process for every stylesheet.
        preprocessorMaxWorkers: 2,
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
            silenceDeprecations: ['legacy-js-api', 'if-function'],
          },
          less: {
            javascriptEnabled: true,
          },
        },
      },
      resolve: {
        dedupe: ['vue'],
        alias: [
          { find: /^@cedar-design\/use-vue$/, replacement: path.resolve(projRoot, '../use/src/index.ts') },
          {
            find: '@sparknest/ui-doc-preview-vue',
            replacement: path.resolve(projRoot, '../../../design-ui/packages/ui-doc-preview/src/index.ts'),
          },
          {
            find: /^@cedar-design\/ui-vue$/,
            replacement: path.resolve(projRoot, 'src/index.ts'),
          },
          {
            find: /^@cedar-design\/ui-vue\/(.+)\/style$/,
            replacement: path.resolve(projRoot, 'src/$1/style'),
          },
        ],
      },
      optimizeDeps: {
        include: docsDevDependencies,
        holdUntilCrawlEnd: false,
        // The iframe registry references every demo in the site. Known packages
        // are included above; don't rescan all those unrelated source graphs.
        // Runtime dependency discovery remains enabled for newly added imports.
        entries: [],
        exclude: ['@cedar-design/ui-vue'],
      },
      server: {
        watch: {
          ignored: ['**/ui/es/**', '**/ui/lib/**', '**/ui/umd/**'],
        },
      },
    },
  }),
})
