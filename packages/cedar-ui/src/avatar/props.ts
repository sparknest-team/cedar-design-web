import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { PopoverProps } from '../popover'
import type { AvatarShape, AvatarTriggerType, ObjectFit } from './types'

export const avatarShapes = ['circle', 'square'] as const
export const avatarTriggerTypes = ['button', 'mask'] as const
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
    validator: (value: unknown): value is ObjectFit =>
      avatarObjectFits.includes(value as ObjectFit),
  },
} 

export const avatarGroupProps = {
  shape: avatarProps.shape,
  size: Number,
  autoFixFontSize: avatarProps.autoFixFontSize,
  maxCount: { type: Number, default: 0 },
  zIndexAscend: { type: Boolean, default: false },
  maxStyle: Object as PropType<CSSProperties>,
  maxPopoverProps: Object as PropType<PopoverProps>,
} 

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
