const labels: Record<string, string> = {
  '最佳实践': 'Best practices', '卡片页面': 'Card page', '列表页面': 'List page', '详情页面': 'Detail page',
  '原子化 CSS': 'Atomic CSS', '常用写法': 'Common patterns', 'Utility 规范': 'Utility guidelines',
  'Design Token 与 CSS 变量分层': 'Design tokens and CSS variable layers',
  '开发指南': 'Guide', '跨端复用标记说明': 'Cross-platform reuse', '快速上手': 'Quick start',
  '国际化': 'Internationalization', '更新日志': 'Changelog', '样式': 'Styles', '主题定制': 'Theming',
  '通用': 'General', '通用组件': 'General', '布局': 'Layout', '导航': 'Navigation',
  '数据输入': 'Data entry', '数据展示': 'Data display', '反馈': 'Feedback',
  '指令': 'Directives', '其他': 'Other', '指令与其它': 'Directives and utilities',
  '色板 Palette': 'Palette', '颜色 Color': 'Color', '组件': 'Components',
}
export function translateNavigation(items: any): any {
  if (Array.isArray(items)) return items.map(translateNavigation)
  if (typeof items === 'string') return items.startsWith('/') ? `/en${items}` : items
  if (!items || typeof items !== 'object') return items
  const result = { ...items }
  if (result.text) {
    const raw = result.text.replace(/ \[.*?\]$/, '')
    const status = result.text.match(/\[(.*?)\]/)?.[1]
    const statuses: Record<string, string> = { '已同源': 'Shared', '逻辑同源': 'Shared logic', '逻辑待同源': 'Logic pending', '待适配': 'Pending', '独立': 'Independent' }
    result.text = labels[raw] ?? raw.match(/[A-Za-z][A-Za-z0-9 /-]*/)?.[0]?.trim() ?? raw
    if (status) result.text += ` [${statuses[status] ?? status}]`
  }
  if (result.link?.startsWith('/')) result.link = `/en${result.link}`
  if (result.children) result.children = translateNavigation(result.children)
  return result
}
