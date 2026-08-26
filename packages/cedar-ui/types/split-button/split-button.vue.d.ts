declare var __VLS_14: {}, __VLS_28: {
    open: boolean;
}, __VLS_34: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
} & {
    icon?: (props: typeof __VLS_28) => any;
} & {
    content?: (props: typeof __VLS_34) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonProps: import("vue").PropType<Partial<import("..").ButtonProps>>;
    triggerButtonProps: import("vue").PropType<Partial<import("..").ButtonProps>>;
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("../button").ButtonVariant>;
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
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
        default: string;
    };
    placement: {
        type: import("vue").PropType<import("..").MenuPosition>;
        default: string;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    popupMaxHeight: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    select: (...args: any[]) => void;
    "update:open": (...args: any[]) => void;
    openChange: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonProps: import("vue").PropType<Partial<import("..").ButtonProps>>;
    triggerButtonProps: import("vue").PropType<Partial<import("..").ButtonProps>>;
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
    };
    variant: {
        type: import("vue").PropType<import("../button").ButtonVariant>;
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
    elevation: {
        type: import("vue").PropType<boolean | number>;
        default: boolean;
    };
    autoLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
        default: string;
    };
    placement: {
        type: import("vue").PropType<import("..").MenuPosition>;
        default: string;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    popupMaxHeight: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:open"?: ((...args: any[]) => any) | undefined;
    onOpenChange?: ((...args: any[]) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    color: string;
    open: boolean;
    variant: import("../button").ButtonVariant;
    elevation: number | boolean;
    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
    defaultOpen: boolean;
    placement: import("..").MenuPosition;
    textColor: string;
    popupMaxHeight: number | boolean;
    hideOnSelect: boolean;
    autoLoading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
