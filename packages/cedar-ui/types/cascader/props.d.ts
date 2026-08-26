import { PropType } from 'vue';
import { TriggerProps } from '../trigger';
import { CascaderFieldNames, CascaderOption } from './types';
import { Data } from '../_utils/types';
import { ComponentSize } from '../_utils/constant';
import { VirtualListProps } from '../_components/virtual-list-v2/interface';
export declare const cascaderProps: {
    /**
     * @zh 绑定值是否为路径
     * @en Whether the value is a path
     */
    pathMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否为多选状态（多选模式默认开启搜索）
     * @en Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)
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
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
    };
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     * @defaultValue '' \| undefined \| []
     */
    defaultValue: {
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        default: (props: Data) => "" | never[] | undefined;
    };
    /**
     * @zh 级联选择器的选项
     * @en Options for cascader
     */
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
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
     * @zh 是否为错误状态
     * @en Whether it is an error state
     */
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 选择框的大小
     * @en The size of the select
     * @values 'xs', 'sm', 'md', 'lg', 'xl'
     * @defaultValue 'md'
     */
    size: {
        type: PropType<ComponentSize>;
    };
    /**
     * @zh 是否允许搜索
     * @en Whether to allow searching
     * @defaultValue false (single) \| true (multiple)
     */
    filterable: {
        type: BooleanConstructor;
        default: (props: Data) => boolean;
    };
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 输入框的值
     * @en The value of the input
     * @vModel
     */
    inputValue: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * @zh 输入框的默认值（非受控状态）
     * @en The default value of the input (uncontrolled state)
     */
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 是否显示下拉框
     * @en Whether to show the dropdown
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 展开下一级的触发方式
     * @en Expand the trigger method of the next level
     */
    expandTrigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    /**
     * @zh 是否默认显示下拉框（非受控状态）
     * @en Whether to display the dropdown by default (uncontrolled state)
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 占位符
     * @en Placeholder
     */
    placeholder: StringConstructor;
    /**
     * @zh 自定义选项过滤方法
     * @en Custom options filter method
     */
    filterOption: {
        type: PropType<(inputValue: string, option: CascaderOption) => boolean>;
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
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
     * @zh 格式化展示内容
     * @en Format display content
     */
    formatLabel: {
        type: PropType<(options: CascaderOption[]) => string>;
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
     * @zh 是否开启严格选择模式
     * @en Whether to enable strict selection mode
     */
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 数据懒加载函数，传入时开启懒加载功能
     * @en Data lazy loading function, open the lazy loading function when it is passed in
     * @version 2.13.0
     */
    loadMore: {
        type: PropType<(option: CascaderOption, done: (children?: CascaderOption[]) => void) => void>;
    };
    /**
     * @zh 是否为加载中状态
     * @en Whether it is loading state
     * @version 2.15.0
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 搜索下拉菜单中的选项是否仅展示标签
     * @en Whether the options in the search dropdown show only label
     * @version 2.18.0
     */
    searchOptionOnlyLabel: {
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
     * @zh 自定义 `CascaderOption` 中的字段；当选项值为对象时，也用其中的 `value` 作为键属性
     * @en Customize fields in `CascaderOption`; when option value is an object, `value` is also used as the key property
     * @version 2.22.0
     */
    fieldNames: {
        type: PropType<CascaderFieldNames>;
    };
    /**
     * @zh 自定义不存在选项的值的展示
     * @en Options that do not exist in custom values
     * @version 2.29.0
     */
    fallback: {
        type: PropType<boolean | ((value: string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[]) => string)>;
        default: boolean;
    };
    /**
     * @zh 是否展开子菜单
     * @en whether to expand the submenu
     * @version 2.29.0
     */
    expandChild: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
     * @en Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
     * @type VirtualListProps
     * @version 2.49.0
     */
    virtualListProps: {
        type: PropType<VirtualListProps>;
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
