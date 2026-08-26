import { CSSProperties, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 倒计时的标题
     * @en Countdown title
     */
    title: StringConstructor;
    /**
     * @zh 倒计时的值
     * @en Countdown value
     */
    value: {
        type: NumberConstructor;
        default: () => number;
    };
    /**
     * @zh 用于修正初始化时间显示不正确
     * @en Used to correct the incorrect display of the initialization time
     */
    now: {
        type: NumberConstructor;
        default: () => number;
    };
    /**
     * @zh 倒计时的展示格式 [dayjs](https://day.js.org/docs/en/display/format)
     * @en Countdown display format [dayjs](https://day.js.org/docs/en/display/format)
     */
    format: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 是否开始倒计时
     * @en Whether to start the countdown
     */
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 自定义显示值的样式
     * @en Custom value style
     * @version 2.32.0
     */
    valueStyle: {
        type: PropType<CSSProperties>;
    };
}>, {
    prefixCls: string;
    displayValue: import("vue").Ref<string, string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 倒计时完成后触发的回调
     * @en Callback at the end of the countdown
     */
    finish: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 倒计时的标题
     * @en Countdown title
     */
    title: StringConstructor;
    /**
     * @zh 倒计时的值
     * @en Countdown value
     */
    value: {
        type: NumberConstructor;
        default: () => number;
    };
    /**
     * @zh 用于修正初始化时间显示不正确
     * @en Used to correct the incorrect display of the initialization time
     */
    now: {
        type: NumberConstructor;
        default: () => number;
    };
    /**
     * @zh 倒计时的展示格式 [dayjs](https://day.js.org/docs/en/display/format)
     * @en Countdown display format [dayjs](https://day.js.org/docs/en/display/format)
     */
    format: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 是否开始倒计时
     * @en Whether to start the countdown
     */
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 自定义显示值的样式
     * @en Custom value style
     * @version 2.32.0
     */
    valueStyle: {
        type: PropType<CSSProperties>;
    };
}>> & Readonly<{
    onFinish?: (() => any) | undefined;
}>, {
    value: number;
    start: boolean;
    format: string;
    now: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
