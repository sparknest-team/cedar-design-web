import type { Dayjs } from 'dayjs';
import { getDateValue } from '../_utils/date';
import { CalendarValue, FormatFunc, ShortcutType } from './types';
import { isFunction } from '../_utils/is';
/**
 * @displayName Common
 * @noBrackets
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    locale: {
        type: import("vue").PropType<Record<string, any>>;
    };
    hideTrigger: {
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
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        default: string;
        validator: (value: import("../_utils/form-control").FormControlVariant) => boolean;
    };
    shortcuts: {
        type: import("vue").PropType<ShortcutType[]>;
        default: () => never[];
    };
    shortcutsPosition: {
        type: import("vue").PropType<"left" | "bottom" | "right">;
        default: string;
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
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    unmountOnClose: {
        type: BooleanConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    disabledDate: {
        type: import("vue").PropType<(current?: Date) => boolean>;
    };
    disabledTime: {
        type: import("vue").PropType<(current: Date) => import("./types").DisabledTimeProps>;
    };
    pickerValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    mode: {
        type: import("vue").PropType<"date" | "year" | "quarter" | "month" | "week">;
        default: string;
        validator: (value: string) => boolean;
    };
    format: {
        type: import("vue").PropType<string | FormatFunc>;
    };
    valueFormat: {
        type: import("vue").PropType<"timestamp" | "Date" | string>;
    };
    previewShortcut: {
        type: BooleanConstructor;
        default: boolean;
    };
    showConfirmBtn: {
        type: BooleanConstructor;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
    };
    showNowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    dayStartOfWeek: {
        type: import("vue").PropType<import("./types").WeekStart>;
        default: number;
        validator: (value: number) => boolean;
    };
    modelValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    defaultValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    disabledInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    abbreviation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    prefixCls: string;
    refInput: import("vue").Ref<any, any>;
    panelProps: import("vue").ComputedRef<{
        showNowBtn: boolean;
        prefixCls: string;
        format: string;
        value: Dayjs | undefined;
        visible: boolean;
        showConfirmBtn: boolean;
        confirmBtnDisabled: boolean | undefined;
        timePickerProps: {
            visible: boolean;
            error?: boolean | undefined;
            readonly?: boolean | undefined;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            type?: "time" | "time-range" | undefined;
            placeholder?: (string | string[]) | undefined;
            disabled?: boolean | undefined;
            open?: boolean | undefined;
            modelValue?: (import("../time-picker/types").TimeValue | import("../time-picker/types").TimeValue[]) | undefined;
            clearable?: boolean | undefined;
            defaultOpen?: boolean | undefined;
            placement?: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | undefined;
            unmountOnClose?: boolean | undefined;
            triggerProps?: Record<string, unknown> | undefined;
            format: string;
            step?: {
                hour?: number;
                minute?: number;
                second?: number;
            } | undefined;
            disableConfirm?: boolean | undefined;
            use12Hours?: boolean | undefined;
            disabledHours?: (() => number[]) | undefined;
            disabledMinutes?: ((selectedHour?: number) => number[]) | undefined;
            disabledSeconds?: ((selectedHour?: number, selectedMinute?: number) => number[]) | undefined;
            hideDisabledOptions?: boolean | undefined;
        };
        extra: import("vue").Slot<any> | undefined;
        dateRender: import("vue").Slot<any> | undefined;
        headerValue: Dayjs;
        headerIcons: {
            prev: import("vue").Slot<any> | undefined;
            prevDouble: import("vue").Slot<any> | undefined;
            next: import("vue").Slot<any> | undefined;
            nextDouble: import("vue").Slot<any> | undefined;
        };
        headerOperations: import("./types").HeaderOperations;
        timePickerValue: Dayjs;
        headerMode: "month" | "year" | undefined;
        onCellClick: (value: Dayjs) => void;
        onTimePickerSelect: (time: Dayjs) => void;
        onConfirm: () => void;
        onShortcutClick: (value: Dayjs, shortcut: ShortcutType) => void;
        onShortcutMouseEnter: ((value: Dayjs) => void) | undefined;
        onShortcutMouseLeave: (() => void) | undefined;
        onTodayBtnClick: (value: Dayjs) => void;
        onHeaderLabelClick: (type: "year" | "month") => void;
        onHeaderSelect: (date: Dayjs) => void;
        onMonthHeaderClick: () => void;
        mode: "month" | "week" | "date" | "year" | "quarter";
        dayStartOfWeek: import("./types").WeekStart;
        hideTrigger: boolean;
        shortcuts: ShortcutType[];
        disabledDate: ((current?: Date) => boolean) | undefined;
        disabledTime: ((current: Date) => import("./types").DisabledTimeProps) | undefined;
        showTime: boolean;
        abbreviation: boolean;
        shortcutsPosition: "bottom" | "left" | "right";
    }>;
    panelValue: import("vue").ComputedRef<Dayjs | undefined>;
    inputValue: import("vue").Ref<string | undefined, string | undefined>;
    selectedValue: import("vue").ComputedRef<Dayjs | undefined>;
    inputFormat: import("vue").ComputedRef<string | ((value: Dayjs) => string)>;
    computedPlaceholder: import("vue").ComputedRef<string>;
    panelVisible: import("vue").ComputedRef<boolean>;
    inputEditable: import("vue").ComputedRef<boolean>;
    needConfirm: import("vue").ComputedRef<boolean>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    onPanelVisibleChange: (visible: boolean) => void;
    onInputClear: (e: Event) => void;
    onInputChange: (e: any) => void;
    onInputPressEnter: () => void;
    onInputBlur: () => void;
    onPanelClick: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 组件值发生改变
     * @en The component value changes
     * @param {Date | string | number | undefined} value
     * @param {Date | undefined} date
     * @param {string | undefined} dateString
     */
    change: (value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => true;
    'update:modelValue': (value: CalendarValue | undefined) => true;
    /**
     * @zh 选中日期发生改变但组件值未改变
     * @en The selected date has changed but the component value has not changed
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    select: (value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => true;
    /**
     * @zh 打开或关闭弹出框
     * @en Open or close the pop-up box
     * @param {boolean} visible
     */
    'open-change': (visible: boolean) => true;
    'update:open': (visible: boolean) => true;
    /**
     * @zh 点击确认按钮
     * @en Click the confirm button
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    ok: (value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => true;
    /**
     * @zh 点击清除按钮
     * @en Click the clear button
     */
    clear: () => true;
    /**
     * @zh 点击快捷选项
     * @en Click on the shortcut option
     * @param {ShortcutType} shortcut
     */
    'select-shortcut': (shortcut: ShortcutType) => true;
    /**
     * @zh 面板日期改变
     * @en Panel date change
     * @param {Date | string | number} value
     * @param {Date} date
     * @param {string} dateString
     */
    'picker-value-change': (value: CalendarValue, date: Date, dateString: string) => true;
    'update:pickerValue': (value: CalendarValue) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    locale: {
        type: import("vue").PropType<Record<string, any>>;
    };
    hideTrigger: {
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
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        default: string;
        validator: (value: import("../_utils/form-control").FormControlVariant) => boolean;
    };
    shortcuts: {
        type: import("vue").PropType<ShortcutType[]>;
        default: () => never[];
    };
    shortcutsPosition: {
        type: import("vue").PropType<"left" | "bottom" | "right">;
        default: string;
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
        type: import("vue").PropType<import("..").TriggerProps>;
    };
    unmountOnClose: {
        type: BooleanConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    disabledDate: {
        type: import("vue").PropType<(current?: Date) => boolean>;
    };
    disabledTime: {
        type: import("vue").PropType<(current: Date) => import("./types").DisabledTimeProps>;
    };
    pickerValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    defaultPickerValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    mode: {
        type: import("vue").PropType<"date" | "year" | "quarter" | "month" | "week">;
        default: string;
        validator: (value: string) => boolean;
    };
    format: {
        type: import("vue").PropType<string | FormatFunc>;
    };
    valueFormat: {
        type: import("vue").PropType<"timestamp" | "Date" | string>;
    };
    previewShortcut: {
        type: BooleanConstructor;
        default: boolean;
    };
    showConfirmBtn: {
        type: BooleanConstructor;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
    };
    showNowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    dayStartOfWeek: {
        type: import("vue").PropType<import("./types").WeekStart>;
        default: number;
        validator: (value: number) => boolean;
    };
    modelValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    defaultValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    disabledInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    abbreviation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onChange?: ((value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => any) | undefined;
    onSelect?: ((value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: CalendarValue | undefined) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    "onOpen-change"?: ((visible: boolean) => any) | undefined;
    onOk?: ((value: CalendarValue | undefined, date: Date | undefined, dateString: string | undefined) => any) | undefined;
    "onSelect-shortcut"?: ((shortcut: ShortcutType) => any) | undefined;
    "onPicker-value-change"?: ((value: CalendarValue, date: Date, dateString: string) => any) | undefined;
    "onUpdate:pickerValue"?: ((value: CalendarValue) => any) | undefined;
}>, {
    error: boolean;
    readonly: boolean;
    mode: "month" | "week" | "date" | "year" | "quarter";
    disabled: boolean;
    open: boolean;
    variant: "filled" | "outlined" | "standard";
    clearable: boolean;
    defaultOpen: boolean;
    placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br";
    unmountOnClose: boolean;
    dayStartOfWeek: import("./types").WeekStart;
    disabledInput: boolean;
    hideTrigger: boolean;
    shortcuts: ShortcutType[];
    showNowBtn: boolean;
    showTime: boolean;
    abbreviation: boolean;
    showConfirmBtn: boolean;
    shortcutsPosition: "bottom" | "left" | "right";
    previewShortcut: boolean;
}, {}, {
    DateInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
        };
        variant: {
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            default: string;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
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
            type: import("vue").PropType<Dayjs>;
        };
        format: {
            type: import("vue").PropType<string | ((value: Dayjs) => string)>;
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
            type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
            default: string;
            validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
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
            type: import("vue").PropType<Dayjs>;
        };
        format: {
            type: import("vue").PropType<string | ((value: Dayjs) => string)>;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        FieldDecorator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            tag: {
                type: import("vue").PropType<"div" | "span">;
                default: string;
            };
            variant: {
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
                validator: (value: unknown) => value is import("..").ComponentSize;
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
    PickerPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        mode: {
            type: StringConstructor;
        };
        headerMode: {
            type: import("vue").PropType<"year" | "month">;
        };
        prefixCls: {
            type: StringConstructor;
            required: true;
        };
        value: {
            type: import("vue").PropType<Dayjs>;
        };
        headerValue: {
            type: import("vue").PropType<Dayjs>;
            required: true;
        };
        timePickerValue: {
            type: import("vue").PropType<Dayjs>;
        };
        showTime: {
            type: BooleanConstructor;
        };
        showConfirmBtn: {
            type: BooleanConstructor;
        };
        shortcuts: {
            type: import("vue").PropType<ShortcutType[]>;
            default: () => never[];
        };
        shortcutsPosition: {
            type: import("vue").PropType<"left" | "bottom" | "right">;
            default: string;
        };
        format: {
            type: StringConstructor;
            required: true;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<import("./types").WeekStart>;
            default: number;
        };
        disabledDate: {
            type: import("vue").PropType<import("./types").DisabledDate>;
        };
        disabledTime: {
            type: import("vue").PropType<import("./types").DisabledTime>;
        };
        timePickerProps: {
            type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
        };
        extra: {
            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
        };
        dateRender: {
            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
        };
        hideTrigger: {
            type: BooleanConstructor;
        };
        confirmBtnDisabled: {
            type: BooleanConstructor;
        };
        showNowBtn: {
            type: BooleanConstructor;
        };
        headerIcons: {
            type: import("vue").PropType<import("./types").HeaderIcons>;
            default: () => {};
        };
        headerOperations: {
            type: import("vue").PropType<import("./types").HeaderOperations>;
        };
        abbreviation: {
            type: BooleanConstructor;
        };
    }>, {
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        showShortcutsInLeft: import("vue").ComputedRef<boolean>;
        showShortcutsInRight: import("vue").ComputedRef<boolean>;
        showShortcutsInBottom: import("vue").ComputedRef<boolean>;
        shortcutsProps: {
            prefixCls: string;
            shortcuts: ShortcutType[];
            showNowBtn: boolean;
            onItemClick: (shortcut: ShortcutType) => void;
            onItemMouseEnter: (shortcut: ShortcutType) => void;
            onItemMouseLeave: (shortcut: ShortcutType) => void;
            onNowClick: () => void;
        };
        commonPanelProps: {
            value: Dayjs | undefined;
            headerValue: Dayjs;
            headerIcons: import("./types").HeaderIcons;
            headerOperations: import("./types").HeaderOperations | undefined;
            disabledDate: import("./types").DisabledDate | undefined;
            dateRender: import("../_components/render-function").RenderFunc | undefined;
            onSelect: (date: Dayjs) => void;
            onHeaderLabelClick: (type: "year" | "month") => void;
        };
        footerValue: import("vue").ComputedRef<Dayjs>;
        onTodayBtnClick: () => void;
        onConfirmBtnClick: () => void;
        onTimePickerSelect: (time: Dayjs) => void;
        onHeaderPanelSelect: (date: Dayjs) => void;
        headerPanelHeaderValue: import("vue").ComputedRef<Dayjs>;
        headerPanelHeaderOperations: import("vue").ComputedRef<import("./types").HeaderOperations>;
        onMonthHeaderLabelClick: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "confirm" | "time-picker-select" | "today-btn-click" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "header-label-click" | "header-select" | "month-header-click")[], "cell-click" | "confirm" | "time-picker-select" | "today-btn-click" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "header-label-click" | "header-select" | "month-header-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        mode: {
            type: StringConstructor;
        };
        headerMode: {
            type: import("vue").PropType<"year" | "month">;
        };
        prefixCls: {
            type: StringConstructor;
            required: true;
        };
        value: {
            type: import("vue").PropType<Dayjs>;
        };
        headerValue: {
            type: import("vue").PropType<Dayjs>;
            required: true;
        };
        timePickerValue: {
            type: import("vue").PropType<Dayjs>;
        };
        showTime: {
            type: BooleanConstructor;
        };
        showConfirmBtn: {
            type: BooleanConstructor;
        };
        shortcuts: {
            type: import("vue").PropType<ShortcutType[]>;
            default: () => never[];
        };
        shortcutsPosition: {
            type: import("vue").PropType<"left" | "bottom" | "right">;
            default: string;
        };
        format: {
            type: StringConstructor;
            required: true;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<import("./types").WeekStart>;
            default: number;
        };
        disabledDate: {
            type: import("vue").PropType<import("./types").DisabledDate>;
        };
        disabledTime: {
            type: import("vue").PropType<import("./types").DisabledTime>;
        };
        timePickerProps: {
            type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
        };
        extra: {
            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
        };
        dateRender: {
            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
        };
        hideTrigger: {
            type: BooleanConstructor;
        };
        confirmBtnDisabled: {
            type: BooleanConstructor;
        };
        showNowBtn: {
            type: BooleanConstructor;
        };
        headerIcons: {
            type: import("vue").PropType<import("./types").HeaderIcons>;
            default: () => {};
        };
        headerOperations: {
            type: import("vue").PropType<import("./types").HeaderOperations>;
        };
        abbreviation: {
            type: BooleanConstructor;
        };
    }>> & Readonly<{
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
        "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
        "onToday-btn-click"?: ((...args: any[]) => any) | undefined;
        "onShortcut-click"?: ((...args: any[]) => any) | undefined;
        "onShortcut-mouse-enter"?: ((...args: any[]) => any) | undefined;
        "onShortcut-mouse-leave"?: ((...args: any[]) => any) | undefined;
        "onHeader-label-click"?: ((...args: any[]) => any) | undefined;
        "onHeader-select"?: ((...args: any[]) => any) | undefined;
        "onMonth-header-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        dayStartOfWeek: import("./types").WeekStart;
        hideTrigger: boolean;
        shortcuts: ShortcutType[];
        showNowBtn: boolean;
        confirmBtnDisabled: boolean;
        headerIcons: import("./types").HeaderIcons;
        showTime: boolean;
        abbreviation: boolean;
        showConfirmBtn: boolean;
        shortcutsPosition: "bottom" | "left" | "right";
    }, {}, {
        DatePanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            isRange: {
                type: BooleanConstructor;
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            footerValue: {
                type: import("vue").PropType<Dayjs>;
            };
            timePickerValue: {
                type: import("vue").PropType<Dayjs>;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            dayStartOfWeek: {
                type: import("vue").PropType<import("./types").WeekStart>;
                default: number;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            disabledTime: {
                type: import("vue").PropType<import("./types").DisabledTime>;
            };
            isSameTime: {
                type: import("vue").PropType<import("./types").IsSameTime>;
            };
            mode: {
                type: import("vue").PropType<import("./types").Mode>;
                default: string;
            };
            showTime: {
                type: BooleanConstructor;
            };
            timePickerProps: {
                type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
            };
            currentView: {
                type: import("vue").PropType<"date" | "time">;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
            disabled: {
                type: BooleanConstructor;
            };
            onHeaderLabelClick: {
                type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
            };
        }>, {
            prefixCls: import("vue").ComputedRef<string>;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            pickerPrefixCls: string;
            headerTitle: import("vue").ComputedRef<string>;
            rows: import("vue").ComputedRef<import("./types").Cell[][]>;
            weekList: import("vue").ComputedRef<number[]>;
            mergedIsSameTime: import("vue").ComputedRef<import("./types").IsSameTime>;
            disabledTimeProps: import("vue").ComputedRef<import("./types").DisabledTimeProps>;
            onCellClick: (cellData: import("./types").Cell) => void;
            onCellMouseEnter: (cellData: import("./types").Cell) => void;
            onTimePanelSelect: (time: Dayjs) => void;
            showViewTabs: import("vue").ComputedRef<boolean>;
            showDateView: import("vue").ComputedRef<boolean>;
            showTimeView: import("vue").ComputedRef<boolean>;
            changeViewTo: (newView: "date" | "time") => void;
            datePickerT: (key: string, ...args: any[]) => any;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter" | "time-picker-select" | "current-view-change" | "update:currentView")[], "select" | "cell-mouse-enter" | "time-picker-select" | "current-view-change" | "update:currentView", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            isRange: {
                type: BooleanConstructor;
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            footerValue: {
                type: import("vue").PropType<Dayjs>;
            };
            timePickerValue: {
                type: import("vue").PropType<Dayjs>;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            dayStartOfWeek: {
                type: import("vue").PropType<import("./types").WeekStart>;
                default: number;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            disabledTime: {
                type: import("vue").PropType<import("./types").DisabledTime>;
            };
            isSameTime: {
                type: import("vue").PropType<import("./types").IsSameTime>;
            };
            mode: {
                type: import("vue").PropType<import("./types").Mode>;
                default: string;
            };
            showTime: {
                type: BooleanConstructor;
            };
            timePickerProps: {
                type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
            };
            currentView: {
                type: import("vue").PropType<"date" | "time">;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
            disabled: {
                type: BooleanConstructor;
            };
            onHeaderLabelClick: {
                type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
            };
        }>> & Readonly<{
            onSelect?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
            "onCurrent-view-change"?: ((...args: any[]) => any) | undefined;
            "onUpdate:currentView"?: ((...args: any[]) => any) | undefined;
        }>, {
            mode: import("./types").Mode;
            disabled: boolean;
            dayStartOfWeek: import("./types").WeekStart;
            isRange: boolean;
            headerOperations: import("./types").HeaderOperations;
            headerIcons: import("./types").HeaderIcons;
            showTime: boolean;
        }, {}, {
            PanelHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>, {
                showPrev: import("vue").ComputedRef<boolean>;
                showSuperPrev: import("vue").ComputedRef<boolean>;
                showNext: import("vue").ComputedRef<boolean>;
                showSuperNext: import("vue").ComputedRef<boolean>;
                year: import("vue").ComputedRef<string>;
                month: import("vue").ComputedRef<string>;
                getIconClassName: (show?: boolean) => (string | {
                    [x: string]: boolean;
                })[];
                previousYearLabel: string;
                previousMonthLabel: string;
                nextMonthLabel: string;
                nextYearLabel: string;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "label-click"[], "label-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>> & Readonly<{
                "onLabel-click"?: ((...args: any[]) => any) | undefined;
            }>, {
                mode: import("./types").Mode;
            }, {}, {
                IconLeft: {
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
                IconRight: {
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
                IconDoubleLeft: {
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
                IconDoubleRight: {
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
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            PanelBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>, {
                isWeek: import("vue").ComputedRef<boolean>;
                getCellClassName: (cellData: import("./types").Cell) => (string | {
                    [x: string]: boolean | undefined;
                } | undefined)[];
                isCellDisabled: (cellData: import("./types").Cell) => boolean;
                isCellSelected: (cellData: import("./types").Cell) => boolean;
                onCellClick: (cellData: import("./types").Cell) => void;
                onCellMouseEnter: (cellData: import("./types").Cell) => void;
                onCellMouseLeave: (cellData: import("./types").Cell) => void;
                getDateValue: typeof getDateValue;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>> & Readonly<{
                "onCell-click"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                rows: import("./types").Cell[][];
            }, {}, {
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            PanelWeekList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                weekList: {
                    type: import("vue").PropType<number[]>;
                    required: true;
                };
            }>, {
                labelList: import("vue").ComputedRef<string[]>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                weekList: {
                    type: import("vue").PropType<number[]>;
                    required: true;
                };
            }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            TimePanel: import("vue").DefineComponent<{
                value?: Dayjs | undefined;
                defaultValue?: Dayjs | undefined;
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
                hours: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                minutes: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                seconds: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                ampmList: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                selectedValue: import("vue").Ref<{
                    clone: () => Dayjs;
                    isValid: () => boolean;
                    year: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    month: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    date: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    day: {
                        (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                        (value: number): Dayjs;
                    };
                    hour: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    minute: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    second: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    millisecond: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    set: (unit: import("dayjs").UnitType, value: number) => Dayjs;
                    get: (unit: import("dayjs").UnitType) => number;
                    add: {
                        (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): Dayjs;
                    };
                    subtract: {
                        (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): Dayjs;
                    };
                    startOf: {
                        (unit: import("dayjs").OpUnitType): Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
                    };
                    endOf: {
                        (unit: import("dayjs").OpUnitType): Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
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
                        (preset: string | ILocale, object?: Partial<ILocale>): Dayjs;
                    };
                    isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                    week: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    weekYear: () => number;
                    quarter: {
                        (): number;
                        (quarter: number): Dayjs;
                    };
                } | undefined, Dayjs | {
                    clone: () => Dayjs;
                    isValid: () => boolean;
                    year: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    month: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    date: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    day: {
                        (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                        (value: number): Dayjs;
                    };
                    hour: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    minute: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    second: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    millisecond: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    set: (unit: import("dayjs").UnitType, value: number) => Dayjs;
                    get: (unit: import("dayjs").UnitType) => number;
                    add: {
                        (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): Dayjs;
                    };
                    subtract: {
                        (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                        (value: number, unit: import("dayjs").QUnitType): Dayjs;
                    };
                    startOf: {
                        (unit: import("dayjs").OpUnitType): Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
                    };
                    endOf: {
                        (unit: import("dayjs").OpUnitType): Dayjs;
                        (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
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
                        (preset: string | ILocale, object?: Partial<ILocale>): Dayjs;
                    };
                    isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                    week: {
                        (): number;
                        (value: number): Dayjs;
                    };
                    weekYear: () => number;
                    quarter: {
                        (): number;
                        (quarter: number): Dayjs;
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
                select: (value: Dayjs) => boolean;
                confirm: (value: Dayjs) => boolean;
            }, string, import("vue").PublicProps, Readonly<{
                value?: Dayjs | undefined;
                defaultValue?: Dayjs | undefined;
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
                onSelect?: ((value: Dayjs) => any) | undefined;
                onConfirm?: ((value: Dayjs) => any) | undefined;
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
                        type: import("vue").PropType<import("../time-picker/types").TimeList>;
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
                    onItemRef(el: any, item: import("../time-picker/types").TimeListItem): void;
                    onItemClick(item: import("../time-picker/types").TimeListItem): void;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    list: {
                        type: import("vue").PropType<import("../time-picker/types").TimeList>;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            IconCalendar: {
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
                install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
            };
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        PanelShortcuts: import("vue").DefineComponent<{
            prefixCls: string;
            shortcuts: ShortcutType[];
        }, {
            datePickerT: (key: string, ...args: any[]) => any;
            onItemClick: (item: ShortcutType) => void;
            onItemMouseEnter: (item: ShortcutType) => void;
            onItemMouseLeave: (item: ShortcutType) => void;
            onNowClick: () => void;
            isFunction: typeof isFunction;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("item-click" | "item-mouse-enter" | "item-mouse-leave" | "now-click")[], "item-click" | "item-mouse-enter" | "item-mouse-leave" | "now-click", import("vue").PublicProps, Readonly<{
            prefixCls: string;
            shortcuts: ShortcutType[];
        }> & Readonly<{
            "onItem-click"?: ((...args: any[]) => any) | undefined;
            "onItem-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onItem-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onNow-click"?: ((...args: any[]) => any) | undefined;
        }>, {
            shortcuts: ShortcutType[];
            showNowBtn: boolean;
        }, {}, {
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
            RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                renderFunc: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    required: true;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                renderFunc: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    required: true;
                };
            }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        PanelFooter: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
                required: true;
            };
            showTodayBtn: {
                type: BooleanConstructor;
            };
            showConfirmBtn: {
                type: BooleanConstructor;
            };
            confirmBtnDisabled: {
                type: BooleanConstructor;
            };
        }>, {
            datePickerT: (key: string, ...args: any[]) => any;
            onTodayClick: () => void;
            onConfirmBtnClick: () => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("today-btn-click" | "confirm-btn-click")[], "today-btn-click" | "confirm-btn-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
                required: true;
            };
            showTodayBtn: {
                type: BooleanConstructor;
            };
            showConfirmBtn: {
                type: BooleanConstructor;
            };
            confirmBtnDisabled: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            "onToday-btn-click"?: ((...args: any[]) => any) | undefined;
            "onConfirm-btn-click"?: ((...args: any[]) => any) | undefined;
        }>, {
            confirmBtnDisabled: boolean;
            showTodayBtn: boolean;
            showConfirmBtn: boolean;
        }, {}, {
            Link: import("../_utils/global-config").CedarComponentWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                href: StringConstructor;
                target: StringConstructor;
                rel: StringConstructor;
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    default: string;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                underline: {
                    type: import("vue").PropType<import("../link").LinkUnderline>;
                    default: string;
                    validator: (value: unknown) => value is import("../link").LinkUnderline;
                };
                hoverable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                icon: BooleanConstructor;
                loading: BooleanConstructor;
                disabled: BooleanConstructor;
            }>, {
                cls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                prefixCls: string;
                showIcon: import("vue").ComputedRef<boolean>;
                handleClick: (ev: MouseEvent) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (ev: MouseEvent) => true;
            }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                href: StringConstructor;
                target: StringConstructor;
                rel: StringConstructor;
                status: {
                    type: import("vue").PropType<import("..").SemanticStatus>;
                    default: string;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                underline: {
                    type: import("vue").PropType<import("../link").LinkUnderline>;
                    default: string;
                    validator: (value: unknown) => value is import("../link").LinkUnderline;
                };
                hoverable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                icon: BooleanConstructor;
                loading: BooleanConstructor;
                disabled: BooleanConstructor;
            }>> & Readonly<{
                onClick?: ((ev: MouseEvent) => any) | undefined;
            }>, {
                disabled: boolean;
                underline: "hover" | "none" | "always";
                icon: boolean;
                status: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger";
                loading: boolean;
                hoverable: boolean;
            }, {}, {
                IconLink: {
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
                };
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        WeekPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            dayStartOfWeek: {
                type: import("vue").PropType<import("./types").WeekStart>;
                default: number;
            };
        }>, {
            isSameTime: import("./types").IsSameTime;
            onSelect: (value: Dayjs) => void;
            onCellMouseEnter: (value: Dayjs) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            dayStartOfWeek: {
                type: import("vue").PropType<import("./types").WeekStart>;
                default: number;
            };
        }>> & Readonly<{
            onSelect?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        }>, {
            dayStartOfWeek: import("./types").WeekStart;
        }, {}, {
            DatePanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                isRange: {
                    type: BooleanConstructor;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                headerValue: {
                    type: import("vue").PropType<Dayjs>;
                    required: true;
                };
                footerValue: {
                    type: import("vue").PropType<Dayjs>;
                };
                timePickerValue: {
                    type: import("vue").PropType<Dayjs>;
                };
                headerOperations: {
                    type: import("vue").PropType<import("./types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                    default: () => {};
                };
                dayStartOfWeek: {
                    type: import("vue").PropType<import("./types").WeekStart>;
                    default: number;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                disabledTime: {
                    type: import("vue").PropType<import("./types").DisabledTime>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                showTime: {
                    type: BooleanConstructor;
                };
                timePickerProps: {
                    type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
                };
                currentView: {
                    type: import("vue").PropType<"date" | "time">;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
                disabled: {
                    type: BooleanConstructor;
                };
                onHeaderLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>, {
                prefixCls: import("vue").ComputedRef<string>;
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                pickerPrefixCls: string;
                headerTitle: import("vue").ComputedRef<string>;
                rows: import("vue").ComputedRef<import("./types").Cell[][]>;
                weekList: import("vue").ComputedRef<number[]>;
                mergedIsSameTime: import("vue").ComputedRef<import("./types").IsSameTime>;
                disabledTimeProps: import("vue").ComputedRef<import("./types").DisabledTimeProps>;
                onCellClick: (cellData: import("./types").Cell) => void;
                onCellMouseEnter: (cellData: import("./types").Cell) => void;
                onTimePanelSelect: (time: Dayjs) => void;
                showViewTabs: import("vue").ComputedRef<boolean>;
                showDateView: import("vue").ComputedRef<boolean>;
                showTimeView: import("vue").ComputedRef<boolean>;
                changeViewTo: (newView: "date" | "time") => void;
                datePickerT: (key: string, ...args: any[]) => any;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter" | "time-picker-select" | "current-view-change" | "update:currentView")[], "select" | "cell-mouse-enter" | "time-picker-select" | "current-view-change" | "update:currentView", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                isRange: {
                    type: BooleanConstructor;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                headerValue: {
                    type: import("vue").PropType<Dayjs>;
                    required: true;
                };
                footerValue: {
                    type: import("vue").PropType<Dayjs>;
                };
                timePickerValue: {
                    type: import("vue").PropType<Dayjs>;
                };
                headerOperations: {
                    type: import("vue").PropType<import("./types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                    default: () => {};
                };
                dayStartOfWeek: {
                    type: import("vue").PropType<import("./types").WeekStart>;
                    default: number;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                disabledTime: {
                    type: import("vue").PropType<import("./types").DisabledTime>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                showTime: {
                    type: BooleanConstructor;
                };
                timePickerProps: {
                    type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
                };
                currentView: {
                    type: import("vue").PropType<"date" | "time">;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
                disabled: {
                    type: BooleanConstructor;
                };
                onHeaderLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>> & Readonly<{
                onSelect?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
                "onCurrent-view-change"?: ((...args: any[]) => any) | undefined;
                "onUpdate:currentView"?: ((...args: any[]) => any) | undefined;
            }>, {
                mode: import("./types").Mode;
                disabled: boolean;
                dayStartOfWeek: import("./types").WeekStart;
                isRange: boolean;
                headerOperations: import("./types").HeaderOperations;
                headerIcons: import("./types").HeaderIcons;
                showTime: boolean;
            }, {}, {
                PanelHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    title: {
                        type: StringConstructor;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("./types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("./types").HeaderIcons>;
                    };
                    onPrev: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onSuperPrev: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onNext: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onSuperNext: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onLabelClick: {
                        type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>, {
                    showPrev: import("vue").ComputedRef<boolean>;
                    showSuperPrev: import("vue").ComputedRef<boolean>;
                    showNext: import("vue").ComputedRef<boolean>;
                    showSuperNext: import("vue").ComputedRef<boolean>;
                    year: import("vue").ComputedRef<string>;
                    month: import("vue").ComputedRef<string>;
                    getIconClassName: (show?: boolean) => (string | {
                        [x: string]: boolean;
                    })[];
                    previousYearLabel: string;
                    previousMonthLabel: string;
                    nextMonthLabel: string;
                    nextYearLabel: string;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "label-click"[], "label-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    title: {
                        type: StringConstructor;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("./types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("./types").HeaderIcons>;
                    };
                    onPrev: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onSuperPrev: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onNext: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onSuperNext: {
                        type: import("vue").PropType<(payload: MouseEvent) => void>;
                    };
                    onLabelClick: {
                        type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>> & Readonly<{
                    "onLabel-click"?: ((...args: any[]) => any) | undefined;
                }>, {
                    mode: import("./types").Mode;
                }, {}, {
                    IconLeft: {
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
                    IconRight: {
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
                    IconDoubleLeft: {
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
                    IconDoubleRight: {
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
                    RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        renderFunc: {
                            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                            required: true;
                        };
                    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        renderFunc: {
                            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                            required: true;
                        };
                    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                PanelBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    rows: {
                        type: import("vue").PropType<import("./types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("./types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("./types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("./types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>, {
                    isWeek: import("vue").ComputedRef<boolean>;
                    getCellClassName: (cellData: import("./types").Cell) => (string | {
                        [x: string]: boolean | undefined;
                    } | undefined)[];
                    isCellDisabled: (cellData: import("./types").Cell) => boolean;
                    isCellSelected: (cellData: import("./types").Cell) => boolean;
                    onCellClick: (cellData: import("./types").Cell) => void;
                    onCellMouseEnter: (cellData: import("./types").Cell) => void;
                    onCellMouseLeave: (cellData: import("./types").Cell) => void;
                    getDateValue: typeof getDateValue;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    rows: {
                        type: import("vue").PropType<import("./types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("./types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("./types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("./types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>> & Readonly<{
                    "onCell-click"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                }>, {
                    rows: import("./types").Cell[][];
                }, {}, {
                    RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        renderFunc: {
                            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                            required: true;
                        };
                    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        renderFunc: {
                            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                            required: true;
                        };
                    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                PanelWeekList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    weekList: {
                        type: import("vue").PropType<number[]>;
                        required: true;
                    };
                }>, {
                    labelList: import("vue").ComputedRef<string[]>;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    weekList: {
                        type: import("vue").PropType<number[]>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                TimePanel: import("vue").DefineComponent<{
                    value?: Dayjs | undefined;
                    defaultValue?: Dayjs | undefined;
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
                    hours: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                    minutes: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                    seconds: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                    ampmList: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                    selectedValue: import("vue").Ref<{
                        clone: () => Dayjs;
                        isValid: () => boolean;
                        year: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        month: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        date: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        day: {
                            (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                            (value: number): Dayjs;
                        };
                        hour: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        minute: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        second: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        millisecond: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        set: (unit: import("dayjs").UnitType, value: number) => Dayjs;
                        get: (unit: import("dayjs").UnitType) => number;
                        add: {
                            (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                            (value: number, unit: import("dayjs").QUnitType): Dayjs;
                        };
                        subtract: {
                            (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                            (value: number, unit: import("dayjs").QUnitType): Dayjs;
                        };
                        startOf: {
                            (unit: import("dayjs").OpUnitType): Dayjs;
                            (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
                        };
                        endOf: {
                            (unit: import("dayjs").OpUnitType): Dayjs;
                            (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
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
                            (preset: string | ILocale, object?: Partial<ILocale>): Dayjs;
                        };
                        isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                        week: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        weekYear: () => number;
                        quarter: {
                            (): number;
                            (quarter: number): Dayjs;
                        };
                    } | undefined, Dayjs | {
                        clone: () => Dayjs;
                        isValid: () => boolean;
                        year: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        month: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        date: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        day: {
                            (): 0 | 1 | 2 | 3 | 4 | 5 | 6;
                            (value: number): Dayjs;
                        };
                        hour: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        minute: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        second: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        millisecond: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        set: (unit: import("dayjs").UnitType, value: number) => Dayjs;
                        get: (unit: import("dayjs").UnitType) => number;
                        add: {
                            (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                            (value: number, unit: import("dayjs").QUnitType): Dayjs;
                        };
                        subtract: {
                            (value: number, unit?: import("dayjs").ManipulateType): Dayjs;
                            (value: number, unit: import("dayjs").QUnitType): Dayjs;
                        };
                        startOf: {
                            (unit: import("dayjs").OpUnitType): Dayjs;
                            (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
                        };
                        endOf: {
                            (unit: import("dayjs").OpUnitType): Dayjs;
                            (unit: import("dayjs").QUnitType | import("dayjs").OpUnitType): Dayjs;
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
                            (preset: string | ILocale, object?: Partial<ILocale>): Dayjs;
                        };
                        isBetween: (a: import("dayjs").ConfigType, b: import("dayjs").ConfigType, c?: import("dayjs").OpUnitType | null, d?: "()" | "[]" | "[)" | "(]") => boolean;
                        week: {
                            (): number;
                            (value: number): Dayjs;
                        };
                        weekYear: () => number;
                        quarter: {
                            (): number;
                            (quarter: number): Dayjs;
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
                    select: (value: Dayjs) => boolean;
                    confirm: (value: Dayjs) => boolean;
                }, string, import("vue").PublicProps, Readonly<{
                    value?: Dayjs | undefined;
                    defaultValue?: Dayjs | undefined;
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
                    onSelect?: ((value: Dayjs) => any) | undefined;
                    onConfirm?: ((value: Dayjs) => any) | undefined;
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
                            type: import("vue").PropType<import("../time-picker/types").TimeList>;
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
                        onItemRef(el: any, item: import("../time-picker/types").TimeListItem): void;
                        onItemClick(item: import("../time-picker/types").TimeListItem): void;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        prefixCls: {
                            type: StringConstructor;
                            required: true;
                        };
                        list: {
                            type: import("vue").PropType<import("../time-picker/types").TimeList>;
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
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                IconCalendar: {
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
                    install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
                };
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MonthPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
            onHeaderLabelClick: {
                type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
            };
            abbreviation: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            prefixCls: import("vue").ComputedRef<string>;
            pickerPrefixCls: string;
            headerTitle: import("vue").ComputedRef<string>;
            rows: import("vue").ComputedRef<{
                label: any;
                value: Dayjs;
            }[][]>;
            isSameTime: import("./types").IsSameTime;
            onCellClick: (cellData: import("./types").Cell) => void;
            onCellMouseEnter: (cellData: import("./types").Cell) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
            onHeaderLabelClick: {
                type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
            };
            abbreviation: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onSelect?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        }>, {
            headerOperations: import("./types").HeaderOperations;
            headerIcons: import("./types").HeaderIcons;
            abbreviation: boolean;
        }, {}, {
            PanelHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>, {
                showPrev: import("vue").ComputedRef<boolean>;
                showSuperPrev: import("vue").ComputedRef<boolean>;
                showNext: import("vue").ComputedRef<boolean>;
                showSuperNext: import("vue").ComputedRef<boolean>;
                year: import("vue").ComputedRef<string>;
                month: import("vue").ComputedRef<string>;
                getIconClassName: (show?: boolean) => (string | {
                    [x: string]: boolean;
                })[];
                previousYearLabel: string;
                previousMonthLabel: string;
                nextMonthLabel: string;
                nextYearLabel: string;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "label-click"[], "label-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>> & Readonly<{
                "onLabel-click"?: ((...args: any[]) => any) | undefined;
            }>, {
                mode: import("./types").Mode;
            }, {}, {
                IconLeft: {
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
                IconRight: {
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
                IconDoubleLeft: {
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
                IconDoubleRight: {
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
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            PanelBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>, {
                isWeek: import("vue").ComputedRef<boolean>;
                getCellClassName: (cellData: import("./types").Cell) => (string | {
                    [x: string]: boolean | undefined;
                } | undefined)[];
                isCellDisabled: (cellData: import("./types").Cell) => boolean;
                isCellSelected: (cellData: import("./types").Cell) => boolean;
                onCellClick: (cellData: import("./types").Cell) => void;
                onCellMouseEnter: (cellData: import("./types").Cell) => void;
                onCellMouseLeave: (cellData: import("./types").Cell) => void;
                getDateValue: typeof getDateValue;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>> & Readonly<{
                "onCell-click"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                rows: import("./types").Cell[][];
            }, {}, {
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        YearPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
        }>, {
            prefixCls: import("vue").ComputedRef<string>;
            pickerPrefixCls: string;
            headerTitle: import("vue").ComputedRef<string>;
            rows: import("vue").ComputedRef<{
                label: number;
                value: Dayjs;
                isPrev: boolean;
                isNext: boolean;
            }[][]>;
            isSameTime: import("./types").IsSameTime;
            onCellClick: (cellData: import("./types").Cell) => void;
            onCellMouseEnter: (cellData: import("./types").Cell) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
        }>> & Readonly<{
            onSelect?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        }>, {
            headerOperations: import("./types").HeaderOperations;
            headerIcons: import("./types").HeaderIcons;
        }, {}, {
            PanelHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>, {
                showPrev: import("vue").ComputedRef<boolean>;
                showSuperPrev: import("vue").ComputedRef<boolean>;
                showNext: import("vue").ComputedRef<boolean>;
                showSuperNext: import("vue").ComputedRef<boolean>;
                year: import("vue").ComputedRef<string>;
                month: import("vue").ComputedRef<string>;
                getIconClassName: (show?: boolean) => (string | {
                    [x: string]: boolean;
                })[];
                previousYearLabel: string;
                previousMonthLabel: string;
                nextMonthLabel: string;
                nextYearLabel: string;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "label-click"[], "label-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>> & Readonly<{
                "onLabel-click"?: ((...args: any[]) => any) | undefined;
            }>, {
                mode: import("./types").Mode;
            }, {}, {
                IconLeft: {
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
                IconRight: {
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
                IconDoubleLeft: {
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
                IconDoubleRight: {
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
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            PanelBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>, {
                isWeek: import("vue").ComputedRef<boolean>;
                getCellClassName: (cellData: import("./types").Cell) => (string | {
                    [x: string]: boolean | undefined;
                } | undefined)[];
                isCellDisabled: (cellData: import("./types").Cell) => boolean;
                isCellSelected: (cellData: import("./types").Cell) => boolean;
                onCellClick: (cellData: import("./types").Cell) => void;
                onCellMouseEnter: (cellData: import("./types").Cell) => void;
                onCellMouseLeave: (cellData: import("./types").Cell) => void;
                getDateValue: typeof getDateValue;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>> & Readonly<{
                "onCell-click"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                rows: import("./types").Cell[][];
            }, {}, {
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        QuarterPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
            onHeaderLabelClick: {
                type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
            };
        }>, {
            prefixCls: import("vue").ComputedRef<string>;
            pickerPrefixCls: string;
            headerTitle: import("vue").ComputedRef<string>;
            rows: import("vue").ComputedRef<import("./types").Cell[][]>;
            isSameTime: import("./types").IsSameTime;
            onCellClick: (cellData: import("./types").Cell) => void;
            onCellMouseEnter: (cellData: import("./types").Cell) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            headerValue: {
                type: import("vue").PropType<Dayjs>;
                required: true;
            };
            headerOperations: {
                type: import("vue").PropType<import("./types").HeaderOperations>;
                default: () => {};
            };
            headerIcons: {
                type: import("vue").PropType<import("./types").HeaderIcons>;
                default: () => {};
            };
            value: {
                type: import("vue").PropType<Dayjs>;
            };
            disabledDate: {
                type: import("vue").PropType<import("./types").DisabledDate>;
            };
            rangeValues: {
                type: import("vue").PropType<Array<Dayjs | undefined>>;
            };
            dateRender: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
            };
            onHeaderLabelClick: {
                type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
            };
        }>> & Readonly<{
            onSelect?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
        }>, {
            headerOperations: import("./types").HeaderOperations;
            headerIcons: import("./types").HeaderIcons;
        }, {}, {
            PanelHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>, {
                showPrev: import("vue").ComputedRef<boolean>;
                showSuperPrev: import("vue").ComputedRef<boolean>;
                showNext: import("vue").ComputedRef<boolean>;
                showSuperNext: import("vue").ComputedRef<boolean>;
                year: import("vue").ComputedRef<string>;
                month: import("vue").ComputedRef<string>;
                getIconClassName: (show?: boolean) => (string | {
                    [x: string]: boolean;
                })[];
                previousYearLabel: string;
                previousMonthLabel: string;
                nextMonthLabel: string;
                nextYearLabel: string;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "label-click"[], "label-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                title: {
                    type: StringConstructor;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                    default: string;
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                icons: {
                    type: import("vue").PropType<import("./types").HeaderIcons>;
                };
                onPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperPrev: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onSuperNext: {
                    type: import("vue").PropType<(payload: MouseEvent) => void>;
                };
                onLabelClick: {
                    type: import("vue").PropType<import("./panels/header.vue").HeaderLabelClickFunc>;
                };
            }>> & Readonly<{
                "onLabel-click"?: ((...args: any[]) => any) | undefined;
            }>, {
                mode: import("./types").Mode;
            }, {}, {
                IconLeft: {
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
                IconRight: {
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
                IconDoubleLeft: {
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
                IconDoubleRight: {
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
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            PanelBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>, {
                isWeek: import("vue").ComputedRef<boolean>;
                getCellClassName: (cellData: import("./types").Cell) => (string | {
                    [x: string]: boolean | undefined;
                } | undefined)[];
                isCellDisabled: (cellData: import("./types").Cell) => boolean;
                isCellSelected: (cellData: import("./types").Cell) => boolean;
                onCellClick: (cellData: import("./types").Cell) => void;
                onCellMouseEnter: (cellData: import("./types").Cell) => void;
                onCellMouseLeave: (cellData: import("./types").Cell) => void;
                getDateValue: typeof getDateValue;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                    required: true;
                };
                rows: {
                    type: import("vue").PropType<import("./types").Cell[][]>;
                    default: () => never[];
                };
                value: {
                    type: import("vue").PropType<Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("./types").DisabledDate>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("./types").IsSameTime>;
                    required: true;
                };
                mode: {
                    type: import("vue").PropType<import("./types").Mode>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>> & Readonly<{
                "onCell-click"?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                rows: import("./types").Cell[][];
            }, {}, {
                RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    renderFunc: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                required: true;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    IconCalendar: {
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
