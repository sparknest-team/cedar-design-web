import type { StyleVars } from '../../style-provider'

/** 暗色：同步 `html[cedar-theme=dark]`，色阶/语义由 CSS `:root[cedar-theme=dark]` 覆盖 */
const dark: StyleVars = {
  '--c-color-scheme': 'dark',
  '--c-color-body': 'var(--c-color-bg-1)',
  '--c-color-text': 'var(--c-color-text-1)',
}

export default dark
