import _Cascader from './cascader.vue';
import _CascaderPanel from './cascader-panel.vue';
import { cascaderProps } from './props';
declare const Cascader: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
            default: undefined;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        filterOption: {
            type: import("vue").PropType<(inputValue: string, option: import("./types").CascaderOption) => boolean>;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        formatLabel: {
            type: import("vue").PropType<(options: import("./types").CascaderOption[]) => string>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchOptionOnlyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchDelay: {
            type: NumberConstructor;
            default: number;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        fallback: {
            type: import("vue").PropType<boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string)>;
            default: boolean;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        onSearch?: ((value: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
        onInputValueChange?: ((value: string) => any) | undefined;
    }>, {
        optionInfos: import("vue").Ref<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[], import("./types").CascaderOptionInfo[] | {
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        filteredLeafOptions: import("vue").ComputedRef<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        selectedPath: import("vue").Ref<string[], string[]>;
        activeKey: import("vue").Ref<string | undefined, string | undefined>;
        displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
        computedInputValue: import("vue").ComputedRef<string>;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleClear: (e: MouseEvent) => void;
        selectViewValue: import("vue").ComputedRef<any[]>;
        handleInputValueChange: (value: string, reason: string) => void;
        showSearchPanel: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
        handleFocus: (e: FocusEvent) => void;
        handleBlur: (e: FocusEvent) => void;
        handleRemove: (key: string) => void;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        handleKeyDown: (event: KeyboardEvent) => void;
        totalLevel: import("vue").Ref<number, number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
        'update:open': (visible: boolean) => true;
        change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
        inputValueChange: (value: string) => true;
        clear: () => true;
        search: (value: string) => true;
        openChange: (visible: boolean) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        disabled: boolean;
        open: boolean;
        multiple: boolean;
        defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
        clearable: boolean;
        defaultOpen: boolean;
        options: import("./types").CascaderOption[];
        loading: boolean;
        inputValue: string;
        defaultInputValue: string;
        maxTagCount: number;
        tagNowrap: boolean;
        filterable: boolean;
        searchDelay: number;
        checkStrictly: boolean;
        pathMode: boolean;
        expandTrigger: "hover" | "click";
        expandChild: boolean;
        searchOptionOnlyLabel: boolean;
        fallback: boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string);
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
        SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
        BaseCascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>> & Readonly<{}>, {
            multiple: boolean;
            loading: boolean;
            checkStrictly: boolean;
            dropdown: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        CascaderSearchPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            options: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
                required: true;
            };
            loading: BooleanConstructor;
            activeKey: StringConstructor;
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            pathLabel: BooleanConstructor;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            options: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
                required: true;
            };
            loading: BooleanConstructor;
            activeKey: StringConstructor;
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            pathLabel: BooleanConstructor;
        }>> & Readonly<{}>, {
            multiple: boolean;
            loading: boolean;
            checkStrictly: boolean;
            pathLabel: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
            default: undefined;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        filterOption: {
            type: import("vue").PropType<(inputValue: string, option: import("./types").CascaderOption) => boolean>;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        formatLabel: {
            type: import("vue").PropType<(options: import("./types").CascaderOption[]) => string>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchOptionOnlyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchDelay: {
            type: NumberConstructor;
            default: number;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        fallback: {
            type: import("vue").PropType<boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string)>;
            default: boolean;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        onSearch?: ((value: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
        onInputValueChange?: ((value: string) => any) | undefined;
    }>, {
        optionInfos: import("vue").Ref<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[], import("./types").CascaderOptionInfo[] | {
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        filteredLeafOptions: import("vue").ComputedRef<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        selectedPath: import("vue").Ref<string[], string[]>;
        activeKey: import("vue").Ref<string | undefined, string | undefined>;
        displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
        computedInputValue: import("vue").ComputedRef<string>;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleClear: (e: MouseEvent) => void;
        selectViewValue: import("vue").ComputedRef<any[]>;
        handleInputValueChange: (value: string, reason: string) => void;
        showSearchPanel: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
        handleFocus: (e: FocusEvent) => void;
        handleBlur: (e: FocusEvent) => void;
        handleRemove: (key: string) => void;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        handleKeyDown: (event: KeyboardEvent) => void;
        totalLevel: import("vue").Ref<number, number>;
    }, {}, {}, {}, {
        error: boolean;
        disabled: boolean;
        open: boolean;
        multiple: boolean;
        defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
        clearable: boolean;
        defaultOpen: boolean;
        options: import("./types").CascaderOption[];
        loading: boolean;
        inputValue: string;
        defaultInputValue: string;
        maxTagCount: number;
        tagNowrap: boolean;
        filterable: boolean;
        searchDelay: number;
        checkStrictly: boolean;
        pathMode: boolean;
        expandTrigger: "hover" | "click";
        expandChild: boolean;
        searchOptionOnlyLabel: boolean;
        fallback: boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string);
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    pathMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
    };
    defaultValue: {
        type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
    };
    options: {
        type: import("vue").PropType<import("./types").CascaderOption[]>;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    filterable: {
        type: BooleanConstructor;
        default: (props: import("../_utils/types").Data) => boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputValue: {
        type: StringConstructor;
        default: undefined;
    };
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    expandTrigger: {
        type: import("vue").PropType<"click" | "hover">;
        default: string;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    filterOption: {
        type: import("vue").PropType<(inputValue: string, option: import("./types").CascaderOption) => boolean>;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
    };
    formatLabel: {
        type: import("vue").PropType<(options: import("./types").CascaderOption[]) => string>;
    };
    triggerProps: {
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadMore: {
        type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchOptionOnlyLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchDelay: {
        type: NumberConstructor;
        default: number;
    };
    fieldNames: {
        type: import("vue").PropType<import("./types").CascaderFieldNames>;
    };
    fallback: {
        type: import("vue").PropType<boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string)>;
        default: boolean;
    };
    expandChild: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    onSearch?: ((value: string) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOpenChange?: ((visible: boolean) => any) | undefined;
    onInputValueChange?: ((value: string) => any) | undefined;
}>, {
    optionInfos: import("vue").Ref<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[], import("./types").CascaderOptionInfo[] | {
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[]>;
    filteredLeafOptions: import("vue").ComputedRef<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[]>;
    selectedPath: import("vue").Ref<string[], string[]>;
    activeKey: import("vue").Ref<string | undefined, string | undefined>;
    displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
    computedInputValue: import("vue").ComputedRef<string>;
    computedOpen: import("vue").ComputedRef<boolean>;
    handleClear: (e: MouseEvent) => void;
    selectViewValue: import("vue").ComputedRef<any[]>;
    handleInputValueChange: (value: string, reason: string) => void;
    showSearchPanel: import("vue").ComputedRef<boolean>;
    handleOpenChange: (visible: boolean) => void;
    handleFocus: (e: FocusEvent) => void;
    handleBlur: (e: FocusEvent) => void;
    handleRemove: (key: string) => void;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    handleKeyDown: (event: KeyboardEvent) => void;
    totalLevel: import("vue").Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    'update:open': (visible: boolean) => true;
    change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    inputValueChange: (value: string) => true;
    clear: () => true;
    search: (value: string) => true;
    openChange: (visible: boolean) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    error: boolean;
    disabled: boolean;
    open: boolean;
    multiple: boolean;
    defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
    clearable: boolean;
    defaultOpen: boolean;
    options: import("./types").CascaderOption[];
    loading: boolean;
    inputValue: string;
    defaultInputValue: string;
    maxTagCount: number;
    tagNowrap: boolean;
    filterable: boolean;
    searchDelay: number;
    checkStrictly: boolean;
    pathMode: boolean;
    expandTrigger: "hover" | "click";
    expandChild: boolean;
    searchOptionOnlyLabel: boolean;
    fallback: boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string);
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
    SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
    BaseCascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        displayColumns: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
            required: true;
        };
        selectedPath: {
            type: import("vue").PropType<string[]>;
            required: true;
        };
        activeKey: StringConstructor;
        totalLevel: {
            type: NumberConstructor;
            required: true;
        };
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        loading: BooleanConstructor;
        dropdown: BooleanConstructor;
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        displayColumns: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
            required: true;
        };
        selectedPath: {
            type: import("vue").PropType<string[]>;
            required: true;
        };
        activeKey: StringConstructor;
        totalLevel: {
            type: NumberConstructor;
            required: true;
        };
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        loading: BooleanConstructor;
        dropdown: BooleanConstructor;
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
    }>> & Readonly<{}>, {
        multiple: boolean;
        loading: boolean;
        checkStrictly: boolean;
        dropdown: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CascaderSearchPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        options: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
            required: true;
        };
        loading: BooleanConstructor;
        activeKey: StringConstructor;
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        pathLabel: BooleanConstructor;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        options: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
            required: true;
        };
        loading: BooleanConstructor;
        activeKey: StringConstructor;
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        pathLabel: BooleanConstructor;
    }>> & Readonly<{}>, {
        multiple: boolean;
        loading: boolean;
        checkStrictly: boolean;
        pathLabel: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    CascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        optionInfos: import("vue").Ref<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[], import("./types").CascaderOptionInfo[] | {
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        filteredLeafOptions: import("vue").ComputedRef<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        selectedPath: import("vue").Ref<string[], string[]>;
        activeKey: import("vue").Ref<string | undefined, string | undefined>;
        displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
        handleKeyDown: (event: KeyboardEvent) => void;
        totalLevel: import("vue").Ref<number, number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
        change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    }>, {
        multiple: boolean;
        defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
        options: import("./types").CascaderOption[];
        checkStrictly: boolean;
        pathMode: boolean;
        expandTrigger: "hover" | "click";
        expandChild: boolean;
    }, {}, {
        BaseCascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>> & Readonly<{}>, {
            multiple: boolean;
            loading: boolean;
            checkStrictly: boolean;
            dropdown: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type CascaderInstance = InstanceType<typeof _Cascader>;
export type CascaderPanelInstance = InstanceType<typeof _CascaderPanel>;
export type { CascaderOption, CascaderFieldNames } from './types';
export { _CascaderPanel as CascaderPanel };
export declare const _CascaderComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
            default: undefined;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        filterOption: {
            type: import("vue").PropType<(inputValue: string, option: import("./types").CascaderOption) => boolean>;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        formatLabel: {
            type: import("vue").PropType<(options: import("./types").CascaderOption[]) => string>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchOptionOnlyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchDelay: {
            type: NumberConstructor;
            default: number;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        fallback: {
            type: import("vue").PropType<boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string)>;
            default: boolean;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        onSearch?: ((value: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
        onInputValueChange?: ((value: string) => any) | undefined;
    }>, {
        optionInfos: import("vue").Ref<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[], import("./types").CascaderOptionInfo[] | {
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        filteredLeafOptions: import("vue").ComputedRef<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        selectedPath: import("vue").Ref<string[], string[]>;
        activeKey: import("vue").Ref<string | undefined, string | undefined>;
        displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
        computedInputValue: import("vue").ComputedRef<string>;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleClear: (e: MouseEvent) => void;
        selectViewValue: import("vue").ComputedRef<any[]>;
        handleInputValueChange: (value: string, reason: string) => void;
        showSearchPanel: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
        handleFocus: (e: FocusEvent) => void;
        handleBlur: (e: FocusEvent) => void;
        handleRemove: (key: string) => void;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        handleKeyDown: (event: KeyboardEvent) => void;
        totalLevel: import("vue").Ref<number, number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
        'update:open': (visible: boolean) => true;
        change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
        inputValueChange: (value: string) => true;
        clear: () => true;
        search: (value: string) => true;
        openChange: (visible: boolean) => true;
        focus: (ev: FocusEvent) => true;
        blur: (ev: FocusEvent) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        disabled: boolean;
        open: boolean;
        multiple: boolean;
        defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
        clearable: boolean;
        defaultOpen: boolean;
        options: import("./types").CascaderOption[];
        loading: boolean;
        inputValue: string;
        defaultInputValue: string;
        maxTagCount: number;
        tagNowrap: boolean;
        filterable: boolean;
        searchDelay: number;
        checkStrictly: boolean;
        pathMode: boolean;
        expandTrigger: "hover" | "click";
        expandChild: boolean;
        searchOptionOnlyLabel: boolean;
        fallback: boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string);
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
        SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
        BaseCascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>> & Readonly<{}>, {
            multiple: boolean;
            loading: boolean;
            checkStrictly: boolean;
            dropdown: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        CascaderSearchPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            options: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
                required: true;
            };
            loading: BooleanConstructor;
            activeKey: StringConstructor;
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            pathLabel: BooleanConstructor;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            options: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
                required: true;
            };
            loading: BooleanConstructor;
            activeKey: StringConstructor;
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            pathLabel: BooleanConstructor;
        }>> & Readonly<{}>, {
            multiple: boolean;
            loading: boolean;
            checkStrictly: boolean;
            pathLabel: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
            default: undefined;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        filterOption: {
            type: import("vue").PropType<(inputValue: string, option: import("./types").CascaderOption) => boolean>;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        formatLabel: {
            type: import("vue").PropType<(options: import("./types").CascaderOption[]) => string>;
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchOptionOnlyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchDelay: {
            type: NumberConstructor;
            default: number;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        fallback: {
            type: import("vue").PropType<boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string)>;
            default: boolean;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((ev: FocusEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
        onSearch?: ((value: string) => any) | undefined;
        onBlur?: ((ev: FocusEvent) => any) | undefined;
        onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
        onInputValueChange?: ((value: string) => any) | undefined;
    }>, {
        optionInfos: import("vue").Ref<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[], import("./types").CascaderOptionInfo[] | {
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        filteredLeafOptions: import("vue").ComputedRef<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        selectedPath: import("vue").Ref<string[], string[]>;
        activeKey: import("vue").Ref<string | undefined, string | undefined>;
        displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
        computedInputValue: import("vue").ComputedRef<string>;
        computedOpen: import("vue").ComputedRef<boolean>;
        handleClear: (e: MouseEvent) => void;
        selectViewValue: import("vue").ComputedRef<any[]>;
        handleInputValueChange: (value: string, reason: string) => void;
        showSearchPanel: import("vue").ComputedRef<boolean>;
        handleOpenChange: (visible: boolean) => void;
        handleFocus: (e: FocusEvent) => void;
        handleBlur: (e: FocusEvent) => void;
        handleRemove: (key: string) => void;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        handleKeyDown: (event: KeyboardEvent) => void;
        totalLevel: import("vue").Ref<number, number>;
    }, {}, {}, {}, {
        error: boolean;
        disabled: boolean;
        open: boolean;
        multiple: boolean;
        defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
        clearable: boolean;
        defaultOpen: boolean;
        options: import("./types").CascaderOption[];
        loading: boolean;
        inputValue: string;
        defaultInputValue: string;
        maxTagCount: number;
        tagNowrap: boolean;
        filterable: boolean;
        searchDelay: number;
        checkStrictly: boolean;
        pathMode: boolean;
        expandTrigger: "hover" | "click";
        expandChild: boolean;
        searchOptionOnlyLabel: boolean;
        fallback: boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string);
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    pathMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
    };
    defaultValue: {
        type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
    };
    options: {
        type: import("vue").PropType<import("./types").CascaderOption[]>;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    filterable: {
        type: BooleanConstructor;
        default: (props: import("../_utils/types").Data) => boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputValue: {
        type: StringConstructor;
        default: undefined;
    };
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    expandTrigger: {
        type: import("vue").PropType<"click" | "hover">;
        default: string;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    filterOption: {
        type: import("vue").PropType<(inputValue: string, option: import("./types").CascaderOption) => boolean>;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    maxTagCount: {
        type: NumberConstructor;
        default: number;
    };
    formatLabel: {
        type: import("vue").PropType<(options: import("./types").CascaderOption[]) => string>;
    };
    triggerProps: {
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadMore: {
        type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchOptionOnlyLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchDelay: {
        type: NumberConstructor;
        default: number;
    };
    fieldNames: {
        type: import("vue").PropType<import("./types").CascaderFieldNames>;
    };
    fallback: {
        type: import("vue").PropType<boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string)>;
        default: boolean;
    };
    expandChild: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onFocus?: ((ev: FocusEvent) => any) | undefined;
    onClear?: (() => any) | undefined;
    onSearch?: ((value: string) => any) | undefined;
    onBlur?: ((ev: FocusEvent) => any) | undefined;
    onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    onOpenChange?: ((visible: boolean) => any) | undefined;
    onInputValueChange?: ((value: string) => any) | undefined;
}>, {
    optionInfos: import("vue").Ref<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[], import("./types").CascaderOptionInfo[] | {
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[]>;
    filteredLeafOptions: import("vue").ComputedRef<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[]>;
    selectedPath: import("vue").Ref<string[], string[]>;
    activeKey: import("vue").Ref<string | undefined, string | undefined>;
    displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
    computedInputValue: import("vue").ComputedRef<string>;
    computedOpen: import("vue").ComputedRef<boolean>;
    handleClear: (e: MouseEvent) => void;
    selectViewValue: import("vue").ComputedRef<any[]>;
    handleInputValueChange: (value: string, reason: string) => void;
    showSearchPanel: import("vue").ComputedRef<boolean>;
    handleOpenChange: (visible: boolean) => void;
    handleFocus: (e: FocusEvent) => void;
    handleBlur: (e: FocusEvent) => void;
    handleRemove: (key: string) => void;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    handleKeyDown: (event: KeyboardEvent) => void;
    totalLevel: import("vue").Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    'update:open': (visible: boolean) => true;
    change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    inputValueChange: (value: string) => true;
    clear: () => true;
    search: (value: string) => true;
    openChange: (visible: boolean) => true;
    focus: (ev: FocusEvent) => true;
    blur: (ev: FocusEvent) => true;
}, string, {
    error: boolean;
    disabled: boolean;
    open: boolean;
    multiple: boolean;
    defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
    clearable: boolean;
    defaultOpen: boolean;
    options: import("./types").CascaderOption[];
    loading: boolean;
    inputValue: string;
    defaultInputValue: string;
    maxTagCount: number;
    tagNowrap: boolean;
    filterable: boolean;
    searchDelay: number;
    checkStrictly: boolean;
    pathMode: boolean;
    expandTrigger: "hover" | "click";
    expandChild: boolean;
    searchOptionOnlyLabel: boolean;
    fallback: boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string);
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
    SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
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
    BaseCascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        displayColumns: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
            required: true;
        };
        selectedPath: {
            type: import("vue").PropType<string[]>;
            required: true;
        };
        activeKey: StringConstructor;
        totalLevel: {
            type: NumberConstructor;
            required: true;
        };
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        loading: BooleanConstructor;
        dropdown: BooleanConstructor;
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        displayColumns: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
            required: true;
        };
        selectedPath: {
            type: import("vue").PropType<string[]>;
            required: true;
        };
        activeKey: StringConstructor;
        totalLevel: {
            type: NumberConstructor;
            required: true;
        };
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        loading: BooleanConstructor;
        dropdown: BooleanConstructor;
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
    }>> & Readonly<{}>, {
        multiple: boolean;
        loading: boolean;
        checkStrictly: boolean;
        dropdown: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CascaderSearchPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        options: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
            required: true;
        };
        loading: BooleanConstructor;
        activeKey: StringConstructor;
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        pathLabel: BooleanConstructor;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        options: {
            type: import("vue").PropType<import("./types").CascaderOptionInfo[]>;
            required: true;
        };
        loading: BooleanConstructor;
        activeKey: StringConstructor;
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        pathLabel: BooleanConstructor;
    }>> & Readonly<{}>, {
        multiple: boolean;
        loading: boolean;
        checkStrictly: boolean;
        pathLabel: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    CascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        optionInfos: import("vue").Ref<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[], import("./types").CascaderOptionInfo[] | {
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        filteredLeafOptions: import("vue").ComputedRef<{
            [x: string]: any;
            raw: Record<string, unknown>;
            key: string;
            valueKey: string;
            level: number;
            index: number;
            value: string | number;
            label: string;
            disabled: boolean;
            selectionDisabled: boolean;
            isLeaf: boolean;
            parent?: any | undefined;
            children?: any[] | undefined;
            path: any[];
            pathValue: any[];
            totalLeafOptions?: number | undefined;
            render?: import("vue").RenderFunction | undefined;
            tagProps?: {
                closable: boolean;
                nowrap: boolean;
                variant: import("..").TagVariant;
                loading: boolean;
                defaultShow: boolean;
                checkable: boolean;
                defaultChecked: boolean;
                size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
                color?: string | undefined;
                show?: boolean | undefined;
                status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
                checked?: boolean | undefined;
            } | undefined;
        }[]>;
        selectedPath: import("vue").Ref<string[], string[]>;
        activeKey: import("vue").Ref<string | undefined, string | undefined>;
        displayColumns: import("vue").ComputedRef<import("./types").CascaderOptionInfo[][]>;
        handleKeyDown: (event: KeyboardEvent) => void;
        totalLevel: import("vue").Ref<number, number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
        change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        pathMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
            default: (props: import("../_utils/types").Data) => "" | never[] | undefined;
        };
        options: {
            type: import("vue").PropType<import("./types").CascaderOption[]>;
            default: () => never[];
        };
        expandTrigger: {
            type: import("vue").PropType<"click" | "hover">;
            default: string;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadMore: {
            type: import("vue").PropType<(option: import("./types").CascaderOption, done: (children?: import("./types").CascaderOption[]) => void) => void>;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").CascaderFieldNames>;
        };
        expandChild: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    }>, {
        multiple: boolean;
        defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
        options: import("./types").CascaderOption[];
        checkStrictly: boolean;
        pathMode: boolean;
        expandTrigger: "hover" | "click";
        expandChild: boolean;
    }, {}, {
        BaseCascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            displayColumns: {
                type: import("vue").PropType<import("./types").CascaderOptionInfo[][]>;
                required: true;
            };
            selectedPath: {
                type: import("vue").PropType<string[]>;
                required: true;
            };
            activeKey: StringConstructor;
            totalLevel: {
                type: NumberConstructor;
                required: true;
            };
            multiple: BooleanConstructor;
            checkStrictly: BooleanConstructor;
            loading: BooleanConstructor;
            dropdown: BooleanConstructor;
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
        }>> & Readonly<{}>, {
            multiple: boolean;
            loading: boolean;
            checkStrictly: boolean;
            dropdown: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Cascader };
export { cascaderProps };
export default Cascader;
