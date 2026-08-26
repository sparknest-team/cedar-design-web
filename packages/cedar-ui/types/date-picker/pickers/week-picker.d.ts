import { PropType } from 'vue';
import { WeekStart } from '../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
     */
    format: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。
     * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ).
     * @version 2.16.0
     */
    valueFormat: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
     * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
     * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
     * @version 2-6 from 2.21.0
     */
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: {
        type: PropType<Date | string | number>;
    };
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
     */
    format: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 值的格式，对 `value` `defaultValue` `pickerValue` `defaultPickerValue` 以及事件中的返回值生效，支持设置为时间戳，Date 和字符串（参考[字符串解析格式](#字符串解析格式)）。
     * @en The format of the value, valid for `value` `defaultValue` `pickerValue` `defaultPickerValue` and the return value in the event, supports setting as timestamp, Date and string (refer to [String parsing format](#string-parsing-format) ).
     * @version 2.16.0
     */
    valueFormat: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。
     * @en The first day of the week starts on the day of the week, 0-Sunday, 1-Monday, and so on.
     * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
     * @version 2-6 from 2.21.0
     */
    dayStartOfWeek: {
        type: PropType<WeekStart>;
        default: number;
    };
}>> & Readonly<{}>, {
    dayStartOfWeek: WeekStart;
    format: string;
    valueFormat: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
