import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NavbarConfig } from '@vuepress/theme-default'

// Read from package.json so the navbar always shows the version that was actually published.
//
// ⚠️ 不能用 `readFileSync(new URL('../../../../package.json', import.meta.url))`：
// 在 vite/vitest（尤其 @vitest-environment jsdom）里 import.meta.url 不一定是
// `file:` scheme，readFileSync 会抛 ERR_INVALID_URL_SCHEME（The URL must be of scheme file）。
// 所以先判断 scheme，再退回 cwd 相对路径兜底。
function readPackageVersion(): string {
  const candidates: string[] = []
  const selfUrl = typeof import.meta.url === 'string' ? import.meta.url : ''
  if (selfUrl.startsWith('file:')) {
    candidates.push(fileURLToPath(new URL('../../../../package.json', selfUrl)))
  }
  // pnpm --filter 的执行 cwd 就是 packages/ui，因此这两条兜底在 CI 与本地都成立
  candidates.push(join(process.cwd(), 'package.json'), join(process.cwd(), '../../package.json'))

  for (const file of candidates) {
    try {
      const parsed = JSON.parse(readFileSync(file, 'utf8')) as { version?: unknown }
      if (typeof parsed.version === 'string' && parsed.version) return parsed.version
    } catch {
      // 换下一个候选路径
    }
  }
  return '0.0.0'
}

const version = readPackageVersion()

export const zhNavBar: NavbarConfig = [
  { text: '开始使用', link: '/guide/quickstart/', activeMatch: '^/(?:en/)?(?:guide/(?!ai/|mcp/|solutions/|skills/|tools/|llms/)|themes/|changelog/)' },
  { text: '组件', link: '/components/button/', activeMatch: '^/(?:en/)?(?:components/|practices/(?:utility-spec|accessibility-spec|component-spec|token-spec|ai-collaboration))' },
  { text: '特色与场景', link: '/showcase/', activeMatch: '^/(?:en/)?(?:showcase/|practices/(?:$|dashboard/|list/|card/|detail/|form/|result/|description/))' },
  { text: 'AI 与工具', link: '/guide/ai/', activeMatch: '^/(?:en/)?guide/(?:ai|mcp|solutions|skills|tools|llms)/' },
  { text: `v${version}`, link: '/changelog/' },
]
