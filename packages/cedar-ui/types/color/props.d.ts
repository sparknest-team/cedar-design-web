import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
export declare const colorProps: {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: StringConstructor;
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: StringConstructor;
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
    showHistory: BooleanConstructor;
    /**
     * @zh 显示预设颜色
     * @en Show preset colors
     */
    showPreset: BooleanConstructor;
    /**
     * @zh 禁用
     * @en Disabled
     */
    disabled: BooleanConstructor;
    /**
     * @zh 禁用透明通道
     * @en Disable alpha
     */
    disabledAlpha: BooleanConstructor;
    /**
     * @zh 历史颜色
     * @en History colors
     */
    historyColors: {
        type: PropType<string[]>;
    };
    /**
     * @zh 预设颜色
     * @en Preset colors
     */
    presetColors: {
        type: PropType<string[]>;
    };
    /**
     * @zh 透传给 ColorPicker 的其余属性
     * @en Extra props passed to ColorPicker
     */
    colorPickerProps: {
        type: PropType<Record<string, unknown>>;
        default: () => {};
    };
};
export type ColorProps = Partial<ExtractPropTypes<typeof colorProps>>;
