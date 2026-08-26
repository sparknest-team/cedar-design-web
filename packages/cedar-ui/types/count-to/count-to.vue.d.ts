declare function reset(): void;
declare var __VLS_1: {
    value: number;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<(v: number) => number>;
    };
}>, {
    start: () => void;
    pause: () => void;
    reset: typeof reset;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    end: () => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<(v: number) => number>;
    };
}>> & Readonly<{
    onEnd?: (() => any) | undefined;
}>, {
    duration: string | number;
    from: string | number;
    to: string | number;
    precision: string | number;
    autoStart: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
