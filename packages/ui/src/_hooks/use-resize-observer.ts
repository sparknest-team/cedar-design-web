import { ref, type Ref } from 'vue'
import { useElementResize } from '../_utils/resize-observer'

export const useResizeObserver = ({ elementRef, onResize }: {
  elementRef: Ref<HTMLElement | undefined>
  onResize: () => void
}) => {
  const enabled = ref(false)
  useElementResize(() => [elementRef.value], () => enabled.value, onResize, false)
  return {
    createResizeObserver: () => { enabled.value = true },
    destroyResizeObserver: () => { enabled.value = false },
  }
}
