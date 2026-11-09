import type { PropType } from 'vue'
import { componentSizes, orientations, type ComponentSize } from '../_utils/constant'
import { popupContainerProp } from '../_utils/popup-container'
import type { NavMenuOption, NavMenuKey, NavMenuMode, NavMenuFieldNames, NavMenuRenderContext } from './types'
export const navMenuProps = {
  /** 数据驱动的导航结构；独立入口使用默认插槽。 */
  options: { type: Array as PropType<NavMenuOption[]>, default: () => [] },
  /** 当前选中 key。 */
  modelValue: { type: [String, Number] as PropType<NavMenuKey | null>, default: undefined },
  /** 非受控初始选中 key。 */
  defaultValue: { type: [String, Number] as PropType<NavMenuKey | null>, default: null },
  /** 受控的具名 NavMenu.Item 激活项。 */
  activeItem: { type: [String, Number] as PropType<NavMenuKey | null>, default: undefined },
  /** 非受控的具名 NavMenu.Item 初始激活项。 */
  defaultActiveItem: { type: [String, Number] as PropType<NavMenuKey | null>, default: null },
  /** 展开分支 key。 */
  expandedKeys: { type: Array as PropType<NavMenuKey[]>, default: undefined },
  /** 非受控初始展开分支。 */
  defaultExpandedKeys: { type: Array as PropType<NavMenuKey[]>, default: () => [] },
  /** 初始展开所有分支。 */
  defaultExpandAll: Boolean,
  /** 选中项变更时展开祖先路径。 */
  autoExpandSelected: { type: Boolean, default: true },
  /** 同层只展开一个分支。 */
  accordion: Boolean,
  /** 纵向内联或横向浮层导航。 */
  mode: { type: String as PropType<NavMenuMode>, default: 'vertical', validator: (value: NavMenuMode) => orientations.includes(value) },
  /** 折叠为图标导航；未指定时跟随 Sider。 */
  collapsed: { type: Boolean, default: undefined },
  /** 非受控折叠初始值。 */
  defaultCollapsed: Boolean,
  /** 组件尺寸。 */
  size: { type: String as PropType<ComponentSize>, default: 'md', validator: (v: ComponentSize) => componentSizes.includes(v) },
  /** 全局禁用。 */
  disabled: Boolean,
  /** 字段映射。 */
  fieldNames: Object as PropType<NavMenuFieldNames>,
  /** 横向空间不足时收入更多菜单。 */
  responsive: { type: Boolean, default: true },
  /** 每层缩进像素。 */
  indent: { type: Number, default: 24 },
  /** 根节点缩进像素。 */
  rootIndent: { type: Number, default: 12 },
  /** 折叠宽度像素。 */
  collapsedWidth: { type: Number, default: 56 },
  /** 图标尺寸像素。 */
  iconSize: { type: Number, default: 20 },
  /** 浮层挂载位置。 */
  popupContainer: popupContainerProp,
  /** 浮层附加类名。 */
  popupClass: [String, Array, Object],
  /** 更多入口文字。 */
  overflowLabel: String,
  /** 菜单项 DOM 属性。 */
  nodeProps: Function as PropType<(context: NavMenuRenderContext) => Record<string, unknown>>,
}
