import { type Ref, type ComputedRef, type MaybeRefOrGetter, type PropType, type InjectionKey, type ShallowRef } from 'vue';
import type { TableColumnData } from '../table/types';
import type { ColumnDefinition, ColumnDefinitionSource, ColumnDefinitions, ColumnManagerResult, ColumnManagerState, ManagedTableColumn } from './types';
import type { ColumnEditInput } from './utils';
import type { TableColumnManagerProps } from './props';
/** 表头操作 key */
export type HeaderActionKey = 'insert-left' | 'insert-right' | 'freeze-left' | 'freeze-right' | 'unfreeze' | 'edit' | 'delete';
export interface TableColumnManagerContext {
    /** 当前启用的表头操作 key 集合 */
    headerActions: HeaderActionKey[];
    /** 打开插入列弹窗 */
    openInsert: (dataIndex: string, side: 'left' | 'right') => void;
    /** 打开编辑列弹窗 */
    openEdit: (dataIndex: string) => void;
    /** 冻结/取消冻结列 */
    freezeColumn: (dataIndex: string, fixed?: 'left' | 'right') => void;
    /** 删除列 */
    removeColumn: (dataIndex: string) => void;
    insertVisible: Ref<boolean>;
    insertSide: Ref<'left' | 'right'>;
    insertableItems: Ref<{
        dataIndex: string;
        title: string;
    }[]>;
    insertSelected: Ref<string[]>;
    handleInsertOk: () => void;
    editVisible: Ref<boolean>;
    editGroupTitle: Ref<string>;
    editColumnTitle: Ref<string>;
    handleEditOk: () => void;
}
export declare const TableColumnManagerContextKey: InjectionKey<TableColumnManagerContext>;
export interface UseTableColumnManagerOptions {
    /** Table 初次展示和重置使用的完整列。 */
    defaultColumns: MaybeRefOrGetter<ManagedTableColumn[]>;
    /** 本地弹窗候选列，与 columnSource 二选一；可以只包含 dataIndex/title。 */
    columnDefinitions?: MaybeRefOrGetter<ColumnDefinitions | undefined>;
    /** 远程搜索与恢复反显数据源。 */
    columnSource?: ColumnDefinitionSource;
    /** 新添加普通列的默认 Table 属性。 */
    columnDefaults?: Partial<TableColumnData>;
    /** 将轻量候选定义转换成特殊 Table 列。 */
    createColumn?: (definition: ColumnDefinition) => TableColumnData;
    /**
     * 表头下拉菜单操作项。
     * 默认 `['insert-left', 'insert-right', 'freeze-left', 'freeze-right', 'unfreeze', 'edit', 'delete']`
     */
    headerActions?: HeaderActionKey[];
}
export interface EditColumnState {
    dataIndex: string;
    groupTitle: string;
    columnTitle: string;
}
export interface InsertColumnContext {
    dataIndex: string;
    side: 'left' | 'right';
}
export interface UseTableColumnManagerReturn {
    /** 表格列（直接 v-model:columns 绑定到 c-table） */
    columns: Ref<TableColumnData[]>;
    /** 列管理弹层可见性 */
    managerVisible: Ref<boolean>;
    /** 列管理器 ref（传给 c-table-column-manager） */
    managerRef: ShallowRef<TableColumnManagerExposed | undefined>;
    /** v-bind 到 c-table-column-manager 的 props */
    managerProps: ComputedRef<TableColumnManagerBindings>;
    /** 可直接持久化的规范化状态。 */
    state: ComputedRef<ColumnManagerState>;
    /** 当前叶子列简要信息 */
    leafColumns: Ref<{
        dataIndex: string;
        title: string;
        width?: number;
        fixed?: 'left' | 'right';
    }[]>;
    /** 打开列管理面板（自动同步 columns -> manager） */
    open: () => void;
    /** 关闭面板（不保存） */
    close: () => void;
    /** 确认并应用列变更 */
    confirm: (result?: ColumnManagerResult) => void;
    /** 插入列 */
    insertColumns: (ctx: InsertColumnContext & {
        insertKeys: string[];
    }) => void;
    /** 获取插入时可选的列（不在当前 columns 中的 catalog 项） */
    getInsertableItems: () => {
        dataIndex: string;
        title: string;
    }[];
    /** 获取编辑列初始值 */
    getEditInitialValues: (dataIndex: string) => EditColumnState;
    /** 应用编辑列 */
    applyEdit: (edit: ColumnEditInput) => void;
    /** 冻结/取消冻结列 */
    freezeColumn: (dataIndex: string, fixed?: 'left' | 'right') => void;
    /** 删除列 */
    removeColumn: (dataIndex: string) => void;
    /** 重置为默认列 */
    resetToDefault: () => void;
    /** 恢复外部持久化状态；会自动校验版本、补齐必选列并清洗无效数据。 */
    restore: (state: unknown) => Promise<void>;
    /** 列宽变更处理（直接传给 Table @column-resize） */
    handleColumnResize: (dataIndex: string, width: number) => void;
    /** 当前启用的表头操作 key 集合（由 options.headerActions 控制） */
    headerActions: HeaderActionKey[];
    /**
     * 获取表头下拉菜单的预绑定 props，配合 `HeaderAction` 组件使用：
     * ```html
     * <template #header-cell-actions="{ column, dataIndex }">
     *   <HeaderAction :data-index="dataIndex" :column="column" v-bind="columnActions(dataIndex)" />
     * </template>
     * ```
     */
    columnActions: (dataIndex: string) => TableColumnHeaderActionBindings;
    /** 表头操作按钮组件（内联定义，可直接在模板中使用） */
    HeaderAction: typeof TableColumnHeaderAction;
    /** 打开插入列弹窗 */
    openInsert: (dataIndex: string, side: 'left' | 'right') => void;
    /** 打开编辑列弹窗 */
    openEdit: (dataIndex: string) => void;
    insertVisible: Ref<boolean>;
    insertSide: Ref<'left' | 'right'>;
    insertableItems: Ref<{
        dataIndex: string;
        title: string;
    }[]>;
    insertSelected: Ref<string[]>;
    handleInsertOk: () => void;
    editVisible: Ref<boolean>;
    editGroupTitle: Ref<string>;
    editColumnTitle: Ref<string>;
    handleEditOk: () => void;
}
export interface TableColumnManagerExposed {
    getResult: () => ColumnManagerResult;
    loadCatalog: () => Promise<void>;
    resetInitialKeys: () => void;
}
export type TableColumnManagerBindings = TableColumnManagerProps & {
    'onUpdate:modelValue': (value: ColumnManagerState['items']) => void;
    'onUpdate:open': (value: boolean) => void;
    onConfirm: (result: ColumnManagerResult) => void;
};
export interface TableColumnHeaderActionBindings {
    actions: HeaderActionKey[];
    onInsert: (side: 'left' | 'right') => void;
    onFreeze: (fixed: 'left' | 'right') => void;
    onUnfreeze: () => void;
    onEdit: () => void;
    onDelete: () => void;
}
declare const TableColumnHeaderAction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    dataIndex: StringConstructor;
    column: PropType<TableColumnData>;
    /** 要展示的表头操作 key，不传则使用 useTableColumnManager 全局配置 */
    actions: {
        type: PropType<HeaderActionKey[]>;
        default: undefined;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    dataIndex: StringConstructor;
    column: PropType<TableColumnData>;
    /** 要展示的表头操作 key，不传则使用 useTableColumnManager 全局配置 */
    actions: {
        type: PropType<HeaderActionKey[]>;
        default: undefined;
    };
}>> & Readonly<{}>, {
    actions: HeaderActionKey[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare function useTableColumnManager(options: UseTableColumnManagerOptions): UseTableColumnManagerReturn;
export {};
