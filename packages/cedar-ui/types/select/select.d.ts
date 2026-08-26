import { SelectFieldNames, SelectOptionData, SelectOptionGroup } from './types';
import { SelectViewValue } from '../_components/select-view/interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
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
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
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
        type: import("vue").PropType<boolean | {
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
        type: import("vue").PropType<string | HTMLElement>;
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
        type: import("vue").PropType<boolean | ((inputValue: string, option: SelectOptionData) => boolean)>;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<(string | number | boolean | SelectOptionData | SelectOptionGroup)[]>;
        default: () => never[];
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    triggerProps: {
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    formatLabel: {
        type: import("vue").PropType<(data: SelectOptionData) => string>;
    };
    fallbackOption: {
        type: import("vue").PropType<boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)>;
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
        type: import("vue").PropType<SelectFieldNames>;
    };
    scrollbar: {
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
    showHeaderOnEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showFooterOnEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => true;
    'update:inputValue': (inputValue: string) => true;
    'update:open': (visible: boolean) => true;
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param { string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[] } value
     */
    change: (value: string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[]) => true;
    /**
     * @zh 输入框的值发生改变时触发
     * @en Triggered when the value of the input changes
     * @param {string} inputValue
     */
    inputValueChange: (inputValue: string) => true;
    /**
     * @zh 下拉框的显示状态改变时触发
     * @en Triggered when the display state of the drop-down box changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true;
    /**
     * @zh 点击清除按钮时触发
     * @en Triggered when the clear button is clicked
     */
    clear: (ev: Event) => true;
    /**
     * @zh 点击标签的删除按钮时触发
     * @en Triggered when the delete button of the label is clicked
     * @param {string | number | boolean | Record<string, any> | undefined} removed
     */
    remove: (removed: string | number | boolean | Record<string, any> | undefined) => true;
    /**
     * @zh 用户搜索时触发
     * @en Triggered when the user searches
     * @param {string} inputValue
     */
    search: (inputValue: string) => true;
    /**
     * @zh 下拉菜单发生滚动时触发
     * @en Triggered when the drop-down scrolls
     */
    dropdownScroll: (ev: Event) => true;
    /**
     * @zh 下拉菜单滚动到底部时触发
     * @en Triggered when the drop-down menu is scrolled to the bottom
     */
    dropdownReachBottom: (ev: Event) => true;
    /**
     * @zh 多选超出限制时触发
     * @en Triggered when multiple selection exceeds the limit
     * @param {string | number | boolean | Record<string, any> | undefined} value
     * @param {Event} ev
     * @version 2.18.0
     */
    exceedLimit: (value: string | number | boolean | Record<string, any> | undefined, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
        default: undefined;
    };
    defaultValue: {
        type: import("vue").PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
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
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: unknown) => value is import("..").ComponentSize;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
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
        type: import("vue").PropType<boolean | {
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
        type: import("vue").PropType<string | HTMLElement>;
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
        type: import("vue").PropType<boolean | ((inputValue: string, option: SelectOptionData) => boolean)>;
        default: boolean;
    };
    options: {
        type: import("vue").PropType<(string | number | boolean | SelectOptionData | SelectOptionGroup)[]>;
        default: () => never[];
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    triggerProps: {
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    formatLabel: {
        type: import("vue").PropType<(data: SelectOptionData) => string>;
    };
    fallbackOption: {
        type: import("vue").PropType<boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)>;
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
        type: import("vue").PropType<SelectFieldNames>;
    };
    scrollbar: {
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
    showHeaderOnEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showFooterOnEmpty: {
        type: import("vue").PropType<boolean>;
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
}>, {
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
    options: (string | number | boolean | SelectOptionData | SelectOptionGroup)[];
    loading: boolean;
    showHeaderOnEmpty: boolean;
    showFooterOnEmpty: boolean;
    filterOption: boolean | ((inputValue: string, option: SelectOptionData) => boolean);
    showExtraOptions: boolean;
    defaultActiveFirstOption: boolean;
    defaultInputValue: string;
    maxTagCount: number;
    tagNowrap: boolean;
    creatable: boolean;
    filterable: boolean | {
        retainInputValue?: boolean;
    };
    fallbackOption: boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData);
    searchDelay: number;
    limit: number;
}, {}, {
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
    SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<SelectViewValue[]>;
            required: true;
        };
        inputValue: StringConstructor;
        placeholder: StringConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
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
            type: import("vue").PropType<import("..").ComponentSize>;
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
            type: import("vue").PropType<SelectViewValue[]>;
            required: true;
        };
        inputValue: StringConstructor;
        placeholder: StringConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
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
            type: import("vue").PropType<import("..").ComponentSize>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
