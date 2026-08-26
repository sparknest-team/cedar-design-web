import { Ref } from 'vue';
import { FormItemContext } from '../form/context';
import { ComponentSize } from '../_utils/constant';
export declare const useFormItem: ({ size, disabled, error, uninject, }?: {
    size?: Ref<ComponentSize | undefined>;
    disabled?: Ref<boolean>;
    error?: Ref<boolean>;
    uninject?: boolean;
}) => {
    formItemCtx: FormItemContext;
    mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl" | undefined>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    mergedError: import("vue").ComputedRef<boolean>;
    feedback: Ref<string | undefined, string | undefined>;
    eventHandlers: Ref<import("..").FormItemEventHandler, import("..").FormItemEventHandler>;
};
