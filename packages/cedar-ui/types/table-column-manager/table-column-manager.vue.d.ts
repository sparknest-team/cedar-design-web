import type { TableColumnManagerDrawerProps } from './props';
import type { ColumnCatalog, ColumnManagerItem, ColumnManagerResult } from './types';
declare var __VLS_14: any;
type __VLS_Slots = {} & {
    tooltip?: (props: typeof __VLS_14) => any;
};
declare const __VLS_component: import("vue").DefineComponent<TableColumnManagerDrawerProps, {
    getResult: () => ColumnManagerResult;
    loadCatalog: () => Promise<void>;
    resetInitialKeys: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: ColumnManagerItem[]) => any;
    "update:modelValue": (value: ColumnManagerItem[]) => any;
    "update:open": (value: boolean) => any;
    confirm: (result: ColumnManagerResult) => any;
}, string, import("vue").PublicProps, Readonly<TableColumnManagerDrawerProps> & Readonly<{
    onChange?: ((value: ColumnManagerItem[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: ColumnManagerItem[]) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onConfirm?: ((result: ColumnManagerResult) => any) | undefined;
}>, {
    inline: boolean;
    columns: import("..").TableColumnData[];
    options: ColumnCatalog;
    drawerTitle: string;
    drawerWidth: number | string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
