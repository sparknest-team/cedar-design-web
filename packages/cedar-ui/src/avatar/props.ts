import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { PopoverProps } from '../popover'
import type { AvatarShape, AvatarTriggerType, ObjectFit } from './types'

export const avatarShapes = ['circle', 'square'] as const
export const avatarTriggerTypes = ['button', 'overlay'] as const
export const avatarObjectFits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const

export const avatarProps = {
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'circle',
    validator: (value: unknown): value is AvatarShape => avatarShapes.includes(value as AvatarShape),
  },
  imageUrl: String,
  alt: { type: String, default: '' },
  size: Number,
  autoFixFontSize: { type: Boolean, default: true },
  triggerType: {
    type: String as PropType<AvatarTriggerType>,
    default: 'button',
    validator: (value: unknown): value is AvatarTriggerType =>
      avatarTriggerTypes.includes(value as AvatarTriggerType),
  },
  triggerIconStyle: Object as PropType<CSSProperties>,
  objectFit: {
    type: String as PropType<ObjectFit>,
    default: 'cover',
    validator: (value: unknown): value is ObjectFit =>
      avatarObjectFits.includes(value as ObjectFit),
  },
  color: String,
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  hoverable: Boolean,
}

export const avatarGroupProps = {
  shape: avatarProps.shape,
  size: Number,
  autoFixFontSize: avatarProps.autoFixFontSize,
  maxCount: { type: Number, default: 0 },
  zIndexAscend: { type: Boolean, default: false },
  maxStyle: Object as PropType<CSSProperties>,
  maxPopoverProps: Object as PropType<PopoverProps>,
  offset: [Number, String] as PropType<number | string>,
  vertical: Boolean,
}

export type AvatarProps = import("vue").ExtractPublicPropTypes<typeof avatarProps>
export type AvatarGroupProps = import("vue").ExtractPublicPropTypes<typeof avatarGroupProps>
