declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: StringConstructor;
    type: StringConstructor;
    size: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    rotate: NumberConstructor;
    spin: BooleanConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: StringConstructor;
    type: StringConstructor;
    size: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    rotate: NumberConstructor;
    spin: BooleanConstructor;
}>> & Readonly<{}>, {
    spin: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
