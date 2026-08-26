import type { ExtractPropTypes, PropType } from 'vue'

export type AffixTarget = string | HTMLElement | Window

export const affixProps = {
  offsetTop: {
    type: Number,
    default: 0,
  },
  offsetBottom: Number,
  target: [String, Object, Function] as PropType<AffixTarget>,
  targetContainer: [String, Object, Function] as PropType<AffixTarget>,
  zIndex: {
    type: Number,
    default: 10,
  },
  disabled: Boolean,
  cssMode: Boolean,
} 

export type AffixProps = Partial<ExtractPropTypes<typeof affixProps>>
