import type { ExtractPropTypes, PropType } from 'vue'
import { buttonGroupProps, buttonProps, type ButtonProps } from '../button'
import { menuProps } from '../menu'

export const splitButtonProps = {
  /** 菜单是否打开 */
  open: menuProps.open,
  /** 菜单默认是否打开 */
  defaultOpen: menuProps.defaultOpen,
  /** 是否禁用整个分裂按钮 */
  disabled: buttonGroupProps.disabled,
  /** 主按钮属性 */
  buttonProps: Object as PropType<Partial<ButtonProps>>,
  /** 菜单触发按钮属性 */
  triggerButtonProps: Object as PropType<Partial<ButtonProps>>,
  /** 按钮组主题色 */
  status: buttonGroupProps.status,
  /** 按钮组尺寸 */
  size: buttonGroupProps.size,
  /** 按钮组变体 */
  variant: buttonGroupProps.variant,
  /** 自定义背景色 */
  color: buttonGroupProps.color,
  /** 自定义文字色 */
  textColor: buttonGroupProps.textColor,
  /** 按钮组海拔阴影 */
  elevation: buttonGroupProps.elevation,
  /** 主按钮是否自动进入加载状态 */
  autoLoading: buttonProps.autoLoading,
  /** 菜单触发方式 */
  trigger: menuProps.trigger,
  /** 菜单弹出位置 */
  placement: menuProps.placement,
  /** 菜单挂载容器 */
  popupContainer: menuProps.popupContainer,
  /** 菜单最大高度 */
  popupMaxHeight: menuProps.popupMaxHeight,
  /** 选择菜单项后是否关闭菜单 */
  hideOnSelect: menuProps.hideOnSelect,
}

export type SplitButtonProps = ExtractPropTypes<typeof splitButtonProps>
