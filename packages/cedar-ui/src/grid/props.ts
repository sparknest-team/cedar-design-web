import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, toRefs, provide, reactive, watchEffect, PropType } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { GridContextInjectionKey, GridDataCollectorInjectionKey } from './context'
import { useResponsiveState } from './hook/use-responsive-state'
import { GridItemData, GridProps, ResponsiveValue } from './types'
import { setItemVisible } from './utils'

export const gridProps = {
    /**
     * @zh 每一行展示的列数
     * @en Number of columns displayed in each row
     */
    cols: {
      type: [Number, Object] as PropType<number | ResponsiveValue>,
      default: 24,
    },
    /**
     * @zh 行与行之间的间距
     * @en The space in row-to-row
     */
    rowGap: {
      type: [Number, Object] as PropType<number | ResponsiveValue>,
      default: 0,
    },
    /**
     * @zh 列与列之间的间距
     * @en The space in column-to-column
     */
    colGap: {
      type: [Number, Object] as PropType<number | ResponsiveValue>,
      default: 0,
    },
    /**
     * @zh 是否折叠
     * @en Whether to collapsed
     */
    collapsed: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 折叠时显示的行数
     * @en Number of rows displayed when collapsed
     */
    collapsedRows: {
      type: Number,
      default: 1,
    },
  } 
