import type { TableColumnData, TableOperationColumn } from '../types';
export declare const DEFAULT_COLUMN_MIN_WIDTH = 80;
export declare const DEFAULT_OPERATION_WIDTH = 40;
export interface ColumnsLayoutResult {
    scrollX: boolean;
    bodyWidth: number;
    columnRealWidth: Record<string, number>;
}
/**
 * Element Plus 风格列宽分配：
 * - 有 width（或拖拽宽度）→ 固定列
 * - 无 width → 弹性列：fit=true 时按 minWidth（默认 80）比例吸收剩余空间
 * - 列最小宽之和超过容器 → 开启横向滚动
 * - 列宽之和不足容器 → 剩余空间按各列基础宽度比例放大撑满（与 fit 无关；
 *   exactDataIndexes 中的钉死列如 extra-column 不参与放大，保持原宽）
 */
export declare const updateColumnsWidth: ({ containerWidth, dataColumns, operations, fit, exactDataIndexes, }: {
    containerWidth: number;
    dataColumns: TableColumnData[];
    operations: TableOperationColumn[];
    fit: boolean;
    /** 钉死列（如 extra-column）的 dataIndex：任何情况下都保持显式宽度，不参与放大 */
    exactDataIndexes?: string[];
}) => ColumnsLayoutResult;
