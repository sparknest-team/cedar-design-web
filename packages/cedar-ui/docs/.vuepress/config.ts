import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import hopeTheme from './theme'
import { codeBlockPlugin } from './plugin-code-block/src/node'
// import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { CedarResolver, CedarImport } from '../../src/resolver'

const projRoot = path.resolve(__dirname, '../../')
export default defineUserConfig({
  title: 'Cedar Design Web',
  description: 'Cedar Design Web',
  base: (process.env.FX_BASE || '/') as any,
  port: 9991,
  // debug: true,
  theme: hopeTheme,
  pagePatterns: ['../*.md', '**/*.md', '!.vuepress', '!node_modules', '../src/**/*.md'],
  markdown: {},
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  plugins: [
    codeBlockPlugin,
    shikiPlugin({
      themes: {
        light: 'min-light',
        dark: 'nord',
      },
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      root: path.resolve(projRoot, 'docs/.vuepress/.temp/vite-root'),
      configFile: false,
      plugins: [
        // @ts-ignore
        vueJsx(),
        components({
          resolvers: [
            CedarResolver({
              importStyle: false,
            })
          ],
        }),
        AutoImport({
          resolvers: [
            CedarImport({
              importStyle: false
            })
          ],
          eslintrc: {
            enabled: true,
          },
          dts: '../../auto-imports.d.ts',
        })
      ],
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['legacy-js-api', 'if-function'],
          },
        },
      },
      resolve: {
        alias: [
          {
            find: /^@cedar\/ui$/,
            replacement: path.resolve(projRoot, 'src/index.ts'),
          }
        ],
      },
    },
  }),
})
