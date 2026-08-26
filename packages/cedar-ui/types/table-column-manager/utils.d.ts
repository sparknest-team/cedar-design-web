import type { TableColumnData } from '../table/types';
import type { ColumnCatalog, ColumnCatalogGroup, ColumnCatalogItem, ColumnManagerInsertAt, ColumnManagerLayoutNode, ColumnManagerItem, ColumnManagerResult, ColumnManagerState } from './types';
export declare function isColumnCatalogGroup(item: ColumnCatalogGroup | ColumnCatalogItem): item is ColumnCatalogGroup;
export declare function flattenCatalog(catalog?: ColumnCatalog): ColumnCatalogItem[];
/** 展开分组表头，得到叶子数据列（保序） */
export declare function flattenTableColumns(columns?: TableColumnData[]): TableColumnData[];
export declare function applyInsertAt(resultKeys: string[], prevKeys: string[], insertAt?: ColumnManagerInsertAt): string[];
/**
 * 向左 / 向右插入时，把新列写进锚点所在的一级分组（或紧挨无分组叶子），
 * 保证 nestLeaves 归组与 Table colspan 正确，而不是回落到 catalog 分组。
 */
export declare function applyInsertToLayout(layout: ColumnManagerLayoutNode[] | undefined, insertAt: ColumnManagerInsertAt, addedKeys: string[]): ColumnManagerLayoutNode[] | undefined;
/**
 * 冻结 / 取消冻结，并按规则调整叶子列顺序：
 * - left：追加到左侧冻结队列末尾（尚无左冻则放到最前）
 * - right：插入到右侧冻结队列最前（尚无右冻则放到最后）
 * - undefined：取消冻结；原左冻插入非冻结区最前，原右冻插入非冻结区最后
 */
export declare function applyColumnFixed(params: {
    items: ColumnManagerItem[];
    dataIndex: string;
    fixed?: 'left' | 'right';
}): ColumnManagerItem[];
/** 从当前 columns 树提取顶层 layout */
export declare function layoutFromColumns(columns?: TableColumnData[], catalog?: ColumnCatalog): ColumnManagerLayoutNode[];
export declare function buildColumnsResult(params: {
    items: ColumnManagerItem[];
    columns: TableColumnData[];
    registryColumns?: TableColumnData[];
    catalog: ColumnCatalog;
    insertAt?: ColumnManagerInsertAt;
    prevKeys?: string[];
    layout?: ColumnManagerLayoutNode[];
    columnDefaults?: Partial<TableColumnData>;
    createColumn?: (definition: ColumnCatalogItem) => TableColumnData;
}): ColumnManagerResult;
/** 仅用 state + catalog（及可选的当前列作元数据兜底）重建 columns */
export declare function buildColumnsFromState(params: {
    state: unknown;
    catalog: ColumnCatalog;
    columns?: TableColumnData[];
}): TableColumnData[];
/** 从唯一列目录生成初始/重置状态，并清洗可选的业务默认状态。 */
export declare function stateFromCatalog(catalog: ColumnCatalog, defaultState?: Omit<ColumnManagerState, 'version'>): ColumnManagerState;
export declare function stateFromColumns(columns?: TableColumnData[], catalog?: ColumnCatalog, options?: {
    widthKeys?: ReadonlySet<string>;
}): ColumnManagerState;
/** 清洗外部状态、补齐必选列，并修复冻结区与布局。版本不兼容时返回默认状态。 */
export declare function normalizeColumnManagerState(params: {
    state: unknown;
    catalog: ColumnCatalog;
    defaultState?: Omit<ColumnManagerState, 'version'>;
}): ColumnManagerState;
/** 递归更新 / 删除叶子列；空分组会被移除 */
export declare function mapLeafColumns(columns: TableColumnData[], mapper: (col: TableColumnData) => TableColumnData | null): TableColumnData[];
export declare function findLeafColumn(columns: TableColumnData[] | undefined, dataIndex: string): TableColumnData | undefined;
/** 稳定的一级分组 key（按标题合并时使用） */
export declare function groupKeyFromTitle(title: string): string;
/** 读取每个叶子当前的一级分组标题（无分组则为空串） */
export declare function getLeafGroupTitles(keys: string[], layout?: ColumnManagerLayoutNode[]): string[];
/**
 * 按叶子顺序，将相邻且一级标题相同的列合并为分组；空标题表示顶层独立列。
 */
export declare function mergeLayoutByAdjacentGroupTitles(keys: string[], groupTitles: string[]): ColumnManagerLayoutNode[];
export type ColumnEditInput = {
    dataIndex: string;
    /** 一级分组标题；空字符串表示取消分组 */
    groupTitle: string;
    /** 当前列名称（叶子 title） */
    columnTitle?: string;
};
/** 编辑列：更新分组标题（相邻同名自动合并）及可选列名 */
export declare function applyColumnEdit(params: {
    columns: TableColumnData[];
    catalog: ColumnCatalog;
    edit: ColumnEditInput;
}): ColumnManagerResult;
/** 读取编辑列弹窗的初始值 */
export declare function getColumnEditInitialValues(params: {
    columns: TableColumnData[];
    catalog: ColumnCatalog;
    dataIndex: string;
}): {
    groupTitle: string;
    columnTitle: string;
};
