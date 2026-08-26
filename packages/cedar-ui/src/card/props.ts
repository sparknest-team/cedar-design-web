import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export const cardVariants = ['default', 'outlined', 'tonal'] as const
export const cardSizes = ['sm', 'md'] as const
export const cardDirections = ['row', 'column', 'row-reverse'] as const

export type CardVariant = (typeof cardVariants)[number]
export type CardSize = (typeof cardSizes)[number]
export type CardDirection = (typeof cardDirections)[number]
export type CardFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export const cardProps = {
  variant: { type: String as PropType<CardVariant>, default: 'default' },
  loading: { type: Boolean, default: false },
  hoverable: { type: Boolean, default: false },
  size: String as PropType<CardSize>,
  titleStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  title: String,
  subtitle: String,
  description: String,
  topDivider: { type: Boolean, default: false },
  bottomDivider: { type: Boolean, default: false },
  direction: { type: String as PropType<CardDirection>, default: 'column' },
  elevation: { type: [Boolean, Number, String], default: true },
} 

export type CardProps = ExtractPropTypes<typeof cardProps>
