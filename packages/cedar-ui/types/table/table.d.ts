import type { CSSProperties, PropType } from "vue";
import type { ComponentSize } from "../_utils/constant";
import type { TableBorder, TableChangeExtra, TableColumnData, TableComponents, TableData, TableDraggable, TableExpandable, TableOperationColumn, TablePagePosition, TableRowSelection } from "./types";
import { PaginationProps } from "../pagination";
import { VirtualListProps } from "../_components/virtual-list-v2/interface";
import { ScrollbarProps } from "../scrollbar";
import type { BaseType } from "../_utils/types";
import { type TableExtraColumnConfig } from "./extra-column";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<TableColumnData[]>;
        default: () => never[];
    };
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    bordered: {
        type: PropType<boolean | TableBorder>;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    tableLayout: {
        type: PropType<"fixed" | "auto">;
        default: string;
    };
    loading: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    rowSelection: {
        type: PropType<TableRowSelection>;
    };
    expandable: {
        type: PropType<TableExpandable>;
    };
    height: {
        type: PropType<number | string>;
    };
    maxHeight: {
        type: PropType<number | string>;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: {
        type: PropType<boolean | PaginationProps>;
        default: boolean;
    };
    pagePosition: {
        type: PropType<TablePagePosition>;
        default: string;
    };
    indentSize: {
        type: NumberConstructor;
        default: number;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
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
    spanAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    components: {
        type: PropType<TableComponents>;
    };
    loadMore: {
        type: PropType<(record: TableData, done: (children?: TableData[]) => void) => void>;
    };
    filterIconAlignLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideExpandButtonOnEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowClass: {
        type: PropType<string | any[] | Record<string, any> | ((record: TableData, rowIndex: number) => any)>;
    };
    draggable: {
        type: PropType<TableDraggable>;
    };
    rowNumber: {
        type: (ObjectConstructor | BooleanConstructor)[];
    };
    columnResizable: {
        type: BooleanConstructor;
    };
    summary: {
        type: PropType<boolean | ((params: {
            columns: TableColumnData[];
            data: TableData[];
        }) => TableData[])>;
    };
    summaryText: {
        type: StringConstructor;
        default: string;
    };
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
    selectedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultSelectedKeys: {
        type: PropType<(string | number)[]>;
    };
    expandedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultExpandedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultExpandAllRows: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyHeader: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    stickyPagination: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
    showEmptyTree: {
        type: BooleanConstructor;
        default: boolean;
    };
    extraColumn: {
        type: PropType<boolean | TableExtraColumnConfig>;
        default: boolean;
    };
}>, {
    render: () => import("vue/jsx-runtime").JSX.Element;
    selfExpand: (rowKey: BaseType | BaseType[], expanded?: boolean) => void;
    selfExpandAll: (expanded?: boolean) => void;
    selfSelect: (rowKey: BaseType | BaseType[], checked?: boolean) => void;
    selfSelectAll: (checked?: boolean) => void;
    selfResetFilters: (dataIndex?: string | string[]) => void;
    selfClearFilters: (dataIndex?: string | string[]) => void;
    selfResetSorters: () => void;
    selfClearSorters: () => void;
}, {}, {}, {
    /**
     * @zh 设置全选状态
     * @en Set select all state
     * @param { boolean } checked
     * @public
     * @version 2.22.0
     */
    selectAll(checked?: boolean): void;
    /**
     * @zh 设置行选择器状态
     * @en Set row selector state
     * @param { string | number | (string | number)[] } rowKey
     * @param { boolean } checked
     * @public
     * @version 2.31.0
     */
    select(rowKey: string | number | (string | number)[], checked?: boolean): void;
    /**
     * @zh 设置全部展开状态
     * @en Set all expanded state
     * @param { boolean } checked
     * @public
     * @version 2.31.0
     */
    expandAll(checked?: boolean): void;
    /**
     * @zh 设置展开状态
     * @en Set select all state
     * @param { string | number | (string | number)[] } rowKey
     * @param { boolean } checked
     * @public
     * @version 2.31.0
     */
    expand(rowKey: string | number | (string | number)[], checked?: boolean): void;
    /**
     * @zh 重置列的筛选器
     * @en Reset the filter for columns
     * @param { string | string[] } dataIndex
     * @public
     * @version 2.31.0
     */
    resetFilters(dataIndex?: string | string[]): void;
    /**
     * @zh 清空列的筛选器
     * @en Clear the filter for columns
     * @param { string | string[] } dataIndex
     * @public
     * @version 2.31.0
     */
    clearFilters(dataIndex?: string | string[]): void;
    /**
     * @zh 重置列的排序
     * @en Reset the order of columns
     * @public
     * @version 2.31.0
     */
    resetSorters(): void;
    /**
     * @zh 清空列的排序
     * @en Clear the order of columns
     * @public
     * @version 2.31.0
     */
    clearSorters(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:selectedKeys": (rowKeys: (string | number)[]) => true;
    "update:expandedKeys": (rowKeys: (string | number)[]) => true;
    "update:columns": (columns: TableColumnData[]) => true;
    /**
     * @zh 点击展开行时触发
     * @en Triggered when a row is clicked to expand
     * @param {string | number} rowKey
     * @param {TableData} record
     */
    expand: (rowKey: string | number, record: TableData) => true;
    /**
     * @zh 已展开的数据行发生改变时触发
     * @en Triggered when the expanded data row changes
     * @param {(string | number)[]} rowKeys
     */
    expandedChange: (rowKeys: (string | number)[]) => true;
    /**
     * @zh 点击行选择器时触发
     * @en Triggered when the row selector is clicked
     * @param {string | number[]} rowKeys
     * @param {string | number} rowKey
     * @param {TableData} record
     */
    select: (rowKeys: (string | number)[], rowKey: string | number, record: TableData) => true;
    /**
     * @zh 点击全选选择器时触发
     * @en Triggered when the select all selector is clicked
     * @param {boolean} checked
     */
    selectAll: (checked: boolean) => true;
    /**
     * @zh 已选择的数据行发生改变时触发
     * @en Triggered when the selected data row changes
     * @param {(string | number)[]} rowKeys
     */
    selectionChange: (rowKeys: (string | number)[]) => true;
    /**
     * @zh 排序规则发生改变时触发
     * @en Triggered when the collation changes
     * @param {string} dataIndex
     * @param {string} direction
     */
    sorterChange: (dataIndex: string, direction: string) => true;
    /**
     * @zh 过滤选项发生改变时触发
     * @en Triggered when the filter options are changed
     * @param {string} dataIndex
     * @param {string[]} filteredValues
     */
    filterChange: (dataIndex: string, filteredValues: string[]) => true;
    /**
     * @zh 表格分页发生改变时触发
     * @en Triggered when the table pagination changes
     * @param {number} page
     */
    pageChange: (page: number) => true;
    /**
     * @zh 表格每页数据数量发生改变时触发
     * @en Triggered when the number of data per page of the table changes
     * @param {number} pageSize
     */
    pageSizeChange: (pageSize: number) => true;
    /**
     * @zh 表格数据发生变化时触发
     * @en Triggered when table data changes
     * @param {TableData[]} data
     * @param {TableChangeExtra} extra
     * @param {TableData[]} currentData
     * @version 2.40.0 增加 currentData
     */
    change: (data: TableData[], extra: TableChangeExtra, currentData: TableData[]) => true;
    /**
     * @zh 单元格 hover 进入时触发
     * @en Triggered when hovering into a cell
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellMouseEnter: (record: TableData, column: TableColumnData, ev: Event) => true;
    /**
     * @zh 单元格 hover 退出时触发
     * @en Triggered when hovering out of a cell
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellMouseLeave: (record: TableData, column: TableColumnData, ev: Event) => true;
    /**
     * @zh 点击单元格时触发
     * @en Triggered when a cell is clicked
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellClick: (record: TableData, column: TableColumnData, ev: Event) => true;
    /**
     * @zh 点击行数据时触发
     * @en Triggered when row data is clicked
     * @param {TableData} record
     * @param {Event} ev
     */
    rowClick: (record: TableData, ev: Event) => true;
    /**
     * @zh 点击表头数据时触发
     * @en Triggered when the header data is clicked
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    headerClick: (column: TableColumnData, ev: Event) => true;
    /**
     * @zh 调整列宽时触发
     * @en Triggered when column width is adjusted
     * @param {string} dataIndex
     * @param {number} width
     * @version 2.28.0
     */
    columnResize: (dataIndex: string, width: number) => true;
    /**
     * @zh 双击行数据时触发
     * @en Triggered when row data is double clicked
     * @param {TableData} record
     * @param {Event} ev
     */
    rowDblclick: (record: TableData, ev: Event) => true;
    /**
     * @zh 双击单元格时触发
     * @en Triggered when a cell is double clicked
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellDblclick: (record: TableData, column: TableColumnData, ev: Event) => true;
    /**
     * @zh 右击行数据时触发
     * @en Triggered when row data is right clicked
     * @param {TableData} record
     * @param {Event} ev
     */
    rowContextmenu: (record: TableData, ev: Event) => true;
    /**
     * @zh 右击单元格时触发
     * @en Triggered when a cell is right clicked
     * @param {TableData} record
     * @param {TableColumnData} column
     * @param {Event} ev
     */
    cellContextmenu: (record: TableData, column: TableColumnData, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<TableColumnData[]>;
        default: () => never[];
    };
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    bordered: {
        type: PropType<boolean | TableBorder>;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
    };
    tableLayout: {
        type: PropType<"fixed" | "auto">;
        default: string;
    };
    loading: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    rowSelection: {
        type: PropType<TableRowSelection>;
    };
    expandable: {
        type: PropType<TableExpandable>;
    };
    height: {
        type: PropType<number | string>;
    };
    maxHeight: {
        type: PropType<number | string>;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: {
        type: PropType<boolean | PaginationProps>;
        default: boolean;
    };
    pagePosition: {
        type: PropType<TablePagePosition>;
        default: string;
    };
    indentSize: {
        type: NumberConstructor;
        default: number;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
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
    spanAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    components: {
        type: PropType<TableComponents>;
    };
    loadMore: {
        type: PropType<(record: TableData, done: (children?: TableData[]) => void) => void>;
    };
    filterIconAlignLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideExpandButtonOnEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowClass: {
        type: PropType<string | any[] | Record<string, any> | ((record: TableData, rowIndex: number) => any)>;
    };
    draggable: {
        type: PropType<TableDraggable>;
    };
    rowNumber: {
        type: (ObjectConstructor | BooleanConstructor)[];
    };
    columnResizable: {
        type: BooleanConstructor;
    };
    summary: {
        type: PropType<boolean | ((params: {
            columns: TableColumnData[];
            data: TableData[];
        }) => TableData[])>;
    };
    summaryText: {
        type: StringConstructor;
        default: string;
    };
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
    selectedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultSelectedKeys: {
        type: PropType<(string | number)[]>;
    };
    expandedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultExpandedKeys: {
        type: PropType<(string | number)[]>;
    };
    defaultExpandAllRows: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyHeader: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    stickyPagination: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
    showEmptyTree: {
        type: BooleanConstructor;
        default: boolean;
    };
    extraColumn: {
        type: PropType<boolean | TableExtraColumnConfig>;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((data: TableData[], extra: TableChangeExtra, currentData: TableData[]) => any) | undefined;
    onSelect?: ((rowKeys: (string | number)[], rowKey: string | number, record: TableData) => any) | undefined;
    onCellClick?: ((record: TableData, column: TableColumnData, ev: Event) => any) | undefined;
    onCellMouseEnter?: ((record: TableData, column: TableColumnData, ev: Event) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
    "onUpdate:selectedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
    onExpand?: ((rowKey: string | number, record: TableData) => any) | undefined;
    onSelectAll?: ((checked: boolean) => any) | undefined;
    onSelectionChange?: ((rowKeys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
    onExpandedChange?: ((rowKeys: (string | number)[]) => any) | undefined;
    onColumnResize?: ((dataIndex: string, width: number) => any) | undefined;
    "onUpdate:columns"?: ((columns: TableColumnData[]) => any) | undefined;
    onSorterChange?: ((dataIndex: string, direction: string) => any) | undefined;
    onFilterChange?: ((dataIndex: string, filteredValues: string[]) => any) | undefined;
    onCellMouseLeave?: ((record: TableData, column: TableColumnData, ev: Event) => any) | undefined;
    onRowClick?: ((record: TableData, ev: Event) => any) | undefined;
    onHeaderClick?: ((column: TableColumnData, ev: Event) => any) | undefined;
    onRowDblclick?: ((record: TableData, ev: Event) => any) | undefined;
    onCellDblclick?: ((record: TableData, column: TableColumnData, ev: Event) => any) | undefined;
    onRowContextmenu?: ((record: TableData, ev: Event) => any) | undefined;
    onCellContextmenu?: ((record: TableData, column: TableColumnData, ev: Event) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    data: TableData[];
    scrollbar: boolean | ScrollbarProps;
    tableLayout: "fixed" | "auto";
    columns: TableColumnData[];
    loading: boolean | Record<string, any>;
    bordered: boolean | TableBorder;
    hoverable: boolean;
    fit: boolean;
    pagination: boolean | Partial<import("vue").ExtractPropTypes<{
        total: {
            type: NumberConstructor;
            required: boolean;
            validator: (value: number) => boolean;
        };
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        pageSize: NumberConstructor;
        defaultPageSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        disabled: BooleanConstructor;
        hideOnSinglePage: BooleanConstructor;
        simple: BooleanConstructor;
        showTotal: BooleanConstructor;
        showMore: BooleanConstructor;
        showJumper: BooleanConstructor;
        showPageSize: BooleanConstructor;
        pageSizeOptions: {
            type: PropType<number[]>;
            default: () => number[];
            validator: (value: number[]) => boolean;
        };
        pageSizeProps: PropType<import("..").SelectProps>;
        size: {
            type: PropType<ComponentSize>;
            validator: (value: ComponentSize) => boolean;
        };
        pageItemStyle: PropType<CSSProperties>;
        activePageItemStyle: PropType<CSSProperties>;
        baseSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        bufferSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        autoAdjust: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>;
    defaultExpandAllRows: boolean;
    filterIconAlignLeft: boolean;
    indentSize: number;
    stripe: boolean;
    pagePosition: "top" | "tl" | "tr" | "bottom" | "bl" | "br";
    rowKey: string;
    showHeader: boolean;
    spanAll: boolean;
    hideExpandButtonOnEmpty: boolean;
    columnResizable: boolean;
    summaryText: string;
    stickyHeader: number | boolean;
    stickyPagination: number | boolean;
    showEmptyTree: boolean;
    extraColumn: boolean | TableExtraColumnConfig;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
