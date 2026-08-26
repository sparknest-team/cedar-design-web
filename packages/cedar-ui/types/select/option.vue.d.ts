import type { PropType } from 'vue';
import type { TagProps } from '../tag';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 选项值（如不填，会从内容中获取）
     * @en Option value (if not filled, it will be obtained from the content)
     */
    value: {
        type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * @zh 选项标签（如不填，会从内容中获取）
     * @en Option label (if not filled, it will be obtained from the content)
     */
    label: StringConstructor;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: BooleanConstructor;
    /**
     * @zh 展示的标签属性
     * @en Displayed tag attributes
     * @version 2.8.0
     */
    tagProps: {
        type: PropType<TagProps>;
    };
    /**
     * @zh 额外数据。2.18.0 版本废弃，可使用对象形式的 value 扩展数据
     * @en Extra data
     * @version 2.10.0
     */
    extra: {
        type: ObjectConstructor;
    };
    /**
     * @zh 用于手动指定选项的 index
     * @en index for manually specifying option
     * @version 2.20.0
     */
    index: {
        type: NumberConstructor;
    };
    internal: BooleanConstructor;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean | undefined;
    })[]>;
    selectCtx: import("./context").SelectContext | undefined;
    itemRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    component: import("vue").ComputedRef<string>;
    isSelected: import("vue").ComputedRef<boolean>;
    isValid: import("vue").Ref<boolean, boolean>;
    handleClick: (ev: MouseEvent) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 选项值（如不填，会从内容中获取）
     * @en Option value (if not filled, it will be obtained from the content)
     */
    value: {
        type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * @zh 选项标签（如不填，会从内容中获取）
     * @en Option label (if not filled, it will be obtained from the content)
     */
    label: StringConstructor;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: BooleanConstructor;
    /**
     * @zh 展示的标签属性
     * @en Displayed tag attributes
     * @version 2.8.0
     */
    tagProps: {
        type: PropType<TagProps>;
    };
    /**
     * @zh 额外数据。2.18.0 版本废弃，可使用对象形式的 value 扩展数据
     * @en Extra data
     * @version 2.10.0
     */
    extra: {
        type: ObjectConstructor;
    };
    /**
     * @zh 用于手动指定选项的 index
     * @en index for manually specifying option
     * @version 2.20.0
     */
    index: {
        type: NumberConstructor;
    };
    internal: BooleanConstructor;
}>> & Readonly<{}>, {
    value: string | number | boolean | Record<string, any>;
    disabled: boolean;
    internal: boolean;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
