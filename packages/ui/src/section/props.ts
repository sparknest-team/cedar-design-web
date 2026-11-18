import type { PropType, VNodeChild } from 'vue'

import type { CompatiblePublicProps } from '../_utils/public-props'

export type SectionVariant = 'plain' | 'line' | 'card'
export type SectionHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export const sectionProps = {
  /** 分区 ID，未设置时自动生成。 */
  id: String,
  /** 分区标题，也可通过 title 插槽提供。 */
  title: { type: String, default: "" },
  /** 标题下方的补充说明。 */
  description: { type: String, default: "" },
  /** 分区外观，表单中默认为 line，其他场景默认为 plain。 */
  variant: String as PropType<SectionVariant>,
  /** 标题色条，默认随表单上下文开启。 */
  showMarker: { type: Boolean, default: undefined },
  /** 在内容后绘制结束线。 */
  showEndDivider: { type: Boolean, default: false },
  /** 分区标题在文档中的层级。 */
  headingLevel: {
    type: Number as PropType<SectionHeadingLevel>,
    validator: (level: number) => Number.isInteger(level) && level >= 1 && level <= 6,
  },
}

export interface SectionSlots {
  default?: () => VNodeChild;
  title?: () => VNodeChild;
  description?: () => VNodeChild;
  extra?: () => VNodeChild;
}

export type SectionProps = CompatiblePublicProps<typeof sectionProps>
