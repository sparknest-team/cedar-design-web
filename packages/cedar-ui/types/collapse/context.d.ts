import type { ComputedRef, InjectionKey, Slots } from 'vue';
export interface CollapseItemContext {
    name: string | number;
    disabled: ComputedRef<boolean>;
}
export interface CollapseContext {
    activeNames: (string | number)[];
    slots: Slots;
    showExpandIcon?: boolean;
    expandIconPosition: string;
    destroyOnHide: boolean;
    divider: boolean;
    offset: boolean;
    handleClick: (name: string | number, e: Event) => void;
    addItem: (item: CollapseItemContext) => void;
    removeItem: (name: string | number) => void;
}
export declare const collapseKey: InjectionKey<CollapseContext>;
