import _Search from './search';
declare const Search: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        searchButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        buttonText: {
            type: StringConstructor;
        };
        buttonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        recentSearches: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        fields: {
            type: import("vue").PropType<import("..").SelectOptionData[]>;
            default: () => never[];
        };
        selectStyle: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        defaultField: {
            type: StringConstructor;
        };
        modelField: {
            type: StringConstructor;
        };
        model: {
            type: import("vue").PropType<Record<string, any>>;
        };
        maxSearchHistoryCount: {
            type: NumberConstructor;
            default: number;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSearch?: ((data: import("./result").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
        onChange?: ((value: string, ev?: Event | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onUpdate:modelField"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        search: (data: import("./result").SearchResult, ev: MouseEvent | KeyboardEvent | Event) => true;
        change: (value: string, ev?: Event) => true;
        'update:modelValue': (value: string) => true;
        'update:modelField': (value: string) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        clearable: boolean;
        loading: boolean;
        fields: import("..").SelectOptionData[];
        searchButton: boolean;
        recentSearches: string[];
        maxSearchHistoryCount: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        searchButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        buttonText: {
            type: StringConstructor;
        };
        buttonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        recentSearches: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        fields: {
            type: import("vue").PropType<import("..").SelectOptionData[]>;
            default: () => never[];
        };
        selectStyle: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        defaultField: {
            type: StringConstructor;
        };
        modelField: {
            type: StringConstructor;
        };
        model: {
            type: import("vue").PropType<Record<string, any>>;
        };
        maxSearchHistoryCount: {
            type: NumberConstructor;
            default: number;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSearch?: ((data: import("./result").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
        onChange?: ((value: string, ev?: Event | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onUpdate:modelField"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        disabled: boolean;
        clearable: boolean;
        loading: boolean;
        fields: import("..").SelectOptionData[];
        searchButton: boolean;
        recentSearches: string[];
        maxSearchHistoryCount: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: StringConstructor;
    searchButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    buttonText: {
        type: StringConstructor;
    };
    buttonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    recentSearches: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    fields: {
        type: import("vue").PropType<import("..").SelectOptionData[]>;
        default: () => never[];
    };
    selectStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    defaultField: {
        type: StringConstructor;
    };
    modelField: {
        type: StringConstructor;
    };
    model: {
        type: import("vue").PropType<Record<string, any>>;
    };
    maxSearchHistoryCount: {
        type: NumberConstructor;
        default: number;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSearch?: ((data: import("./result").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
    onChange?: ((value: string, ev?: Event | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:modelField"?: ((value: string) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<any, any>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: (data: import("./result").SearchResult, ev: MouseEvent | KeyboardEvent | Event) => true;
    change: (value: string, ev?: Event) => true;
    'update:modelValue': (value: string) => true;
    'update:modelField': (value: string) => true;
}, string, {
    disabled: boolean;
    clearable: boolean;
    loading: boolean;
    fields: import("..").SelectOptionData[];
    searchButton: boolean;
    recentSearches: string[];
    maxSearchHistoryCount: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export * from './props';
export * from './result';
export type SearchInstance = InstanceType<typeof _Search>;
export { Search };
export declare const _SearchComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        searchButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        buttonText: {
            type: StringConstructor;
        };
        buttonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        recentSearches: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        fields: {
            type: import("vue").PropType<import("..").SelectOptionData[]>;
            default: () => never[];
        };
        selectStyle: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        defaultField: {
            type: StringConstructor;
        };
        modelField: {
            type: StringConstructor;
        };
        model: {
            type: import("vue").PropType<Record<string, any>>;
        };
        maxSearchHistoryCount: {
            type: NumberConstructor;
            default: number;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSearch?: ((data: import("./result").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
        onChange?: ((value: string, ev?: Event | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onUpdate:modelField"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        search: (data: import("./result").SearchResult, ev: MouseEvent | KeyboardEvent | Event) => true;
        change: (value: string, ev?: Event) => true;
        'update:modelValue': (value: string) => true;
        'update:modelField': (value: string) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        clearable: boolean;
        loading: boolean;
        fields: import("..").SelectOptionData[];
        searchButton: boolean;
        recentSearches: string[];
        maxSearchHistoryCount: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        searchButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
        };
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        buttonText: {
            type: StringConstructor;
        };
        buttonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        recentSearches: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        fields: {
            type: import("vue").PropType<import("..").SelectOptionData[]>;
            default: () => never[];
        };
        selectStyle: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        defaultField: {
            type: StringConstructor;
        };
        modelField: {
            type: StringConstructor;
        };
        model: {
            type: import("vue").PropType<Record<string, any>>;
        };
        maxSearchHistoryCount: {
            type: NumberConstructor;
            default: number;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSearch?: ((data: import("./result").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
        onChange?: ((value: string, ev?: Event | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onUpdate:modelField"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, {
        disabled: boolean;
        clearable: boolean;
        loading: boolean;
        fields: import("..").SelectOptionData[];
        searchButton: boolean;
        recentSearches: string[];
        maxSearchHistoryCount: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: StringConstructor;
    searchButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
    };
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "standard">;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    buttonText: {
        type: StringConstructor;
    };
    buttonProps: {
        type: import("vue").PropType<import("..").ButtonProps>;
    };
    recentSearches: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    fields: {
        type: import("vue").PropType<import("..").SelectOptionData[]>;
        default: () => never[];
    };
    selectStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    defaultField: {
        type: StringConstructor;
    };
    modelField: {
        type: StringConstructor;
    };
    model: {
        type: import("vue").PropType<Record<string, any>>;
    };
    maxSearchHistoryCount: {
        type: NumberConstructor;
        default: number;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSearch?: ((data: import("./result").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
    onChange?: ((value: string, ev?: Event | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:modelField"?: ((value: string) => any) | undefined;
}>, {
    inputRef: import("vue").Ref<any, any>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: (data: import("./result").SearchResult, ev: MouseEvent | KeyboardEvent | Event) => true;
    change: (value: string, ev?: Event) => true;
    'update:modelValue': (value: string) => true;
    'update:modelField': (value: string) => true;
}, string, {
    disabled: boolean;
    clearable: boolean;
    loading: boolean;
    fields: import("..").SelectOptionData[];
    searchButton: boolean;
    recentSearches: string[];
    maxSearchHistoryCount: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Search;
