import type { StyleValue } from 'vue'
import type { ClassName } from '../_utils/types'

export interface ThumbData {
  ratio: number
  thumbSize: number
  max: number
}

export interface ThumbMap {
  size: 'width' | 'height'
  direction: 'left' | 'top'
  offset: 'offsetWidth' | 'offsetHeight'
  client: 'clientX' | 'clientY'
}

/** Keep the public surface small for deeply reactive composition consumers. */
export interface ScrollbarProps {
  type?: 'track' | 'embed'
  outerClass?: ClassName
  outerStyle?: StyleValue
  onScroll?: (event: Event) => void
}
