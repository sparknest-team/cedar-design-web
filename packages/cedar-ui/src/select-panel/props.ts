import type { Option, OptionData } from './types'

export interface SelectPanelProps {
  modelValue?: string | string[]
  multiple?: boolean
  defaultValue?: string[]
  placeholder?: string
  showSelected?: boolean
  options?: Option[]
  remoteSearch?: (searchValue: string) => Promise<void>
  fallbackOptions?: (value: string) => OptionData
}
