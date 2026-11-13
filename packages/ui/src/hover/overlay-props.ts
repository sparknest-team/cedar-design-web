import type { ExtractPropTypes } from 'vue'

export const hoverOverlayProps = {
  hovering: Boolean,
  focusing: Boolean,
}

export type HoverOverlayProps = import('../_utils/public-props').CompatiblePublicProps<typeof hoverOverlayProps>
