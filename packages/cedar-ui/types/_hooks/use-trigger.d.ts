import type { Ref } from 'vue';
import type { EmitFn2 } from '../_utils/types';
export declare const useTrigger: ({ open, defaultOpen, emit, }: {
    open?: Ref<boolean | undefined>;
    defaultOpen?: Ref<boolean>;
    emit: EmitFn2<{
        "update:open": (visible: boolean) => true;
        openChange: (visible: boolean) => true;
    }>;
}) => {
    computedOpen: import("vue").ComputedRef<boolean>;
    handleOpenChange: (visible: boolean) => void;
};
