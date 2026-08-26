import { withInstall } from '../_utils/global-config'
import { formatStyleVars, type StyleVars } from '../_utils/maple/elements'
import _StyleProvider from './style-provider.vue'
import { styleProviderProps } from './props'

export type { StyleVars }

const styleId = 'cedar-style-vars'
const THEME_ATTR = 'cedar-theme'

function removeStyle() {
  if (typeof document === 'undefined') return
  const style = document.head.querySelector(`#${styleId}`)
  if (style) {
    document.head.removeChild(style)
  }
}

function insertStyle(content: string) {
  if (typeof document === 'undefined') return
  const style = document.createElement('style')
  style.id = styleId
  style.innerHTML = content
  document.head.appendChild(style)
}

/** 与 Maple 一致：根据 `--c-color-scheme` 同步 `html[cedar-theme]` */
function syncDocumentTheme(styleVars: StyleVars | null) {
  if (typeof document === 'undefined') return
  if (styleVars == null) {
    document.documentElement.removeAttribute(THEME_ATTR)
    return
  }
  const scheme = styleVars['--c-color-scheme'] ?? styleVars['c-color-scheme']
  if (scheme === 'dark') {
    document.documentElement.setAttribute(THEME_ATTR, 'dark')
  } else if (scheme === 'light') {
    document.documentElement.removeAttribute(THEME_ATTR)
  }
}

function omitUnchangedStyleVars(styleVars: StyleVars): StyleVars {
  if (typeof document === 'undefined' || typeof getComputedStyle === 'undefined') {
    return styleVars
  }

  const computed = getComputedStyle(document.documentElement)
  const changed: StyleVars = {}

  for (const [key, value] of Object.entries(styleVars)) {
    if (computed.getPropertyValue(key).trim() !== String(value).trim()) {
      changed[key] = value
    }
  }

  return changed
}

function StyleProviderFn(styleVars: StyleVars | null) {
  if (styleVars == null) {
    removeStyle()
    syncDocumentTheme(null)
    return
  }

  syncDocumentTheme(styleVars)
  removeStyle()

  const styles = omitUnchangedStyleVars(formatStyleVars(styleVars))
  if (Object.keys(styles).length === 0) {
    return
  }

  const content = Object.entries(styles).reduce((acc, [key, value]) => {
    acc += `${key}:${value};`
    return acc
  }, `:root:root {\n`)

  insertStyle(`${content}\n}`)
}

const StyleProvider = withInstall(_StyleProvider, Object.assign(StyleProviderFn, {
  Component: _StyleProvider,
}))

export type StyleProviderInstance = InstanceType<typeof _StyleProvider>
export type { StyleProviderProps } from './props'
export { StyleProvider, styleProviderProps }
export const _StyleProviderComponent = _StyleProvider

export default StyleProvider
