import type { ExtractPropTypes, PropType } from 'vue'

export const dividerProps = {
  sizeX: {
    type: [Number, String, Array] as PropType<number | string | Array<number | string>>,
  },
  sizeY: {
    type: [Number, String, Array] as PropType<number | string | Array<number | string>>,
    default: () => 'md',
  },
  orientation: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: () => 'horizontal',
  },
  textAlign: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'center',
  },
  description: String,
  type: {
    type: String as PropType<'dashed' | 'dotted' | 'solid' | 'double'>,
    default: () => 'solid',
  },
  hairline: Boolean,
  thickness: Number,
  color: String,
  opacity: Number,
}

export type DividerProps = ExtractPropTypes<typeof dividerProps>
