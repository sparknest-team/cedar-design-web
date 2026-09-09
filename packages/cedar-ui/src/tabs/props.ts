import type { PropType } from 'vue'
import { computed, defineComponent, nextTick, provide, reactive, ref, toRefs, inject, toRef } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import type { TabVariant, TabData, TabTriggerEvent, ScrollPosition } from './types'
import { createNamespace } from '../_utils/global-config'
import { tabsInjectionKey, tabsNavInjectionKey } from './context'
import { isUndefined } from '../_utils/is'
import { useSize } from '../_hooks/use-size'
import { configProviderInjectionKey } from '../config-provider/context'

export const tabsProps = {
    /**
     * @zh 当前选中的标签的 `key`
     * @en The `key` of the currently selected label
     * @v-model
     */
    active: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * @zh 默认选中的标签的`key`（非受控状态，为空时选中第一个标签页）
     * @en The `key` of the tab selected by default (uncontrolled state, select the first tab page when it is empty)
     */
    defaultActive: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * @zh 指示器位置
     * @en Indicator position
     * @values 'normal', 'reverse'
     */
    indicatorPosition: {
      type: String as PropType<'normal' | 'reverse'>,
      default: 'normal',
    },
    /**
     * @zh 选项卡的大小
     * @en The size of the tab
     * @values 'xs', 'sm', 'md', 'lg', 'xl'
     * @default-value 'md'
     */
    size: {
      type: String as PropType<ComponentSize>,
    },
    /**
     * @zh 选项卡的变体
     * @en The variant of tab
     * @values 'line', 'card', 'outline', 'plain', 'capsule', 'enclosed'
     */
    variant: {
      type: String as PropType<TabVariant>,
      default: 'line',
    },
    /**
     * @zh 是否垂直展示
     * @en Whether to display vertically
     */
    orientation: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    /**
     * @zh 是否开启可编辑模式
     * @en Whether to enable editable mode
     */
    editable: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否显示增加按钮（仅在可编辑模式可用）
     * @en Whether to display the add button (only available in editable mode)
     */
    showAddButton: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在不显示标签时销毁内容
     * @en Whether to destroy the content when the label is not displayed
     * @version 2.27.0
     */
    destroyOnHide: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在首次展示标签时挂载内容
     * @en Whether to mount the content when the label is first displayed
     */
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 高度撑满容器，只在水平模式下生效。
     * @en The height of the container is fully supported, and it only takes effect in horizontal mode.
     */
    justify: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否开启选项内容过渡动画
     * @en Whether to enable option content transition animation
     */
    animation: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 选项卡头部是否存在水平边距。仅对 `type` 等于 `line`、`text` 类型的选项卡生效
     * @en Whether there is a horizontal margin on the header of the tab. Only valid for tabs with `type` equal to `line` and `text` type
     * @version 2.10.0
     */
    headerPadding: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 创建标签后是否切换到新标签（最后一个）
     * @en Whether to switch to a new tab after creating a tab (the last one)
     * @version 2.18.0
     */
    autoSwitch: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否隐藏内容
     * @en Whether to hide content
     * @version 2.25.0
     */
    hideContent: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click'
     * @version 2.34.0
     */
    trigger: {
      type: String as PropType<TabTriggerEvent>,
      default: 'click',
    },
    /**
     * @zh 被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整
     * @en The scroll position of the selected tab, the default auto will scroll the activeTab to the visible area, but will not adjust the position intentionally
     * @values 'start', 'end', 'center', 'auto', number
     */
    scrollPosition: {
      type: [String, Number] as PropType<ScrollPosition>,
      default: 'auto',
    },
  } 
