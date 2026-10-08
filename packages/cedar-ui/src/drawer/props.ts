import type { CSSProperties, PropType, StyleValue } from 'vue'
import { popupContainerProp } from '../_utils/popup-container'
import type { ButtonProps } from '../button'
import type { DrawerAction, DrawerBeforeCloseRefs } from './types'

export const DRAWER_PLACEMENTS = ['top', 'right', 'bottom', 'left'] as const
export type DrawerPlacement = (typeof DRAWER_PLACEMENTS)[number]

export const drawerProps = {
  /** 抽屉是否可见。 */
  open: { type: Boolean, default: undefined },
  /** 非受控模式下是否默认可见。 */
  defaultOpen: { type: Boolean, default: false },
  /** 抽屉出现的位置。 */
  placement: {
    type: String as PropType<DrawerPlacement>,
    default: 'right',
    validator: (value: DrawerPlacement) => DRAWER_PLACEMENTS.includes(value),
  },
  /** 标题。 */
  title: String,
  /** 是否显示遮罩。 */
  overlay: { type: Boolean, default: true },
  /** 遮罩类名。 */
  overlayClass: String,
  /** 遮罩样式。 */
  overlayStyle: Object as PropType<CSSProperties>,
  /** 点击遮罩是否关闭。 */
  overlayClosable: { type: Boolean, default: true },
  /** 是否显示关闭按钮。 */
  closable: { type: Boolean, default: true },
  /** 确认按钮文字。 */
  confirmButtonText: String,
  /** 取消按钮文字。 */
  cancelButtonText: String,
  /** 确认按钮是否加载中。 */
  confirmButtonLoading: { type: Boolean, default: false },
  /** 取消按钮是否加载中。 */
  cancelButtonLoading: { type: Boolean, default: false },
  /** 确认按钮是否禁用。 */
  confirmButtonDisabled: { type: Boolean, default: false },
  /** 取消按钮是否禁用。 */
  cancelButtonDisabled: { type: Boolean, default: false },
  /** 确认按钮属性。 */
  confirmButtonProps: Object as PropType<ButtonProps>,
  /** 取消按钮属性。 */
  cancelButtonProps: Object as PropType<ButtonProps>,
  /** 关闭动画结束后是否卸载内容。 */
  unmountOnClose: { type: Boolean, default: false },
  /** 左右抽屉宽度。 */
  width: { type: [Number, String], default: 250 },
  /** 上下抽屉高度。 */
  height: { type: [Number, String], default: 250 },
  /** 弹层挂载容器。 */
  popupContainer: popupContainerProp,
  /** 抽屉面板类名。 */
  drawerClass: [String, Array] as PropType<string | any[]>,
  /** 抽屉面板样式。 */
  drawerStyle: Object as PropType<CSSProperties>,
  /** 内容区类名。 */
  bodyClass: [String, Array] as PropType<string | any[]>,
  /** 内容区样式。 */
  bodyStyle: [String, Object, Array] as PropType<StyleValue>,
  /** 关闭前控制钩子。调用 done 后才提交关闭。 */
  beforeClose: Function as PropType<(
    action: DrawerAction,
    done: () => void,
    refs: DrawerBeforeCloseRefs,
  ) => void>,
  /** 是否允许 ESC 关闭。 */
  escToClose: { type: Boolean, default: true },
  /** 是否锁定挂载容器滚动。 */
  lockScroll: { type: Boolean, default: true },
  /** 路由变化时是否关闭。 */
  closeOnRouteChange: { type: Boolean, default: false },
  /** 遮罩动画名称。 */
  overlayAnimationName: { type: String, default: 'fade-drawer' },
  /** 是否显示头部。 */
  header: { type: Boolean, default: true },
  /** 是否显示底部。 */
  footer: { type: Boolean, default: true },
  /** 是否显示取消按钮。 */
  cancelButton: { type: Boolean, default: true },
  /** 抽屉无可见标题时的可访问名称。 */
  ariaLabel: String,
  /** 关闭按钮的可访问名称。 */
  closeButtonAriaLabel: { type: String, default: 'Close drawer' },
  /** 自定义层级。 */
  zIndex: Number,
}

export type DrawerProps = import('vue').ExtractPublicPropTypes<typeof drawerProps>
