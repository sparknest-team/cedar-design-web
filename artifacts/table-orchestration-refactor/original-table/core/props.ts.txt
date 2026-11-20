import type { PropType } from 'vue'
import type { ComponentSize } from '../../_utils/constant'
import type { CompatiblePublicProps } from '../../_utils/public-props'
import type { TableCoreColumn, TableCoreData } from './types'

export const tableCoreProps = {
  /** 数据列与分组列。 */
  columns: { type: Array as PropType<TableCoreColumn[]>, default: () => [] },
  /** 已准备好的平面数据；筛选、排序、分页由外部显式组合。 */
  data: { type: Array as PropType<TableCoreData[]>, default: () => [] },
  /** 行身份字段；未提供字段值时使用当前行索引。 */
  rowKey: { type: String, default: 'key' },
  /** 基础表格尺寸。 */
  size: { type: String as PropType<ComponentSize>, default: 'md' },
  /** 原生表格布局；auto 使用实际内容宽度计算冻结偏移。 */
  tableLayout: { type: String as PropType<'fixed' | 'auto'>, default: 'fixed' },
  /** 弹性列吸收剩余容器宽度。 */
  fit: { type: Boolean, default: true },
  /** 滚动视口高度。 */
  height: [Number, String] as PropType<number | string>,
  /** 滚动视口最大高度。 */
  maxHeight: [Number, String] as PropType<number | string>,
  /** 在本表格滚动视口内固定表头。 */
  stickyHeader: { type: Boolean, default: true },
  /** 显示表头。 */
  showHeader: { type: Boolean, default: true },
  /** 显示边框。 */
  bordered: { type: Boolean, default: true },
  /** 显示斑马纹。 */
  stripe: { type: Boolean, default: false },
  /** 显示悬停状态。 */
  hoverable: { type: Boolean, default: true },
  /** 显式 busy 状态，不替换现有数据行。 */
  loading: { type: Boolean, default: false },
}

export type TableCoreProps = CompatiblePublicProps<typeof tableCoreProps>
