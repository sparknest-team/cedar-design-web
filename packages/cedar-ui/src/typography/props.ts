import type { ExtractPropTypes, PropType } from 'vue'
import { semanticStatuses } from '../_utils/constant'
import type { SemanticStatus } from '../_utils/constant'
import type { EllipsisConfig } from './types'

export const typographyProps = {} 

export const typographyBaseProps = {
  status: {
    type: String as PropType<SemanticStatus>,
    validator: (value: unknown): value is SemanticStatus =>
      semanticStatuses.includes(value as SemanticStatus),
  },
  bold: Boolean,
  mark: {
    type: [Boolean, Object] as PropType<boolean | { color: string }>,
    default: false,
  },
  underline: Boolean,
  delete: Boolean,
  code: Boolean,
  disabled: Boolean,
  editable: Boolean,
  editing: { type: Boolean, default: undefined },
  defaultEditing: Boolean,
  editText: String,
  copyable: Boolean,
  copyText: String,
  copyDelay: { type: Number, default: 3000 },
  ellipsis: {
    type: [Boolean, Object] as PropType<boolean | EllipsisConfig>,
    default: false,
  },
  editTooltipProps: Object as PropType<Record<string, unknown>>,
  copyTooltipProps: Object as PropType<Record<string, unknown>>,
} 

export const typographyBaseInternalProps = {
  ...typographyBaseProps,
  component: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    required: true as const,
  },
} 

export const typographyHeadingLevels = [1, 2, 3, 4, 5, 6] as const
export const typographyParagraphSpacings = ['default', 'close'] as const

export type TypographyHeadingLevel = (typeof typographyHeadingLevels)[number]
export type TypographyParagraphSpacing = (typeof typographyParagraphSpacings)[number]

export const typographyTitleProps = {
  ...typographyBaseProps,
  heading: {
    type: Number as PropType<TypographyHeadingLevel>,
    default: 1,
    validator: (value: unknown): value is TypographyHeadingLevel =>
      typographyHeadingLevels.includes(value as TypographyHeadingLevel),
  },
} 

export const typographyTextProps = { ...typographyBaseProps } 

export const typographyParagraphProps = {
  ...typographyBaseProps,
  blockquote: Boolean,
  spacing: {
    type: String as PropType<TypographyParagraphSpacing>,
    default: 'default',
    validator: (value: unknown): value is TypographyParagraphSpacing =>
      typographyParagraphSpacings.includes(value as TypographyParagraphSpacing),
  },
} 

export type TypographyProps = import("vue").ExtractPublicPropTypes<typeof typographyProps>
export type TypographyBaseProps = import("vue").ExtractPublicPropTypes<typeof typographyBaseProps>
export type TypographyTitleProps = import("vue").ExtractPublicPropTypes<typeof typographyTitleProps>
export type TypographyTextProps = import("vue").ExtractPublicPropTypes<typeof typographyTextProps>
export type TypographyParagraphProps = import("vue").ExtractPublicPropTypes<typeof typographyParagraphProps>
