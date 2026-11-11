import { onUnmounted, type Ref, isRef, computed, onMounted, watch } from 'vue'
import ResponsiveObserve, { type Breakpoint } from '../_utils/responsive-observe'

export function useResponsive(
  breakpoint: Breakpoint | undefined | Ref<Breakpoint | undefined>,
  callback: (checked: boolean) => void,
) {
  const resultBreakpoint = computed(() => (isRef(breakpoint) ? breakpoint.value : breakpoint))
  let subscribeToken = ''
  let stopWatch: (() => void) | undefined
  const unsubscribe = () => {
    if (subscribeToken) ResponsiveObserve.unsubscribe(subscribeToken)
    subscribeToken = ''
  }
  onMounted(() => {
    stopWatch = watch(resultBreakpoint, point => {
      unsubscribe()
      if (!point) return
      subscribeToken = ResponsiveObserve.subscribe((screens, breakpointChecked) => {
        if (!breakpointChecked || breakpointChecked === point) callback(!!screens[point])
      })
    }, { immediate: true })
  })
  onUnmounted(() => {
    stopWatch?.()
    unsubscribe()
  })
}
