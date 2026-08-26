import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { FormControlVariant } from '../_utils/form-control';
import type { VirtualListProps } from '../_components/virtual-list-v2/interface';
import type { TriggerProps } from '../trigger';
import type { ScrollbarProps } from '../scrollbar';
import type { SelectFieldNames, SelectOptionData, SelectOptionGroup } from './types';
export declare const selectProps: {
    /**
     * @zh 是否开启多选模式（多选模式默认开启搜索）
     * @en Whether to open multi-select mode (The search is turned on by default in the multi-select mode)
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
        default: undefined;
    };
    /**
     * @zh 默认值（非受控模式）
     * @en Default value (uncontrolled mode)
     * @defaultValue '' \| []
     */
    defaultValue: {
        type: PropType<string | number | boolean | Record<string, unknown> | (string | number | boolean | Record<string, unknown>)[]>;
        default: (props: {
            multiple?: boolean;
        }) => "" | never[];
    };
    /**
     * @zh 输入框的值
     * @en The value of the input
     * @vModel
     */
    inputValue: {
        type: StringConstructor;
    };
    /**
     * @zh 输入框的默认值（非受控模式）
     * @en The default value of the input (uncontrolled mode)
     */
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 选择框的大小
     * @en The size of the select
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     */
    size: {
        type: PropType<ComponentSize>;
        validator: (value: unknown) => value is ComponentSize;
    };
    /**
     * @zh 选择框的变体
     * @en The variant of the select
     * @values 'filled', 'outlined', 'standard'
     * @defaultValue 'filled'
     */
    variant: {
        type: PropType<FormControlVariant>;
        validator: (value: unknown) => value is FormControlVariant;
    };
    /**
     * @zh 占位符
     * @en Placeholder
     */
    placeholder: StringConstructor;
    /**
     * @zh 是否为加载中状态
     * @en Whether it is loading state
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否为错误状态
     * @en Whether it is an error state
     */
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否允许清空
     * @en Whether to allow clear
     */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否允许搜索
     * @en Whether to allow searching
     * @defaultValue false (single) \| true (multiple)
     */
    filterable: {
        type: PropType<boolean | {
            retainInputValue?: boolean;
        }>;
        default: (props: {
            multiple?: boolean;
        }) => boolean;
    };
    /**
     * @zh 是否允许创建
     * @en Whether to allow creation
     */
    creatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 多选模式下，最多显示的标签数量。0 表示不限制
     * @en In multi-select mode, the maximum number of labels displayed. 0 means unlimited
     */
    maxTagCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /**
     * @zh 是否在无值时默认选择第一个选项
     * @en Whether to select the first option by default when there is no value
     * @version 2.43.0
     */
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否显示下拉菜单
     * @en Whether to show the dropdown
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 弹出框默认是否可见（非受控模式）
     * @en Whether the popup is visible by default (uncontrolled mode)
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否在下拉菜单关闭时销毁元素
     * @en Whether to destroy the element when the dropdown is closed
     */
    unmountOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否过滤选项
     * @en Whether to filter options
     */
    filterOption: {
        type: PropType<boolean | ((inputValue: string, option: SelectOptionData) => boolean)>;
        default: boolean;
    };
    /**
     * @zh 选项数据
     * @en Option data
     */
    options: {
        type: PropType<(string | number | boolean | SelectOptionData | SelectOptionGroup)[]>;
        default: () => never[];
    };
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
     * @en Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
     * @type VirtualListProps
     */
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    /**
     * @zh 下拉菜单的触发器属性
     * @en Trigger props of the drop-down menu
     * @type TriggerProps
     */
    triggerProps: {
        type: PropType<TriggerProps>;
    };
    /**
     * @zh 格式化显示内容
     * @en Format display content
     */
    formatLabel: {
        type: PropType<(data: SelectOptionData) => string>;
    };
    /**
     * @zh 自定义值中不存在的选项
     * @en Options that do not exist in custom values
     * @version 2.10.0
     */
    fallbackOption: {
        type: PropType<boolean | ((value: string | number | boolean | Record<string, unknown>) => SelectOptionData)>;
        default: boolean;
    };
    /**
     * @zh 是否在下拉菜单中显示额外选项
     * @en Options that do not exist in custom values
     * @version 2.10.0
     */
    showExtraOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 触发搜索事件的延迟时间
     * @en Delay time to trigger search event
     * @version 2.18.0
     */
    searchDelay: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 多选时最多的选择个数
     * @en Maximum number of choices in multiple choice
     * @version 2.18.0
     */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 自定义 `SelectOptionData` 中的字段；当选项值为对象时，也用其中的 `value` 作为键属性
     * @en Customize fields in `SelectOptionData`; when option value is an object, `value` is also used as the key property
     * @version 2.22.0
     */
    fieldNames: {
        type: PropType<SelectFieldNames>;
    };
    /**
     * @zh 是否开启虚拟滚动条
     * @en Whether to enable virtual scroll bar
     * @version 2.38.0
     */
    scrollbar: {
        type: PropType<boolean | ScrollbarProps>;
        default: boolean;
    };
    /**
     * @zh 空状态时是否显示header
     * @en Whether to display the header in the empty state
     */
    showHeaderOnEmpty: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * @zh 空状态时是否显示footer
     * @en Whether to display the footer in the empty state
     */
    showFooterOnEmpty: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * @zh 标签内容不换行
     * @en Tag content does not wrap
     * @version 2.56.1
     */
    tagNowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type SelectProps = ExtractPropTypes<typeof selectProps>;
