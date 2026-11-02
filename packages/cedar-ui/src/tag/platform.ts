import { toRef } from 'vue'
import { useSize } from '../_hooks/use-size'
import type { TagProps } from './props'
export { IconClose } from '@cedar-design/icons-vue/icon-close'
export { IconLoading } from '@cedar-design/icons-vue/icon-loading'
export function useTagPlatform(props: Readonly<TagProps>) {
  const { mergedSize } = useSize(toRef(props, 'size'))
  return { mergedSize }
}
