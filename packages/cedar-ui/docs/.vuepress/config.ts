import vueJsx from '@vitejs/plugin-vue-jsx'
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
import { CedarResolver, CedarStyleImports } from '@cedarjs/resolver'

const projRoot = path.resolve(__dirname, '../../')
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
      esbuild: {
        jsx: 'preserve',
      },
      plugins: [
        uploadMockPlugin(),
        CedarStyleImports(),
        // @ts-ignore
        vueJsx(),
        components({
          dts: process.env.CEDAR_DOCS_GENERATE_TYPES === '1',
          resolvers: [
            CedarResolver(),
          ],
        }),
        AutoImport({
          resolvers: [
            CedarResolver(),
          ],
          eslintrc: {
            enabled: process.env.CEDAR_DOCS_GENERATE_TYPES === '1',
          },
          dts: process.env.CEDAR_DOCS_GENERATE_TYPES === '1' ? '../../auto-imports.d.ts' : false,
        })
      ],
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['legacy-js-api', 'if-function'],
          },
          less: {
            javascriptEnabled: true,
          },
        },
      },
      resolve: {
        alias: [
          {
            find: /^@cedarjs\/ui$/,
            replacement: path.resolve(projRoot, 'src/index.ts'),
          },
          {
            find: /^@cedarjs\/ui\/(.+)\/style$/,
            replacement: path.resolve(projRoot, 'src/$1/style'),
          },
        ],
      },
      optimizeDeps: {
        exclude: ['@cedarjs/ui'],
      },
      server: {
        watch: {
          ignored: ['**/cedar-ui/es/**', '**/cedar-ui/lib/**', '**/cedar-ui/umd/**'],
        },
      },
    },
  }),
})
