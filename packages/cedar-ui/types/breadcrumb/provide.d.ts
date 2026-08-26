import type { ComputedRef, Slots } from 'vue';
import type { BreadcrumbMoreIconSlotData } from './types';
export interface BreadcrumbProvider {
    length: ComputedRef<number>;
    maxCount: ComputedRef<number>;
    separator: ComputedRef<string | number | undefined>;
    needHide: ComputedRef<boolean>;
    moreSlotData: ComputedRef<BreadcrumbMoreIconSlotData>;
    slots: Slots;
}
export declare const BREADCRUMB_BIND_BREADCRUMB_ITEM_KEY: unique symbol;
export declare function useBreadcrumbItems(): {
    length: import("vue").ComputedRef<number>;
    breadcrumbItems: null[];
    bindBreadcrumbItems: (parentProvider: BreadcrumbProvider) => void;
};
export declare function useBreadcrumb(): {
    index: import("vue").ComputedRef<number> | null;
    breadcrumb: Omit<BreadcrumbProvider & import("@cedarjs/use").UseChildrenBaseProvider<null>, "clear" | "childInstances" | "collect"> | null;
    bindBreadcrumb: ((childProvider: null) => void) | null;
};
