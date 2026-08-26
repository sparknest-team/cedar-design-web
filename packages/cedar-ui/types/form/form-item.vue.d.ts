import { PropType } from 'vue';
import { FieldRule, ValidateStatus, ValidateTrigger } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 表单元素在数据对象中的path（数据项必填）
     * @en The path of the form element in the data object (required for the data item)
     */
    field: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 标签的文本
     * @en Label text
     */
    label: StringConstructor;
    /**
     * @zh 提示内容
     * @en Tooltip text
     * @version 2.41.0
     */
    tooltip: {
        type: StringConstructor;
    };
    /**
     * @zh 是否显示冒号
     * @en Whether to show a colon
     */
    showColon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否去除样式
     * @en Whether to remove the style
     */
    noStyle: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 帮助文案
     * @en Help copywriting
     */
    help: StringConstructor;
    /**
     * @zh 额外显示的文案
     * @en Additional display copy
     */
    extra: StringConstructor;
    /**
     * @zh 是否必须填写
     * @en Is it required
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 可选择将星号置于 label 前/后
     * @en Optionally place an asterisk before/after the label
     * @values 'start', 'end'
     * @version 2.41.0
     */
    asteriskPosition: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 表单项校验规则（优先级高于 form 的 rules）
     * @en Form item validation rules (The priority is higher than the rules of form)
     */
    rules: {
        type: PropType<FieldRule | FieldRule[]>;
    };
    /**
     * @zh 校验状态
     * @en Validate status
     * @values 'success', 'warning', 'error', 'validating'
     */
    validateStatus: {
        type: PropType<ValidateStatus>;
    };
    /**
     * @zh 触发校验的事件
     * @en The event that triggers the verification
     * @values 'change', 'input', 'focus', 'blur'
     */
    validateTrigger: {
        type: PropType<ValidateTrigger | ValidateTrigger[]>;
        default: string;
    };
    /**
     * @zh 标签元素布局选项。参数同 `<col>` 组件一致
     * @en Label element layout options. The parameters are the same as the `<col>` component
     */
    labelColProps: ObjectConstructor;
    /**
     * @zh 表单控件布局选项。参数同 `<col>` 组件一致
     * @en Form control layout options. The parameters are the same as the `<col>` component
     */
    wrapperColProps: ObjectConstructor;
    /**
     * @zh 是否隐藏标签
     * @en Whether to hide the label
     */
    hideLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否隐藏星号
     * @en Whether to hide the asterisk
     */
    hideAsterisk: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 标签元素布局组件的 style
     * @en The style of the label element layout component
     * @version 2.10.0
     */
    labelColStyle: ObjectConstructor;
    /**
     * @zh 表单控件布局组件的 style
     * @en The style of the form control layout component
     * @version 2.10.0
     */
    wrapperColStyle: ObjectConstructor;
    /**
     * @zh 表单项布局选项。参数同 `<row>` 组件一致
     * @en Form item layout options. The parameters are the same as the `<row>` component
     * @version 2.10.0
     */
    rowProps: ObjectConstructor;
    /**
     * @zh 表单项布局组件的 class
     * @en The class of the form item layout component
     * @version 2.10.0
     */
    rowClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    /**
     * @zh 表单控件包裹层的 class
     * @en The class of the form control wrapping layer
     * @version 2.10.0
     */
    contentClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    /**
     * @zh 内容层是否开启 flex 布局
     * @en Whether to enable flex layout in the content layer
     * @version 2.13.0
     */
    contentFlex: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh （已废除）控制传递到子元素上的 Props。默认包括 disabled、error、size、 events 和 FormItem 上的额外属性。2.18.0 版本废除
     * @en (Repealed) Control the Props passed to the child element. The default includes disabled, error, size, events and additional attributes on FormItem. Version 2.18.0 deprecated
     * @version 2.13.0
     */
    mergeProps: {
        type: PropType<boolean | ((props: Record<string, any>) => Record<string, any>)>;
        default: boolean;
    };
    /**
     * @zh 设置标签 `Col` 组件的 flex 属性。设置时表单 `Col` 组件的 flex 属性会被设置为 `auto`。
     * @en Set the flex property of the label `Col` component. When set, the flex property of the form `Col` component will be set to `auto`.
     * @version 2.13.0
     */
    labelColFlex: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 是否显示表单控件的反馈图标
     * @en Whether to show the feedback icon for the form control
     * @version 2.16.0
     */
    feedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 表单项标签渲染的元素
     * @en The element that the form item label renders
     * @version 2.22.0
     */
    labelComponent: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 表单项元素的属性
     * @en Attributes of the form item element
     * @version 2.22.0
     */
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
    /**
     * @zh 表单元素在数据对象中的path（数据项必填）
     * @en The path of the form element in the data object (required for the data item)
     */
    field: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 标签的文本
     * @en Label text
     */
    label: StringConstructor;
    /**
     * @zh 提示内容
     * @en Tooltip text
     * @version 2.41.0
     */
    tooltip: {
        type: StringConstructor;
    };
    /**
     * @zh 是否显示冒号
     * @en Whether to show a colon
     */
    showColon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否去除样式
     * @en Whether to remove the style
     */
    noStyle: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 帮助文案
     * @en Help copywriting
     */
    help: StringConstructor;
    /**
     * @zh 额外显示的文案
     * @en Additional display copy
     */
    extra: StringConstructor;
    /**
     * @zh 是否必须填写
     * @en Is it required
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 可选择将星号置于 label 前/后
     * @en Optionally place an asterisk before/after the label
     * @values 'start', 'end'
     * @version 2.41.0
     */
    asteriskPosition: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 表单项校验规则（优先级高于 form 的 rules）
     * @en Form item validation rules (The priority is higher than the rules of form)
     */
    rules: {
        type: PropType<FieldRule | FieldRule[]>;
    };
    /**
     * @zh 校验状态
     * @en Validate status
     * @values 'success', 'warning', 'error', 'validating'
     */
    validateStatus: {
        type: PropType<ValidateStatus>;
    };
    /**
     * @zh 触发校验的事件
     * @en The event that triggers the verification
     * @values 'change', 'input', 'focus', 'blur'
     */
    validateTrigger: {
        type: PropType<ValidateTrigger | ValidateTrigger[]>;
        default: string;
    };
    /**
     * @zh 标签元素布局选项。参数同 `<col>` 组件一致
     * @en Label element layout options. The parameters are the same as the `<col>` component
     */
    labelColProps: ObjectConstructor;
    /**
     * @zh 表单控件布局选项。参数同 `<col>` 组件一致
     * @en Form control layout options. The parameters are the same as the `<col>` component
     */
    wrapperColProps: ObjectConstructor;
    /**
     * @zh 是否隐藏标签
     * @en Whether to hide the label
     */
    hideLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否隐藏星号
     * @en Whether to hide the asterisk
     */
    hideAsterisk: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 标签元素布局组件的 style
     * @en The style of the label element layout component
     * @version 2.10.0
     */
    labelColStyle: ObjectConstructor;
    /**
     * @zh 表单控件布局组件的 style
     * @en The style of the form control layout component
     * @version 2.10.0
     */
    wrapperColStyle: ObjectConstructor;
    /**
     * @zh 表单项布局选项。参数同 `<row>` 组件一致
     * @en Form item layout options. The parameters are the same as the `<row>` component
     * @version 2.10.0
     */
    rowProps: ObjectConstructor;
    /**
     * @zh 表单项布局组件的 class
     * @en The class of the form item layout component
     * @version 2.10.0
     */
    rowClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    /**
     * @zh 表单控件包裹层的 class
     * @en The class of the form control wrapping layer
     * @version 2.10.0
     */
    contentClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    /**
     * @zh 内容层是否开启 flex 布局
     * @en Whether to enable flex layout in the content layer
     * @version 2.13.0
     */
    contentFlex: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh （已废除）控制传递到子元素上的 Props。默认包括 disabled、error、size、 events 和 FormItem 上的额外属性。2.18.0 版本废除
     * @en (Repealed) Control the Props passed to the child element. The default includes disabled, error, size, events and additional attributes on FormItem. Version 2.18.0 deprecated
     * @version 2.13.0
     */
    mergeProps: {
        type: PropType<boolean | ((props: Record<string, any>) => Record<string, any>)>;
        default: boolean;
    };
    /**
     * @zh 设置标签 `Col` 组件的 flex 属性。设置时表单 `Col` 组件的 flex 属性会被设置为 `auto`。
     * @en Set the flex property of the label `Col` component. When set, the flex property of the form `Col` component will be set to `auto`.
     * @version 2.13.0
     */
    labelColFlex: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 是否显示表单控件的反馈图标
     * @en Whether to show the feedback icon for the form control
     * @version 2.16.0
     */
    feedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 表单项标签渲染的元素
     * @en The element that the form item label renders
     * @version 2.22.0
     */
    labelComponent: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 表单项元素的属性
     * @en Attributes of the form item element
     * @version 2.22.0
     */
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
            type: PropType<number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue]>;
            default: number;
        };
        justify: {
            type: PropType<"start" | "center" | "end" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: PropType<"start" | "center" | "end" | "stretch">;
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
            type: PropType<number | import("..").ResponsiveValue | [number | import("..").ResponsiveValue, number | import("..").ResponsiveValue]>;
            default: number;
        };
        justify: {
            type: PropType<"start" | "center" | "end" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: PropType<"start" | "center" | "end" | "stretch">;
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
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        sm: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        md: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        lg: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        xl: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        xxl: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        flex: {
            type: PropType<number | string | "initial" | "auto" | "none">;
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
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        sm: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        md: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        lg: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        xl: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        xxl: {
            type: PropType<number | {
                [key: string]: any;
            }>;
        };
        flex: {
            type: PropType<number | string | "initial" | "auto" | "none">;
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
                    type: PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: PropType<import("../_utils/types").ClassName>;
                contentStyle: PropType<import("vue").CSSProperties>;
                arrowClass: PropType<import("../_utils/types").ClassName>;
                arrowStyle: PropType<import("vue").CSSProperties>;
                popupContainer: PropType<string | HTMLElement>;
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
                            type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: PropType<import("..").TriggerPosition>;
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
                            type: PropType<import("..").TriggerPopupTranslate>;
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
                            type: PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: PropType<number | {
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
                            type: PropType<string | HTMLElement>;
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
                            type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                            default: string;
                        };
                        placement: {
                            type: PropType<import("..").TriggerPosition>;
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
                            type: PropType<import("..").TriggerPopupTranslate>;
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
                            type: PropType<import("vue").CSSProperties>;
                        };
                        arrowClass: {
                            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                        };
                        arrowStyle: {
                            type: PropType<import("vue").CSSProperties>;
                        };
                        popupStyle: {
                            type: PropType<import("vue").CSSProperties>;
                        };
                        animationName: {
                            type: StringConstructor;
                            default: string;
                        };
                        duration: {
                            type: PropType<number | {
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
                            type: PropType<string | HTMLElement>;
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
                        type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                        default: string;
                    };
                    placement: {
                        type: PropType<import("..").TriggerPosition>;
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
                        type: PropType<import("..").TriggerPopupTranslate>;
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
                        type: PropType<import("vue").CSSProperties>;
                    };
                    arrowClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    arrowStyle: {
                        type: PropType<import("vue").CSSProperties>;
                    };
                    popupStyle: {
                        type: PropType<import("vue").CSSProperties>;
                    };
                    animationName: {
                        type: StringConstructor;
                        default: string;
                    };
                    duration: {
                        type: PropType<number | {
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
                        type: PropType<string | HTMLElement>;
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
                    type: PropType<import("..").TriggerPosition>;
                    default: string;
                    validator: (value: import("..").TriggerPosition) => boolean;
                };
                xs: BooleanConstructor;
                backgroundColor: StringConstructor;
                contentClass: PropType<import("../_utils/types").ClassName>;
                contentStyle: PropType<import("vue").CSSProperties>;
                arrowClass: PropType<import("../_utils/types").ClassName>;
                arrowStyle: PropType<import("vue").CSSProperties>;
                popupContainer: PropType<string | HTMLElement>;
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
                type: PropType<import("..").TriggerPosition>;
                default: string;
                validator: (value: import("..").TriggerPosition) => boolean;
            };
            xs: BooleanConstructor;
            backgroundColor: StringConstructor;
            contentClass: PropType<import("../_utils/types").ClassName>;
            contentStyle: PropType<import("vue").CSSProperties>;
            arrowClass: PropType<import("../_utils/types").ClassName>;
            arrowStyle: PropType<import("vue").CSSProperties>;
            popupContainer: PropType<string | HTMLElement>;
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
                        type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                        default: string;
                    };
                    placement: {
                        type: PropType<import("..").TriggerPosition>;
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
                        type: PropType<import("..").TriggerPopupTranslate>;
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
                        type: PropType<import("vue").CSSProperties>;
                    };
                    arrowClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    arrowStyle: {
                        type: PropType<import("vue").CSSProperties>;
                    };
                    popupStyle: {
                        type: PropType<import("vue").CSSProperties>;
                    };
                    animationName: {
                        type: StringConstructor;
                        default: string;
                    };
                    duration: {
                        type: PropType<number | {
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
                        type: PropType<string | HTMLElement>;
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
                        type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                        default: string;
                    };
                    placement: {
                        type: PropType<import("..").TriggerPosition>;
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
                        type: PropType<import("..").TriggerPopupTranslate>;
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
                        type: PropType<import("vue").CSSProperties>;
                    };
                    arrowClass: {
                        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                    };
                    arrowStyle: {
                        type: PropType<import("vue").CSSProperties>;
                    };
                    popupStyle: {
                        type: PropType<import("vue").CSSProperties>;
                    };
                    animationName: {
                        type: StringConstructor;
                        default: string;
                    };
                    duration: {
                        type: PropType<number | {
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
                        type: PropType<string | HTMLElement>;
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
                    type: PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: PropType<import("..").TriggerPosition>;
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
                    type: PropType<import("..").TriggerPopupTranslate>;
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
                    type: PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: PropType<number | {
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
                    type: PropType<string | HTMLElement>;
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
            type: PropType<string[]>;
            default: () => never[];
        };
        help: StringConstructor;
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        error: {
            type: PropType<string[]>;
            default: () => never[];
        };
        help: StringConstructor;
    }>> & Readonly<{}>, {
        error: string[];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
