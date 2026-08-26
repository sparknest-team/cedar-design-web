import type { StyleVars } from '../../style-provider'

/**
 * MD3 暗色示例包：同步 dark DOM + 注入品牌色覆盖。
 * 与 Maple `Themes.md3Dark` 用法对齐。
 */
const md3Dark: StyleVars = {
  '--c-color-scheme': 'dark',
  '--c-color-body': 'var(--c-color-bg-1)',
  '--c-color-text': 'var(--c-color-text-1)',
  '--c-brand-1': '33, 0, 93',
  '--c-brand-2': '56, 30, 114',
  '--c-brand-3': '79, 55, 139',
  '--c-brand-4': '103, 80, 164',
  '--c-brand-5': '154, 130, 219',
  '--c-brand-6': '208, 188, 255',
  '--c-brand-7': '222, 205, 255',
  '--c-brand-8': '234, 221, 255',
  '--c-brand-9': '246, 237, 255',
  '--c-brand-10': '255, 251, 255',
  '--c-primary-1': 'var(--c-brand-1)',
  '--c-primary-2': 'var(--c-brand-2)',
  '--c-primary-3': 'var(--c-brand-3)',
  '--c-primary-4': 'var(--c-brand-4)',
  '--c-primary-5': 'var(--c-brand-5)',
  '--c-primary-6': 'var(--c-brand-6)',
  '--c-primary-7': 'var(--c-brand-7)',
  '--c-primary-8': 'var(--c-brand-8)',
  '--c-primary-9': 'var(--c-brand-9)',
  '--c-primary-10': 'var(--c-brand-10)',
}

export default md3Dark
