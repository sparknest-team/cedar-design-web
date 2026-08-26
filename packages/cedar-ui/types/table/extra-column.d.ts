import type { ComponentSize } from "../_utils/constant";
/** 末列扩展列（如设置按钮）的默认 dataIndex */
export declare const TABLE_EXTRA_COLUMN_KEY = "__cedar_table_extra__";
export type TableExtraColumnConfig = {
    /** 列宽。未传时默认 28px */
    width?: number;
    fixed?: "left" | "right";
    align?: "left" | "center" | "right";
    dataIndex?: string;
};
/** 扩展列默认定宽 28px */
export declare const DEFAULT_EXTRA_COLUMN_WIDTH = 28;
export declare function resolveExtraColumnConfig(extraColumn?: boolean | TableExtraColumnConfig): {
    enabled: boolean;
    width?: number;
    fixed: "left" | "right";
    align: "left" | "center" | "right";
    dataIndex: string;
};
export declare function getExtraColumnWidth(size?: ComponentSize | string, customWidth?: number): number;
