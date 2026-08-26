import _Table from './table';
import _Thead from './table-thead';
import _Tbody from './table-tbody';
import _Tr from './table-tr';
import _Th from './table-th';
import _Td from './table-td';
import _Column from './table-column';
import { tableProps } from './props';
declare const Table: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        data: {
            type: import("vue").PropType<import("./types").TableData[]>;
            default: () => never[];
        };
        bordered: {
            type: import("vue").PropType<boolean | import("./types").TableBorder>;
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
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        loading: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
        rowSelection: {
            type: import("vue").PropType<import("./types").TableRowSelection>;
        };
        expandable: {
            type: import("vue").PropType<import("./types").TableExpandable>;
        };
        height: {
            type: import("vue").PropType<number | string>;
        };
        maxHeight: {
            type: import("vue").PropType<number | string>;
        };
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        pagination: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
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
                    type: import("vue").PropType<number[]>;
                    default: () => number[];
                    validator: (value: number[]) => boolean;
                };
                pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
            }>>>;
            default: boolean;
        };
        pagePosition: {
            type: import("vue").PropType<import("./types").TablePagePosition>;
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
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        spanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
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
            type: import("vue").PropType<import("./types").TableComponents>;
        };
        loadMore: {
            type: import("vue").PropType<(record: import("./types").TableData, done: (children?: import("./types").TableData[]) => void) => void>;
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
            type: import("vue").PropType<string | any[] | Record<string, any> | ((record: import("./types").TableData, rowIndex: number) => any)>;
        };
        draggable: {
            type: import("vue").PropType<import("./types").TableDraggable>;
        };
        rowNumber: {
            type: (ObjectConstructor | BooleanConstructor)[];
        };
        columnResizable: {
            type: BooleanConstructor;
        };
        summary: {
            type: import("vue").PropType<boolean | ((params: {
                columns: import("./types").TableColumnData[];
                data: import("./types").TableData[];
            }) => import("./types").TableData[])>;
        };
        summaryText: {
            type: StringConstructor;
            default: string;
        };
        summarySpanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
                rowIndex: number;
                columnIndex: number;
            }) => {
                rowspan?: number;
                colspan?: number;
            } | void>;
        };
        selectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        expandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultExpandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
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
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showEmptyTree: {
            type: BooleanConstructor;
            default: boolean;
        };
        extraColumn: {
            type: import("vue").PropType<boolean | import("./extra-column").TableExtraColumnConfig>;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => any) | undefined;
        onSelect?: ((rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onCellClick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onCellMouseEnter?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
        "onUpdate:selectedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onSelectAll?: ((checked: boolean) => any) | undefined;
        onSelectionChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        "onUpdate:expandedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpandedChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        onColumnResize?: ((dataIndex: string, width: number) => any) | undefined;
        "onUpdate:columns"?: ((columns: import("./types").TableColumnData[]) => any) | undefined;
        onSorterChange?: ((dataIndex: string, direction: string) => any) | undefined;
        onFilterChange?: ((dataIndex: string, filteredValues: string[]) => any) | undefined;
        onCellMouseLeave?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowClick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onHeaderClick?: ((column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowDblclick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellDblclick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowContextmenu?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellContextmenu?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    }>, {
        render: () => import("vue/jsx-runtime").JSX.Element;
        selfExpand: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], expanded?: boolean) => void;
        selfExpandAll: (expanded?: boolean) => void;
        selfSelect: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], checked?: boolean) => void;
        selfSelectAll: (checked?: boolean) => void;
        selfResetFilters: (dataIndex?: string | string[]) => void;
        selfClearFilters: (dataIndex?: string | string[]) => void;
        selfResetSorters: () => void;
        selfClearSorters: () => void;
    }, {}, {}, {
        selectAll(checked?: boolean): void;
        select(rowKey: string | number | (string | number)[], checked?: boolean): void;
        expandAll(checked?: boolean): void;
        expand(rowKey: string | number | (string | number)[], checked?: boolean): void;
        resetFilters(dataIndex?: string | string[]): void;
        clearFilters(dataIndex?: string | string[]): void;
        resetSorters(): void;
        clearSorters(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:selectedKeys": (rowKeys: (string | number)[]) => true;
        "update:expandedKeys": (rowKeys: (string | number)[]) => true;
        "update:columns": (columns: import("./types").TableColumnData[]) => true;
        expand: (rowKey: string | number, record: import("./types").TableData) => true;
        expandedChange: (rowKeys: (string | number)[]) => true;
        select: (rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => true;
        selectAll: (checked: boolean) => true;
        selectionChange: (rowKeys: (string | number)[]) => true;
        sorterChange: (dataIndex: string, direction: string) => true;
        filterChange: (dataIndex: string, filteredValues: string[]) => true;
        pageChange: (page: number) => true;
        pageSizeChange: (pageSize: number) => true;
        change: (data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => true;
        cellMouseEnter: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        cellMouseLeave: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        cellClick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        rowClick: (record: import("./types").TableData, ev: Event) => true;
        headerClick: (column: import("./types").TableColumnData, ev: Event) => true;
        columnResize: (dataIndex: string, width: number) => true;
        rowDblclick: (record: import("./types").TableData, ev: Event) => true;
        cellDblclick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        rowContextmenu: (record: import("./types").TableData, ev: Event) => true;
        cellContextmenu: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TableData[];
        scrollbar: boolean | import("..").ScrollbarProps;
        tableLayout: "fixed" | "auto";
        columns: import("./types").TableColumnData[];
        loading: boolean | Record<string, any>;
        bordered: boolean | import("./types").TableBorder;
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
                type: import("vue").PropType<number[]>;
                default: () => number[];
                validator: (value: number[]) => boolean;
            };
            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
        extraColumn: boolean | import("./extra-column").TableExtraColumnConfig;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        data: {
            type: import("vue").PropType<import("./types").TableData[]>;
            default: () => never[];
        };
        bordered: {
            type: import("vue").PropType<boolean | import("./types").TableBorder>;
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
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        loading: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
        rowSelection: {
            type: import("vue").PropType<import("./types").TableRowSelection>;
        };
        expandable: {
            type: import("vue").PropType<import("./types").TableExpandable>;
        };
        height: {
            type: import("vue").PropType<number | string>;
        };
        maxHeight: {
            type: import("vue").PropType<number | string>;
        };
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        pagination: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
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
                    type: import("vue").PropType<number[]>;
                    default: () => number[];
                    validator: (value: number[]) => boolean;
                };
                pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
            }>>>;
            default: boolean;
        };
        pagePosition: {
            type: import("vue").PropType<import("./types").TablePagePosition>;
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
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        spanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
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
            type: import("vue").PropType<import("./types").TableComponents>;
        };
        loadMore: {
            type: import("vue").PropType<(record: import("./types").TableData, done: (children?: import("./types").TableData[]) => void) => void>;
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
            type: import("vue").PropType<string | any[] | Record<string, any> | ((record: import("./types").TableData, rowIndex: number) => any)>;
        };
        draggable: {
            type: import("vue").PropType<import("./types").TableDraggable>;
        };
        rowNumber: {
            type: (ObjectConstructor | BooleanConstructor)[];
        };
        columnResizable: {
            type: BooleanConstructor;
        };
        summary: {
            type: import("vue").PropType<boolean | ((params: {
                columns: import("./types").TableColumnData[];
                data: import("./types").TableData[];
            }) => import("./types").TableData[])>;
        };
        summaryText: {
            type: StringConstructor;
            default: string;
        };
        summarySpanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
                rowIndex: number;
                columnIndex: number;
            }) => {
                rowspan?: number;
                colspan?: number;
            } | void>;
        };
        selectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        expandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultExpandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
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
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showEmptyTree: {
            type: BooleanConstructor;
            default: boolean;
        };
        extraColumn: {
            type: import("vue").PropType<boolean | import("./extra-column").TableExtraColumnConfig>;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => any) | undefined;
        onSelect?: ((rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onCellClick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onCellMouseEnter?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
        "onUpdate:selectedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onSelectAll?: ((checked: boolean) => any) | undefined;
        onSelectionChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        "onUpdate:expandedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpandedChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        onColumnResize?: ((dataIndex: string, width: number) => any) | undefined;
        "onUpdate:columns"?: ((columns: import("./types").TableColumnData[]) => any) | undefined;
        onSorterChange?: ((dataIndex: string, direction: string) => any) | undefined;
        onFilterChange?: ((dataIndex: string, filteredValues: string[]) => any) | undefined;
        onCellMouseLeave?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowClick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onHeaderClick?: ((column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowDblclick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellDblclick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowContextmenu?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellContextmenu?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    }>, {
        render: () => import("vue/jsx-runtime").JSX.Element;
        selfExpand: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], expanded?: boolean) => void;
        selfExpandAll: (expanded?: boolean) => void;
        selfSelect: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], checked?: boolean) => void;
        selfSelectAll: (checked?: boolean) => void;
        selfResetFilters: (dataIndex?: string | string[]) => void;
        selfClearFilters: (dataIndex?: string | string[]) => void;
        selfResetSorters: () => void;
        selfClearSorters: () => void;
    }, {}, {}, {
        selectAll(checked?: boolean): void;
        select(rowKey: string | number | (string | number)[], checked?: boolean): void;
        expandAll(checked?: boolean): void;
        expand(rowKey: string | number | (string | number)[], checked?: boolean): void;
        resetFilters(dataIndex?: string | string[]): void;
        clearFilters(dataIndex?: string | string[]): void;
        resetSorters(): void;
        clearSorters(): void;
    }, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TableData[];
        scrollbar: boolean | import("..").ScrollbarProps;
        tableLayout: "fixed" | "auto";
        columns: import("./types").TableColumnData[];
        loading: boolean | Record<string, any>;
        bordered: boolean | import("./types").TableBorder;
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
                type: import("vue").PropType<number[]>;
                default: () => number[];
                validator: (value: number[]) => boolean;
            };
            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
        extraColumn: boolean | import("./extra-column").TableExtraColumnConfig;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: import("vue").PropType<import("./types").TableColumnData[]>;
        default: () => never[];
    };
    data: {
        type: import("vue").PropType<import("./types").TableData[]>;
        default: () => never[];
    };
    bordered: {
        type: import("vue").PropType<boolean | import("./types").TableBorder>;
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
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"fixed" | "auto">;
        default: string;
    };
    loading: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    rowSelection: {
        type: import("vue").PropType<import("./types").TableRowSelection>;
    };
    expandable: {
        type: import("vue").PropType<import("./types").TableExpandable>;
    };
    height: {
        type: import("vue").PropType<number | string>;
    };
    maxHeight: {
        type: import("vue").PropType<number | string>;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: {
        type: import("vue").PropType<boolean | import("..").PaginationProps>;
        default: boolean;
    };
    pagePosition: {
        type: import("vue").PropType<import("./types").TablePagePosition>;
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
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    spanMethod: {
        type: import("vue").PropType<(data: {
            record: import("./types").TableData;
            column: import("./types").TableColumnData | import("./types").TableOperationColumn;
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
        type: import("vue").PropType<import("./types").TableComponents>;
    };
    loadMore: {
        type: import("vue").PropType<(record: import("./types").TableData, done: (children?: import("./types").TableData[]) => void) => void>;
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
        type: import("vue").PropType<string | any[] | Record<string, any> | ((record: import("./types").TableData, rowIndex: number) => any)>;
    };
    draggable: {
        type: import("vue").PropType<import("./types").TableDraggable>;
    };
    rowNumber: {
        type: (ObjectConstructor | BooleanConstructor)[];
    };
    columnResizable: {
        type: BooleanConstructor;
    };
    summary: {
        type: import("vue").PropType<boolean | ((params: {
            columns: import("./types").TableColumnData[];
            data: import("./types").TableData[];
        }) => import("./types").TableData[])>;
    };
    summaryText: {
        type: StringConstructor;
        default: string;
    };
    summarySpanMethod: {
        type: import("vue").PropType<(data: {
            record: import("./types").TableData;
            column: import("./types").TableColumnData | import("./types").TableOperationColumn;
            rowIndex: number;
            columnIndex: number;
        }) => {
            rowspan?: number;
            colspan?: number;
        } | void>;
    };
    selectedKeys: {
        type: import("vue").PropType<(string | number)[]>;
    };
    defaultSelectedKeys: {
        type: import("vue").PropType<(string | number)[]>;
    };
    expandedKeys: {
        type: import("vue").PropType<(string | number)[]>;
    };
    defaultExpandedKeys: {
        type: import("vue").PropType<(string | number)[]>;
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
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
    showEmptyTree: {
        type: BooleanConstructor;
        default: boolean;
    };
    extraColumn: {
        type: import("vue").PropType<boolean | import("./extra-column").TableExtraColumnConfig>;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => any) | undefined;
    onSelect?: ((rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => any) | undefined;
    onCellClick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onCellMouseEnter?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
    "onUpdate:selectedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
    onExpand?: ((rowKey: string | number, record: import("./types").TableData) => any) | undefined;
    onSelectAll?: ((checked: boolean) => any) | undefined;
    onSelectionChange?: ((rowKeys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
    onExpandedChange?: ((rowKeys: (string | number)[]) => any) | undefined;
    onColumnResize?: ((dataIndex: string, width: number) => any) | undefined;
    "onUpdate:columns"?: ((columns: import("./types").TableColumnData[]) => any) | undefined;
    onSorterChange?: ((dataIndex: string, direction: string) => any) | undefined;
    onFilterChange?: ((dataIndex: string, filteredValues: string[]) => any) | undefined;
    onCellMouseLeave?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onRowClick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
    onHeaderClick?: ((column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onRowDblclick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
    onCellDblclick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onRowContextmenu?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
    onCellContextmenu?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
}>, {
    render: () => import("vue/jsx-runtime").JSX.Element;
    selfExpand: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], expanded?: boolean) => void;
    selfExpandAll: (expanded?: boolean) => void;
    selfSelect: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], checked?: boolean) => void;
    selfSelectAll: (checked?: boolean) => void;
    selfResetFilters: (dataIndex?: string | string[]) => void;
    selfClearFilters: (dataIndex?: string | string[]) => void;
    selfResetSorters: () => void;
    selfClearSorters: () => void;
}, {}, {}, {
    selectAll(checked?: boolean): void;
    select(rowKey: string | number | (string | number)[], checked?: boolean): void;
    expandAll(checked?: boolean): void;
    expand(rowKey: string | number | (string | number)[], checked?: boolean): void;
    resetFilters(dataIndex?: string | string[]): void;
    clearFilters(dataIndex?: string | string[]): void;
    resetSorters(): void;
    clearSorters(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:selectedKeys": (rowKeys: (string | number)[]) => true;
    "update:expandedKeys": (rowKeys: (string | number)[]) => true;
    "update:columns": (columns: import("./types").TableColumnData[]) => true;
    expand: (rowKey: string | number, record: import("./types").TableData) => true;
    expandedChange: (rowKeys: (string | number)[]) => true;
    select: (rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => true;
    selectAll: (checked: boolean) => true;
    selectionChange: (rowKeys: (string | number)[]) => true;
    sorterChange: (dataIndex: string, direction: string) => true;
    filterChange: (dataIndex: string, filteredValues: string[]) => true;
    pageChange: (page: number) => true;
    pageSizeChange: (pageSize: number) => true;
    change: (data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => true;
    cellMouseEnter: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    cellMouseLeave: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    cellClick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    rowClick: (record: import("./types").TableData, ev: Event) => true;
    headerClick: (column: import("./types").TableColumnData, ev: Event) => true;
    columnResize: (dataIndex: string, width: number) => true;
    rowDblclick: (record: import("./types").TableData, ev: Event) => true;
    cellDblclick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    rowContextmenu: (record: import("./types").TableData, ev: Event) => true;
    cellContextmenu: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    data: import("./types").TableData[];
    scrollbar: boolean | import("..").ScrollbarProps;
    tableLayout: "fixed" | "auto";
    columns: import("./types").TableColumnData[];
    loading: boolean | Record<string, any>;
    bordered: boolean | import("./types").TableBorder;
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
            type: import("vue").PropType<number[]>;
            default: () => number[];
            validator: (value: number[]) => boolean;
        };
        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
    extraColumn: boolean | import("./extra-column").TableExtraColumnConfig;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Thead: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Tbody: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Tr: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        expand: {
            type: BooleanConstructor;
        };
        empty: {
            type: BooleanConstructor;
        };
        checked: {
            type: BooleanConstructor;
        };
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        expand: {
            type: BooleanConstructor;
        };
        empty: {
            type: BooleanConstructor;
        };
        checked: {
            type: BooleanConstructor;
        };
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
    }>> & Readonly<{}>, {
        empty: boolean;
        checked: boolean;
        expand: boolean;
        record: import("./types").TableDataWithRaw;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Th: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        resizable: BooleanConstructor;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        resizable: BooleanConstructor;
    }>> & Readonly<{}>, {
        column: import("./types").TableColumnData;
        dataColumns: import("./types").TableColumnData[];
        operations: import("./types").TableOperationColumn[];
        resizable: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Td: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        type: {
            type: import("vue").PropType<"normal" | "checkbox" | "radio" | "expand" | "operation">;
            default: string;
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        colSpan: {
            type: NumberConstructor;
            default: number;
        };
        rowSpan: {
            type: NumberConstructor;
            default: number;
        };
        isFixedExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        containerWidth: {
            type: NumberConstructor;
        };
        showExpandBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        indentSize: {
            type: NumberConstructor;
            default: number;
        };
        renderExpandBtn: {
            type: import("vue").PropType<(record: import("./types").TableDataWithRaw, stopPropagation?: boolean) => import("vue").VNode>;
        };
        summary: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        type: {
            type: import("vue").PropType<"normal" | "checkbox" | "radio" | "expand" | "operation">;
            default: string;
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        colSpan: {
            type: NumberConstructor;
            default: number;
        };
        rowSpan: {
            type: NumberConstructor;
            default: number;
        };
        isFixedExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        containerWidth: {
            type: NumberConstructor;
        };
        showExpandBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        indentSize: {
            type: NumberConstructor;
            default: number;
        };
        renderExpandBtn: {
            type: import("vue").PropType<(record: import("./types").TableDataWithRaw, stopPropagation?: boolean) => import("vue").VNode>;
        };
        summary: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        type: "normal" | "checkbox" | "radio" | "expand" | "operation";
        summary: boolean;
        column: import("./types").TableColumnData;
        dataColumns: import("./types").TableColumnData[];
        operations: import("./types").TableOperationColumn[];
        colSpan: number;
        rowSpan: number;
        record: import("./types").TableDataWithRaw;
        isFixedExpand: boolean;
        showExpandBtn: boolean;
        indentSize: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Column: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        dataIndex: StringConstructor;
        title: StringConstructor;
        width: NumberConstructor;
        minWidth: NumberConstructor;
        align: {
            type: import("vue").PropType<import("./types").TableColumnData["align"]>;
        };
        fixed: {
            type: import("vue").PropType<import("./types").TableColumnData["fixed"]>;
        };
        ellipsis: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortable: {
            type: import("vue").PropType<import("./types").TableSortable>;
            default: undefined;
        };
        filterable: {
            type: import("vue").PropType<import("./types").TableFilterable>;
            default: undefined;
        };
        cellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        headerCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        bodyCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        summaryCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        cellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        headerCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        bodyCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        summaryCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        index: {
            type: NumberConstructor;
        };
        tooltip: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        dataIndex: StringConstructor;
        title: StringConstructor;
        width: NumberConstructor;
        minWidth: NumberConstructor;
        align: {
            type: import("vue").PropType<import("./types").TableColumnData["align"]>;
        };
        fixed: {
            type: import("vue").PropType<import("./types").TableColumnData["fixed"]>;
        };
        ellipsis: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortable: {
            type: import("vue").PropType<import("./types").TableSortable>;
            default: undefined;
        };
        filterable: {
            type: import("vue").PropType<import("./types").TableFilterable>;
            default: undefined;
        };
        cellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        headerCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        bodyCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        summaryCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        cellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        headerCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        bodyCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        summaryCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        index: {
            type: NumberConstructor;
        };
        tooltip: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
    }>> & Readonly<{}>, {
        ellipsis: boolean;
        tooltip: boolean | Record<string, any>;
        filterable: import("./types").TableFilterable;
        sortable: import("./types").TableSortable;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type TableInstance = InstanceType<typeof _Table>;
export type TheadInstance = InstanceType<typeof _Thead>;
export type TbodyInstance = InstanceType<typeof _Tbody>;
export type TrInstance = InstanceType<typeof _Tr>;
export type ThInstance = InstanceType<typeof _Th>;
export type TdInstance = InstanceType<typeof _Td>;
export type TableColumnInstance = InstanceType<typeof _Column>;
export type { TableData, TableSortable, TableFilterData, TableFilterable, TableColumnData, TableBorder, TableRowSelection, TableExpandable, TableDraggable, TableChangeExtra, } from './types';
export type { TableExtraColumnConfig } from './extra-column';
export { TABLE_EXTRA_COLUMN_KEY, resolveExtraColumnConfig, getExtraColumnWidth, DEFAULT_EXTRA_COLUMN_WIDTH } from './extra-column';
export { _Thead as Thead, _Tbody as Tbody, _Tr as Tr, _Th as Th, _Td as Td, _Column as TableColumn };
export declare const _TableComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        data: {
            type: import("vue").PropType<import("./types").TableData[]>;
            default: () => never[];
        };
        bordered: {
            type: import("vue").PropType<boolean | import("./types").TableBorder>;
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
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        loading: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
        rowSelection: {
            type: import("vue").PropType<import("./types").TableRowSelection>;
        };
        expandable: {
            type: import("vue").PropType<import("./types").TableExpandable>;
        };
        height: {
            type: import("vue").PropType<number | string>;
        };
        maxHeight: {
            type: import("vue").PropType<number | string>;
        };
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        pagination: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
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
                    type: import("vue").PropType<number[]>;
                    default: () => number[];
                    validator: (value: number[]) => boolean;
                };
                pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
            }>>>;
            default: boolean;
        };
        pagePosition: {
            type: import("vue").PropType<import("./types").TablePagePosition>;
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
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        spanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
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
            type: import("vue").PropType<import("./types").TableComponents>;
        };
        loadMore: {
            type: import("vue").PropType<(record: import("./types").TableData, done: (children?: import("./types").TableData[]) => void) => void>;
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
            type: import("vue").PropType<string | any[] | Record<string, any> | ((record: import("./types").TableData, rowIndex: number) => any)>;
        };
        draggable: {
            type: import("vue").PropType<import("./types").TableDraggable>;
        };
        rowNumber: {
            type: (ObjectConstructor | BooleanConstructor)[];
        };
        columnResizable: {
            type: BooleanConstructor;
        };
        summary: {
            type: import("vue").PropType<boolean | ((params: {
                columns: import("./types").TableColumnData[];
                data: import("./types").TableData[];
            }) => import("./types").TableData[])>;
        };
        summaryText: {
            type: StringConstructor;
            default: string;
        };
        summarySpanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
                rowIndex: number;
                columnIndex: number;
            }) => {
                rowspan?: number;
                colspan?: number;
            } | void>;
        };
        selectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        expandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultExpandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
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
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showEmptyTree: {
            type: BooleanConstructor;
            default: boolean;
        };
        extraColumn: {
            type: import("vue").PropType<boolean | import("./extra-column").TableExtraColumnConfig>;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => any) | undefined;
        onSelect?: ((rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onCellClick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onCellMouseEnter?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
        "onUpdate:selectedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onSelectAll?: ((checked: boolean) => any) | undefined;
        onSelectionChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        "onUpdate:expandedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpandedChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        onColumnResize?: ((dataIndex: string, width: number) => any) | undefined;
        "onUpdate:columns"?: ((columns: import("./types").TableColumnData[]) => any) | undefined;
        onSorterChange?: ((dataIndex: string, direction: string) => any) | undefined;
        onFilterChange?: ((dataIndex: string, filteredValues: string[]) => any) | undefined;
        onCellMouseLeave?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowClick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onHeaderClick?: ((column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowDblclick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellDblclick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowContextmenu?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellContextmenu?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    }>, {
        render: () => import("vue/jsx-runtime").JSX.Element;
        selfExpand: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], expanded?: boolean) => void;
        selfExpandAll: (expanded?: boolean) => void;
        selfSelect: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], checked?: boolean) => void;
        selfSelectAll: (checked?: boolean) => void;
        selfResetFilters: (dataIndex?: string | string[]) => void;
        selfClearFilters: (dataIndex?: string | string[]) => void;
        selfResetSorters: () => void;
        selfClearSorters: () => void;
    }, {}, {}, {
        selectAll(checked?: boolean): void;
        select(rowKey: string | number | (string | number)[], checked?: boolean): void;
        expandAll(checked?: boolean): void;
        expand(rowKey: string | number | (string | number)[], checked?: boolean): void;
        resetFilters(dataIndex?: string | string[]): void;
        clearFilters(dataIndex?: string | string[]): void;
        resetSorters(): void;
        clearSorters(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:selectedKeys": (rowKeys: (string | number)[]) => true;
        "update:expandedKeys": (rowKeys: (string | number)[]) => true;
        "update:columns": (columns: import("./types").TableColumnData[]) => true;
        expand: (rowKey: string | number, record: import("./types").TableData) => true;
        expandedChange: (rowKeys: (string | number)[]) => true;
        select: (rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => true;
        selectAll: (checked: boolean) => true;
        selectionChange: (rowKeys: (string | number)[]) => true;
        sorterChange: (dataIndex: string, direction: string) => true;
        filterChange: (dataIndex: string, filteredValues: string[]) => true;
        pageChange: (page: number) => true;
        pageSizeChange: (pageSize: number) => true;
        change: (data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => true;
        cellMouseEnter: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        cellMouseLeave: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        cellClick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        rowClick: (record: import("./types").TableData, ev: Event) => true;
        headerClick: (column: import("./types").TableColumnData, ev: Event) => true;
        columnResize: (dataIndex: string, width: number) => true;
        rowDblclick: (record: import("./types").TableData, ev: Event) => true;
        cellDblclick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
        rowContextmenu: (record: import("./types").TableData, ev: Event) => true;
        cellContextmenu: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TableData[];
        scrollbar: boolean | import("..").ScrollbarProps;
        tableLayout: "fixed" | "auto";
        columns: import("./types").TableColumnData[];
        loading: boolean | Record<string, any>;
        bordered: boolean | import("./types").TableBorder;
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
                type: import("vue").PropType<number[]>;
                default: () => number[];
                validator: (value: number[]) => boolean;
            };
            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
        extraColumn: boolean | import("./extra-column").TableExtraColumnConfig;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        data: {
            type: import("vue").PropType<import("./types").TableData[]>;
            default: () => never[];
        };
        bordered: {
            type: import("vue").PropType<boolean | import("./types").TableBorder>;
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
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        tableLayout: {
            type: import("vue").PropType<"fixed" | "auto">;
            default: string;
        };
        loading: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
        rowSelection: {
            type: import("vue").PropType<import("./types").TableRowSelection>;
        };
        expandable: {
            type: import("vue").PropType<import("./types").TableExpandable>;
        };
        height: {
            type: import("vue").PropType<number | string>;
        };
        maxHeight: {
            type: import("vue").PropType<number | string>;
        };
        fit: {
            type: BooleanConstructor;
            default: boolean;
        };
        pagination: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
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
                    type: import("vue").PropType<number[]>;
                    default: () => number[];
                    validator: (value: number[]) => boolean;
                };
                pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
            }>>>;
            default: boolean;
        };
        pagePosition: {
            type: import("vue").PropType<import("./types").TablePagePosition>;
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
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        spanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
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
            type: import("vue").PropType<import("./types").TableComponents>;
        };
        loadMore: {
            type: import("vue").PropType<(record: import("./types").TableData, done: (children?: import("./types").TableData[]) => void) => void>;
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
            type: import("vue").PropType<string | any[] | Record<string, any> | ((record: import("./types").TableData, rowIndex: number) => any)>;
        };
        draggable: {
            type: import("vue").PropType<import("./types").TableDraggable>;
        };
        rowNumber: {
            type: (ObjectConstructor | BooleanConstructor)[];
        };
        columnResizable: {
            type: BooleanConstructor;
        };
        summary: {
            type: import("vue").PropType<boolean | ((params: {
                columns: import("./types").TableColumnData[];
                data: import("./types").TableData[];
            }) => import("./types").TableData[])>;
        };
        summaryText: {
            type: StringConstructor;
            default: string;
        };
        summarySpanMethod: {
            type: import("vue").PropType<(data: {
                record: import("./types").TableData;
                column: import("./types").TableColumnData | import("./types").TableOperationColumn;
                rowIndex: number;
                columnIndex: number;
            }) => {
                rowspan?: number;
                colspan?: number;
            } | void>;
        };
        selectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        expandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
        };
        defaultExpandedKeys: {
            type: import("vue").PropType<(string | number)[]>;
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
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showEmptyTree: {
            type: BooleanConstructor;
            default: boolean;
        };
        extraColumn: {
            type: import("vue").PropType<boolean | import("./extra-column").TableExtraColumnConfig>;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => any) | undefined;
        onSelect?: ((rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onCellClick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onCellMouseEnter?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
        "onUpdate:selectedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((rowKey: string | number, record: import("./types").TableData) => any) | undefined;
        onSelectAll?: ((checked: boolean) => any) | undefined;
        onSelectionChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        "onUpdate:expandedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
        onExpandedChange?: ((rowKeys: (string | number)[]) => any) | undefined;
        onColumnResize?: ((dataIndex: string, width: number) => any) | undefined;
        "onUpdate:columns"?: ((columns: import("./types").TableColumnData[]) => any) | undefined;
        onSorterChange?: ((dataIndex: string, direction: string) => any) | undefined;
        onFilterChange?: ((dataIndex: string, filteredValues: string[]) => any) | undefined;
        onCellMouseLeave?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowClick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onHeaderClick?: ((column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowDblclick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellDblclick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
        onRowContextmenu?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
        onCellContextmenu?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    }>, {
        render: () => import("vue/jsx-runtime").JSX.Element;
        selfExpand: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], expanded?: boolean) => void;
        selfExpandAll: (expanded?: boolean) => void;
        selfSelect: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], checked?: boolean) => void;
        selfSelectAll: (checked?: boolean) => void;
        selfResetFilters: (dataIndex?: string | string[]) => void;
        selfClearFilters: (dataIndex?: string | string[]) => void;
        selfResetSorters: () => void;
        selfClearSorters: () => void;
    }, {}, {}, {
        selectAll(checked?: boolean): void;
        select(rowKey: string | number | (string | number)[], checked?: boolean): void;
        expandAll(checked?: boolean): void;
        expand(rowKey: string | number | (string | number)[], checked?: boolean): void;
        resetFilters(dataIndex?: string | string[]): void;
        clearFilters(dataIndex?: string | string[]): void;
        resetSorters(): void;
        clearSorters(): void;
    }, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TableData[];
        scrollbar: boolean | import("..").ScrollbarProps;
        tableLayout: "fixed" | "auto";
        columns: import("./types").TableColumnData[];
        loading: boolean | Record<string, any>;
        bordered: boolean | import("./types").TableBorder;
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
                type: import("vue").PropType<number[]>;
                default: () => number[];
                validator: (value: number[]) => boolean;
            };
            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
        extraColumn: boolean | import("./extra-column").TableExtraColumnConfig;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: import("vue").PropType<import("./types").TableColumnData[]>;
        default: () => never[];
    };
    data: {
        type: import("vue").PropType<import("./types").TableData[]>;
        default: () => never[];
    };
    bordered: {
        type: import("vue").PropType<boolean | import("./types").TableBorder>;
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
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"fixed" | "auto">;
        default: string;
    };
    loading: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    rowSelection: {
        type: import("vue").PropType<import("./types").TableRowSelection>;
    };
    expandable: {
        type: import("vue").PropType<import("./types").TableExpandable>;
    };
    height: {
        type: import("vue").PropType<number | string>;
    };
    maxHeight: {
        type: import("vue").PropType<number | string>;
    };
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: {
        type: import("vue").PropType<boolean | import("..").PaginationProps>;
        default: boolean;
    };
    pagePosition: {
        type: import("vue").PropType<import("./types").TablePagePosition>;
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
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    spanMethod: {
        type: import("vue").PropType<(data: {
            record: import("./types").TableData;
            column: import("./types").TableColumnData | import("./types").TableOperationColumn;
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
        type: import("vue").PropType<import("./types").TableComponents>;
    };
    loadMore: {
        type: import("vue").PropType<(record: import("./types").TableData, done: (children?: import("./types").TableData[]) => void) => void>;
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
        type: import("vue").PropType<string | any[] | Record<string, any> | ((record: import("./types").TableData, rowIndex: number) => any)>;
    };
    draggable: {
        type: import("vue").PropType<import("./types").TableDraggable>;
    };
    rowNumber: {
        type: (ObjectConstructor | BooleanConstructor)[];
    };
    columnResizable: {
        type: BooleanConstructor;
    };
    summary: {
        type: import("vue").PropType<boolean | ((params: {
            columns: import("./types").TableColumnData[];
            data: import("./types").TableData[];
        }) => import("./types").TableData[])>;
    };
    summaryText: {
        type: StringConstructor;
        default: string;
    };
    summarySpanMethod: {
        type: import("vue").PropType<(data: {
            record: import("./types").TableData;
            column: import("./types").TableColumnData | import("./types").TableOperationColumn;
            rowIndex: number;
            columnIndex: number;
        }) => {
            rowspan?: number;
            colspan?: number;
        } | void>;
    };
    selectedKeys: {
        type: import("vue").PropType<(string | number)[]>;
    };
    defaultSelectedKeys: {
        type: import("vue").PropType<(string | number)[]>;
    };
    expandedKeys: {
        type: import("vue").PropType<(string | number)[]>;
    };
    defaultExpandedKeys: {
        type: import("vue").PropType<(string | number)[]>;
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
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
    showEmptyTree: {
        type: BooleanConstructor;
        default: boolean;
    };
    extraColumn: {
        type: import("vue").PropType<boolean | import("./extra-column").TableExtraColumnConfig>;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => any) | undefined;
    onSelect?: ((rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => any) | undefined;
    onCellClick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onCellMouseEnter?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
    "onUpdate:selectedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
    onExpand?: ((rowKey: string | number, record: import("./types").TableData) => any) | undefined;
    onSelectAll?: ((checked: boolean) => any) | undefined;
    onSelectionChange?: ((rowKeys: (string | number)[]) => any) | undefined;
    "onUpdate:expandedKeys"?: ((rowKeys: (string | number)[]) => any) | undefined;
    onExpandedChange?: ((rowKeys: (string | number)[]) => any) | undefined;
    onColumnResize?: ((dataIndex: string, width: number) => any) | undefined;
    "onUpdate:columns"?: ((columns: import("./types").TableColumnData[]) => any) | undefined;
    onSorterChange?: ((dataIndex: string, direction: string) => any) | undefined;
    onFilterChange?: ((dataIndex: string, filteredValues: string[]) => any) | undefined;
    onCellMouseLeave?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onRowClick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
    onHeaderClick?: ((column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onRowDblclick?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
    onCellDblclick?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
    onRowContextmenu?: ((record: import("./types").TableData, ev: Event) => any) | undefined;
    onCellContextmenu?: ((record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => any) | undefined;
}>, {
    render: () => import("vue/jsx-runtime").JSX.Element;
    selfExpand: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], expanded?: boolean) => void;
    selfExpandAll: (expanded?: boolean) => void;
    selfSelect: (rowKey: import("../_utils/types").BaseType | import("../_utils/types").BaseType[], checked?: boolean) => void;
    selfSelectAll: (checked?: boolean) => void;
    selfResetFilters: (dataIndex?: string | string[]) => void;
    selfClearFilters: (dataIndex?: string | string[]) => void;
    selfResetSorters: () => void;
    selfClearSorters: () => void;
}, {}, {}, {
    selectAll(checked?: boolean): void;
    select(rowKey: string | number | (string | number)[], checked?: boolean): void;
    expandAll(checked?: boolean): void;
    expand(rowKey: string | number | (string | number)[], checked?: boolean): void;
    resetFilters(dataIndex?: string | string[]): void;
    clearFilters(dataIndex?: string | string[]): void;
    resetSorters(): void;
    clearSorters(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:selectedKeys": (rowKeys: (string | number)[]) => true;
    "update:expandedKeys": (rowKeys: (string | number)[]) => true;
    "update:columns": (columns: import("./types").TableColumnData[]) => true;
    expand: (rowKey: string | number, record: import("./types").TableData) => true;
    expandedChange: (rowKeys: (string | number)[]) => true;
    select: (rowKeys: (string | number)[], rowKey: string | number, record: import("./types").TableData) => true;
    selectAll: (checked: boolean) => true;
    selectionChange: (rowKeys: (string | number)[]) => true;
    sorterChange: (dataIndex: string, direction: string) => true;
    filterChange: (dataIndex: string, filteredValues: string[]) => true;
    pageChange: (page: number) => true;
    pageSizeChange: (pageSize: number) => true;
    change: (data: import("./types").TableData[], extra: import("./types").TableChangeExtra, currentData: import("./types").TableData[]) => true;
    cellMouseEnter: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    cellMouseLeave: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    cellClick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    rowClick: (record: import("./types").TableData, ev: Event) => true;
    headerClick: (column: import("./types").TableColumnData, ev: Event) => true;
    columnResize: (dataIndex: string, width: number) => true;
    rowDblclick: (record: import("./types").TableData, ev: Event) => true;
    cellDblclick: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
    rowContextmenu: (record: import("./types").TableData, ev: Event) => true;
    cellContextmenu: (record: import("./types").TableData, column: import("./types").TableColumnData, ev: Event) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    data: import("./types").TableData[];
    scrollbar: boolean | import("..").ScrollbarProps;
    tableLayout: "fixed" | "auto";
    columns: import("./types").TableColumnData[];
    loading: boolean | Record<string, any>;
    bordered: boolean | import("./types").TableBorder;
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
            type: import("vue").PropType<number[]>;
            default: () => number[];
            validator: (value: number[]) => boolean;
        };
        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
    extraColumn: boolean | import("./extra-column").TableExtraColumnConfig;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Thead: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Tbody: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Tr: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        expand: {
            type: BooleanConstructor;
        };
        empty: {
            type: BooleanConstructor;
        };
        checked: {
            type: BooleanConstructor;
        };
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        expand: {
            type: BooleanConstructor;
        };
        empty: {
            type: BooleanConstructor;
        };
        checked: {
            type: BooleanConstructor;
        };
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
    }>> & Readonly<{}>, {
        empty: boolean;
        checked: boolean;
        expand: boolean;
        record: import("./types").TableDataWithRaw;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Th: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        resizable: BooleanConstructor;
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        resizable: BooleanConstructor;
    }>> & Readonly<{}>, {
        column: import("./types").TableColumnData;
        dataColumns: import("./types").TableColumnData[];
        operations: import("./types").TableOperationColumn[];
        resizable: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Td: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        type: {
            type: import("vue").PropType<"normal" | "checkbox" | "radio" | "expand" | "operation">;
            default: string;
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        colSpan: {
            type: NumberConstructor;
            default: number;
        };
        rowSpan: {
            type: NumberConstructor;
            default: number;
        };
        isFixedExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        containerWidth: {
            type: NumberConstructor;
        };
        showExpandBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        indentSize: {
            type: NumberConstructor;
            default: number;
        };
        renderExpandBtn: {
            type: import("vue").PropType<(record: import("./types").TableDataWithRaw, stopPropagation?: boolean) => import("vue").VNode>;
        };
        summary: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        rowIndex: NumberConstructor;
        record: {
            type: import("vue").PropType<import("./types").TableDataWithRaw>;
            default: () => {};
        };
        column: {
            type: import("vue").PropType<import("./types").TableColumnData>;
            default: () => {};
        };
        type: {
            type: import("vue").PropType<"normal" | "checkbox" | "radio" | "expand" | "operation">;
            default: string;
        };
        operations: {
            type: import("vue").PropType<import("./types").TableOperationColumn[]>;
            default: () => never[];
        };
        dataColumns: {
            type: import("vue").PropType<import("./types").TableColumnData[]>;
            default: () => never[];
        };
        colSpan: {
            type: NumberConstructor;
            default: number;
        };
        rowSpan: {
            type: NumberConstructor;
            default: number;
        };
        isFixedExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        containerWidth: {
            type: NumberConstructor;
        };
        showExpandBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        indentSize: {
            type: NumberConstructor;
            default: number;
        };
        renderExpandBtn: {
            type: import("vue").PropType<(record: import("./types").TableDataWithRaw, stopPropagation?: boolean) => import("vue").VNode>;
        };
        summary: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        type: "normal" | "checkbox" | "radio" | "expand" | "operation";
        summary: boolean;
        column: import("./types").TableColumnData;
        dataColumns: import("./types").TableColumnData[];
        operations: import("./types").TableOperationColumn[];
        colSpan: number;
        rowSpan: number;
        record: import("./types").TableDataWithRaw;
        isFixedExpand: boolean;
        showExpandBtn: boolean;
        indentSize: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Column: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        dataIndex: StringConstructor;
        title: StringConstructor;
        width: NumberConstructor;
        minWidth: NumberConstructor;
        align: {
            type: import("vue").PropType<import("./types").TableColumnData["align"]>;
        };
        fixed: {
            type: import("vue").PropType<import("./types").TableColumnData["fixed"]>;
        };
        ellipsis: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortable: {
            type: import("vue").PropType<import("./types").TableSortable>;
            default: undefined;
        };
        filterable: {
            type: import("vue").PropType<import("./types").TableFilterable>;
            default: undefined;
        };
        cellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        headerCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        bodyCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        summaryCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        cellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        headerCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        bodyCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        summaryCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        index: {
            type: NumberConstructor;
        };
        tooltip: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        dataIndex: StringConstructor;
        title: StringConstructor;
        width: NumberConstructor;
        minWidth: NumberConstructor;
        align: {
            type: import("vue").PropType<import("./types").TableColumnData["align"]>;
        };
        fixed: {
            type: import("vue").PropType<import("./types").TableColumnData["fixed"]>;
        };
        ellipsis: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortable: {
            type: import("vue").PropType<import("./types").TableSortable>;
            default: undefined;
        };
        filterable: {
            type: import("vue").PropType<import("./types").TableFilterable>;
            default: undefined;
        };
        cellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        headerCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName>;
        };
        bodyCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        summaryCellClass: {
            type: import("vue").PropType<import("../_utils/types").ClassName | ((record: import("./types").TableData) => import("../_utils/types").ClassName)>;
        };
        cellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        headerCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        bodyCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        summaryCellStyle: {
            type: import("vue").PropType<import("vue").CSSProperties | ((record: import("./types").TableData) => import("vue").CSSProperties)>;
        };
        index: {
            type: NumberConstructor;
        };
        tooltip: {
            type: (ObjectConstructor | BooleanConstructor)[];
            default: boolean;
        };
    }>> & Readonly<{}>, {
        ellipsis: boolean;
        tooltip: boolean | Record<string, any>;
        filterable: import("./types").TableFilterable;
        sortable: import("./types").TableSortable;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Table };
export { tableProps };
export default Table;
