import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'

export type EmptyImageSize = ComponentSize | number | string

export const emptyProps = {
  description: String,
  imageUrl: String,
  alt: { type: String, default: '' },
  icon: String,
  imageSize: {
    type: [String, Number] as PropType<EmptyImageSize>,
    default: 'md',
  },
  inConfigProvider: { type: Boolean, default: false },
} 

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
