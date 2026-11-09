import type { StyleVars } from '../theme-provider'
import defaultDark from './dark'
import mapleDark from './maple-dark'
import mapleLight from './maple-light'

const defaultLight: StyleVars = {
  '--c-color-scheme': 'light',
  '--c-color-body': 'var(--c-color-bg-1)',
  '--c-color-text': 'var(--c-color-text-1)',
  '--c-brand-1': '232, 255, 251',
  '--c-brand-2': '176, 242, 233',
  '--c-brand-3': '125, 229, 219',
  '--c-brand-4': '79, 216, 207',
  '--c-brand-5': '37, 203, 197',
  '--c-brand-6': '0, 190, 190',
  '--c-brand-7': '0, 156, 162',
  '--c-brand-8': '0, 124, 133',
  '--c-brand-9': '0, 94, 105',
  '--c-brand-10': '0, 66, 77',
  '--c-primary-1': '232, 255, 251',
  '--c-primary-2': '176, 242, 233',
  '--c-primary-3': '125, 229, 219',
  '--c-primary-4': '79, 216, 207',
  '--c-primary-5': '37, 203, 197',
  '--c-primary-6': '0, 190, 190',
  '--c-primary-7': '0, 156, 162',
  '--c-primary-8': '0, 124, 133',
  '--c-primary-9': '0, 94, 105',
  '--c-primary-10': '0, 66, 77',
}

const Themes = {
  default: { light: defaultLight, dark: defaultDark },
  maple: { light: mapleLight, dark: mapleDark },
}

export type { StyleVars } from '../theme-provider'
export { Themes }
export default Themes
