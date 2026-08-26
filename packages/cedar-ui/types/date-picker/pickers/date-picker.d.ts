/**
 * 日期面板。默认无触发器（hideTrigger），仅展示选择面板。
 * 表单字段请使用 Date / DateRange。
 */
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    defaultValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    mode: {
        type: import("vue").PropType<import("../types.js").Mode>;
        default: string;
        validator: (value: string) => boolean;
    };
    format: {
        type: import("vue").PropType<string | ((current: Date) => string)>;
    };
    dayStartOfWeek: {
        type: import("vue").PropType<import("../types.js").WeekStart>;
        default: number;
        validator: (value: import("../types.js").WeekStart) => boolean;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: import("vue").PropType<Partial<import("../../time-picker/types.js").TimePickerProps>>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    disabledDate: {
        type: import("vue").PropType<(current?: Date) => boolean>;
    };
    disabledTime: {
        type: import("vue").PropType<(current: Date) => import("../types.js").DisabledTimeProps>;
    };
    showNowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    defaultValue: {
        type: import("vue").PropType<Date | string | number>;
    };
    mode: {
        type: import("vue").PropType<import("../types.js").Mode>;
        default: string;
        validator: (value: string) => boolean;
    };
    format: {
        type: import("vue").PropType<string | ((current: Date) => string)>;
    };
    dayStartOfWeek: {
        type: import("vue").PropType<import("../types.js").WeekStart>;
        default: number;
        validator: (value: import("../types.js").WeekStart) => boolean;
    };
    showTime: {
        type: BooleanConstructor;
    };
    timePickerProps: {
        type: import("vue").PropType<Partial<import("../../time-picker/types.js").TimePickerProps>>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    disabledDate: {
        type: import("vue").PropType<(current?: Date) => boolean>;
    };
    disabledTime: {
        type: import("vue").PropType<(current: Date) => import("../types.js").DisabledTimeProps>;
    };
    showNowBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    mode: import("../types.js").Mode;
    disabled: boolean;
    dayStartOfWeek: import("../types.js").WeekStart;
    hideTrigger: boolean;
    showNowBtn: boolean;
    showTime: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
