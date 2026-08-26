import type { PropType } from 'vue';
import type { SelectOptionData, SelectOptionGroup } from '../select/types';
export declare const mentionProps: {
    /**
     * @zh 绑定值
     * @en Value
     * @vModel
     */
    modelValue: StringConstructor;
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     */
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 用于自动补全的数据
     * @en Data for automatic completion
     */
    data: {
        type: PropType<(string | number | SelectOptionData | SelectOptionGroup)[]>;
        default: () => never[];
    };
    /**
     * @zh 触发自动补全的关键字
     * @en Keywords that trigger auto-completion
     */
    prefix: {
        type: PropType<string | string[]>;
        default: string;
    };
    /**
     * @zh 选中项的前后分隔符
     * @en Before and after the selected item separator
     */
    split: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 输入框或文本域
     * @en default input or textarea
     */
    type: {
        type: PropType<"input" | "textarea">;
        default: string;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否允许清空输入框
     * @en Whether to allow the input to be cleared
     * @version 2.23.0
     */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
