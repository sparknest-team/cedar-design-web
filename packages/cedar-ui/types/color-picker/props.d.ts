import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { TriggerProps } from '../trigger';
export declare const colorPickerProps: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: StringConstructor;
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     */
    defaultValue: {
        type: StringConstructor;
    };
    /**
     * @zh 颜色值的格式
     * @en Color value format
     */
    format: {
        type: PropType<"hex" | "rgb">;
    };
    /**
     * @zh 尺寸
     * @en ComponentSize
     * @values 'xs','sm','md','lg','xl'
     */
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (value: ComponentSize) => boolean;
    };
    /**
     * @zh 显示颜色值
     * @en Show color value
     */
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 显示历史颜色
     * @en Show history colors
     */
    showHistory: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 显示预设颜色
     * @en Show preset colors
     */
    showPreset: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 禁用
     * @en disabled
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 禁用透明通道
     * @en Disable transparency channel
     */
    disabledAlpha: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 没有触发元素，只显示颜色面板
     * @en There is no trigger element, only the color panel is displayed
     * */
    hideTrigger: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 接受所有 [Trigger](/vue/component/trigger) 组件的Props
     * @en Can accept Props of all [Trigger](/vue/component/trigger) components
     * */
    triggerProps: {
        type: PropType<Partial<TriggerProps>>;
    };
    /**
     * @zh 历史颜色的颜色数组
     * @en Color array of historical colors
     */
    historyColors: {
        type: PropType<string[]>;
    };
    /**
     * @zh 预设颜色的颜色数组
     * @en Color array of preset colors
     */
    presetColors: {
        type: PropType<string[]>;
        default: () => string[];
    };
};
export type ColorPickerProps = Partial<ExtractPropTypes<typeof colorPickerProps>>;
