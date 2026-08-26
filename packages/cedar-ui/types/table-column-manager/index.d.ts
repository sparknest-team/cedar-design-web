import _TableColumnManager from './table-column-manager.vue';
declare const TableColumnManager: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./props").TableColumnManagerDrawerProps> & Readonly<{
        onChange?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
        onConfirm?: ((result: import("./types").ColumnManagerResult) => any) | undefined;
    }>, {
        getResult: () => import("./types").ColumnManagerResult;
        loadCatalog: () => Promise<void>;
        resetInitialKeys: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        change: (value: import("./types").ColumnManagerItem[]) => any;
        "update:modelValue": (value: import("./types").ColumnManagerItem[]) => any;
        "update:open": (value: boolean) => any;
        confirm: (result: import("./types").ColumnManagerResult) => any;
    }, import("vue").PublicProps, {
        inline: boolean;
        columns: import("..").TableColumnData[];
        options: import("./types").ColumnCatalog;
        drawerTitle: string;
        drawerWidth: number | string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./props").TableColumnManagerDrawerProps> & Readonly<{
        onChange?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
        onConfirm?: ((result: import("./types").ColumnManagerResult) => any) | undefined;
    }>, {
        getResult: () => import("./types").ColumnManagerResult;
        loadCatalog: () => Promise<void>;
        resetInitialKeys: () => void;
    }, {}, {}, {}, {
        inline: boolean;
        columns: import("..").TableColumnData[];
        options: import("./types").ColumnCatalog;
        drawerTitle: string;
        drawerWidth: number | string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./props").TableColumnManagerDrawerProps> & Readonly<{
    onChange?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onConfirm?: ((result: import("./types").ColumnManagerResult) => any) | undefined;
}>, {
    getResult: () => import("./types").ColumnManagerResult;
    loadCatalog: () => Promise<void>;
    resetInitialKeys: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: import("./types").ColumnManagerItem[]) => any;
    "update:modelValue": (value: import("./types").ColumnManagerItem[]) => any;
    "update:open": (value: boolean) => any;
    confirm: (result: import("./types").ColumnManagerResult) => any;
}, string, {
    inline: boolean;
    columns: import("..").TableColumnData[];
    options: import("./types").ColumnCatalog;
    drawerTitle: string;
    drawerWidth: number | string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        tooltip?: (props: any) => any;
    };
})>;
export type TableColumnManagerInstance = InstanceType<typeof _TableColumnManager>;
export type { TableColumnManagerProps, TableColumnManagerDrawerProps } from './props';
export type { ColumnCatalog, ColumnCatalogGroup, ColumnCatalogItem, ColumnDefinition, ColumnDefinitionGroup, ColumnDefinitions, ColumnDefinitionSearchParams, ColumnDefinitionSearchResult, ColumnDefinitionSource, ManagedTableColumn, ColumnManagerMeta, ColumnManagerInsertAt, ColumnManagerDefaultState, ColumnManagerItem, ColumnManagerLayoutNode, ColumnManagerResult, ColumnManagerState, } from './types';
export { COLUMN_MANAGER_STATE_VERSION } from './types';
export type { ColumnEditInput } from './utils';
export { applyInsertAt, applyInsertToLayout, applyColumnEdit, applyColumnFixed, buildColumnsFromState, buildColumnsResult, findLeafColumn, flattenCatalog, flattenTableColumns, getColumnEditInitialValues, getLeafGroupTitles, groupKeyFromTitle, layoutFromColumns, mapLeafColumns, mergeLayoutByAdjacentGroupTitles, normalizeColumnManagerState, stateFromCatalog, stateFromColumns, } from './utils';
export { useTableColumnManager } from './use-table-column-manager';
export type { UseTableColumnManagerOptions, UseTableColumnManagerReturn, EditColumnState, InsertColumnContext, HeaderActionKey, TableColumnManagerBindings, TableColumnManagerExposed, TableColumnHeaderActionBindings, } from './use-table-column-manager';
export { TableColumnManager };
export declare const _TableColumnManagerComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./props").TableColumnManagerDrawerProps> & Readonly<{
        onChange?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
        onConfirm?: ((result: import("./types").ColumnManagerResult) => any) | undefined;
    }>, {
        getResult: () => import("./types").ColumnManagerResult;
        loadCatalog: () => Promise<void>;
        resetInitialKeys: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
        change: (value: import("./types").ColumnManagerItem[]) => any;
        "update:modelValue": (value: import("./types").ColumnManagerItem[]) => any;
        "update:open": (value: boolean) => any;
        confirm: (result: import("./types").ColumnManagerResult) => any;
    }, import("vue").PublicProps, {
        inline: boolean;
        columns: import("..").TableColumnData[];
        options: import("./types").ColumnCatalog;
        drawerTitle: string;
        drawerWidth: number | string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./props").TableColumnManagerDrawerProps> & Readonly<{
        onChange?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
        onConfirm?: ((result: import("./types").ColumnManagerResult) => any) | undefined;
    }>, {
        getResult: () => import("./types").ColumnManagerResult;
        loadCatalog: () => Promise<void>;
        resetInitialKeys: () => void;
    }, {}, {}, {}, {
        inline: boolean;
        columns: import("..").TableColumnData[];
        options: import("./types").ColumnCatalog;
        drawerTitle: string;
        drawerWidth: number | string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./props").TableColumnManagerDrawerProps> & Readonly<{
    onChange?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./types").ColumnManagerItem[]) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onConfirm?: ((result: import("./types").ColumnManagerResult) => any) | undefined;
}>, {
    getResult: () => import("./types").ColumnManagerResult;
    loadCatalog: () => Promise<void>;
    resetInitialKeys: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: import("./types").ColumnManagerItem[]) => any;
    "update:modelValue": (value: import("./types").ColumnManagerItem[]) => any;
    "update:open": (value: boolean) => any;
    confirm: (result: import("./types").ColumnManagerResult) => any;
}, string, {
    inline: boolean;
    columns: import("..").TableColumnData[];
    options: import("./types").ColumnCatalog;
    drawerTitle: string;
    drawerWidth: number | string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        tooltip?: (props: any) => any;
    };
})>;
export default TableColumnManager;
