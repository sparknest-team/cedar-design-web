import { PropType, VNode } from "vue";
import { TableColumnData, TableDataWithRaw, TableOperationColumn } from "./types";
declare const TD_TYPES: readonly ["normal", "operation", "checkbox", "radio", "expand"];
type TdTypes = (typeof TD_TYPES)[number];
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    rowIndex: NumberConstructor;
    record: {
        type: PropType<TableDataWithRaw>;
        default: () => {};
    };
    column: {
        type: PropType<TableColumnData>;
        default: () => {};
    };
    type: {
        type: PropType<TdTypes>;
        default: string;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        default: () => never[];
    };
    dataColumns: {
        type: PropType<TableColumnData[]>;
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
        type: PropType<(record: TableDataWithRaw, stopPropagation?: boolean) => VNode>;
    };
    summary: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    rowIndex: NumberConstructor;
    record: {
        type: PropType<TableDataWithRaw>;
        default: () => {};
    };
    column: {
        type: PropType<TableColumnData>;
        default: () => {};
    };
    type: {
        type: PropType<TdTypes>;
        default: string;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        default: () => never[];
    };
    dataColumns: {
        type: PropType<TableColumnData[]>;
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
        type: PropType<(record: TableDataWithRaw, stopPropagation?: boolean) => VNode>;
    };
    summary: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    type: "normal" | "checkbox" | "radio" | "expand" | "operation";
    summary: boolean;
    column: TableColumnData;
    dataColumns: TableColumnData[];
    operations: TableOperationColumn[];
    colSpan: number;
    rowSpan: number;
    record: TableDataWithRaw;
    isFixedExpand: boolean;
    showExpandBtn: boolean;
    indentSize: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
