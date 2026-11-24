import { readFileSync } from 'node:fs'
import type { NavbarConfig } from '@vuepress/theme-default'

// Read from package.json so the navbar always shows the version that was actually published.
const { version } = JSON.parse(readFileSync(new URL('../../../../package.json', import.meta.url), 'utf8'))

export const zhNavBar: NavbarConfig = [
  { text: '开始使用', link: '/guide/quickstart/', activeMatch: '^/(?:en/)?(?:guide/(?!ai/|mcp/|solutions/|skills/|tools/|llms/)|themes/|changelog/)' },
  { text: '组件', link: '/components/button/', activeMatch: '^/(?:en/)?(?:components/|practices/(?:utility-spec|accessibility-spec|component-spec|token-spec|ai-collaboration))' },
  { text: '特色与场景', link: '/showcase/', activeMatch: '^/(?:en/)?(?:showcase/|practices/(?:$|dashboard/|list/|card/|detail/|form/|result/|description/))' },
  { text: 'AI 与工具', link: '/guide/ai/', activeMatch: '^/(?:en/)?guide/(?:ai|mcp|solutions|skills|tools|llms)/' },
  { text: `v${version}`, link: '/changelog/' },
]
