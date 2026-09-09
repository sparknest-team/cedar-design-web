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
  showIcon: { type: Boolean, default: true },
  showDescription: { type: Boolean, default: true },
}

export type EmptyProps = import("vue").ExtractPublicPropTypes<typeof emptyProps>
