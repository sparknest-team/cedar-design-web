import type { CSSProperties, PropType } from 'vue';
import type { LabelValue } from './types';
import type { TriggerProps } from '../trigger';
import type { TreeFieldNames, TreeNodeData, TreeProps } from '../tree/types';
import type { ComponentSize } from '../_utils/constant';
import type { Data } from '../_utils/types';
import type { ScrollbarProps } from '../scrollbar';
export declare const treeSelectProps: {
    /**
     * @zh 是否禁用
     * @en Whether to disable
     * */
    disabled: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否为加载中状态
     * @en Whether it is loading state
     * */
    loading: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否为错误状态
     * @en Whether it is an error state
     * */
    error: {
        type: BooleanConstructor;
    };
    /**
     * @zh 选择框的大小
     * @en The size of the selection box.
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     * */
    size: {
        type: PropType<ComponentSize>;
    };
    /**
     * @zh 是否显示边框
     * @en Whether to show the border
     * */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否允许搜索
     * @en Whether to allow searching
     * @defaultValue false (single) \| true (multiple)
     * */
    allowSearch: {
        type: PropType<boolean | {
            retainInputValue?: boolean;
        }>;
        default: (props: Data) => boolean;
    };
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     * */
    clearable: {
        type: BooleanConstructor;
    };
    /**
     * @zh 提示文案
     * @en Prompt copy
     * */
    placeholder: {
        type: StringConstructor;
    };
    /**
     * @zh 最多显示的标签数量，仅在多选模式有效
     * @en The maximum number of labels displayed, only valid in multi-select mode
     * */
    maxTagCount: {
        type: NumberConstructor;
    };
    /**
     * @zh 是否支持多选
     * @en Whether to support multiple selection
     * */
    multiple: {
        type: BooleanConstructor;
    };
    /**
     * @zh 默认值
     * @en Default value
     * */
    defaultValue: {
        type: PropType<string | number | Array<string | number> | LabelValue | LabelValue[]>;
    };
    /**
     * @zh 绑定值
     * @en Value
     * */
    modelValue: {
        type: PropType<string | number | Array<string | number> | LabelValue | LabelValue[]>;
    };
    /**
     * @zh 指定节点数据中的字段名
     * @en Specify the field name in the node data
     * */
    fieldNames: {
        type: PropType<TreeFieldNames>;
    };
    /**
     * @zh 数据
     * @en Data
     * */
    data: {
        type: PropType<TreeNodeData[]>;
        default: () => never[];
    };
    /**
     * @zh 设置value格式。默认是string，设置为true时候，value格式为： { label: string, value: string }
     * @en Set the value format. The default is string, when set to true, the value format is: {label: string, value: string}
     * */
    labelInValue: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否展示复选框
     * @en Whether to show checkbox
     * */
    treeCheckable: {
        type: BooleanConstructor;
    };
    /**
     * @zh 父子节点是否关联
     * @en Whether the parent and child nodes are related
     * */
    treeCheckStrictly: {
        type: BooleanConstructor;
    };
    /**
     * @zh 定制回显方式
     * @en Customized echo method
     * */
    treeCheckedStrategy: {
        type: PropType<"all" | "parent" | "child">;
        default: string;
    };
    /**
     * @zh 可以接受所有 [Tree](/vue/component/tree) 组件的Props
     * @en Can accept Props of all [Tree](/vue/component/tree) components
     * */
    treeProps: {
        type: PropType<Partial<TreeProps>>;
    };
    /**
     * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
     * @en Can accept Props of all [Trigger](/vue/component/trigger) components
     * */
    triggerProps: {
        type: PropType<Partial<TriggerProps>>;
    };
    /**
     * @zh 弹出框是否可见
     * @en Whether the pop-up box is visible
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 默认弹出框是否可见
     * @en Whether the default pop-up box is visible
     * */
    defaultOpen: {
        type: BooleanConstructor;
    };
    /**
     * @zh 下拉框样式
     * @en Drop-down box style
     * */
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 下拉框样式 class
     * @en Drop-down box style class
     * */
    dropdownClassName: {
        type: PropType<string | string[]>;
    };
    /**
     * @zh 自定义节点过滤函数
     * @en Custom node filter function
     * */
    filterTreeNode: {
        type: PropType<(searchKey: string, nodeData: TreeNodeData) => boolean>;
    };
    /**
     * @zh 动态加载数据
     * @en Load data dynamically
     * */
    loadMore: {
        type: PropType<(nodeData: TreeNodeData) => Promise<void>>;
    };
    /**
     * @zh 禁用内部过滤逻辑
     * @en Disable internal filtering logic
     * */
    disableFilter: {
        type: BooleanConstructor;
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for pop-up box
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
    };
    /**
     * @zh 为 value 中找不到匹配项的 key 定义节点数据
     * @en Customize node data for keys that do not match options
     * @version 2.22.0
     */
    fallbackOption: {
        type: PropType<boolean | ((key: number | string) => TreeNodeData | boolean)>;
        default: boolean;
    };
    /**
     * @zh 设置可选择的节点，默认全部可选
     * @en Set the nodes that can be selected, all can be selected by default
     * @version 2.27.0
     */
    selectable: {
        type: PropType<boolean | "leaf" | ((node: TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)>;
        default: boolean;
    };
    /**
     * @zh 是否开启虚拟滚动条
     * @en Whether to enable virtual scroll bar
     * @version 2.39.0
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
     * @zh 输入框的值
     * @en The value of the input
     * @vModel
     * @version 2.55.0
     */
    inputValue: {
        type: StringConstructor;
    };
    /**
     * @zh 输入框的默认值（非受控模式）
     * @en The default value of the input (uncontrolled mode)
     * @version 2.55.0
     */
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
};
