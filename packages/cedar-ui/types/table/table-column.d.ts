import { CSSProperties, PropType } from 'vue';
import { TableColumnData, TableData, TableFilterable, TableSortable } from './types';
import { ClassName } from '../_utils/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 列信息的标识，对应TableData中的数据
     * @en Identifies the column information, corresponding to the data in TableData
     */
    dataIndex: StringConstructor;
    /**
     * @zh 列标题
     * @en Column title
     */
    title: StringConstructor;
    /**
     * @zh 列宽度。设置后为固定列宽，不参与剩余空间分配
     * @en Column width. Fixed width when set; does not participate in remaining space distribution
     */
    width: NumberConstructor;
    /**
     * @zh 最小列宽。未设置 `width` 的列按 `minWidth` 比例分配剩余空间；默认 80
     * @en Minimum column width. Columns without `width` share remaining space by `minWidth` ratio; defaults to 80
     */
    minWidth: NumberConstructor;
    /**
     * @zh 对齐方向
     * @en Alignment direction
     */
    align: {
        type: PropType<TableColumnData["align"]>;
    };
    /**
     * @zh 固定位置
     * @en Fixed position
     */
    fixed: {
        type: PropType<TableColumnData["fixed"]>;
    };
    /**
     * @zh 是否显示为省略
     * @en Whether to display as omitted
     */
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 排序相关选项
     * @en Sorting related options
     */
    sortable: {
        type: PropType<TableSortable>;
        default: undefined;
    };
    /**
     * @zh 过滤相关选项
     * @en Filter related options
     */
    filterable: {
        type: PropType<TableFilterable>;
        default: undefined;
    };
    /**
     * @zh 自定义单元格类名
     * @en Custom cell class
     * @version 2.36.0
     */
    cellClass: {
        type: PropType<ClassName>;
    };
    /**
     * @zh 自定义表头单元格类名
     * @en Custom cell class
     * @version 2.36.0
     */
    headerCellClass: {
        type: PropType<ClassName>;
    };
    /**
     * @zh 自定义内容单元格类名
     * @en Custom cell class
     * @version 2.36.0
     */
    bodyCellClass: {
        type: PropType<ClassName | ((record: TableData) => ClassName)>;
    };
    /**
     * @zh 自定义总结栏单元格类名
     * @en Customize summary column cell class
     * @version 2.36.0
     */
    summaryCellClass: {
        type: PropType<ClassName | ((record: TableData) => ClassName)>;
    };
    /**
     * @zh 自定义单元格样式
     * @en Custom cell style
     * @version 2.11.0
     */
    cellStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 自定义表头单元格样式
     * @en Custom cell style
     * @version 2.29.0
     */
    headerCellStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 自定义内容单元格样式
     * @en Custom cell style
     * @version 2.29.0
     */
    bodyCellStyle: {
        type: PropType<CSSProperties | ((record: TableData) => CSSProperties)>;
    };
    /**
     * @zh 自定义总结栏单元格样式
     * @en Customize summary column cell style
     * @version 2.30.0
     */
    summaryCellStyle: {
        type: PropType<CSSProperties | ((record: TableData) => CSSProperties)>;
    };
    /**
     * @zh 用于手动指定选项的 index。2.26.0 版本后不再需要手动指定
     * @en index for manually specifying option. Manual specification is no longer required after version 2.26.0
     * @version 2.20.2
     */
    index: {
        type: NumberConstructor;
    };
    /**
     * @zh 在省略时是否显示文字提示
     * @en Whether to show text hints when omitted
     * @version 2.26.0
     */
    tooltip: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 列信息的标识，对应TableData中的数据
     * @en Identifies the column information, corresponding to the data in TableData
     */
    dataIndex: StringConstructor;
    /**
     * @zh 列标题
     * @en Column title
     */
    title: StringConstructor;
    /**
     * @zh 列宽度。设置后为固定列宽，不参与剩余空间分配
     * @en Column width. Fixed width when set; does not participate in remaining space distribution
     */
    width: NumberConstructor;
    /**
     * @zh 最小列宽。未设置 `width` 的列按 `minWidth` 比例分配剩余空间；默认 80
     * @en Minimum column width. Columns without `width` share remaining space by `minWidth` ratio; defaults to 80
     */
    minWidth: NumberConstructor;
    /**
     * @zh 对齐方向
     * @en Alignment direction
     */
    align: {
        type: PropType<TableColumnData["align"]>;
    };
    /**
     * @zh 固定位置
     * @en Fixed position
     */
    fixed: {
        type: PropType<TableColumnData["fixed"]>;
    };
    /**
     * @zh 是否显示为省略
     * @en Whether to display as omitted
     */
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 排序相关选项
     * @en Sorting related options
     */
    sortable: {
        type: PropType<TableSortable>;
        default: undefined;
    };
    /**
     * @zh 过滤相关选项
     * @en Filter related options
     */
    filterable: {
        type: PropType<TableFilterable>;
        default: undefined;
    };
    /**
     * @zh 自定义单元格类名
     * @en Custom cell class
     * @version 2.36.0
     */
    cellClass: {
        type: PropType<ClassName>;
    };
    /**
     * @zh 自定义表头单元格类名
     * @en Custom cell class
     * @version 2.36.0
     */
    headerCellClass: {
        type: PropType<ClassName>;
    };
    /**
     * @zh 自定义内容单元格类名
     * @en Custom cell class
     * @version 2.36.0
     */
    bodyCellClass: {
        type: PropType<ClassName | ((record: TableData) => ClassName)>;
    };
    /**
     * @zh 自定义总结栏单元格类名
     * @en Customize summary column cell class
     * @version 2.36.0
     */
    summaryCellClass: {
        type: PropType<ClassName | ((record: TableData) => ClassName)>;
    };
    /**
     * @zh 自定义单元格样式
     * @en Custom cell style
     * @version 2.11.0
     */
    cellStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 自定义表头单元格样式
     * @en Custom cell style
     * @version 2.29.0
     */
    headerCellStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 自定义内容单元格样式
     * @en Custom cell style
     * @version 2.29.0
     */
    bodyCellStyle: {
        type: PropType<CSSProperties | ((record: TableData) => CSSProperties)>;
    };
    /**
     * @zh 自定义总结栏单元格样式
     * @en Customize summary column cell style
     * @version 2.30.0
     */
    summaryCellStyle: {
        type: PropType<CSSProperties | ((record: TableData) => CSSProperties)>;
    };
    /**
     * @zh 用于手动指定选项的 index。2.26.0 版本后不再需要手动指定
     * @en index for manually specifying option. Manual specification is no longer required after version 2.26.0
     * @version 2.20.2
     */
    index: {
        type: NumberConstructor;
    };
    /**
     * @zh 在省略时是否显示文字提示
     * @en Whether to show text hints when omitted
     * @version 2.26.0
     */
    tooltip: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>> & Readonly<{}>, {
    ellipsis: boolean;
    tooltip: boolean | Record<string, any>;
    filterable: TableFilterable;
    sortable: TableSortable;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
