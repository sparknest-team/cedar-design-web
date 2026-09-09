import { computed, watch } from 'vue'
import { useOverflow } from './use-overflow'

interface PopupOverflowHiddenProps {
  container: HTMLElement | undefined
  hidden: boolean
}

export default function usePopupOverflowHidden(props: PopupOverflowHiddenProps) {
  const { setOverflowHidden, resetOverflow } = useOverflow(computed(() => props.container))
  watch(() => props.hidden, hidden => hidden ? setOverflowHidden() : resetOverflow(), { immediate: true, flush: 'sync' })
  return [resetOverflow, setOverflowHidden]
}
