import type { ExtractPropTypes, PropType } from 'vue';
export declare const countToProps: {
    from: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    to: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    duration: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    precision: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    timingFunction: {
        type: PropType<(v: number) => number>;
    };
};
export type CountToProps = ExtractPropTypes<typeof countToProps>;
