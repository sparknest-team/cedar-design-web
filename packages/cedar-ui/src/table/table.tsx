import type {
  ComponentPublicInstance,
  CSSProperties,
  PropType,
  Slot,
} from "vue";
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
  watchEffect,
  watchPostEffect,
} from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import type { Size } from "../_utils/constant";
import {
  isArray,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined,
} from "../_utils/is";
import { debounce } from "../_utils/debounce";
import type {
  TableBorder,
  TableChangeExtra,
  TableColumnData,
  TableComponents,
  TableData,
  TableDataWithRaw,
  TableDraggable,
  TableExpandable,
  TableOperationColumn,
  TablePagePosition,
  TableRowSelection,
} from "./types";
import {
  getGroupColumns,
  mapArrayWithChildren,
  mapRawTableData,
} from "./utils";
import { useRowSelection } from "./hooks/use-row-selection";
import { useExpand } from "./hooks/use-expand";
import { usePagination } from "./hooks/use-pagination";
import { updateColumnsWidth } from "./hooks/use-columns-layout";
import IconPlus from "../icon/icon-plus";
import IconMinus from "../icon/icon-minus";
import Spin from "../spin";
import Pagination, { PaginationProps } from "../pagination";
import Empty from "../empty";
import ColGroup from "./table-col-group.vue";
import Thead from "./table-thead";
import Tbody from "./table-tbody";
import Tr from "./table-tr";
import Th from "./table-th";
import Td from "./table-td";
import OperationTh from "./table-operation-th";
import OperationTd from "./table-operation-td";
import VirtualList from "../_components/virtual-list-v2";
import ResizeObserver from "../_components/resize-observer";
import { VirtualListProps } from "../_components/virtual-list-v2/interface";
import { omit } from "../_utils/omit";
import { configProviderInjectionKey } from "../config-provider/context";
import { useDrag } from "./hooks/use-drag";
import { useColumnResize } from "./hooks/use-column-resize";
import { tableInjectionKey } from "./context";
import { useFilter } from "./hooks/use-filter";
import { useSorter } from "./hooks/use-sorter";
import ClientOnly from "../_components/client-only";
import { useSpan } from "./hooks/use-span";
import { useChildrenComponents } from "../_hooks/use-children-components";
import Scrollbar, { ScrollbarProps } from "../scrollbar";
import { useComponentRef } from "../_hooks/use-component-ref";
import type { BaseType } from "../_utils/types";
import { useScrollbar } from "../_hooks/use-scrollbar";
import { getValueByPath, setValueByPath } from "../_utils/get-value-by-path";
import {
  resolveExtraColumnConfig,
  getExtraColumnWidth,
  type TableExtraColumnConfig,
} from "./extra-column";

const DEFAULT_BORDERED = {
  wrapper: true,
  cell: false,
  headerCell: false,
  bodyCell: false,
};

const { name } = createNamespace("table");

export default defineComponent({
  name,
  props: {
    /**
     * @zh 表格的列描述信息
     * @en Column info of the table
     */
    columns: {
      type: Array as PropType<TableColumnData[]>,
      default: () => [],
    },
    /**
     * @zh 表格的数据
     * @en Table data
     */
    data: {
      type: Array as PropType<TableData[]>,
      default: () => [],
    },
    /**
     * @zh 是否显示边框
     * @en Whether to show the border
     */
    bordered: {
      type: [Boolean, Object] as PropType<boolean | TableBorder>,
      default: true,
    },
    /**
     * @zh 是否显示选中效果
     * @en Whether to show the hover effect
     */
    hoverable: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否开启斑马纹效果
     * @en Whether to enable the stripe effect
     */
    stripe: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 表格的大小
     * @en The size of the table
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     */
    size: {
      type: String as PropType<Size>,
      default: () =>
        inject(configProviderInjectionKey, undefined)?.size ?? "md",
    },
    /**
     * @zh 表格布局算法，同 CSS `table-layout`。默认 `fixed`，列宽由 JS 计算后写入，不被单元格内容撑开
     * @en Table layout algorithm, same as CSS `table-layout`. Defaults to `fixed`; column widths are computed in JS and not stretched by cell content
     */
    tableLayout: {
      type: String as PropType<"fixed" | "auto">,
      default: "fixed",
    },
    /**
     * @zh 是否为加载中状态
     * @en Whether it is loading state
     */
    loading: {
      type: [Boolean, Object],
      default: false,
    },
    /**
     * @zh 表格的行选择器配置
     * @en Table row selector configuration
     */
    rowSelection: {
      type: Object as PropType<TableRowSelection>,
    },
    /**
     * @zh 表格的展开行配置
     * @en Expand row configuration of the table
     */
    expandable: {
      type: Object as PropType<TableExpandable>,
    },
    /**
     * @zh 表格高度。设置后表头固定，表体区域滚动。数字单位为 px
     * @en Table height. Fixes the header and scrolls the body when set. Number values are in px
     */
    height: {
      type: [Number, String] as PropType<number | string>,
    },
    /**
     * @zh 表格最大高度。内容不足时表格收缩，超出后表体滚动。数字单位为 px
     * @en Table max height. Table shrinks when content is short; body scrolls when exceeded. Number values are in px
     */
    maxHeight: {
      type: [Number, String] as PropType<number | string>,
    },
    /**
     * @zh 列宽如何撑满容器。表格宽度始终至少为父容器宽度（列宽之和超出时开启横向滚动）。为 true 时，未设置 `width` 的弹性列吸收全部剩余空间（显式 `width` 的列保持原宽）；为 false 时，剩余空间按各列基础宽度比例放大分摊（extra-column 等钉死列除外）
     * @en How column widths fill the container. The table is always at least as wide as its parent (horizontal scroll when columns overflow). When true, flexible columns without `width` absorb all remaining space (explicit-`width` columns stay exact); when false, remaining space scales all columns proportionally to their base widths (pinned columns like extra-column excluded)
     */
    fit: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 分页的属性配置
     * @en Pagination properties configuration
     */
    pagination: {
      type: [Boolean, Object] as PropType<boolean | PaginationProps>,
      default: true,
    },
    /**
     * @zh 分页选择器的位置
     * @en The position of the page selector
     * @values 'tl','top',tr','bl','bottom','br'
     */
    pagePosition: {
      type: String as PropType<TablePagePosition>,
      default: "br",
    },
    /**
     * @zh 树形表格的缩进距离
     * @en The indentation distance of the tree table
     */
    indentSize: {
      type: Number,
      default: 16,
    },
    /**
     * @zh 表格行 `key` 的取值字段
     * @en Value field of table row `key`
     */
    rowKey: {
      type: String,
      default: "key",
    },
    /**
     * @zh 是否显示表头
     * @en Whether to show the header
     */
    showHeader: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
     * @en Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
     * @type VirtualListProps
     */
    virtualListProps: {
      type: Object as PropType<VirtualListProps>,
    },
    /**
     * @zh 单元格合并方法（索引从数据项开始计数）
     * @en Cell merge method (The index starts counting from the data item)
     * @version 2.10.0
     */
    spanMethod: {
      type: Function as PropType<
        (data: {
          record: TableData;
          column: TableColumnData | TableOperationColumn;
          rowIndex: number;
          columnIndex: number;
        }) => { rowspan?: number; colspan?: number } | void
      >,
    },
    /**
     * @zh 是否让合并方法的索引包含所有
     * @en Whether to make the index of the span method contain all
     * @version 2.18.0
     */
    spanAll: {
      type: Boolean,
      default: false,
    },
    components: {
      type: Object as PropType<TableComponents>,
    },
    /**
     * @zh 数据懒加载函数，传入时开启懒加载功能
     * @en Data lazy loading function, open the lazy loading function when it is passed in
     * @version 2.13.0
     */
    loadMore: {
      type: Function as PropType<
        (record: TableData, done: (children?: TableData[]) => void) => void
      >,
    },
    /**
     * @zh 筛选图标是否左对齐
     * @en Whether the filter icon is aligned to the left
     * @version 2.13.0
     */
    filterIconAlignLeft: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在子树为空时隐藏展开按钮
     * @en Whether to hide expand button when subtree is empty
     * @version 2.14.0
     */
    hideExpandButtonOnEmpty: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 表格行元素的类名。`2.34.0` 版本增加函数值支持
     * @en The class name of the table row element. The `2.34.0` version adds support for function values.
     * @version 2.16.0
     */
    rowClass: {
      type: [String, Array, Object, Function] as PropType<
        | string
        | any[]
        | Record<string, any>
        | ((record: TableData, rowIndex: number) => any)
      >,
    },
    /**
     * @zh 表格拖拽排序的配置
     * @en Table drag and drop sorting configuration
     * @version 2.16.0
     */
    draggable: {
      type: Object as PropType<TableDraggable>,
    },
    rowNumber: {
      type: [Boolean, Object],
    },
    /**
     * @zh 是否允许调整列宽
     * @en Whether to allow the column width to be adjusted
     * @version 2.16.0
     */
    columnResizable: {
      type: Boolean,
    },
    /**
     * @zh 显示表尾总结行
     * @en Show footer summary row
     * @version 2.21.0
     */
    summary: {
      type: [Boolean, Function] as PropType<
        | boolean
        | ((params: {
            columns: TableColumnData[];
            data: TableData[];
          }) => TableData[])
      >,
    },
    /**
     * @zh 总结行的首列文字
     * @en The first column of text in the summary line
     * @version 2.21.0
     */
    summaryText: {
      type: String,
      default: "Summary",
    },
    /**
     * @zh 总结行的单元格合并方法
     * @en Cell Merge Method for Summarizing Rows
     * @version 2.21.0
     */
    summarySpanMethod: {
      type: Function as PropType<
        (data: {
          record: TableData;
          column: TableColumnData | TableOperationColumn;
          rowIndex: number;
          columnIndex: number;
        }) => { rowspan?: number; colspan?: number } | void
      >,
    },
    /**
     * @zh 已选择的行（受控模式）优先于 `rowSelection`
     * @en Selected row (controlled mode) takes precedence over `rowSelection`
     * @version 2.25.0
     */
    selectedKeys: {
      type: Array as PropType<(string | number)[]>,
    },
    /**
     * @zh 默认已选择的行（非受控模式）优先于 `rowSelection`
     * @en The selected row by default (uncontrolled mode) takes precedence over `rowSelection`
     * @version 2.25.0
     */
    defaultSelectedKeys: {
      type: Array as PropType<(string | number)[]>,
    },
    /**
     * @zh 显示的展开行、子树（受控模式）优先于 `expandable`
     * @en Displayed Expanded Row, Subtree (Controlled Mode) takes precedence over `expandable`
     * @version 2.25.0
     */
    expandedKeys: {
      type: Array as PropType<(string | number)[]>,
    },
    /**
     * @zh 默认显示的展开行、子树（非受控模式）优先于 `expandable`
     * @en Expand row, Subtree displayed by default (Uncontrolled mode) takes precedence over `expandable`
     * @version 2.25.0
     */
    defaultExpandedKeys: {
      type: Array as PropType<(string | number)[]>,
    },
    /**
     * @zh 是否默认展开所有的行
     * @en Whether to expand all rows by default
     * @version 2.25.0
     */
    defaultExpandAllRows: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否开启表头吸顶。相对**页面/外层滚动容器**吸顶，不是表格内部滚动。数字为距离滚动容器顶部的偏移（px）
     * @en Sticky header relative to the page/outer scroll container (not table body scroll). Number is top offset in px
     * @version 2.30.0
     */
    stickyHeader: {
      type: [Boolean, Number],
      default: false,
    },
    /**
     * @zh 是否开启分页条吸底。相对**页面/外层滚动容器**吸底，不是表格内部滚动。数字为距离滚动容器底部的偏移（px）
     * @en Sticky pagination relative to the page/outer scroll container. Number is bottom offset in px
     */
    stickyPagination: {
      type: [Boolean, Number],
      default: false,
    },
    /**
     * @zh 是否开启虚拟滚动条
     * @en Whether to enable virtual scroll bar
     * @version 2.38.0
     */
    scrollbar: {
      type: [Object, Boolean] as PropType<boolean | ScrollbarProps>,
      default: true,
    },
    /**
     * @zh 是否展示空子树
     * @en Whether to display empty subtrees
     * @version 2.51.0
     */
    showEmptyTree: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 在表格末尾插入扩展列（如设置按钮），内容由 #extra-column-header / #extra-column-cell 提供
     * @en Insert an extra column at the end of the table (e.g. settings button). Content is provided via #extra-column-header / #extra-column-cell
     */
    extraColumn: {
      type: [Boolean, Object] as PropType<boolean | TableExtraColumnConfig>,
      default: false,
    },
  },
  emits: {
    "update:selectedKeys": (rowKeys: (string | number)[]) => true,
    "update:expandedKeys": (rowKeys: (string | number)[]) => true,
    "update:columns": (columns: TableColumnData[]) => true,
    /**
     * @zh 点击展开行时触发
     * @en Triggered when a row is clicked to expand
     * @param {string | number} rowKey
     * @param {TableData} record
     */
    expand: (rowKey: string | number, record: TableData) => true,
    /**
     * @zh 已展开的数据行发生改变时触发
     * @en Triggered when the expanded data row changes
     * @param {(string | number)[]} rowKeys
     */
    expandedChange: (rowKeys: (string | number)[]) => true,
    /**
     * @zh 点击行选择器时触发
     * @en Triggered when the row selector is clicked
     * @param {string | number[]} rowKeys
     * @param {string | number} rowKey
     * @param {TableData} record
     */
    select: (
      rowKeys: (string | number)[],
      rowKey: string | number,
      record: TableData,
    ) => true,
    /**
     * @zh 点击全选选择器时触发
     * @en Triggered when the select all selector is clicked
     * @param {boolean} checked
     */
    selectAll: (checked: boolean) => true,
    /**
     * @zh 已选择的数据行发生改变时触发
     * @en Triggered when the selected data row changes
     * @param {(string | number)[]} rowKeys
     */
    selectionChange: (rowKeys: (string | number)[]) => true,
    /**
     * @zh 排序规则发生改变时触发
     * @en Triggered when the collation changes
     * @param {string} dataIndex
     * @param {string} direction
     */
    sorterChange: (dataIndex: string, direction: string) => true,
    /**
     * @zh 过滤选项发生改变时触发
     * @en Triggered when the filter options are changed
     * @param {string} dataIndex
     * @param {string[]} filteredValues
     */
    filterChange: (dataIndex: string, filteredValues: string[]) => true,
    /**
     * @zh 表格分页发生改变时触发
     * @en Triggered when the table pagination changes
     * @param {number} page
     */
    pageChange: (page: number) => true,
    /**
     * @zh 表格每页数据数量发生改变时触发
     * @en Triggered when the number of data per page of the table changes
     * @param {number} pageSize
     */
    pageSizeChange: (pageSize: number) => true,
    /**
     * @zh 表格数据发生变化时触发
     * @en Triggered when table data changes
     * @param {TableData[]} data
     * @param {TableChangeExtra} extra
     * @param {TableData[]} currentData
     * @version 2.40.0 增加 currentData
     */
    change: (
      data: TableData[],
      extra: TableChangeExtra,
      currentData: TableData[],
    ) => true,
    /**
     * @zh 单元格 hover 进入时触发
     * @en Triggered when hovering into a cell
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellMouseEnter: (record: TableData, column: TableColumnData, ev: Event) =>
      true,
    /**
     * @zh 单元格 hover 退出时触发
     * @en Triggered when hovering out of a cell
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellMouseLeave: (record: TableData, column: TableColumnData, ev: Event) =>
      true,
    /**
     * @zh 点击单元格时触发
     * @en Triggered when a cell is clicked
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellClick: (record: TableData, column: TableColumnData, ev: Event) => true,
    /**
     * @zh 点击行数据时触发
     * @en Triggered when row data is clicked
     * @param {TableData} record
     * @param {Event} ev
     */
    rowClick: (record: TableData, ev: Event) => true,
    /**
     * @zh 点击表头数据时触发
     * @en Triggered when the header data is clicked
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    headerClick: (column: TableColumnData, ev: Event) => true,
    /**
     * @zh 调整列宽时触发
     * @en Triggered when column width is adjusted
     * @param {string} dataIndex
     * @param {number} width
     * @version 2.28.0
     */
    columnResize: (dataIndex: string, width: number) => true,
    /**
     * @zh 双击行数据时触发
     * @en Triggered when row data is double clicked
     * @param {TableData} record
     * @param {Event} ev
     */
    rowDblclick: (record: TableData, ev: Event) => true,
    /**
     * @zh 双击单元格时触发
     * @en Triggered when a cell is double clicked
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellDblclick: (record: TableData, column: TableColumnData, ev: Event) =>
      true,
    /**
     * @zh 右击行数据时触发
     * @en Triggered when row data is right clicked
     * @param {TableData} record
     * @param {Event} ev
     */
    rowContextmenu: (record: TableData, ev: Event) => true,
    /**
     * @zh 右击单元格时触发
     * @en Triggered when a cell is right clicked
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellContextmenu: (record: TableData, column: TableColumnData, ev: Event) =>
      true,
  },
  /**
   * @zh 表格列定义。启用时会屏蔽 columns 属性
   * @en Table column definitions. When enabled, the columns attribute is masked
   * @slot columns
   */
  /**
   * @zh 展开行图标
   * @en Expand row icon
   * @slot expand-icon
   * @binding {boolean} expanded
   * @binding {TableData} record
   */
  /**
   * @zh 展开行内容
   * @en Expand row content
   * @slot expand-row
   * @binding {TableData} record
   */
  /**
   * @zh 表格底部
   * @en Table Footer
   * @slot footer
   */
  /**
   * @zh 拖拽锚点图标
   * @en Drag handle icon
   * @slot drag-handle-icon
   * @version 2.16.0
   */
  /**
   * @zh 自定义 tbody 元素
   * @en Custom tbody element
   * @slot tbody
   * @version 2.16.0
   */
  /**
   * @zh 自定义 tr 元素
   * @en Custom tr element
   * @slot tr
   * @binding {TableData} record
   * @binding {number} rowIndex
   * @version 2.16.0
   */
  /**
   * @zh 自定义 td 元素
   * @en Custom td element
   * @slot td
   * @binding {TableColumnData} column
   * @binding {TableData} record
   * @binding {number} rowIndex
   * @version 2.16.0
   */
  /**
   * @zh 分页器左侧内容
   * @en Content on the left side of the pagination
   * @slot pagination-left
   * @version 2.18.0
   */
  /**
   * @zh 分页器右侧内容
   * @en Content on the right side of the pagination
   * @slot pagination-right
   * @version 2.18.0
   */
  /**
   * @zh 总结行
   * @en Content on the right side of the pagination
   * @slot summary-cell
   * @binding {TableColumnData} column
   * @binding {TableData} record
   * @binding {number} rowIndex
   * @version 2.23.0
   */
  /**
   * @zh 空白展示
   * @en Empty
   * @slot empty
   */
  /**
   * @zh 自定义 thead 元素
   * @en Custom thead element
   * @slot thead
   * @version 2.26.0
   */
  /**
   * @zh 自定义 th 元素
   * @en Custom th element
   * @slot th
   * @binding {TableColumnData} column
   * @version 2.26.0
   */
  /**
   * @zh 扩展列表头内容
   * @en Extra column header content
   * @slot extra-column-header
   */
  /**
   * @zh 扩展列单元格内容
   * @en Extra column cell content
   * @slot extra-column-cell
   * @binding {TableData} record
   */
  /**
   * @zh 表头单元格操作区（如列管理菜单）
   * @en Header cell actions area (e.g. column manager menu)
   * @slot header-cell-actions
   * @binding {TableColumnData} column
   * @binding {string} dataIndex
   */
  setup(props, { emit, slots }) {
    const {
      columns,
      rowKey,
      rowSelection,
      expandable,
      loadMore,
      filterIconAlignLeft,
      selectedKeys,
      defaultSelectedKeys,
      expandedKeys,
      defaultExpandedKeys,
      defaultExpandAllRows,
      spanMethod,
      draggable,
      summarySpanMethod,
      scrollbar,
      showEmptyTree,
    } = toRefs(props);
    const prefixCls = getPrefixCls("table");
    const extraColumnConfig = computed(() =>
      resolveExtraColumnConfig(props.extraColumn),
    );
    const configCtx = inject(configProviderInjectionKey, undefined);
    const bordered = computed(() => {
      if (isObject(props.bordered)) {
        return { ...DEFAULT_BORDERED, ...props.bordered };
      }
      return { ...DEFAULT_BORDERED, wrapper: props.bordered };
    });
    const { children, components } = useChildrenComponents("TableColumn");
    const checkStrictly = computed(
      () => rowSelection.value?.checkStrictly ?? true,
    );

    const { displayScrollbar, scrollbarProps } = useScrollbar(scrollbar);

    const tableWidth = ref(0);
    const scrollX = ref(false);
    const bodyWidth = ref(0);
    const columnRealWidth = reactive<Record<string, number>>({});

    // whether to scroll
    const isScroll = computed(() => {
      const y = props.height != null || props.maxHeight != null;
      return { x: scrollX.value, y };
    });

    // const theadRef = ref<HTMLElement>();
    const summaryRef = ref<HTMLElement>();
    const thRefs = ref<Record<string, HTMLElement>>({});

    const { componentRef: contentComRef, elementRef: contentRef } =
      useComponentRef("containerRef");
    const { componentRef: tbodyComRef, elementRef: tbodyRef } =
      useComponentRef("containerRef");
    const { componentRef: virtualComRef, elementRef: virtualRef } =
      useComponentRef("viewportRef");
    const { componentRef: theadComRef, elementRef: theadRef } =
      useComponentRef("containerRef");
    const containerElement = computed(() => {
      if (splitTable.value) {
        if (isVirtualList.value) {
          return virtualRef.value;
        }
        return tbodyRef.value;
      }
      return contentRef.value;
    });

    const splitTable = computed(
      () =>
        isScroll.value.y ||
        props.stickyHeader ||
        isVirtualList.value ||
        (isScroll.value.x && flattenData.value.length === 0),
    );

    const toCssSize = (value: number | string) =>
      isNumber(value) ? `${value}px` : value;

    const bodyMaxHeight = computed(() => {
      if (props.maxHeight != null) {
        return toCssSize(props.maxHeight);
      }
      if (props.height != null) {
        return isNumber(props.height) ? `${props.height}px` : "100%";
      }
      return undefined;
    });

    const tableContainerRef = ref<HTMLElement>();
    // 祖先链存在「宽度由内容决定」的元素时，root 会被 inline 钉在第一个
    // 宽度不依赖内容的祖先的内容宽上（见 updateTableWidth），正常布局下为 undefined
    const rootMaxWidth = ref<string>();

    const updateTableWidth = () => {
      // 必须量 container：边框画在 container 上，根节点 clientWidth 会偏大，
      // 列宽按根节点铺满后 scrollWidth > clientWidth，虚拟滚动条会一直出现
      const el = tableContainerRef.value;
      if (!el) return;
      const root = el.closest(`.${prefixCls}`) as HTMLElement | null;
      // 探测：钉住期间 root 尺寸不再随容器变化（RO 不触发），且钉住本身会掩盖
      // 祖先链从「追逐」恢复「健康」的变化（中间层 shrink-wrap 的是被钉住的
      // root，量不出真实约束）。先解开 inline 钉宽，同步量出自然宽度再判定。
      // 解开—测量—恢复在同一同步块内完成，中间态不会被绘制。
      if (root && rootMaxWidth.value != null) {
        root.style.maxWidth = "";
      }
      let width = Math.floor(el.clientWidth);
      // container 的边框（offsetWidth 与 clientWidth 之差，与尺寸无关）：
      // 钉住后 container clientWidth = 诚实宽度 - chrome，引擎须按后者铺满，
      // 否则铺满后 scrollWidth 比 clientWidth 大出边框宽，虚拟滚动条误出现
      const chrome = el.offsetWidth - el.clientWidth;
      let pinned = false;
      if (width > 0) {
        // 祖先链含「宽度由内容决定」的元素时（width:max-content、shrink-to-fit
        // 的 inline-block 等），容器宽会追逐表格像素宽：引擎永远量到
        // 容器 ≈ 内容，判定不溢出 → 不出现内部滚动条、页面被一路撑大。
        // 正常 block 链中祖先内容宽不会窄于容器（width:100% 逐层向下解析），
        // 一旦出现更窄的祖先，说明中间层被内容撑大，可用宽度应以最窄祖先的
        // 内容宽为准，同时把 root inline 钉在该宽度上阻止 CSS 侧继续追逐。
        // body/html 不参与：body 宽收敛于视口，会把「有意比视口宽的面板」误判为
        // 追逐（整页无约束的追逐由 CSS max-width:min(100%,100vw) 兜底）。
        let honest = width;
        let node = el.parentElement;
        while (node && node !== document.body) {
          const style = getComputedStyle(node);
          const contentWidth = Math.floor(
            node.clientWidth -
              (parseFloat(style.paddingLeft) || 0) -
              (parseFloat(style.paddingRight) || 0),
          );
          if (contentWidth > 0 && contentWidth < honest - 1) {
            honest = contentWidth;
            pinned = true;
          }
          node = node.parentElement;
        }
        if (pinned) {
          width = Math.max(0, honest - chrome);
        }
      }
      const nextPin = pinned ? `${width + chrome}px` : undefined;
      // 立即恢复 inline 钉宽（Vue 之后也会按 rootMaxWidth 应用同值，幂等）；
      // 不能靠 Vue 补写：钉宽未变化时 Vue 不会重新 patch，探测清掉的值就丢了
      if (root) {
        root.style.maxWidth = nextPin ?? "";
      }
      rootMaxWidth.value = nextPin;
      if (width > 0 && width !== tableWidth.value) {
        tableWidth.value = width;
      }
    };

    onMounted(() => {
      // 钉住期间 root 尺寸不变、RO 不触发，窗口变化时需主动重探诚实宽度
      window.addEventListener("resize", updateTableWidth);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateTableWidth);
    });

    const handleTableResize = () => {
      updateTableWidth();
    };

    const slotColumnMap = reactive(new Map<number, TableColumnData>());
    const slotColumns = ref<TableColumnData[]>();

    watch([components, slotColumnMap], ([components, slotColumnMap]) => {
      if (components.length > 0) {
        const columns: TableColumnData[] = [];
        components.forEach((id) => {
          const column = slotColumnMap.get(id);
          if (column) columns.push(column);
        });
        slotColumns.value = columns;
      } else {
        slotColumns.value = undefined;
      }
    });

    // 拆解分组后的数据表头信息
    const dataColumnMap = new Map<string, TableColumnData>();
    const dataColumns = ref<TableColumnData[]>([]);
    const groupColumns = ref<TableColumnData[][]>([]);

    const { resizingColumn, columnWidth, handleThMouseDown } = useColumnResize(
      thRefs,
      emit,
    );

    watch(
      [
        columns,
        slotColumns,
        columnWidth,
        () => extraColumnConfig.value,
        () => props.size,
      ],
      ([columns, slotColumns]) => {
        const baseColumns = [...(slotColumns ?? columns ?? [])];
        if (extraColumnConfig.value.enabled) {
          const extraCls = `${prefixCls}-extra-column-cell`;
          baseColumns.push({
            dataIndex: extraColumnConfig.value.dataIndex,
            title: "",
            width: getExtraColumnWidth(
              props.size,
              extraColumnConfig.value.width,
            ),
            fixed: extraColumnConfig.value.fixed,
            align: extraColumnConfig.value.align,
            headerCellClass: extraCls,
            cellClass: extraCls,
            slotName: "extra-column-cell",
            render: () => null,
          });
        }
        const result = getGroupColumns(baseColumns, dataColumnMap, columnWidth);
        dataColumns.value = result.dataColumns;
        groupColumns.value = result.groupColumns;
      },
      { immediate: true, deep: true },
    );

    const isPaginationTop = computed(() =>
      ["tl", "top", "tr"].includes(props.pagePosition),
    );

    const hasLeftFixedColumn = ref(false);
    const hasRightFixedColumn = ref(false);
    const hasLeftFixedDataColumns = ref(false);

    watchEffect(() => {
      let _hasLeftFixedColumn = false;
      let _hasRightFixedColumn = false;
      let _hasLeftFixedDataColumns = false;
      if (
        props.rowSelection?.fixed ||
        props.expandable?.fixed ||
        props.draggable?.fixed
      ) {
        _hasLeftFixedColumn = true;
      }
      for (const column of dataColumns.value) {
        if (column.fixed === "left") {
          _hasLeftFixedColumn = true;
          _hasLeftFixedDataColumns = true;
        } else if (column.fixed === "right") {
          _hasRightFixedColumn = true;
        }
      }
      if (_hasLeftFixedColumn !== hasLeftFixedColumn.value) {
        hasLeftFixedColumn.value = _hasLeftFixedColumn;
      }
      if (_hasRightFixedColumn !== hasRightFixedColumn.value) {
        hasRightFixedColumn.value = _hasRightFixedColumn;
      }
      if (_hasLeftFixedDataColumns !== hasLeftFixedDataColumns.value) {
        hasLeftFixedDataColumns.value = _hasLeftFixedDataColumns;
      }
    });

    const hasEllipsis = computed(() => {
      for (const col of dataColumns.value) {
        if (col.ellipsis) {
          return true;
        }
      }
      return false;
    });

    const handleChange = (
      type: "pagination" | "sorter" | "filter" | "drag",
    ) => {
      const extra: TableChangeExtra = {
        type,
        page: page.value,
        pageSize: pageSize.value,
        sorter: computedSorter.value,
        filters: computedFilters.value,
        dragTarget: type === "drag" ? dragState.data : undefined,
      };
      emit("change", flattenRawData.value, extra, sortedData.value);
    };

    const handleFilterChange = (
      dataIndex: string,
      filteredValues: string[],
    ) => {
      _filters.value = {
        ...computedFilters.value,
        [dataIndex]: filteredValues,
      };

      emit("filterChange", dataIndex, filteredValues);
      handleChange("filter");
    };

    const handleSorterChange = (
      dataIndex: string,
      direction: "ascend" | "descend" | "",
    ) => {
      _sorter.value = direction
        ? {
            field: dataIndex,
            direction,
          }
        : undefined;

      emit("sorterChange", dataIndex, direction);
      handleChange("sorter");
    };

    const { _filters, computedFilters, resetFilters, clearFilters } = useFilter(
      {
        columns: dataColumns,
        onFilterChange: handleFilterChange,
      },
    );
    const { _sorter, computedSorter, resetSorters, clearSorters } = useSorter({
      columns: dataColumns,
      onSorterChange: handleSorterChange,
    });

    const disabledKeys = new Set();

    const allRowKeys = computed(() => {
      const allRowKeys: BaseType[] = [];
      disabledKeys.clear();
      const travelData = (data: TableData[]) => {
        if (isArray(data) && data.length > 0) {
          for (const record of data) {
            allRowKeys.push(record[rowKey.value]);
            if (record.disabled) {
              disabledKeys.add(record[rowKey.value]);
            }
            if (record.children) {
              travelData(record.children);
            }
          }
        }
      };

      travelData(props.data);

      return allRowKeys;
    });

    const currentAllRowKeys = computed(() => {
      const keys: BaseType[] = [];
      const travel = (data: TableDataWithRaw[]) => {
        for (const record of data) {
          keys.push(record.key);
          if (record.children) {
            travel(record.children);
          }
        }
      };
      travel(flattenData.value);

      return keys;
    });

    const currentAllEnabledRowKeys = computed(() => {
      const keys: BaseType[] = [];

      const travel = (data: TableDataWithRaw[]) => {
        for (const record of data) {
          if (!record.disabled) {
            keys.push(record.key);
          }
          if (record.children) {
            travel(record.children);
          }
        }
      };
      travel(flattenData.value);

      return keys;
    });

    const {
      isRadio,
      selectedRowKeys,
      currentSelectedRowKeys,
      handleSelect,
      handleSelectAllLeafs,
      handleSelectAll,
      select,
      selectAll,
      clearSelected,
    } = useRowSelection({
      selectedKeys,
      defaultSelectedKeys,
      rowSelection,
      currentAllRowKeys,
      currentAllEnabledRowKeys,
      emit,
    });

    const { expandedRowKeys, handleExpand, expand, expandAll } = useExpand({
      expandedKeys,
      defaultExpandedKeys,
      defaultExpandAllRows,
      expandable,
      allRowKeys,
      emit,
    });

    const lazyLoadData = reactive<Record<string, TableData[]>>({});

    const addLazyLoadData = (
      children: TableData[] | undefined,
      record: TableDataWithRaw,
    ) => {
      if (children) {
        lazyLoadData[record.key] = children;
      }
    };

    const isValidRecord = (record: TableDataWithRaw) => {
      for (const field of Object.keys(computedFilters.value)) {
        const filteredValues = computedFilters.value[field];
        const column = dataColumnMap.get(field);
        if (column && column.filterable?.filter && filteredValues.length > 0) {
          const result = column.filterable?.filter(filteredValues, record.raw);
          if (!result) {
            return result;
          }
        }
      }
      return true;
    };

    const {
      dragType,
      dragState,
      handleDragStart,
      handleDragEnter,
      handleDragLeave,
      handleDragover,
      handleDragEnd,
      handleDrop,
    } = useDrag(draggable);

    const processedData = computed(() => {
      const travel = (data: TableData[]) => {
        const result: TableDataWithRaw[] = [];

        for (const _record of data) {
          const record: TableDataWithRaw = {
            raw: _record,
            key: _record[props.rowKey],
            disabled: _record.disabled,
            expand: _record.expand,
            isLeaf: _record.isLeaf,
          };
          if (_record.children) {
            record.isLeaf = false;
            record.children = travel(_record.children);
          } else if (props.loadMore && !_record.isLeaf) {
            record.isLeaf = false;
            if (lazyLoadData[record.key]) {
              record.children = travel(lazyLoadData[record.key]);
            }
          } else {
            record.isLeaf = true;
          }
          record.hasSubtree = Boolean(
            record.children
              ? props.hideExpandButtonOnEmpty
                ? record.children.length > 0
                : true
              : props.loadMore && !record.isLeaf,
          );

          result.push(record);
        }
        return result;
      };

      return travel(props.data ?? []);
    });

    const validData = computed(() => {
      const travel = (data: TableDataWithRaw[]) =>
        data.filter((record) => {
          if (isValidRecord(record)) {
            if (record.children) {
              record.children = travel(record.children);
            }
            return true;
          }
          return false;
        });

      return Object.keys(computedFilters.value).length > 0
        ? travel(processedData.value)
        : processedData.value;
    });

    const sortedData = computed(() => {
      const data = mapArrayWithChildren(validData.value);
      if (data.length > 0) {
        if (computedSorter.value?.field) {
          const column = dataColumnMap.get(computedSorter.value.field);
          if (column && column.sortable?.sorter !== true) {
            const { field, direction } = computedSorter.value;
            data.sort((a, b) => {
              const valueA = getValueByPath(a.raw, field);
              const valueB = getValueByPath(b.raw, field);

              if (
                column.sortable?.sorter &&
                isFunction(column.sortable.sorter)
              ) {
                return column.sortable.sorter(a.raw, b.raw, {
                  dataIndex: field,
                  direction,
                });
              }

              const result = valueA > valueB ? 1 : -1;
              return direction === "descend" ? -result : result;
            });
          }
        }

        const { sourcePath, targetPath } = dragState;
        // drag row to another row
        if (
          dragState.dragging &&
          targetPath.length &&
          targetPath.toString() !== sourcePath.toString()
        ) {
          // same level drag
          if (
            sourcePath.length === targetPath.length &&
            sourcePath.slice(0, -1).toString() ===
              targetPath.slice(0, -1).toString()
          ) {
            let children = data;
            for (let i = 0; i < sourcePath.length; i++) {
              const sourceIndex = sourcePath[i];
              const isLast = i >= sourcePath.length - 1;
              if (isLast) {
                const sourceChild = children[sourceIndex];
                const targetIndex = targetPath[i];
                if (targetIndex > sourceIndex) {
                  // move down
                  children.splice(targetIndex + 1, 0, sourceChild);
                  children.splice(sourceIndex, 1);
                } else {
                  // move up
                  children.splice(targetIndex, 0, sourceChild);
                  children.splice(sourceIndex + 1, 1);
                }
              } else {
                children = children[sourceIndex].children ?? [];
              }
            }
          }
        }
      }
      return data;
    });

    const { page, pageSize, handlePageChange, handlePageSizeChange } =
      usePagination(props, emit);

    const onlyCurrent = computed(
      () => rowSelection.value?.onlyCurrent ?? false,
    );

    watch(page, (cur, pre) => {
      if (cur !== pre && onlyCurrent.value) {
        clearSelected();
      }
    });

    const flattenData = computed(() => {
      if (props.pagination && sortedData.value.length > pageSize.value) {
        return sortedData.value.slice(
          (page.value - 1) * pageSize.value,
          page.value * pageSize.value,
        );
      }
      return sortedData.value;
    });

    const flattenRawData = computed(() => mapRawTableData(flattenData.value));

    const getSummaryData = () => {
      return dataColumns.value.reduce(
        (per, column, index) => {
          if (column.dataIndex) {
            if (index === 0) {
              setValueByPath(per, column.dataIndex, props.summaryText, {
                addPath: true,
              });
            } else {
              let count = 0;
              let isNotNumber = false;
              flattenData.value.forEach((data) => {
                if (column.dataIndex) {
                  const _number = getValueByPath(data.raw, column.dataIndex);
                  if (isNumber(_number)) {
                    count += _number;
                  } else if (!isUndefined(_number) && !isNull(_number)) {
                    isNotNumber = true;
                  }
                }
              });
              setValueByPath(per, column.dataIndex, isNotNumber ? "" : count, {
                addPath: true,
              });
            }
          }

          return per;
        },
        {} as Record<string, any>,
      );
    };

    const getTableDataWithRaw = (data?: TableData[]): TableDataWithRaw[] => {
      if (data && data.length > 0) {
        return data.map((raw) => {
          return {
            raw,
            key: raw[props.rowKey],
          };
        });
      }
      return [];
    };

    const summaryData = computed(() => {
      if (props.summary) {
        if (isFunction(props.summary)) {
          return getTableDataWithRaw(
            props.summary({
              columns: dataColumns.value,
              data: flattenRawData.value,
            }),
          );
        }
        return getTableDataWithRaw([getSummaryData()]);
      }
      return [];
    });

    const containerScrollLeft = ref(0);

    const alignLeft = ref(true);
    const alignRight = ref(true);

    const setAlignPosition = () => {
      let _alignLeft = true;
      let _alignRight = true;

      const scrollContainer = containerElement.value;

      if (scrollContainer) {
        _alignLeft = containerScrollLeft.value === 0;
        _alignRight =
          Math.ceil(containerScrollLeft.value + scrollContainer.offsetWidth) >=
          scrollContainer.scrollWidth;
      }

      if (_alignLeft !== alignLeft.value) {
        alignLeft.value = _alignLeft;
      }
      if (_alignRight !== alignRight.value) {
        alignRight.value = _alignRight;
      }
    };

    const getTableScrollCls = () => {
      if (alignLeft.value && alignRight.value) {
        return `${prefixCls}-scroll-position-both`;
      }
      if (alignLeft.value) {
        return `${prefixCls}-scroll-position-left`;
      }
      if (alignRight.value) {
        return `${prefixCls}-scroll-position-right`;
      }
      return `${prefixCls}-scroll-position-middle`;
    };

    const getTableFixedCls = () => {
      const cls: string[] = [];
      if (hasLeftFixedColumn.value) {
        cls.push(`${prefixCls}-has-fixed-col-left`);
      }
      if (hasRightFixedColumn.value) {
        cls.push(`${prefixCls}-has-fixed-col-right`);
      }
      return cls;
    };

    const handleScroll = (e: Event) => {
      if (
        (e.target as HTMLDivElement).scrollLeft !== containerScrollLeft.value
      ) {
        containerScrollLeft.value = (e.target as HTMLDivElement).scrollLeft;
      }
      setAlignPosition();
    };

    const onTbodyScroll = (e: Event) => {
      handleScroll(e);
      const { scrollLeft } = e.target as HTMLDivElement;
      if (theadRef.value) {
        theadRef.value.scrollLeft = scrollLeft;
      }
      if (summaryRef.value) {
        summaryRef.value.scrollLeft = scrollLeft;
      }
    };

    const handleRowClick = (record: TableDataWithRaw, ev: Event) => {
      emit("rowClick", record.raw, ev);
    };

    const handleRowDblclick = (record: TableDataWithRaw, ev: Event) => {
      emit("rowDblclick", record.raw, ev);
    };

    const handleRowContextMenu = (record: TableDataWithRaw, ev: Event) => {
      emit("rowContextmenu", record.raw, ev);
    };

    const handleCellClick = (
      record: TableDataWithRaw,
      column: TableColumnData,
      ev: Event,
    ) => {
      emit("cellClick", record.raw, column, ev);
    };

    const handleCellMouseEnter = debounce(
      (record: TableDataWithRaw, column: TableColumnData, ev: Event) => {
        emit("cellMouseEnter", record.raw, column, ev);
      },
      30,
    );

    const handleCellMouseLeave = debounce(
      (record: TableDataWithRaw, column: TableColumnData, ev: Event) => {
        emit("cellMouseLeave", record.raw, column, ev);
      },
      30,
    );

    const handleCellDblclick = (
      record: TableDataWithRaw,
      column: TableColumnData,
      ev: Event,
    ) => {
      emit("cellDblclick", record.raw, column, ev);
    };

    const handleCellContextmenu = (
      record: TableDataWithRaw,
      column: TableColumnData,
      ev: Event,
    ) => {
      emit("cellContextmenu", record.raw, column, ev);
    };

    const handleHeaderClick = (column: TableColumnData, ev: Event) => {
      emit("headerClick", column, ev);
    };

    const operations = computed(() => {
      const operations: TableOperationColumn[] = [];
      const hasFixedColumn =
        hasLeftFixedColumn.value || hasRightFixedColumn.value;
      let dragHandle: TableOperationColumn | undefined;
      let expand: TableOperationColumn | undefined;
      let selection: TableOperationColumn | undefined;

      if (props.draggable?.type === "handle") {
        dragHandle = {
          name: "drag-handle",
          title: props.draggable.title,
          width: props.draggable.width,
          fixed: props.draggable.fixed || hasFixedColumn,
        };
        operations.push(dragHandle);
      }

      if (props.expandable) {
        expand = {
          name: "expand",
          title: props.expandable.title,
          width: props.expandable.width,
          fixed: props.expandable.fixed || hasFixedColumn,
        };
        operations.push(expand);
      }

      if (props.rowSelection) {
        selection = {
          name:
            props.rowSelection.type === "radio"
              ? "selection-radio"
              : "selection-checkbox",
          title: props.rowSelection.title,
          width: props.rowSelection.width,
          fixed: props.rowSelection.fixed || hasFixedColumn,
        };
        operations.push(selection);
      }
      if (
        !hasLeftFixedDataColumns.value &&
        operations.length > 0 &&
        operations[operations.length - 1].fixed
      ) {
        operations[operations.length - 1].isLastLeftFixed = true;
      }
      const operationsFn = props.components?.operations;

      return isFunction(operationsFn)
        ? operationsFn({ dragHandle, expand, selection })
        : operations;
    });

    // 与 Element 一致：默认 fixed；仅 max-height（以及 ellipsis）会强制 fixed
    const resolvedTableLayout = computed<"fixed" | "auto">(() => {
      if (props.maxHeight != null) return "fixed";
      if (hasEllipsis.value) return "fixed";
      return props.tableLayout;
    });

    const syncColumnsLayout = () => {
      // fixed 模式下宽度由引擎接管：清掉 auto 模式量宽回写到操作列的值，
      // 避免过时的 _realWidth 继续参与冻结偏移（数据列由引擎整体覆写，无需清理）
      for (const operation of operations.value) {
        if (operation._realWidth !== undefined) {
          delete operation._realWidth;
        }
      }
      const result = updateColumnsWidth({
        containerWidth: tableWidth.value,
        dataColumns: dataColumns.value,
        operations: operations.value,
        fit: props.fit,
        // extra-column 钉死（默认 28px），不参与铺满容器的比例放大
        exactDataIndexes: extraColumnConfig.value.enabled
          ? [extraColumnConfig.value.dataIndex]
          : undefined,
      });
      scrollX.value = result.scrollX;
      bodyWidth.value = result.bodyWidth;
      Object.keys(columnRealWidth).forEach((key) => {
        if (!(key in result.columnRealWidth)) {
          delete columnRealWidth[key];
        }
      });
      Object.assign(columnRealWidth, result.columnRealWidth);
    };

    watch(
      [
        dataColumns,
        operations,
        tableWidth,
        () => props.fit,
        resolvedTableLayout,
        () =>
          Object.keys(columnWidth)
            .map((key) => `${key}:${columnWidth[key]}`)
            .join("|"),
      ],
      () => {
        syncColumnsLayout();
      },
      { immediate: true },
    );

    /**
     * auto 布局下 colgroup 不渲染 col，浏览器按内容分配列宽，与引擎写入的
     * _realWidth 不一致会导致冻结列 sticky 偏移错位。对齐 Element Plus 的
     * saveIndexSelection/updateFixedColumnStyle：渲染后测量叶子单元格的实际
     * 宽度回写 _realWidth，让 getFixedNumber 的偏移基于真实宽度。
     * 优先量表头（非拆分表头表体同一张 table，宽度一致）；无表头时量首行 td。
     * 回写不触发布局变化（auto 无 col），量到相同值时不写，避免更新循环。
     */
    const syncAutoLayoutRealWidths = () => {
      if (resolvedTableLayout.value !== "auto") return;
      if (!hasLeftFixedColumn.value && !hasRightFixedColumn.value) return;
      const root = tableContainerRef.value;
      if (!root) return;

      let cells = Array.from(
        root.querySelectorAll<HTMLElement>("th[data-column-key]"),
      );
      if (cells.length === 0) {
        const firstRow = root.querySelector("tbody tr");
        cells = firstRow
          ? Array.from(
              firstRow.querySelectorAll<HTMLElement>("td[data-column-key]"),
            )
          : [];
      }
      if (cells.length > 0) {
        const columnByKey = new Map(
          dataColumns.value.map((column) => [column.dataIndex, column]),
        );
        for (const cell of cells) {
          const key = cell.getAttribute("data-column-key");
          const column = key ? columnByKey.get(key) : undefined;
          if (!column) continue;
          const width = cell.getBoundingClientRect().width;
          if (width > 0 && column._realWidth !== width) {
            column._realWidth = width;
          }
        }
      }

      const operationCells = root.querySelectorAll<HTMLElement>(
        "th[data-operation-key]",
      );
      if (operationCells.length > 0) {
        const operationByKey = new Map(
          operations.value.map((operation) => [operation.name, operation]),
        );
        operationCells.forEach((cell) => {
          const key = cell.getAttribute("data-operation-key");
          const operation = key ? operationByKey.get(key) : undefined;
          if (!operation) return;
          const width = cell.getBoundingClientRect().width;
          if (width > 0 && operation._realWidth !== width) {
            operation._realWidth = width;
          }
        });
      }
    };

    // 量宽回写的触发点：布局结果 / 列结构 / 数据变化后（post，确保 DOM 已 patch）。
    // 不能用 onMounted/onUpdated：th/td 是子组件，它们的 computed 重渲染不会触发
    // Table 自身的 updated；引擎重算又发生在 watch 回调里，post effect 时机最可靠。
    // 回写不会改变下列依赖（引用不变），且相同值不写，不会形成循环。
    watchPostEffect(() => {
      bodyWidth.value;
      dataColumns.value;
      operations.value;
      resolvedTableLayout.value;
      flattenData.value;
      syncAutoLayoutRealWidths();
    });

    const tableContentWidthStyle = computed(() => {
      // 与 Element Plus 一致：始终给 <table> 元素设置计算后的像素宽度，
      // 避免显式 width 的列在容器较宽时被浏览器拉宽
      if (bodyWidth.value > 0) {
        return { width: `${bodyWidth.value}px` } as CSSProperties;
      }
      return undefined;
    });

    const headerStyle = computed(() => tableContentWidthStyle.value);

    const contentStyle = computed(() => tableContentWidthStyle.value);

    const addColumn = (id: number, column: TableColumnData) => {
      slotColumnMap.set(id, column);
    };

    const removeColumn = (id: number) => {
      slotColumnMap.delete(id);
    };

    provide(
      tableInjectionKey,
      reactive({
        loadMore,
        addLazyLoadData,
        slots,
        sorter: computedSorter,
        filters: computedFilters,
        filterIconAlignLeft,
        resizingColumn,
        checkStrictly,
        currentAllEnabledRowKeys,
        currentSelectedRowKeys,
        addColumn,
        removeColumn,
        onSelectAll: handleSelectAll,
        onSelect: handleSelect,
        onSelectAllLeafs: handleSelectAllLeafs,
        onSorterChange: handleSorterChange,
        onFilterChange: handleFilterChange,
        onThMouseDown: handleThMouseDown,
        tableLayout: resolvedTableLayout,
        extraColumnDataIndex: computed(() =>
          extraColumnConfig.value.enabled
            ? extraColumnConfig.value.dataIndex
            : undefined,
        ),
      }),
    );

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${props.size}`,
      {
        [`${prefixCls}-border`]: bordered.value.wrapper,
        [`${prefixCls}-border-cell`]: bordered.value.cell,
        [`${prefixCls}-border-header-cell`]:
          !bordered.value.cell && bordered.value.headerCell,
        [`${prefixCls}-border-body-cell`]:
          !bordered.value.cell && bordered.value.bodyCell,
        [`${prefixCls}-stripe`]: props.stripe,
        [`${prefixCls}-hover`]: props.hoverable,
        [`${prefixCls}-dragging`]: dragState.dragging,
        [`${prefixCls}-type-selection`]: Boolean(props.rowSelection),
        [`${prefixCls}-empty`]: props.data && flattenData.value.length === 0,
        [`${prefixCls}-layout-fixed`]: resolvedTableLayout.value === "fixed",
        // sticky 依赖祖先可滚动且不能有 overflow:hidden；开启吸顶/吸底时放开裁剪
        [`${prefixCls}-scrollport-visible`]: Boolean(
          props.stickyHeader || props.stickyPagination,
        ),
      },
    ]);

    const paginationCls = computed(() => [
      `${prefixCls}-pagination`,
      {
        [`${prefixCls}-pagination-left`]:
          props.pagePosition === "tl" || props.pagePosition === "bl",
        [`${prefixCls}-pagination-center`]:
          props.pagePosition === "top" || props.pagePosition === "bottom",
        [`${prefixCls}-pagination-right`]:
          props.pagePosition === "tr" || props.pagePosition === "br",
        [`${prefixCls}-pagination-top`]: isPaginationTop.value,
      },
    ]);

    const tableCls = computed(() => {
      const cls = getTableFixedCls();

      if (isScroll.value.x) {
        cls.push(`${prefixCls}-scroll-x`);
        cls.push(getTableScrollCls());
      }

      if (splitTable.value) {
        cls.push(`${prefixCls}-scroll-y`);
      }

      return cls;
    });

    const isVirtualList = computed(() => Boolean(props.virtualListProps));

    const thWidth = ref<Record<string, number>>({});

    const getThWidth = () => {
      const width: Record<string, number> = {};
      for (const key of Object.keys(thRefs.value)) {
        width[key] = thRefs.value[key].offsetWidth;
      }
      thWidth.value = width;
    };

    const hasScrollBar = ref(false);

    const isTbodyHasScrollBar = () => {
      if (tbodyRef.value) {
        return tbodyRef.value.offsetWidth > tbodyRef.value.clientWidth;
      }
      return false;
    };

    const handleTbodyResize = () => {
      const _hasScrollBar = isTbodyHasScrollBar();
      if (hasScrollBar.value !== _hasScrollBar) {
        hasScrollBar.value = _hasScrollBar;
      }
      setAlignPosition();
      getThWidth();
    };

    onMounted(() => {
      hasScrollBar.value = isTbodyHasScrollBar();
      getThWidth();
    });

    const spinProps = computed(() =>
      isObject(props.loading) ? props.loading : { loading: props.loading },
    );

    const renderEmpty = () => {
      return (
        <Tr empty>
          <Td colSpan={dataColumns.value.length + operations.value.length}>
            {slots.empty?.() ??
              configCtx?.slots.empty?.({ component: "table" }) ?? <Empty />}
          </Td>
        </Tr>
      );
    };

    const renderExpandContent = (record: TableDataWithRaw) => {
      if (record.expand) {
        return isFunction(record.expand) ? record.expand() : record.expand;
      }
      if (slots["expand-row"]) {
        return slots["expand-row"]({ record: record.raw });
      }
      if (props.expandable?.expandedRowRender) {
        return props.expandable.expandedRowRender(record.raw);
      }

      return undefined;
    };

    const allColumns = computed(() =>
      ([] as (TableColumnData | TableOperationColumn)[]).concat(
        operations.value,
        dataColumns.value,
      ),
    );

    const spanColumns = computed(() =>
      props.spanAll ? allColumns.value : dataColumns.value,
    );

    const { tableSpan, removedCells } = useSpan({
      spanMethod,
      data: flattenData,
      columns: spanColumns,
    });

    const { tableSpan: tableSummarySpan, removedCells: removedSummaryCells } =
      useSpan({
        spanMethod: summarySpanMethod,
        data: summaryData,
        columns: allColumns,
      });

    const getVirtualColumnStyle = (name: string | undefined) => {
      if (!isVirtualList.value || !name || !thWidth.value[name]) {
        return undefined;
      }

      return { width: `${thWidth.value[name]}px` };
    };

    const renderSummaryRow = (record: TableDataWithRaw, rowIndex: number) => {
      return (
        <Tr
          v-slots={{
            tr: slots.tr,
          }}
          key={`table-summary-${rowIndex}`}
          class={[
            `${prefixCls}-tr-summary`,
            isFunction(props.rowClass)
              ? props.rowClass(record.raw, rowIndex)
              : props.rowClass,
          ]}
          // @ts-ignore
          onClick={(ev: Event) => handleRowClick(record, ev)}
        >
          {operations.value.map((operation, index) => {
            const cellId = `${rowIndex}-${index}-${record.key}`;
            const [rowspan, colspan] = tableSummarySpan.value[cellId] ?? [1, 1];

            if (removedSummaryCells.value.includes(cellId)) {
              return null;
            }

            const style = getVirtualColumnStyle(operation.name);

            return (
              <OperationTd
                style={style}
                operationColumn={operation}
                operations={operations.value}
                record={record}
                rowSpan={rowspan}
                colSpan={colspan}
                summary
              />
            );
          })}
          {dataColumns.value.map((column, index) => {
            const cellId = `${rowIndex}-${operations.value.length + index}-${record.key}`;
            const [rowspan, colspan] = tableSummarySpan.value[cellId] ?? [1, 1];

            if (removedSummaryCells.value.includes(cellId)) {
              return null;
            }

            const style = getVirtualColumnStyle(column.dataIndex);

            return (
              <Td
                v-slots={{
                  td: slots.td,
                  cell: slots["summary-cell"],
                }}
                key={`td-${cellId}`}
                style={style}
                rowIndex={rowIndex}
                record={record}
                column={column}
                operations={operations.value}
                dataColumns={dataColumns.value}
                rowSpan={rowspan}
                colSpan={colspan}
                summary
                // @ts-ignore
                onClick={(ev: Event) => handleCellClick(record, column, ev)}
                onDblclick={(ev: Event) =>
                  handleCellDblclick(record, column, ev)
                }
                onMouseenter={(ev: Event) =>
                  handleCellMouseEnter(record, column, ev)
                }
                onMouseleave={(ev: Event) =>
                  handleCellMouseLeave(record, column, ev)
                }
                onContextmenu={(ev: Event) =>
                  handleCellContextmenu(record, column, ev)
                }
              />
            );
          })}
        </Tr>
      );
    };

    const renderSummary = () => {
      if (summaryData.value && summaryData.value.length > 0) {
        return (
          <tfoot>
            {summaryData.value.map((data, index) =>
              renderSummaryRow(data, index),
            )}
          </tfoot>
        );
      }
      return null;
    };

    const renderExpandBtn = (
      record: TableDataWithRaw,
      stopPropagation = true,
    ) => {
      const currentKey = record.key;
      const expanded = expandedRowKeys.value.includes(currentKey);

      return (
        <button
          type="button"
          class={`${prefixCls}-expand-btn`}
          onClick={(ev: Event) => {
            handleExpand(currentKey, record.raw);
            if (stopPropagation) {
              ev.stopPropagation();
            }
          }}
        >
          {slots["expand-icon"]?.({ expanded, record: record.raw }) ??
            props.expandable?.icon?.(expanded, record.raw) ??
            (expanded ? <IconMinus /> : <IconPlus />)}
        </button>
      );
    };

    const renderExpand = (
      record: TableDataWithRaw,
      {
        indentSize,
        indexPath,
        allowDrag,
        expandContent,
      }: {
        indentSize: number;
        indexPath: number[];
        allowDrag: boolean;
        expandContent: any;
      },
    ) => {
      if (record.hasSubtree) {
        if (record.children?.length === 0 && showEmptyTree.value) {
          return renderEmpty();
        }

        return record.children?.map((item, index) =>
          renderRecord(item, index, {
            indentSize,
            indexPath,
            allowDrag,
          }),
        );
      }

      if (expandContent) {
        const scrollContainer = containerElement.value;

        return (
          <Tr key={`${record.key}-expand`} expand>
            <Td
              isFixedExpand={
                hasLeftFixedColumn.value || hasRightFixedColumn.value
              }
              containerWidth={scrollContainer?.clientWidth}
              colSpan={dataColumns.value.length + operations.value.length}
            >
              {expandContent}
            </Td>
          </Tr>
        );
      }

      return null;
    };

    const renderRecord = (
      record: TableDataWithRaw,
      rowIndex: number,
      {
        indentSize = 0,
        indexPath,
        allowDrag = true,
      }: {
        indentSize?: number;
        indexPath?: number[];
        allowDrag?: boolean;
      } = {},
    ): JSX.Element => {
      const currentKey = record.key;
      const currentPath = (indexPath ?? []).concat(rowIndex);
      const expandContent = renderExpandContent(record);
      const showExpand = expandedRowKeys.value.includes(currentKey);

      const isDragTarget = dragState.sourceKey === record.key;

      const dragSourceEvent = dragType.value
        ? {
            draggable: allowDrag,
            onDragstart: (ev: DragEvent) => {
              if (!allowDrag) return;
              handleDragStart(ev, record.key, currentPath, record.raw);
            },
            onDragend: (ev: DragEvent) => {
              if (!allowDrag) return;
              handleDragEnd(ev);
            },
          }
        : {};

      const dragTargetEvent = dragType.value
        ? {
            onDragenter: (ev: DragEvent) => {
              if (!allowDrag) return;
              handleDragEnter(ev, currentPath);
            },
            onDragover: (ev: DragEvent) => {
              if (!allowDrag) return;
              handleDragover(ev);
            },
            onDrop: (ev: DragEvent) => {
              if (!allowDrag) return;
              handleChange("drag");
              handleDrop(ev);
            },
          }
        : {};

      return (
        <>
          <Tr
            v-slots={{
              tr: slots.tr,
            }}
            key={currentKey}
            class={[
              {
                [`${prefixCls}-tr-draggable`]: dragType.value === "row",
                [`${prefixCls}-tr-drag`]: isDragTarget,
              },
              isFunction(props.rowClass)
                ? props.rowClass(record.raw, rowIndex)
                : props.rowClass,
            ]}
            rowIndex={rowIndex}
            record={record}
            checked={
              props.rowSelection && selectedRowKeys.value?.includes(currentKey)
            }
            // @ts-ignore
            onClick={(ev: Event) => handleRowClick(record, ev)}
            onDblclick={(ev: Event) => handleRowDblclick(record, ev)}
            onContextmenu={(ev: Event) => handleRowContextMenu(record, ev)}
            {...(dragType.value === "row" ? dragSourceEvent : {})}
            {...dragTargetEvent}
          >
            {operations.value.map((operation, index) => {
              const cellId = `${rowIndex}-${index}-${record.key}`;
              const [rowspan, colspan] = props.spanAll
                ? (tableSpan.value[cellId] ?? [1, 1])
                : [1, 1];

              if (props.spanAll && removedCells.value.includes(cellId)) {
                return null;
              }

              const style = getVirtualColumnStyle(operation.name);

              return (
                <OperationTd
                  v-slots={{
                    "drag-handle-icon": slots["drag-handle-icon"],
                  }}
                  key={`operation-td-${index}`}
                  style={style}
                  operationColumn={operation}
                  operations={operations.value}
                  record={record}
                  hasExpand={Boolean(expandContent)}
                  selectedRowKeys={currentSelectedRowKeys.value}
                  rowSpan={rowspan}
                  colSpan={colspan}
                  renderExpandBtn={renderExpandBtn}
                  {...(dragType.value === "handle" ? dragSourceEvent : {})}
                />
              );
            })}
            {dataColumns.value.map((column, index) => {
              const cellId = `${rowIndex}-${props.spanAll ? operations.value.length + index : index}-${record.key}`;
              const [rowspan, colspan] = tableSpan.value[cellId] ?? [1, 1];

              if (removedCells.value.includes(cellId)) {
                return null;
              }

              const extraProps =
                index === 0
                  ? {
                      showExpandBtn: record.hasSubtree,
                      indentSize: record.hasSubtree
                        ? indentSize - 20
                        : indentSize,
                    }
                  : {};

              const style = getVirtualColumnStyle(column.dataIndex);

              return (
                <Td
                  v-slots={{
                    td: slots.td,
                  }}
                  key={`td-${index}`}
                  style={style}
                  rowIndex={rowIndex}
                  record={record}
                  column={column}
                  operations={operations.value}
                  dataColumns={dataColumns.value}
                  rowSpan={rowspan}
                  renderExpandBtn={renderExpandBtn}
                  colSpan={colspan}
                  {...extraProps}
                  // @ts-ignore
                  onClick={(ev: Event) => handleCellClick(record, column, ev)}
                  onDblclick={(ev: Event) =>
                    handleCellDblclick(record, column, ev)
                  }
                  onMouseenter={(ev: Event) =>
                    handleCellMouseEnter(record, column, ev)
                  }
                  onMouseleave={(ev: Event) =>
                    handleCellMouseLeave(record, column, ev)
                  }
                  onContextmenu={(ev: Event) =>
                    handleCellContextmenu(record, column, ev)
                  }
                />
              );
            })}
          </Tr>
          {showExpand &&
            renderExpand(record, {
              indentSize: indentSize + props.indentSize,
              indexPath: currentPath,
              allowDrag: allowDrag && !isDragTarget,
              expandContent,
            })}
        </>
      );
    };

    const renderBody = () => {
      const hasSubData = flattenData.value.some((record) =>
        Boolean(record.hasSubtree),
      );

      return (
        <Tbody
          v-slots={{
            tbody: slots.tbody,
          }}
        >
          {flattenData.value.length > 0
            ? flattenData.value.map((record, index) =>
                renderRecord(record, index, {
                  indentSize: hasSubData ? 20 : 0,
                }),
              )
            : renderEmpty()}
        </Tbody>
      );
    };

    const renderHeader = () => (
      <Thead v-slots={{ thead: slots.thead }}>
        {groupColumns.value.map((row, index) => (
          <Tr key={`header-row-${index}`}>
            {index === 0 &&
              operations.value.map((operation, index) => (
                <OperationTh
                  key={`operation-th-${index}`}
                  // @ts-ignore
                  ref={(ins: ComponentPublicInstance) => {
                    if (ins?.$el && operation.name) {
                      thRefs.value[operation.name] = ins.$el;
                    }
                  }}
                  operationColumn={operation}
                  operations={operations.value}
                  selectAll={Boolean(
                    operation.name === "selection-checkbox" &&
                    props.rowSelection?.showCheckedAll,
                  )}
                  rowSpan={groupColumns.value.length}
                />
              ))}
            {row.map((column, index) => {
              // 仅 fixed 布局允许拖拽调宽：auto 布局下 colgroup 不渲染 col，
              // 列宽由浏览器按内容分配，拖拽写入的 _resizeWidth 到不了 DOM，
              // 还会在冻结偏移计算中优先于测量回写值导致 sticky 错位
              const resizable =
                props.columnResizable &&
                resolvedTableLayout.value === "fixed" &&
                Boolean(column.dataIndex) &&
                index < row.length - 1;

              return (
                <Th
                  key={`th-${index}`}
                  // @ts-ignore
                  ref={(ins: ComponentPublicInstance) => {
                    if (ins?.$el && column.dataIndex) {
                      thRefs.value[column.dataIndex] = ins.$el;
                    }
                  }}
                  v-slots={{ th: slots.th }}
                  column={column}
                  operations={operations.value}
                  dataColumns={dataColumns.value}
                  resizable={resizable}
                  onClick={(ev: Event) => handleHeaderClick(column, ev)}
                />
              );
            })}
          </Tr>
        ))}
      </Thead>
    );

    const renderContent = () => {
      if (splitTable.value) {
        const stickyTop = isNumber(props.stickyHeader)
          ? `${props.stickyHeader}px`
          : undefined;
        const Component = displayScrollbar.value ? Scrollbar : "div";

        const renderHeaderPanel = () => (
          <Component
            ref={theadComRef}
            class={`${prefixCls}-header`}
            style={{
              overflowY: hasScrollBar.value ? "scroll" : undefined,
            }}
            {...(scrollbar.value
              ? {
                  hide: flattenData.value.length !== 0,
                  disableVertical: true,
                  ...scrollbarProps.value,
                  disableHorizontal: !isScroll.value.x,
                }
              : undefined)}
          >
            <table
              class={`${prefixCls}-element`}
              style={headerStyle.value}
              cellpadding={0}
              cellspacing={0}
            >
              <ColGroup
                dataColumns={dataColumns.value}
                operations={operations.value}
                columnWidth={columnWidth}
                columnRealWidth={columnRealWidth}
                tableLayout={resolvedTableLayout.value}
              />
              {renderHeader()}
            </table>
          </Component>
        );

        return (
          <>
            {props.showHeader &&
              (props.stickyHeader ? (
                // sticky 单独包一层，避免与 .c-scrollbar { position: relative } 互相覆盖
                <div
                  class={`${prefixCls}-header-sticky`}
                  style={stickyTop ? { top: stickyTop } : undefined}
                >
                  {renderHeaderPanel()}
                </div>
              ) : (
                renderHeaderPanel()
              ))}
            <ResizeObserver onResize={handleTbodyResize}>
              {isVirtualList.value && flattenData.value.length ? (
                <VirtualList
                  v-slots={{
                    item: ({
                      item,
                      index,
                    }: {
                      item: TableDataWithRaw;
                      index: number;
                    }) => renderRecord(item, index),
                  }}
                  ref={(ins: any) => {
                    if (ins?.$el) tbodyRef.value = ins.$el;
                  }}
                  class={`${prefixCls}-body`}
                  data={flattenData.value}
                  itemKey="_key"
                  component={{
                    list: "table",
                    content: "tbody",
                  }}
                  listAttrs={{
                    class: `${prefixCls}-element`,
                    style: contentStyle.value,
                  }}
                  paddingPosition="list"
                  height="auto"
                  {...props.virtualListProps}
                  onScroll={onTbodyScroll}
                />
              ) : (
                <Component
                  ref={tbodyComRef}
                  class={`${prefixCls}-body`}
                  style={{
                    maxHeight: bodyMaxHeight.value ?? "100%",
                  }}
                  {...(scrollbar.value
                    ? {
                        outerStyle: { display: "flex", minHeight: "0" },
                        ...scrollbarProps.value,
                        disableHorizontal: !isScroll.value.x,
                      }
                    : undefined)}
                  onScroll={onTbodyScroll}
                >
                  <table
                    class={`${prefixCls}-element`}
                    style={contentStyle.value}
                    cellpadding={0}
                    cellspacing={0}
                  >
                    {flattenData.value.length !== 0 && (
                      <ColGroup
                        dataColumns={dataColumns.value}
                        operations={operations.value}
                        columnWidth={columnWidth}
                        columnRealWidth={columnRealWidth}
                        tableLayout={resolvedTableLayout.value}
                      />
                    )}
                    {renderBody()}
                  </table>
                </Component>
              )}
            </ResizeObserver>
            {summaryData.value && summaryData.value.length > 0 && (
              <div
                ref={summaryRef}
                class={`${prefixCls}-tfoot`}
                style={{
                  overflowY: hasScrollBar.value ? "scroll" : "hidden",
                }}
              >
                <table
                  class={`${prefixCls}-element`}
                  style={contentStyle.value}
                  cellpadding={0}
                  cellspacing={0}
                >
                  <ColGroup
                    dataColumns={dataColumns.value}
                    operations={operations.value}
                    columnWidth={columnWidth}
                    columnRealWidth={columnRealWidth}
                    tableLayout={resolvedTableLayout.value}
                  />
                  {renderSummary()}
                </table>
              </div>
            )}
          </>
        );
      }

      return (
        <ResizeObserver onResize={() => setAlignPosition()}>
          <table
            class={`${prefixCls}-element`}
            cellpadding={0}
            cellspacing={0}
            style={contentStyle.value}
          >
            <ColGroup
              dataColumns={dataColumns.value}
              operations={operations.value}
              columnWidth={columnWidth}
              columnRealWidth={columnRealWidth}
              tableLayout={resolvedTableLayout.value}
            />
            {props.showHeader && renderHeader()}
            {renderBody()}
            {summaryData.value &&
              summaryData.value.length > 0 &&
              renderSummary()}
          </table>
        </ResizeObserver>
      );
    };

    const renderTable = (content?: Slot) => {
      const Component = displayScrollbar.value ? Scrollbar : "div";

      return (
        <>
          <div
            ref={tableContainerRef}
            class={[`${prefixCls}-container`, tableCls.value]}
          >
            <Component
              ref={contentComRef}
              class={[
                `${prefixCls}-content`,
                {
                  // 仅在确实需要横滚时开启，避免列宽铺满后的亚像素溢出一直露出滚动条
                  [`${prefixCls}-content-scroll-x`]:
                    !splitTable.value && isScroll.value.x,
                },
              ]}
              {...(scrollbar.value
                ? {
                    outerStyle: { height: "100%" },
                    ...scrollbarProps.value,
                    disableHorizontal: !isScroll.value.x,
                  }
                : undefined)}
              onScroll={handleScroll}
            >
              {content ? (
                <table
                  class={`${prefixCls}-element`}
                  style={contentStyle.value}
                  cellpadding={0}
                  cellspacing={0}
                >
                  {content()}
                </table>
              ) : (
                renderContent()
              )}
            </Component>
          </div>
          {slots.footer && (
            <div class={`${prefixCls}-footer`}>{slots.footer()}</div>
          )}
        </>
      );
    };

    const renderPagination = () => {
      const paginationProps = isObject(props.pagination)
        ? omit(props.pagination, [
            "current",
            "pageSize",
            "defaultCurrent",
            "defaultPageSize",
          ])
        : {};

      const stickyStyle: CSSProperties | undefined = isNumber(
        props.stickyPagination,
      )
        ? { bottom: `${props.stickyPagination}px` }
        : undefined;

      return (
        <div
          class={[
            paginationCls.value,
            {
              [`${prefixCls}-pagination-sticky`]: Boolean(
                props.stickyPagination,
              ),
            },
          ]}
          style={stickyStyle}
        >
          {slots["pagination-left"]?.()}
          <Pagination
            total={validData.value.length}
            current={page.value}
            pageSize={pageSize.value}
            onChange={(page: number) => {
              handlePageChange(page);
              handleChange("pagination");
            }}
            onPageSizeChange={(pageSize: number) => {
              handlePageSizeChange(pageSize);
              handleChange("pagination");
            }}
            {...paginationProps}
          />
          {slots["pagination-right"]?.()}
        </div>
      );
    };

    const style = computed<CSSProperties | undefined>(() => {
      const result: CSSProperties = {};
      if (isString(props.height)) {
        result.height = props.height;
      }
      // 祖先链宽度追逐时 inline 钉住诚实宽度（优先级高于 less 里的
      // max-width:min(100%,100vw) 兜底），正常布局下不输出
      if (rootMaxWidth.value != null) {
        result.maxWidth = rootMaxWidth.value;
      }
      return Object.keys(result).length > 0 ? result : undefined;
    });

    const render = () => {
      if (slots.default) {
        return (
          <ResizeObserver onResize={handleTableResize}>
            <div
              class={cls.value}
              // 该分支历来不应用 height，仅补宽度追逐时的 inline 钉宽
              style={
                rootMaxWidth.value != null
                  ? { maxWidth: rootMaxWidth.value }
                  : undefined
              }
            >
              {renderTable(slots.default)}
            </div>
          </ResizeObserver>
        );
      }
      children.value = slots.columns?.();
      // fix #1724 sortedData.value.length > 0
      return (
        <ResizeObserver onResize={handleTableResize}>
          <div class={cls.value} style={style.value}>
            {children.value}
            <Spin {...spinProps.value}>
              {props.pagination !== false &&
                (flattenData.value.length > 0 || sortedData.value.length > 0) &&
                isPaginationTop.value &&
                renderPagination()}
              {renderTable()}
              {props.pagination !== false &&
                (flattenData.value.length > 0 || sortedData.value.length > 0) &&
                !isPaginationTop.value &&
                renderPagination()}
            </Spin>
          </div>
        </ResizeObserver>
      );
    };

    return {
      render,
      selfExpand: expand,
      selfExpandAll: expandAll,
      selfSelect: select,
      selfSelectAll: selectAll,
      selfResetFilters: resetFilters,
      selfClearFilters: clearFilters,
      selfResetSorters: resetSorters,
      selfClearSorters: clearSorters,
    };
  },
  methods: {
    /**
     * @zh 设置全选状态
     * @en Set select all state
     * @param { boolean } checked
     * @public
     * @version 2.22.0
     */
    selectAll(checked?: boolean) {
      return this.selfSelectAll(checked);
    },
    /**
     * @zh 设置行选择器状态
     * @en Set row selector state
     * @param { string | number | (string | number)[] } rowKey
     * @param { boolean } checked
     * @public
     * @version 2.31.0
     */
    select(rowKey: string | number | (string | number)[], checked?: boolean) {
      return this.selfSelect(rowKey, checked);
    },
    /**
     * @zh 设置全部展开状态
     * @en Set all expanded state
     * @param { boolean } checked
     * @public
     * @version 2.31.0
     */
    expandAll(checked?: boolean) {
      return this.selfExpandAll(checked);
    },
    /**
     * @zh 设置展开状态
     * @en Set select all state
     * @param { string | number | (string | number)[] } rowKey
     * @param { boolean } checked
     * @public
     * @version 2.31.0
     */
    expand(rowKey: string | number | (string | number)[], checked?: boolean) {
      return this.selfExpand(rowKey, checked);
    },
    /**
     * @zh 重置列的筛选器
     * @en Reset the filter for columns
     * @param { string | string[] } dataIndex
     * @public
     * @version 2.31.0
     */
    resetFilters(dataIndex?: string | string[]) {
      return this.selfResetFilters(dataIndex);
    },
    /**
     * @zh 清空列的筛选器
     * @en Clear the filter for columns
     * @param { string | string[] } dataIndex
     * @public
     * @version 2.31.0
     */
    clearFilters(dataIndex?: string | string[]) {
      return this.selfClearFilters(dataIndex);
    },
    /**
     * @zh 重置列的排序
     * @en Reset the order of columns
     * @public
     * @version 2.31.0
     */
    resetSorters() {
      return this.selfResetSorters();
    },
    /**
     * @zh 清空列的排序
     * @en Clear the order of columns
     * @public
     * @version 2.31.0
     */
    clearSorters() {
      return this.selfClearSorters();
    },
  },
  render() {
    return this.render();
  },
});
