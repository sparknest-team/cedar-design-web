import type { PropType } from "vue";
import type { ComponentSize } from "../_utils/constant";
import type { TableBorder, TableColumnData, TableComponents, TableData, TableDraggable, TableExpandable, TableOperationColumn, TablePagePosition, TableRowSelection } from "./types";
import type { TableExtraColumnConfig } from "./extra-column";
import type { PaginationProps } from "../pagination";
import type { ScrollbarProps } from "../scrollbar";
import type { VirtualListProps } from "../_components/virtual-list-v2/interface";
export declare const tableProps: {
    /**
     * @zh 表格的列描述信息
     * @en Column info of the table
     */
    columns: {
        type: PropType<TableColumnData[]>;
        default: () => never[];
    };
    /**
     * @zh 表格的数据
     * @en Table data
     */
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    /**
     * @zh 是否显示边框
     * @en Whether to show the border
     */
    bordered: {
        type: PropType<boolean | TableBorder>;
        default: boolean;
    };
    /**
     * @zh 是否显示选中效果
     * @en Whether to show the hover effect
     */
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否开启斑马纹效果
     * @en Whether to enable the stripe effect
     */
    stripe: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 表格的大小
     * @en The size of the table
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     */
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    /**
     * @zh 表格布局算法，同 CSS `table-layout`。默认 `fixed`，列宽由 JS 计算后写入，不被单元格内容撑开
     * @en Table layout algorithm, same as CSS `table-layout`. Defaults to `fixed`; column widths are computed in JS and not stretched by cell content
     */
    tableLayout: {
        type: PropType<"fixed" | "auto">;
        default: string;
    };
    /**
     * @zh 是否为加载中状态
     * @en Whether it is loading state
     */
    loading: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    /**
     * @zh 表格的行选择器配置
     * @en Table row selector configuration
     */
    rowSelection: {
        type: PropType<TableRowSelection>;
    };
    /**
     * @zh 表格的展开行配置
     * @en Expand row configuration of the table
     */
    expandable: {
        type: PropType<TableExpandable>;
    };
    /**
     * @zh 表格高度。设置后表头固定，表体区域滚动。数字单位为 px
     * @en Table height. Fixes the header and scrolls the body when set. Number values are in px
     */
    height: {
        type: PropType<number | string>;
    };
    /**
     * @zh 表格最大高度。内容不足时表格收缩，超出后表体滚动。数字单位为 px
     * @en Table max height. Table shrinks when content is short; body scrolls when exceeded. Number values are in px
     */
    maxHeight: {
        type: PropType<number | string>;
    };
    /**
     * @zh 列宽如何撑满容器。表格宽度始终至少为父容器宽度（列宽之和超出时开启横向滚动）。为 true 时，未设置 `width` 的弹性列吸收全部剩余空间（显式 `width` 的列保持原宽）；为 false 时，剩余空间按各列基础宽度比例放大分摊（extra-column 等钉死列除外）
     * @en How column widths fill the container. The table is always at least as wide as its parent (horizontal scroll when columns overflow). When true, flexible columns without `width` absorb all remaining space (explicit-`width` columns stay exact); when false, remaining space scales all columns proportionally to their base widths (pinned columns like extra-column excluded)
     */
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 分页的属性配置
     * @en Pagination properties configuration
     */
    pagination: {
        type: PropType<boolean | PaginationProps>;
        default: boolean;
    };
    /**
     * @zh 分页选择器的位置
     * @en The position of the page selector
     * @values 'tl','top',tr','bl','bottom','br'
     */
    pagePosition: {
        type: PropType<TablePagePosition>;
        default: string;
    };
    /**
     * @zh 树形表格的缩进距离
     * @en The indentation distance of the tree table
     */
    indentSize: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 表格行 `key` 的取值字段
     * @en Value field of table row `key`
     */
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 是否显示表头
     * @en Whether to show the header
     */
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
     * @en Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
     * @type VirtualListProps
     */
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    /**
     * @zh 单元格合并方法（索引从数据项开始计数）
     * @en Cell merge method (The index starts counting from the data item)
     * @version 2.10.0
     */
    spanMethod: {
        type: PropType<(data: {
            record: TableData;
            column: TableColumnData | TableOperationColumn;
            rowIndex: number;
            columnIndex: number;
        }) => {
            rowspan?: number;
            colspan?: number;
        } | void>;
    };
    /**
     * @zh 是否让合并方法的索引包含所有
     * @en Whether to make the index of the span method contain all
     * @version 2.18.0
     */
    spanAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    components: {
        type: PropType<TableComponents>;
    };
    /**
     * @zh 数据懒加载函数，传入时开启懒加载功能
     * @en Data lazy loading function, open the lazy loading function when it is passed in
     * @version 2.13.0
     */
    loadMore: {
        type: PropType<(record: TableData, done: (children?: TableData[]) => void) => void>;
    };
    /**
     * @zh 筛选图标是否左对齐
     * @en Whether the filter icon is aligned to the left
     * @version 2.13.0
     */
    filterIconAlignLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在子树为空时隐藏展开按钮
     * @en Whether to hide expand button when subtree is empty
     * @version 2.14.0
     */
    hideExpandButtonOnEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 表格行元素的类名。`2.34.0` 版本增加函数值支持
     * @en The class name of the table row element. The `2.34.0` version adds support for function values.
     * @version 2.16.0
     */
    rowClass: {
        type: PropType<string | any[] | Record<string, any> | ((record: TableData, rowIndex: number) => any)>;
    };
    /**
     * @zh 表格拖拽排序的配置
     * @en Table drag and drop sorting configuration
     * @version 2.16.0
     */
    draggable: {
        type: PropType<TableDraggable>;
    };
    rowNumber: {
        type: (ObjectConstructor | BooleanConstructor)[];
    };
    /**
     * @zh 是否允许调整列宽
     * @en Whether to allow the column width to be adjusted
     * @version 2.16.0
     */
    columnResizable: {
        type: BooleanConstructor;
    };
    /**
     * @zh 显示表尾总结行
     * @en Show footer summary row
     * @version 2.21.0
     */
    summary: {
        type: PropType<boolean | ((params: {
            columns: TableColumnData[];
            data: TableData[];
        }) => TableData[])>;
    };
    /**
     * @zh 总结行的首列文字
     * @en The first column of text in the summary line
     * @version 2.21.0
     */
    summaryText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 总结行的单元格合并方法
     * @en Cell Merge Method for Summarizing Rows
     * @version 2.21.0
     */
    summarySpanMethod: {
        type: PropType<(data: {
            record: TableData;
            column: TableColumnData | TableOperationColumn;
            rowIndex: number;
            columnIndex: number;
        }) => {
            rowspan?: number;
            colspan?: number;
        } | void>;
    };
    /**
     * @zh 已选择的行（受控模式）优先于 `rowSelection`
     * @en Selected row (controlled mode) takes precedence over `rowSelection`
     * @version 2.25.0
     */
    selectedKeys: {
        type: PropType<(string | number)[]>;
    };
    /**
     * @zh 默认已选择的行（非受控模式）优先于 `rowSelection`
     * @en The selected row by default (uncontrolled mode) takes precedence over `rowSelection`
     * @version 2.25.0
     */
    defaultSelectedKeys: {
        type: PropType<(string | number)[]>;
    };
    /**
     * @zh 显示的展开行、子树（受控模式）优先于 `expandable`
     * @en Displayed Expanded Row, Subtree (Controlled Mode) takes precedence over `expandable`
     * @version 2.25.0
     */
    expandedKeys: {
        type: PropType<(string | number)[]>;
    };
    /**
     * @zh 默认显示的展开行、子树（非受控模式）优先于 `expandable`
     * @en Expand row, Subtree displayed by default (Uncontrolled mode) takes precedence over `expandable`
     * @version 2.25.0
     */
    defaultExpandedKeys: {
        type: PropType<(string | number)[]>;
    };
    /**
     * @zh 是否默认展开所有的行
     * @en Whether to expand all rows by default
     * @version 2.25.0
     */
    defaultExpandAllRows: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否开启表头吸顶。相对**页面/外层滚动容器**吸顶，不是表格内部滚动。数字为距离滚动容器顶部的偏移（px）
     * @en Sticky header relative to the page/outer scroll container (not table body scroll). Number is top offset in px
     * @version 2.30.0
     */
    stickyHeader: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /**
     * @zh 是否开启分页条吸底。相对**页面/外层滚动容器**吸底，不是表格内部滚动。数字为距离滚动容器底部的偏移（px）
     * @en Sticky pagination relative to the page/outer scroll container. Number is bottom offset in px
     */
    stickyPagination: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    /**
     * @zh 是否开启虚拟滚动条
     * @en Whether to enable virtual scroll bar
     * @version 2.38.0
     */
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
    /**
     * @zh 是否展示空子树
     * @en Whether to display empty subtrees
     * @version 2.51.0
     */
    showEmptyTree: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 在表格末尾插入扩展列（如设置按钮），内容由 #extra-column-header / #extra-column-cell 提供
     * @en Insert an extra column at the end of the table (e.g. settings button). Content is provided via #extra-column-header / #extra-column-cell
     */
    extraColumn: {
        type: PropType<boolean | TableExtraColumnConfig>;
        default: boolean;
    };
};
