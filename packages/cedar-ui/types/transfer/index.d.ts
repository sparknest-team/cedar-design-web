import _Transfer from './transfer.vue';
import { transferProps } from './props';
declare const Transfer: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            default: () => never[];
        };
        modelValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        clearText: StringConstructor;
        targetActions: {
            type: import("vue").PropType<import("./types").TransferTargetAction[]>;
            default: () => never[];
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceFilterable: BooleanConstructor;
        targetFilterable: BooleanConstructor;
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
            default: (value: string, item: import("./types").TransferItem) => boolean;
        };
        sourceFilterPlaceholder: StringConstructor;
        targetFilterPlaceholder: StringConstructor;
        showSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceTitle: StringConstructor;
        targetTitle: StringConstructor;
        showSelectAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
        sourceSearchProps: {
            type: ObjectConstructor;
        };
        targetSearchProps: {
            type: ObjectConstructor;
        };
    }>> & Readonly<{
        onSearch?: ((value: string, type: "target" | "source") => any) | undefined;
        onChange?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        onRename?: ((value: import("./types").TransferValue, label: string) => any) | undefined;
        onTargetAction?: ((key: string, item: import("./types").TransferItem) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        dataInfo: import("vue").ComputedRef<{
            sourceInfo: import("./types").DataInfo;
            targetInfo: import("./types").DataInfo;
        }>;
        computedSelected: import("vue").ComputedRef<import("./types").TransferValue[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        sourceTitle: import("vue").ComputedRef<string>;
        targetTitle: import("vue").ComputedRef<string>;
        sourceShowSearch: import("vue").ComputedRef<boolean>;
        targetShowSearch: import("vue").ComputedRef<boolean>;
        mergedFilter: import("vue").ComputedRef<import("./types").TransferFilter>;
        mergedSourceSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedTargetSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedClearText: import("vue").ComputedRef<string>;
        handleSearch: (value: string, type: "target" | "source") => void;
        renameVisible: import("vue").Ref<boolean, boolean>;
        renameDraft: import("vue").Ref<string, string>;
        commitRename: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: import("./types").TransferTargetItem[]) => true;
        change: (value: import("./types").TransferTargetItem[]) => true;
        search: (value: string, type: "target" | "source") => true;
        rename: (value: import("./types").TransferValue, label: string) => true;
        targetAction: (key: string, item: import("./types").TransferItem) => true;
    }, import("vue").PublicProps, {
        filter: import("./types").TransferFilter;
        data: import("./types").TransferItem[];
        title: string[];
        disabled: boolean;
        defaultValue: import("./types").TransferTargetItem[];
        modelValue: import("./types").TransferTargetItem[];
        showSearch: boolean;
        showSelectAll: boolean;
        virtualScroll: boolean;
        targetDraggable: boolean;
        targetOperation: "menu" | "remove";
        targetActions: import("./types").TransferTargetAction[];
        sourceFilterable: boolean;
        targetFilterable: boolean;
        showSelected: boolean;
    }, true, {}, {}, {
        TransferView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<"source" | "target">;
            };
            dataInfo: {
                type: import("vue").PropType<import("./types").DataInfo>;
                required: true;
            };
            title: StringConstructor;
            data: {
                type: import("vue").PropType<import("./types").TransferItem[]>;
                required: true;
            };
            disabled: BooleanConstructor;
            clearable: BooleanConstructor;
            selected: {
                type: import("vue").PropType<import("./types").TransferValue[]>;
                required: true;
            };
            showSearch: BooleanConstructor;
            showSelectAll: BooleanConstructor;
            virtualScroll: BooleanConstructor;
            targetDraggable: BooleanConstructor;
            targetOperation: {
                type: import("vue").PropType<"remove" | "menu">;
                default: string;
            };
            total: NumberConstructor;
            clearText: StringConstructor;
            simple: BooleanConstructor;
            searchProps: {
                type: ObjectConstructor;
            };
            filter: {
                type: import("vue").PropType<import("./types").TransferFilter>;
                required: true;
            };
        }>, {
            prefixCls: string;
            filteredData: import("vue").ComputedRef<import("./types").TransferItem[]>;
            filter: import("vue").Ref<string, string>;
            checked: import("vue").ComputedRef<boolean>;
            indeterminate: import("vue").ComputedRef<boolean>;
            countSelected: import("vue").ComputedRef<number>;
            countRendered: import("vue").ComputedRef<number>;
            handleSelectAllChange: (checked: boolean | (string | number | boolean)[]) => void;
            handleSearch: (value: string) => void;
            handleClear: () => void;
            showGroupTitle: (item: import("./types").TransferItem, index?: number) => boolean;
            handleTargetOrder: (items: import("./types").TransferItem[], detail: {
                oldValue?: import("./types").TransferItem;
                newValue?: import("./types").TransferItem;
            }) => void | undefined;
            transferCtx: import("./context").TransferContext | undefined;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "search"[], "search", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<"source" | "target">;
            };
            dataInfo: {
                type: import("vue").PropType<import("./types").DataInfo>;
                required: true;
            };
            title: StringConstructor;
            data: {
                type: import("vue").PropType<import("./types").TransferItem[]>;
                required: true;
            };
            disabled: BooleanConstructor;
            clearable: BooleanConstructor;
            selected: {
                type: import("vue").PropType<import("./types").TransferValue[]>;
                required: true;
            };
            showSearch: BooleanConstructor;
            showSelectAll: BooleanConstructor;
            virtualScroll: BooleanConstructor;
            targetDraggable: BooleanConstructor;
            targetOperation: {
                type: import("vue").PropType<"remove" | "menu">;
                default: string;
            };
            total: NumberConstructor;
            clearText: StringConstructor;
            simple: BooleanConstructor;
            searchProps: {
                type: ObjectConstructor;
            };
            filter: {
                type: import("vue").PropType<import("./types").TransferFilter>;
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
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                        type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultChecked: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    value: import("vue").PropType<import("..").CheckboxValue>;
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
                            type: import("vue").PropType<import("..").ComponentSize>;
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
                            type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultChecked: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    value: import("vue").PropType<import("..").CheckboxValue>;
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
                    type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultChecked: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                value: import("vue").PropType<import("..").CheckboxValue>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultValue: {
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: () => never[];
                    };
                    max: NumberConstructor;
                    options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultValue: {
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: () => never[];
                    };
                    max: NumberConstructor;
                    options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<any[]>;
                    };
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                                type: import("vue").PropType<number[]>;
                                default: () => number[];
                                validator: (value: number[]) => boolean;
                            };
                            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                validator: (value: import("..").ComponentSize) => boolean;
                            };
                            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                        type: import("vue").PropType<string | number>;
                        default: number;
                    };
                    bottomOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    scrollbar: {
                        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                        type: import("vue").PropType<any[]>;
                    };
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                                type: import("vue").PropType<number[]>;
                                default: () => number[];
                                validator: (value: number[]) => boolean;
                            };
                            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                validator: (value: import("..").ComponentSize) => boolean;
                            };
                            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                        type: import("vue").PropType<string | number>;
                        default: number;
                    };
                    bottomOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    scrollbar: {
                        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                    type: import("vue").PropType<any[]>;
                };
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                            type: import("vue").PropType<number[]>;
                            default: () => number[];
                            validator: (value: number[]) => boolean;
                        };
                        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            validator: (value: import("..").ComponentSize) => boolean;
                        };
                        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                bottomOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                scrollbar: {
                    type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                            type: import("vue").PropType<import("..").Direction>;
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
                            type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<"source" | "target">;
                };
                data: {
                    type: import("vue").PropType<import("./types").TransferItem>;
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
                    type: import("vue").PropType<"remove" | "menu">;
                    default: string;
                };
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: import("vue").PropType<"source" | "target">;
                };
                data: {
                    type: import("vue").PropType<import("./types").TransferItem>;
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
                    type: import("vue").PropType<"remove" | "menu">;
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
                        type: import("vue").PropType<"track" | "embed">;
                        default: string;
                    };
                    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    outerStyle: {
                        type: import("vue").PropType<import("vue").StyleValue>;
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
                            type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                        };
                        direction: {
                            type: import("vue").PropType<import("..").Direction>;
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
                            type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                        };
                        direction: {
                            type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<"track" | "embed">;
                        default: string;
                    };
                    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    outerStyle: {
                        type: import("vue").PropType<import("vue").StyleValue>;
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
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
        Dialog: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                top: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClass: StringConstructor;
                maskStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                title: StringConstructor;
                message: StringConstructor;
                type: {
                    type: import("vue").PropType<import("..").DialogType>;
                };
                simple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                titleAlign: {
                    type: import("vue").PropType<"start" | "center">;
                    default: string;
                };
                alignCenter: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: BooleanConstructor;
                maskClosable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                escToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonText: StringConstructor;
                cancelButtonText: StringConstructor;
                confirmButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                cancelButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                footer: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement | false>;
                    default: string;
                };
                dialogClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                dialogStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                beforeClose: {
                    type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                fullscreen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
                };
                dialogAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
                };
                bodyClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                bodyStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
                };
                hideTitle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                ariaLabel: StringConstructor;
                closeButtonAriaLabel: {
                    type: StringConstructor;
                    default: string;
                };
                zIndex: NumberConstructor;
            }>> & Readonly<{
                onCancel?: ((e: Event) => any) | undefined;
                onClose?: (() => any) | undefined;
                onOpen?: (() => any) | undefined;
                "onUpdate:open"?: ((show: boolean) => any) | undefined;
                onOpened?: (() => any) | undefined;
                onClosed?: (() => any) | undefined;
                onConfirm?: ((e: Event) => any) | undefined;
                "onClick-mask"?: (() => any) | undefined;
                "onKey-escape"?: (() => any) | undefined;
            }>, {
                prefixCls: string;
                mounted: import("vue").Ref<boolean, boolean>;
                computedOpen: import("vue").ComputedRef<boolean>;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                confirmDisplayText: import("vue").ComputedRef<string>;
                cancelDisplayText: import("vue").ComputedRef<string>;
                zIndex: Readonly<import("vue").Ref<number, number>>;
                handleConfirm: (e: Event) => void;
                handleCancel: (e: Event) => void;
                handleMaskClick: (e: Event) => void;
                handleMaskMouseDown: (ev: Event) => void;
                handleOpened: () => void;
                handleClosed: () => void;
                mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
                mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
                mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
                mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
                dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperCls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                dialogCls: import("vue").ComputedRef<(string | any[] | {
                    [x: string]: boolean;
                } | undefined)[]>;
                popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
                popupContainerDisabled: import("vue").ComputedRef<boolean>;
                handleMoveDown: (ev: MouseEvent) => void;
                showFooter: import("vue").ComputedRef<boolean>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (show: boolean) => true;
                confirm: (e: Event) => true;
                cancel: (e: Event) => true;
                open: () => true;
                opened: () => true;
                close: () => true;
                closed: () => true;
                'click-mask': () => true;
                'key-escape': () => true;
            }, import("vue").PublicProps, {
                closable: boolean;
                footer: boolean;
                mask: boolean;
                open: boolean;
                popupContainer: string | false | HTMLElement;
                defaultOpen: boolean;
                unmountOnClose: boolean;
                draggable: boolean;
                escToClose: boolean;
                maskClosable: boolean;
                closeButtonAriaLabel: string;
                simple: boolean;
                alignCenter: boolean;
                confirmButton: boolean;
                cancelButton: boolean;
                confirmButtonLoading: boolean;
                cancelButtonLoading: boolean;
                confirmButtonDisabled: boolean;
                cancelButtonDisabled: boolean;
                fullscreen: boolean;
                titleAlign: "center" | "start";
                maskAnimationName: string;
                dialogAnimationName: string;
                hideTitle: boolean;
            }, true, {}, {}, {
                ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                Button: import("../_utils/global-config").CedarComponentWithInstall<{
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
                            validator: (value: unknown) => value is import("..").SemanticStatus;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button").ButtonVariant>;
                            validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        click: (...args: any[]) => void;
                        touchstart: (...args: any[]) => void;
                    }, import("vue").PublicProps, {
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
                    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, Readonly<import("vue").ExtractPropTypes<{
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
                            validator: (value: unknown) => value is import("..").SemanticStatus;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button").ButtonVariant>;
                            validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                    }>, {}, {}, {}, {}, {
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
                    }>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    click: (...args: any[]) => void;
                    touchstart: (...args: any[]) => void;
                }, string, {
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
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                    $slots: {
                        icon?: (props: {}) => any;
                    } & {
                        default?: (props: {}) => any;
                    };
                }) & {
                    Group: {
                        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                default: string;
                            };
                            status: {
                                type: import("vue").PropType<import("..").SemanticStatus>;
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
                            buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                            vertical: boolean;
                            size: "xs" | "sm" | "md" | "lg" | "xl";
                            disabled: boolean;
                            color: string;
                            variant: import("../button").ButtonVariant;
                            elevation: number | boolean;
                            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                            textColor: string;
                            stacked: boolean;
                        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                            P: {};
                            B: {};
                            D: {};
                            C: {};
                            M: {};
                            Defaults: {};
                        }, Readonly<import("vue").ExtractPropTypes<{
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                default: string;
                            };
                            status: {
                                type: import("vue").PropType<import("..").SemanticStatus>;
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
                            buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                        }, {}, {}, {}, {
                            vertical: boolean;
                            size: "xs" | "sm" | "md" | "lg" | "xl";
                            disabled: boolean;
                            color: string;
                            variant: import("../button").ButtonVariant;
                            elevation: number | boolean;
                            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                            textColor: string;
                            stacked: boolean;
                        }>;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                        $slots: {
                            default?: (props: {}) => any;
                        };
                    });
                }>;
                IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefix: {
                        type: StringConstructor;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                IconClose: {
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
                IconInfoCircleFill: {
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
                IconCheckCircleFill: {
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
                IconExclamationCircleFill: {
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
                IconCloseCircleFill: {
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
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                top: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClass: StringConstructor;
                maskStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                title: StringConstructor;
                message: StringConstructor;
                type: {
                    type: import("vue").PropType<import("..").DialogType>;
                };
                simple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                titleAlign: {
                    type: import("vue").PropType<"start" | "center">;
                    default: string;
                };
                alignCenter: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: BooleanConstructor;
                maskClosable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                escToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonText: StringConstructor;
                cancelButtonText: StringConstructor;
                confirmButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                cancelButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                footer: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement | false>;
                    default: string;
                };
                dialogClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                dialogStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                beforeClose: {
                    type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                fullscreen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
                };
                dialogAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
                };
                bodyClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                bodyStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
                };
                hideTitle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                ariaLabel: StringConstructor;
                closeButtonAriaLabel: {
                    type: StringConstructor;
                    default: string;
                };
                zIndex: NumberConstructor;
            }>> & Readonly<{
                onCancel?: ((e: Event) => any) | undefined;
                onClose?: (() => any) | undefined;
                onOpen?: (() => any) | undefined;
                "onUpdate:open"?: ((show: boolean) => any) | undefined;
                onOpened?: (() => any) | undefined;
                onClosed?: (() => any) | undefined;
                onConfirm?: ((e: Event) => any) | undefined;
                "onClick-mask"?: (() => any) | undefined;
                "onKey-escape"?: (() => any) | undefined;
            }>, {
                prefixCls: string;
                mounted: import("vue").Ref<boolean, boolean>;
                computedOpen: import("vue").ComputedRef<boolean>;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                confirmDisplayText: import("vue").ComputedRef<string>;
                cancelDisplayText: import("vue").ComputedRef<string>;
                zIndex: Readonly<import("vue").Ref<number, number>>;
                handleConfirm: (e: Event) => void;
                handleCancel: (e: Event) => void;
                handleMaskClick: (e: Event) => void;
                handleMaskMouseDown: (ev: Event) => void;
                handleOpened: () => void;
                handleClosed: () => void;
                mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
                mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
                mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
                mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
                dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperCls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                dialogCls: import("vue").ComputedRef<(string | any[] | {
                    [x: string]: boolean;
                } | undefined)[]>;
                popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
                popupContainerDisabled: import("vue").ComputedRef<boolean>;
                handleMoveDown: (ev: MouseEvent) => void;
                showFooter: import("vue").ComputedRef<boolean>;
            }, {}, {}, {}, {
                closable: boolean;
                footer: boolean;
                mask: boolean;
                open: boolean;
                popupContainer: string | false | HTMLElement;
                defaultOpen: boolean;
                unmountOnClose: boolean;
                draggable: boolean;
                escToClose: boolean;
                maskClosable: boolean;
                closeButtonAriaLabel: string;
                simple: boolean;
                alignCenter: boolean;
                confirmButton: boolean;
                cancelButton: boolean;
                confirmButtonLoading: boolean;
                cancelButtonLoading: boolean;
                confirmButtonDisabled: boolean;
                cancelButtonDisabled: boolean;
                fullscreen: boolean;
                titleAlign: "center" | "start";
                maskAnimationName: string;
                dialogAnimationName: string;
                hideTitle: boolean;
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
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            top: {
                type: (StringConstructor | NumberConstructor)[];
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClass: StringConstructor;
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            title: StringConstructor;
            message: StringConstructor;
            type: {
                type: import("vue").PropType<import("..").DialogType>;
            };
            simple: {
                type: BooleanConstructor;
                default: boolean;
            };
            titleAlign: {
                type: import("vue").PropType<"start" | "center">;
                default: string;
            };
            alignCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: BooleanConstructor;
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            escToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonText: StringConstructor;
            cancelButtonText: StringConstructor;
            confirmButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            cancelButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            footer: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement | false>;
                default: string;
            };
            dialogClass: {
                type: import("vue").PropType<string | any[]>;
            };
            dialogStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            beforeClose: {
                type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fullscreen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
            };
            dialogAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
            };
            bodyClass: {
                type: import("vue").PropType<string | any[]>;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            hideTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            ariaLabel: StringConstructor;
            closeButtonAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            zIndex: NumberConstructor;
        }>> & Readonly<{
            onCancel?: ((e: Event) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:open"?: ((show: boolean) => any) | undefined;
            onOpened?: (() => any) | undefined;
            onClosed?: (() => any) | undefined;
            onConfirm?: ((e: Event) => any) | undefined;
            "onClick-mask"?: (() => any) | undefined;
            "onKey-escape"?: (() => any) | undefined;
        }>, {
            prefixCls: string;
            mounted: import("vue").Ref<boolean, boolean>;
            computedOpen: import("vue").ComputedRef<boolean>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            confirmDisplayText: import("vue").ComputedRef<string>;
            cancelDisplayText: import("vue").ComputedRef<string>;
            zIndex: Readonly<import("vue").Ref<number, number>>;
            handleConfirm: (e: Event) => void;
            handleCancel: (e: Event) => void;
            handleMaskClick: (e: Event) => void;
            handleMaskMouseDown: (ev: Event) => void;
            handleOpened: () => void;
            handleClosed: () => void;
            mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
            mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
            mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
            mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
            dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperCls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            dialogCls: import("vue").ComputedRef<(string | any[] | {
                [x: string]: boolean;
            } | undefined)[]>;
            popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
            popupContainerDisabled: import("vue").ComputedRef<boolean>;
            handleMoveDown: (ev: MouseEvent) => void;
            showFooter: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (show: boolean) => true;
            confirm: (e: Event) => true;
            cancel: (e: Event) => true;
            open: () => true;
            opened: () => true;
            close: () => true;
            closed: () => true;
            'click-mask': () => true;
            'key-escape': () => true;
        }, string, {
            closable: boolean;
            footer: boolean;
            mask: boolean;
            open: boolean;
            popupContainer: string | false | HTMLElement;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            draggable: boolean;
            escToClose: boolean;
            maskClosable: boolean;
            closeButtonAriaLabel: string;
            simple: boolean;
            alignCenter: boolean;
            confirmButton: boolean;
            cancelButton: boolean;
            confirmButtonLoading: boolean;
            cancelButtonLoading: boolean;
            confirmButtonDisabled: boolean;
            cancelButtonDisabled: boolean;
            fullscreen: boolean;
            titleAlign: "center" | "start";
            maskAnimationName: string;
            dialogAnimationName: string;
            hideTitle: boolean;
        }, {}, string, {}, {
            ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Button: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    click: (...args: any[]) => void;
                    touchstart: (...args: any[]) => void;
                }, import("vue").PublicProps, {
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
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, {
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
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                touchstart: (...args: any[]) => void;
            }, string, {
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
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                $slots: {
                    icon?: (props: {}) => any;
                } & {
                    default?: (props: {}) => any;
                };
            }) & {
                Group: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                    $slots: {
                        default?: (props: {}) => any;
                    };
                });
            }>;
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
            IconClose: {
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
            IconInfoCircleFill: {
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
            IconCheckCircleFill: {
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
            IconExclamationCircleFill: {
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
            IconCloseCircleFill: {
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
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
            close: () => void;
            setDefaultOptions: (_options: import("..").DialogConfig) => void;
            resetDefaultOptions: () => void;
            install: (app: import("vue").App, options?: import("../_utils/types").CedarOptions) => void;
            _context: import("vue").AppContext | null;
            open: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            confirm: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            alert: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            info: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            success: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            warning: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            error: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        };
        Input: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: MouseEvent) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: string, ev: Event) => any) | undefined;
                onInput?: ((value: string, ev: Event) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:modelValue': (value: string) => true;
                input: (value: string, ev: Event) => true;
                change: (value: string, ev: Event) => true;
                pressEnter: (ev: KeyboardEvent) => true;
                clear: (ev: MouseEvent) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
            }, import("vue").PublicProps, {
                error: boolean;
                readonly: boolean;
                type: "text" | "password";
                disabled: boolean;
                defaultValue: string;
                clearable: boolean;
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: MouseEvent) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: string, ev: Event) => any) | undefined;
                onInput?: ((value: string, ev: Event) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, {
                error: boolean;
                readonly: boolean;
                type: "text" | "password";
                disabled: boolean;
                defaultValue: string;
                clearable: boolean;
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: BooleanConstructor;
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            maxLength: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
            };
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            input: (value: string, ev: Event) => true;
            change: (value: string, ev: Event) => true;
            pressEnter: (ev: KeyboardEvent) => true;
            clear: (ev: MouseEvent) => true;
            focus: (ev: FocusEvent) => true;
            blur: (ev: FocusEvent) => true;
        }, string, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
            Password: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibility: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultVisibility: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibilityToggle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                inputRef: import("vue").Ref<any, any>;
                mergedVisible: import("vue").ComputedRef<boolean>;
                classes: typeof import("rattail").classes;
                n: (suffix?: string) => string;
                handleInvisible: () => void;
                t: (key: string, ...args: any[]) => string;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibility-change" | "update:visibility")[], "visibility-change" | "update:visibility", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibility: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultVisibility: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibilityToggle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                "onVisibility-change"?: ((...args: any[]) => any) | undefined;
                "onUpdate:visibility"?: ((...args: any[]) => any) | undefined;
            }>, {
                disabled: boolean;
                visibility: boolean;
                defaultVisibility: boolean;
                visibilityToggle: boolean;
            }, {}, {
                IconEye: {
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
                IconEyeInvisible: {
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
                IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefix: {
                        type: StringConstructor;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    variant: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                    };
                    modelValue: StringConstructor;
                    defaultValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    disabled: BooleanConstructor;
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    placeholder: StringConstructor;
                    maxLength: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                        default: number;
                    };
                    showWordLimit: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                    type: {
                        type: import("vue").PropType<import("..").InputType>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputType;
                    };
                }>, {
                    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                    render: () => import("vue/jsx-runtime").JSX.Element;
                }, {}, {}, {
                    focus(): void;
                    blur(): void;
                }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:modelValue': (value: string) => true;
                    input: (value: string, ev: Event) => true;
                    change: (value: string, ev: Event) => true;
                    pressEnter: (ev: KeyboardEvent) => true;
                    clear: (ev: MouseEvent) => true;
                    focus: (ev: FocusEvent) => true;
                    blur: (ev: FocusEvent) => true;
                }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    variant: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                    };
                    modelValue: StringConstructor;
                    defaultValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    disabled: BooleanConstructor;
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    placeholder: StringConstructor;
                    maxLength: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                        default: number;
                    };
                    showWordLimit: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                    type: {
                        type: import("vue").PropType<import("..").InputType>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputType;
                    };
                }>> & Readonly<{
                    onFocus?: ((ev: FocusEvent) => any) | undefined;
                    onClear?: ((ev: MouseEvent) => any) | undefined;
                    onBlur?: ((ev: FocusEvent) => any) | undefined;
                    onChange?: ((value: string, ev: Event) => any) | undefined;
                    onInput?: ((value: string, ev: Event) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                    onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
                }>, {
                    error: boolean;
                    readonly: boolean;
                    type: "text" | "password";
                    disabled: boolean;
                    defaultValue: string;
                    clearable: boolean;
                    maxLength: import("../_utils/form-control").FormControlMaxLength;
                    showWordLimit: boolean;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<"filled" | "outlined" | "standard">;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                n: (suffix?: string) => string;
                classes: typeof import("rattail").classes;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<"filled" | "outlined" | "standard">;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                variant: "filled" | "outlined" | "standard";
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            GroupLabel: import("vue").DefineComponent<{}, {
                n: (suffix?: string) => string;
                classes: typeof import("rattail").classes;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            default: () => never[];
        };
        modelValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        clearText: StringConstructor;
        targetActions: {
            type: import("vue").PropType<import("./types").TransferTargetAction[]>;
            default: () => never[];
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceFilterable: BooleanConstructor;
        targetFilterable: BooleanConstructor;
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
            default: (value: string, item: import("./types").TransferItem) => boolean;
        };
        sourceFilterPlaceholder: StringConstructor;
        targetFilterPlaceholder: StringConstructor;
        showSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceTitle: StringConstructor;
        targetTitle: StringConstructor;
        showSelectAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
        sourceSearchProps: {
            type: ObjectConstructor;
        };
        targetSearchProps: {
            type: ObjectConstructor;
        };
    }>> & Readonly<{
        onSearch?: ((value: string, type: "target" | "source") => any) | undefined;
        onChange?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        onRename?: ((value: import("./types").TransferValue, label: string) => any) | undefined;
        onTargetAction?: ((key: string, item: import("./types").TransferItem) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        dataInfo: import("vue").ComputedRef<{
            sourceInfo: import("./types").DataInfo;
            targetInfo: import("./types").DataInfo;
        }>;
        computedSelected: import("vue").ComputedRef<import("./types").TransferValue[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        sourceTitle: import("vue").ComputedRef<string>;
        targetTitle: import("vue").ComputedRef<string>;
        sourceShowSearch: import("vue").ComputedRef<boolean>;
        targetShowSearch: import("vue").ComputedRef<boolean>;
        mergedFilter: import("vue").ComputedRef<import("./types").TransferFilter>;
        mergedSourceSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedTargetSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedClearText: import("vue").ComputedRef<string>;
        handleSearch: (value: string, type: "target" | "source") => void;
        renameVisible: import("vue").Ref<boolean, boolean>;
        renameDraft: import("vue").Ref<string, string>;
        commitRename: () => void;
    }, {}, {}, {}, {
        filter: import("./types").TransferFilter;
        data: import("./types").TransferItem[];
        title: string[];
        disabled: boolean;
        defaultValue: import("./types").TransferTargetItem[];
        modelValue: import("./types").TransferTargetItem[];
        showSearch: boolean;
        showSelectAll: boolean;
        virtualScroll: boolean;
        targetDraggable: boolean;
        targetOperation: "menu" | "remove";
        targetActions: import("./types").TransferTargetAction[];
        sourceFilterable: boolean;
        targetFilterable: boolean;
        showSelected: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./types").TransferItem[]>;
        default: () => never[];
    };
    modelValue: {
        type: import("vue").PropType<import("./types").TransferTargetItem[]>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./types").TransferTargetItem[]>;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualScroll: BooleanConstructor;
    targetDraggable: BooleanConstructor;
    targetOperation: {
        type: import("vue").PropType<"remove" | "menu">;
        default: string;
    };
    clearText: StringConstructor;
    targetActions: {
        type: import("vue").PropType<import("./types").TransferTargetAction[]>;
        default: () => never[];
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    sourceFilterable: BooleanConstructor;
    targetFilterable: BooleanConstructor;
    filter: {
        type: import("vue").PropType<import("./types").TransferFilter>;
        default: (value: string, item: import("./types").TransferItem) => boolean;
    };
    sourceFilterPlaceholder: StringConstructor;
    targetFilterPlaceholder: StringConstructor;
    showSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    sourceTitle: StringConstructor;
    targetTitle: StringConstructor;
    showSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    sourceSearchProps: {
        type: ObjectConstructor;
    };
    targetSearchProps: {
        type: ObjectConstructor;
    };
}>> & Readonly<{
    onSearch?: ((value: string, type: "target" | "source") => any) | undefined;
    onChange?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
    onRename?: ((value: import("./types").TransferValue, label: string) => any) | undefined;
    onTargetAction?: ((key: string, item: import("./types").TransferItem) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    dataInfo: import("vue").ComputedRef<{
        sourceInfo: import("./types").DataInfo;
        targetInfo: import("./types").DataInfo;
    }>;
    computedSelected: import("vue").ComputedRef<import("./types").TransferValue[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    sourceTitle: import("vue").ComputedRef<string>;
    targetTitle: import("vue").ComputedRef<string>;
    sourceShowSearch: import("vue").ComputedRef<boolean>;
    targetShowSearch: import("vue").ComputedRef<boolean>;
    mergedFilter: import("vue").ComputedRef<import("./types").TransferFilter>;
    mergedSourceSearchProps: import("vue").ComputedRef<{
        placeholder: any;
    }>;
    mergedTargetSearchProps: import("vue").ComputedRef<{
        placeholder: any;
    }>;
    mergedClearText: import("vue").ComputedRef<string>;
    handleSearch: (value: string, type: "target" | "source") => void;
    renameVisible: import("vue").Ref<boolean, boolean>;
    renameDraft: import("vue").Ref<string, string>;
    commitRename: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: import("./types").TransferTargetItem[]) => true;
    change: (value: import("./types").TransferTargetItem[]) => true;
    search: (value: string, type: "target" | "source") => true;
    rename: (value: import("./types").TransferValue, label: string) => true;
    targetAction: (key: string, item: import("./types").TransferItem) => true;
}, string, {
    filter: import("./types").TransferFilter;
    data: import("./types").TransferItem[];
    title: string[];
    disabled: boolean;
    defaultValue: import("./types").TransferTargetItem[];
    modelValue: import("./types").TransferTargetItem[];
    showSearch: boolean;
    showSelectAll: boolean;
    virtualScroll: boolean;
    targetDraggable: boolean;
    targetOperation: "menu" | "remove";
    targetActions: import("./types").TransferTargetAction[];
    sourceFilterable: boolean;
    targetFilterable: boolean;
    showSelected: boolean;
}, {}, string, {}, {
    TransferView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"source" | "target">;
        };
        dataInfo: {
            type: import("vue").PropType<import("./types").DataInfo>;
            required: true;
        };
        title: StringConstructor;
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            required: true;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        selected: {
            type: import("vue").PropType<import("./types").TransferValue[]>;
            required: true;
        };
        showSearch: BooleanConstructor;
        showSelectAll: BooleanConstructor;
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        total: NumberConstructor;
        clearText: StringConstructor;
        simple: BooleanConstructor;
        searchProps: {
            type: ObjectConstructor;
        };
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
            required: true;
        };
    }>, {
        prefixCls: string;
        filteredData: import("vue").ComputedRef<import("./types").TransferItem[]>;
        filter: import("vue").Ref<string, string>;
        checked: import("vue").ComputedRef<boolean>;
        indeterminate: import("vue").ComputedRef<boolean>;
        countSelected: import("vue").ComputedRef<number>;
        countRendered: import("vue").ComputedRef<number>;
        handleSelectAllChange: (checked: boolean | (string | number | boolean)[]) => void;
        handleSearch: (value: string) => void;
        handleClear: () => void;
        showGroupTitle: (item: import("./types").TransferItem, index?: number) => boolean;
        handleTargetOrder: (items: import("./types").TransferItem[], detail: {
            oldValue?: import("./types").TransferItem;
            newValue?: import("./types").TransferItem;
        }) => void | undefined;
        transferCtx: import("./context").TransferContext | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "search"[], "search", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"source" | "target">;
        };
        dataInfo: {
            type: import("vue").PropType<import("./types").DataInfo>;
            required: true;
        };
        title: StringConstructor;
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            required: true;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        selected: {
            type: import("vue").PropType<import("./types").TransferValue[]>;
            required: true;
        };
        showSearch: BooleanConstructor;
        showSelectAll: BooleanConstructor;
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        total: NumberConstructor;
        clearText: StringConstructor;
        simple: BooleanConstructor;
        searchProps: {
            type: ObjectConstructor;
        };
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
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
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                    type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultChecked: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                value: import("vue").PropType<import("..").CheckboxValue>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultChecked: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                value: import("vue").PropType<import("..").CheckboxValue>;
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
                type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: import("vue").PropType<import("..").CheckboxValue>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultValue: {
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: () => never[];
                };
                max: NumberConstructor;
                options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultValue: {
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: () => never[];
                };
                max: NumberConstructor;
                options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                type: import("vue").PropType<import("..").ComponentSize>;
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
                type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<any[]>;
                };
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                            type: import("vue").PropType<number[]>;
                            default: () => number[];
                            validator: (value: number[]) => boolean;
                        };
                        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            validator: (value: import("..").ComponentSize) => boolean;
                        };
                        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                bottomOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                scrollbar: {
                    type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                    type: import("vue").PropType<any[]>;
                };
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                            type: import("vue").PropType<number[]>;
                            default: () => number[];
                            validator: (value: number[]) => boolean;
                        };
                        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            validator: (value: import("..").ComponentSize) => boolean;
                        };
                        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                bottomOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                scrollbar: {
                    type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                type: import("vue").PropType<any[]>;
            };
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                type: import("vue").PropType<import("..").PaginationProps>;
            };
            gridProps: {
                type: ObjectConstructor;
            };
            maxHeight: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            bottomOffset: {
                type: NumberConstructor;
                default: number;
            };
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("..").Direction>;
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
                type: import("vue").PropType<"source" | "target">;
            };
            data: {
                type: import("vue").PropType<import("./types").TransferItem>;
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
                type: import("vue").PropType<"remove" | "menu">;
                default: string;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<"source" | "target">;
            };
            data: {
                type: import("vue").PropType<import("./types").TransferItem>;
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
                type: import("vue").PropType<"remove" | "menu">;
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
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
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
                type: import("vue").PropType<"track" | "embed">;
                default: string;
            };
            outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            outerStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
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
                    type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            threshold: {
                type: NumberConstructor;
                default: number;
            };
            itemKey: {
                type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            threshold: {
                type: NumberConstructor;
                default: number;
            };
            itemKey: {
                type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
    Dialog: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            top: {
                type: (StringConstructor | NumberConstructor)[];
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClass: StringConstructor;
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            title: StringConstructor;
            message: StringConstructor;
            type: {
                type: import("vue").PropType<import("..").DialogType>;
            };
            simple: {
                type: BooleanConstructor;
                default: boolean;
            };
            titleAlign: {
                type: import("vue").PropType<"start" | "center">;
                default: string;
            };
            alignCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: BooleanConstructor;
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            escToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonText: StringConstructor;
            cancelButtonText: StringConstructor;
            confirmButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            cancelButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            footer: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement | false>;
                default: string;
            };
            dialogClass: {
                type: import("vue").PropType<string | any[]>;
            };
            dialogStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            beforeClose: {
                type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fullscreen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
            };
            dialogAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
            };
            bodyClass: {
                type: import("vue").PropType<string | any[]>;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            hideTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            ariaLabel: StringConstructor;
            closeButtonAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            zIndex: NumberConstructor;
        }>> & Readonly<{
            onCancel?: ((e: Event) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:open"?: ((show: boolean) => any) | undefined;
            onOpened?: (() => any) | undefined;
            onClosed?: (() => any) | undefined;
            onConfirm?: ((e: Event) => any) | undefined;
            "onClick-mask"?: (() => any) | undefined;
            "onKey-escape"?: (() => any) | undefined;
        }>, {
            prefixCls: string;
            mounted: import("vue").Ref<boolean, boolean>;
            computedOpen: import("vue").ComputedRef<boolean>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            confirmDisplayText: import("vue").ComputedRef<string>;
            cancelDisplayText: import("vue").ComputedRef<string>;
            zIndex: Readonly<import("vue").Ref<number, number>>;
            handleConfirm: (e: Event) => void;
            handleCancel: (e: Event) => void;
            handleMaskClick: (e: Event) => void;
            handleMaskMouseDown: (ev: Event) => void;
            handleOpened: () => void;
            handleClosed: () => void;
            mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
            mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
            mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
            mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
            dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperCls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            dialogCls: import("vue").ComputedRef<(string | any[] | {
                [x: string]: boolean;
            } | undefined)[]>;
            popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
            popupContainerDisabled: import("vue").ComputedRef<boolean>;
            handleMoveDown: (ev: MouseEvent) => void;
            showFooter: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (show: boolean) => true;
            confirm: (e: Event) => true;
            cancel: (e: Event) => true;
            open: () => true;
            opened: () => true;
            close: () => true;
            closed: () => true;
            'click-mask': () => true;
            'key-escape': () => true;
        }, import("vue").PublicProps, {
            closable: boolean;
            footer: boolean;
            mask: boolean;
            open: boolean;
            popupContainer: string | false | HTMLElement;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            draggable: boolean;
            escToClose: boolean;
            maskClosable: boolean;
            closeButtonAriaLabel: string;
            simple: boolean;
            alignCenter: boolean;
            confirmButton: boolean;
            cancelButton: boolean;
            confirmButtonLoading: boolean;
            cancelButtonLoading: boolean;
            confirmButtonDisabled: boolean;
            cancelButtonDisabled: boolean;
            fullscreen: boolean;
            titleAlign: "center" | "start";
            maskAnimationName: string;
            dialogAnimationName: string;
            hideTitle: boolean;
        }, true, {}, {}, {
            ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Button: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    click: (...args: any[]) => void;
                    touchstart: (...args: any[]) => void;
                }, import("vue").PublicProps, {
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
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, {
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
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                touchstart: (...args: any[]) => void;
            }, string, {
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
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                $slots: {
                    icon?: (props: {}) => any;
                } & {
                    default?: (props: {}) => any;
                };
            }) & {
                Group: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                    $slots: {
                        default?: (props: {}) => any;
                    };
                });
            }>;
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
            IconClose: {
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
            IconInfoCircleFill: {
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
            IconCheckCircleFill: {
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
            IconExclamationCircleFill: {
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
            IconCloseCircleFill: {
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
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            top: {
                type: (StringConstructor | NumberConstructor)[];
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClass: StringConstructor;
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            title: StringConstructor;
            message: StringConstructor;
            type: {
                type: import("vue").PropType<import("..").DialogType>;
            };
            simple: {
                type: BooleanConstructor;
                default: boolean;
            };
            titleAlign: {
                type: import("vue").PropType<"start" | "center">;
                default: string;
            };
            alignCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: BooleanConstructor;
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            escToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonText: StringConstructor;
            cancelButtonText: StringConstructor;
            confirmButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            cancelButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            footer: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement | false>;
                default: string;
            };
            dialogClass: {
                type: import("vue").PropType<string | any[]>;
            };
            dialogStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            beforeClose: {
                type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fullscreen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
            };
            dialogAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
            };
            bodyClass: {
                type: import("vue").PropType<string | any[]>;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            hideTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            ariaLabel: StringConstructor;
            closeButtonAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            zIndex: NumberConstructor;
        }>> & Readonly<{
            onCancel?: ((e: Event) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:open"?: ((show: boolean) => any) | undefined;
            onOpened?: (() => any) | undefined;
            onClosed?: (() => any) | undefined;
            onConfirm?: ((e: Event) => any) | undefined;
            "onClick-mask"?: (() => any) | undefined;
            "onKey-escape"?: (() => any) | undefined;
        }>, {
            prefixCls: string;
            mounted: import("vue").Ref<boolean, boolean>;
            computedOpen: import("vue").ComputedRef<boolean>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            confirmDisplayText: import("vue").ComputedRef<string>;
            cancelDisplayText: import("vue").ComputedRef<string>;
            zIndex: Readonly<import("vue").Ref<number, number>>;
            handleConfirm: (e: Event) => void;
            handleCancel: (e: Event) => void;
            handleMaskClick: (e: Event) => void;
            handleMaskMouseDown: (ev: Event) => void;
            handleOpened: () => void;
            handleClosed: () => void;
            mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
            mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
            mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
            mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
            dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperCls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            dialogCls: import("vue").ComputedRef<(string | any[] | {
                [x: string]: boolean;
            } | undefined)[]>;
            popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
            popupContainerDisabled: import("vue").ComputedRef<boolean>;
            handleMoveDown: (ev: MouseEvent) => void;
            showFooter: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
            closable: boolean;
            footer: boolean;
            mask: boolean;
            open: boolean;
            popupContainer: string | false | HTMLElement;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            draggable: boolean;
            escToClose: boolean;
            maskClosable: boolean;
            closeButtonAriaLabel: string;
            simple: boolean;
            alignCenter: boolean;
            confirmButton: boolean;
            cancelButton: boolean;
            confirmButtonLoading: boolean;
            cancelButtonLoading: boolean;
            confirmButtonDisabled: boolean;
            cancelButtonDisabled: boolean;
            fullscreen: boolean;
            titleAlign: "center" | "start";
            maskAnimationName: string;
            dialogAnimationName: string;
            hideTitle: boolean;
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
        width: {
            type: (StringConstructor | NumberConstructor)[];
        };
        top: {
            type: (StringConstructor | NumberConstructor)[];
        };
        mask: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClass: StringConstructor;
        maskStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        title: StringConstructor;
        message: StringConstructor;
        type: {
            type: import("vue").PropType<import("..").DialogType>;
        };
        simple: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleAlign: {
            type: import("vue").PropType<"start" | "center">;
            default: string;
        };
        alignCenter: {
            type: BooleanConstructor;
            default: boolean;
        };
        unmountOnClose: BooleanConstructor;
        maskClosable: {
            type: BooleanConstructor;
            default: boolean;
        };
        escToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        cancelButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButtonText: StringConstructor;
        cancelButtonText: StringConstructor;
        confirmButtonLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        cancelButtonLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButtonDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        cancelButtonDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButtonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        cancelButtonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        footer: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement | false>;
            default: string;
        };
        dialogClass: {
            type: import("vue").PropType<string | any[]>;
        };
        dialogStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        beforeClose: {
            type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        fullscreen: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskAnimationName: {
            type: StringConstructor;
            default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
        };
        dialogAnimationName: {
            type: StringConstructor;
            default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
        };
        bodyClass: {
            type: import("vue").PropType<string | any[]>;
        };
        bodyStyle: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        hideTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
        ariaLabel: StringConstructor;
        closeButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        zIndex: NumberConstructor;
    }>> & Readonly<{
        onCancel?: ((e: Event) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:open"?: ((show: boolean) => any) | undefined;
        onOpened?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onConfirm?: ((e: Event) => any) | undefined;
        "onClick-mask"?: (() => any) | undefined;
        "onKey-escape"?: (() => any) | undefined;
    }>, {
        prefixCls: string;
        mounted: import("vue").Ref<boolean, boolean>;
        computedOpen: import("vue").ComputedRef<boolean>;
        containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        confirmDisplayText: import("vue").ComputedRef<string>;
        cancelDisplayText: import("vue").ComputedRef<string>;
        zIndex: Readonly<import("vue").Ref<number, number>>;
        handleConfirm: (e: Event) => void;
        handleCancel: (e: Event) => void;
        handleMaskClick: (e: Event) => void;
        handleMaskMouseDown: (ev: Event) => void;
        handleOpened: () => void;
        handleClosed: () => void;
        mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
        mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
        mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
        mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
        dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        wrapperCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        dialogCls: import("vue").ComputedRef<(string | any[] | {
            [x: string]: boolean;
        } | undefined)[]>;
        popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
        popupContainerDisabled: import("vue").ComputedRef<boolean>;
        handleMoveDown: (ev: MouseEvent) => void;
        showFooter: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:open': (show: boolean) => true;
        confirm: (e: Event) => true;
        cancel: (e: Event) => true;
        open: () => true;
        opened: () => true;
        close: () => true;
        closed: () => true;
        'click-mask': () => true;
        'key-escape': () => true;
    }, string, {
        closable: boolean;
        footer: boolean;
        mask: boolean;
        open: boolean;
        popupContainer: string | false | HTMLElement;
        defaultOpen: boolean;
        unmountOnClose: boolean;
        draggable: boolean;
        escToClose: boolean;
        maskClosable: boolean;
        closeButtonAriaLabel: string;
        simple: boolean;
        alignCenter: boolean;
        confirmButton: boolean;
        cancelButton: boolean;
        confirmButtonLoading: boolean;
        cancelButtonLoading: boolean;
        confirmButtonDisabled: boolean;
        cancelButtonDisabled: boolean;
        fullscreen: boolean;
        titleAlign: "center" | "start";
        maskAnimationName: string;
        dialogAnimationName: string;
        hideTitle: boolean;
    }, {}, string, {}, {
        ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Button: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                touchstart: (...args: any[]) => void;
            }, import("vue").PublicProps, {
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
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, {
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
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            variant: {
                type: import("vue").PropType<import("../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../button").ButtonVariant;
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
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            touchstart: (...args: any[]) => void;
        }, string, {
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
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                icon?: (props: {}) => any;
            } & {
                default?: (props: {}) => any;
            };
        }) & {
            Group: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                };
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
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
                buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                vertical: boolean;
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                color: string;
                variant: import("../button").ButtonVariant;
                elevation: number | boolean;
                status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                textColor: string;
                stacked: boolean;
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                $slots: {
                    default?: (props: {}) => any;
                };
            });
        }>;
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
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
                type: import("vue").PropType<import("..").ComponentSize>;
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
        IconClose: {
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
        IconInfoCircleFill: {
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
        IconCheckCircleFill: {
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
        IconExclamationCircleFill: {
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
        IconCloseCircleFill: {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        close: () => void;
        setDefaultOptions: (_options: import("..").DialogConfig) => void;
        resetDefaultOptions: () => void;
        install: (app: import("vue").App, options?: import("../_utils/types").CedarOptions) => void;
        _context: import("vue").AppContext | null;
        open: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        confirm: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        alert: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        info: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        success: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        warning: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        error: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
    };
    Input: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: BooleanConstructor;
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            maxLength: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
            };
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            input: (value: string, ev: Event) => true;
            change: (value: string, ev: Event) => true;
            pressEnter: (ev: KeyboardEvent) => true;
            clear: (ev: MouseEvent) => true;
            focus: (ev: FocusEvent) => true;
            blur: (ev: FocusEvent) => true;
        }, import("vue").PublicProps, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: BooleanConstructor;
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            maxLength: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
            };
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
        type: {
            type: import("vue").PropType<import("..").InputType>;
            default: string;
            validator: (value: unknown) => value is import("..").InputType;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        input: (value: string, ev: Event) => true;
        change: (value: string, ev: Event) => true;
        pressEnter: (ev: KeyboardEvent) => true;
        clear: (ev: MouseEvent) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, string, {
        error: boolean;
        readonly: boolean;
        type: "text" | "password";
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Password: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibility: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultVisibility: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibilityToggle: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            inputRef: import("vue").Ref<any, any>;
            mergedVisible: import("vue").ComputedRef<boolean>;
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            handleInvisible: () => void;
            t: (key: string, ...args: any[]) => string;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibility-change" | "update:visibility")[], "visibility-change" | "update:visibility", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibility: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultVisibility: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibilityToggle: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            "onVisibility-change"?: ((...args: any[]) => any) | undefined;
            "onUpdate:visibility"?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            visibility: boolean;
            defaultVisibility: boolean;
            visibilityToggle: boolean;
        }, {}, {
            IconEye: {
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
            IconEyeInvisible: {
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
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
            Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:modelValue': (value: string) => true;
                input: (value: string, ev: Event) => true;
                change: (value: string, ev: Event) => true;
                pressEnter: (ev: KeyboardEvent) => true;
                clear: (ev: MouseEvent) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
            }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: MouseEvent) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: string, ev: Event) => any) | undefined;
                onInput?: ((value: string, ev: Event) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
            }>, {
                error: boolean;
                readonly: boolean;
                type: "text" | "password";
                disabled: boolean;
                defaultValue: string;
                clearable: boolean;
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        GroupLabel: import("vue").DefineComponent<{}, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type TransferInstance = InstanceType<typeof _Transfer>;
export type { TransferFilter, TransferFixed, TransferItem, TransferTargetAction, TransferTargetItem, TransferTargetOperation, TransferValue, } from './types';
export declare const _TransferComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            default: () => never[];
        };
        modelValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        clearText: StringConstructor;
        targetActions: {
            type: import("vue").PropType<import("./types").TransferTargetAction[]>;
            default: () => never[];
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceFilterable: BooleanConstructor;
        targetFilterable: BooleanConstructor;
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
            default: (value: string, item: import("./types").TransferItem) => boolean;
        };
        sourceFilterPlaceholder: StringConstructor;
        targetFilterPlaceholder: StringConstructor;
        showSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceTitle: StringConstructor;
        targetTitle: StringConstructor;
        showSelectAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
        sourceSearchProps: {
            type: ObjectConstructor;
        };
        targetSearchProps: {
            type: ObjectConstructor;
        };
    }>> & Readonly<{
        onSearch?: ((value: string, type: "target" | "source") => any) | undefined;
        onChange?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        onRename?: ((value: import("./types").TransferValue, label: string) => any) | undefined;
        onTargetAction?: ((key: string, item: import("./types").TransferItem) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        dataInfo: import("vue").ComputedRef<{
            sourceInfo: import("./types").DataInfo;
            targetInfo: import("./types").DataInfo;
        }>;
        computedSelected: import("vue").ComputedRef<import("./types").TransferValue[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        sourceTitle: import("vue").ComputedRef<string>;
        targetTitle: import("vue").ComputedRef<string>;
        sourceShowSearch: import("vue").ComputedRef<boolean>;
        targetShowSearch: import("vue").ComputedRef<boolean>;
        mergedFilter: import("vue").ComputedRef<import("./types").TransferFilter>;
        mergedSourceSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedTargetSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedClearText: import("vue").ComputedRef<string>;
        handleSearch: (value: string, type: "target" | "source") => void;
        renameVisible: import("vue").Ref<boolean, boolean>;
        renameDraft: import("vue").Ref<string, string>;
        commitRename: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: import("./types").TransferTargetItem[]) => true;
        change: (value: import("./types").TransferTargetItem[]) => true;
        search: (value: string, type: "target" | "source") => true;
        rename: (value: import("./types").TransferValue, label: string) => true;
        targetAction: (key: string, item: import("./types").TransferItem) => true;
    }, import("vue").PublicProps, {
        filter: import("./types").TransferFilter;
        data: import("./types").TransferItem[];
        title: string[];
        disabled: boolean;
        defaultValue: import("./types").TransferTargetItem[];
        modelValue: import("./types").TransferTargetItem[];
        showSearch: boolean;
        showSelectAll: boolean;
        virtualScroll: boolean;
        targetDraggable: boolean;
        targetOperation: "menu" | "remove";
        targetActions: import("./types").TransferTargetAction[];
        sourceFilterable: boolean;
        targetFilterable: boolean;
        showSelected: boolean;
    }, true, {}, {}, {
        TransferView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<"source" | "target">;
            };
            dataInfo: {
                type: import("vue").PropType<import("./types").DataInfo>;
                required: true;
            };
            title: StringConstructor;
            data: {
                type: import("vue").PropType<import("./types").TransferItem[]>;
                required: true;
            };
            disabled: BooleanConstructor;
            clearable: BooleanConstructor;
            selected: {
                type: import("vue").PropType<import("./types").TransferValue[]>;
                required: true;
            };
            showSearch: BooleanConstructor;
            showSelectAll: BooleanConstructor;
            virtualScroll: BooleanConstructor;
            targetDraggable: BooleanConstructor;
            targetOperation: {
                type: import("vue").PropType<"remove" | "menu">;
                default: string;
            };
            total: NumberConstructor;
            clearText: StringConstructor;
            simple: BooleanConstructor;
            searchProps: {
                type: ObjectConstructor;
            };
            filter: {
                type: import("vue").PropType<import("./types").TransferFilter>;
                required: true;
            };
        }>, {
            prefixCls: string;
            filteredData: import("vue").ComputedRef<import("./types").TransferItem[]>;
            filter: import("vue").Ref<string, string>;
            checked: import("vue").ComputedRef<boolean>;
            indeterminate: import("vue").ComputedRef<boolean>;
            countSelected: import("vue").ComputedRef<number>;
            countRendered: import("vue").ComputedRef<number>;
            handleSelectAllChange: (checked: boolean | (string | number | boolean)[]) => void;
            handleSearch: (value: string) => void;
            handleClear: () => void;
            showGroupTitle: (item: import("./types").TransferItem, index?: number) => boolean;
            handleTargetOrder: (items: import("./types").TransferItem[], detail: {
                oldValue?: import("./types").TransferItem;
                newValue?: import("./types").TransferItem;
            }) => void | undefined;
            transferCtx: import("./context").TransferContext | undefined;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "search"[], "search", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<"source" | "target">;
            };
            dataInfo: {
                type: import("vue").PropType<import("./types").DataInfo>;
                required: true;
            };
            title: StringConstructor;
            data: {
                type: import("vue").PropType<import("./types").TransferItem[]>;
                required: true;
            };
            disabled: BooleanConstructor;
            clearable: BooleanConstructor;
            selected: {
                type: import("vue").PropType<import("./types").TransferValue[]>;
                required: true;
            };
            showSearch: BooleanConstructor;
            showSelectAll: BooleanConstructor;
            virtualScroll: BooleanConstructor;
            targetDraggable: BooleanConstructor;
            targetOperation: {
                type: import("vue").PropType<"remove" | "menu">;
                default: string;
            };
            total: NumberConstructor;
            clearText: StringConstructor;
            simple: BooleanConstructor;
            searchProps: {
                type: ObjectConstructor;
            };
            filter: {
                type: import("vue").PropType<import("./types").TransferFilter>;
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
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                        type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultChecked: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    value: import("vue").PropType<import("..").CheckboxValue>;
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
                            type: import("vue").PropType<import("..").ComponentSize>;
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
                            type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultChecked: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    value: import("vue").PropType<import("..").CheckboxValue>;
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
                    type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultChecked: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                value: import("vue").PropType<import("..").CheckboxValue>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultValue: {
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: () => never[];
                    };
                    max: NumberConstructor;
                    options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: undefined;
                    };
                    defaultValue: {
                        type: import("vue").PropType<import("..").CheckboxValue[]>;
                        default: () => never[];
                    };
                    max: NumberConstructor;
                    options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<any[]>;
                    };
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                                type: import("vue").PropType<number[]>;
                                default: () => number[];
                                validator: (value: number[]) => boolean;
                            };
                            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                validator: (value: import("..").ComponentSize) => boolean;
                            };
                            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                        type: import("vue").PropType<string | number>;
                        default: number;
                    };
                    bottomOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    scrollbar: {
                        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                        type: import("vue").PropType<any[]>;
                    };
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                                type: import("vue").PropType<number[]>;
                                default: () => number[];
                                validator: (value: number[]) => boolean;
                            };
                            pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                validator: (value: import("..").ComponentSize) => boolean;
                            };
                            pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                            activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                        type: import("vue").PropType<string | number>;
                        default: number;
                    };
                    bottomOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    scrollbar: {
                        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                    type: import("vue").PropType<any[]>;
                };
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                            type: import("vue").PropType<number[]>;
                            default: () => number[];
                            validator: (value: number[]) => boolean;
                        };
                        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            validator: (value: import("..").ComponentSize) => boolean;
                        };
                        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                bottomOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                scrollbar: {
                    type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                            type: import("vue").PropType<import("..").Direction>;
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
                            type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<"source" | "target">;
                };
                data: {
                    type: import("vue").PropType<import("./types").TransferItem>;
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
                    type: import("vue").PropType<"remove" | "menu">;
                    default: string;
                };
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: import("vue").PropType<"source" | "target">;
                };
                data: {
                    type: import("vue").PropType<import("./types").TransferItem>;
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
                    type: import("vue").PropType<"remove" | "menu">;
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
                        type: import("vue").PropType<"track" | "embed">;
                        default: string;
                    };
                    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    outerStyle: {
                        type: import("vue").PropType<import("vue").StyleValue>;
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
                            type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                        };
                        direction: {
                            type: import("vue").PropType<import("..").Direction>;
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
                            type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                        };
                        direction: {
                            type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<"track" | "embed">;
                        default: string;
                    };
                    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    outerStyle: {
                        type: import("vue").PropType<import("vue").StyleValue>;
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
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
        Dialog: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                top: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClass: StringConstructor;
                maskStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                title: StringConstructor;
                message: StringConstructor;
                type: {
                    type: import("vue").PropType<import("..").DialogType>;
                };
                simple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                titleAlign: {
                    type: import("vue").PropType<"start" | "center">;
                    default: string;
                };
                alignCenter: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: BooleanConstructor;
                maskClosable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                escToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonText: StringConstructor;
                cancelButtonText: StringConstructor;
                confirmButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                cancelButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                footer: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement | false>;
                    default: string;
                };
                dialogClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                dialogStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                beforeClose: {
                    type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                fullscreen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
                };
                dialogAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
                };
                bodyClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                bodyStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
                };
                hideTitle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                ariaLabel: StringConstructor;
                closeButtonAriaLabel: {
                    type: StringConstructor;
                    default: string;
                };
                zIndex: NumberConstructor;
            }>> & Readonly<{
                onCancel?: ((e: Event) => any) | undefined;
                onClose?: (() => any) | undefined;
                onOpen?: (() => any) | undefined;
                "onUpdate:open"?: ((show: boolean) => any) | undefined;
                onOpened?: (() => any) | undefined;
                onClosed?: (() => any) | undefined;
                onConfirm?: ((e: Event) => any) | undefined;
                "onClick-mask"?: (() => any) | undefined;
                "onKey-escape"?: (() => any) | undefined;
            }>, {
                prefixCls: string;
                mounted: import("vue").Ref<boolean, boolean>;
                computedOpen: import("vue").ComputedRef<boolean>;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                confirmDisplayText: import("vue").ComputedRef<string>;
                cancelDisplayText: import("vue").ComputedRef<string>;
                zIndex: Readonly<import("vue").Ref<number, number>>;
                handleConfirm: (e: Event) => void;
                handleCancel: (e: Event) => void;
                handleMaskClick: (e: Event) => void;
                handleMaskMouseDown: (ev: Event) => void;
                handleOpened: () => void;
                handleClosed: () => void;
                mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
                mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
                mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
                mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
                dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperCls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                dialogCls: import("vue").ComputedRef<(string | any[] | {
                    [x: string]: boolean;
                } | undefined)[]>;
                popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
                popupContainerDisabled: import("vue").ComputedRef<boolean>;
                handleMoveDown: (ev: MouseEvent) => void;
                showFooter: import("vue").ComputedRef<boolean>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (show: boolean) => true;
                confirm: (e: Event) => true;
                cancel: (e: Event) => true;
                open: () => true;
                opened: () => true;
                close: () => true;
                closed: () => true;
                'click-mask': () => true;
                'key-escape': () => true;
            }, import("vue").PublicProps, {
                closable: boolean;
                footer: boolean;
                mask: boolean;
                open: boolean;
                popupContainer: string | false | HTMLElement;
                defaultOpen: boolean;
                unmountOnClose: boolean;
                draggable: boolean;
                escToClose: boolean;
                maskClosable: boolean;
                closeButtonAriaLabel: string;
                simple: boolean;
                alignCenter: boolean;
                confirmButton: boolean;
                cancelButton: boolean;
                confirmButtonLoading: boolean;
                cancelButtonLoading: boolean;
                confirmButtonDisabled: boolean;
                cancelButtonDisabled: boolean;
                fullscreen: boolean;
                titleAlign: "center" | "start";
                maskAnimationName: string;
                dialogAnimationName: string;
                hideTitle: boolean;
            }, true, {}, {}, {
                ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                Button: import("../_utils/global-config").CedarComponentWithInstall<{
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
                            validator: (value: unknown) => value is import("..").SemanticStatus;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button").ButtonVariant>;
                            validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        click: (...args: any[]) => void;
                        touchstart: (...args: any[]) => void;
                    }, import("vue").PublicProps, {
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
                    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, Readonly<import("vue").ExtractPropTypes<{
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
                            validator: (value: unknown) => value is import("..").SemanticStatus;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button").ButtonVariant>;
                            validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                    }>, {}, {}, {}, {}, {
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
                    }>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    click: (...args: any[]) => void;
                    touchstart: (...args: any[]) => void;
                }, string, {
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
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                    $slots: {
                        icon?: (props: {}) => any;
                    } & {
                        default?: (props: {}) => any;
                    };
                }) & {
                    Group: {
                        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                default: string;
                            };
                            status: {
                                type: import("vue").PropType<import("..").SemanticStatus>;
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
                            buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                            vertical: boolean;
                            size: "xs" | "sm" | "md" | "lg" | "xl";
                            disabled: boolean;
                            color: string;
                            variant: import("../button").ButtonVariant;
                            elevation: number | boolean;
                            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                            textColor: string;
                            stacked: boolean;
                        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                            P: {};
                            B: {};
                            D: {};
                            C: {};
                            M: {};
                            Defaults: {};
                        }, Readonly<import("vue").ExtractPropTypes<{
                            size: {
                                type: import("vue").PropType<import("..").ComponentSize>;
                                default: string;
                            };
                            status: {
                                type: import("vue").PropType<import("..").SemanticStatus>;
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
                            buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                        }, {}, {}, {}, {
                            vertical: boolean;
                            size: "xs" | "sm" | "md" | "lg" | "xl";
                            disabled: boolean;
                            color: string;
                            variant: import("../button").ButtonVariant;
                            elevation: number | boolean;
                            status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                            textColor: string;
                            stacked: boolean;
                        }>;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                        $slots: {
                            default?: (props: {}) => any;
                        };
                    });
                }>;
                IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefix: {
                        type: StringConstructor;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                IconClose: {
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
                IconInfoCircleFill: {
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
                IconCheckCircleFill: {
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
                IconExclamationCircleFill: {
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
                IconCloseCircleFill: {
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
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                top: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClass: StringConstructor;
                maskStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                title: StringConstructor;
                message: StringConstructor;
                type: {
                    type: import("vue").PropType<import("..").DialogType>;
                };
                simple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                titleAlign: {
                    type: import("vue").PropType<"start" | "center">;
                    default: string;
                };
                alignCenter: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: BooleanConstructor;
                maskClosable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                escToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButton: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonText: StringConstructor;
                cancelButtonText: StringConstructor;
                confirmButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonLoading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                cancelButtonDisabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirmButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                cancelButtonProps: {
                    type: import("vue").PropType<import("..").ButtonProps>;
                };
                footer: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement | false>;
                    default: string;
                };
                dialogClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                dialogStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                beforeClose: {
                    type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                fullscreen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
                };
                dialogAnimationName: {
                    type: StringConstructor;
                    default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
                };
                bodyClass: {
                    type: import("vue").PropType<string | any[]>;
                };
                bodyStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
                };
                hideTitle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                ariaLabel: StringConstructor;
                closeButtonAriaLabel: {
                    type: StringConstructor;
                    default: string;
                };
                zIndex: NumberConstructor;
            }>> & Readonly<{
                onCancel?: ((e: Event) => any) | undefined;
                onClose?: (() => any) | undefined;
                onOpen?: (() => any) | undefined;
                "onUpdate:open"?: ((show: boolean) => any) | undefined;
                onOpened?: (() => any) | undefined;
                onClosed?: (() => any) | undefined;
                onConfirm?: ((e: Event) => any) | undefined;
                "onClick-mask"?: (() => any) | undefined;
                "onKey-escape"?: (() => any) | undefined;
            }>, {
                prefixCls: string;
                mounted: import("vue").Ref<boolean, boolean>;
                computedOpen: import("vue").ComputedRef<boolean>;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                confirmDisplayText: import("vue").ComputedRef<string>;
                cancelDisplayText: import("vue").ComputedRef<string>;
                zIndex: Readonly<import("vue").Ref<number, number>>;
                handleConfirm: (e: Event) => void;
                handleCancel: (e: Event) => void;
                handleMaskClick: (e: Event) => void;
                handleMaskMouseDown: (ev: Event) => void;
                handleOpened: () => void;
                handleClosed: () => void;
                mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
                mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
                mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
                mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
                dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                wrapperCls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                dialogCls: import("vue").ComputedRef<(string | any[] | {
                    [x: string]: boolean;
                } | undefined)[]>;
                popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
                popupContainerDisabled: import("vue").ComputedRef<boolean>;
                handleMoveDown: (ev: MouseEvent) => void;
                showFooter: import("vue").ComputedRef<boolean>;
            }, {}, {}, {}, {
                closable: boolean;
                footer: boolean;
                mask: boolean;
                open: boolean;
                popupContainer: string | false | HTMLElement;
                defaultOpen: boolean;
                unmountOnClose: boolean;
                draggable: boolean;
                escToClose: boolean;
                maskClosable: boolean;
                closeButtonAriaLabel: string;
                simple: boolean;
                alignCenter: boolean;
                confirmButton: boolean;
                cancelButton: boolean;
                confirmButtonLoading: boolean;
                cancelButtonLoading: boolean;
                confirmButtonDisabled: boolean;
                cancelButtonDisabled: boolean;
                fullscreen: boolean;
                titleAlign: "center" | "start";
                maskAnimationName: string;
                dialogAnimationName: string;
                hideTitle: boolean;
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
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            top: {
                type: (StringConstructor | NumberConstructor)[];
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClass: StringConstructor;
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            title: StringConstructor;
            message: StringConstructor;
            type: {
                type: import("vue").PropType<import("..").DialogType>;
            };
            simple: {
                type: BooleanConstructor;
                default: boolean;
            };
            titleAlign: {
                type: import("vue").PropType<"start" | "center">;
                default: string;
            };
            alignCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: BooleanConstructor;
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            escToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonText: StringConstructor;
            cancelButtonText: StringConstructor;
            confirmButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            cancelButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            footer: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement | false>;
                default: string;
            };
            dialogClass: {
                type: import("vue").PropType<string | any[]>;
            };
            dialogStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            beforeClose: {
                type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fullscreen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
            };
            dialogAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
            };
            bodyClass: {
                type: import("vue").PropType<string | any[]>;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            hideTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            ariaLabel: StringConstructor;
            closeButtonAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            zIndex: NumberConstructor;
        }>> & Readonly<{
            onCancel?: ((e: Event) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:open"?: ((show: boolean) => any) | undefined;
            onOpened?: (() => any) | undefined;
            onClosed?: (() => any) | undefined;
            onConfirm?: ((e: Event) => any) | undefined;
            "onClick-mask"?: (() => any) | undefined;
            "onKey-escape"?: (() => any) | undefined;
        }>, {
            prefixCls: string;
            mounted: import("vue").Ref<boolean, boolean>;
            computedOpen: import("vue").ComputedRef<boolean>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            confirmDisplayText: import("vue").ComputedRef<string>;
            cancelDisplayText: import("vue").ComputedRef<string>;
            zIndex: Readonly<import("vue").Ref<number, number>>;
            handleConfirm: (e: Event) => void;
            handleCancel: (e: Event) => void;
            handleMaskClick: (e: Event) => void;
            handleMaskMouseDown: (ev: Event) => void;
            handleOpened: () => void;
            handleClosed: () => void;
            mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
            mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
            mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
            mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
            dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperCls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            dialogCls: import("vue").ComputedRef<(string | any[] | {
                [x: string]: boolean;
            } | undefined)[]>;
            popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
            popupContainerDisabled: import("vue").ComputedRef<boolean>;
            handleMoveDown: (ev: MouseEvent) => void;
            showFooter: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (show: boolean) => true;
            confirm: (e: Event) => true;
            cancel: (e: Event) => true;
            open: () => true;
            opened: () => true;
            close: () => true;
            closed: () => true;
            'click-mask': () => true;
            'key-escape': () => true;
        }, string, {
            closable: boolean;
            footer: boolean;
            mask: boolean;
            open: boolean;
            popupContainer: string | false | HTMLElement;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            draggable: boolean;
            escToClose: boolean;
            maskClosable: boolean;
            closeButtonAriaLabel: string;
            simple: boolean;
            alignCenter: boolean;
            confirmButton: boolean;
            cancelButton: boolean;
            confirmButtonLoading: boolean;
            cancelButtonLoading: boolean;
            confirmButtonDisabled: boolean;
            cancelButtonDisabled: boolean;
            fullscreen: boolean;
            titleAlign: "center" | "start";
            maskAnimationName: string;
            dialogAnimationName: string;
            hideTitle: boolean;
        }, {}, string, {}, {
            ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Button: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    click: (...args: any[]) => void;
                    touchstart: (...args: any[]) => void;
                }, import("vue").PublicProps, {
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
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, {
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
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                touchstart: (...args: any[]) => void;
            }, string, {
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
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                $slots: {
                    icon?: (props: {}) => any;
                } & {
                    default?: (props: {}) => any;
                };
            }) & {
                Group: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                    $slots: {
                        default?: (props: {}) => any;
                    };
                });
            }>;
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
            IconClose: {
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
            IconInfoCircleFill: {
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
            IconCheckCircleFill: {
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
            IconExclamationCircleFill: {
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
            IconCloseCircleFill: {
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
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
            close: () => void;
            setDefaultOptions: (_options: import("..").DialogConfig) => void;
            resetDefaultOptions: () => void;
            install: (app: import("vue").App, options?: import("../_utils/types").CedarOptions) => void;
            _context: import("vue").AppContext | null;
            open: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            confirm: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            alert: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            info: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            success: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            warning: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
            error: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        };
        Input: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: MouseEvent) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: string, ev: Event) => any) | undefined;
                onInput?: ((value: string, ev: Event) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:modelValue': (value: string) => true;
                input: (value: string, ev: Event) => true;
                change: (value: string, ev: Event) => true;
                pressEnter: (ev: KeyboardEvent) => true;
                clear: (ev: MouseEvent) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
            }, import("vue").PublicProps, {
                error: boolean;
                readonly: boolean;
                type: "text" | "password";
                disabled: boolean;
                defaultValue: string;
                clearable: boolean;
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: MouseEvent) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: string, ev: Event) => any) | undefined;
                onInput?: ((value: string, ev: Event) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, {
                error: boolean;
                readonly: boolean;
                type: "text" | "password";
                disabled: boolean;
                defaultValue: string;
                clearable: boolean;
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: BooleanConstructor;
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            maxLength: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
            };
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            input: (value: string, ev: Event) => true;
            change: (value: string, ev: Event) => true;
            pressEnter: (ev: KeyboardEvent) => true;
            clear: (ev: MouseEvent) => true;
            focus: (ev: FocusEvent) => true;
            blur: (ev: FocusEvent) => true;
        }, string, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
            Password: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibility: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultVisibility: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibilityToggle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                inputRef: import("vue").Ref<any, any>;
                mergedVisible: import("vue").ComputedRef<boolean>;
                classes: typeof import("rattail").classes;
                n: (suffix?: string) => string;
                handleInvisible: () => void;
                t: (key: string, ...args: any[]) => string;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibility-change" | "update:visibility")[], "visibility-change" | "update:visibility", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibility: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultVisibility: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                visibilityToggle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                "onVisibility-change"?: ((...args: any[]) => any) | undefined;
                "onUpdate:visibility"?: ((...args: any[]) => any) | undefined;
            }>, {
                disabled: boolean;
                visibility: boolean;
                defaultVisibility: boolean;
                visibilityToggle: boolean;
            }, {}, {
                IconEye: {
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
                IconEyeInvisible: {
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
                IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefix: {
                        type: StringConstructor;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    variant: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                    };
                    modelValue: StringConstructor;
                    defaultValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    disabled: BooleanConstructor;
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    placeholder: StringConstructor;
                    maxLength: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                        default: number;
                    };
                    showWordLimit: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                    type: {
                        type: import("vue").PropType<import("..").InputType>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputType;
                    };
                }>, {
                    inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                    render: () => import("vue/jsx-runtime").JSX.Element;
                }, {}, {}, {
                    focus(): void;
                    blur(): void;
                }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:modelValue': (value: string) => true;
                    input: (value: string, ev: Event) => true;
                    change: (value: string, ev: Event) => true;
                    pressEnter: (ev: KeyboardEvent) => true;
                    clear: (ev: MouseEvent) => true;
                    focus: (ev: FocusEvent) => true;
                    blur: (ev: FocusEvent) => true;
                }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    variant: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                        validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                    };
                    modelValue: StringConstructor;
                    defaultValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        validator: (value: unknown) => value is import("..").ComponentSize;
                    };
                    clearable: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    disabled: BooleanConstructor;
                    readonly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    error: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    placeholder: StringConstructor;
                    maxLength: {
                        type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                        default: number;
                    };
                    showWordLimit: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                    wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                    inputAttrs: import("vue").PropType<Record<string, unknown>>;
                    type: {
                        type: import("vue").PropType<import("..").InputType>;
                        default: string;
                        validator: (value: unknown) => value is import("..").InputType;
                    };
                }>> & Readonly<{
                    onFocus?: ((ev: FocusEvent) => any) | undefined;
                    onClear?: ((ev: MouseEvent) => any) | undefined;
                    onBlur?: ((ev: FocusEvent) => any) | undefined;
                    onChange?: ((value: string, ev: Event) => any) | undefined;
                    onInput?: ((value: string, ev: Event) => any) | undefined;
                    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                    onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
                }>, {
                    error: boolean;
                    readonly: boolean;
                    type: "text" | "password";
                    disabled: boolean;
                    defaultValue: string;
                    clearable: boolean;
                    maxLength: import("../_utils/form-control").FormControlMaxLength;
                    showWordLimit: boolean;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<"filled" | "outlined" | "standard">;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                n: (suffix?: string) => string;
                classes: typeof import("rattail").classes;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<"filled" | "outlined" | "standard">;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                variant: "filled" | "outlined" | "standard";
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            GroupLabel: import("vue").DefineComponent<{}, {
                n: (suffix?: string) => string;
                classes: typeof import("rattail").classes;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            default: () => never[];
        };
        modelValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: undefined;
        };
        defaultValue: {
            type: import("vue").PropType<import("./types").TransferTargetItem[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        clearText: StringConstructor;
        targetActions: {
            type: import("vue").PropType<import("./types").TransferTargetAction[]>;
            default: () => never[];
        };
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceFilterable: BooleanConstructor;
        targetFilterable: BooleanConstructor;
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
            default: (value: string, item: import("./types").TransferItem) => boolean;
        };
        sourceFilterPlaceholder: StringConstructor;
        targetFilterPlaceholder: StringConstructor;
        showSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        sourceTitle: StringConstructor;
        targetTitle: StringConstructor;
        showSelectAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
        sourceSearchProps: {
            type: ObjectConstructor;
        };
        targetSearchProps: {
            type: ObjectConstructor;
        };
    }>> & Readonly<{
        onSearch?: ((value: string, type: "target" | "source") => any) | undefined;
        onChange?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
        onRename?: ((value: import("./types").TransferValue, label: string) => any) | undefined;
        onTargetAction?: ((key: string, item: import("./types").TransferItem) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        dataInfo: import("vue").ComputedRef<{
            sourceInfo: import("./types").DataInfo;
            targetInfo: import("./types").DataInfo;
        }>;
        computedSelected: import("vue").ComputedRef<import("./types").TransferValue[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        sourceTitle: import("vue").ComputedRef<string>;
        targetTitle: import("vue").ComputedRef<string>;
        sourceShowSearch: import("vue").ComputedRef<boolean>;
        targetShowSearch: import("vue").ComputedRef<boolean>;
        mergedFilter: import("vue").ComputedRef<import("./types").TransferFilter>;
        mergedSourceSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedTargetSearchProps: import("vue").ComputedRef<{
            placeholder: any;
        }>;
        mergedClearText: import("vue").ComputedRef<string>;
        handleSearch: (value: string, type: "target" | "source") => void;
        renameVisible: import("vue").Ref<boolean, boolean>;
        renameDraft: import("vue").Ref<string, string>;
        commitRename: () => void;
    }, {}, {}, {}, {
        filter: import("./types").TransferFilter;
        data: import("./types").TransferItem[];
        title: string[];
        disabled: boolean;
        defaultValue: import("./types").TransferTargetItem[];
        modelValue: import("./types").TransferTargetItem[];
        showSearch: boolean;
        showSelectAll: boolean;
        virtualScroll: boolean;
        targetDraggable: boolean;
        targetOperation: "menu" | "remove";
        targetActions: import("./types").TransferTargetAction[];
        sourceFilterable: boolean;
        targetFilterable: boolean;
        showSelected: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./types").TransferItem[]>;
        default: () => never[];
    };
    modelValue: {
        type: import("vue").PropType<import("./types").TransferTargetItem[]>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<import("./types").TransferTargetItem[]>;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualScroll: BooleanConstructor;
    targetDraggable: BooleanConstructor;
    targetOperation: {
        type: import("vue").PropType<"remove" | "menu">;
        default: string;
    };
    clearText: StringConstructor;
    targetActions: {
        type: import("vue").PropType<import("./types").TransferTargetAction[]>;
        default: () => never[];
    };
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    sourceFilterable: BooleanConstructor;
    targetFilterable: BooleanConstructor;
    filter: {
        type: import("vue").PropType<import("./types").TransferFilter>;
        default: (value: string, item: import("./types").TransferItem) => boolean;
    };
    sourceFilterPlaceholder: StringConstructor;
    targetFilterPlaceholder: StringConstructor;
    showSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    sourceTitle: StringConstructor;
    targetTitle: StringConstructor;
    showSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    sourceSearchProps: {
        type: ObjectConstructor;
    };
    targetSearchProps: {
        type: ObjectConstructor;
    };
}>> & Readonly<{
    onSearch?: ((value: string, type: "target" | "source") => any) | undefined;
    onChange?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./types").TransferTargetItem[]) => any) | undefined;
    onRename?: ((value: import("./types").TransferValue, label: string) => any) | undefined;
    onTargetAction?: ((key: string, item: import("./types").TransferItem) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    dataInfo: import("vue").ComputedRef<{
        sourceInfo: import("./types").DataInfo;
        targetInfo: import("./types").DataInfo;
    }>;
    computedSelected: import("vue").ComputedRef<import("./types").TransferValue[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    sourceTitle: import("vue").ComputedRef<string>;
    targetTitle: import("vue").ComputedRef<string>;
    sourceShowSearch: import("vue").ComputedRef<boolean>;
    targetShowSearch: import("vue").ComputedRef<boolean>;
    mergedFilter: import("vue").ComputedRef<import("./types").TransferFilter>;
    mergedSourceSearchProps: import("vue").ComputedRef<{
        placeholder: any;
    }>;
    mergedTargetSearchProps: import("vue").ComputedRef<{
        placeholder: any;
    }>;
    mergedClearText: import("vue").ComputedRef<string>;
    handleSearch: (value: string, type: "target" | "source") => void;
    renameVisible: import("vue").Ref<boolean, boolean>;
    renameDraft: import("vue").Ref<string, string>;
    commitRename: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: import("./types").TransferTargetItem[]) => true;
    change: (value: import("./types").TransferTargetItem[]) => true;
    search: (value: string, type: "target" | "source") => true;
    rename: (value: import("./types").TransferValue, label: string) => true;
    targetAction: (key: string, item: import("./types").TransferItem) => true;
}, string, {
    filter: import("./types").TransferFilter;
    data: import("./types").TransferItem[];
    title: string[];
    disabled: boolean;
    defaultValue: import("./types").TransferTargetItem[];
    modelValue: import("./types").TransferTargetItem[];
    showSearch: boolean;
    showSelectAll: boolean;
    virtualScroll: boolean;
    targetDraggable: boolean;
    targetOperation: "menu" | "remove";
    targetActions: import("./types").TransferTargetAction[];
    sourceFilterable: boolean;
    targetFilterable: boolean;
    showSelected: boolean;
}, {}, string, {}, {
    TransferView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"source" | "target">;
        };
        dataInfo: {
            type: import("vue").PropType<import("./types").DataInfo>;
            required: true;
        };
        title: StringConstructor;
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            required: true;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        selected: {
            type: import("vue").PropType<import("./types").TransferValue[]>;
            required: true;
        };
        showSearch: BooleanConstructor;
        showSelectAll: BooleanConstructor;
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        total: NumberConstructor;
        clearText: StringConstructor;
        simple: BooleanConstructor;
        searchProps: {
            type: ObjectConstructor;
        };
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
            required: true;
        };
    }>, {
        prefixCls: string;
        filteredData: import("vue").ComputedRef<import("./types").TransferItem[]>;
        filter: import("vue").Ref<string, string>;
        checked: import("vue").ComputedRef<boolean>;
        indeterminate: import("vue").ComputedRef<boolean>;
        countSelected: import("vue").ComputedRef<number>;
        countRendered: import("vue").ComputedRef<number>;
        handleSelectAllChange: (checked: boolean | (string | number | boolean)[]) => void;
        handleSearch: (value: string) => void;
        handleClear: () => void;
        showGroupTitle: (item: import("./types").TransferItem, index?: number) => boolean;
        handleTargetOrder: (items: import("./types").TransferItem[], detail: {
            oldValue?: import("./types").TransferItem;
            newValue?: import("./types").TransferItem;
        }) => void | undefined;
        transferCtx: import("./context").TransferContext | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "search"[], "search", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"source" | "target">;
        };
        dataInfo: {
            type: import("vue").PropType<import("./types").DataInfo>;
            required: true;
        };
        title: StringConstructor;
        data: {
            type: import("vue").PropType<import("./types").TransferItem[]>;
            required: true;
        };
        disabled: BooleanConstructor;
        clearable: BooleanConstructor;
        selected: {
            type: import("vue").PropType<import("./types").TransferValue[]>;
            required: true;
        };
        showSearch: BooleanConstructor;
        showSelectAll: BooleanConstructor;
        virtualScroll: BooleanConstructor;
        targetDraggable: BooleanConstructor;
        targetOperation: {
            type: import("vue").PropType<"remove" | "menu">;
            default: string;
        };
        total: NumberConstructor;
        clearText: StringConstructor;
        simple: BooleanConstructor;
        searchProps: {
            type: ObjectConstructor;
        };
        filter: {
            type: import("vue").PropType<import("./types").TransferFilter>;
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
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
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
                    type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultChecked: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                value: import("vue").PropType<import("..").CheckboxValue>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                        type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultChecked: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                value: import("vue").PropType<import("..").CheckboxValue>;
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
                type: import("vue").PropType<boolean | import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: import("vue").PropType<import("..").CheckboxValue>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultValue: {
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: () => never[];
                };
                max: NumberConstructor;
                options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: undefined;
                };
                defaultValue: {
                    type: import("vue").PropType<import("..").CheckboxValue[]>;
                    default: () => never[];
                };
                max: NumberConstructor;
                options: import("vue").PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                type: import("vue").PropType<import("..").ComponentSize>;
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
                type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<any[]>;
                };
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                            type: import("vue").PropType<number[]>;
                            default: () => number[];
                            validator: (value: number[]) => boolean;
                        };
                        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            validator: (value: import("..").ComponentSize) => boolean;
                        };
                        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                bottomOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                scrollbar: {
                    type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                    type: import("vue").PropType<any[]>;
                };
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                    type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
                            type: import("vue").PropType<number[]>;
                            default: () => number[];
                            validator: (value: number[]) => boolean;
                        };
                        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            validator: (value: import("..").ComponentSize) => boolean;
                        };
                        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
                        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                bottomOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                scrollbar: {
                    type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                type: import("vue").PropType<any[]>;
            };
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
                type: import("vue").PropType<import("..").PaginationProps>;
            };
            gridProps: {
                type: ObjectConstructor;
            };
            maxHeight: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            bottomOffset: {
                type: NumberConstructor;
                default: number;
            };
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
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
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("..").Direction>;
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
                type: import("vue").PropType<"source" | "target">;
            };
            data: {
                type: import("vue").PropType<import("./types").TransferItem>;
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
                type: import("vue").PropType<"remove" | "menu">;
                default: string;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: import("vue").PropType<"source" | "target">;
            };
            data: {
                type: import("vue").PropType<import("./types").TransferItem>;
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
                type: import("vue").PropType<"remove" | "menu">;
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
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                        type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                    };
                    direction: {
                        type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<"track" | "embed">;
                    default: string;
                };
                outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                outerStyle: {
                    type: import("vue").PropType<import("vue").StyleValue>;
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
                type: import("vue").PropType<"track" | "embed">;
                default: string;
            };
            outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            outerStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
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
                    type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                    type: import("vue").PropType<import("../scrollbar/types").ThumbData>;
                };
                direction: {
                    type: import("vue").PropType<import("..").Direction>;
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
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            threshold: {
                type: NumberConstructor;
                default: number;
            };
            itemKey: {
                type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            threshold: {
                type: NumberConstructor;
                default: number;
            };
            itemKey: {
                type: import("vue").PropType<string | ((item: unknown) => string | number)>;
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
    Dialog: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            top: {
                type: (StringConstructor | NumberConstructor)[];
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClass: StringConstructor;
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            title: StringConstructor;
            message: StringConstructor;
            type: {
                type: import("vue").PropType<import("..").DialogType>;
            };
            simple: {
                type: BooleanConstructor;
                default: boolean;
            };
            titleAlign: {
                type: import("vue").PropType<"start" | "center">;
                default: string;
            };
            alignCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: BooleanConstructor;
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            escToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonText: StringConstructor;
            cancelButtonText: StringConstructor;
            confirmButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            cancelButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            footer: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement | false>;
                default: string;
            };
            dialogClass: {
                type: import("vue").PropType<string | any[]>;
            };
            dialogStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            beforeClose: {
                type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fullscreen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
            };
            dialogAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
            };
            bodyClass: {
                type: import("vue").PropType<string | any[]>;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            hideTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            ariaLabel: StringConstructor;
            closeButtonAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            zIndex: NumberConstructor;
        }>> & Readonly<{
            onCancel?: ((e: Event) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:open"?: ((show: boolean) => any) | undefined;
            onOpened?: (() => any) | undefined;
            onClosed?: (() => any) | undefined;
            onConfirm?: ((e: Event) => any) | undefined;
            "onClick-mask"?: (() => any) | undefined;
            "onKey-escape"?: (() => any) | undefined;
        }>, {
            prefixCls: string;
            mounted: import("vue").Ref<boolean, boolean>;
            computedOpen: import("vue").ComputedRef<boolean>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            confirmDisplayText: import("vue").ComputedRef<string>;
            cancelDisplayText: import("vue").ComputedRef<string>;
            zIndex: Readonly<import("vue").Ref<number, number>>;
            handleConfirm: (e: Event) => void;
            handleCancel: (e: Event) => void;
            handleMaskClick: (e: Event) => void;
            handleMaskMouseDown: (ev: Event) => void;
            handleOpened: () => void;
            handleClosed: () => void;
            mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
            mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
            mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
            mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
            dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperCls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            dialogCls: import("vue").ComputedRef<(string | any[] | {
                [x: string]: boolean;
            } | undefined)[]>;
            popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
            popupContainerDisabled: import("vue").ComputedRef<boolean>;
            handleMoveDown: (ev: MouseEvent) => void;
            showFooter: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (show: boolean) => true;
            confirm: (e: Event) => true;
            cancel: (e: Event) => true;
            open: () => true;
            opened: () => true;
            close: () => true;
            closed: () => true;
            'click-mask': () => true;
            'key-escape': () => true;
        }, import("vue").PublicProps, {
            closable: boolean;
            footer: boolean;
            mask: boolean;
            open: boolean;
            popupContainer: string | false | HTMLElement;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            draggable: boolean;
            escToClose: boolean;
            maskClosable: boolean;
            closeButtonAriaLabel: string;
            simple: boolean;
            alignCenter: boolean;
            confirmButton: boolean;
            cancelButton: boolean;
            confirmButtonLoading: boolean;
            cancelButtonLoading: boolean;
            confirmButtonDisabled: boolean;
            cancelButtonDisabled: boolean;
            fullscreen: boolean;
            titleAlign: "center" | "start";
            maskAnimationName: string;
            dialogAnimationName: string;
            hideTitle: boolean;
        }, true, {}, {}, {
            ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Button: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    click: (...args: any[]) => void;
                    touchstart: (...args: any[]) => void;
                }, import("vue").PublicProps, {
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
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
                        validator: (value: unknown) => value is import("..").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button").ButtonVariant;
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
                }>, {}, {}, {}, {}, {
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
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                touchstart: (...args: any[]) => void;
            }, string, {
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
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                $slots: {
                    icon?: (props: {}) => any;
                } & {
                    default?: (props: {}) => any;
                };
            }) & {
                Group: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, Readonly<import("vue").ExtractPropTypes<{
                        size: {
                            type: import("vue").PropType<import("..").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("..").SemanticStatus>;
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
                        buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                    }, {}, {}, {}, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button").ButtonVariant;
                        elevation: number | boolean;
                        status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                        textColor: string;
                        stacked: boolean;
                    }>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                    $slots: {
                        default?: (props: {}) => any;
                    };
                });
            }>;
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
            IconClose: {
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
            IconInfoCircleFill: {
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
            IconCheckCircleFill: {
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
            IconExclamationCircleFill: {
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
            IconCloseCircleFill: {
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
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
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
            width: {
                type: (StringConstructor | NumberConstructor)[];
            };
            top: {
                type: (StringConstructor | NumberConstructor)[];
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClass: StringConstructor;
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            title: StringConstructor;
            message: StringConstructor;
            type: {
                type: import("vue").PropType<import("..").DialogType>;
            };
            simple: {
                type: BooleanConstructor;
                default: boolean;
            };
            titleAlign: {
                type: import("vue").PropType<"start" | "center">;
                default: string;
            };
            alignCenter: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: BooleanConstructor;
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            escToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButton: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonText: StringConstructor;
            cancelButtonText: StringConstructor;
            confirmButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            cancelButtonDisabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            confirmButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            cancelButtonProps: {
                type: import("vue").PropType<import("..").ButtonProps>;
            };
            footer: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement | false>;
                default: string;
            };
            dialogClass: {
                type: import("vue").PropType<string | any[]>;
            };
            dialogStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            beforeClose: {
                type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fullscreen: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
            };
            dialogAnimationName: {
                type: StringConstructor;
                default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
            };
            bodyClass: {
                type: import("vue").PropType<string | any[]>;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").StyleValue>;
            };
            hideTitle: {
                type: BooleanConstructor;
                default: boolean;
            };
            ariaLabel: StringConstructor;
            closeButtonAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            zIndex: NumberConstructor;
        }>> & Readonly<{
            onCancel?: ((e: Event) => any) | undefined;
            onClose?: (() => any) | undefined;
            onOpen?: (() => any) | undefined;
            "onUpdate:open"?: ((show: boolean) => any) | undefined;
            onOpened?: (() => any) | undefined;
            onClosed?: (() => any) | undefined;
            onConfirm?: ((e: Event) => any) | undefined;
            "onClick-mask"?: (() => any) | undefined;
            "onKey-escape"?: (() => any) | undefined;
        }>, {
            prefixCls: string;
            mounted: import("vue").Ref<boolean, boolean>;
            computedOpen: import("vue").ComputedRef<boolean>;
            containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            confirmDisplayText: import("vue").ComputedRef<string>;
            cancelDisplayText: import("vue").ComputedRef<string>;
            zIndex: Readonly<import("vue").Ref<number, number>>;
            handleConfirm: (e: Event) => void;
            handleCancel: (e: Event) => void;
            handleMaskClick: (e: Event) => void;
            handleMaskMouseDown: (ev: Event) => void;
            handleOpened: () => void;
            handleClosed: () => void;
            mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
            mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
            mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
            mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
            dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            wrapperCls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            dialogCls: import("vue").ComputedRef<(string | any[] | {
                [x: string]: boolean;
            } | undefined)[]>;
            popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
            popupContainerDisabled: import("vue").ComputedRef<boolean>;
            handleMoveDown: (ev: MouseEvent) => void;
            showFooter: import("vue").ComputedRef<boolean>;
        }, {}, {}, {}, {
            closable: boolean;
            footer: boolean;
            mask: boolean;
            open: boolean;
            popupContainer: string | false | HTMLElement;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            draggable: boolean;
            escToClose: boolean;
            maskClosable: boolean;
            closeButtonAriaLabel: string;
            simple: boolean;
            alignCenter: boolean;
            confirmButton: boolean;
            cancelButton: boolean;
            confirmButtonLoading: boolean;
            cancelButtonLoading: boolean;
            confirmButtonDisabled: boolean;
            cancelButtonDisabled: boolean;
            fullscreen: boolean;
            titleAlign: "center" | "start";
            maskAnimationName: string;
            dialogAnimationName: string;
            hideTitle: boolean;
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
        width: {
            type: (StringConstructor | NumberConstructor)[];
        };
        top: {
            type: (StringConstructor | NumberConstructor)[];
        };
        mask: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClass: StringConstructor;
        maskStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        title: StringConstructor;
        message: StringConstructor;
        type: {
            type: import("vue").PropType<import("..").DialogType>;
        };
        simple: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleAlign: {
            type: import("vue").PropType<"start" | "center">;
            default: string;
        };
        alignCenter: {
            type: BooleanConstructor;
            default: boolean;
        };
        unmountOnClose: BooleanConstructor;
        maskClosable: {
            type: BooleanConstructor;
            default: boolean;
        };
        escToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        cancelButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButtonText: StringConstructor;
        cancelButtonText: StringConstructor;
        confirmButtonLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        cancelButtonLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButtonDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        cancelButtonDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmButtonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        cancelButtonProps: {
            type: import("vue").PropType<import("..").ButtonProps>;
        };
        footer: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement | false>;
            default: string;
        };
        dialogClass: {
            type: import("vue").PropType<string | any[]>;
        };
        dialogStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        beforeClose: {
            type: import("vue").PropType<(action: import("..").DialogAction, done: () => void, refs: import("..").DialogBeforeCloseRefs) => void>;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        fullscreen: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskAnimationName: {
            type: StringConstructor;
            default: (props: Record<string, any>) => "fade-in-standard" | "fade-modal";
        };
        dialogAnimationName: {
            type: StringConstructor;
            default: (props: Record<string, any>) => "zoom-in" | "zoom-modal";
        };
        bodyClass: {
            type: import("vue").PropType<string | any[]>;
        };
        bodyStyle: {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        hideTitle: {
            type: BooleanConstructor;
            default: boolean;
        };
        ariaLabel: StringConstructor;
        closeButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        zIndex: NumberConstructor;
    }>> & Readonly<{
        onCancel?: ((e: Event) => any) | undefined;
        onClose?: (() => any) | undefined;
        onOpen?: (() => any) | undefined;
        "onUpdate:open"?: ((show: boolean) => any) | undefined;
        onOpened?: (() => any) | undefined;
        onClosed?: (() => any) | undefined;
        onConfirm?: ((e: Event) => any) | undefined;
        "onClick-mask"?: (() => any) | undefined;
        "onKey-escape"?: (() => any) | undefined;
    }>, {
        prefixCls: string;
        mounted: import("vue").Ref<boolean, boolean>;
        computedOpen: import("vue").ComputedRef<boolean>;
        containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        wrapperRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        mergedDialogStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        confirmDisplayText: import("vue").ComputedRef<string>;
        cancelDisplayText: import("vue").ComputedRef<string>;
        zIndex: Readonly<import("vue").Ref<number, number>>;
        handleConfirm: (e: Event) => void;
        handleCancel: (e: Event) => void;
        handleMaskClick: (e: Event) => void;
        handleMaskMouseDown: (ev: Event) => void;
        handleOpened: () => void;
        handleClosed: () => void;
        mergedConfirmButtonLoading: import("vue").ComputedRef<boolean>;
        mergedCancelButtonLoading: import("vue").ComputedRef<boolean>;
        mergedConfirmButtonDisabled: import("vue").ComputedRef<boolean>;
        mergedCancelButtonDisabled: import("vue").ComputedRef<boolean>;
        dialogRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        wrapperCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        dialogCls: import("vue").ComputedRef<(string | any[] | {
            [x: string]: boolean;
        } | undefined)[]>;
        popupContainerTarget: import("vue").ComputedRef<string | HTMLElement>;
        popupContainerDisabled: import("vue").ComputedRef<boolean>;
        handleMoveDown: (ev: MouseEvent) => void;
        showFooter: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:open': (show: boolean) => true;
        confirm: (e: Event) => true;
        cancel: (e: Event) => true;
        open: () => true;
        opened: () => true;
        close: () => true;
        closed: () => true;
        'click-mask': () => true;
        'key-escape': () => true;
    }, string, {
        closable: boolean;
        footer: boolean;
        mask: boolean;
        open: boolean;
        popupContainer: string | false | HTMLElement;
        defaultOpen: boolean;
        unmountOnClose: boolean;
        draggable: boolean;
        escToClose: boolean;
        maskClosable: boolean;
        closeButtonAriaLabel: string;
        simple: boolean;
        alignCenter: boolean;
        confirmButton: boolean;
        cancelButton: boolean;
        confirmButtonLoading: boolean;
        cancelButtonLoading: boolean;
        confirmButtonDisabled: boolean;
        cancelButtonDisabled: boolean;
        fullscreen: boolean;
        titleAlign: "center" | "start";
        maskAnimationName: string;
        dialogAnimationName: string;
        hideTitle: boolean;
    }, {}, string, {}, {
        ClientOnly: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | null | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Button: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                touchstart: (...args: any[]) => void;
            }, import("vue").PublicProps, {
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
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
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
            }>, {}, {}, {}, {}, {
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
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            variant: {
                type: import("vue").PropType<import("../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../button").ButtonVariant;
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
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            touchstart: (...args: any[]) => void;
        }, string, {
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
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                icon?: (props: {}) => any;
            } & {
                default?: (props: {}) => any;
            };
        }) & {
            Group: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("..").SemanticStatus>;
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
                    buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button").ButtonVariant;
                    elevation: number | boolean;
                    status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                    textColor: string;
                    stacked: boolean;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                };
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
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
                buttonGroupProvider: import("../button/provide").ButtonGroupProvider;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                vertical: boolean;
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                color: string;
                variant: import("../button").ButtonVariant;
                elevation: number | boolean;
                status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                textColor: string;
                stacked: boolean;
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
                $slots: {
                    default?: (props: {}) => any;
                };
            });
        }>;
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
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
                type: import("vue").PropType<import("..").ComponentSize>;
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
        IconClose: {
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
        IconInfoCircleFill: {
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
        IconCheckCircleFill: {
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
        IconExclamationCircleFill: {
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
        IconCloseCircleFill: {
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        close: () => void;
        setDefaultOptions: (_options: import("..").DialogConfig) => void;
        resetDefaultOptions: () => void;
        install: (app: import("vue").App, options?: import("../_utils/types").CedarOptions) => void;
        _context: import("vue").AppContext | null;
        open: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        confirm: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        alert: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        info: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        success: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        warning: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
        error: (config: import("..").DialogConfig, appContext?: import("vue").AppContext) => import("..").DialogReturn & Promise<import("..").DialogAction | void>;
    };
    Input: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: BooleanConstructor;
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            maxLength: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
            };
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            input: (value: string, ev: Event) => true;
            change: (value: string, ev: Event) => true;
            pressEnter: (ev: KeyboardEvent) => true;
            clear: (ev: MouseEvent) => true;
            focus: (ev: FocusEvent) => true;
            blur: (ev: FocusEvent) => true;
        }, import("vue").PublicProps, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: BooleanConstructor;
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            maxLength: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                default: number;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
            wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
            inputAttrs: import("vue").PropType<Record<string, unknown>>;
            type: {
                type: import("vue").PropType<import("..").InputType>;
                default: string;
                validator: (value: unknown) => value is import("..").InputType;
            };
        }>> & Readonly<{
            onFocus?: ((ev: FocusEvent) => any) | undefined;
            onClear?: ((ev: MouseEvent) => any) | undefined;
            onBlur?: ((ev: FocusEvent) => any) | undefined;
            onChange?: ((value: string, ev: Event) => any) | undefined;
            onInput?: ((value: string, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
        }>, {
            inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, {
            error: boolean;
            readonly: boolean;
            type: "text" | "password";
            disabled: boolean;
            defaultValue: string;
            clearable: boolean;
            maxLength: import("../_utils/form-control").FormControlMaxLength;
            showWordLimit: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: BooleanConstructor;
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        maxLength: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
            default: number;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
        wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
        inputAttrs: import("vue").PropType<Record<string, unknown>>;
        type: {
            type: import("vue").PropType<import("..").InputType>;
            default: string;
            validator: (value: unknown) => value is import("..").InputType;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: ((ev: MouseEvent) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string, ev: Event) => any) | undefined;
        onInput?: ((value: string, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
    }>, {
        inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        input: (value: string, ev: Event) => true;
        change: (value: string, ev: Event) => true;
        pressEnter: (ev: KeyboardEvent) => true;
        clear: (ev: MouseEvent) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, string, {
        error: boolean;
        readonly: boolean;
        type: "text" | "password";
        disabled: boolean;
        defaultValue: string;
        clearable: boolean;
        maxLength: import("../_utils/form-control").FormControlMaxLength;
        showWordLimit: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Password: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibility: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultVisibility: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibilityToggle: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            inputRef: import("vue").Ref<any, any>;
            mergedVisible: import("vue").ComputedRef<boolean>;
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
            handleInvisible: () => void;
            t: (key: string, ...args: any[]) => string;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visibility-change" | "update:visibility")[], "visibility-change" | "update:visibility", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibility: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultVisibility: {
                type: BooleanConstructor;
                default: boolean;
            };
            visibilityToggle: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            "onVisibility-change"?: ((...args: any[]) => any) | undefined;
            "onUpdate:visibility"?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            visibility: boolean;
            defaultVisibility: boolean;
            visibilityToggle: boolean;
        }, {}, {
            IconEye: {
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
            IconEyeInvisible: {
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
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
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
                    type: import("vue").PropType<import("..").ComponentSize>;
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
            Input: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>, {
                inputRef: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:modelValue': (value: string) => true;
                input: (value: string, ev: Event) => true;
                change: (value: string, ev: Event) => true;
                pressEnter: (ev: KeyboardEvent) => true;
                clear: (ev: MouseEvent) => true;
                focus: (ev: FocusEvent) => true;
                blur: (ev: FocusEvent) => true;
            }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                    validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
                };
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                    default: string;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: BooleanConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: StringConstructor;
                maxLength: {
                    type: import("vue").PropType<import("../_utils/form-control").FormControlMaxLength>;
                    default: number;
                };
                showWordLimit: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                wordLength: import("vue").PropType<import("../_utils/form-control").WordLength>;
                wordSlice: import("vue").PropType<import("../_utils/form-control").WordSlice>;
                inputAttrs: import("vue").PropType<Record<string, unknown>>;
                type: {
                    type: import("vue").PropType<import("..").InputType>;
                    default: string;
                    validator: (value: unknown) => value is import("..").InputType;
                };
            }>> & Readonly<{
                onFocus?: ((ev: FocusEvent) => any) | undefined;
                onClear?: ((ev: MouseEvent) => any) | undefined;
                onBlur?: ((ev: FocusEvent) => any) | undefined;
                onChange?: ((value: string, ev: Event) => any) | undefined;
                onInput?: ((value: string, ev: Event) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                onPressEnter?: ((ev: KeyboardEvent) => any) | undefined;
            }>, {
                error: boolean;
                readonly: boolean;
                type: "text" | "password";
                disabled: boolean;
                defaultValue: string;
                clearable: boolean;
                maxLength: import("../_utils/form-control").FormControlMaxLength;
                showWordLimit: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        GroupLabel: import("vue").DefineComponent<{}, {
            n: (suffix?: string) => string;
            classes: typeof import("rattail").classes;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { Transfer };
export { transferProps };
export default Transfer;
