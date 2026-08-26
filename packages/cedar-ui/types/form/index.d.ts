import _Form from './form.vue';
import _FormItem from './form-item.vue';
import { formProps } from './props';
declare const Form: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        model: {
            type: ObjectConstructor;
            required: boolean;
        };
        layout: {
            type: import("vue").PropType<import("./props").FormLayout>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        labelColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        wrapperColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        labelAlign: {
            type: import("vue").PropType<import("./props").FormLabelAlign>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        rules: {
            type: import("vue").PropType<Record<string, import("./types").FieldRule | import("./types").FieldRule[]>>;
        };
        autoLabelWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        id: {
            type: StringConstructor;
        };
        scrollToFirstError: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSubmit?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError> | undefined;
        }, ev: Event) => any) | undefined;
        onSubmitSuccess?: ((values: Record<string, any>, ev: Event) => any) | undefined;
        onSubmitFailed?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError>;
        }, ev: Event) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        formRef: import("vue").Ref<HTMLFormElement | undefined, HTMLFormElement | undefined>;
        handleSubmit: (e: Event) => void;
        innerValidate: (callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<undefined | Record<string, import("./types").ValidatedError>>;
        innerValidateField: (field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<Record<string, import("./types").ValidatedError> | undefined>;
        innerResetFields: (field?: string | string[]) => void;
        innerClearValidate: (field?: string | string[]) => void;
        innerSetFields: (data: Record<string, import("./types").FieldData>) => void;
        innerScrollToField: (field: string, options?: import("scroll-into-view-if-needed").Options) => void;
    }, {}, {}, {
        validate(callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        validateField(field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        resetFields(field?: string | string[]): void;
        clearValidate(field?: string | string[]): void;
        setFields(data: Record<string, import("./types").FieldData>): void;
        scrollToField(field: string): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        submit: (data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError> | undefined;
        }, ev: Event) => true;
        submitSuccess: (values: Record<string, any>, ev: Event) => true;
        submitFailed: (data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError>;
        }, ev: Event) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        layout: "horizontal" | "vertical" | "inline";
        labelColProps: Record<string, any>;
        wrapperColProps: Record<string, any>;
        labelAlign: "left" | "right";
        autoLabelWidth: boolean;
        scrollToFirstError: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        model: {
            type: ObjectConstructor;
            required: boolean;
        };
        layout: {
            type: import("vue").PropType<import("./props").FormLayout>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        labelColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        wrapperColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        labelAlign: {
            type: import("vue").PropType<import("./props").FormLabelAlign>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        rules: {
            type: import("vue").PropType<Record<string, import("./types").FieldRule | import("./types").FieldRule[]>>;
        };
        autoLabelWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        id: {
            type: StringConstructor;
        };
        scrollToFirstError: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSubmit?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError> | undefined;
        }, ev: Event) => any) | undefined;
        onSubmitSuccess?: ((values: Record<string, any>, ev: Event) => any) | undefined;
        onSubmitFailed?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError>;
        }, ev: Event) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        formRef: import("vue").Ref<HTMLFormElement | undefined, HTMLFormElement | undefined>;
        handleSubmit: (e: Event) => void;
        innerValidate: (callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<undefined | Record<string, import("./types").ValidatedError>>;
        innerValidateField: (field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<Record<string, import("./types").ValidatedError> | undefined>;
        innerResetFields: (field?: string | string[]) => void;
        innerClearValidate: (field?: string | string[]) => void;
        innerSetFields: (data: Record<string, import("./types").FieldData>) => void;
        innerScrollToField: (field: string, options?: import("scroll-into-view-if-needed").Options) => void;
    }, {}, {}, {
        validate(callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        validateField(field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        resetFields(field?: string | string[]): void;
        clearValidate(field?: string | string[]): void;
        setFields(data: Record<string, import("./types").FieldData>): void;
        scrollToField(field: string): void;
    }, {
        disabled: boolean;
        layout: "horizontal" | "vertical" | "inline";
        labelColProps: Record<string, any>;
        wrapperColProps: Record<string, any>;
        labelAlign: "left" | "right";
        autoLabelWidth: boolean;
        scrollToFirstError: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
        required: boolean;
    };
    layout: {
        type: import("vue").PropType<import("./props").FormLayout>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    labelColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    wrapperColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    labelColStyle: ObjectConstructor;
    wrapperColStyle: ObjectConstructor;
    labelAlign: {
        type: import("vue").PropType<import("./props").FormLabelAlign>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    rules: {
        type: import("vue").PropType<Record<string, import("./types").FieldRule | import("./types").FieldRule[]>>;
    };
    autoLabelWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    scrollToFirstError: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSubmit?: ((data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError> | undefined;
    }, ev: Event) => any) | undefined;
    onSubmitSuccess?: ((values: Record<string, any>, ev: Event) => any) | undefined;
    onSubmitFailed?: ((data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError>;
    }, ev: Event) => any) | undefined;
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    formRef: import("vue").Ref<HTMLFormElement | undefined, HTMLFormElement | undefined>;
    handleSubmit: (e: Event) => void;
    innerValidate: (callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<undefined | Record<string, import("./types").ValidatedError>>;
    innerValidateField: (field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<Record<string, import("./types").ValidatedError> | undefined>;
    innerResetFields: (field?: string | string[]) => void;
    innerClearValidate: (field?: string | string[]) => void;
    innerSetFields: (data: Record<string, import("./types").FieldData>) => void;
    innerScrollToField: (field: string, options?: import("scroll-into-view-if-needed").Options) => void;
}, {}, {}, {
    validate(callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
    validateField(field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
    resetFields(field?: string | string[]): void;
    clearValidate(field?: string | string[]): void;
    setFields(data: Record<string, import("./types").FieldData>): void;
    scrollToField(field: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError> | undefined;
    }, ev: Event) => true;
    submitSuccess: (values: Record<string, any>, ev: Event) => true;
    submitFailed: (data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError>;
    }, ev: Event) => true;
}, string, {
    disabled: boolean;
    layout: "horizontal" | "vertical" | "inline";
    labelColProps: Record<string, any>;
    wrapperColProps: Record<string, any>;
    labelAlign: "left" | "right";
    autoLabelWidth: boolean;
    scrollToFirstError: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        field: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        tooltip: {
            type: StringConstructor;
        };
        showColon: {
            type: BooleanConstructor;
            default: boolean;
        };
        noStyle: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        help: StringConstructor;
        extra: StringConstructor;
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        asteriskPosition: {
            type: StringConstructor;
            default: string;
        };
        rules: {
            type: import("vue").PropType<import("./types").FieldRule | import("./types").FieldRule[]>;
        };
        validateStatus: {
            type: import("vue").PropType<import("./types").ValidateStatus>;
        };
        validateTrigger: {
            type: import("vue").PropType<import("./types").ValidateTrigger | import("./types").ValidateTrigger[]>;
            default: string;
        };
        labelColProps: ObjectConstructor;
        wrapperColProps: ObjectConstructor;
        hideLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideAsterisk: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        rowProps: ObjectConstructor;
        rowClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentFlex: {
            type: BooleanConstructor;
            default: boolean;
        };
        mergeProps: {
            type: import("vue").PropType<boolean | ((props: Record<string, any>) => Record<string, any>)>;
            default: boolean;
        };
        labelColFlex: {
            type: (StringConstructor | NumberConstructor)[];
        };
        feedback: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelComponent: {
            type: StringConstructor;
            default: string;
        };
        labelAttrs: ObjectConstructor;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
        isRequired: import("vue").ComputedRef<boolean>;
        isError: import("vue").ComputedRef<boolean>;
        finalMessage: import("vue").ComputedRef<string[]>;
        mergedLabelCol: import("vue").ComputedRef<any>;
        mergedWrapperCol: import("vue").ComputedRef<any>;
        labelColCls: import("vue").ComputedRef<(string | {
            [x: string]: string | number | boolean | undefined;
        })[]>;
        autoLabelWidth: import("vue").Ref<boolean | undefined, boolean | undefined> | undefined;
        layout: import("vue").Ref<string | undefined, string | undefined> | undefined;
        mergedLabelStyle: import("vue").ComputedRef<any>;
        wrapperColCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        mergedWrapperStyle: import("vue").ComputedRef<any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        field: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        tooltip: {
            type: StringConstructor;
        };
        showColon: {
            type: BooleanConstructor;
            default: boolean;
        };
        noStyle: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        help: StringConstructor;
        extra: StringConstructor;
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        asteriskPosition: {
            type: StringConstructor;
            default: string;
        };
        rules: {
            type: import("vue").PropType<import("./types").FieldRule | import("./types").FieldRule[]>;
        };
        validateStatus: {
            type: import("vue").PropType<import("./types").ValidateStatus>;
        };
        validateTrigger: {
            type: import("vue").PropType<import("./types").ValidateTrigger | import("./types").ValidateTrigger[]>;
            default: string;
        };
        labelColProps: ObjectConstructor;
        wrapperColProps: ObjectConstructor;
        hideLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideAsterisk: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        rowProps: ObjectConstructor;
        rowClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentFlex: {
            type: BooleanConstructor;
            default: boolean;
        };
        mergeProps: {
            type: import("vue").PropType<boolean | ((props: Record<string, any>) => Record<string, any>)>;
            default: boolean;
        };
        labelColFlex: {
            type: (StringConstructor | NumberConstructor)[];
        };
        feedback: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelComponent: {
            type: StringConstructor;
            default: string;
        };
        labelAttrs: ObjectConstructor;
    }>> & Readonly<{}>, {
        required: boolean;
        disabled: boolean;
        feedback: boolean;
        field: string;
        showColon: boolean;
        asteriskPosition: string;
        noStyle: boolean;
        validateTrigger: "focus" | "blur" | "change" | "input" | ("focus" | "blur" | "change" | "input")[];
        hideLabel: boolean;
        hideAsterisk: boolean;
        contentFlex: boolean;
        mergeProps: boolean | ((props: Record<string, any>) => Record<string, any>);
        labelComponent: string;
    }, {}, {
        Row: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            gutter: {
                type: import("vue").PropType<number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue]>;
                default: number;
            };
            justify: {
                type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
                default: string;
            };
            align: {
                type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
                default: string;
            };
            div: {
                type: BooleanConstructor;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classNames: import("vue").ComputedRef<{
                [x: string]: boolean | "center" | "space-around" | "space-between" | "stretch" | "end" | "start";
            }>;
            styles: import("vue").ComputedRef<{
                marginTop?: string;
                marginBottom?: string;
                marginLeft?: string;
                marginRight?: string;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            gutter: {
                type: import("vue").PropType<number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue]>;
                default: number;
            };
            justify: {
                type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
                default: string;
            };
            align: {
                type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
                default: string;
            };
            div: {
                type: BooleanConstructor;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            div: boolean;
            wrap: boolean;
            justify: "center" | "space-around" | "space-between" | "end" | "start";
            align: "center" | "stretch" | "end" | "start";
            gutter: number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue];
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Col: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                default: number;
            };
            offset: {
                type: NumberConstructor;
            };
            order: {
                type: NumberConstructor;
            };
            xs: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            sm: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            md: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            lg: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xxl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            flex: {
                type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
            };
        }>, {
            visible: import("vue").ComputedRef<boolean>;
            classNames: import("vue").ComputedRef<string | {
                [x: string]: number | boolean | undefined;
            }>;
            styles: import("vue").ComputedRef<{
                flex?: import("../grid/types").FlexType;
                paddingLeft?: string;
                paddingRight?: string;
                paddingTop?: string;
                paddingBottom?: string;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                default: number;
            };
            offset: {
                type: NumberConstructor;
            };
            order: {
                type: NumberConstructor;
            };
            xs: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            sm: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            md: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            lg: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xxl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            flex: {
                type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
            };
        }>> & Readonly<{}>, {
            span: number;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        FormItemLabel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
            showColon: {
                type: BooleanConstructor;
                default: boolean;
            };
            component: {
                type: StringConstructor;
                default: string;
            };
            asteriskPosition: {
                type: StringConstructor;
                default: string;
            };
            tooltip: {
                type: StringConstructor;
            };
            attrs: ObjectConstructor;
        }>, {
            prefixCls: string;
            labelRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            handleResize: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
            showColon: {
                type: BooleanConstructor;
                default: boolean;
            };
            component: {
                type: StringConstructor;
                default: string;
            };
            asteriskPosition: {
                type: StringConstructor;
                default: string;
            };
            tooltip: {
                type: StringConstructor;
            };
            attrs: ObjectConstructor;
        }>> & Readonly<{}>, {
            required: boolean;
            component: string;
            showColon: boolean;
            asteriskPosition: string;
        }, {}, {
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
            Tooltip: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    open: {
                        type: BooleanConstructor;
                        default: undefined;
                    };
                    defaultOpen: BooleanConstructor;
                    content: StringConstructor;
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                        validator: (value: import("..").TriggerPosition) => boolean;
                    };
                    xs: BooleanConstructor;
                    backgroundColor: StringConstructor;
                    contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                    arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                    popupContainer: import("vue").PropType<string | HTMLElement>;
                }>> & Readonly<{
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                }>, {
                    prefixCls: string;
                    computedOpen: import("vue").ComputedRef<boolean>;
                    contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    handleOpenChange: (visible: boolean) => void;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:open': (visible: boolean) => true;
                    openChange: (visible: boolean) => true;
                }, import("vue").PublicProps, {
                    xs: boolean;
                    open: boolean;
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                }, true, {}, {}, {
                    Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
                        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                            open: {
                                type: BooleanConstructor;
                                default: undefined;
                            };
                            defaultOpen: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            trigger: {
                                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("..").TriggerPosition>;
                                default: string;
                            };
                            disabled: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupOffset: {
                                type: NumberConstructor;
                                default: number;
                            };
                            popupTranslate: {
                                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                            };
                            showArrow: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            alignPoint: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupHoverStay: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            blurToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickOutsideToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            unmountOnClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            contentClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            contentStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            arrowClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            arrowStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            popupStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            animationName: {
                                type: StringConstructor;
                                default: string;
                            };
                            duration: {
                                type: import("vue").PropType<number | {
                                    enter: number;
                                    leave: number;
                                }>;
                            };
                            mouseEnterDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            mouseLeaveDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            focusDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            autoFitPopupWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitPopupMinWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFixPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupContainer: {
                                type: import("vue").PropType<string | HTMLElement>;
                            };
                            updateAtScroll: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitTransformOrigin: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            hideEmpty: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            openedClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            autoFitPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            renderToBody: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            preventFocus: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToCloseDistance: {
                                type: NumberConstructor;
                                default: number;
                            };
                        }>> & Readonly<{
                            onResize?: (() => any) | undefined;
                            onHide?: (() => any) | undefined;
                            onShow?: (() => any) | undefined;
                            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                            onOpenChange?: ((visible: boolean) => any) | undefined;
                            onClickOutside?: ((event: Event) => any) | undefined;
                        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                            'update:open': (visible: boolean) => true;
                            openChange: (visible: boolean) => true;
                            show: () => true;
                            hide: () => true;
                            clickOutside: (event: Event) => true;
                            resize: () => true;
                        }, import("vue").PublicProps, {
                            updateAtScroll: boolean;
                            scrollToClose: boolean;
                            disabled: boolean;
                            open: boolean;
                            autoFitPosition: boolean;
                            animationName: string;
                            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                            defaultOpen: boolean;
                            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                            popupOffset: number;
                            showArrow: boolean;
                            alignPoint: boolean;
                            popupHoverStay: boolean;
                            blurToClose: boolean;
                            clickToClose: boolean;
                            clickOutsideToClose: boolean;
                            unmountOnClose: boolean;
                            mouseEnterDelay: number;
                            mouseLeaveDelay: number;
                            focusDelay: number;
                            autoFitPopupWidth: boolean;
                            autoFitPopupMinWidth: boolean;
                            autoFixPosition: boolean;
                            autoFitTransformOrigin: boolean;
                            hideEmpty: boolean;
                            renderToBody: boolean;
                            preventFocus: boolean;
                            scrollToCloseDistance: number;
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
                            trigger: {
                                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("..").TriggerPosition>;
                                default: string;
                            };
                            disabled: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupOffset: {
                                type: NumberConstructor;
                                default: number;
                            };
                            popupTranslate: {
                                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                            };
                            showArrow: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            alignPoint: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupHoverStay: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            blurToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickOutsideToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            unmountOnClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            contentClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            contentStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            arrowClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            arrowStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            popupStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            animationName: {
                                type: StringConstructor;
                                default: string;
                            };
                            duration: {
                                type: import("vue").PropType<number | {
                                    enter: number;
                                    leave: number;
                                }>;
                            };
                            mouseEnterDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            mouseLeaveDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            focusDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            autoFitPopupWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitPopupMinWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFixPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupContainer: {
                                type: import("vue").PropType<string | HTMLElement>;
                            };
                            updateAtScroll: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitTransformOrigin: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            hideEmpty: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            openedClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            autoFitPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            renderToBody: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            preventFocus: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToCloseDistance: {
                                type: NumberConstructor;
                                default: number;
                            };
                        }>> & Readonly<{
                            onResize?: (() => any) | undefined;
                            onHide?: (() => any) | undefined;
                            onShow?: (() => any) | undefined;
                            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                            onOpenChange?: ((visible: boolean) => any) | undefined;
                            onClickOutside?: ((event: Event) => any) | undefined;
                        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                            updateAtScroll: boolean;
                            scrollToClose: boolean;
                            disabled: boolean;
                            open: boolean;
                            autoFitPosition: boolean;
                            animationName: string;
                            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                            defaultOpen: boolean;
                            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                            popupOffset: number;
                            showArrow: boolean;
                            alignPoint: boolean;
                            popupHoverStay: boolean;
                            blurToClose: boolean;
                            clickToClose: boolean;
                            clickOutsideToClose: boolean;
                            unmountOnClose: boolean;
                            mouseEnterDelay: number;
                            mouseLeaveDelay: number;
                            focusDelay: number;
                            autoFitPopupWidth: boolean;
                            autoFitPopupMinWidth: boolean;
                            autoFixPosition: boolean;
                            autoFitTransformOrigin: boolean;
                            hideEmpty: boolean;
                            renderToBody: boolean;
                            preventFocus: boolean;
                            scrollToCloseDistance: number;
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
                        trigger: {
                            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: import("vue").PropType<import("..").TriggerPosition>;
                            default: string;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupOffset: {
                            type: NumberConstructor;
                            default: number;
                        };
                        popupTranslate: {
                            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                        };
                        showArrow: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        alignPoint: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupHoverStay: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        blurToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickOutsideToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        unmountOnClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        contentClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        contentStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: import("vue").PropType<number | {
                                enter: number;
                                leave: number;
                            }>;
                        };
                        mouseEnterDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        mouseLeaveDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        focusDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        autoFitPopupWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitPopupMinWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFixPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupContainer: {
                            type: import("vue").PropType<string | HTMLElement>;
                        };
                        updateAtScroll: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitTransformOrigin: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        hideEmpty: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        openedClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        autoFitPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        renderToBody: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        preventFocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToCloseDistance: {
                            type: NumberConstructor;
                            default: number;
                        };
                    }>> & Readonly<{
                        onResize?: (() => any) | undefined;
                        onHide?: (() => any) | undefined;
                        onShow?: (() => any) | undefined;
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                        onClickOutside?: ((event: Event) => any) | undefined;
                    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        'update:open': (visible: boolean) => true;
                        openChange: (visible: boolean) => true;
                        show: () => true;
                        hide: () => true;
                        clickOutside: (event: Event) => true;
                        resize: () => true;
                    }, string, {
                        updateAtScroll: boolean;
                        scrollToClose: boolean;
                        disabled: boolean;
                        open: boolean;
                        autoFitPosition: boolean;
                        animationName: string;
                        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                        defaultOpen: boolean;
                        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                        popupOffset: number;
                        showArrow: boolean;
                        alignPoint: boolean;
                        popupHoverStay: boolean;
                        blurToClose: boolean;
                        clickToClose: boolean;
                        clickOutsideToClose: boolean;
                        unmountOnClose: boolean;
                        mouseEnterDelay: number;
                        mouseLeaveDelay: number;
                        focusDelay: number;
                        autoFitPopupWidth: boolean;
                        autoFitPopupMinWidth: boolean;
                        autoFixPosition: boolean;
                        autoFitTransformOrigin: boolean;
                        hideEmpty: boolean;
                        renderToBody: boolean;
                        preventFocus: boolean;
                        scrollToCloseDistance: number;
                    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
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
                    defaultOpen: BooleanConstructor;
                    content: StringConstructor;
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                        validator: (value: import("..").TriggerPosition) => boolean;
                    };
                    xs: BooleanConstructor;
                    backgroundColor: StringConstructor;
                    contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                    arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                    popupContainer: import("vue").PropType<string | HTMLElement>;
                }>> & Readonly<{
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                }>, {
                    prefixCls: string;
                    computedOpen: import("vue").ComputedRef<boolean>;
                    contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    handleOpenChange: (visible: boolean) => void;
                }, {}, {}, {}, {
                    xs: boolean;
                    open: boolean;
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: BooleanConstructor;
                content: StringConstructor;
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                popupContainer: import("vue").PropType<string | HTMLElement>;
            }>> & Readonly<{
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
            }>, {
                prefixCls: string;
                computedOpen: import("vue").ComputedRef<boolean>;
                contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                handleOpenChange: (visible: boolean) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (visible: boolean) => true;
                openChange: (visible: boolean) => true;
            }, string, {
                xs: boolean;
                open: boolean;
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            }, {}, string, {}, {
                Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        open: {
                            type: BooleanConstructor;
                            default: undefined;
                        };
                        defaultOpen: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        trigger: {
                            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: import("vue").PropType<import("..").TriggerPosition>;
                            default: string;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupOffset: {
                            type: NumberConstructor;
                            default: number;
                        };
                        popupTranslate: {
                            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                        };
                        showArrow: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        alignPoint: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupHoverStay: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        blurToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickOutsideToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        unmountOnClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        contentClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        contentStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: import("vue").PropType<number | {
                                enter: number;
                                leave: number;
                            }>;
                        };
                        mouseEnterDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        mouseLeaveDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        focusDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        autoFitPopupWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitPopupMinWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFixPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupContainer: {
                            type: import("vue").PropType<string | HTMLElement>;
                        };
                        updateAtScroll: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitTransformOrigin: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        hideEmpty: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        openedClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        autoFitPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        renderToBody: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        preventFocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToCloseDistance: {
                            type: NumberConstructor;
                            default: number;
                        };
                    }>> & Readonly<{
                        onResize?: (() => any) | undefined;
                        onHide?: (() => any) | undefined;
                        onShow?: (() => any) | undefined;
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                        onClickOutside?: ((event: Event) => any) | undefined;
                    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        'update:open': (visible: boolean) => true;
                        openChange: (visible: boolean) => true;
                        show: () => true;
                        hide: () => true;
                        clickOutside: (event: Event) => true;
                        resize: () => true;
                    }, import("vue").PublicProps, {
                        updateAtScroll: boolean;
                        scrollToClose: boolean;
                        disabled: boolean;
                        open: boolean;
                        autoFitPosition: boolean;
                        animationName: string;
                        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                        defaultOpen: boolean;
                        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                        popupOffset: number;
                        showArrow: boolean;
                        alignPoint: boolean;
                        popupHoverStay: boolean;
                        blurToClose: boolean;
                        clickToClose: boolean;
                        clickOutsideToClose: boolean;
                        unmountOnClose: boolean;
                        mouseEnterDelay: number;
                        mouseLeaveDelay: number;
                        focusDelay: number;
                        autoFitPopupWidth: boolean;
                        autoFitPopupMinWidth: boolean;
                        autoFixPosition: boolean;
                        autoFitTransformOrigin: boolean;
                        hideEmpty: boolean;
                        renderToBody: boolean;
                        preventFocus: boolean;
                        scrollToCloseDistance: number;
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
                        trigger: {
                            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: import("vue").PropType<import("..").TriggerPosition>;
                            default: string;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupOffset: {
                            type: NumberConstructor;
                            default: number;
                        };
                        popupTranslate: {
                            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                        };
                        showArrow: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        alignPoint: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupHoverStay: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        blurToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickOutsideToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        unmountOnClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        contentClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        contentStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: import("vue").PropType<number | {
                                enter: number;
                                leave: number;
                            }>;
                        };
                        mouseEnterDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        mouseLeaveDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        focusDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        autoFitPopupWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitPopupMinWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFixPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupContainer: {
                            type: import("vue").PropType<string | HTMLElement>;
                        };
                        updateAtScroll: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitTransformOrigin: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        hideEmpty: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        openedClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        autoFitPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        renderToBody: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        preventFocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToCloseDistance: {
                            type: NumberConstructor;
                            default: number;
                        };
                    }>> & Readonly<{
                        onResize?: (() => any) | undefined;
                        onHide?: (() => any) | undefined;
                        onShow?: (() => any) | undefined;
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                        onClickOutside?: ((event: Event) => any) | undefined;
                    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                        updateAtScroll: boolean;
                        scrollToClose: boolean;
                        disabled: boolean;
                        open: boolean;
                        autoFitPosition: boolean;
                        animationName: string;
                        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                        defaultOpen: boolean;
                        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                        popupOffset: number;
                        showArrow: boolean;
                        alignPoint: boolean;
                        popupHoverStay: boolean;
                        blurToClose: boolean;
                        clickToClose: boolean;
                        clickOutsideToClose: boolean;
                        unmountOnClose: boolean;
                        mouseEnterDelay: number;
                        mouseLeaveDelay: number;
                        focusDelay: number;
                        autoFitPopupWidth: boolean;
                        autoFitPopupMinWidth: boolean;
                        autoFixPosition: boolean;
                        autoFitTransformOrigin: boolean;
                        hideEmpty: boolean;
                        renderToBody: boolean;
                        preventFocus: boolean;
                        scrollToCloseDistance: number;
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
                    trigger: {
                        type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                        default: string;
                    };
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    popupTranslate: {
                        type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                    };
                    showArrow: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    alignPoint: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupHoverStay: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    blurToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickOutsideToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    unmountOnClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    contentClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    contentStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    arrowClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    arrowStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    popupStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    animationName: {
                        type: StringConstructor;
                        default: string;
                    };
                    duration: {
                        type: import("vue").PropType<number | {
                            enter: number;
                            leave: number;
                        }>;
                    };
                    mouseEnterDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    mouseLeaveDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    focusDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    autoFitPopupWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitPopupMinWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFixPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupContainer: {
                        type: import("vue").PropType<string | HTMLElement>;
                    };
                    updateAtScroll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitTransformOrigin: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    hideEmpty: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    openedClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    autoFitPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    renderToBody: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    preventFocus: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToCloseDistance: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>> & Readonly<{
                    onResize?: (() => any) | undefined;
                    onHide?: (() => any) | undefined;
                    onShow?: (() => any) | undefined;
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                    onClickOutside?: ((event: Event) => any) | undefined;
                }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:open': (visible: boolean) => true;
                    openChange: (visible: boolean) => true;
                    show: () => true;
                    hide: () => true;
                    clickOutside: (event: Event) => true;
                    resize: () => true;
                }, string, {
                    updateAtScroll: boolean;
                    scrollToClose: boolean;
                    disabled: boolean;
                    open: boolean;
                    autoFitPosition: boolean;
                    animationName: string;
                    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                    popupOffset: number;
                    showArrow: boolean;
                    alignPoint: boolean;
                    popupHoverStay: boolean;
                    blurToClose: boolean;
                    clickToClose: boolean;
                    clickOutsideToClose: boolean;
                    unmountOnClose: boolean;
                    mouseEnterDelay: number;
                    mouseLeaveDelay: number;
                    focusDelay: number;
                    autoFitPopupWidth: boolean;
                    autoFitPopupMinWidth: boolean;
                    autoFixPosition: boolean;
                    autoFitTransformOrigin: boolean;
                    hideEmpty: boolean;
                    renderToBody: boolean;
                    preventFocus: boolean;
                    scrollToCloseDistance: number;
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
                directive: import("vue").Directive;
            }>;
            IconQuestionCircle: {
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
        FormItemMessage: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            error: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            help: StringConstructor;
        }>, {
            prefixCls: string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            error: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            help: StringConstructor;
        }>> & Readonly<{}>, {
            error: string[];
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type FormInstance = InstanceType<typeof _Form>;
export type FormItemInstance = InstanceType<typeof _FormItem>;
export type { ValidateStatus, ValidateTrigger, ValidatedError, FieldRule, FormItemEventHandler } from './types';
export { _FormItem as FormItem };
export declare const _FormComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        model: {
            type: ObjectConstructor;
            required: boolean;
        };
        layout: {
            type: import("vue").PropType<import("./props").FormLayout>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        labelColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        wrapperColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        labelAlign: {
            type: import("vue").PropType<import("./props").FormLabelAlign>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        rules: {
            type: import("vue").PropType<Record<string, import("./types").FieldRule | import("./types").FieldRule[]>>;
        };
        autoLabelWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        id: {
            type: StringConstructor;
        };
        scrollToFirstError: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSubmit?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError> | undefined;
        }, ev: Event) => any) | undefined;
        onSubmitSuccess?: ((values: Record<string, any>, ev: Event) => any) | undefined;
        onSubmitFailed?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError>;
        }, ev: Event) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        formRef: import("vue").Ref<HTMLFormElement | undefined, HTMLFormElement | undefined>;
        handleSubmit: (e: Event) => void;
        innerValidate: (callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<undefined | Record<string, import("./types").ValidatedError>>;
        innerValidateField: (field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<Record<string, import("./types").ValidatedError> | undefined>;
        innerResetFields: (field?: string | string[]) => void;
        innerClearValidate: (field?: string | string[]) => void;
        innerSetFields: (data: Record<string, import("./types").FieldData>) => void;
        innerScrollToField: (field: string, options?: import("scroll-into-view-if-needed").Options) => void;
    }, {}, {}, {
        validate(callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        validateField(field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        resetFields(field?: string | string[]): void;
        clearValidate(field?: string | string[]): void;
        setFields(data: Record<string, import("./types").FieldData>): void;
        scrollToField(field: string): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        submit: (data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError> | undefined;
        }, ev: Event) => true;
        submitSuccess: (values: Record<string, any>, ev: Event) => true;
        submitFailed: (data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError>;
        }, ev: Event) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        layout: "horizontal" | "vertical" | "inline";
        labelColProps: Record<string, any>;
        wrapperColProps: Record<string, any>;
        labelAlign: "left" | "right";
        autoLabelWidth: boolean;
        scrollToFirstError: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        model: {
            type: ObjectConstructor;
            required: boolean;
        };
        layout: {
            type: import("vue").PropType<import("./props").FormLayout>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        labelColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        wrapperColProps: {
            type: ObjectConstructor;
            default: () => {
                span: number;
                offset: number;
            };
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        labelAlign: {
            type: import("vue").PropType<import("./props").FormLabelAlign>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        rules: {
            type: import("vue").PropType<Record<string, import("./types").FieldRule | import("./types").FieldRule[]>>;
        };
        autoLabelWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        id: {
            type: StringConstructor;
        };
        scrollToFirstError: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onSubmit?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError> | undefined;
        }, ev: Event) => any) | undefined;
        onSubmitSuccess?: ((values: Record<string, any>, ev: Event) => any) | undefined;
        onSubmitFailed?: ((data: {
            values: Record<string, any>;
            errors: Record<string, import("./types").ValidatedError>;
        }, ev: Event) => any) | undefined;
    }>, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        formRef: import("vue").Ref<HTMLFormElement | undefined, HTMLFormElement | undefined>;
        handleSubmit: (e: Event) => void;
        innerValidate: (callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<undefined | Record<string, import("./types").ValidatedError>>;
        innerValidateField: (field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<Record<string, import("./types").ValidatedError> | undefined>;
        innerResetFields: (field?: string | string[]) => void;
        innerClearValidate: (field?: string | string[]) => void;
        innerSetFields: (data: Record<string, import("./types").FieldData>) => void;
        innerScrollToField: (field: string, options?: import("scroll-into-view-if-needed").Options) => void;
    }, {}, {}, {
        validate(callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        validateField(field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
        resetFields(field?: string | string[]): void;
        clearValidate(field?: string | string[]): void;
        setFields(data: Record<string, import("./types").FieldData>): void;
        scrollToField(field: string): void;
    }, {
        disabled: boolean;
        layout: "horizontal" | "vertical" | "inline";
        labelColProps: Record<string, any>;
        wrapperColProps: Record<string, any>;
        labelAlign: "left" | "right";
        autoLabelWidth: boolean;
        scrollToFirstError: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
        required: boolean;
    };
    layout: {
        type: import("vue").PropType<import("./props").FormLayout>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    labelColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    wrapperColProps: {
        type: ObjectConstructor;
        default: () => {
            span: number;
            offset: number;
        };
    };
    labelColStyle: ObjectConstructor;
    wrapperColStyle: ObjectConstructor;
    labelAlign: {
        type: import("vue").PropType<import("./props").FormLabelAlign>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    rules: {
        type: import("vue").PropType<Record<string, import("./types").FieldRule | import("./types").FieldRule[]>>;
    };
    autoLabelWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    scrollToFirstError: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSubmit?: ((data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError> | undefined;
    }, ev: Event) => any) | undefined;
    onSubmitSuccess?: ((values: Record<string, any>, ev: Event) => any) | undefined;
    onSubmitFailed?: ((data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError>;
    }, ev: Event) => any) | undefined;
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    formRef: import("vue").Ref<HTMLFormElement | undefined, HTMLFormElement | undefined>;
    handleSubmit: (e: Event) => void;
    innerValidate: (callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<undefined | Record<string, import("./types").ValidatedError>>;
    innerValidateField: (field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void) => Promise<Record<string, import("./types").ValidatedError> | undefined>;
    innerResetFields: (field?: string | string[]) => void;
    innerClearValidate: (field?: string | string[]) => void;
    innerSetFields: (data: Record<string, import("./types").FieldData>) => void;
    innerScrollToField: (field: string, options?: import("scroll-into-view-if-needed").Options) => void;
}, {}, {}, {
    validate(callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
    validateField(field: string | string[], callback?: (errors: undefined | Record<string, import("./types").ValidatedError>) => void): Promise<undefined | Record<string, import("./types").ValidatedError>>;
    resetFields(field?: string | string[]): void;
    clearValidate(field?: string | string[]): void;
    setFields(data: Record<string, import("./types").FieldData>): void;
    scrollToField(field: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError> | undefined;
    }, ev: Event) => true;
    submitSuccess: (values: Record<string, any>, ev: Event) => true;
    submitFailed: (data: {
        values: Record<string, any>;
        errors: Record<string, import("./types").ValidatedError>;
    }, ev: Event) => true;
}, string, {
    disabled: boolean;
    layout: "horizontal" | "vertical" | "inline";
    labelColProps: Record<string, any>;
    wrapperColProps: Record<string, any>;
    labelAlign: "left" | "right";
    autoLabelWidth: boolean;
    scrollToFirstError: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        field: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        tooltip: {
            type: StringConstructor;
        };
        showColon: {
            type: BooleanConstructor;
            default: boolean;
        };
        noStyle: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        help: StringConstructor;
        extra: StringConstructor;
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        asteriskPosition: {
            type: StringConstructor;
            default: string;
        };
        rules: {
            type: import("vue").PropType<import("./types").FieldRule | import("./types").FieldRule[]>;
        };
        validateStatus: {
            type: import("vue").PropType<import("./types").ValidateStatus>;
        };
        validateTrigger: {
            type: import("vue").PropType<import("./types").ValidateTrigger | import("./types").ValidateTrigger[]>;
            default: string;
        };
        labelColProps: ObjectConstructor;
        wrapperColProps: ObjectConstructor;
        hideLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideAsterisk: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        rowProps: ObjectConstructor;
        rowClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentFlex: {
            type: BooleanConstructor;
            default: boolean;
        };
        mergeProps: {
            type: import("vue").PropType<boolean | ((props: Record<string, any>) => Record<string, any>)>;
            default: boolean;
        };
        labelColFlex: {
            type: (StringConstructor | NumberConstructor)[];
        };
        feedback: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelComponent: {
            type: StringConstructor;
            default: string;
        };
        labelAttrs: ObjectConstructor;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | Record<string, any> | unknown[] | undefined)[]>;
        isRequired: import("vue").ComputedRef<boolean>;
        isError: import("vue").ComputedRef<boolean>;
        finalMessage: import("vue").ComputedRef<string[]>;
        mergedLabelCol: import("vue").ComputedRef<any>;
        mergedWrapperCol: import("vue").ComputedRef<any>;
        labelColCls: import("vue").ComputedRef<(string | {
            [x: string]: string | number | boolean | undefined;
        })[]>;
        autoLabelWidth: import("vue").Ref<boolean | undefined, boolean | undefined> | undefined;
        layout: import("vue").Ref<string | undefined, string | undefined> | undefined;
        mergedLabelStyle: import("vue").ComputedRef<any>;
        wrapperColCls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        mergedWrapperStyle: import("vue").ComputedRef<any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        field: {
            type: StringConstructor;
            default: string;
        };
        label: StringConstructor;
        tooltip: {
            type: StringConstructor;
        };
        showColon: {
            type: BooleanConstructor;
            default: boolean;
        };
        noStyle: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        help: StringConstructor;
        extra: StringConstructor;
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        asteriskPosition: {
            type: StringConstructor;
            default: string;
        };
        rules: {
            type: import("vue").PropType<import("./types").FieldRule | import("./types").FieldRule[]>;
        };
        validateStatus: {
            type: import("vue").PropType<import("./types").ValidateStatus>;
        };
        validateTrigger: {
            type: import("vue").PropType<import("./types").ValidateTrigger | import("./types").ValidateTrigger[]>;
            default: string;
        };
        labelColProps: ObjectConstructor;
        wrapperColProps: ObjectConstructor;
        hideLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideAsterisk: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelColStyle: ObjectConstructor;
        wrapperColStyle: ObjectConstructor;
        rowProps: ObjectConstructor;
        rowClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        contentFlex: {
            type: BooleanConstructor;
            default: boolean;
        };
        mergeProps: {
            type: import("vue").PropType<boolean | ((props: Record<string, any>) => Record<string, any>)>;
            default: boolean;
        };
        labelColFlex: {
            type: (StringConstructor | NumberConstructor)[];
        };
        feedback: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelComponent: {
            type: StringConstructor;
            default: string;
        };
        labelAttrs: ObjectConstructor;
    }>> & Readonly<{}>, {
        required: boolean;
        disabled: boolean;
        feedback: boolean;
        field: string;
        showColon: boolean;
        asteriskPosition: string;
        noStyle: boolean;
        validateTrigger: "focus" | "blur" | "change" | "input" | ("focus" | "blur" | "change" | "input")[];
        hideLabel: boolean;
        hideAsterisk: boolean;
        contentFlex: boolean;
        mergeProps: boolean | ((props: Record<string, any>) => Record<string, any>);
        labelComponent: string;
    }, {}, {
        Row: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            gutter: {
                type: import("vue").PropType<number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue]>;
                default: number;
            };
            justify: {
                type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
                default: string;
            };
            align: {
                type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
                default: string;
            };
            div: {
                type: BooleanConstructor;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classNames: import("vue").ComputedRef<{
                [x: string]: boolean | "center" | "space-around" | "space-between" | "stretch" | "end" | "start";
            }>;
            styles: import("vue").ComputedRef<{
                marginTop?: string;
                marginBottom?: string;
                marginLeft?: string;
                marginRight?: string;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            gutter: {
                type: import("vue").PropType<number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue]>;
                default: number;
            };
            justify: {
                type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
                default: string;
            };
            align: {
                type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
                default: string;
            };
            div: {
                type: BooleanConstructor;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            div: boolean;
            wrap: boolean;
            justify: "center" | "space-around" | "space-between" | "end" | "start";
            align: "center" | "stretch" | "end" | "start";
            gutter: number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue];
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Col: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                default: number;
            };
            offset: {
                type: NumberConstructor;
            };
            order: {
                type: NumberConstructor;
            };
            xs: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            sm: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            md: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            lg: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xxl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            flex: {
                type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
            };
        }>, {
            visible: import("vue").ComputedRef<boolean>;
            classNames: import("vue").ComputedRef<string | {
                [x: string]: number | boolean | undefined;
            }>;
            styles: import("vue").ComputedRef<{
                flex?: import("../grid/types").FlexType;
                paddingLeft?: string;
                paddingRight?: string;
                paddingTop?: string;
                paddingBottom?: string;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                default: number;
            };
            offset: {
                type: NumberConstructor;
            };
            order: {
                type: NumberConstructor;
            };
            xs: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            sm: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            md: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            lg: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            xxl: {
                type: import("vue").PropType<number | {
                    [key: string]: any;
                }>;
            };
            flex: {
                type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
            };
        }>> & Readonly<{}>, {
            span: number;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        FormItemLabel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
            showColon: {
                type: BooleanConstructor;
                default: boolean;
            };
            component: {
                type: StringConstructor;
                default: string;
            };
            asteriskPosition: {
                type: StringConstructor;
                default: string;
            };
            tooltip: {
                type: StringConstructor;
            };
            attrs: ObjectConstructor;
        }>, {
            prefixCls: string;
            labelRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            handleResize: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            required: {
                type: BooleanConstructor;
                default: boolean;
            };
            showColon: {
                type: BooleanConstructor;
                default: boolean;
            };
            component: {
                type: StringConstructor;
                default: string;
            };
            asteriskPosition: {
                type: StringConstructor;
                default: string;
            };
            tooltip: {
                type: StringConstructor;
            };
            attrs: ObjectConstructor;
        }>> & Readonly<{}>, {
            required: boolean;
            component: string;
            showColon: boolean;
            asteriskPosition: string;
        }, {}, {
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
            Tooltip: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    open: {
                        type: BooleanConstructor;
                        default: undefined;
                    };
                    defaultOpen: BooleanConstructor;
                    content: StringConstructor;
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                        validator: (value: import("..").TriggerPosition) => boolean;
                    };
                    xs: BooleanConstructor;
                    backgroundColor: StringConstructor;
                    contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                    arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                    popupContainer: import("vue").PropType<string | HTMLElement>;
                }>> & Readonly<{
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                }>, {
                    prefixCls: string;
                    computedOpen: import("vue").ComputedRef<boolean>;
                    contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    handleOpenChange: (visible: boolean) => void;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:open': (visible: boolean) => true;
                    openChange: (visible: boolean) => true;
                }, import("vue").PublicProps, {
                    xs: boolean;
                    open: boolean;
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                }, true, {}, {}, {
                    Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
                        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                            open: {
                                type: BooleanConstructor;
                                default: undefined;
                            };
                            defaultOpen: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            trigger: {
                                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("..").TriggerPosition>;
                                default: string;
                            };
                            disabled: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupOffset: {
                                type: NumberConstructor;
                                default: number;
                            };
                            popupTranslate: {
                                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                            };
                            showArrow: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            alignPoint: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupHoverStay: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            blurToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickOutsideToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            unmountOnClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            contentClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            contentStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            arrowClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            arrowStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            popupStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            animationName: {
                                type: StringConstructor;
                                default: string;
                            };
                            duration: {
                                type: import("vue").PropType<number | {
                                    enter: number;
                                    leave: number;
                                }>;
                            };
                            mouseEnterDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            mouseLeaveDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            focusDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            autoFitPopupWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitPopupMinWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFixPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupContainer: {
                                type: import("vue").PropType<string | HTMLElement>;
                            };
                            updateAtScroll: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitTransformOrigin: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            hideEmpty: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            openedClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            autoFitPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            renderToBody: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            preventFocus: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToCloseDistance: {
                                type: NumberConstructor;
                                default: number;
                            };
                        }>> & Readonly<{
                            onResize?: (() => any) | undefined;
                            onHide?: (() => any) | undefined;
                            onShow?: (() => any) | undefined;
                            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                            onOpenChange?: ((visible: boolean) => any) | undefined;
                            onClickOutside?: ((event: Event) => any) | undefined;
                        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                            'update:open': (visible: boolean) => true;
                            openChange: (visible: boolean) => true;
                            show: () => true;
                            hide: () => true;
                            clickOutside: (event: Event) => true;
                            resize: () => true;
                        }, import("vue").PublicProps, {
                            updateAtScroll: boolean;
                            scrollToClose: boolean;
                            disabled: boolean;
                            open: boolean;
                            autoFitPosition: boolean;
                            animationName: string;
                            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                            defaultOpen: boolean;
                            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                            popupOffset: number;
                            showArrow: boolean;
                            alignPoint: boolean;
                            popupHoverStay: boolean;
                            blurToClose: boolean;
                            clickToClose: boolean;
                            clickOutsideToClose: boolean;
                            unmountOnClose: boolean;
                            mouseEnterDelay: number;
                            mouseLeaveDelay: number;
                            focusDelay: number;
                            autoFitPopupWidth: boolean;
                            autoFitPopupMinWidth: boolean;
                            autoFixPosition: boolean;
                            autoFitTransformOrigin: boolean;
                            hideEmpty: boolean;
                            renderToBody: boolean;
                            preventFocus: boolean;
                            scrollToCloseDistance: number;
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
                            trigger: {
                                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                                default: string;
                            };
                            placement: {
                                type: import("vue").PropType<import("..").TriggerPosition>;
                                default: string;
                            };
                            disabled: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupOffset: {
                                type: NumberConstructor;
                                default: number;
                            };
                            popupTranslate: {
                                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                            };
                            showArrow: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            alignPoint: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupHoverStay: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            blurToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            clickOutsideToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            unmountOnClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            contentClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            contentStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            arrowClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            arrowStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            popupStyle: {
                                type: import("vue").PropType<import("vue").CSSProperties>;
                            };
                            animationName: {
                                type: StringConstructor;
                                default: string;
                            };
                            duration: {
                                type: import("vue").PropType<number | {
                                    enter: number;
                                    leave: number;
                                }>;
                            };
                            mouseEnterDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            mouseLeaveDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            focusDelay: {
                                type: NumberConstructor;
                                default: number;
                            };
                            autoFitPopupWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitPopupMinWidth: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFixPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            popupContainer: {
                                type: import("vue").PropType<string | HTMLElement>;
                            };
                            updateAtScroll: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            autoFitTransformOrigin: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            hideEmpty: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            openedClass: {
                                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                            };
                            autoFitPosition: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            renderToBody: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            preventFocus: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToClose: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            scrollToCloseDistance: {
                                type: NumberConstructor;
                                default: number;
                            };
                        }>> & Readonly<{
                            onResize?: (() => any) | undefined;
                            onHide?: (() => any) | undefined;
                            onShow?: (() => any) | undefined;
                            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                            onOpenChange?: ((visible: boolean) => any) | undefined;
                            onClickOutside?: ((event: Event) => any) | undefined;
                        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                            updateAtScroll: boolean;
                            scrollToClose: boolean;
                            disabled: boolean;
                            open: boolean;
                            autoFitPosition: boolean;
                            animationName: string;
                            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                            defaultOpen: boolean;
                            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                            popupOffset: number;
                            showArrow: boolean;
                            alignPoint: boolean;
                            popupHoverStay: boolean;
                            blurToClose: boolean;
                            clickToClose: boolean;
                            clickOutsideToClose: boolean;
                            unmountOnClose: boolean;
                            mouseEnterDelay: number;
                            mouseLeaveDelay: number;
                            focusDelay: number;
                            autoFitPopupWidth: boolean;
                            autoFitPopupMinWidth: boolean;
                            autoFixPosition: boolean;
                            autoFitTransformOrigin: boolean;
                            hideEmpty: boolean;
                            renderToBody: boolean;
                            preventFocus: boolean;
                            scrollToCloseDistance: number;
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
                        trigger: {
                            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: import("vue").PropType<import("..").TriggerPosition>;
                            default: string;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupOffset: {
                            type: NumberConstructor;
                            default: number;
                        };
                        popupTranslate: {
                            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                        };
                        showArrow: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        alignPoint: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupHoverStay: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        blurToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickOutsideToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        unmountOnClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        contentClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        contentStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: import("vue").PropType<number | {
                                enter: number;
                                leave: number;
                            }>;
                        };
                        mouseEnterDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        mouseLeaveDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        focusDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        autoFitPopupWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitPopupMinWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFixPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupContainer: {
                            type: import("vue").PropType<string | HTMLElement>;
                        };
                        updateAtScroll: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitTransformOrigin: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        hideEmpty: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        openedClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        autoFitPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        renderToBody: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        preventFocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToCloseDistance: {
                            type: NumberConstructor;
                            default: number;
                        };
                    }>> & Readonly<{
                        onResize?: (() => any) | undefined;
                        onHide?: (() => any) | undefined;
                        onShow?: (() => any) | undefined;
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                        onClickOutside?: ((event: Event) => any) | undefined;
                    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        'update:open': (visible: boolean) => true;
                        openChange: (visible: boolean) => true;
                        show: () => true;
                        hide: () => true;
                        clickOutside: (event: Event) => true;
                        resize: () => true;
                    }, string, {
                        updateAtScroll: boolean;
                        scrollToClose: boolean;
                        disabled: boolean;
                        open: boolean;
                        autoFitPosition: boolean;
                        animationName: string;
                        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                        defaultOpen: boolean;
                        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                        popupOffset: number;
                        showArrow: boolean;
                        alignPoint: boolean;
                        popupHoverStay: boolean;
                        blurToClose: boolean;
                        clickToClose: boolean;
                        clickOutsideToClose: boolean;
                        unmountOnClose: boolean;
                        mouseEnterDelay: number;
                        mouseLeaveDelay: number;
                        focusDelay: number;
                        autoFitPopupWidth: boolean;
                        autoFitPopupMinWidth: boolean;
                        autoFixPosition: boolean;
                        autoFitTransformOrigin: boolean;
                        hideEmpty: boolean;
                        renderToBody: boolean;
                        preventFocus: boolean;
                        scrollToCloseDistance: number;
                    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
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
                    defaultOpen: BooleanConstructor;
                    content: StringConstructor;
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                        validator: (value: import("..").TriggerPosition) => boolean;
                    };
                    xs: BooleanConstructor;
                    backgroundColor: StringConstructor;
                    contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                    arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                    arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                    popupContainer: import("vue").PropType<string | HTMLElement>;
                }>> & Readonly<{
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                }>, {
                    prefixCls: string;
                    computedOpen: import("vue").ComputedRef<boolean>;
                    contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                    computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                    handleOpenChange: (visible: boolean) => void;
                }, {}, {}, {}, {
                    xs: boolean;
                    open: boolean;
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: BooleanConstructor;
                content: StringConstructor;
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: import("vue").PropType<import("../_utils/types").ClassName>;
                contentStyle: import("vue").PropType<import("vue").CSSProperties>;
                arrowClass: import("vue").PropType<import("../_utils/types").ClassName>;
                arrowStyle: import("vue").PropType<import("vue").CSSProperties>;
                popupContainer: import("vue").PropType<string | HTMLElement>;
            }>> & Readonly<{
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
            }>, {
                prefixCls: string;
                computedOpen: import("vue").ComputedRef<boolean>;
                contentCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                computedContentStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                arrowCls: import("vue").ComputedRef<(import("../_utils/types").ClassName | undefined)[]>;
                computedArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties | undefined>;
                handleOpenChange: (visible: boolean) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (visible: boolean) => true;
                openChange: (visible: boolean) => true;
            }, string, {
                xs: boolean;
                open: boolean;
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            }, {}, string, {}, {
                Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        open: {
                            type: BooleanConstructor;
                            default: undefined;
                        };
                        defaultOpen: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        trigger: {
                            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: import("vue").PropType<import("..").TriggerPosition>;
                            default: string;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupOffset: {
                            type: NumberConstructor;
                            default: number;
                        };
                        popupTranslate: {
                            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                        };
                        showArrow: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        alignPoint: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupHoverStay: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        blurToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickOutsideToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        unmountOnClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        contentClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        contentStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: import("vue").PropType<number | {
                                enter: number;
                                leave: number;
                            }>;
                        };
                        mouseEnterDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        mouseLeaveDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        focusDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        autoFitPopupWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitPopupMinWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFixPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupContainer: {
                            type: import("vue").PropType<string | HTMLElement>;
                        };
                        updateAtScroll: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitTransformOrigin: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        hideEmpty: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        openedClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        autoFitPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        renderToBody: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        preventFocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToCloseDistance: {
                            type: NumberConstructor;
                            default: number;
                        };
                    }>> & Readonly<{
                        onResize?: (() => any) | undefined;
                        onHide?: (() => any) | undefined;
                        onShow?: (() => any) | undefined;
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                        onClickOutside?: ((event: Event) => any) | undefined;
                    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        'update:open': (visible: boolean) => true;
                        openChange: (visible: boolean) => true;
                        show: () => true;
                        hide: () => true;
                        clickOutside: (event: Event) => true;
                        resize: () => true;
                    }, import("vue").PublicProps, {
                        updateAtScroll: boolean;
                        scrollToClose: boolean;
                        disabled: boolean;
                        open: boolean;
                        autoFitPosition: boolean;
                        animationName: string;
                        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                        defaultOpen: boolean;
                        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                        popupOffset: number;
                        showArrow: boolean;
                        alignPoint: boolean;
                        popupHoverStay: boolean;
                        blurToClose: boolean;
                        clickToClose: boolean;
                        clickOutsideToClose: boolean;
                        unmountOnClose: boolean;
                        mouseEnterDelay: number;
                        mouseLeaveDelay: number;
                        focusDelay: number;
                        autoFitPopupWidth: boolean;
                        autoFitPopupMinWidth: boolean;
                        autoFixPosition: boolean;
                        autoFitTransformOrigin: boolean;
                        hideEmpty: boolean;
                        renderToBody: boolean;
                        preventFocus: boolean;
                        scrollToCloseDistance: number;
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
                        trigger: {
                            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: import("vue").PropType<import("..").TriggerPosition>;
                            default: string;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupOffset: {
                            type: NumberConstructor;
                            default: number;
                        };
                        popupTranslate: {
                            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                        };
                        showArrow: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        alignPoint: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupHoverStay: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        blurToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        clickOutsideToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        unmountOnClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        contentClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        contentStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: import("vue").PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: import("vue").PropType<number | {
                                enter: number;
                                leave: number;
                            }>;
                        };
                        mouseEnterDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        mouseLeaveDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        focusDelay: {
                            type: NumberConstructor;
                            default: number;
                        };
                        autoFitPopupWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitPopupMinWidth: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFixPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        popupContainer: {
                            type: import("vue").PropType<string | HTMLElement>;
                        };
                        updateAtScroll: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autoFitTransformOrigin: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        hideEmpty: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        openedClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        autoFitPosition: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        renderToBody: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        preventFocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToClose: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        scrollToCloseDistance: {
                            type: NumberConstructor;
                            default: number;
                        };
                    }>> & Readonly<{
                        onResize?: (() => any) | undefined;
                        onHide?: (() => any) | undefined;
                        onShow?: (() => any) | undefined;
                        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                        onOpenChange?: ((visible: boolean) => any) | undefined;
                        onClickOutside?: ((event: Event) => any) | undefined;
                    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                        updateAtScroll: boolean;
                        scrollToClose: boolean;
                        disabled: boolean;
                        open: boolean;
                        autoFitPosition: boolean;
                        animationName: string;
                        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                        defaultOpen: boolean;
                        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                        popupOffset: number;
                        showArrow: boolean;
                        alignPoint: boolean;
                        popupHoverStay: boolean;
                        blurToClose: boolean;
                        clickToClose: boolean;
                        clickOutsideToClose: boolean;
                        unmountOnClose: boolean;
                        mouseEnterDelay: number;
                        mouseLeaveDelay: number;
                        focusDelay: number;
                        autoFitPopupWidth: boolean;
                        autoFitPopupMinWidth: boolean;
                        autoFixPosition: boolean;
                        autoFitTransformOrigin: boolean;
                        hideEmpty: boolean;
                        renderToBody: boolean;
                        preventFocus: boolean;
                        scrollToCloseDistance: number;
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
                    trigger: {
                        type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                        default: string;
                    };
                    placement: {
                        type: import("vue").PropType<import("..").TriggerPosition>;
                        default: string;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupOffset: {
                        type: NumberConstructor;
                        default: number;
                    };
                    popupTranslate: {
                        type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                    };
                    showArrow: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    alignPoint: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupHoverStay: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    blurToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    clickOutsideToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    unmountOnClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    contentClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    contentStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    arrowClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    arrowStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    popupStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                    };
                    animationName: {
                        type: StringConstructor;
                        default: string;
                    };
                    duration: {
                        type: import("vue").PropType<number | {
                            enter: number;
                            leave: number;
                        }>;
                    };
                    mouseEnterDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    mouseLeaveDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    focusDelay: {
                        type: NumberConstructor;
                        default: number;
                    };
                    autoFitPopupWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitPopupMinWidth: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFixPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    popupContainer: {
                        type: import("vue").PropType<string | HTMLElement>;
                    };
                    updateAtScroll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    autoFitTransformOrigin: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    hideEmpty: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    openedClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    autoFitPosition: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    renderToBody: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    preventFocus: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToClose: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    scrollToCloseDistance: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>> & Readonly<{
                    onResize?: (() => any) | undefined;
                    onHide?: (() => any) | undefined;
                    onShow?: (() => any) | undefined;
                    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                    onOpenChange?: ((visible: boolean) => any) | undefined;
                    onClickOutside?: ((event: Event) => any) | undefined;
                }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    'update:open': (visible: boolean) => true;
                    openChange: (visible: boolean) => true;
                    show: () => true;
                    hide: () => true;
                    clickOutside: (event: Event) => true;
                    resize: () => true;
                }, string, {
                    updateAtScroll: boolean;
                    scrollToClose: boolean;
                    disabled: boolean;
                    open: boolean;
                    autoFitPosition: boolean;
                    animationName: string;
                    trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                    defaultOpen: boolean;
                    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                    popupOffset: number;
                    showArrow: boolean;
                    alignPoint: boolean;
                    popupHoverStay: boolean;
                    blurToClose: boolean;
                    clickToClose: boolean;
                    clickOutsideToClose: boolean;
                    unmountOnClose: boolean;
                    mouseEnterDelay: number;
                    mouseLeaveDelay: number;
                    focusDelay: number;
                    autoFitPopupWidth: boolean;
                    autoFitPopupMinWidth: boolean;
                    autoFixPosition: boolean;
                    autoFitTransformOrigin: boolean;
                    hideEmpty: boolean;
                    renderToBody: boolean;
                    preventFocus: boolean;
                    scrollToCloseDistance: number;
                }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
                directive: import("vue").Directive;
            }>;
            IconQuestionCircle: {
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
        FormItemMessage: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            error: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            help: StringConstructor;
        }>, {
            prefixCls: string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            error: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            help: StringConstructor;
        }>> & Readonly<{}>, {
            error: string[];
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Form };
export { formProps };
export default Form;
