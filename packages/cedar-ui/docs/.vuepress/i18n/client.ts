import { addI18nMessages, useLocale } from '../../../src/locale'
import enUS from '../../../src/locale/lang/en-us'
import zhCN from '../../../src/locale/lang/zh-cn'
import type { Router } from 'vue-router'

export function connectComponentLanguage(router: Router) {
  addI18nMessages({ 'zh-CN': zhCN, 'en-US': enUS })
  const sync = (route: { path: string; query: Record<string, unknown> }) => {
    const language = route.query.language === 'en-US' || route.path.startsWith('/en/') ? 'en-US' : 'zh-CN'
    useLocale(language)
    if (typeof document !== 'undefined') document.documentElement.lang = language
  }
  router.afterEach(sync)
  sync(router.currentRoute.value)
}
