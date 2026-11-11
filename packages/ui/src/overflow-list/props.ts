import type { PropType } from 'vue'
import { isOverflowFrom, isOverflowNumber } from './layout'
export const overflowListProps = {
  /**
   * @zh 最少渲染数量，有限非负数向下取整并夹取到总数。
   * @en Minimum rendered count, floored and clamped to the item total.
   */
  min: { type: Number, default: 0, validator: isOverflowNumber },
  /**
   * @zh 项之间额外的逻辑间距，保留子项自有 margin。
   * @en Extra logical gap between items, preserving their own margins.
   */
  margin: { type: Number, default: 8, validator: isOverflowNumber },
  /**
   * @zh 数据序列的折叠端。
   * @en The data-sequence end to collapse.
   */
  from: { type: String as PropType<'start' | 'end'>, default: 'end', validator: isOverflowFrom },
}
export type OverflowListProps = InstanceType<typeof import('./overflow-list')['default']>['$props']
