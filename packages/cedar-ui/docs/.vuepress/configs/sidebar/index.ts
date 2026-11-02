import type { SidebarOptions } from 'vuepress-theme-hope'
import { translateNavigation } from '../../i18n/navigation'
import { zhSideBar } from './zh'

export * from './zh'

export const enSideBar: SidebarOptions = Object.fromEntries(
  Object.entries(zhSideBar).map(([prefix, items]) => [`/en${prefix}`, translateNavigation(items)]),
)
