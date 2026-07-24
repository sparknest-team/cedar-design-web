<template>
  <colgroup>
    <col
      v-for="item of operations"
      :key="`${prefixCls}-col-${item.name}`"
      :class="`${prefixCls}-${item.name}-col`"
      :style="fixedWidth(item.width ?? 40)"
    />
    <col
      v-for="item of dataColumns"
      :key="`${prefixCls}-col-${item.dataIndex}`"
      :style="getColStyle(item)"
    />
  </colgroup>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TableColumnData, TableOperationColumn } from './types'
import { getPrefixCls } from '../_utils/global-config'

const prefixCls = getPrefixCls('table')

export default defineComponent({
  name: 'ColGroup',
  props: {
    dataColumns: {
      type: Array as PropType<TableColumnData[]>,
      required: true,
    },
    operations: {
      type: Array as PropType<TableOperationColumn[]>,
      required: true,
    },
    columnWidth: {
      type: Object as PropType<Record<string, number>>,
    },
    columnRealWidth: {
      type: Object as PropType<Record<string, number>>,
    },
    /** fixed：使用布局计算结果；auto：仅使用显式 width，交给浏览器按内容分配 */
    tableLayout: {
      type: String as PropType<'fixed' | 'auto'>,
      default: 'fixed',
    },
  },
  setup(props) {
    const fixedWidth = (width?: number, minWidth?: number) => {
      if (width) {
        const min = Math.max(width, minWidth || 0)
        // 不设 maxWidth：铺满容器时锁死会导致 1px 级溢出并出现横向滚动条
        return {
          width: `${width}px`,
          minWidth: `${min}px`,
        }
      }
      if (minWidth) {
        return { minWidth: `${minWidth}px` }
      }
      return undefined
    }

    const getColStyle = (item: TableColumnData) => {
      const resized = item.dataIndex && props.columnWidth?.[item.dataIndex]
      if (props.tableLayout === 'auto') {
        // auto：不写布局算出的 realWidth，让内容参与分配（对齐 Element）
        return fixedWidth(resized || item.width)
      }
      return fixedWidth(
        (item.dataIndex && props.columnRealWidth?.[item.dataIndex]) || resized || item._realWidth || item.width,
        item.minWidth,
      )
    }

    return {
      fixedWidth,
      getColStyle,
      prefixCls,
    }
  },
})
</script>
