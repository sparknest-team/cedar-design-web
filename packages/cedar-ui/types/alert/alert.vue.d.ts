declare var __VLS_9: {}, __VLS_27: {}, __VLS_29: {}, __VLS_31: {}, __VLS_33: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_9) => any;
} & {
    title?: (props: typeof __VLS_27) => any;
} & {
    default?: (props: typeof __VLS_29) => any;
} & {
    action?: (props: typeof __VLS_31) => any;
} & {
    'close-icon'?: (props: typeof __VLS_33) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./props").AlertType>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./props").AlertVariant>;
        default: string;
    };
    title: StringConstructor;
    message: StringConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    banner: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    elevation: {
        type: import("vue").PropType<boolean | string | number>;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    close: (value: MouseEvent) => any;
    "after-close": () => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./props").AlertType>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("./props").AlertVariant>;
        default: string;
    };
    title: StringConstructor;
    message: StringConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    banner: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    elevation: {
        type: import("vue").PropType<boolean | string | number>;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((value: MouseEvent) => any) | undefined;
    "onAfter-close"?: (() => any) | undefined;
}>, {
    closable: boolean;
    center: boolean;
    type: import("./props").AlertType;
    variant: import("./props").AlertVariant;
    showIcon: boolean;
    banner: boolean;
    elevation: string | number | boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
