import { StyleProvider, Themes } from '@cedar-design/ui'

export type CedarDocsTheme = 'lightTheme' | 'darkTheme'

const STORAGE_KEY = 'CEDAR_DOCS_THEME'
const THEME_NAMES: readonly CedarDocsTheme[] = [
  'lightTheme',
  'darkTheme',
]

const themeMap = {
  lightTheme: Themes.default.light,
  darkTheme: Themes.default.dark,
} satisfies Record<CedarDocsTheme, typeof Themes.default.light>

function isDocsTheme(value: string | null): value is CedarDocsTheme {
  return value !== null && THEME_NAMES.includes(value as CedarDocsTheme)
}

function isDark(theme: CedarDocsTheme) {
  return theme === 'darkTheme'
}

export function getDocsTheme(): CedarDocsTheme {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isDocsTheme(stored)) return stored
  return document.documentElement.dataset.theme === 'dark' ? 'darkTheme' : 'lightTheme'
}

export function setDocsTheme(theme: CedarDocsTheme, syncColorMode = true) {
  StyleProvider.setStyleVars(themeMap[theme])
  window.localStorage.setItem(STORAGE_KEY, theme)
  document.documentElement.dataset.cedarDocsTheme = theme

  if (syncColorMode) {
    document.documentElement.dataset.theme = isDark(theme) ? 'dark' : 'light'
  }

  window.dispatchEvent(new CustomEvent<CedarDocsTheme>('cedar-docs-theme-change', { detail: theme }))
}

export function themeConfig() {
  setDocsTheme(getDocsTheme())

  const root = document.documentElement
  const observer = new MutationObserver(() => {
    const current = getDocsTheme()
    const wantsDark = root.dataset.theme === 'dark'
    const next: CedarDocsTheme = wantsDark ? 'darkTheme' : 'lightTheme'

    if (next !== current) setDocsTheme(next, false)
  })
  observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}
