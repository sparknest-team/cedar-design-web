/**
 * 时间范围选择面板（默认无触发器）。
 * 表单字段请使用 TimeRange。
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Array<string | number | Date>>;
    };
    defaultValue: {
        type: import("vue").PropType<Array<string | number | Date>>;
    };
    open: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    error: BooleanConstructor;
    format: StringConstructor;
    size: {
        type: import("vue").PropType<import("../index.js").ComponentSize>;
        validator: (value: import("../index.js").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
        default: string;
        validator: (value: import("../_utils/form-control.js").FormControlVariant) => boolean;
    };
    placeholder: {
        type: import("vue").PropType<string | string[]>;
    };
    use12Hours: BooleanConstructor;
    step: {
        type: import("vue").PropType<{
            hour?: number;
            minute?: number;
            second?: number;
        }>;
    };
    disabledHours: {
        type: import("vue").PropType<() => number[]>;
    };
    disabledMinutes: {
        type: import("vue").PropType<(selectedHour?: number) => number[]>;
    };
    disabledSeconds: {
        type: import("vue").PropType<(selectedHour?: number, selectedMinute?: number) => number[]>;
    };
    hideDisabledOptions: BooleanConstructor;
    disableConfirm: BooleanConstructor;
    placement: {
        type: import("vue").PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
    };
    triggerProps: {
        type: import("vue").PropType<Record<string, unknown>>;
    };
    unmountOnClose: BooleanConstructor;
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    showNextDay: BooleanConstructor;
}>, {
    onUpdateModelValue: (value: string | (string | undefined)[] | undefined) => void;
    onUpdateOpen: (visible: boolean) => void;
    onChange: (timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => void;
    onSelect: (timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => void;
    onClear: () => void;
    onOpenChange: (visible: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: Array<string | undefined> | undefined) => true;
    'update:open': (visible: boolean) => true;
    change: (timeString: Array<string | undefined> | undefined, time: Array<Date | undefined> | undefined) => true;
    select: (timeString: Array<string | undefined>, time: Array<Date | undefined>) => true;
    clear: () => true;
    'open-change': (visible: boolean) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Array<string | number | Date>>;
    };
    defaultValue: {
        type: import("vue").PropType<Array<string | number | Date>>;
    };
    open: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    error: BooleanConstructor;
    format: StringConstructor;
    size: {
        type: import("vue").PropType<import("../index.js").ComponentSize>;
        validator: (value: import("../index.js").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
        default: string;
        validator: (value: import("../_utils/form-control.js").FormControlVariant) => boolean;
    };
    placeholder: {
        type: import("vue").PropType<string | string[]>;
    };
    use12Hours: BooleanConstructor;
    step: {
        type: import("vue").PropType<{
            hour?: number;
            minute?: number;
            second?: number;
        }>;
    };
    disabledHours: {
        type: import("vue").PropType<() => number[]>;
    };
    disabledMinutes: {
        type: import("vue").PropType<(selectedHour?: number) => number[]>;
    };
    disabledSeconds: {
        type: import("vue").PropType<(selectedHour?: number, selectedMinute?: number) => number[]>;
    };
    hideDisabledOptions: BooleanConstructor;
    disableConfirm: BooleanConstructor;
    placement: {
        type: import("vue").PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
    };
    triggerProps: {
        type: import("vue").PropType<Record<string, unknown>>;
    };
    unmountOnClose: BooleanConstructor;
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    showNextDay: BooleanConstructor;
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onChange?: ((timeString: (string | undefined)[] | undefined, time: (Date | undefined)[] | undefined) => any) | undefined;
    onSelect?: ((timeString: (string | undefined)[], time: (Date | undefined)[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: (string | undefined)[] | undefined) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    "onOpen-change"?: ((visible: boolean) => any) | undefined;
}>, {
    error: boolean;
    readonly: boolean;
    disabled: boolean;
    open: boolean | undefined;
    variant: "filled" | "outlined" | "standard";
    clearable: boolean;
    defaultOpen: boolean;
    unmountOnClose: boolean;
    hideTrigger: boolean;
    disableConfirm: boolean;
    use12Hours: boolean;
    hideDisabledOptions: boolean;
    showNextDay: boolean;
}, {}, {
    TimePicker: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"time" | "time-range">;
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Date | Array<string | number | Date>>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Date | Array<string | number | Date>>;
        };
        disabled: {
            type: BooleanConstructor;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: import("vue").PropType<string | string[]>;
        };
        size: {
            type: import("vue").PropType<import("../index.js").ComponentSize>;
            validator: (value: import("../index.js").ComponentSize) => boolean;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
            default: string;
            validator: (value: import("../_utils/form-control.js").FormControlVariant) => boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        use12Hours: {
            type: BooleanConstructor;
        };
        step: {
            type: import("vue").PropType<{
                hour?: number;
                minute?: number;
                second?: number;
            }>;
        };
        disabledHours: {
            type: import("vue").PropType<() => number[]>;
        };
        disabledMinutes: {
            type: import("vue").PropType<(selectedHour?: number) => number[]>;
        };
        disabledSeconds: {
            type: import("vue").PropType<(selectedHour?: number, selectedMinute?: number) => number[]>;
        };
        hideDisabledOptions: {
            type: BooleanConstructor;
        };
        disableConfirm: {
            type: BooleanConstructor;
        };
        placement: {
            type: import("vue").PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerProps: {
            type: import("vue").PropType<import("../index.js").TriggerProps>;
        };
        unmountOnClose: {
            type: BooleanConstructor;
        };
        hideTrigger: {
            type: BooleanConstructor;
            default: boolean;
        };
        showNextDay: {
            type: BooleanConstructor;
        };
    }>, {
        refInput: import("vue").Ref<any, any>;
        isRange: import("vue").ComputedRef<boolean>;
        prefixCls: string;
        panelVisible: import("vue").ComputedRef<boolean>;
        focusedInputIndex: import("vue").Ref<number, number>;
        computedPlaceholder: import("vue").ComputedRef<string | string[]>;
        panelValue: import("vue").Ref<import("dayjs").Dayjs | (import("dayjs").Dayjs | undefined)[] | undefined, import("dayjs").Dayjs | (import("dayjs").Dayjs | undefined)[] | undefined>;
        inputValue: import("vue").Ref<string | (string | undefined)[] | undefined, string | (string | undefined)[] | undefined>;
        computedFormat: import("vue").ComputedRef<string>;
        computedUse12Hours: import("vue").ComputedRef<boolean>;
        inputProps: import("vue").ComputedRef<{
            focusedIndex: number;
            onFocusedIndexChange: (index: number) => void;
            onChange: (e: any) => void;
            onPressEnter: () => void;
            showNextDayLabel: boolean;
            nextDayText: string;
        } | {
            onChange: (e: any) => void;
            onPressEnter: () => void;
            focusedIndex?: undefined;
            onFocusedIndexChange?: undefined;
            showNextDayLabel?: undefined;
            nextDayText?: undefined;
        }>;
        panelProps: import("vue").ComputedRef<{
            displayIndex: number;
            onDisplayIndexChange: (index: number) => void;
        } | {
            displayIndex?: undefined;
            onDisplayIndexChange?: undefined;
        }>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        hideTrigger: import("vue").Ref<boolean, boolean>;
        showNextDay: import("vue").ComputedRef<boolean>;
        onPanelVisibleChange: any;
        onInputClear: (e: Event) => void;
        onPanelSelect: (value: import("dayjs").Dayjs | Array<import("dayjs").Dayjs | undefined>) => void;
        onPanelConfirm: (value: import("dayjs").Dayjs | import("dayjs").Dayjs[]) => void;
        onPanelClick: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (timeString: string | Array<string | undefined> | undefined, time: Date | Array<Date | undefined> | undefined) => true;
        'update:modelValue': (timeString: string | Array<string | undefined> | undefined) => true;
        select: (timeString: string | Array<string | undefined>, time: Date | Array<Date | undefined>) => true;
        clear: () => true;
        'open-change': (visible: boolean) => true;
        'update:open': (visible: boolean) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: import("vue").PropType<"time" | "time-range">;
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Date | Array<string | number | Date>>;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Date | Array<string | number | Date>>;
        };
        disabled: {
            type: BooleanConstructor;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
        format: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: import("vue").PropType<string | string[]>;
        };
        size: {
            type: import("vue").PropType<import("../index.js").ComponentSize>;
            validator: (value: import("../index.js").ComponentSize) => boolean;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
            default: string;
            validator: (value: import("../_utils/form-control.js").FormControlVariant) => boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        use12Hours: {
            type: BooleanConstructor;
        };
        step: {
            type: import("vue").PropType<{
                hour?: number;
                minute?: number;
                second?: number;
            }>;
        };
        disabledHours: {
            type: import("vue").PropType<() => number[]>;
        };
        disabledMinutes: {
            type: import("vue").PropType<(selectedHour?: number) => number[]>;
        };
        disabledSeconds: {
            type: import("vue").PropType<(selectedHour?: number, selectedMinute?: number) => number[]>;
        };
        hideDisabledOptions: {
            type: BooleanConstructor;
        };
        disableConfirm: {
            type: BooleanConstructor;
        };
        placement: {
            type: import("vue").PropType<"top" | "tl" | "tr" | "bottom" | "bl" | "br">;
            default: string;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        triggerProps: {
            type: import("vue").PropType<import("../index.js").TriggerProps>;
        };
        unmountOnClose: {
            type: BooleanConstructor;
        };
        hideTrigger: {
            type: BooleanConstructor;
            default: boolean;
        };
        showNextDay: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onChange?: ((timeString: string | (string | undefined)[] | undefined, time: Date | (Date | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) => any) | undefined;
        "onUpdate:modelValue"?: ((timeString: string | (string | undefined)[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        "onOpen-change"?: ((visible: boolean) => any) | undefined;
    }>, {
        error: boolean;
        readonly: boolean;
        type: "time" | "time-range";
        disabled: boolean;
        open: boolean;
        variant: "filled" | "outlined" | "standard";
        clearable: boolean;
        defaultOpen: boolean;
        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br";
        unmountOnClose: boolean;
        format: string;
        hideTrigger: boolean;
        disableConfirm: boolean;
        use12Hours: boolean;
        hideDisabledOptions: boolean;
        showNextDay: boolean;
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
                    type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                    type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                    type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                    type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
                type: import("vue").PropType<import("../index.js").TriggerEvent | import("../index.js").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("../index.js").TriggerPosition>;
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
                type: import("vue").PropType<import("../index.js").TriggerPopupTranslate>;
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
        DateInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
            };
            focused: {
                type: BooleanConstructor;
            };
            disabled: {
                type: BooleanConstructor;
            };
            readonly: {
                type: BooleanConstructor;
            };
            error: {
                type: BooleanConstructor;
            };
            clearable: {
                type: BooleanConstructor;
            };
            placeholder: {
                type: StringConstructor;
            };
            inputValue: {
                type: StringConstructor;
            };
            value: {
                type: import("vue").PropType<import("dayjs").Dayjs>;
            };
            format: {
                type: import("vue").PropType<string | ((value: import("dayjs").Dayjs) => string)>;
                required: true;
            };
        }>, {
            feedback: import("vue").Ref<string | undefined, string | undefined>;
            prefixCls: string;
            classNames: import("vue").ComputedRef<string[]>;
            displayValue: import("vue").ComputedRef<string | undefined>;
            mergedDisabled: import("vue").ComputedRef<boolean>;
            mergedError: import("vue").ComputedRef<boolean>;
            mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
            focused: import("vue").Ref<boolean, boolean>;
            refInput: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            onPressEnter(): void;
            onChange(e: Event): void;
            onClear(e: Event): void;
            onBlur(e: Event): void;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "blur" | "change" | "press-enter")[], "clear" | "blur" | "change" | "press-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
            };
            focused: {
                type: BooleanConstructor;
            };
            disabled: {
                type: BooleanConstructor;
            };
            readonly: {
                type: BooleanConstructor;
            };
            error: {
                type: BooleanConstructor;
            };
            clearable: {
                type: BooleanConstructor;
            };
            placeholder: {
                type: StringConstructor;
            };
            inputValue: {
                type: StringConstructor;
            };
            value: {
                type: import("vue").PropType<import("dayjs").Dayjs>;
            };
            format: {
                type: import("vue").PropType<string | ((value: import("dayjs").Dayjs) => string)>;
                required: true;
            };
        }>> & Readonly<{
            onBlur?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            "onPress-enter"?: ((...args: any[]) => any) | undefined;
        }>, {
            error: boolean;
            readonly: boolean;
            disabled: boolean;
            variant: "filled" | "outlined" | "standard";
            clearable: boolean;
            focused: boolean;
        }, {}, {
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
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
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
            };
            FeedbackIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                };
            }>, {
                cls: import("vue").ComputedRef<string[]>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                };
            }>> & Readonly<{}>, {}, {}, {
                IconLoading: {
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
                };
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            FieldDecorator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                tag: {
                    type: import("vue").PropType<"div" | "span">;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                    default: string;
                    validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
                };
                size: {
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
                    default: string;
                    validator: (value: unknown) => value is import("../index.js").ComponentSize;
                };
                disabled: BooleanConstructor;
                error: BooleanConstructor;
                focused: BooleanConstructor;
                title: StringConstructor;
                onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                tag: {
                    type: import("vue").PropType<"div" | "span">;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                    default: string;
                    validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
                };
                size: {
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
                    default: string;
                    validator: (value: unknown) => value is import("../index.js").ComponentSize;
                };
                disabled: BooleanConstructor;
                error: BooleanConstructor;
                focused: BooleanConstructor;
                title: StringConstructor;
                onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
            }>> & Readonly<{}>, {
                error: boolean;
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                variant: "filled" | "outlined" | "standard";
                focused: boolean;
                tag: "div" | "span";
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        DateRangeInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
            };
            focused: {
                type: BooleanConstructor;
            };
            focusedIndex: {
                type: NumberConstructor;
            };
            error: {
                type: BooleanConstructor;
            };
            disabled: {
                type: import("vue").PropType<boolean | boolean[]>;
                default: boolean;
            };
            readonly: {
                type: BooleanConstructor;
            };
            clearable: {
                type: BooleanConstructor;
            };
            placeholder: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            inputValue: {
                type: import("vue").PropType<string[]>;
            };
            value: {
                type: import("vue").PropType<(import("dayjs").Dayjs | undefined)[]>;
                default: () => never[];
            };
            format: {
                type: import("vue").PropType<string | ((value: import("dayjs").Dayjs) => string)>;
                required: true;
            };
            showNextDayLabel: {
                type: BooleanConstructor;
            };
            nextDayText: {
                type: StringConstructor;
                default: string;
            };
        }>, {
            prefixCls: string;
            classNames: import("vue").ComputedRef<string[]>;
            refInput0: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            refInput1: import("vue").Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            disabled0: import("vue").ComputedRef<boolean>;
            disabled1: import("vue").ComputedRef<boolean>;
            mergedDisabled: import("vue").ComputedRef<boolean>;
            mergedError: import("vue").ComputedRef<boolean>;
            mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl">;
            focused: import("vue").Ref<boolean, boolean>;
            getDisabled: (index: number) => boolean;
            getInputWrapClassName: (index: number) => (string | {
                [x: string]: boolean;
            })[];
            displayValue0: import("vue").ComputedRef<string | undefined>;
            displayValue1: import("vue").ComputedRef<string | undefined>;
            showNextDayLabel: import("vue").ComputedRef<boolean>;
            nextDayText: import("vue").ComputedRef<string>;
            changeFocusedInput: (index: number) => void;
            onChange: (e: Event) => void;
            onPressEnter: () => void;
            onPressTab: (e: Event) => void;
            onClear: (e: Event) => void;
            feedback: import("vue").Ref<string | undefined, string | undefined>;
        }, {}, {}, {
            focus(index?: number): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "change" | "press-enter" | "focused-index-change" | "update:focusedIndex")[], "clear" | "change" | "press-enter" | "focused-index-change" | "update:focusedIndex", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
            };
            focused: {
                type: BooleanConstructor;
            };
            focusedIndex: {
                type: NumberConstructor;
            };
            error: {
                type: BooleanConstructor;
            };
            disabled: {
                type: import("vue").PropType<boolean | boolean[]>;
                default: boolean;
            };
            readonly: {
                type: BooleanConstructor;
            };
            clearable: {
                type: BooleanConstructor;
            };
            placeholder: {
                type: import("vue").PropType<string[]>;
                default: () => never[];
            };
            inputValue: {
                type: import("vue").PropType<string[]>;
            };
            value: {
                type: import("vue").PropType<(import("dayjs").Dayjs | undefined)[]>;
                default: () => never[];
            };
            format: {
                type: import("vue").PropType<string | ((value: import("dayjs").Dayjs) => string)>;
                required: true;
            };
            showNextDayLabel: {
                type: BooleanConstructor;
            };
            nextDayText: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            "onPress-enter"?: ((...args: any[]) => any) | undefined;
            "onFocused-index-change"?: ((...args: any[]) => any) | undefined;
            "onUpdate:focusedIndex"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: (import("dayjs").Dayjs | undefined)[];
            error: boolean;
            readonly: boolean;
            placeholder: string[];
            disabled: boolean | boolean[];
            variant: "filled" | "outlined" | "standard";
            clearable: boolean;
            focused: boolean;
            showNextDayLabel: boolean;
            nextDayText: string;
        }, {}, {
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
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
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
            };
            FeedbackIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                };
            }>, {
                cls: import("vue").ComputedRef<string[]>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                };
            }>> & Readonly<{}>, {}, {}, {
                IconLoading: {
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
                };
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            FieldDecorator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                tag: {
                    type: import("vue").PropType<"div" | "span">;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                    default: string;
                    validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
                };
                size: {
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
                    default: string;
                    validator: (value: unknown) => value is import("../index.js").ComponentSize;
                };
                disabled: BooleanConstructor;
                error: BooleanConstructor;
                focused: BooleanConstructor;
                title: StringConstructor;
                onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                tag: {
                    type: import("vue").PropType<"div" | "span">;
                    default: string;
                };
                variant: {
                    type: import("vue").PropType<import("../_utils/form-control.js").FormControlVariant>;
                    default: string;
                    validator: (value: unknown) => value is import("../_utils/form-control.js").FormControlVariant;
                };
                size: {
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
                    default: string;
                    validator: (value: unknown) => value is import("../index.js").ComponentSize;
                };
                disabled: BooleanConstructor;
                error: BooleanConstructor;
                focused: BooleanConstructor;
                title: StringConstructor;
                onMousedown: import("vue").PropType<(event: MouseEvent) => void>;
            }>> & Readonly<{}>, {
                error: boolean;
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                variant: "filled" | "outlined" | "standard";
                focused: boolean;
                tag: "div" | "span";
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Panel: import("vue").DefineComponent<{
            value?: import("dayjs").Dayjs | undefined;
            defaultValue?: import("dayjs").Dayjs | undefined;
            format: string;
            visible: boolean;
            hideFooter: boolean;
            isRange: boolean;
            disabled: boolean;
            step?: {
                hour?: number;
                minute?: number;
                second?: number;
            } | undefined;
            use12Hours: boolean;
            disabledHours?: (() => number[]) | undefined;
            disabledMinutes?: ((selectedHour?: number) => number[]) | undefined;
            disabledSeconds?: ((selectedHour?: number, selectedMinute?: number) => number[]) | undefined;
            hideDisabledOptions: boolean;
        }, {
            prefixCls: string;
            t: (key: string, ...args: any[]) => string;
            hours: import("vue").ComputedRef<import("./types.js").TimeList>;
            minutes: import("vue").ComputedRef<import("./types.js").TimeList>;
            seconds: import("vue").ComputedRef<import("./types.js").TimeList>;
            ampmList: import("vue").ComputedRef<import("./types.js").TimeList>;
            selectedValue: import("vue").Ref<{
                clone: () => import("dayjs").Dayjs;
                isValid: () => boolean;
                year: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                month: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                date: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                day: {
                    (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                    (value: number): import("dayjs").Dayjs;
                };
                hour: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                minute: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                second: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                millisecond: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                set: (unit: import("dayjs").UnitType, value: number) => import("dayjs").Dayjs;
                get: (unit: import("dayjs").UnitType) => number;
                add: {
                    (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                    (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                };
                subtract: {
                    (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                    (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                };
                startOf: {
                    (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                };
                endOf: {
                    (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                };
                format: (template?: string) => string;
                diff: (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType | import("dayjs").OpUnitType, float?: boolean) => number;
                valueOf: () => number;
                unix: () => number;
                daysInMonth: () => number;
                toDate: () => Date;
                toJSON: () => string;
                toISOString: () => string;
                toString: () => string;
                utcOffset: () => number;
                isBefore: {
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                };
                isSame: {
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                };
                isAfter: {
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                };
                locale: {
                    (): string;
                    (preset: string | ILocale, object?: Partial<ILocale>): import("dayjs").Dayjs;
                };
                isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                week: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                weekYear: () => number;
                quarter: {
                    (): number;
                    (quarter: number): import("dayjs").Dayjs;
                };
            } | undefined, import("dayjs").Dayjs | {
                clone: () => import("dayjs").Dayjs;
                isValid: () => boolean;
                year: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                month: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                date: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                day: {
                    (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                    (value: number): import("dayjs").Dayjs;
                };
                hour: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                minute: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                second: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                millisecond: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                set: (unit: import("dayjs").UnitType, value: number) => import("dayjs").Dayjs;
                get: (unit: import("dayjs").UnitType) => number;
                add: {
                    (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                    (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                };
                subtract: {
                    (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                    (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                };
                startOf: {
                    (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                };
                endOf: {
                    (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                };
                format: (template?: string) => string;
                diff: (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType | import("dayjs").OpUnitType, float?: boolean) => number;
                valueOf: () => number;
                unix: () => number;
                daysInMonth: () => number;
                toDate: () => Date;
                toJSON: () => string;
                toISOString: () => string;
                toString: () => string;
                utcOffset: () => number;
                isBefore: {
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                };
                isSame: {
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                };
                isAfter: {
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                    (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                };
                locale: {
                    (): string;
                    (preset: string | ILocale, object?: Partial<ILocale>): import("dayjs").Dayjs;
                };
                isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                week: {
                    (): number;
                    (value: number): import("dayjs").Dayjs;
                };
                weekYear: () => number;
                quarter: {
                    (): number;
                    (quarter: number): import("dayjs").Dayjs;
                };
            } | undefined>;
            selectedHour: import("vue").ComputedRef<number | undefined>;
            selectedMinute: import("vue").ComputedRef<number | undefined>;
            selectedSecond: import("vue").ComputedRef<number | undefined>;
            selectedAmpm: import("vue").ComputedRef<"am" | "pm">;
            computedUse12Hours: import("vue").ComputedRef<boolean>;
            confirmBtnDisabled: import("vue").ComputedRef<boolean>;
            columns: import("vue").ComputedRef<string[]>;
            onSelect: (value: number | string, type?: "hour" | "minute" | "second" | "ampm") => void;
            onSelectNow(): void;
            onConfirm(): void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            select: (value: import("dayjs").Dayjs) => boolean;
            confirm: (value: import("dayjs").Dayjs) => boolean;
        }, string, import("vue").PublicProps, Readonly<{
            value?: import("dayjs").Dayjs | undefined;
            defaultValue?: import("dayjs").Dayjs | undefined;
            format: string;
            visible: boolean;
            hideFooter: boolean;
            isRange: boolean;
            disabled: boolean;
            step?: {
                hour?: number;
                minute?: number;
                second?: number;
            } | undefined;
            use12Hours: boolean;
            disabledHours?: (() => number[]) | undefined;
            disabledMinutes?: ((selectedHour?: number) => number[]) | undefined;
            disabledSeconds?: ((selectedHour?: number, selectedMinute?: number) => number[]) | undefined;
            hideDisabledOptions: boolean;
        }> & Readonly<{
            onSelect?: ((value: import("dayjs").Dayjs) => any) | undefined;
            onConfirm?: ((value: import("dayjs").Dayjs) => any) | undefined;
        }>, {
            disabled: boolean;
            visible: boolean;
            format: string;
            use12Hours: boolean;
            hideDisabledOptions: boolean;
            hideFooter: boolean;
            isRange: boolean;
        }, {}, {
            TimeColumn: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                list: {
                    type: import("vue").PropType<import("./types.js").TimeList>;
                    required: true;
                };
                value: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                visible: {
                    type: BooleanConstructor;
                };
                ariaLabel: StringConstructor;
            }>, {
                refWrapper: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                refMap: import("vue").Ref<Map<string | number, HTMLElement> & Omit<Map<string | number, HTMLElement>, keyof Map<any, any>>, Map<string | number, HTMLElement> | (Map<string | number, HTMLElement> & Omit<Map<string | number, HTMLElement>, keyof Map<any, any>>)>;
                onItemRef(el: any, item: import("./types.js").TimeListItem): void;
                onItemClick(item: import("./types.js").TimeListItem): void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                list: {
                    type: import("vue").PropType<import("./types.js").TimeList>;
                    required: true;
                };
                value: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                visible: {
                    type: BooleanConstructor;
                };
                ariaLabel: StringConstructor;
            }>> & Readonly<{
                onSelect?: ((...args: any[]) => any) | undefined;
            }>, {
                visible: boolean;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Button: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("../index.js").SemanticStatus>;
                        validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                        type: import("vue").PropType<import("../index.js").ComponentSize>;
                        validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                        type: import("vue").PropType<import("../index.js").SemanticStatus>;
                        validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                        type: import("vue").PropType<import("../index.js").ComponentSize>;
                        validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                    type: import("vue").PropType<import("../index.js").SemanticStatus>;
                    validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
                    validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                            type: import("vue").PropType<import("../index.js").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("../index.js").SemanticStatus>;
                            default: string;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                        buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button/props.js").ButtonVariant;
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
                            type: import("vue").PropType<import("../index.js").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("../index.js").SemanticStatus>;
                            default: string;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                        buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                    }, {}, {}, {}, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button/props.js").ButtonVariant;
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
                        type: import("vue").PropType<import("../index.js").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("../index.js").SemanticStatus>;
                        default: string;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                    buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button/props.js").ButtonVariant;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        RangePanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["value"]>;
            };
            displayIndex: {
                type: NumberConstructor;
                default: number;
            };
            visible: {
                type: BooleanConstructor;
            };
            format: {
                type: StringConstructor;
                default: string;
            };
            hideFooter: {
                type: BooleanConstructor;
            };
            use12Hours: {
                type: BooleanConstructor;
            };
            step: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["step"]>;
            };
            disabledHours: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["disabledHours"]>;
            };
            disabledMinutes: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["disabledMinutes"]>;
            };
            disabledSeconds: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["disabledSeconds"]>;
            };
            hideDisabledOptions: {
                type: BooleanConstructor;
            };
            showNextDay: {
                type: BooleanConstructor;
            };
        }>, {
            t: (key: string, ...args: any[]) => string;
            prefixCls: string;
            panelIndexes: number[];
            localDisplayIndex: import("vue").Ref<number, number>;
            confirmBtnDisabled: import("vue").ComputedRef<boolean>;
            showNextDayLabel: import("vue").ComputedRef<boolean>;
            panelBind: import("vue").ComputedRef<{
                visible: boolean;
                format: string;
                use12Hours: boolean;
                step: {
                    hour?: number;
                    minute?: number;
                    second?: number;
                } | undefined;
                disabledHours: (() => number[]) | undefined;
                disabledMinutes: ((selectedHour?: number) => number[]) | undefined;
                disabledSeconds: ((selectedHour?: number, selectedMinute?: number) => number[]) | undefined;
                hideDisabledOptions: boolean;
                class?: import("vue").ClassValue;
                style?: import("vue").StyleValue;
            }>;
            hideFooter: import("vue").Ref<boolean, boolean>;
            setDisplayIndex: (index: number) => void;
            onSelect: (index: number, selectedValue: import("dayjs").Dayjs) => void;
            onConfirm: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "confirm" | "update:displayIndex" | "display-index-change")[], "select" | "confirm" | "update:displayIndex" | "display-index-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["value"]>;
            };
            displayIndex: {
                type: NumberConstructor;
                default: number;
            };
            visible: {
                type: BooleanConstructor;
            };
            format: {
                type: StringConstructor;
                default: string;
            };
            hideFooter: {
                type: BooleanConstructor;
            };
            use12Hours: {
                type: BooleanConstructor;
            };
            step: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["step"]>;
            };
            disabledHours: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["disabledHours"]>;
            };
            disabledMinutes: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["disabledMinutes"]>;
            };
            disabledSeconds: {
                type: import("vue").PropType<import("./types.js").RangePanelProps["disabledSeconds"]>;
            };
            hideDisabledOptions: {
                type: BooleanConstructor;
            };
            showNextDay: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            onSelect?: ((...args: any[]) => any) | undefined;
            onConfirm?: ((...args: any[]) => any) | undefined;
            "onUpdate:displayIndex"?: ((...args: any[]) => any) | undefined;
            "onDisplay-index-change"?: ((...args: any[]) => any) | undefined;
        }>, {
            visible: boolean;
            format: string;
            use12Hours: boolean;
            hideDisabledOptions: boolean;
            hideFooter: boolean;
            displayIndex: number;
            showNextDay: boolean;
        }, {}, {
            Panel: import("vue").DefineComponent<{
                value?: import("dayjs").Dayjs | undefined;
                defaultValue?: import("dayjs").Dayjs | undefined;
                format: string;
                visible: boolean;
                hideFooter: boolean;
                isRange: boolean;
                disabled: boolean;
                step?: {
                    hour?: number;
                    minute?: number;
                    second?: number;
                } | undefined;
                use12Hours: boolean;
                disabledHours?: (() => number[]) | undefined;
                disabledMinutes?: ((selectedHour?: number) => number[]) | undefined;
                disabledSeconds?: ((selectedHour?: number, selectedMinute?: number) => number[]) | undefined;
                hideDisabledOptions: boolean;
            }, {
                prefixCls: string;
                t: (key: string, ...args: any[]) => string;
                hours: import("vue").ComputedRef<import("./types.js").TimeList>;
                minutes: import("vue").ComputedRef<import("./types.js").TimeList>;
                seconds: import("vue").ComputedRef<import("./types.js").TimeList>;
                ampmList: import("vue").ComputedRef<import("./types.js").TimeList>;
                selectedValue: import("vue").Ref<{
                    clone: () => import("dayjs").Dayjs;
                    isValid: () => boolean;
                    year: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    month: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    date: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    day: {
                        (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                        (value: number): import("dayjs").Dayjs;
                    };
                    hour: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    minute: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    second: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    millisecond: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    set: (unit: import("dayjs").UnitType, value: number) => import("dayjs").Dayjs;
                    get: (unit: import("dayjs").UnitType) => number;
                    add: {
                        (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                    };
                    subtract: {
                        (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                    };
                    startOf: {
                        (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    };
                    endOf: {
                        (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    };
                    format: (template?: string) => string;
                    diff: (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType | import("dayjs").OpUnitType, float?: boolean) => number;
                    valueOf: () => number;
                    unix: () => number;
                    daysInMonth: () => number;
                    toDate: () => Date;
                    toJSON: () => string;
                    toISOString: () => string;
                    toString: () => string;
                    utcOffset: () => number;
                    isBefore: {
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                    };
                    isSame: {
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                    };
                    isAfter: {
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                    };
                    locale: {
                        (): string;
                        (preset: string | ILocale, object?: Partial<ILocale>): import("dayjs").Dayjs;
                    };
                    isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                    week: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    weekYear: () => number;
                    quarter: {
                        (): number;
                        (quarter: number): import("dayjs").Dayjs;
                    };
                } | undefined, import("dayjs").Dayjs | {
                    clone: () => import("dayjs").Dayjs;
                    isValid: () => boolean;
                    year: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    month: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    date: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    day: {
                        (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                        (value: number): import("dayjs").Dayjs;
                    };
                    hour: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    minute: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    second: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    millisecond: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    set: (unit: import("dayjs").UnitType, value: number) => import("dayjs").Dayjs;
                    get: (unit: import("dayjs").UnitType) => number;
                    add: {
                        (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                    };
                    subtract: {
                        (value: number, unit?: import("dayjs").ManipulateType): import("dayjs").Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): import("dayjs").Dayjs;
                    };
                    startOf: {
                        (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    };
                    endOf: {
                        (unit: import("dayjs").OpUnitType): import("dayjs").Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): import("dayjs").Dayjs;
                    };
                    format: (template?: string) => string;
                    diff: (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType | import("dayjs").OpUnitType, float?: boolean) => number;
                    valueOf: () => number;
                    unix: () => number;
                    daysInMonth: () => number;
                    toDate: () => Date;
                    toJSON: () => string;
                    toISOString: () => string;
                    toString: () => string;
                    utcOffset: () => number;
                    isBefore: {
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                    };
                    isSame: {
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                    };
                    isAfter: {
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").OpUnitType): boolean;
                        (date?: import("dayjs").ConfigType, unit?: import("dayjs").QUnitType): boolean;
                    };
                    locale: {
                        (): string;
                        (preset: string | ILocale, object?: Partial<ILocale>): import("dayjs").Dayjs;
                    };
                    isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                    week: {
                        (): number;
                        (value: number): import("dayjs").Dayjs;
                    };
                    weekYear: () => number;
                    quarter: {
                        (): number;
                        (quarter: number): import("dayjs").Dayjs;
                    };
                } | undefined>;
                selectedHour: import("vue").ComputedRef<number | undefined>;
                selectedMinute: import("vue").ComputedRef<number | undefined>;
                selectedSecond: import("vue").ComputedRef<number | undefined>;
                selectedAmpm: import("vue").ComputedRef<"am" | "pm">;
                computedUse12Hours: import("vue").ComputedRef<boolean>;
                confirmBtnDisabled: import("vue").ComputedRef<boolean>;
                columns: import("vue").ComputedRef<string[]>;
                onSelect: (value: number | string, type?: "hour" | "minute" | "second" | "ampm") => void;
                onSelectNow(): void;
                onConfirm(): void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                select: (value: import("dayjs").Dayjs) => boolean;
                confirm: (value: import("dayjs").Dayjs) => boolean;
            }, string, import("vue").PublicProps, Readonly<{
                value?: import("dayjs").Dayjs | undefined;
                defaultValue?: import("dayjs").Dayjs | undefined;
                format: string;
                visible: boolean;
                hideFooter: boolean;
                isRange: boolean;
                disabled: boolean;
                step?: {
                    hour?: number;
                    minute?: number;
                    second?: number;
                } | undefined;
                use12Hours: boolean;
                disabledHours?: (() => number[]) | undefined;
                disabledMinutes?: ((selectedHour?: number) => number[]) | undefined;
                disabledSeconds?: ((selectedHour?: number, selectedMinute?: number) => number[]) | undefined;
                hideDisabledOptions: boolean;
            }> & Readonly<{
                onSelect?: ((value: import("dayjs").Dayjs) => any) | undefined;
                onConfirm?: ((value: import("dayjs").Dayjs) => any) | undefined;
            }>, {
                disabled: boolean;
                visible: boolean;
                format: string;
                use12Hours: boolean;
                hideDisabledOptions: boolean;
                hideFooter: boolean;
                isRange: boolean;
            }, {}, {
                TimeColumn: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    list: {
                        type: import("vue").PropType<import("./types.js").TimeList>;
                        required: true;
                    };
                    value: {
                        type: (StringConstructor | NumberConstructor)[];
                    };
                    visible: {
                        type: BooleanConstructor;
                    };
                    ariaLabel: StringConstructor;
                }>, {
                    refWrapper: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    refMap: import("vue").Ref<Map<string | number, HTMLElement> & Omit<Map<string | number, HTMLElement>, keyof Map<any, any>>, Map<string | number, HTMLElement> | (Map<string | number, HTMLElement> & Omit<Map<string | number, HTMLElement>, keyof Map<any, any>>)>;
                    onItemRef(el: any, item: import("./types.js").TimeListItem): void;
                    onItemClick(item: import("./types.js").TimeListItem): void;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    list: {
                        type: import("vue").PropType<import("./types.js").TimeList>;
                        required: true;
                    };
                    value: {
                        type: (StringConstructor | NumberConstructor)[];
                    };
                    visible: {
                        type: BooleanConstructor;
                    };
                    ariaLabel: StringConstructor;
                }>> & Readonly<{
                    onSelect?: ((...args: any[]) => any) | undefined;
                }>, {
                    visible: boolean;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                Button: import("../_utils/global-config").CedarComponentWithInstall<{
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                        status: {
                            type: import("vue").PropType<import("../index.js").SemanticStatus>;
                            validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                            validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                            type: import("vue").PropType<import("../index.js").ComponentSize>;
                            validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                            type: import("vue").PropType<import("../index.js").SemanticStatus>;
                            validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                            validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                            type: import("vue").PropType<import("../index.js").ComponentSize>;
                            validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                        type: import("vue").PropType<import("../index.js").SemanticStatus>;
                        validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                        type: import("vue").PropType<import("../index.js").ComponentSize>;
                        validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                                type: import("vue").PropType<import("../index.js").ComponentSize>;
                                default: string;
                            };
                            status: {
                                type: import("vue").PropType<import("../index.js").SemanticStatus>;
                                default: string;
                            };
                            variant: {
                                type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                            buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                            vertical: boolean;
                            size: "xs" | "sm" | "md" | "lg" | "xl";
                            disabled: boolean;
                            color: string;
                            variant: import("../button/props.js").ButtonVariant;
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
                                type: import("vue").PropType<import("../index.js").ComponentSize>;
                                default: string;
                            };
                            status: {
                                type: import("vue").PropType<import("../index.js").SemanticStatus>;
                                default: string;
                            };
                            variant: {
                                type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                            buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                        }, {}, {}, {}, {
                            vertical: boolean;
                            size: "xs" | "sm" | "md" | "lg" | "xl";
                            disabled: boolean;
                            color: string;
                            variant: import("../button/props.js").ButtonVariant;
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
                            type: import("vue").PropType<import("../index.js").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("../index.js").SemanticStatus>;
                            default: string;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                        buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button/props.js").ButtonVariant;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            Button: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    status: {
                        type: import("vue").PropType<import("../index.js").SemanticStatus>;
                        validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                        type: import("vue").PropType<import("../index.js").ComponentSize>;
                        validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                        type: import("vue").PropType<import("../index.js").SemanticStatus>;
                        validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                        validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                        type: import("vue").PropType<import("../index.js").ComponentSize>;
                        validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                    type: import("vue").PropType<import("../index.js").SemanticStatus>;
                    validator: (value: unknown) => value is import("../index.js").SemanticStatus;
                };
                variant: {
                    type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button/props.js").ButtonVariant;
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
                    type: import("vue").PropType<import("../index.js").ComponentSize>;
                    validator: (value: unknown) => value is import("../index.js").ComponentSize;
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
                            type: import("vue").PropType<import("../index.js").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("../index.js").SemanticStatus>;
                            default: string;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                        buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button/props.js").ButtonVariant;
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
                            type: import("vue").PropType<import("../index.js").ComponentSize>;
                            default: string;
                        };
                        status: {
                            type: import("vue").PropType<import("../index.js").SemanticStatus>;
                            default: string;
                        };
                        variant: {
                            type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                        buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                    }, {}, {}, {}, {
                        vertical: boolean;
                        size: "xs" | "sm" | "md" | "lg" | "xl";
                        disabled: boolean;
                        color: string;
                        variant: import("../button/props.js").ButtonVariant;
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
                        type: import("vue").PropType<import("../index.js").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: import("vue").PropType<import("../index.js").SemanticStatus>;
                        default: string;
                    };
                    variant: {
                        type: import("vue").PropType<import("../button/props.js").ButtonVariant>;
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
                    buttonGroupProvider: import("../button/provide.js").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../button/props.js").ButtonVariant;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconClockCircle: {
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
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types.js").CedarIconOptions): void;
        };
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
