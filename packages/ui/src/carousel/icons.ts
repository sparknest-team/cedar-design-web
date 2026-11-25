import { h } from 'vue'
import { IconDown as DownIcon } from '@cedar-design/icons-vue/icon-down'
import { IconLeft as PreviousIcon } from '@cedar-design/icons-vue/icon-left'
import { IconRight as NextIcon } from '@cedar-design/icons-vue/icon-right'
import { IconUp as UpIcon } from '@cedar-design/icons-vue/icon-up'

export function renderArrowIcon(vertical: boolean, previous: boolean, rtl: boolean) {
  const icon = vertical ? (previous ? UpIcon : DownIcon) : previous !== rtl ? PreviousIcon : NextIcon
  return h(icon)
}
