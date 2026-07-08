import type { Option, OptionData } from '../../select-panel/src/types'
export interface SelectTransferProps {
  modelValue?: string[]
  defaultValue?: string[]
  placeholder?: string
  showSelected?: boolean
  options?: Option[]
  remoteSearch?: (searchValue: string) => Promise<void>
  fallbackOptions?: (value: string) => Option
}
