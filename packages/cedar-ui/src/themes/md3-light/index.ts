import type { StyleVars } from '../../style-provider'

/**
 * MD3 亮色示例包：StyleProvider 注入品牌色覆盖（不改 DOM dark）。
 * 与 Maple `Themes.md3Light` 用法对齐；Cedar 暗色底盘仍靠 CSS 变量表。
 */
const md3Light: StyleVars = {
  '--c-color-scheme': 'light',
  '--c-color-body': 'var(--c-color-bg-1)',
  '--c-color-text': 'var(--c-color-text-1)',
  // Material-ish primary (purple)
  '--c-brand-1': '246, 237, 255',
  '--c-brand-2': '234, 221, 255',
  '--c-brand-3': '208, 188, 255',
  '--c-brand-4': '182, 157, 248',
  '--c-brand-5': '154, 130, 219',
  '--c-brand-6': '103, 80, 164',
  '--c-brand-7': '79, 55, 139',
  '--c-brand-8': '56, 30, 114',
  '--c-brand-9': '33, 0, 93',
  '--c-brand-10': '20, 0, 60',
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

export default md3Light
