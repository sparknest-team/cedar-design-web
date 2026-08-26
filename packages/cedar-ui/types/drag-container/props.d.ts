import type { ExtractPropTypes } from 'vue';
export interface DragOptions {
    handle?: string;
    animation?: number;
    filter?: string;
    draggable?: string;
}
export declare const dragContainerProps: {
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    dragOptions: {
        type: () => DragOptions;
        default: () => {};
    };
};
export type DragContainerProps = ExtractPropTypes<typeof dragContainerProps>;
