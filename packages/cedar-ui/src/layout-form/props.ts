import type { PropType, ExtractPropTypes } from 'vue'
import type { IRenderComponent } from './RenderComponent'

export interface LayoutFormProps {
  componentTree?: IRenderComponent
  value?: any
  noBottomSpace?: boolean
  emptyText?: string
  showEmptyText?: boolean
  rules?: any
  store?: any
  compMapping?: any
}

export const layoutFormProps = {
  componentTree: {
    type: Object as PropType<IRenderComponent>,
    default: () => {
      return {
        model: {},
      }
    },
  },
  value: {
    type: Object,
  },
  noBottomSpace: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: '-',
  },
  showEmptyText: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Object,
  },
  store: {
    type: Object,
  },
  compMapping: {
    type: Object,
    default: () => {
      return {}
    },
  },
}

