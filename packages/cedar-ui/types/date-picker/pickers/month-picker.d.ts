import { PropType } from 'vue';
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
}>> & Readonly<{}>, {
    format: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
