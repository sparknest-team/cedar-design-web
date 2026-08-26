import { type ExtractPropTypes, type PropType } from 'vue'
import { tooltipProps } from '../../tooltip'
import { type ExtractPublicPropTypes } from '../../_utils/components'

export type EllipsisExpandTrigger = 'click'

export const ellipsisProps = {
  expand: Boolean,
  expandTrigger: String as PropType<EllipsisExpandTrigger>,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean] as PropType<ExtractPublicPropTypes<typeof tooltipProps> | boolean>,
    default: true,
  },
}

export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>
