import type { ExtractPropTypes, PropType } from 'vue';
import type { TriggerProps } from '../trigger';
import type { FilterOption, SelectOptionData, SelectOptionGroup } from '../select/types';
import type { VirtualListProps } from '../_components/virtual-list-v2/interface';
import type { ComponentSize } from '../_utils/constant';
export declare const autoCompleteProps: {
    /**
     * @zh 绑定值
     * @en Value
     * @vModel
     */
    modelValue: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * @zh 默认值（非受控模式）
     * @en Default value (uncontrolled mode)
     */
    defaultValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
    };
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
        validator: (value: string) => boolean;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    /**
     * @zh 用于自动提示的数据
     * @en Data used for auto-complete
     */
    options: {
        type: PropType<(string | number | SelectOptionData | SelectOptionGroup)[]>;
        default: () => never[];
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
        type: PropType<string | HTMLElement | null | undefined>;
    };
    /**
     * @zh 是否为严格校验模式
     * @en Whether it is strict verification mode
     */
    strict: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 自定义选项过滤方法
     * @en Custom option filtering method
     */
    filterOption: {
        type: PropType<FilterOption>;
        default: boolean;
    };
    /**
     * @zh trigger 组件属性
     * @en trigger props
     * @version 2.14.0
     */
    triggerProps: {
        type: PropType<TriggerProps>;
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
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
     * @en Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
     * @type VirtualListProps
     * @version 2.50.0
     */
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
};
export type AutoCompleteProps = Partial<ExtractPropTypes<typeof autoCompleteProps>>;
