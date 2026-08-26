import { PropType, VNode } from 'vue';
import { TableDataWithRaw, TableOperationColumn } from './types';
import { BaseType } from '../_utils/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    operationColumn: {
        type: PropType<TableOperationColumn>;
        required: true;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        required: true;
    };
    record: {
        type: PropType<TableDataWithRaw>;
        required: true;
    };
    hasExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedRowKeys: {
        type: PropType<BaseType[]>;
    };
    renderExpandBtn: {
        type: PropType<(record: TableDataWithRaw, stopPropagation?: boolean) => VNode>;
    };
    colSpan: {
        type: NumberConstructor;
        default: number;
    };
    rowSpan: {
        type: NumberConstructor;
        default: number;
    };
    summary: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    operationColumn: {
        type: PropType<TableOperationColumn>;
        required: true;
    };
    operations: {
        type: PropType<TableOperationColumn[]>;
        required: true;
    };
    record: {
        type: PropType<TableDataWithRaw>;
        required: true;
    };
    hasExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedRowKeys: {
        type: PropType<BaseType[]>;
    };
    renderExpandBtn: {
        type: PropType<(record: TableDataWithRaw, stopPropagation?: boolean) => VNode>;
    };
    colSpan: {
        type: NumberConstructor;
        default: number;
    };
    rowSpan: {
        type: NumberConstructor;
        default: number;
    };
    summary: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
}>, {
    summary: boolean;
    colSpan: number;
    rowSpan: number;
    hasExpand: boolean;
}, {}, {
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
    Radio: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("..").RadioValue>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: {
                type: PropType<import("..").RadioValue>;
                default: boolean;
            };
            variant: {
                type: PropType<import("..").RadioVariant>;
                default: string;
                validator: (value: unknown) => value is import("..").RadioVariant;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            uninjectGroupContext: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string | number | boolean) => true;
            change: (value: string | number | boolean, ev: Event) => true;
        }, import("vue").PublicProps, {
            value: import("..").RadioValue;
            disabled: boolean;
            variant: "button" | "radio";
            modelValue: import("..").RadioValue;
            defaultChecked: boolean;
            uninjectGroupContext: boolean;
        }, true, {}, {}, {
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
                type: PropType<import("..").RadioValue>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: {
                type: PropType<import("..").RadioValue>;
                default: boolean;
            };
            variant: {
                type: PropType<import("..").RadioVariant>;
                default: string;
                validator: (value: unknown) => value is import("..").RadioVariant;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            uninjectGroupContext: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            value: import("..").RadioValue;
            disabled: boolean;
            variant: "button" | "radio";
            modelValue: import("..").RadioValue;
            defaultChecked: boolean;
            uninjectGroupContext: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<import("..").RadioValue>;
            default: undefined;
        };
        defaultChecked: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: {
            type: PropType<import("..").RadioValue>;
            default: boolean;
        };
        variant: {
            type: PropType<import("..").RadioVariant>;
            default: string;
            validator: (value: unknown) => value is import("..").RadioVariant;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        uninjectGroupContext: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | boolean) => true;
        change: (value: string | number | boolean, ev: Event) => true;
    }, string, {
        value: import("..").RadioValue;
        disabled: boolean;
        variant: "button" | "radio";
        modelValue: import("..").RadioValue;
        defaultChecked: boolean;
        uninjectGroupContext: boolean;
    }, {}, string, {}, {
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
                type: PropType<import("..").RadioValue>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<import("..").RadioValue>;
                default: string;
            };
            variant: {
                type: PropType<import("..").RadioVariant>;
                default: string;
                validator: (value: unknown) => value is import("..").RadioVariant;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            options: PropType<Array<import("..").RadioValue | import("../radio/types").RadioOption>>;
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string | number | boolean) => true;
            change: (value: string | number | boolean, ev: Event) => true;
        }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("..").RadioValue>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<import("..").RadioValue>;
                default: string;
            };
            variant: {
                type: PropType<import("..").RadioVariant>;
                default: string;
                validator: (value: unknown) => value is import("..").RadioVariant;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            options: PropType<Array<import("..").RadioValue | import("../radio/types").RadioOption>>;
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: string | number | boolean, ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
        }>, {
            disabled: boolean;
            variant: "button" | "radio";
            defaultValue: import("..").RadioValue;
            modelValue: import("..").RadioValue;
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
    IconPlus: {
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
    IconMinus: {
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
