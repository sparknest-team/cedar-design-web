import { CSSProperties, PropType } from 'vue';
export declare const statisticProps: {
    /**
     * @zh 数值显示的标题
     * @en Title of the numerical display
     */
    title: StringConstructor;
    /**
     * @zh 数值显示的值
     * @en Numerical display value
     */
    value: {
        type: PropType<number | Date>;
    };
    /**
     * @zh 数值显示的格式 [dayjs](https://day.js.org/docs/en/display/format)（日期模式使用）
     * @en Format of numerical display [dayjs](https://day.js.org/docs/en/display/format) (used in date mode)
     */
    format: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 额外的显示内容
     * @en Additional display content
     */
    extra: StringConstructor;
    /**
     * @zh 是否开始动画
     * @en Whether to start animation
     */
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 小数保留位数（数字模式使用）
     * @en Decimal reserved digits (used in digital mode)
     */
    precision: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 进位分隔符（数字模式使用）
     * @en Carry separator (used in number mode)
     */
    separator: StringConstructor;
    /**
     * @zh 是否展示进位分隔符（数字模式使用）
     * @en Whether to display the carry separator (used in number mode)
     */
    showGroupSeparator: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否开启动画
     * @en Whether to turn on animation
     */
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 动画的过度时间
     * @en Animation's duration time
     */
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 动画的起始值
     * @en The starting value of the animation
     */
    valueFrom: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * @zh 提示文字（当 value 为 undefined 时显示）
     * @en Prompt text (displayed when value is undefined )
     * @version 2.28.0
     */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @zh 自定义显示值的样式
     * @en Custom value style
     * @version 2.32.0
     */
    valueStyle: {
        type: PropType<CSSProperties>;
    };
};
