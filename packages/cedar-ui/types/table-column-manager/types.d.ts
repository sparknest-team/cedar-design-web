import type { VNode } from 'vue';
import type { TableColumnData } from '../table/types';
export declare const COLUMN_MANAGER_STATE_VERSION = 2;
export type ColumnManagerMeta = {
    /** 必选列不能隐藏或删除。 */
    required?: boolean;
};
/** 弹窗候选列定义，不承担 Table 渲染配置。 */
export type ColumnDefinition = {
    dataIndex: string;
    title: string;
    tip?: string | (() => VNode | string);
    disabled?: boolean;
    /** 通常由 defaultColumns 的 manager.required 自动合并。 */
    required?: boolean;
};
export type ColumnDefinitionGroup = {
    key: string;
    title: string;
    children: ColumnDefinition[];
};
export type ColumnDefinitions = (ColumnDefinitionGroup | ColumnDefinition)[];
/** 带列管理规则的默认 Table 列。 */
export type ManagedTableColumn = Omit<TableColumnData, 'children'> & {
    manager?: ColumnManagerMeta;
    children?: ManagedTableColumn[];
};
export type ColumnDefinitionSearchParams = {
    keyword: string;
    cursor?: string;
};
export type ColumnDefinitionSearchResult = {
    items: ColumnDefinitions;
    nextCursor?: string;
    total?: number;
};
export type ColumnDefinitionSource = {
    search: (params: ColumnDefinitionSearchParams) => Promise<ColumnDefinitionSearchResult>;
    resolve: (dataIndexes: string[]) => Promise<ColumnDefinition[]>;
};
/** @deprecated 请使用 ColumnDefinitions。 */
export type ColumnCatalog = ColumnDefinitions;
/** @deprecated 请使用 ColumnDefinitionGroup。 */
export type ColumnCatalogGroup = ColumnDefinitionGroup;
/** @deprecated 请使用 ColumnDefinition。 */
export type ColumnCatalogItem = ColumnDefinition;
/**
 * 顶层列布局节点（持久化分组结构 + 组名）。
 * - leaf：独立顶层列
 * - group：分组表头及其子叶子 dataIndex 顺序
 */
export type ColumnManagerLayoutNode = {
    type: 'leaf';
    dataIndex: string;
} | {
    type: 'group';
    key: string;
    title: string;
    children: string[];
};
/** 已选列的完整状态。数组顺序即表格叶子列顺序。 */
export type ColumnManagerItem = {
    dataIndex: string;
    /** 自定义列标题；未设置时使用 catalog 或原列标题。 */
    title?: string;
    fixed?: 'left' | 'right';
    /** 用户拖拽后的列宽覆盖；未设置时使用 catalog 默认宽度。 */
    width?: number;
};
/**
 * 列管理记忆状态（可整体存服务端）。
 * items 为必选；顺序、标题和冻结状态统一存储在每个条目中。
 */
export type ColumnManagerState = {
    /** 持久化结构版本。 */
    version: typeof COLUMN_MANAGER_STATE_VERSION;
    /** 叶子列显隐、顺序、标题与冻结状态。 */
    items: ColumnManagerItem[];
    /**
     * 顶层布局快照（含分组与组名）。
     * 有值时优先按此恢复；重建时也会参考其分组归属与组标题。
     */
    layout?: ColumnManagerLayoutNode[];
};
/** 初始/重置状态；无需携带持久化版本号。 */
export type ColumnManagerDefaultState = Omit<ColumnManagerState, 'version'>;
export type ColumnManagerResult = ColumnManagerState & {
    columns: TableColumnData[];
};
export type ColumnManagerInsertAt = {
    dataIndex: string;
    side: 'left' | 'right';
};
