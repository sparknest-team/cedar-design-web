import type { Size } from '../_utils/constant'

/** 末列扩展列（如设置按钮）的默认 dataIndex */
export const TABLE_EXTRA_COLUMN_KEY = '__cedar_table_extra__'

export type TableExtraColumnConfig = {
  /** 列宽。未传时按表格 size：xs 28 / sm 32 / md·lg·xl 36 */
  width?: number
  fixed?: 'left' | 'right'
  align?: 'left' | 'center' | 'right'
  dataIndex?: string
}

const EXTRA_COLUMN_WIDTH_BY_SIZE: Record<string, number> = {
  xs: 28,
  sm: 32,
  md: 36,
  lg: 36,
  xl: 36,
}

export function resolveExtraColumnConfig(
  extraColumn?: boolean | TableExtraColumnConfig,
): {
  enabled: boolean
  width?: number
  fixed: 'left' | 'right'
  align: 'left' | 'center' | 'right'
  dataIndex: string
} {
  if (!extraColumn) {
    return {
      enabled: false,
      fixed: 'right',
      align: 'center',
      dataIndex: TABLE_EXTRA_COLUMN_KEY,
    }
  }
  const conf = extraColumn === true ? {} : extraColumn
  return {
    enabled: true,
    width: conf.width,
    fixed: conf.fixed ?? 'right',
    align: conf.align ?? 'center',
    dataIndex: conf.dataIndex ?? TABLE_EXTRA_COLUMN_KEY,
  }
}

export function getExtraColumnWidth(size?: Size | string, customWidth?: number): number {
  if (customWidth != null) return customWidth
  return EXTRA_COLUMN_WIDTH_BY_SIZE[size ?? 'md'] ?? EXTRA_COLUMN_WIDTH_BY_SIZE.md
}
