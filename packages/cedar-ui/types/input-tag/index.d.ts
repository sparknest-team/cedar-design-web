import _InputTag from './input-tag';
import { inputTagProps } from './props';
declare const InputTag: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        baseCls: StringConstructor;
        modelValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
        };
        defaultValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
            default: () => never[];
        };
        inputValue: StringConstructor;
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        placeholder: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
            validator: (value: string) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        retainInputValue: {
            type: import("vue").PropType<boolean | {
                create?: boolean;
                blur?: boolean;
            }>;
            default: boolean;
        };
        formatTag: {
            type: import("vue").PropType<(data: import("./types").TagData) => string>;
        };
        uniqueValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").InputTagFieldNames>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        focused: BooleanConstructor;
        disabledInput: BooleanConstructor;
        uninjectFormItemContext: BooleanConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: (string | number | import("./types").TagData)[], ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | import("./types").TagData)[]) => any) | undefined;
        onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
        onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: (string | number | import("./types").TagData)[]) => true;
        'update:inputValue': (inputValue: string) => true;
        change: (value: (string | number | import("./types").TagData)[], ev: Event) => true;
        inputValueChange: (inputValue: string, ev: Event) => true;
        pressEnter: (inputValue: string, ev: KeyboardEvent) => true;
        remove: (removed: string | number, ev: Event) => true;
        clear: (ev: MouseEvent) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        variant: "filled" | "outlined" | "standard";
        defaultValue: (string | number | import("./types").TagData)[];
        clearable: boolean;
        focused: boolean;
        retainInputValue: boolean | {
            create?: boolean;
            blur?: boolean;
        };
        uninjectFormItemContext: boolean;
        defaultInputValue: string;
        maxTagCount: number;
        uniqueValue: boolean;
        tagNowrap: boolean;
        disabledInput: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        baseCls: StringConstructor;
        modelValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
        };
        defaultValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
            default: () => never[];
        };
        inputValue: StringConstructor;
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        placeholder: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
            validator: (value: string) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        retainInputValue: {
            type: import("vue").PropType<boolean | {
                create?: boolean;
                blur?: boolean;
            }>;
            default: boolean;
        };
        formatTag: {
            type: import("vue").PropType<(data: import("./types").TagData) => string>;
        };
        uniqueValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").InputTagFieldNames>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        focused: BooleanConstructor;
        disabledInput: BooleanConstructor;
        uninjectFormItemContext: BooleanConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: (string | number | import("./types").TagData)[], ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | import("./types").TagData)[]) => any) | undefined;
        onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
        onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        variant: "filled" | "outlined" | "standard";
        defaultValue: (string | number | import("./types").TagData)[];
        clearable: boolean;
        focused: boolean;
        retainInputValue: boolean | {
            create?: boolean;
            blur?: boolean;
        };
        uninjectFormItemContext: boolean;
        defaultInputValue: string;
        maxTagCount: number;
        uniqueValue: boolean;
        tagNowrap: boolean;
        disabledInput: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    baseCls: StringConstructor;
    modelValue: {
        type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
    };
    defaultValue: {
        type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
        default: () => never[];
    };
    inputValue: StringConstructor;
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
        default: string;
        validator: (value: string) => boolean;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    retainInputValue: {
        type: import("vue").PropType<boolean | {
            create?: boolean;
            blur?: boolean;
        }>;
        default: boolean;
    };
    formatTag: {
        type: import("vue").PropType<(data: import("./types").TagData) => string>;
    };
    uniqueValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    fieldNames: {
        type: import("vue").PropType<import("./types").InputTagFieldNames>;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    focused: BooleanConstructor;
    disabledInput: BooleanConstructor;
    uninjectFormItemContext: BooleanConstructor;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: (string | number | import("./types").TagData)[], ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | import("./types").TagData)[]) => any) | undefined;
    onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
    onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: (string | number | import("./types").TagData)[]) => true;
    'update:inputValue': (inputValue: string) => true;
    change: (value: (string | number | import("./types").TagData)[], ev: Event) => true;
    inputValueChange: (inputValue: string, ev: Event) => true;
    pressEnter: (inputValue: string, ev: KeyboardEvent) => true;
    remove: (removed: string | number, ev: Event) => true;
    clear: (ev: MouseEvent) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    disabled: boolean;
    variant: "filled" | "outlined" | "standard";
    defaultValue: (string | number | import("./types").TagData)[];
    clearable: boolean;
    focused: boolean;
    retainInputValue: boolean | {
        create?: boolean;
        blur?: boolean;
    };
    uninjectFormItemContext: boolean;
    defaultInputValue: string;
    maxTagCount: number;
    uniqueValue: boolean;
    tagNowrap: boolean;
    disabledInput: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type InputTagInstance = InstanceType<typeof _InputTag>;
export type { InputTagProps } from './props';
export type { TagData, InputTagFieldNames } from './types';
export { InputTag, inputTagProps };
export declare const _InputTagComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        baseCls: StringConstructor;
        modelValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
        };
        defaultValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
            default: () => never[];
        };
        inputValue: StringConstructor;
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        placeholder: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
            validator: (value: string) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        retainInputValue: {
            type: import("vue").PropType<boolean | {
                create?: boolean;
                blur?: boolean;
            }>;
            default: boolean;
        };
        formatTag: {
            type: import("vue").PropType<(data: import("./types").TagData) => string>;
        };
        uniqueValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").InputTagFieldNames>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        focused: BooleanConstructor;
        disabledInput: BooleanConstructor;
        uninjectFormItemContext: BooleanConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: (string | number | import("./types").TagData)[], ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | import("./types").TagData)[]) => any) | undefined;
        onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
        onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: (string | number | import("./types").TagData)[]) => true;
        'update:inputValue': (inputValue: string) => true;
        change: (value: (string | number | import("./types").TagData)[], ev: Event) => true;
        inputValueChange: (inputValue: string, ev: Event) => true;
        pressEnter: (inputValue: string, ev: KeyboardEvent) => true;
        remove: (removed: string | number, ev: Event) => true;
        clear: (ev: MouseEvent) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        variant: "filled" | "outlined" | "standard";
        defaultValue: (string | number | import("./types").TagData)[];
        clearable: boolean;
        focused: boolean;
        retainInputValue: boolean | {
            create?: boolean;
            blur?: boolean;
        };
        uninjectFormItemContext: boolean;
        defaultInputValue: string;
        maxTagCount: number;
        uniqueValue: boolean;
        tagNowrap: boolean;
        disabledInput: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        baseCls: StringConstructor;
        modelValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
        };
        defaultValue: {
            type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
            default: () => never[];
        };
        inputValue: StringConstructor;
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        placeholder: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
            validator: (value: string) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        retainInputValue: {
            type: import("vue").PropType<boolean | {
                create?: boolean;
                blur?: boolean;
            }>;
            default: boolean;
        };
        formatTag: {
            type: import("vue").PropType<(data: import("./types").TagData) => string>;
        };
        uniqueValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").InputTagFieldNames>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        focused: BooleanConstructor;
        disabledInput: BooleanConstructor;
        uninjectFormItemContext: BooleanConstructor;
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: (string | number | import("./types").TagData)[], ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (string | number | import("./types").TagData)[]) => any) | undefined;
        onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
        onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        error: boolean;
        readonly: boolean;
        disabled: boolean;
        variant: "filled" | "outlined" | "standard";
        defaultValue: (string | number | import("./types").TagData)[];
        clearable: boolean;
        focused: boolean;
        retainInputValue: boolean | {
            create?: boolean;
            blur?: boolean;
        };
        uninjectFormItemContext: boolean;
        defaultInputValue: string;
        maxTagCount: number;
        uniqueValue: boolean;
        tagNowrap: boolean;
        disabledInput: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    baseCls: StringConstructor;
    modelValue: {
        type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
    };
    defaultValue: {
        type: import("vue").PropType<(string | number | import("./types").TagData)[]>;
        default: () => never[];
    };
    inputValue: StringConstructor;
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
        default: string;
        validator: (value: string) => boolean;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    retainInputValue: {
        type: import("vue").PropType<boolean | {
            create?: boolean;
            blur?: boolean;
        }>;
        default: boolean;
    };
    formatTag: {
        type: import("vue").PropType<(data: import("./types").TagData) => string>;
    };
    uniqueValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    fieldNames: {
        type: import("vue").PropType<import("./types").InputTagFieldNames>;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    focused: BooleanConstructor;
    disabledInput: BooleanConstructor;
    uninjectFormItemContext: BooleanConstructor;
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: ((ev: MouseEvent) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: (string | number | import("./types").TagData)[], ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | number | import("./types").TagData)[]) => any) | undefined;
    onPressEnter?: ((inputValue: string, ev: KeyboardEvent) => any) | undefined;
    onRemove?: ((removed: string | number, ev: Event) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string, ev: Event) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: (string | number | import("./types").TagData)[]) => true;
    'update:inputValue': (inputValue: string) => true;
    change: (value: (string | number | import("./types").TagData)[], ev: Event) => true;
    inputValueChange: (inputValue: string, ev: Event) => true;
    pressEnter: (inputValue: string, ev: KeyboardEvent) => true;
    remove: (removed: string | number, ev: Event) => true;
    clear: (ev: MouseEvent) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    error: boolean;
    readonly: boolean;
    disabled: boolean;
    variant: "filled" | "outlined" | "standard";
    defaultValue: (string | number | import("./types").TagData)[];
    clearable: boolean;
    focused: boolean;
    retainInputValue: boolean | {
        create?: boolean;
        blur?: boolean;
    };
    uninjectFormItemContext: boolean;
    defaultInputValue: string;
    maxTagCount: number;
    uniqueValue: boolean;
    tagNowrap: boolean;
    disabledInput: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default InputTag;
