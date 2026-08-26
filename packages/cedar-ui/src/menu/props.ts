import { type PropType } from 'vue'
import { TriggerEvent } from '../_utils/constant'
import { MenuPosition, MenuValue } from './types'

export const menuProps = {
  /**
   * @zh 选中的值
   * @en Selected value
   * @vModel
   */
  modelValue: {
    type: [String, Number, Object] as PropType<MenuValue>,
  },
  /**
   * @zh 弹出框是否可见
   * @en Whether the popup is visible
   * @vModel
   */
  open: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 弹出框默认是否可见（非受控模式）
   * @en Whether the popup is visible by default (uncontrolled mode)
   */
  defaultOpen: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click','focus','contextMenu'
   */
  trigger: {
    type: [String, Array] as PropType<TriggerEvent | TriggerEvent[]>,
    default: 'click',
  },
  /**
   * @zh 弹出位置
   * @en Popup placement
   * @values 'top','tl','tr','bottom','bl','br'
   */
  placement: {
    type: String as PropType<MenuPosition>,
    default: 'bottom',
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>,
  },
  /**
   * @zh 弹出框最大高度
   * @en Maximum height of the popup
   */
  popupMaxHeight: {
    type: [Boolean, Number],
    default: true,
  },
  /**
   * @zh 是否在用户选择菜单项后隐藏弹出框
   * @en Whether to hide popup when the user selects a menu item
   */
  hideOnSelect: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 是否将弹出框宽度设置为触发器宽度
   * @en Whether to set the width of the popup to the width of the trigger
   */
  autoFitPopupWidth: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 弹出层是否跟随鼠标
   * @en Whether the popup follows the mouse
   */
  alignPoint: {
    type: Boolean,
    default: false,
  },
}
