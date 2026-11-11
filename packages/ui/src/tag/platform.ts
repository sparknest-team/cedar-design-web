import { computed } from 'vue'
import { useI18n } from '../locale'
import { toRef } from 'vue'
import { useSize } from '../_hooks/use-size'
import type { TagProps } from './props'
export { IconClose } from '@cedar-design/icons-vue/icon-close'
export { IconLoading } from '@cedar-design/icons-vue/icon-loading'
export function useTagPlatform(props: Readonly<TagProps>) {
  const { mergedSize } = useSize(toRef(props, 'size'))
  return { mergedSize }
}

export function useTagCloseLabel() {
  const { t } = useI18n()
  return computed(() => t('common.close'))
}
