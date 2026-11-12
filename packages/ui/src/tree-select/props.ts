import type { CSSProperties, PropType } from 'vue'
import { fieldPresentationProps } from '../_components/field-presentation/props'
import { openTriggerTargetProp } from '../_components/picker-field/open-trigger'
import type { OptionsLoader } from '../_hooks/use-option-request'
import type { ComponentSize } from '../_utils/constant'
import { emptyValueProp } from '../_utils/empty-value'
import type { OptionSearchField } from '../_utils/option-data'
import { popupContainerProp } from '../_utils/popup-container'
import { fieldLoadingProps } from '../field-decorator/props'
import type { ScrollbarProps } from '../scrollbar'
import type { TreeFieldNames, TreeNodeData, TreeNodeValue, TreeProps } from '../tree/types'
import type { TriggerProps } from '../trigger'
import type { TreeSelectValue } from './types'

export const treeSelectProps = {
  ...fieldLoadingProps,
  /** 弹出编辑是否需要确认；未设置时单选即提交，多选保留确认。 */
  needConfirm: { type: Boolean, default: undefined },
  openTriggerTarget: openTriggerTargetProp,
  /** 内置字段匹配是否区分大小写。 */
  caseSensitive: { type: Boolean, default: false },
  searchFields: {
    type: Array as PropType<readonly OptionSearchField[]>,
    default: () => ['label'],
  },
  ...fieldPresentationProps,
  emptyValue: emptyValueProp<TreeNodeValue | TreeNodeValue[] | undefined>(),
  /** 清空动作产生的模型值；省略保留原默认值。 */
  /** 只读；未设置时继承 Form / FormItem。 */
  readonly: { type: Boolean, default: undefined },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   * */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 是否为错误状态
   * @en Whether it is an error state
   * */
  error: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 选择框的大小
   * @en The size of the selection box.
   * @values 'xs','sm','md','lg','xl'
   * @default-value 'md'
   * */
  size: {
    type: String as PropType<ComponentSize>,
  },
  /**
   * @zh 是否显示边框
   * @en Whether to show the border
   * */
  border: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 是否允许搜索
   * @en Whether to allow searching
   * @default-value false (single) \| true (multiple)
   * */
  filterable: {
    type: Boolean,
    default: undefined,
  },
  /** 搜索选中后是否保留输入文本。 */
  retainInputValue: Boolean,
  /**
   * @zh 是否允许清除
   * @en Whether to allow clear
   * */
  clearable: {
    type: Boolean,
  },
  /**
   * @zh 提示文案
   * @en Prompt copy
   * */
  placeholder: {
    type: String,
  },
  /**
   * @zh 最多显示的标签数量，仅在多选模式有效
   * @en The maximum number of labels displayed, only valid in multi-select mode
   * */
  maxTagCount: {
    type: Number,
  },
  /**
   * @zh 是否支持多选
   * @en Whether to support multiple selection
   * */
  multiple: {
    type: Boolean,
  },

  /**
   * @zh 默认值
   * @en Default value
   * */
  defaultValue: {
    type: [String, Number, Array, Object] as PropType<TreeSelectValue>,
  },
  /**
   * @zh 绑定值
   * @en Value
   * */
  modelValue: {
    type: [String, Number, Array, Object] as PropType<TreeSelectValue>,
  },
  /**
   * @zh 指定节点数据中的字段名
   * @en Specify the field name in the node data
   * */
  fieldNames: {
    type: Object as PropType<TreeFieldNames>,
  },
  /**
   * @zh 数据
   * @en Data
   * */
  data: {
    type: [Array, Function] as PropType<readonly TreeNodeData[] | OptionsLoader<TreeNodeData>>,
    default: undefined,
  },
  /**
   * @zh 设置value格式。默认是string，设置为true时候，value格式为： { label: string, value: string }
   * @en Set the value format. The default is string, when set to true, the value format is: {label: string, value: string}
   * */
  labelInValue: {
    type: Boolean,
  },
  /**
   * @zh 是否展示复选框
   * @en Whether to show checkbox
   * */
  treeCheckable: {
    type: Boolean,
  },
  /**
   * @zh 父子节点是否关联
   * @en Whether the parent and child nodes are related
   * */
  treeCheckStrictly: {
    type: Boolean,
  },
  /**
   * @zh 定制回显方式
   * @en Customized echo method
   * */
  treeCheckedStrategy: {
    type: String as PropType<'all' | 'parent' | 'child'>,
    default: 'all',
  },
  /**
   * @zh 可以接受所有 [Tree](/vue/component/tree) 组件的Props
   * @en Can accept Props of all [Tree](/vue/component/tree) components
   * */
  treeProps: {
    type: Object as PropType<Partial<TreeProps>>,
  },
  /**
   * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
   * @en Can accept Props of all [Trigger](/vue/component/trigger) components
   * */
  triggerProps: {
    type: Object as PropType<Partial<TriggerProps>>,
  },
  /**
   * @zh 弹出框是否可见
   * @en Whether the pop-up box is visible
   * @v-model
   */
  open: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 默认弹出框是否可见
   * @en Whether the default pop-up box is visible
   * */
  defaultOpen: {
    type: Boolean,
  },
  /**
   * @zh 下拉框样式
   * @en Drop-down box style
   * */
  dropdownStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /**
   * @zh 下拉框样式 class
   * @en Drop-down box style class
   * */
  dropdownClassName: {
    type: [String, Array] as PropType<string | string[]>,
  },
  /**
   * @zh 自定义节点过滤函数
   * @en Custom node filter function
   * */
  filterTreeNode: {
    type: Function as PropType<(searchKey: string, nodeData: TreeNodeData) => boolean>,
  },
  /**
   * @zh 动态加载数据
   * @en Load data dynamically
   * */
  loadMore: {
    type: Function as PropType<(nodeData: TreeNodeData) => Promise<void>>,
  },
  /**
   * @zh 禁用内部过滤逻辑
   * @en Disable internal filtering logic
   * */
  disableFilter: {
    type: Boolean,
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for pop-up box
   */
  popupContainer: popupContainerProp,
  /**
   * @zh 为 value 中找不到匹配项的 key 定义节点数据
   * @en Customize node data for keys that do not match options
   */
  fallbackOption: {
    type: [Boolean, Function] as PropType<boolean | ((value: number | string) => TreeNodeData | boolean)>,
    default: true,
  },
  /**
   * @zh 设置可选择的节点，默认全部可选
   * @en Set the nodes that can be selected, all can be selected by default
   */
  selectable: {
    type: [Boolean, String, Function] as PropType<
      boolean | 'leaf' | ((node: TreeNodeData, info: { isLeaf: boolean; level: number }) => boolean)
    >,
    default: true,
  },
  /**
   * @zh 是否开启虚拟滚动条
   * @en Whether to enable virtual scroll bar
   */
  scrollbar: {
    type: [Boolean, Object] as PropType<boolean | ScrollbarProps>,
    default: true,
  },
  /**
   * @zh 空状态时是否显示header
   * @en Whether to display the header in the empty state
   */
  showHeaderOnEmpty: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @zh 空状态时是否显示footer
   * @en Whether to display the footer in the empty state
   */
  showFooterOnEmpty: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * @zh 输入框的值
   * @en The value of the input
   * @v-model
   */
  inputValue: {
    type: String,
  },
  /**
   * @zh 输入框的默认值（非受控模式）
   * @en The default value of the input (uncontrolled mode)
   */
  defaultInputValue: {
    type: String,
    default: '',
  },
}
