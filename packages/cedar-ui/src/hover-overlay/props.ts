import type { ExtractPropTypes } from 'vue'

export const hoverOverlayProps = {
  hovering: Boolean,
  focusing: Boolean,
}

export type HoverOverlayProps = ExtractPropTypes<typeof hoverOverlayProps>
