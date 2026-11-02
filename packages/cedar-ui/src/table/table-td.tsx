import { computed, createVNode, defineComponent, inject, onActivated, onBeforeUnmount, onDeactivated, PropType, ref, VNode, watch } from "vue"
import { getPrefixCls, createNamespace } from "../_utils/global-config"
import { TableColumnData, TableData, TableDataWithRaw, TableOperationColumn } from "./types"
import { getFixedCls, getStyle } from "./utils"
import { getValueByPath } from "../_utils/get-value-by-path"
import { IconLoading } from '@cedar-design/icons-vue/icon-loading'
import { isFunction, isObject } from "../_utils/is"
import { TableContext, tableInjectionKey } from "./context"
import AutoTooltip from "../_components/auto-tooltip/auto-tooltip"

const TD_TYPES = [
  "normal",
  "operation",
  "checkbox",
  "radio",
  "expand",
] as const;
type TdTypes = (typeof TD_TYPES)[number];

const { name } = createNamespace("td");

export default defineComponent({
  name,
  props: {
    rowIndex: Number,
    record: {
      type: Object as PropType<TableDataWithRaw>,
      default: () => ({}),
    },
    column: {
      type: Object as PropType<TableColumnData>,
      default: () => ({}),
    },
    type: {
      type: String as PropType<TdTypes>,
      default: "normal",
    },
    operations: {
      type: Array as PropType<TableOperationColumn[]>,
      default: () => [],
    },
    dataColumns: {
      type: Array as PropType<TableColumnData[]>,
      default: () => [],
    },
    colSpan: {
      type: Number,
      default: 1,
    },
    rowSpan: {
      type: Number,
      default: 1,
    },
    isFixedExpand: {
      type: Boolean,
      default: false,
    },
    containerWidth: {
      type: Number,
    },
    showExpandBtn: {
      type: Boolean,
      default: false,
    },
    indentSize: {
      type: Number,
      default: 0,
    },
    renderExpandBtn: {
      type: Function as PropType<
        (record: TableDataWithRaw, stopPropagation?: boolean) => VNode
      >,
    },
    summary: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const prefixCls = getPrefixCls("table");

    const tooltipProps = computed(() => {
      if (isObject(props.column?.tooltip)) {
        return props.column.tooltip;
      }
      return undefined;
    });

    const isSorted = computed(
      () =>
        props.column?.dataIndex &&
        tableCtx.sorter?.field === props.column.dataIndex,
    );

    const resizing = computed(
      () =>
        props.column?.dataIndex &&
        tableCtx.resizingColumn === props.column.dataIndex,
    );

    const getCustomClass = () => {
      if (props.summary) {
        return isFunction(props.column?.summaryCellClass)
          ? props.column.summaryCellClass(props.record?.raw)
          : props.column?.summaryCellClass;
      }
      return isFunction(props.column?.bodyCellClass)
        ? props.column.bodyCellClass(props.record?.raw)
        : props.column?.bodyCellClass;
    };

    const cls = computed(() => [
      `${prefixCls}-td`,
      {
        [`${prefixCls}-col-sorted`]: isSorted.value,
        [`${prefixCls}-td-resizing`]: resizing.value,
      },
      ...getFixedCls(prefixCls, props.column, tableCtx.readingDirection === 'rtl' && tableCtx.hasPhysicalLeftOperations),
      props.column?.cellClass,
      getCustomClass(),
    ]);

    const tableCtx = inject<Partial<TableContext>>(tableInjectionKey, {});

    const getCustomStyle = () => {
      if (props.summary) {
        return isFunction(props.column?.summaryCellStyle)
          ? props.column.summaryCellStyle(props.record?.raw)
          : props.column?.summaryCellStyle;
      }
      return isFunction(props.column?.bodyCellStyle)
        ? props.column.bodyCellStyle(props.record?.raw)
        : props.column?.bodyCellStyle;
    };

    const style = computed(() => {
      const baseStyle = getStyle(
        props.column,
        {
          dataColumns: props.dataColumns,
          operations: props.operations,
        },
        tableCtx.tableLayout,
        tableCtx.readingDirection,
      );
      const customStyle = getCustomStyle();
      return {
        ...baseStyle,
        ...props.column?.cellStyle,
        ...customStyle,
      };
    });

    const cellStyle = computed(() => {
      if (props.isFixedExpand && props.containerWidth) {
        return {
          width: `${props.containerWidth}px`,
        };
      }
      return undefined;
    });

    const renderContent = () => {
      if (slots.default) {
        return slots.default();
      }
      const data = {
        record: props.record?.raw,
        column: props.column,
        rowIndex: props.rowIndex ?? -1,
      };
      if (slots.cell) {
        return slots.cell(data);
      }
      if (props.column.slots?.cell) {
        return props.column.slots.cell(data);
      }
      if (props.column.render) {
        return props.column.render(data);
      }
      if (props.column.slotName && tableCtx.slots?.[props.column.slotName]) {
        return tableCtx.slots[props.column.slotName]?.(data);
      }
      return String(
        getValueByPath(props.record?.raw, props.column.dataIndex) ?? "",
      );
    };

    const isLoading = ref(false);
    let lazyActive = true;
    let lazyRun = 0;
    const cancelLazyLoad = () => { lazyRun++; isLoading.value = false; };
    watch([() => props.record?.raw, () => props.record?.key, () => props.record?.isLeaf, () => props.record?.children, () => tableCtx.loadMore], cancelLazyLoad, { flush: 'sync' });
    onActivated(() => { lazyActive = true; });
    const stopLazyLoad = () => { lazyActive = false; cancelLazyLoad(); };
    onDeactivated(stopLazyLoad);
    onBeforeUnmount(stopLazyLoad);
    const handleClick = (ev: Event) => {
      ev.stopPropagation();
      const record = props.record;
      const loader = tableCtx.loadMore;
      if (!lazyActive || isLoading.value || typeof loader !== 'function' || record.isLeaf || record.children) return;
      const run = ++lazyRun;
      let settled = false;
      isLoading.value = true;
      const done = (children?: TableData[]) => {
        if (settled) return;
        settled = true;
        if (!lazyActive || run !== lazyRun || props.record.raw !== record.raw || props.record.key !== record.key || tableCtx.loadMore !== loader) return;
        isLoading.value = false;
        if (children !== undefined) tableCtx.addLazyLoadData?.(children, record);
      };
      try {
        const result = loader(record.raw, done) as unknown;
        if (result && typeof (result as PromiseLike<unknown>).then === 'function') {
          return Promise.resolve(result).catch((error) => { done(); throw error; });
        }
      } catch (error) {
        done();
        throw error;
      }
    };

    const renderCell = () => {
      return (
        <span
          class={[
            `${prefixCls}-cell`,
            `${prefixCls}-cell-align-${props.column?.align ?? "start"}`,
            {
              [`${prefixCls}-cell-fixed-expand`]: props.isFixedExpand,
              [`${prefixCls}-cell-expand-icon`]: props.showExpandBtn,
            },
          ]}
          style={cellStyle.value}
        >
          {props.indentSize > 0 && (
            <span
              style={{
                paddingInlineStart: `${props.indentSize}px`,
              }}
            />
          )}
          {props.showExpandBtn && (
            <span
              class={`${prefixCls}-cell-inline-icon`}
              onClick={handleClick}
            >
              {isLoading.value ? (
                <IconLoading />
              ) : (
                props.renderExpandBtn?.(props.record, false)
              )}
            </span>
          )}
          {props.column?.ellipsis && props.column?.tooltip ? (
            <AutoTooltip
              class={`${prefixCls}-td-content`}
              tooltipProps={tooltipProps.value}
            >
              {renderContent()}
            </AutoTooltip>
          ) : (
            <span
              class={[
                `${prefixCls}-td-content`,
                {
                  [`${prefixCls}-text-ellipsis`]: props.column?.ellipsis,
                },
              ]}
            >
              {renderContent()}
            </span>
          )}
        </span>
      );
    };

    return () => {
      return createVNode(
        slots.td?.({
          record: props.record?.raw,
          column: props.column,
          rowIndex: props.rowIndex ?? -1,
        })[0] ?? "td",
        {
          class: cls.value,
          style: style.value,
          rowspan: props.rowSpan > 1 ? props.rowSpan : undefined,
          colspan: props.colSpan > 1 ? props.colSpan : undefined,
          // auto 布局下渲染后按此 key 量宽回写，修正冻结列 sticky 偏移
          "data-column-key": props.column?.dataIndex,
        },
        {
          default: () => [renderCell()],
        },
      );
    };
  },
});
