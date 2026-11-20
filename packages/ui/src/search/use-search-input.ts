
import { useId } from '../_utils/vue-compat'
import type { SearchResolvedProps } from './props'

export function useSearchInput(
  props: SearchResolvedProps,
  referenceAttrs: () => Record<string, unknown> = () => ({}),
) {
  const generated = 'search-' + useId()
  const getInputId = () => String(props.inputAttrs?.id ?? referenceAttrs().id ?? generated)
  const getLabel = () => {
    const label = props.ariaLabel ?? props.inputAttrs?.['aria-label'] ?? referenceAttrs()['aria-label'] ?? props.label
    return label == null ? undefined : String(label)
  }
  const getReferenceAttrs = () => ({
    ...props.inputAttrs,
    id: getInputId(),
    'aria-label': getLabel(),
    'aria-busy': props.loading || (props.inputAttrs?.['aria-busy'] ?? referenceAttrs()['aria-busy']),
  })
  return { getReferenceId: getInputId, getLabel, getReferenceAttrs }
}
