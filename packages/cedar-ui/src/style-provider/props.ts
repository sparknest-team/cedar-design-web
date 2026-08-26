import type { PropType } from 'vue'
import type { StyleVars } from '../_utils/maple/elements'

export const styleProviderProps = {
  styleVars: {
    type: Object as PropType<StyleVars>,
    default: () => ({}),
  },
  tag: {
    type: String,
    default: 'div',
  },
}

export type StyleProviderProps = {
  styleVars?: StyleVars
  tag?: string
}
