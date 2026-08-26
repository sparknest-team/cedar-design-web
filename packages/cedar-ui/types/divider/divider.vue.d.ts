declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sizeX: {
        type: import("vue").PropType<number | string | Array<number | string>>;
    };
    sizeY: {
        type: import("vue").PropType<number | string | Array<number | string>>;
        default: () => string;
    };
    orientation: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: () => string;
    };
    textAlign: {
        type: import("vue").PropType<"start" | "center" | "end">;
        default: string;
    };
    description: StringConstructor;
    type: {
        type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
        default: () => string;
    };
    hairline: BooleanConstructor;
    thickness: NumberConstructor;
    color: StringConstructor;
    opacity: NumberConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sizeX: {
        type: import("vue").PropType<number | string | Array<number | string>>;
    };
    sizeY: {
        type: import("vue").PropType<number | string | Array<number | string>>;
        default: () => string;
    };
    orientation: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: () => string;
    };
    textAlign: {
        type: import("vue").PropType<"start" | "center" | "end">;
        default: string;
    };
    description: StringConstructor;
    type: {
        type: import("vue").PropType<"dashed" | "dotted" | "solid" | "double">;
        default: () => string;
    };
    hairline: BooleanConstructor;
    thickness: NumberConstructor;
    color: StringConstructor;
    opacity: NumberConstructor;
}>> & Readonly<{}>, {
    type: "dashed" | "dotted" | "double" | "solid";
    textAlign: "center" | "end" | "start";
    sizeY: string | number | (string | number)[];
    orientation: "horizontal" | "vertical";
    hairline: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
