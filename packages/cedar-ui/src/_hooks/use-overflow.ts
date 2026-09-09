import { ref, type Ref } from 'vue'
import { useScrollLock } from '../_utils/scroll-lock'

// Existing callers keep their transition boundary: release after leave completes.
export const useOverflow = (elementRef: Ref<HTMLElement | undefined>) => {
  const enabled = ref(false)
  useScrollLock(() => elementRef.value, () => enabled.value, { reserveScrollBar: true })
  return {
    setOverflowHidden: () => { enabled.value = true },
    resetOverflow: () => { enabled.value = false },
  }
}
