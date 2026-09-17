<template>
  <colgroup>
    <!-- 对齐 Element Plus：auto 模式下不渲染任何 col，完全交给浏览器按内容分配 -->
    <template v-if="tableLayout === 'fixed'">
      <col
        v-for="item of operations"
        :key="`${prefixCls}-col-${item.name}`"
        :class="`${prefixCls}-${item.name}-col`"
        :width="item.width ?? DEFAULT_OPERATION_WIDTH"
      />
      <col
        v-for="item of dataColumns"
        :key="`${prefixCls}-col-${item.dataIndex}`"
        :width="getColWidth(item)"
      />
    </template>
  </colgroup>
</template>

<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { defineComponent, PropType } from "vue";
import { TableColumnData, TableOperationColumn } from "./types";
import { getPrefixCls } from "../_utils/global-config";
import { DEFAULT_OPERATION_WIDTH } from "./hooks/use-columns-layout";

const prefixCls = getPrefixCls("table");

export default defineComponent({
  name: createNamespace("col-group").name,
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
    /** fixed：使用布局计算结果；auto：不渲染 col，交给浏览器按内容分配 */
    tableLayout: {
      type: String as PropType<"fixed" | "auto">,
      default: "fixed",
    },
  },
  setup(props) {
    // 对齐 Element Plus：fixed 模式只写 width 属性（非 style）。
    // 列宽由 use-columns-layout 计算且总和等于 table 像素宽，
    // 不存在剩余空间分配，无需 min/max-width 兜底
    const getColWidth = (item: TableColumnData) => {
      const resized =
        (item.dataIndex && props.columnWidth?.[item.dataIndex]) ??
        item._resizeWidth;
      return (
        (item.dataIndex && props.columnRealWidth?.[item.dataIndex]) ||
        resized ||
        item._realWidth ||
        item.width
      );
    };

    return {
      getColWidth,
      prefixCls,
      DEFAULT_OPERATION_WIDTH,
    };
  },
});
</script>
