import _SplitButton from './split-button.vue';
import { splitButtonProps } from './props';
declare const SplitButton: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
        select: (...args: any[]) => void;
        "update:open": (...args: any[]) => void;
        openChange: (...args: any[]) => void;
    }, import("vue").PublicProps, {
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    select: (...args: any[]) => void;
    "update:open": (...args: any[]) => void;
    openChange: (...args: any[]) => void;
}, string, {
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        icon?: (props: {
            open: boolean;
        }) => any;
    } & {
        content?: (props: {}) => any;
    };
})>;
export type SplitButtonInstance = InstanceType<typeof _SplitButton>;
export type { SplitButtonProps } from './props';
export { splitButtonProps, SplitButton };
export declare const _SplitButtonComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
        select: (...args: any[]) => void;
        "update:open": (...args: any[]) => void;
        openChange: (...args: any[]) => void;
    }, import("vue").PublicProps, {
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    select: (...args: any[]) => void;
    "update:open": (...args: any[]) => void;
    openChange: (...args: any[]) => void;
}, string, {
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        icon?: (props: {
            open: boolean;
        }) => any;
    } & {
        content?: (props: {}) => any;
    };
})>;
export default SplitButton;
