import { Ref } from 'vue';
import { ComponentSize } from '../_utils/constant';
export declare const useSize: (size?: Ref<ComponentSize | undefined>, { defaultValue }?: {
    defaultValue?: ComponentSize;
}) => {
    mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
};
