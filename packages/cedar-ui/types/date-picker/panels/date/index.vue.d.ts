import { PropType } from 'vue';
import type { Dayjs } from 'dayjs';
import { RenderFunc } from '../../../_components/render-function';
import { TimePickerProps } from '../../../time-picker/types';
import { getDateValue } from '../../../_utils/date';
import type { Cell, DisabledDate, DisabledTime, HeaderIcons, HeaderOperations, IsSameTime, Mode, WeekStart } from '../../types';
import { HeaderLabelClickFunc } from '../header.vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    isRange: {
        type: BooleanConstructor;
    };
    value: {
        type: PropType<Dayjs>;
    };
    rangeValues: {
        type: PropType<Array<Dayjs | undefined>>;
    };
    headerValue: {
        type: PropType<Dayjs>;
        required: true;
    };
    footerValue: {
        type: PropType<Dayjs>;
    };
    timePickerValue: {
        type: PropType<Dayjs>;
    };
    headerOperations: {
        type: PropType<HeaderOperations>;
        default: () => {};
    };
    headerIcons: {
        type: PropType<HeaderIcons>;
        default: () => {};
    };
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
    };
    disabledDate: {
        type: PropType<DisabledDate>;
    };
    disabledTime: {
        type: PropType<DisabledTime>;
    };
    isSameTime: {
        type: PropType<IsSameTime>;
    };
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: PropType<Partial<TimePickerProps>>;
    };
    currentView: {
        type: PropType<"date" | "time">;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    onHeaderLabelClick: {
        type: PropType<HeaderLabelClickFunc>;
    };
}>, {
    prefixCls: import("vue").ComputedRef<string>;
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    pickerPrefixCls: string;
    headerTitle: import("vue").ComputedRef<string>;
    rows: import("vue").ComputedRef<Cell[][]>;
    weekList: import("vue").ComputedRef<number[]>;
    mergedIsSameTime: import("vue").ComputedRef<IsSameTime>;
    disabledTimeProps: import("vue").ComputedRef<import("../../types").DisabledTimeProps>;
    onCellClick: (cellData: Cell) => void;
    onCellMouseEnter: (cellData: Cell) => void;
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
        type: PropType<Dayjs>;
    };
    rangeValues: {
        type: PropType<Array<Dayjs | undefined>>;
    };
    headerValue: {
        type: PropType<Dayjs>;
        required: true;
    };
    footerValue: {
        type: PropType<Dayjs>;
    };
    timePickerValue: {
        type: PropType<Dayjs>;
    };
    headerOperations: {
        type: PropType<HeaderOperations>;
        default: () => {};
    };
    headerIcons: {
        type: PropType<HeaderIcons>;
        default: () => {};
    };
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
    };
    disabledDate: {
        type: PropType<DisabledDate>;
    };
    disabledTime: {
        type: PropType<DisabledTime>;
    };
    isSameTime: {
        type: PropType<IsSameTime>;
    };
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: PropType<Partial<TimePickerProps>>;
    };
    currentView: {
        type: PropType<"date" | "time">;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    onHeaderLabelClick: {
        type: PropType<HeaderLabelClickFunc>;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    "onTime-picker-select"?: ((...args: any[]) => any) | undefined;
    "onCurrent-view-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:currentView"?: ((...args: any[]) => any) | undefined;
}>, {
    mode: Mode;
    disabled: boolean;
    dayStartOfWeek: WeekStart;
    isRange: boolean;
    headerOperations: HeaderOperations;
    headerIcons: HeaderIcons;
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
            type: PropType<Mode>;
            default: string;
        };
        value: {
            type: PropType<Dayjs>;
        };
        icons: {
            type: PropType<HeaderIcons>;
        };
        onPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onLabelClick: {
            type: PropType<HeaderLabelClickFunc>;
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
            type: PropType<Mode>;
            default: string;
        };
        value: {
            type: PropType<Dayjs>;
        };
        icons: {
            type: PropType<HeaderIcons>;
        };
        onPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onLabelClick: {
            type: PropType<HeaderLabelClickFunc>;
        };
    }>> & Readonly<{
        "onLabel-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        mode: Mode;
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
                type: PropType<RenderFunc>;
                required: true;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: PropType<RenderFunc>;
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
            type: PropType<Cell[][]>;
            default: () => never[];
        };
        value: {
            type: PropType<Dayjs>;
        };
        disabledDate: {
            type: PropType<DisabledDate>;
        };
        isSameTime: {
            type: PropType<IsSameTime>;
            required: true;
        };
        mode: {
            type: PropType<Mode>;
        };
        rangeValues: {
            type: PropType<Array<Dayjs | undefined>>;
        };
        dateRender: {
            type: PropType<RenderFunc>;
        };
    }>, {
        isWeek: import("vue").ComputedRef<boolean>;
        getCellClassName: (cellData: Cell) => (string | {
            [x: string]: boolean | undefined;
        } | undefined)[];
        isCellDisabled: (cellData: Cell) => boolean;
        isCellSelected: (cellData: Cell) => boolean;
        onCellClick: (cellData: Cell) => void;
        onCellMouseEnter: (cellData: Cell) => void;
        onCellMouseLeave: (cellData: Cell) => void;
        getDateValue: typeof getDateValue;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: {
            type: StringConstructor;
            required: true;
        };
        rows: {
            type: PropType<Cell[][]>;
            default: () => never[];
        };
        value: {
            type: PropType<Dayjs>;
        };
        disabledDate: {
            type: PropType<DisabledDate>;
        };
        isSameTime: {
            type: PropType<IsSameTime>;
            required: true;
        };
        mode: {
            type: PropType<Mode>;
        };
        rangeValues: {
            type: PropType<Array<Dayjs | undefined>>;
        };
        dateRender: {
            type: PropType<RenderFunc>;
        };
    }>> & Readonly<{
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    }>, {
        rows: Cell[][];
    }, {}, {
        RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: PropType<RenderFunc>;
                required: true;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: PropType<RenderFunc>;
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
            type: PropType<number[]>;
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
            type: PropType<number[]>;
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
        hours: import("vue").ComputedRef<import("../../../time-picker/types").TimeList>;
        minutes: import("vue").ComputedRef<import("../../../time-picker/types").TimeList>;
        seconds: import("vue").ComputedRef<import("../../../time-picker/types").TimeList>;
        ampmList: import("vue").ComputedRef<import("../../../time-picker/types").TimeList>;
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
                type: PropType<import("../../../time-picker/types").TimeList>;
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
            onItemRef(el: any, item: import("../../../time-picker/types").TimeListItem): void;
            onItemClick(item: import("../../../time-picker/types").TimeListItem): void;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
                required: true;
            };
            list: {
                type: PropType<import("../../../time-picker/types").TimeList>;
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
        Button: import("../../../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                status: {
                    type: PropType<import("../../..").SemanticStatus>;
                    validator: (value: unknown) => value is import("../../..").SemanticStatus;
                };
                variant: {
                    type: PropType<import("../../../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../../../button").ButtonVariant;
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
                    type: PropType<import("../../..").ComponentSize>;
                    validator: (value: unknown) => value is import("../../..").ComponentSize;
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
                    type: PropType<import("../../..").SemanticStatus>;
                    validator: (value: unknown) => value is import("../../..").SemanticStatus;
                };
                variant: {
                    type: PropType<import("../../../button").ButtonVariant>;
                    validator: (value: unknown) => value is import("../../../button").ButtonVariant;
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
                    type: PropType<import("../../..").ComponentSize>;
                    validator: (value: unknown) => value is import("../../..").ComponentSize;
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
                type: PropType<import("../../..").SemanticStatus>;
                validator: (value: unknown) => value is import("../../..").SemanticStatus;
            };
            variant: {
                type: PropType<import("../../../button").ButtonVariant>;
                validator: (value: unknown) => value is import("../../../button").ButtonVariant;
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
                type: PropType<import("../../..").ComponentSize>;
                validator: (value: unknown) => value is import("../../..").ComponentSize;
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
                        type: PropType<import("../../..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: PropType<import("../../..").SemanticStatus>;
                        default: string;
                    };
                    variant: {
                        type: PropType<import("../../../button").ButtonVariant>;
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
                    buttonGroupProvider: import("../../../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../../../button").ButtonVariant;
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
                        type: PropType<import("../../..").ComponentSize>;
                        default: string;
                    };
                    status: {
                        type: PropType<import("../../..").SemanticStatus>;
                        default: string;
                    };
                    variant: {
                        type: PropType<import("../../../button").ButtonVariant>;
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
                    buttonGroupProvider: import("../../../button/provide").ButtonGroupProvider;
                }, {}, {}, {}, {
                    vertical: boolean;
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    disabled: boolean;
                    color: string;
                    variant: import("../../../button").ButtonVariant;
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
                    type: PropType<import("../../..").ComponentSize>;
                    default: string;
                };
                status: {
                    type: PropType<import("../../..").SemanticStatus>;
                    default: string;
                };
                variant: {
                    type: PropType<import("../../../button").ButtonVariant>;
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
                buttonGroupProvider: import("../../../button/provide").ButtonGroupProvider;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                vertical: boolean;
                size: "xs" | "sm" | "md" | "lg" | "xl";
                disabled: boolean;
                color: string;
                variant: import("../../../button").ButtonVariant;
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
export default _default;
