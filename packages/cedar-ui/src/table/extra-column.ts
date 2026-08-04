import type { Size } from "../_utils/constant";

/** 末列扩展列（如设置按钮）的默认 dataIndex */
export const TABLE_EXTRA_COLUMN_KEY = "__cedar_table_extra__";

export type TableExtraColumnConfig = {
  /** 列宽。未传时默认 28px */
  width?: number;
  fixed?: "left" | "right";
  align?: "left" | "center" | "right";
  dataIndex?: string;
};

/** 扩展列默认定宽 28px */
export const DEFAULT_EXTRA_COLUMN_WIDTH = 28;

export function resolveExtraColumnConfig(
  extraColumn?: boolean | TableExtraColumnConfig,
): {
  enabled: boolean;
  width?: number;
  fixed: "left" | "right";
  align: "left" | "center" | "right";
  dataIndex: string;
} {
  if (!extraColumn) {
    return {
      enabled: false,
      fixed: "right",
      align: "center",
      dataIndex: TABLE_EXTRA_COLUMN_KEY,
    };
  }
  const conf = extraColumn === true ? {} : extraColumn;
  return {
    enabled: true,
    width: conf.width,
    fixed: conf.fixed ?? "right",
    align: conf.align ?? "center",
    dataIndex: conf.dataIndex ?? TABLE_EXTRA_COLUMN_KEY,
  };
}

export function getExtraColumnWidth(
  size?: Size | string,
  customWidth?: number,
): number {
  if (customWidth != null) return customWidth;
  return DEFAULT_EXTRA_COLUMN_WIDTH;
}
