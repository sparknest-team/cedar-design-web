import _PeopleSelect from './people-select';
import { peopleSelectProps } from './props';
declare const PeopleSelect: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        fetch: import("vue").PropType<{
            get: any;
            post: any;
        }>;
        name: {
            type: StringConstructor;
        };
        defaultText: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        isLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
        };
        urlType: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "change" | "update:modelValue")[], import("vue").PublicProps, {
        label: string;
        modelValue: string;
        clearable: boolean;
        defaultText: string;
        isLabel: boolean;
        urlType: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        fetch: import("vue").PropType<{
            get: any;
            post: any;
        }>;
        name: {
            type: StringConstructor;
        };
        defaultText: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        isLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
        };
        urlType: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        label: string;
        modelValue: string;
        clearable: boolean;
        defaultText: string;
        isLabel: boolean;
        urlType: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    fetch: import("vue").PropType<{
        get: any;
        post: any;
    }>;
    name: {
        type: StringConstructor;
    };
    defaultText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    isLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
    };
    urlType: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "change" | "update:modelValue")[], "clear" | "change" | "update:modelValue", {
    label: string;
    modelValue: string;
    clearable: boolean;
    defaultText: string;
    isLabel: boolean;
    urlType: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type PeopleSelectInstance = InstanceType<typeof _PeopleSelect>;
export type { PeopleSelectProps } from './props';
export { peopleSelectProps };
export { PeopleSelect };
export declare const _PeopleSelectComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        fetch: import("vue").PropType<{
            get: any;
            post: any;
        }>;
        name: {
            type: StringConstructor;
        };
        defaultText: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        isLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
        };
        urlType: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "change" | "update:modelValue")[], import("vue").PublicProps, {
        label: string;
        modelValue: string;
        clearable: boolean;
        defaultText: string;
        isLabel: boolean;
        urlType: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        fetch: import("vue").PropType<{
            get: any;
            post: any;
        }>;
        name: {
            type: StringConstructor;
        };
        defaultText: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: StringConstructor;
            default: string;
        };
        isLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
        };
        urlType: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        label: string;
        modelValue: string;
        clearable: boolean;
        defaultText: string;
        isLabel: boolean;
        urlType: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    fetch: import("vue").PropType<{
        get: any;
        post: any;
    }>;
    name: {
        type: StringConstructor;
    };
    defaultText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    isLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
    };
    urlType: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "change" | "update:modelValue")[], "clear" | "change" | "update:modelValue", {
    label: string;
    modelValue: string;
    clearable: boolean;
    defaultText: string;
    isLabel: boolean;
    urlType: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default PeopleSelect;
