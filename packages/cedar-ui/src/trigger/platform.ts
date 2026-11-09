import { computed, inject, type Ref } from 'vue'
import { usePopupLayer } from '../_utils/popup-layer'
import { configProviderInjectionKey } from '../config-provider/context'
import { useZIndex } from '../context/zIndex'

export function useTriggerPlatform(visible: Readonly<Ref<boolean>>, ownerDocument?: () => Document | undefined) {
  const config = inject(configProviderInjectionKey, undefined)
  const { zIndex } = useZIndex(() => visible.value, 1)
  const { onStackTop } = usePopupLayer(() => visible.value, zIndex, ownerDocument)
  return {
    zIndex,
    onStackTop,
    globalScrollToClose: computed(() => config?.scrollToClose ?? false),
    globalUpdateAtScroll: computed(() => config?.updateAtScroll ?? false),
  }
}
