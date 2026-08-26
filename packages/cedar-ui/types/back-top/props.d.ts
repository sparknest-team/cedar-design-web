import type { ExtractPropTypes, PropType } from 'vue';
export declare const backTopProps: {
    visibleHeight: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    targetContainer: PropType<string | HTMLElement>;
    easing: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
};
export type BackTopProps = Partial<ExtractPropTypes<typeof backTopProps>>;
