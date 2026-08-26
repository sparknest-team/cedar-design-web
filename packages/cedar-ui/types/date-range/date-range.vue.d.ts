import type { CalendarValue } from '../date-picker/types';
/**
 * 表单日期范围字段。内部使用 DateRangePicker（带触发器）。
 * 面板能力请直接使用 DateRangePicker（默认无触发器）。
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<CalendarValue[]>;
    };
    defaultValue: {
        type: import("vue").PropType<CalendarValue[]>;
    };
    open: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    clearable: BooleanConstructor;
    disabled: {
        type: import("vue").PropType<boolean | boolean[]>;
    };
    readonly: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        default: string;
        validator: (value: import("../_utils/form-control").FormControlVariant) => boolean;
    };
    separator: StringConstructor;
    placeholder: {
        type: import("vue").PropType<string[]>;
    };
    disabledDate: {
        type: import("vue").PropType<import("../date-picker/types").RangeDisabledDate>;
    };
    type: {
        type: import("vue").PropType<import("../date-picker/types").Mode>;
        default: string;
        validator: (value: import("../date-picker/types").Mode) => boolean;
    };
    format: StringConstructor;
    showTime: BooleanConstructor;
    error: BooleanConstructor;
    dateRangePickerProps: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
}>, {
    pickerProps: import("vue").ComputedRef<Record<string, unknown>>;
    onUpdateModelValue: (value: (CalendarValue | undefined)[] | undefined) => void;
    onUpdateOpen: (visible: boolean) => void;
    onChange: (value: (CalendarValue | undefined)[] | undefined) => void;
    onClear: () => void;
    onOpenChange: (visible: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: CalendarValue[] | undefined) => true;
    'update:open': (visible: boolean) => true;
    change: (value: CalendarValue[] | undefined) => true;
    clear: () => true;
    'open-change': (visible: boolean) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<CalendarValue[]>;
    };
    defaultValue: {
        type: import("vue").PropType<CalendarValue[]>;
    };
    open: {
        type: import("vue").PropType<boolean | undefined>;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    clearable: BooleanConstructor;
    disabled: {
        type: import("vue").PropType<boolean | boolean[]>;
    };
    readonly: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    variant: {
        type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
        default: string;
        validator: (value: import("../_utils/form-control").FormControlVariant) => boolean;
    };
    separator: StringConstructor;
    placeholder: {
        type: import("vue").PropType<string[]>;
    };
    disabledDate: {
        type: import("vue").PropType<import("../date-picker/types").RangeDisabledDate>;
    };
    type: {
        type: import("vue").PropType<import("../date-picker/types").Mode>;
        default: string;
        validator: (value: import("../date-picker/types").Mode) => boolean;
    };
    format: StringConstructor;
    showTime: BooleanConstructor;
    error: BooleanConstructor;
    dateRangePickerProps: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => {};
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onChange?: ((value: CalendarValue[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: CalendarValue[] | undefined) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    "onOpen-change"?: ((visible: boolean) => any) | undefined;
}>, {
    error: boolean;
    readonly: boolean;
    type: import("../date-picker/types").Mode;
    open: boolean | undefined;
    variant: "filled" | "outlined" | "standard";
    clearable: boolean;
    defaultOpen: boolean;
    showTime: boolean;
    dateRangePickerProps: Record<string, unknown>;
}, {}, {
    DateRangePicker: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        mode: {
            type: import("vue").PropType<"date" | "year" | "quarter" | "month" | "week">;
            default: string;
            validator: (value: string) => boolean;
        };
        modelValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        defaultValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        pickerValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        defaultPickerValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        disabled: {
            type: import("vue").PropType<boolean | boolean[]>;
            default: boolean;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<import("../date-picker/types").WeekStart>;
            default: number;
            validator: (value: number) => boolean;
        };
        format: {
            type: StringConstructor;
        };
        valueFormat: {
            type: import("vue").PropType<"timestamp" | "Date" | string>;
        };
        showTime: {
            type: BooleanConstructor;
        };
        timePickerProps: {
            type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
        };
        placeholder: {
            type: import("vue").PropType<string[]>;
        };
        disabledDate: {
            type: import("vue").PropType<(current: Date, type: "start" | "end") => boolean>;
        };
        disabledTime: {
            type: import("vue").PropType<(current: Date, type: "start" | "end") => import("../date-picker/types").DisabledTimeProps>;
        };
        separator: {
            type: StringConstructor;
        };
        exchangeTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        locale: {
            type: import("vue").PropType<Record<string, any>>;
        };
        hideTrigger: {
            type: BooleanConstructor;
            default: boolean;
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
            type: import("vue").PropType<import("..").ShortcutType[]>;
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
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        unmountOnClose: {
            type: BooleanConstructor;
        };
        previewShortcut: {
            type: BooleanConstructor;
            default: boolean;
        };
        showConfirmBtn: {
            type: BooleanConstructor;
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
        computedFormat: import("vue").ComputedRef<string>;
        computedPlaceholder: import("vue").ComputedRef<string[]>;
        panelVisible: import("vue").ComputedRef<boolean>;
        panelValue: import("vue").ComputedRef<(import("dayjs").Dayjs | undefined)[]>;
        inputValue: import("vue").Ref<(string | undefined)[] | undefined, (string | undefined)[] | undefined>;
        focusedIndex: import("vue").Ref<number, number>;
        triggerDisabled: import("vue").ComputedRef<boolean>;
        mergedSize: import("vue").ComputedRef<"xs" | "sm" | "md" | "lg" | "xl" | undefined>;
        mergedError: import("vue").ComputedRef<boolean>;
        onPanelVisibleChange: (visible: boolean) => void;
        onInputClear: (e: Event) => void;
        onInputChange: (e: any) => void;
        onInputPressEnter: () => void;
        rangePanelProps: import("vue").ComputedRef<{
            prefixCls: string;
            format: string;
            value: (import("dayjs").Dayjs | undefined)[];
            showConfirmBtn: boolean;
            confirmBtnDisabled: boolean | undefined;
            timePickerValue: import("dayjs").Dayjs[];
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
            startHeaderProps: {
                headerValue: import("dayjs").Dayjs;
                headerOperations: Pick<any, string>;
                headerIcons: {
                    prev: import("vue").Slot<any> | undefined;
                    prevDouble: import("vue").Slot<any> | undefined;
                    next: import("vue").Slot<any> | undefined;
                    nextDouble: import("vue").Slot<any> | undefined;
                };
            };
            endHeaderProps: {
                headerValue: import("dayjs").Dayjs;
                headerOperations: Pick<any, string>;
                headerIcons: {
                    prev: import("vue").Slot<any> | undefined;
                    prevDouble: import("vue").Slot<any> | undefined;
                    next: import("vue").Slot<any> | undefined;
                    nextDouble: import("vue").Slot<any> | undefined;
                };
            };
            footerValue: {
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
            }[];
            disabled: boolean[];
            visible: boolean;
            onCellClick: (date: import("dayjs").Dayjs) => void;
            onCellMouseEnter: (date: import("dayjs").Dayjs) => void;
            onShortcutClick: (value: Array<import("dayjs").Dayjs | undefined>, shortcut: import("..").ShortcutType) => void;
            onShortcutMouseEnter: ((value: Array<import("dayjs").Dayjs | undefined>) => void) | undefined;
            onShortcutMouseLeave: (() => void) | undefined;
            onConfirm: () => void;
            onTimePickerSelect: (time: import("dayjs").Dayjs, type: "start" | "end") => void;
            startHeaderMode: "month" | "year" | undefined;
            endHeaderMode: "month" | "year" | undefined;
            onStartHeaderLabelClick: (type: "year" | "month") => void;
            onEndHeaderLabelClick: (type: "year" | "month") => void;
            onStartHeaderSelect: (date: import("dayjs").Dayjs) => void;
            onEndHeaderSelect: (date: import("dayjs").Dayjs) => void;
            mode: "month" | "week" | "date" | "year" | "quarter";
            dayStartOfWeek: import("../date-picker/types").WeekStart;
            hideTrigger: boolean;
            shortcuts: import("..").ShortcutType[];
            disabledDate: ((current: Date, type: "start" | "end") => boolean) | undefined;
            disabledTime: ((current: Date, type: "start" | "end") => import("../date-picker/types").DisabledTimeProps) | undefined;
            showTime: boolean;
            abbreviation: boolean;
            shortcutsPosition: "bottom" | "left" | "right";
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: (CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => true;
        'update:modelValue': (value: (CalendarValue | undefined)[] | undefined) => true;
        select: (value: (CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[]) => true;
        'open-change': (visible: boolean) => true;
        'update:open': (visible: boolean) => true;
        ok: (value: (CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => true;
        clear: () => true;
        'select-shortcut': (shortcut: import("..").ShortcutType) => true;
        'picker-value-change': (value: CalendarValue[], date: Date[], dateString: string[]) => true;
        'update:pickerValue': (value: CalendarValue[]) => true;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        mode: {
            type: import("vue").PropType<"date" | "year" | "quarter" | "month" | "week">;
            default: string;
            validator: (value: string) => boolean;
        };
        modelValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        defaultValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        pickerValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        defaultPickerValue: {
            type: import("vue").PropType<(Date | string | number)[]>;
        };
        disabled: {
            type: import("vue").PropType<boolean | boolean[]>;
            default: boolean;
        };
        dayStartOfWeek: {
            type: import("vue").PropType<import("../date-picker/types").WeekStart>;
            default: number;
            validator: (value: number) => boolean;
        };
        format: {
            type: StringConstructor;
        };
        valueFormat: {
            type: import("vue").PropType<"timestamp" | "Date" | string>;
        };
        showTime: {
            type: BooleanConstructor;
        };
        timePickerProps: {
            type: import("vue").PropType<Partial<import("../time-picker/types").TimePickerProps>>;
        };
        placeholder: {
            type: import("vue").PropType<string[]>;
        };
        disabledDate: {
            type: import("vue").PropType<(current: Date, type: "start" | "end") => boolean>;
        };
        disabledTime: {
            type: import("vue").PropType<(current: Date, type: "start" | "end") => import("../date-picker/types").DisabledTimeProps>;
        };
        separator: {
            type: StringConstructor;
        };
        exchangeTime: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        locale: {
            type: import("vue").PropType<Record<string, any>>;
        };
        hideTrigger: {
            type: BooleanConstructor;
            default: boolean;
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
            type: import("vue").PropType<import("..").ShortcutType[]>;
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
        };
        triggerProps: {
            type: import("vue").PropType<import("..").TriggerProps>;
        };
        unmountOnClose: {
            type: BooleanConstructor;
        };
        previewShortcut: {
            type: BooleanConstructor;
            default: boolean;
        };
        showConfirmBtn: {
            type: BooleanConstructor;
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
        onChange?: ((value: (CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        onSelect?: ((value: (CalendarValue | undefined)[], date: (Date | undefined)[], dateString: (string | undefined)[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: (CalendarValue | undefined)[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        "onOpen-change"?: ((visible: boolean) => any) | undefined;
        onOk?: ((value: (CalendarValue | undefined)[] | undefined, date: (Date | undefined)[] | undefined, dateString: (string | undefined)[] | undefined) => any) | undefined;
        "onSelect-shortcut"?: ((shortcut: import("..").ShortcutType) => any) | undefined;
        "onPicker-value-change"?: ((value: CalendarValue[], date: Date[], dateString: string[]) => any) | undefined;
        "onUpdate:pickerValue"?: ((value: CalendarValue[]) => any) | undefined;
    }>, {
        error: boolean;
        readonly: boolean;
        exchangeTime: boolean;
        mode: "month" | "week" | "date" | "year" | "quarter";
        disabled: boolean | boolean[];
        open: boolean;
        variant: "filled" | "outlined" | "standard";
        clearable: boolean;
        defaultOpen: boolean;
        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br";
        unmountOnClose: boolean;
        dayStartOfWeek: import("../date-picker/types").WeekStart;
        disabledInput: boolean;
        hideTrigger: boolean;
        shortcuts: import("..").ShortcutType[];
        showTime: boolean;
        abbreviation: boolean;
        showConfirmBtn: boolean;
        shortcutsPosition: "bottom" | "left" | "right";
        previewShortcut: boolean;
    }, {}, {
        RangePickerPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            mode: {
                type: import("vue").PropType<import("../date-picker/types").Mode>;
                default: string;
            };
            value: {
                type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                default: () => never[];
            };
            footerValue: {
                type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
            };
            timePickerValue: {
                type: import("vue").PropType<import("dayjs").Dayjs[]>;
            };
            showTime: {
                type: BooleanConstructor;
            };
            showConfirmBtn: {
                type: BooleanConstructor;
            };
            prefixCls: {
                type: StringConstructor;
                required: true;
            };
            shortcuts: {
                type: import("vue").PropType<import("..").ShortcutType[]>;
                default: () => never[];
            };
            shortcutsPosition: {
                type: import("vue").PropType<import("../date-picker/types").DateRangePickerProps["shortcutsPosition"]>;
                default: string;
            };
            format: {
                type: StringConstructor;
                required: true;
            };
            dayStartOfWeek: {
                type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                default: number;
            };
            disabledDate: {
                type: import("vue").PropType<import("../date-picker/types").RangeDisabledDate>;
            };
            disabledTime: {
                type: import("vue").PropType<import("../date-picker/types").RangeDisabledTime>;
            };
            timePickerProps: {
                type: import("vue").PropType<import("../date-picker/types").DateRangePickerProps["timePickerProps"]>;
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
            startHeaderProps: {
                type: import("vue").PropType<import("../date-picker/types").StartHeaderProps>;
                default: () => {};
            };
            endHeaderProps: {
                type: import("vue").PropType<import("../date-picker/types").StartHeaderProps>;
                default: () => {};
            };
            confirmBtnDisabled: {
                type: BooleanConstructor;
            };
            disabled: {
                type: import("vue").PropType<boolean[]>;
                default: () => boolean[];
            };
            visible: {
                type: BooleanConstructor;
            };
            startHeaderMode: {
                type: import("vue").PropType<"year" | "month">;
            };
            endHeaderMode: {
                type: import("vue").PropType<"year" | "month">;
            };
            abbreviation: {
                type: BooleanConstructor;
            };
        }>, {
            pick: typeof import("../_utils/pick").default;
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean | 0;
            })[]>;
            showShortcuts: import("vue").ComputedRef<number | false>;
            shortcutsProps: {
                prefixCls: string;
                shortcuts: import("..").ShortcutType[];
                onItemClick: (shortcut: import("..").ShortcutType) => void;
                onItemMouseEnter: (shortcut: import("..").ShortcutType) => void;
                onItemMouseLeave: (shortcut: import("..").ShortcutType) => void;
            };
            startPanelProps: import("vue").ComputedRef<{
                rangeValues: (import("dayjs").Dayjs | undefined)[];
                disabledDate: ((current: Date) => boolean) | undefined;
                dateRender: import("../_components/render-function").RenderFunc | undefined;
                onSelect: (date: import("dayjs").Dayjs) => void;
                onCellMouseEnter: (date: import("dayjs").Dayjs) => void;
                onHeaderLabelClick: (type: "year" | "month") => void;
                headerValue: import("dayjs").Dayjs;
                headerOperations: Pick<any, string>;
                headerIcons: {
                    prev: import("vue").Slot | undefined;
                    prevDouble: import("vue").Slot | undefined;
                    next: import("vue").Slot | undefined;
                    nextDouble: import("vue").Slot | undefined;
                };
            }>;
            endPanelProps: import("vue").ComputedRef<{
                rangeValues: (import("dayjs").Dayjs | undefined)[];
                disabledDate: ((current: Date) => boolean) | undefined;
                dateRender: import("../_components/render-function").RenderFunc | undefined;
                onSelect: (date: import("dayjs").Dayjs) => void;
                onCellMouseEnter: (date: import("dayjs").Dayjs) => void;
                onHeaderLabelClick: (type: "year" | "month") => void;
                headerValue: import("dayjs").Dayjs;
                headerOperations: Pick<any, string>;
                headerIcons: {
                    prev: import("vue").Slot | undefined;
                    prevDouble: import("vue").Slot | undefined;
                    next: import("vue").Slot | undefined;
                    nextDouble: import("vue").Slot | undefined;
                };
            }>;
            getDisabledTimeFunc: (index: 0 | 1) => ((current: Date) => import("../date-picker/types").DisabledTimeProps) | undefined;
            onConfirmBtnClick: () => void;
            currentDateView: import("vue").Ref<"time" | "date", "time" | "date">;
            onStartTimePickerSelect: (time: import("dayjs").Dayjs) => void;
            onEndTimePickerSelect: (time: import("dayjs").Dayjs) => void;
            onStartHeaderPanelSelect: (date: import("dayjs").Dayjs) => void;
            onEndHeaderPanelSelect: (date: import("dayjs").Dayjs) => void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter" | "confirm" | "time-picker-select" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "start-header-label-click" | "end-header-label-click" | "start-header-select" | "end-header-select")[], "cell-click" | "cell-mouse-enter" | "confirm" | "time-picker-select" | "shortcut-click" | "shortcut-mouse-enter" | "shortcut-mouse-leave" | "start-header-label-click" | "end-header-label-click" | "start-header-select" | "end-header-select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            mode: {
                type: import("vue").PropType<import("../date-picker/types").Mode>;
                default: string;
            };
            value: {
                type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                default: () => never[];
            };
            footerValue: {
                type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
            };
            timePickerValue: {
                type: import("vue").PropType<import("dayjs").Dayjs[]>;
            };
            showTime: {
                type: BooleanConstructor;
            };
            showConfirmBtn: {
                type: BooleanConstructor;
            };
            prefixCls: {
                type: StringConstructor;
                required: true;
            };
            shortcuts: {
                type: import("vue").PropType<import("..").ShortcutType[]>;
                default: () => never[];
            };
            shortcutsPosition: {
                type: import("vue").PropType<import("../date-picker/types").DateRangePickerProps["shortcutsPosition"]>;
                default: string;
            };
            format: {
                type: StringConstructor;
                required: true;
            };
            dayStartOfWeek: {
                type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                default: number;
            };
            disabledDate: {
                type: import("vue").PropType<import("../date-picker/types").RangeDisabledDate>;
            };
            disabledTime: {
                type: import("vue").PropType<import("../date-picker/types").RangeDisabledTime>;
            };
            timePickerProps: {
                type: import("vue").PropType<import("../date-picker/types").DateRangePickerProps["timePickerProps"]>;
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
            startHeaderProps: {
                type: import("vue").PropType<import("../date-picker/types").StartHeaderProps>;
                default: () => {};
            };
            endHeaderProps: {
                type: import("vue").PropType<import("../date-picker/types").StartHeaderProps>;
                default: () => {};
            };
            confirmBtnDisabled: {
                type: BooleanConstructor;
            };
            disabled: {
                type: import("vue").PropType<boolean[]>;
                default: () => boolean[];
            };
            visible: {
                type: BooleanConstructor;
            };
            startHeaderMode: {
                type: import("vue").PropType<"year" | "month">;
            };
            endHeaderMode: {
                type: import("vue").PropType<"year" | "month">;
            };
            abbreviation: {
                type: BooleanConstructor;
            };
        }>> & Readonly<{
            "onCell-click"?: ((...args: any[]) => any) | undefined;
            "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            onConfirm?: ((...args: any[]) => any) | undefined;
            "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
            "onShortcut-click"?: ((...args: any[]) => any) | undefined;
            "onShortcut-mouse-enter"?: ((...args: any[]) => any) | undefined;
            "onShortcut-mouse-leave"?: ((...args: any[]) => any) | undefined;
            "onStart-header-label-click"?: ((...args: any[]) => any) | undefined;
            "onEnd-header-label-click"?: ((...args: any[]) => any) | undefined;
            "onStart-header-select"?: ((...args: any[]) => any) | undefined;
            "onEnd-header-select"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: (import("dayjs").Dayjs | undefined)[];
            mode: import("../date-picker/types").Mode;
            disabled: boolean[];
            visible: boolean;
            dayStartOfWeek: import("../date-picker/types").WeekStart;
            hideTrigger: boolean;
            shortcuts: import("..").ShortcutType[];
            confirmBtnDisabled: boolean;
            showTime: boolean;
            abbreviation: boolean;
            showConfirmBtn: boolean;
            shortcutsPosition: "bottom" | "left" | "right";
            startHeaderProps: import("../date-picker/types").StartHeaderProps;
            endHeaderProps: import("../date-picker/types").StartHeaderProps;
        }, {}, {
            PanelShortcuts: import("vue").DefineComponent<{
                prefixCls: string;
                shortcuts: import("..").ShortcutType[];
            }, {
                datePickerT: (key: string, ...args: any[]) => any;
                onItemClick: (item: import("..").ShortcutType) => void;
                onItemMouseEnter: (item: import("..").ShortcutType) => void;
                onItemMouseLeave: (item: import("..").ShortcutType) => void;
                onNowClick: () => void;
                isFunction: typeof import("../_utils/is").isFunction;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("item-click" | "item-mouse-enter" | "item-mouse-leave" | "now-click")[], "item-click" | "item-mouse-enter" | "item-mouse-leave" | "now-click", import("vue").PublicProps, Readonly<{
                prefixCls: string;
                shortcuts: import("..").ShortcutType[];
            }> & Readonly<{
                "onItem-click"?: ((...args: any[]) => any) | undefined;
                "onItem-mouse-enter"?: ((...args: any[]) => any) | undefined;
                "onItem-mouse-leave"?: ((...args: any[]) => any) | undefined;
                "onNow-click"?: ((...args: any[]) => any) | undefined;
            }>, {
                shortcuts: import("..").ShortcutType[];
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
            DatePanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                isRange: {
                    type: BooleanConstructor;
                };
                value: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                };
                headerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                footerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                timePickerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                dayStartOfWeek: {
                    type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                    default: number;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                disabledTime: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledTime>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                };
                mode: {
                    type: import("vue").PropType<import("../date-picker/types").Mode>;
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
                    type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                };
            }>, {
                prefixCls: import("vue").ComputedRef<string>;
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                pickerPrefixCls: string;
                headerTitle: import("vue").ComputedRef<string>;
                rows: import("vue").ComputedRef<import("../date-picker/types").Cell[][]>;
                weekList: import("vue").ComputedRef<number[]>;
                mergedIsSameTime: import("vue").ComputedRef<import("../date-picker/types").IsSameTime>;
                disabledTimeProps: import("vue").ComputedRef<import("../date-picker/types").DisabledTimeProps>;
                onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
                onTimePanelSelect: (time: import("dayjs").Dayjs) => void;
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
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                };
                headerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                footerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                timePickerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                dayStartOfWeek: {
                    type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                    default: number;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                disabledTime: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledTime>;
                };
                isSameTime: {
                    type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                };
                mode: {
                    type: import("vue").PropType<import("../date-picker/types").Mode>;
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
                    type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                };
            }>> & Readonly<{
                onSelect?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
                "onCurrent-view-change"?: ((...args: any[]) => any) | undefined;
                "onUpdate:currentView"?: ((...args: any[]) => any) | undefined;
            }>, {
                mode: import("../date-picker/types").Mode;
                disabled: boolean;
                dayStartOfWeek: import("../date-picker/types").WeekStart;
                isRange: boolean;
                headerOperations: import("../date-picker/types").HeaderOperations;
                headerIcons: import("../date-picker/types").HeaderIcons;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>> & Readonly<{
                    "onLabel-click"?: ((...args: any[]) => any) | undefined;
                }>, {
                    mode: import("../date-picker/types").Mode;
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
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>, {
                    isWeek: import("vue").ComputedRef<boolean>;
                    getCellClassName: (cellData: import("../date-picker/types").Cell) => (string | {
                        [x: string]: boolean | undefined;
                    } | undefined)[];
                    isCellDisabled: (cellData: import("../date-picker/types").Cell) => boolean;
                    isCellSelected: (cellData: import("../date-picker/types").Cell) => boolean;
                    onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseLeave: (cellData: import("../date-picker/types").Cell) => void;
                    getDateValue: typeof import("../_utils/date").getDateValue;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    rows: {
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>> & Readonly<{
                    "onCell-click"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                }>, {
                    rows: import("../date-picker/types").Cell[][];
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
                    hours: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                    minutes: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                    seconds: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                    ampmList: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
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
            WeekPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                dayStartOfWeek: {
                    type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                    default: number;
                };
            }>, {
                isSameTime: import("../date-picker/types").IsSameTime;
                onSelect: (value: import("dayjs").Dayjs) => void;
                onCellMouseEnter: (value: import("dayjs").Dayjs) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                dayStartOfWeek: {
                    type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                    default: number;
                };
            }>> & Readonly<{
                onSelect?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                dayStartOfWeek: import("../date-picker/types").WeekStart;
            }, {}, {
                DatePanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    isRange: {
                        type: BooleanConstructor;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    headerValue: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                        required: true;
                    };
                    footerValue: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    timePickerValue: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    headerOperations: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                        default: () => {};
                    };
                    headerIcons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                        default: () => {};
                    };
                    dayStartOfWeek: {
                        type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                        default: number;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    disabledTime: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledTime>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>, {
                    prefixCls: import("vue").ComputedRef<string>;
                    classNames: import("vue").ComputedRef<(string | {
                        [x: string]: boolean;
                    })[]>;
                    pickerPrefixCls: string;
                    headerTitle: import("vue").ComputedRef<string>;
                    rows: import("vue").ComputedRef<import("../date-picker/types").Cell[][]>;
                    weekList: import("vue").ComputedRef<number[]>;
                    mergedIsSameTime: import("vue").ComputedRef<import("../date-picker/types").IsSameTime>;
                    disabledTimeProps: import("vue").ComputedRef<import("../date-picker/types").DisabledTimeProps>;
                    onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
                    onTimePanelSelect: (time: import("dayjs").Dayjs) => void;
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
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    headerValue: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                        required: true;
                    };
                    footerValue: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    timePickerValue: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    headerOperations: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                        default: () => {};
                    };
                    headerIcons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                        default: () => {};
                    };
                    dayStartOfWeek: {
                        type: import("vue").PropType<import("../date-picker/types").WeekStart>;
                        default: number;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    disabledTime: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledTime>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>> & Readonly<{
                    onSelect?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                    "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
                    "onCurrent-view-change"?: ((...args: any[]) => any) | undefined;
                    "onUpdate:currentView"?: ((...args: any[]) => any) | undefined;
                }>, {
                    mode: import("../date-picker/types").Mode;
                    disabled: boolean;
                    dayStartOfWeek: import("../date-picker/types").WeekStart;
                    isRange: boolean;
                    headerOperations: import("../date-picker/types").HeaderOperations;
                    headerIcons: import("../date-picker/types").HeaderIcons;
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
                            type: import("vue").PropType<import("../date-picker/types").Mode>;
                            default: string;
                        };
                        value: {
                            type: import("vue").PropType<import("dayjs").Dayjs>;
                        };
                        icons: {
                            type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                            type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
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
                            type: import("vue").PropType<import("../date-picker/types").Mode>;
                            default: string;
                        };
                        value: {
                            type: import("vue").PropType<import("dayjs").Dayjs>;
                        };
                        icons: {
                            type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                            type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                        };
                    }>> & Readonly<{
                        "onLabel-click"?: ((...args: any[]) => any) | undefined;
                    }>, {
                        mode: import("../date-picker/types").Mode;
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
                            type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                            default: () => never[];
                        };
                        value: {
                            type: import("vue").PropType<import("dayjs").Dayjs>;
                        };
                        disabledDate: {
                            type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                        };
                        isSameTime: {
                            type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                            required: true;
                        };
                        mode: {
                            type: import("vue").PropType<import("../date-picker/types").Mode>;
                        };
                        rangeValues: {
                            type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                        };
                        dateRender: {
                            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        };
                    }>, {
                        isWeek: import("vue").ComputedRef<boolean>;
                        getCellClassName: (cellData: import("../date-picker/types").Cell) => (string | {
                            [x: string]: boolean | undefined;
                        } | undefined)[];
                        isCellDisabled: (cellData: import("../date-picker/types").Cell) => boolean;
                        isCellSelected: (cellData: import("../date-picker/types").Cell) => boolean;
                        onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                        onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
                        onCellMouseLeave: (cellData: import("../date-picker/types").Cell) => void;
                        getDateValue: typeof import("../_utils/date").getDateValue;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        prefixCls: {
                            type: StringConstructor;
                            required: true;
                        };
                        rows: {
                            type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                            default: () => never[];
                        };
                        value: {
                            type: import("vue").PropType<import("dayjs").Dayjs>;
                        };
                        disabledDate: {
                            type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                        };
                        isSameTime: {
                            type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                            required: true;
                        };
                        mode: {
                            type: import("vue").PropType<import("../date-picker/types").Mode>;
                        };
                        rangeValues: {
                            type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                        };
                        dateRender: {
                            type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                        };
                    }>> & Readonly<{
                        "onCell-click"?: ((...args: any[]) => any) | undefined;
                        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                    }>, {
                        rows: import("../date-picker/types").Cell[][];
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
                        hours: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                        minutes: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                        seconds: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
                        ampmList: import("vue").ComputedRef<import("../time-picker/types").TimeList>;
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
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                value: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
                onHeaderLabelClick: {
                    type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
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
                    value: import("dayjs").Dayjs;
                }[][]>;
                isSameTime: import("../date-picker/types").IsSameTime;
                onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                headerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                value: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
                onHeaderLabelClick: {
                    type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                };
                abbreviation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onSelect?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                headerOperations: import("../date-picker/types").HeaderOperations;
                headerIcons: import("../date-picker/types").HeaderIcons;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>> & Readonly<{
                    "onLabel-click"?: ((...args: any[]) => any) | undefined;
                }>, {
                    mode: import("../date-picker/types").Mode;
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
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>, {
                    isWeek: import("vue").ComputedRef<boolean>;
                    getCellClassName: (cellData: import("../date-picker/types").Cell) => (string | {
                        [x: string]: boolean | undefined;
                    } | undefined)[];
                    isCellDisabled: (cellData: import("../date-picker/types").Cell) => boolean;
                    isCellSelected: (cellData: import("../date-picker/types").Cell) => boolean;
                    onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseLeave: (cellData: import("../date-picker/types").Cell) => void;
                    getDateValue: typeof import("../_utils/date").getDateValue;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    rows: {
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>> & Readonly<{
                    "onCell-click"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                }>, {
                    rows: import("../date-picker/types").Cell[][];
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
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                value: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
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
                    value: import("dayjs").Dayjs;
                    isPrev: boolean;
                    isNext: boolean;
                }[][]>;
                isSameTime: import("../date-picker/types").IsSameTime;
                onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                headerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                value: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
            }>> & Readonly<{
                onSelect?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                headerOperations: import("../date-picker/types").HeaderOperations;
                headerIcons: import("../date-picker/types").HeaderIcons;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>> & Readonly<{
                    "onLabel-click"?: ((...args: any[]) => any) | undefined;
                }>, {
                    mode: import("../date-picker/types").Mode;
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
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>, {
                    isWeek: import("vue").ComputedRef<boolean>;
                    getCellClassName: (cellData: import("../date-picker/types").Cell) => (string | {
                        [x: string]: boolean | undefined;
                    } | undefined)[];
                    isCellDisabled: (cellData: import("../date-picker/types").Cell) => boolean;
                    isCellSelected: (cellData: import("../date-picker/types").Cell) => boolean;
                    onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseLeave: (cellData: import("../date-picker/types").Cell) => void;
                    getDateValue: typeof import("../_utils/date").getDateValue;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    rows: {
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>> & Readonly<{
                    "onCell-click"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                }>, {
                    rows: import("../date-picker/types").Cell[][];
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
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                value: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
                onHeaderLabelClick: {
                    type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                };
            }>, {
                prefixCls: import("vue").ComputedRef<string>;
                pickerPrefixCls: string;
                headerTitle: import("vue").ComputedRef<string>;
                rows: import("vue").ComputedRef<import("../date-picker/types").Cell[][]>;
                isSameTime: import("../date-picker/types").IsSameTime;
                onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                headerValue: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                    required: true;
                };
                headerOperations: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderOperations>;
                    default: () => {};
                };
                headerIcons: {
                    type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
                    default: () => {};
                };
                value: {
                    type: import("vue").PropType<import("dayjs").Dayjs>;
                };
                disabledDate: {
                    type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                };
                rangeValues: {
                    type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                };
                dateRender: {
                    type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                };
                onHeaderLabelClick: {
                    type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                };
            }>> & Readonly<{
                onSelect?: ((...args: any[]) => any) | undefined;
                "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
            }>, {
                headerOperations: import("../date-picker/types").HeaderOperations;
                headerIcons: import("../date-picker/types").HeaderIcons;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
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
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                        default: string;
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    icons: {
                        type: import("vue").PropType<import("../date-picker/types").HeaderIcons>;
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
                        type: import("vue").PropType<import("../date-picker/panels/header.vue").HeaderLabelClickFunc>;
                    };
                }>> & Readonly<{
                    "onLabel-click"?: ((...args: any[]) => any) | undefined;
                }>, {
                    mode: import("../date-picker/types").Mode;
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
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>, {
                    isWeek: import("vue").ComputedRef<boolean>;
                    getCellClassName: (cellData: import("../date-picker/types").Cell) => (string | {
                        [x: string]: boolean | undefined;
                    } | undefined)[];
                    isCellDisabled: (cellData: import("../date-picker/types").Cell) => boolean;
                    isCellSelected: (cellData: import("../date-picker/types").Cell) => boolean;
                    onCellClick: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseEnter: (cellData: import("../date-picker/types").Cell) => void;
                    onCellMouseLeave: (cellData: import("../date-picker/types").Cell) => void;
                    getDateValue: typeof import("../_utils/date").getDateValue;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                        required: true;
                    };
                    rows: {
                        type: import("vue").PropType<import("../date-picker/types").Cell[][]>;
                        default: () => never[];
                    };
                    value: {
                        type: import("vue").PropType<import("dayjs").Dayjs>;
                    };
                    disabledDate: {
                        type: import("vue").PropType<import("../date-picker/types").DisabledDate>;
                    };
                    isSameTime: {
                        type: import("vue").PropType<import("../date-picker/types").IsSameTime>;
                        required: true;
                    };
                    mode: {
                        type: import("vue").PropType<import("../date-picker/types").Mode>;
                    };
                    rangeValues: {
                        type: import("vue").PropType<Array<import("dayjs").Dayjs | undefined>>;
                    };
                    dateRender: {
                        type: import("vue").PropType<import("../_components/render-function").RenderFunc>;
                    };
                }>> & Readonly<{
                    "onCell-click"?: ((...args: any[]) => any) | undefined;
                    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
                }>, {
                    rows: import("../date-picker/types").Cell[][];
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        DateRangeInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<import("../_utils/form-control").FormControlVariant>;
                default: string;
                validator: (value: unknown) => value is import("../_utils/form-control").FormControlVariant;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
