import { computed, inject, type Ref } from 'vue'
import ResizeObserverFallback from 'resize-observer-polyfill'
import usePopupManager from '../_hooks/use-popup-manager'
import { configProviderInjectionKey } from '../config-provider/context'

export const triggerResizeObserverFallback: typeof ResizeObserver | undefined = ResizeObserverFallback

export function useTriggerPlatform(visible: Readonly<Ref<boolean>>) {
  const config = inject(configProviderInjectionKey, undefined)
  const { zIndex, onStackTop } = usePopupManager('popup', { visible })
  return {
    zIndex,
    onStackTop,
    globalScrollToClose: computed(() => config?.scrollToClose ?? false),
    globalUpdateAtScroll: computed(() => config?.updateAtScroll ?? false),
  }
}
