import { PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sizeOptions: {
        type: PropType<(string | number)[]>;
        required: true;
    };
    pageSize: NumberConstructor;
    disabled: BooleanConstructor;
    size: {
        type: PropType<ComponentSize>;
    };
    onChange: {
        type: PropType<(value: number) => void>;
    };
    selectProps: {
        type: ObjectConstructor;
    };
}>, {
    prefixCls: string;
    options: import("vue").ComputedRef<{
        value: string | number;
        label: string;
    }[]>;
    handleChange: (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sizeOptions: {
        type: PropType<(string | number)[]>;
        required: true;
    };
    pageSize: NumberConstructor;
    disabled: BooleanConstructor;
    size: {
        type: PropType<ComponentSize>;
    };
    onChange: {
        type: PropType<(value: number) => void>;
    };
    selectProps: {
        type: ObjectConstructor;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
}, {}, {
    Select: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
                default: (props: {
                    multiple?: boolean;
                }) => "" | never[];
            };
            inputValue: {
                type: StringConstructor;
            };
            defaultInputValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: PropType<ComponentSize>;
                validator: (value: unknown) => value is ComponentSize;
            };
            variant: {
                type: PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            placeholder: StringConstructor;
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: PropType<boolean | {
                    retainInputValue?: boolean;
                }>;
                default: (props: {
                    multiple?: boolean;
                }) => boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            popupContainer: {
                type: PropType<string | HTMLElement>;
            };
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: boolean;
            };
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterOption: {
                type: PropType<boolean | ((inputValue: string, option: import("..").SelectOptionData) => boolean)>;
                default: boolean;
            };
            options: {
                type: PropType<(string | number | boolean | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
                default: () => never[];
            };
            virtualListProps: {
                type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            triggerProps: {
                type: PropType<import("..").TriggerProps>;
            };
            formatLabel: {
                type: PropType<(data: import("..").SelectOptionData) => string>;
            };
            fallbackOption: {
                type: PropType<boolean | ((value: string | number | boolean | Record<string, unknown>) => import("..").SelectOptionData)>;
                default: boolean;
            };
            showExtraOptions: {
                type: BooleanConstructor;
                default: boolean;
            };
            searchDelay: {
                type: NumberConstructor;
                default: number;
            };
            limit: {
                type: NumberConstructor;
                default: number;
            };
            fieldNames: {
                type: PropType<import("..").SelectFieldNames>;
            };
            scrollbar: {
                type: PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
            showHeaderOnEmpty: {
                type: PropType<boolean>;
                default: boolean;
            };
            showFooterOnEmpty: {
                type: PropType<boolean>;
                default: boolean;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onClear?: ((ev: Event) => any) | undefined;
            onSearch?: ((inputValue: string) => any) | undefined;
            onChange?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onRemove?: ((removed: string | number | boolean | Record<string, any> | undefined) => any) | undefined;
            onDropdownScroll?: ((ev: Event) => any) | undefined;
            onDropdownReachBottom?: ((ev: Event) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string) => any) | undefined;
            onExceedLimit?: ((value: string | number | boolean | Record<string, any> | undefined, ev: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => true;
            'update:inputValue': (inputValue: string) => true;
            'update:open': (visible: boolean) => true;
            change: (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => true;
            inputValueChange: (inputValue: string) => true;
            openChange: (visible: boolean) => true;
            clear: (ev: Event) => true;
            remove: (removed: string | number | boolean | Record<string, any> | undefined) => true;
            search: (inputValue: string) => true;
            dropdownScroll: (ev: Event) => true;
            dropdownReachBottom: (ev: Event) => true;
            exceedLimit: (value: string | number | boolean | Record<string, any> | undefined, ev: Event) => true;
        }, import("vue").PublicProps, {
            error: boolean;
            disabled: boolean;
            open: boolean;
            scrollbar: boolean | import("..").ScrollbarProps;
            multiple: boolean;
            defaultValue: string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[];
            modelValue: string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[];
            clearable: boolean;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            options: (string | number | boolean | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
            loading: boolean;
            showHeaderOnEmpty: boolean;
            showFooterOnEmpty: boolean;
            filterOption: boolean | ((inputValue: string, option: import("..").SelectOptionData) => boolean);
            showExtraOptions: boolean;
            defaultActiveFirstOption: boolean;
            defaultInputValue: string;
            maxTagCount: number;
            tagNowrap: boolean;
            creatable: boolean;
            filterable: boolean | {
                retainInputValue?: boolean;
            };
            fallbackOption: boolean | ((value: string | number | boolean | Record<string, unknown>) => import("..").SelectOptionData);
            searchDelay: number;
            limit: number;
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
            SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                    required: true;
                };
                inputValue: StringConstructor;
                placeholder: StringConstructor;
                variant: {
                    type: PropType<"filled" | "outlined" | "standard">;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                opened: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: PropType<ComponentSize>;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                creatable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                filterable: {
                    type: BooleanConstructor;
                    default: (props: import("../_utils/types").Data) => boolean;
                };
                maxTagCount: {
                    type: NumberConstructor;
                    default: number;
                };
                tagNowrap: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                retainInputValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>, {
                inputRef: import("vue").ComputedRef<HTMLInputElement>;
                handleFocus: (ev: FocusEvent) => void;
                handleBlur: (ev: FocusEvent) => void;
                render: () => import("vue/jsx-runtime").JSX.Element;
            }, {}, {}, {
                focus(): void;
                blur(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "clear" | "blur" | "remove")[], "focus" | "clear" | "blur" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                modelValue: {
                    type: PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                    required: true;
                };
                inputValue: StringConstructor;
                placeholder: StringConstructor;
                variant: {
                    type: PropType<"filled" | "outlined" | "standard">;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                error: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                opened: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: PropType<ComponentSize>;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                creatable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                filterable: {
                    type: BooleanConstructor;
                    default: (props: import("../_utils/types").Data) => boolean;
                };
                maxTagCount: {
                    type: NumberConstructor;
                    default: number;
                };
                tagNowrap: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                retainInputValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onFocus?: ((...args: any[]) => any) | undefined;
                onBlur?: ((...args: any[]) => any) | undefined;
                onClear?: ((...args: any[]) => any) | undefined;
                onRemove?: ((...args: any[]) => any) | undefined;
            }>, {
                error: boolean;
                disabled: boolean;
                multiple: boolean;
                variant: "filled" | "outlined" | "standard";
                clearable: boolean;
                loading: boolean;
                opened: boolean;
                retainInputValue: boolean;
                maxTagCount: number;
                tagNowrap: boolean;
                bordered: boolean;
                creatable: boolean;
                filterable: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
                default: (props: {
                    multiple?: boolean;
                }) => "" | never[];
            };
            inputValue: {
                type: StringConstructor;
            };
            defaultInputValue: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: PropType<ComponentSize>;
                validator: (value: unknown) => value is ComponentSize;
            };
            variant: {
                type: PropType<import("../_utils/form-control").FormControlVariant>;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            placeholder: StringConstructor;
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: PropType<boolean | {
                    retainInputValue?: boolean;
                }>;
                default: (props: {
                    multiple?: boolean;
                }) => boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            popupContainer: {
                type: PropType<string | HTMLElement>;
            };
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: boolean;
            };
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterOption: {
                type: PropType<boolean | ((inputValue: string, option: import("..").SelectOptionData) => boolean)>;
                default: boolean;
            };
            options: {
                type: PropType<(string | number | boolean | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
                default: () => never[];
            };
            virtualListProps: {
                type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            triggerProps: {
                type: PropType<import("..").TriggerProps>;
            };
            formatLabel: {
                type: PropType<(data: import("..").SelectOptionData) => string>;
            };
            fallbackOption: {
                type: PropType<boolean | ((value: string | number | boolean | Record<string, unknown>) => import("..").SelectOptionData)>;
                default: boolean;
            };
            showExtraOptions: {
                type: BooleanConstructor;
                default: boolean;
            };
            searchDelay: {
                type: NumberConstructor;
                default: number;
            };
            limit: {
                type: NumberConstructor;
                default: number;
            };
            fieldNames: {
                type: PropType<import("..").SelectFieldNames>;
            };
            scrollbar: {
                type: PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
            showHeaderOnEmpty: {
                type: PropType<boolean>;
                default: boolean;
            };
            showFooterOnEmpty: {
                type: PropType<boolean>;
                default: boolean;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onClear?: ((ev: Event) => any) | undefined;
            onSearch?: ((inputValue: string) => any) | undefined;
            onChange?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onRemove?: ((removed: string | number | boolean | Record<string, any> | undefined) => any) | undefined;
            onDropdownScroll?: ((ev: Event) => any) | undefined;
            onDropdownReachBottom?: ((ev: Event) => any) | undefined;
            "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
            onInputValueChange?: ((inputValue: string) => any) | undefined;
            onExceedLimit?: ((value: string | number | boolean | Record<string, any> | undefined, ev: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            error: boolean;
            disabled: boolean;
            open: boolean;
            scrollbar: boolean | import("..").ScrollbarProps;
            multiple: boolean;
            defaultValue: string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[];
            modelValue: string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[];
            clearable: boolean;
            defaultOpen: boolean;
            unmountOnClose: boolean;
            options: (string | number | boolean | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
            loading: boolean;
            showHeaderOnEmpty: boolean;
            showFooterOnEmpty: boolean;
            filterOption: boolean | ((inputValue: string, option: import("..").SelectOptionData) => boolean);
            showExtraOptions: boolean;
            defaultActiveFirstOption: boolean;
            defaultInputValue: string;
            maxTagCount: number;
            tagNowrap: boolean;
            creatable: boolean;
            filterable: boolean | {
                retainInputValue?: boolean;
            };
            fallbackOption: boolean | ((value: string | number | boolean | Record<string, unknown>) => import("..").SelectOptionData);
            searchDelay: number;
            limit: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
            default: undefined;
        };
        defaultValue: {
            type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
            default: (props: {
                multiple?: boolean;
            }) => "" | never[];
        };
        inputValue: {
            type: StringConstructor;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: PropType<ComponentSize>;
            validator: (value: unknown) => value is ComponentSize;
        };
        variant: {
            type: PropType<import("../_utils/form-control").FormControlVariant>;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
        };
        placeholder: StringConstructor;
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: PropType<boolean | {
                retainInputValue?: boolean;
            }>;
            default: (props: {
                multiple?: boolean;
            }) => boolean;
        };
        creatable: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        popupContainer: {
            type: PropType<string | HTMLElement>;
        };
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: boolean;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        unmountOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterOption: {
            type: PropType<boolean | ((inputValue: string, option: import("..").SelectOptionData) => boolean)>;
            default: boolean;
        };
        options: {
            type: PropType<(string | number | boolean | import("..").SelectOptionData | import("..").SelectOptionGroup)[]>;
            default: () => never[];
        };
        virtualListProps: {
            type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        triggerProps: {
            type: PropType<import("..").TriggerProps>;
        };
        formatLabel: {
            type: PropType<(data: import("..").SelectOptionData) => string>;
        };
        fallbackOption: {
            type: PropType<boolean | ((value: string | number | boolean | Record<string, unknown>) => import("..").SelectOptionData)>;
            default: boolean;
        };
        showExtraOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchDelay: {
            type: NumberConstructor;
            default: number;
        };
        limit: {
            type: NumberConstructor;
            default: number;
        };
        fieldNames: {
            type: PropType<import("..").SelectFieldNames>;
        };
        scrollbar: {
            type: PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showHeaderOnEmpty: {
            type: PropType<boolean>;
            default: boolean;
        };
        showFooterOnEmpty: {
            type: PropType<boolean>;
            default: boolean;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClear?: ((ev: Event) => any) | undefined;
        onSearch?: ((inputValue: string) => any) | undefined;
        onChange?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
        onRemove?: ((removed: string | number | boolean | Record<string, any> | undefined) => any) | undefined;
        onDropdownScroll?: ((ev: Event) => any) | undefined;
        onDropdownReachBottom?: ((ev: Event) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string) => any) | undefined;
        onExceedLimit?: ((value: string | number | boolean | Record<string, any> | undefined, ev: Event) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => true;
        'update:inputValue': (inputValue: string) => true;
        'update:open': (visible: boolean) => true;
        change: (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => true;
        inputValueChange: (inputValue: string) => true;
        openChange: (visible: boolean) => true;
        clear: (ev: Event) => true;
        remove: (removed: string | number | boolean | Record<string, any> | undefined) => true;
        search: (inputValue: string) => true;
        dropdownScroll: (ev: Event) => true;
        dropdownReachBottom: (ev: Event) => true;
        exceedLimit: (value: string | number | boolean | Record<string, any> | undefined, ev: Event) => true;
    }, string, {
        error: boolean;
        disabled: boolean;
        open: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        multiple: boolean;
        defaultValue: string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[];
        modelValue: string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[];
        clearable: boolean;
        defaultOpen: boolean;
        unmountOnClose: boolean;
        options: (string | number | boolean | import("..").SelectOptionData | import("..").SelectOptionGroup)[];
        loading: boolean;
        showHeaderOnEmpty: boolean;
        showFooterOnEmpty: boolean;
        filterOption: boolean | ((inputValue: string, option: import("..").SelectOptionData) => boolean);
        showExtraOptions: boolean;
        defaultActiveFirstOption: boolean;
        defaultInputValue: string;
        maxTagCount: number;
        tagNowrap: boolean;
        creatable: boolean;
        filterable: boolean | {
            retainInputValue?: boolean;
        };
        fallbackOption: boolean | ((value: string | number | boolean | Record<string, unknown>) => import("..").SelectOptionData);
        searchDelay: number;
        limit: number;
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
        SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                required: true;
            };
            inputValue: StringConstructor;
            placeholder: StringConstructor;
            variant: {
                type: PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            opened: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: PropType<ComponentSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: BooleanConstructor;
                default: (props: import("../_utils/types").Data) => boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            retainInputValue: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            inputRef: import("vue").ComputedRef<HTMLInputElement>;
            handleFocus: (ev: FocusEvent) => void;
            handleBlur: (ev: FocusEvent) => void;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "clear" | "blur" | "remove")[], "focus" | "clear" | "blur" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                required: true;
            };
            inputValue: StringConstructor;
            placeholder: StringConstructor;
            variant: {
                type: PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            opened: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: PropType<ComponentSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: BooleanConstructor;
                default: (props: import("../_utils/types").Data) => boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            retainInputValue: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onFocus?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
        }>, {
            error: boolean;
            disabled: boolean;
            multiple: boolean;
            variant: "filled" | "outlined" | "standard";
            clearable: boolean;
            loading: boolean;
            opened: boolean;
            retainInputValue: boolean;
            maxTagCount: number;
            tagNowrap: boolean;
            bordered: boolean;
            creatable: boolean;
            filterable: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Option: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            label: StringConstructor;
            disabled: BooleanConstructor;
            tagProps: {
                type: PropType<import("..").TagProps>;
            };
            extra: {
                type: ObjectConstructor;
            };
            index: {
                type: NumberConstructor;
            };
            internal: BooleanConstructor;
        }>, {
            prefixCls: string;
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean | undefined;
            })[]>;
            selectCtx: import("../select/context").SelectContext | undefined;
            itemRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            component: import("vue").ComputedRef<string>;
            isSelected: import("vue").ComputedRef<boolean>;
            isValid: import("vue").Ref<boolean, boolean>;
            handleClick: (ev: MouseEvent) => void;
            handleMouseEnter: () => void;
            handleMouseLeave: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            label: StringConstructor;
            disabled: BooleanConstructor;
            tagProps: {
                type: PropType<import("..").TagProps>;
            };
            extra: {
                type: ObjectConstructor;
            };
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
                            type: PropType<ComponentSize>;
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
                            type: PropType<ComponentSize>;
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
                        type: PropType<ComponentSize>;
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
                        type: PropType<ComponentSize>;
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
        OptGroup: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
            };
        }>, {
            prefixCls: string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            label: {
                type: StringConstructor;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
