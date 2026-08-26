import { PropType } from 'vue';
export declare const calendarProps: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: DateConstructor;
        default: undefined;
    };
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     */
    defaultValue: {
        type: DateConstructor;
    };
    /**
     * @zh 模式
     * @en Mode
     */
    mode: {
        type: PropType<"month" | "year">;
    };
    /**
     * @zh 默认模式
     * @en Default Mode
     */
    defaultMode: {
        type: PropType<"month" | "year">;
        default: string;
    };
    /**
     * @zh 显示的模式
     * @en Displayed mode
     */
    modes: {
        type: PropType<("month" | "year")[]>;
        default: () => string[];
    };
    allowSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    panel: {
        type: BooleanConstructor;
        default: boolean;
    };
    panelWidth: {
        type: NumberConstructor;
    };
    panelTodayBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    dayStartOfWeek: {
        type: PropType<0 | 1>;
        default: number;
    };
    isWeek: {
        type: BooleanConstructor;
        default: boolean;
    };
};
