import { withInstall } from '../_utils/global-config'
import _Typography from './typography.vue'
import _TypographyParagraph from './paragraph'
import _TypographyTitle from './title'
import _TypographyText from './text'
import {
  typographyParagraphProps,
  typographyProps,
  typographyTextProps,
  typographyTitleProps,
} from './props'

export type { EllipsisConfig } from './types'

const Typography = withInstall(_Typography, Object.assign(_Typography, {
  Paragraph: _TypographyParagraph,
  Title: _TypographyTitle,
  Text: _TypographyText,
}), { components: [_Typography, _TypographyParagraph, _TypographyTitle, _TypographyText] })

export type TypographyInstance = InstanceType<typeof _Typography>
export type TypographyParagraphInstance = InstanceType<typeof _TypographyParagraph>
export type TypographyTitleInstance = InstanceType<typeof _TypographyTitle>
export type TypographyTextInstance = InstanceType<typeof _TypographyText>
export { typographyParagraphProps, typographyProps, typographyTextProps, typographyTitleProps }
export type {
  TypographyBaseProps,
  TypographyHeadingLevel,
  TypographyParagraphProps,
  TypographyParagraphSpacing,
  TypographyProps,
  TypographyTextProps,
  TypographyTitleProps,
} from './props'
export { Typography }

export {
  _TypographyParagraph as TypographyParagraph,
  _TypographyTitle as TypographyTitle,
  _TypographyText as TypographyText,
}

export const _TypographyComponent = Typography
export const _TypographyParagraphComponent = _TypographyParagraph
export const _TypographyTitleComponent = _TypographyTitle
export const _TypographyTextComponent = _TypographyText

export default Typography
