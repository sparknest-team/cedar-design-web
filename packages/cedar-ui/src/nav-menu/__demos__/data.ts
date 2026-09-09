import { h } from 'vue'
import { IconApps } from '@cedarjs/icons-vue/icon-apps'
import type { NavMenuOption } from '..'
export const options: NavMenuOption[] = [
  { key: 0, label: '首页', icon: () => h(IconApps) },
  { key: 'products', label: '产品服务', icon: () => h(IconApps), children: [
    { key: 'cloud', label: '云服务器' }, { key: 'storage', label: '对象存储' },
    { key: 'database', label: '数据库', disabled: true },
    { key: 'advanced', label: '高级服务', children: [{ key: 'compute', label: '弹性计算' }] },
  ] },
  { key: 'solutions', label: '解决方案', children: [{ key: 'enterprise', label: '企业服务' }, { key: 'retail', label: '智慧零售' }] },
  { key: 'about', label: '关于我们', extra: 'New' },
]
