import { type ButtonGroupProvider } from './provide';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./props").ButtonVariant>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
}>, {
    buttonGroupProvider: ButtonGroupProvider;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./props").ButtonVariant>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    stacked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
}>> & Readonly<{}>, {
    vertical: boolean;
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    color: string;
    variant: import("./props").ButtonVariant;
    elevation: number | boolean;
    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
    textColor: string;
    stacked: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
