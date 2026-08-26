import _Color from './color.vue';
import { colorProps } from './props';
declare const Color: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        format: {
            type: import("vue").PropType<"hex" | "rgb">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        showHistory: BooleanConstructor;
        showPreset: BooleanConstructor;
        disabled: BooleanConstructor;
        disabledAlpha: BooleanConstructor;
        historyColors: {
            type: import("vue").PropType<string[]>;
        };
        presetColors: {
            type: import("vue").PropType<string[]>;
        };
        colorPickerProps: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
    }>, {
        pickerProps: import("vue").ComputedRef<Record<string, unknown>>;
        onUpdateModelValue: (value: string | undefined) => void;
        onChange: (value: string) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | undefined) => true;
        change: (value: string) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        showText: boolean;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        colorPickerProps: Record<string, unknown>;
    }, true, {}, {}, {
        ColorPicker: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                };
                format: {
                    type: import("vue").PropType<"hex" | "rgb">;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                showText: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showHistory: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showPreset: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabledAlpha: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideTrigger: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                triggerProps: {
                    type: import("vue").PropType<Partial<import("..").TriggerProps>>;
                };
                historyColors: {
                    type: import("vue").PropType<string[]>;
                };
                presetColors: {
                    type: import("vue").PropType<string[]>;
                    default: () => string[];
                };
            }>> & Readonly<{
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:modelValue': (value: string) => true;
                change: (value: string) => true;
                'open-change': (visible: boolean, value: string) => true;
            }, import("vue").PublicProps, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                showText: boolean;
                disabledAlpha: boolean;
                showHistory: boolean;
                showPreset: boolean;
                presetColors: string[];
                hideTrigger: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                };
                format: {
                    type: import("vue").PropType<"hex" | "rgb">;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                showText: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showHistory: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showPreset: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabledAlpha: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideTrigger: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                triggerProps: {
                    type: import("vue").PropType<Partial<import("..").TriggerProps>>;
                };
                historyColors: {
                    type: import("vue").PropType<string[]>;
                };
                presetColors: {
                    type: import("vue").PropType<string[]>;
                    default: () => string[];
                };
            }>> & Readonly<{
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                showText: boolean;
                disabledAlpha: boolean;
                showHistory: boolean;
                showPreset: boolean;
                presetColors: string[];
                hideTrigger: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
            };
            format: {
                type: import("vue").PropType<"hex" | "rgb">;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            showHistory: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreset: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledAlpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideTrigger: {
                type: BooleanConstructor;
                default: boolean;
            };
            triggerProps: {
                type: import("vue").PropType<Partial<import("..").TriggerProps>>;
            };
            historyColors: {
                type: import("vue").PropType<string[]>;
            };
            presetColors: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
        }>> & Readonly<{
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            change: (value: string) => true;
            'open-change': (visible: boolean, value: string) => true;
        }, string, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            showText: boolean;
            disabledAlpha: boolean;
            showHistory: boolean;
            showPreset: boolean;
            presetColors: string[];
            hideTrigger: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        format: {
            type: import("vue").PropType<"hex" | "rgb">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        showHistory: BooleanConstructor;
        showPreset: BooleanConstructor;
        disabled: BooleanConstructor;
        disabledAlpha: BooleanConstructor;
        historyColors: {
            type: import("vue").PropType<string[]>;
        };
        presetColors: {
            type: import("vue").PropType<string[]>;
        };
        colorPickerProps: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
    }>, {
        pickerProps: import("vue").ComputedRef<Record<string, unknown>>;
        onUpdateModelValue: (value: string | undefined) => void;
        onChange: (value: string) => void;
    }, {}, {}, {}, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        showText: boolean;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        colorPickerProps: Record<string, unknown>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: StringConstructor;
    format: {
        type: import("vue").PropType<"hex" | "rgb">;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHistory: BooleanConstructor;
    showPreset: BooleanConstructor;
    disabled: BooleanConstructor;
    disabledAlpha: BooleanConstructor;
    historyColors: {
        type: import("vue").PropType<string[]>;
    };
    presetColors: {
        type: import("vue").PropType<string[]>;
    };
    colorPickerProps: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
}>> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {
    pickerProps: import("vue").ComputedRef<Record<string, unknown>>;
    onUpdateModelValue: (value: string | undefined) => void;
    onChange: (value: string) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | undefined) => true;
    change: (value: string) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    showText: boolean;
    disabledAlpha: boolean;
    showHistory: boolean;
    showPreset: boolean;
    colorPickerProps: Record<string, unknown>;
}, {}, string, {}, {
    ColorPicker: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
            };
            format: {
                type: import("vue").PropType<"hex" | "rgb">;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            showHistory: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreset: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledAlpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideTrigger: {
                type: BooleanConstructor;
                default: boolean;
            };
            triggerProps: {
                type: import("vue").PropType<Partial<import("..").TriggerProps>>;
            };
            historyColors: {
                type: import("vue").PropType<string[]>;
            };
            presetColors: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
        }>> & Readonly<{
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            change: (value: string) => true;
            'open-change': (visible: boolean, value: string) => true;
        }, import("vue").PublicProps, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            showText: boolean;
            disabledAlpha: boolean;
            showHistory: boolean;
            showPreset: boolean;
            presetColors: string[];
            hideTrigger: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
            };
            format: {
                type: import("vue").PropType<"hex" | "rgb">;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            showHistory: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreset: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledAlpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideTrigger: {
                type: BooleanConstructor;
                default: boolean;
            };
            triggerProps: {
                type: import("vue").PropType<Partial<import("..").TriggerProps>>;
            };
            historyColors: {
                type: import("vue").PropType<string[]>;
            };
            presetColors: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
        }>> & Readonly<{
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            showText: boolean;
            disabledAlpha: boolean;
            showHistory: boolean;
            showPreset: boolean;
            presetColors: string[];
            hideTrigger: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
        };
        format: {
            type: import("vue").PropType<"hex" | "rgb">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        showHistory: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPreset: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledAlpha: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideTrigger: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerProps: {
            type: import("vue").PropType<Partial<import("..").TriggerProps>>;
        };
        historyColors: {
            type: import("vue").PropType<string[]>;
        };
        presetColors: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        change: (value: string) => true;
        'open-change': (visible: boolean, value: string) => true;
    }, string, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        showText: boolean;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        presetColors: string[];
        hideTrigger: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type ColorInstance = InstanceType<typeof _Color>;
export type { ColorProps } from './props';
export { Color, colorProps };
export declare const _ColorComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        format: {
            type: import("vue").PropType<"hex" | "rgb">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        showHistory: BooleanConstructor;
        showPreset: BooleanConstructor;
        disabled: BooleanConstructor;
        disabledAlpha: BooleanConstructor;
        historyColors: {
            type: import("vue").PropType<string[]>;
        };
        presetColors: {
            type: import("vue").PropType<string[]>;
        };
        colorPickerProps: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
    }>, {
        pickerProps: import("vue").ComputedRef<Record<string, unknown>>;
        onUpdateModelValue: (value: string | undefined) => void;
        onChange: (value: string) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | undefined) => true;
        change: (value: string) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        showText: boolean;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        colorPickerProps: Record<string, unknown>;
    }, true, {}, {}, {
        ColorPicker: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                };
                format: {
                    type: import("vue").PropType<"hex" | "rgb">;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                showText: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showHistory: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showPreset: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabledAlpha: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideTrigger: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                triggerProps: {
                    type: import("vue").PropType<Partial<import("..").TriggerProps>>;
                };
                historyColors: {
                    type: import("vue").PropType<string[]>;
                };
                presetColors: {
                    type: import("vue").PropType<string[]>;
                    default: () => string[];
                };
            }>> & Readonly<{
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:modelValue': (value: string) => true;
                change: (value: string) => true;
                'open-change': (visible: boolean, value: string) => true;
            }, import("vue").PublicProps, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                showText: boolean;
                disabledAlpha: boolean;
                showHistory: boolean;
                showPreset: boolean;
                presetColors: string[];
                hideTrigger: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                modelValue: StringConstructor;
                defaultValue: {
                    type: StringConstructor;
                };
                format: {
                    type: import("vue").PropType<"hex" | "rgb">;
                };
                size: {
                    type: import("vue").PropType<import("..").ComponentSize>;
                    default: string;
                    validator: (value: import("..").ComponentSize) => boolean;
                };
                showText: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showHistory: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showPreset: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabledAlpha: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideTrigger: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                triggerProps: {
                    type: import("vue").PropType<Partial<import("..").TriggerProps>>;
                };
                historyColors: {
                    type: import("vue").PropType<string[]>;
                };
                presetColors: {
                    type: import("vue").PropType<string[]>;
                    default: () => string[];
                };
            }>> & Readonly<{
                onChange?: ((value: string) => any) | undefined;
                "onUpdate:modelValue"?: ((value: string) => any) | undefined;
                "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                showText: boolean;
                disabledAlpha: boolean;
                showHistory: boolean;
                showPreset: boolean;
                presetColors: string[];
                hideTrigger: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
            };
            format: {
                type: import("vue").PropType<"hex" | "rgb">;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            showHistory: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreset: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledAlpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideTrigger: {
                type: BooleanConstructor;
                default: boolean;
            };
            triggerProps: {
                type: import("vue").PropType<Partial<import("..").TriggerProps>>;
            };
            historyColors: {
                type: import("vue").PropType<string[]>;
            };
            presetColors: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
        }>> & Readonly<{
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            change: (value: string) => true;
            'open-change': (visible: boolean, value: string) => true;
        }, string, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            showText: boolean;
            disabledAlpha: boolean;
            showHistory: boolean;
            showPreset: boolean;
            presetColors: string[];
            hideTrigger: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: StringConstructor;
        format: {
            type: import("vue").PropType<"hex" | "rgb">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        showHistory: BooleanConstructor;
        showPreset: BooleanConstructor;
        disabled: BooleanConstructor;
        disabledAlpha: BooleanConstructor;
        historyColors: {
            type: import("vue").PropType<string[]>;
        };
        presetColors: {
            type: import("vue").PropType<string[]>;
        };
        colorPickerProps: {
            type: import("vue").PropType<Record<string, unknown>>;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
    }>, {
        pickerProps: import("vue").ComputedRef<Record<string, unknown>>;
        onUpdateModelValue: (value: string | undefined) => void;
        onChange: (value: string) => void;
    }, {}, {}, {}, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        showText: boolean;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        colorPickerProps: Record<string, unknown>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: StringConstructor;
    format: {
        type: import("vue").PropType<"hex" | "rgb">;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        default: string;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    showHistory: BooleanConstructor;
    showPreset: BooleanConstructor;
    disabled: BooleanConstructor;
    disabledAlpha: BooleanConstructor;
    historyColors: {
        type: import("vue").PropType<string[]>;
    };
    presetColors: {
        type: import("vue").PropType<string[]>;
    };
    colorPickerProps: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
}>> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {
    pickerProps: import("vue").ComputedRef<Record<string, unknown>>;
    onUpdateModelValue: (value: string | undefined) => void;
    onChange: (value: string) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | undefined) => true;
    change: (value: string) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    disabled: boolean;
    showText: boolean;
    disabledAlpha: boolean;
    showHistory: boolean;
    showPreset: boolean;
    colorPickerProps: Record<string, unknown>;
}, {}, string, {}, {
    ColorPicker: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
            };
            format: {
                type: import("vue").PropType<"hex" | "rgb">;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            showHistory: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreset: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledAlpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideTrigger: {
                type: BooleanConstructor;
                default: boolean;
            };
            triggerProps: {
                type: import("vue").PropType<Partial<import("..").TriggerProps>>;
            };
            historyColors: {
                type: import("vue").PropType<string[]>;
            };
            presetColors: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
        }>> & Readonly<{
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string) => true;
            change: (value: string) => true;
            'open-change': (visible: boolean, value: string) => true;
        }, import("vue").PublicProps, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            showText: boolean;
            disabledAlpha: boolean;
            showHistory: boolean;
            showPreset: boolean;
            presetColors: string[];
            hideTrigger: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: StringConstructor;
            defaultValue: {
                type: StringConstructor;
            };
            format: {
                type: import("vue").PropType<"hex" | "rgb">;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: import("..").ComponentSize) => boolean;
            };
            showText: {
                type: BooleanConstructor;
                default: boolean;
            };
            showHistory: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreset: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledAlpha: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideTrigger: {
                type: BooleanConstructor;
                default: boolean;
            };
            triggerProps: {
                type: import("vue").PropType<Partial<import("..").TriggerProps>>;
            };
            historyColors: {
                type: import("vue").PropType<string[]>;
            };
            presetColors: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
        }>> & Readonly<{
            onChange?: ((value: string) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
            showText: boolean;
            disabledAlpha: boolean;
            showHistory: boolean;
            showPreset: boolean;
            presetColors: string[];
            hideTrigger: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: StringConstructor;
        defaultValue: {
            type: StringConstructor;
        };
        format: {
            type: import("vue").PropType<"hex" | "rgb">;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        showText: {
            type: BooleanConstructor;
            default: boolean;
        };
        showHistory: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPreset: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledAlpha: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideTrigger: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerProps: {
            type: import("vue").PropType<Partial<import("..").TriggerProps>>;
        };
        historyColors: {
            type: import("vue").PropType<string[]>;
        };
        presetColors: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
    }>> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        "onOpen-change"?: ((visible: boolean, value: string) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string) => true;
        change: (value: string) => true;
        'open-change': (visible: boolean, value: string) => true;
    }, string, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
        showText: boolean;
        disabledAlpha: boolean;
        showHistory: boolean;
        showPreset: boolean;
        presetColors: string[];
        hideTrigger: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Color;
