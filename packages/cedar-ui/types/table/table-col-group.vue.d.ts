import { PropType } from "vue";
import { TableColumnData, TableOperationColumn } from "./types";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    dataColumns: {
        type: PropType<TableColumnData[]>;
        required: true;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        required: true;
    };
    columnWidth: {
        type: PropType<Record<string, number>>;
    };
    columnRealWidth: {
        type: PropType<Record<string, number>>;
    };
    /** fixed：使用布局计算结果；auto：不渲染 col，交给浏览器按内容分配 */
    tableLayout: {
        type: PropType<"fixed" | "auto">;
        default: string;
    };
}>, {
    getColWidth: (item: TableColumnData) => number | undefined;
    prefixCls: string;
    DEFAULT_OPERATION_WIDTH: number;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    dataColumns: {
        type: PropType<TableColumnData[]>;
        required: true;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        required: true;
    };
    columnWidth: {
        type: PropType<Record<string, number>>;
    };
    columnRealWidth: {
        type: PropType<Record<string, number>>;
    };
    /** fixed：使用布局计算结果；auto：不渲染 col，交给浏览器按内容分配 */
    tableLayout: {
        type: PropType<"fixed" | "auto">;
        default: string;
    };
}>> & Readonly<{}>, {
    tableLayout: "fixed" | "auto";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
