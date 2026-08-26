import { PropType } from 'vue';
import type { DataInfo, TransferFilter, TransferItem, TransferValue } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"source" | "target">;
    };
    dataInfo: {
        type: PropType<DataInfo>;
        required: true;
    };
    title: StringConstructor;
    data: {
        type: PropType<TransferItem[]>;
        required: true;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    selected: {
        type: PropType<TransferValue[]>;
        required: true;
    };
    showSearch: BooleanConstructor;
    showSelectAll: BooleanConstructor;
    virtualScroll: BooleanConstructor;
    targetDraggable: BooleanConstructor;
    targetOperation: {
        type: PropType<"remove" | "menu">;
        default: string;
    };
    total: NumberConstructor;
    clearText: StringConstructor;
    simple: BooleanConstructor;
    searchProps: {
        type: ObjectConstructor;
    };
    filter: {
        type: PropType<TransferFilter>;
        required: true;
    };
}>, {
    prefixCls: string;
    filteredData: import("vue").ComputedRef<TransferItem[]>;
    filter: import("vue").Ref<string, string>;
    checked: import("vue").ComputedRef<boolean>;
    indeterminate: import("vue").ComputedRef<boolean>;
    countSelected: import("vue").ComputedRef<number>;
    countRendered: import("vue").ComputedRef<number>;
    handleSelectAllChange: (checked: boolean | (string | number | boolean)[]) => void;
    handleSearch: (value: string) => void;
    handleClear: () => void;
    showGroupTitle: (item: TransferItem, index?: number) => boolean;
    handleTargetOrder: (items: TransferItem[], detail: {
        oldValue?: TransferItem;
        newValue?: TransferItem;
    }) => void | undefined;
    transferCtx: import("./context").TransferContext | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "search"[], "search", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"source" | "target">;
    };
    dataInfo: {
        type: PropType<DataInfo>;
        required: true;
    };
    title: StringConstructor;
    data: {
        type: PropType<TransferItem[]>;
        required: true;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    selected: {
        type: PropType<TransferValue[]>;
        required: true;
    };
    showSearch: BooleanConstructor;
    showSelectAll: BooleanConstructor;
    virtualScroll: BooleanConstructor;
    targetDraggable: BooleanConstructor;
    targetOperation: {
        type: PropType<"remove" | "menu">;
        default: string;
    };
    total: NumberConstructor;
    clearText: StringConstructor;
    simple: BooleanConstructor;
    searchProps: {
        type: ObjectConstructor;
    };
    filter: {
        type: PropType<TransferFilter>;
        required: true;
    };
}>> & Readonly<{
    onSearch?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    clearable: boolean;
    simple: boolean;
    showSearch: boolean;
    showSelectAll: boolean;
    virtualScroll: boolean;
    targetDraggable: boolean;
    targetOperation: "menu" | "remove";
}, {}, {
    Empty: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        description: StringConstructor;
        imageUrl: StringConstructor;
        alt: {
            type: StringConstructor;
            default: string;
        };
        icon: StringConstructor;
        imageSize: {
            type: PropType<import("../empty").EmptyImageSize>;
            default: string;
        };
        inConfigProvider: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        description: StringConstructor;
        imageUrl: StringConstructor;
        alt: {
            type: StringConstructor;
            default: string;
        };
        icon: StringConstructor;
        imageSize: {
            type: PropType<import("../empty").EmptyImageSize>;
            default: string;
        };
        inConfigProvider: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        alt: string;
        imageSize: import("../empty").EmptyImageSize;
        inConfigProvider: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Checkbox: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<boolean | import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: PropType<import("..").CheckboxValue>;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            uninjectGroupContext: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: boolean | (string | number | boolean)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean | (string | number | boolean)[]) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: boolean | (string | number | boolean)[]) => true;
            change: (value: boolean | (string | number | boolean)[], ev: Event) => true;
        }, import("vue").PublicProps, {
            disabled: boolean;
            modelValue: boolean | import("..").CheckboxValue[];
            defaultChecked: boolean;
            indeterminate: boolean;
            uninjectGroupContext: boolean;
        }, true, {}, {}, {
            Check: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: PropType<import("..").ComponentSize>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                classes: typeof import("rattail").classes;
                n: (suffix?: string) => string;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: PropType<import("..").ComponentSize>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<boolean | import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: PropType<import("..").CheckboxValue>;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            uninjectGroupContext: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: boolean | (string | number | boolean)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean | (string | number | boolean)[]) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            disabled: boolean;
            modelValue: boolean | import("..").CheckboxValue[];
            defaultChecked: boolean;
            indeterminate: boolean;
            uninjectGroupContext: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<boolean | import("..").CheckboxValue[]>;
            default: undefined;
        };
        defaultChecked: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: PropType<import("..").CheckboxValue>;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        uninjectGroupContext: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: boolean | (string | number | boolean)[], ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean | (string | number | boolean)[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: boolean | (string | number | boolean)[]) => true;
        change: (value: boolean | (string | number | boolean)[], ev: Event) => true;
    }, string, {
        disabled: boolean;
        modelValue: boolean | import("..").CheckboxValue[];
        defaultChecked: boolean;
        indeterminate: boolean;
        uninjectGroupContext: boolean;
    }, {}, string, {}, {
        Check: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: () => never[];
            };
            max: NumberConstructor;
            options: PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: (string | number | boolean)[]) => true;
            change: (value: (string | number | boolean)[], ev: Event) => true;
        }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: () => never[];
            };
            max: NumberConstructor;
            options: PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: (string | number | boolean)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | boolean)[]) => any) | undefined;
        }>, {
            disabled: boolean;
            defaultValue: import("..").CheckboxValue[];
            modelValue: import("..").CheckboxValue[];
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
    IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    IconDelete: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import("vue").PublicProps, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: string | number | undefined;
        strokeWidth?: number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | undefined;
        strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
        rotate?: number | undefined;
        spin?: boolean | undefined;
    }> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        strokeWidth: number;
        strokeLinecap: "butt" | "round" | "square";
        strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
    };
    Search: import("../_utils/global-config").CedarComponentWithInstall<{
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
                type: PropType<"filled" | "outlined" | "standard">;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
            };
            buttonText: {
                type: StringConstructor;
            };
            buttonProps: {
                type: PropType<import("..").ButtonProps>;
            };
            recentSearches: {
                type: PropType<string[]>;
                default: () => never[];
            };
            fields: {
                type: PropType<import("..").SelectOptionData[]>;
                default: () => never[];
            };
            selectStyle: {
                type: PropType<import("vue").StyleValue>;
            };
            defaultField: {
                type: StringConstructor;
            };
            modelField: {
                type: StringConstructor;
            };
            model: {
                type: PropType<Record<string, any>>;
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
            onSearch?: ((data: import("..").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
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
            search: (data: import("..").SearchResult, ev: MouseEvent | KeyboardEvent | Event) => true;
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
                type: PropType<"filled" | "outlined" | "standard">;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
            };
            buttonText: {
                type: StringConstructor;
            };
            buttonProps: {
                type: PropType<import("..").ButtonProps>;
            };
            recentSearches: {
                type: PropType<string[]>;
                default: () => never[];
            };
            fields: {
                type: PropType<import("..").SelectOptionData[]>;
                default: () => never[];
            };
            selectStyle: {
                type: PropType<import("vue").StyleValue>;
            };
            defaultField: {
                type: StringConstructor;
            };
            modelField: {
                type: StringConstructor;
            };
            model: {
                type: PropType<Record<string, any>>;
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
            onSearch?: ((data: import("..").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
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
            type: PropType<"filled" | "outlined" | "standard">;
        };
        size: {
            type: PropType<import("..").ComponentSize>;
        };
        buttonText: {
            type: StringConstructor;
        };
        buttonProps: {
            type: PropType<import("..").ButtonProps>;
        };
        recentSearches: {
            type: PropType<string[]>;
            default: () => never[];
        };
        fields: {
            type: PropType<import("..").SelectOptionData[]>;
            default: () => never[];
        };
        selectStyle: {
            type: PropType<import("vue").StyleValue>;
        };
        defaultField: {
            type: StringConstructor;
        };
        modelField: {
            type: StringConstructor;
        };
        model: {
            type: PropType<Record<string, any>>;
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
        onSearch?: ((data: import("..").SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
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
        search: (data: import("..").SearchResult, ev: MouseEvent | KeyboardEvent | Event) => true;
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
    List: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: PropType<any[]>;
            };
            size: {
                type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                default: string;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            split: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            hoverable: {
                type: BooleanConstructor;
                default: boolean;
            };
            paginationProps: {
                type: PropType<Partial<import("vue").ExtractPropTypes<{
                    total: {
                        type: NumberConstructor;
                        required: boolean;
                        validator: (value: number) => boolean;
                    };
                    current: NumberConstructor;
                    defaultCurrent: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    pageSize: NumberConstructor;
                    defaultPageSize: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    disabled: BooleanConstructor;
                    hideOnSinglePage: BooleanConstructor;
                    simple: BooleanConstructor;
                    showTotal: BooleanConstructor;
                    showMore: BooleanConstructor;
                    showJumper: BooleanConstructor;
                    showPageSize: BooleanConstructor;
                    pageSizeOptions: {
                        type: PropType<number[]>;
                        default: () => number[];
                        validator: (value: number[]) => boolean;
                    };
                    pageSizeProps: PropType<import("..").SelectProps>;
                    size: {
                        type: PropType<import("..").ComponentSize>;
                        validator: (value: import("..").ComponentSize) => boolean;
                    };
                    pageItemStyle: PropType<import("vue").CSSProperties>;
                    activePageItemStyle: PropType<import("vue").CSSProperties>;
                    baseSize: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    bufferSize: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    autoAdjust: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>>>;
            };
            gridProps: {
                type: ObjectConstructor;
            };
            maxHeight: {
                type: PropType<string | number>;
                default: number;
            };
            bottomOffset: {
                type: NumberConstructor;
                default: number;
            };
            virtualListProps: {
                type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            scrollbar: {
                type: PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
        }>> & Readonly<{
            onScroll?: (() => any) | undefined;
            onReachBottom?: (() => any) | undefined;
            onPageSizeChange?: ((pageSize: number) => any) | undefined;
            onPageChange?: ((page: number) => any) | undefined;
        }>, {
            virtualListRef: import("vue").Ref<any, any>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: () => true;
            reachBottom: () => true;
            pageChange: (page: number) => true;
            pageSizeChange: (pageSize: number) => true;
        }, import("vue").PublicProps, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            split: boolean;
            scrollbar: boolean | import("..").ScrollbarProps;
            maxHeight: string | number;
            loading: boolean;
            bottomOffset: number;
            bordered: boolean;
            hoverable: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: PropType<any[]>;
            };
            size: {
                type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                default: string;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            split: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            hoverable: {
                type: BooleanConstructor;
                default: boolean;
            };
            paginationProps: {
                type: PropType<Partial<import("vue").ExtractPropTypes<{
                    total: {
                        type: NumberConstructor;
                        required: boolean;
                        validator: (value: number) => boolean;
                    };
                    current: NumberConstructor;
                    defaultCurrent: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    pageSize: NumberConstructor;
                    defaultPageSize: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    disabled: BooleanConstructor;
                    hideOnSinglePage: BooleanConstructor;
                    simple: BooleanConstructor;
                    showTotal: BooleanConstructor;
                    showMore: BooleanConstructor;
                    showJumper: BooleanConstructor;
                    showPageSize: BooleanConstructor;
                    pageSizeOptions: {
                        type: PropType<number[]>;
                        default: () => number[];
                        validator: (value: number[]) => boolean;
                    };
                    pageSizeProps: PropType<import("..").SelectProps>;
                    size: {
                        type: PropType<import("..").ComponentSize>;
                        validator: (value: import("..").ComponentSize) => boolean;
                    };
                    pageItemStyle: PropType<import("vue").CSSProperties>;
                    activePageItemStyle: PropType<import("vue").CSSProperties>;
                    baseSize: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    bufferSize: {
                        type: NumberConstructor;
                        default: number;
                        validator: (value: number) => boolean;
                    };
                    autoAdjust: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>>>;
            };
            gridProps: {
                type: ObjectConstructor;
            };
            maxHeight: {
                type: PropType<string | number>;
                default: number;
            };
            bottomOffset: {
                type: NumberConstructor;
                default: number;
            };
            virtualListProps: {
                type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            scrollbar: {
                type: PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
        }>> & Readonly<{
            onScroll?: (() => any) | undefined;
            onReachBottom?: (() => any) | undefined;
            onPageSizeChange?: ((pageSize: number) => any) | undefined;
            onPageChange?: ((page: number) => any) | undefined;
        }>, {
            virtualListRef: import("vue").Ref<any, any>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        }, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            split: boolean;
            scrollbar: boolean | import("..").ScrollbarProps;
            maxHeight: string | number;
            loading: boolean;
            bottomOffset: number;
            bordered: boolean;
            hoverable: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: PropType<any[]>;
        };
        size: {
            type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            default: string;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        split: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverable: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationProps: {
            type: PropType<import("..").PaginationProps>;
        };
        gridProps: {
            type: ObjectConstructor;
        };
        maxHeight: {
            type: PropType<string | number>;
            default: number;
        };
        bottomOffset: {
            type: NumberConstructor;
            default: number;
        };
        virtualListProps: {
            type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        scrollbar: {
            type: PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: (() => any) | undefined;
        onReachBottom?: (() => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
    }>, {
        virtualListRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        scroll: () => true;
        reachBottom: () => true;
        pageChange: (page: number) => true;
        pageSizeChange: (pageSize: number) => true;
    }, string, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        split: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        maxHeight: string | number;
        loading: boolean;
        bottomOffset: number;
        bordered: boolean;
        hoverable: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Item: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                actionLayout: {
                    type: PropType<import("..").Direction>;
                    default: string;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                actionLayout: "horizontal" | "vertical";
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                actionLayout: {
                    type: PropType<import("..").Direction>;
                    default: string;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                actionLayout: "horizontal" | "vertical";
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            actionLayout: {
                type: PropType<import("..").Direction>;
                default: string;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            actionLayout: "horizontal" | "vertical";
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
            Meta: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                title: StringConstructor;
                description: StringConstructor;
            }>, {
                prefixCls: string;
                hasContent: boolean;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                title: StringConstructor;
                description: StringConstructor;
            }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        };
    }>;
    TransferListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: PropType<"source" | "target">;
        };
        data: {
            type: PropType<TransferItem>;
            required: true;
        };
        clearable: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        draggable: {
            type: BooleanConstructor;
        };
        simple: BooleanConstructor;
        operationMode: {
            type: PropType<"remove" | "menu">;
            default: string;
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: PropType<"source" | "target">;
        };
        data: {
            type: PropType<TransferItem>;
            required: true;
        };
        clearable: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        draggable: {
            type: BooleanConstructor;
        };
        simple: BooleanConstructor;
        operationMode: {
            type: PropType<"remove" | "menu">;
            default: string;
        };
    }>> & Readonly<{}>, {
        disabled: boolean;
        clearable: boolean;
        draggable: boolean;
        simple: boolean;
        operationMode: "menu" | "remove";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Scrollbar: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: PropType<"track" | "embed">;
                default: string;
            };
            outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            outerStyle: {
                type: PropType<import("vue").StyleValue>;
            };
            hide: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableHorizontal: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableVertical: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onScroll?: ((ev: Event) => any) | undefined;
        }>, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
            style: import("vue").ComputedRef<import("vue").StyleValue[]>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            horizontalThumbRef: import("vue").Ref<any, any>;
            verticalThumbRef: import("vue").Ref<any, any>;
            horizontalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
            verticalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
            isBoth: import("vue").Ref<boolean, boolean>;
            hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
            hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
            handleResize: () => void;
            handleScroll: (ev: Event) => void;
            handleHorizontalScroll: (offset: number) => void;
            handleVerticalScroll: (offset: number) => void;
        }, {}, {}, {
            scrollTo(options?: number | {
                left?: number;
                top?: number;
            }, y?: number): void;
            scrollTop(top: number): void;
            scrollLeft(left: number): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: (ev: Event) => true;
        }, import("vue").PublicProps, {
            type: "embed" | "track";
            hide: boolean;
            disableHorizontal: boolean;
            disableVertical: boolean;
        }, true, {}, {}, {
            ResizeObserver: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                watchOnUpdated: BooleanConstructor;
            }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                watchOnUpdated: BooleanConstructor;
            }>> & Readonly<{
                onResize?: ((...args: any[]) => any) | undefined;
            }>, {
                watchOnUpdated: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Thumb: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                data: {
                    type: PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: PropType<import("..").Direction>;
                    default: string;
                };
                alwaysShow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                both: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                visible: import("vue").Ref<boolean, boolean>;
                trackRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                thumbRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                prefixCls: string;
                thumbCls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                thumbStyle: import("vue").ComputedRef<{
                    [x: string]: string;
                }>;
                handleThumbMouseDown: (ev: MouseEvent) => void;
                handleTrackClick: (ev: MouseEvent) => void;
                setOffset: (_offset: number) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: PropType<import("..").Direction>;
                    default: string;
                };
                alwaysShow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                both: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onScroll?: ((...args: any[]) => any) | undefined;
            }>, {
                both: boolean;
                direction: "horizontal" | "vertical";
                alwaysShow: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: PropType<"track" | "embed">;
                default: string;
            };
            outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            outerStyle: {
                type: PropType<import("vue").StyleValue>;
            };
            hide: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableHorizontal: {
                type: BooleanConstructor;
                default: boolean;
            };
            disableVertical: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onScroll?: ((ev: Event) => any) | undefined;
        }>, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
            style: import("vue").ComputedRef<import("vue").StyleValue[]>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            horizontalThumbRef: import("vue").Ref<any, any>;
            verticalThumbRef: import("vue").Ref<any, any>;
            horizontalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
            verticalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
            isBoth: import("vue").Ref<boolean, boolean>;
            hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
            hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
            handleResize: () => void;
            handleScroll: (ev: Event) => void;
            handleHorizontalScroll: (offset: number) => void;
            handleVerticalScroll: (offset: number) => void;
        }, {}, {}, {
            scrollTo(options?: number | {
                left?: number;
                top?: number;
            }, y?: number): void;
            scrollTop(top: number): void;
            scrollLeft(left: number): void;
        }, {
            type: "embed" | "track";
            hide: boolean;
            disableHorizontal: boolean;
            disableVertical: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: PropType<"track" | "embed">;
            default: string;
        };
        outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        outerStyle: {
            type: PropType<import("vue").StyleValue>;
        };
        hide: {
            type: BooleanConstructor;
            default: boolean;
        };
        disableHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        disableVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: ((ev: Event) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
        style: import("vue").ComputedRef<import("vue").StyleValue[]>;
        containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        horizontalThumbRef: import("vue").Ref<any, any>;
        verticalThumbRef: import("vue").Ref<any, any>;
        horizontalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
        verticalData: import("vue").Ref<import("../scrollbar/types").ThumbData | undefined, import("../scrollbar/types").ThumbData | undefined>;
        isBoth: import("vue").Ref<boolean, boolean>;
        hasHorizontalScrollbar: import("vue").ComputedRef<boolean>;
        hasVerticalScrollbar: import("vue").ComputedRef<boolean>;
        handleResize: () => void;
        handleScroll: (ev: Event) => void;
        handleHorizontalScroll: (offset: number) => void;
        handleVerticalScroll: (offset: number) => void;
    }, {}, {}, {
        scrollTo(options?: number | {
            left?: number;
            top?: number;
        }, y?: number): void;
        scrollTop(top: number): void;
        scrollLeft(left: number): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        scroll: (ev: Event) => true;
    }, string, {
        type: "embed" | "track";
        hide: boolean;
        disableHorizontal: boolean;
        disableVertical: boolean;
    }, {}, string, {}, {
        ResizeObserver: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            watchOnUpdated: BooleanConstructor;
        }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            watchOnUpdated: BooleanConstructor;
        }>> & Readonly<{
            onResize?: ((...args: any[]) => any) | undefined;
        }>, {
            watchOnUpdated: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Thumb: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            data: {
                type: PropType<import("../scrollbar/types").ThumbData>;
            };
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            alwaysShow: {
                type: BooleanConstructor;
                default: boolean;
            };
            both: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            visible: import("vue").Ref<boolean, boolean>;
            trackRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            thumbRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            prefixCls: string;
            thumbCls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            thumbStyle: import("vue").ComputedRef<{
                [x: string]: string;
            }>;
            handleThumbMouseDown: (ev: MouseEvent) => void;
            handleTrackClick: (ev: MouseEvent) => void;
            setOffset: (_offset: number) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scroll"[], "scroll", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: PropType<import("../scrollbar/types").ThumbData>;
            };
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            alwaysShow: {
                type: BooleanConstructor;
                default: boolean;
            };
            both: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onScroll?: ((...args: any[]) => any) | undefined;
        }>, {
            both: boolean;
            direction: "horizontal" | "vertical";
            alwaysShow: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        data: {
            type: PropType<any[]>;
            default: () => never[];
        };
        threshold: {
            type: NumberConstructor;
            default: number;
        };
        itemKey: {
            type: PropType<string | ((item: unknown) => string | number)>;
            default: string;
        };
        fixedSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        estimatedSize: {
            type: NumberConstructor;
            default: number;
        };
        buffer: {
            type: NumberConstructor;
            default: number;
        };
        component: {
            type: (ObjectConstructor | StringConstructor)[];
            default: string;
        };
        listAttrs: {
            type: ObjectConstructor;
        };
        contentAttrs: {
            type: ObjectConstructor;
        };
        paddingPosition: {
            type: StringConstructor;
            default: string;
        };
    }>, {
        prefixCls: string;
        containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        frontPadding: import("vue").ComputedRef<number>;
        currentList: import("vue").ComputedRef<any[]>;
        behindPadding: import("vue").ComputedRef<number>;
        onScroll: (ev: Event) => void;
        setItemSize: (key: string | number, size: number) => void;
        hasItemSize: (key: string | number) => boolean;
        start: import("vue").Ref<number, number>;
        scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
        style: import("vue").ComputedRef<{
            height: string;
            overflow: string;
        }>;
        mergedComponent: import("vue").ComputedRef<{
            container: string;
            list: string;
            content: string;
        }>;
        getItemKey: (item: any, index: number) => string | number;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        scroll: (ev: Event) => true;
        reachBottom: (ev: Event) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        data: {
            type: PropType<any[]>;
            default: () => never[];
        };
        threshold: {
            type: NumberConstructor;
            default: number;
        };
        itemKey: {
            type: PropType<string | ((item: unknown) => string | number)>;
            default: string;
        };
        fixedSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        estimatedSize: {
            type: NumberConstructor;
            default: number;
        };
        buffer: {
            type: NumberConstructor;
            default: number;
        };
        component: {
            type: (ObjectConstructor | StringConstructor)[];
            default: string;
        };
        listAttrs: {
            type: ObjectConstructor;
        };
        contentAttrs: {
            type: ObjectConstructor;
        };
        paddingPosition: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onScroll?: ((ev: Event) => any) | undefined;
        onReachBottom?: ((ev: Event) => any) | undefined;
    }>, {
        component: string | Record<string, any>;
        data: any[];
        height: string | number;
        fixedSize: boolean;
        estimatedSize: number;
        buffer: number;
        threshold: number;
        itemKey: string | ((item: unknown) => string | number);
        paddingPosition: string;
    }, {}, {
        VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            hasItemSize: {
                type: FunctionConstructor;
                required: true;
            };
            setItemSize: {
                type: FunctionConstructor;
                required: true;
            };
        }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            hasItemSize: {
                type: FunctionConstructor;
                required: true;
            };
            setItemSize: {
                type: FunctionConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    DragContainer: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dragOptions: {
                type: () => import("..").DragOptions;
                default: () => {};
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change" | "update:modelValue")[], import("vue").PublicProps, {
            modelValue: unknown[];
            dragOptions: import("..").DragOptions;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dragOptions: {
                type: () => import("..").DragOptions;
                default: () => {};
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            modelValue: unknown[];
            dragOptions: import("..").DragOptions;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dragOptions: {
            type: () => import("..").DragOptions;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change" | "update:modelValue")[], "click" | "change" | "update:modelValue", {
        modelValue: unknown[];
        dragOptions: import("..").DragOptions;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
