import type { VNode } from 'vue'

export type OptionMeta = {
  required?: boolean
  disabled?: boolean
  hidden?: boolean
  fixed?: 'start' | 'end'
  tip?: string | (() => VNode | string)
}
export type OptionState = {
  visiblePopover?: boolean
}
export type OptionData = OptionMeta & {
  label: string
  value: string
}
export type OptionGroup = {
  label: string
  value?: string
  options?: OptionData[]
}

export type Option = OptionData & OptionGroup
