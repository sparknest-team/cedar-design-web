import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize, SemanticStatus } from '../_utils/constant';
export declare const progressModes: readonly ["line", "circle"];
export type ProgressMode = (typeof progressModes)[number];
export type ProgressColor = string | Record<string, string>;
export declare const progressProps: {
    mode: {
        type: PropType<ProgressMode>;
        default: string;
        validator: (value: unknown) => value is ProgressMode;
    };
    size: PropType<ComponentSize>;
    percent: {
        type: NumberConstructor;
        default: number;
    };
    steps: {
        type: NumberConstructor;
        default: number;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    width: (StringConstructor | NumberConstructor)[];
    color: PropType<ProgressColor>;
    trackColor: StringConstructor;
    bufferColor: PropType<ProgressColor>;
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: PropType<SemanticStatus>;
        default: string;
        validator: (value: unknown) => value is SemanticStatus;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type ProgressProps = ExtractPropTypes<typeof progressProps>;
