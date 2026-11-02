import type { NavbarConfig } from '@vuepress/theme-default'

export const zhNavBar: NavbarConfig = [
  {
    text: '特色与场景',
    link: '/showcase/',
    activeMatch: '^/(?:en/)?(?:showcase/|practices/(?:$|dashboard/|list/|card/|detail/|form/|result/|description/))',
  },
  {
    text: '组件',
    link: '/guide/quickstart/',
    activeMatch: '^/(?:en/)?(?:guide|components|themes|examples|changelog|practices/(?:utility-spec|accessibility-spec|component-spec|token-spec|ai-collaboration))(?:/|\\.html|$)',
  },
]
