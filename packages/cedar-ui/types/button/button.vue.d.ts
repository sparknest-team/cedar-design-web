declare var __VLS_24: {}, __VLS_26: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_24) => any;
} & {
    default?: (props: typeof __VLS_26) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    variant: {
        type: import("vue").PropType<import("./props").ButtonVariant>;
        validator: (value: unknown) => value is import("./props").ButtonVariant;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    htmlType: {
        type: import("vue").PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    component: {
        type: import("vue").PropType<"button" | "a">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingType: {
        type: import("vue").PropType<"default" | "fill" | "line">;
        default: string;
    };
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
    stacked: {
        type: BooleanConstructor;
        default: undefined;
    };
    onClick: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
    onTouchstart: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    touchstart: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    variant: {
        type: import("vue").PropType<import("./props").ButtonVariant>;
        validator: (value: unknown) => value is import("./props").ButtonVariant;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    htmlType: {
        type: import("vue").PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    component: {
        type: import("vue").PropType<"button" | "a">;
        default: string;
        validator: (value: unknown) => boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingType: {
        type: import("vue").PropType<"default" | "fill" | "line">;
        default: string;
    };
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
    stacked: {
        type: BooleanConstructor;
        default: undefined;
    };
    onClick: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
    onTouchstart: {
        type: import("vue").PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
        default: any;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onTouchstart?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    autofocus: boolean;
    component: "a" | "button";
    disabled: boolean;
    onTouchstart: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
    onClick: ((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[];
    block: boolean;
    elevation: number | boolean;
    loading: boolean;
    htmlType: "reset" | "submit" | "button";
    loadingType: "default" | "fill" | "line";
    autoLoading: boolean;
    iconContainer: boolean;
    ripple: boolean;
    focusable: boolean;
    stacked: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
