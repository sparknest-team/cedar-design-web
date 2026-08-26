import type { Dayjs } from 'dayjs';
import { PropType } from 'vue';
import type { RangePanelProps } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<RangePanelProps["value"]>;
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
        type: PropType<RangePanelProps["step"]>;
    };
    disabledHours: {
        type: PropType<RangePanelProps["disabledHours"]>;
    };
    disabledMinutes: {
        type: PropType<RangePanelProps["disabledMinutes"]>;
    };
    disabledSeconds: {
        type: PropType<RangePanelProps["disabledSeconds"]>;
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
    onSelect: (index: number, selectedValue: Dayjs) => void;
    onConfirm: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "confirm" | "update:displayIndex" | "display-index-change")[], "select" | "confirm" | "update:displayIndex" | "display-index-change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<RangePanelProps["value"]>;
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
        type: PropType<RangePanelProps["step"]>;
    };
    disabledHours: {
        type: PropType<RangePanelProps["disabledHours"]>;
    };
    disabledMinutes: {
        type: PropType<RangePanelProps["disabledMinutes"]>;
    };
    disabledSeconds: {
        type: PropType<RangePanelProps["disabledSeconds"]>;
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
        hours: import("vue").ComputedRef<import("./types").TimeList>;
        minutes: import("vue").ComputedRef<import("./types").TimeList>;
        seconds: import("vue").ComputedRef<import("./types").TimeList>;
        ampmList: import("vue").ComputedRef<import("./types").TimeList>;
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
                type: PropType<import("./types").TimeList>;
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
            onItemRef(el: any, item: import("./types").TimeListItem): void;
            onItemClick(item: import("./types").TimeListItem): void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
                required: true;
            };
            list: {
                type: PropType<import("./types").TimeList>;
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
                    type: PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
                };
                round: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                htmlType: {
                    type: PropType<"button" | "submit" | "reset">;
                    default: string;
                    validator: (value: unknown) => boolean;
                };
                component: {
                    type: PropType<"button" | "a">;
                    default: string;
                    validator: (value: unknown) => boolean;
                };
                block: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loadingType: {
                    type: PropType<"default" | "fill" | "line">;
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
                    type: PropType<boolean | number>;
                    default: boolean;
                };
                stacked: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                onClick: {
                    type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
                    default: any;
                };
                onTouchstart: {
                    type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
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
                    type: PropType<import("..").SemanticStatus>;
                    validator: (value: unknown) => value is import("..").SemanticStatus;
                };
                variant: {
                    type: PropType<import("../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../button").ButtonVariant;
                };
                round: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                htmlType: {
                    type: PropType<"button" | "submit" | "reset">;
                    default: string;
                    validator: (value: unknown) => boolean;
                };
                component: {
                    type: PropType<"button" | "a">;
                    default: string;
                    validator: (value: unknown) => boolean;
                };
                block: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    type: PropType<import("..").ComponentSize>;
                    validator: (value: unknown) => value is import("..").ComponentSize;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loadingType: {
                    type: PropType<"default" | "fill" | "line">;
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
                    type: PropType<boolean | number>;
                    default: boolean;
                };
                stacked: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                onClick: {
                    type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
                    default: any;
                };
                onTouchstart: {
                    type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
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
                type: PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            variant: {
                type: PropType<import("../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../button").ButtonVariant;
            };
            round: {
                type: BooleanConstructor;
                default: boolean;
            };
            htmlType: {
                type: PropType<"button" | "submit" | "reset">;
                default: string;
                validator: (value: unknown) => boolean;
            };
            component: {
                type: PropType<"button" | "a">;
                default: string;
                validator: (value: unknown) => boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            loadingType: {
                type: PropType<"default" | "fill" | "line">;
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
                type: PropType<boolean | number>;
                default: boolean;
            };
            stacked: {
                type: BooleanConstructor;
                default: undefined;
            };
            onClick: {
                type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
                default: any;
            };
            onTouchstart: {
                type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
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
                        type: PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: PropType<import("..").SemanticStatus>;
                        default: string;
                    };
                    variant: {
                        type: PropType<import("../button").ButtonVariant>;
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
                        type: PropType<boolean | number>;
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
                        type: PropType<import("..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: PropType<import("..").SemanticStatus>;
                        default: string;
                    };
                    variant: {
                        type: PropType<import("../button").ButtonVariant>;
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
                        type: PropType<boolean | number>;
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
                    type: PropType<import("..").ComponentSize>;
                    default: string;
                };
                status: {
                    type: PropType<import("..").SemanticStatus>;
                    default: string;
                };
                variant: {
                    type: PropType<import("../button").ButtonVariant>;
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
                    type: PropType<boolean | number>;
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
    Button: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            status: {
                type: PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            variant: {
                type: PropType<import("../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../button").ButtonVariant;
            };
            round: {
                type: BooleanConstructor;
                default: boolean;
            };
            htmlType: {
                type: PropType<"button" | "submit" | "reset">;
                default: string;
                validator: (value: unknown) => boolean;
            };
            component: {
                type: PropType<"button" | "a">;
                default: string;
                validator: (value: unknown) => boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            loadingType: {
                type: PropType<"default" | "fill" | "line">;
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
                type: PropType<boolean | number>;
                default: boolean;
            };
            stacked: {
                type: BooleanConstructor;
                default: undefined;
            };
            onClick: {
                type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
                default: any;
            };
            onTouchstart: {
                type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
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
                type: PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            variant: {
                type: PropType<import("../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../button").ButtonVariant;
            };
            round: {
                type: BooleanConstructor;
                default: boolean;
            };
            htmlType: {
                type: PropType<"button" | "submit" | "reset">;
                default: string;
                validator: (value: unknown) => boolean;
            };
            component: {
                type: PropType<"button" | "a">;
                default: string;
                validator: (value: unknown) => boolean;
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
                validator: (value: unknown) => value is import("..").ComponentSize;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            loadingType: {
                type: PropType<"default" | "fill" | "line">;
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
                type: PropType<boolean | number>;
                default: boolean;
            };
            stacked: {
                type: BooleanConstructor;
                default: undefined;
            };
            onClick: {
                type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
                default: any;
            };
            onTouchstart: {
                type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
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
            type: PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        variant: {
            type: PropType<import("../button").ButtonVariant>;
            validator: (value: unknown) => value is import("../button").ButtonVariant;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        htmlType: {
            type: PropType<"button" | "submit" | "reset">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        component: {
            type: PropType<"button" | "a">;
            default: string;
            validator: (value: unknown) => boolean;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: PropType<import("..").ComponentSize>;
            validator: (value: unknown) => value is import("..").ComponentSize;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingType: {
            type: PropType<"default" | "fill" | "line">;
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
            type: PropType<boolean | number>;
            default: boolean;
        };
        stacked: {
            type: BooleanConstructor;
            default: undefined;
        };
        onClick: {
            type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
            default: any;
        };
        onTouchstart: {
            type: PropType<((e: Event) => void | Promise<any>) | ((e: Event) => void | Promise<any>)[]>;
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
                    type: PropType<import("..").ComponentSize>;
                    default: string;
                };
                status: {
                    type: PropType<import("..").SemanticStatus>;
                    default: string;
                };
                variant: {
                    type: PropType<import("../button").ButtonVariant>;
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
                    type: PropType<boolean | number>;
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
                    type: PropType<import("..").ComponentSize>;
                    default: string;
                };
                status: {
                    type: PropType<import("..").SemanticStatus>;
                    default: string;
                };
                variant: {
                    type: PropType<import("../button").ButtonVariant>;
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
                    type: PropType<boolean | number>;
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
                type: PropType<import("..").ComponentSize>;
                default: string;
            };
            status: {
                type: PropType<import("..").SemanticStatus>;
                default: string;
            };
            variant: {
                type: PropType<import("../button").ButtonVariant>;
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
                type: PropType<boolean | number>;
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
export default _default;
