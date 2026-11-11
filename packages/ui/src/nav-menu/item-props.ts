import type { CSSProperties, PropType } from 'vue'
import { navMenuProps } from './props'
import { triggerProps } from '../trigger/props'
export const navMenuItemProps = {
  /** 参与根菜单互斥激活的入口标识；省略时保持独立激活。 */
  name: { type: [String, Number] as PropType<import('./types').NavMenuKey> },
  label: { type: [String, Number, Object, Array, Function] as PropType<import('./types').NavMenuContent> },
  options: navMenuProps.options,
  modelValue: navMenuProps.modelValue,
  defaultValue: navMenuProps.defaultValue,
  fieldNames: navMenuProps.fieldNames,
  /** 入口的视觉高亮覆盖；不改变当前入口或选中值，省略时跟随业务 active。 */
  highlight: { type: Boolean, default: undefined },
  disabled: { type: Boolean, default: undefined },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  hideOnSelect: { type: Boolean, default: true },
  /** 关闭后卸载面板内容；默认保留首次展开后的状态。 */
  unmountOnClose: { type: Boolean, default: false },
  trigger: { ...triggerProps.trigger, default: 'click' },
  placement: { ...triggerProps.placement, default: 'bottom-start' },
  popupContainer: navMenuProps.popupContainer,
  popupClass: navMenuProps.popupClass,
  popupLayout: { type: String as PropType<import('./types').NavMenuPopupLayout>, default: 'dropdown' },
  popupStyle: Object as PropType<CSSProperties>,
  optionsMode: navMenuProps.mode,
}
export type NavMenuItemProps = import('vue').ExtractPublicPropTypes<typeof navMenuItemProps>
export interface NavMenuItemSlotContext {
  modelValue: import('./types').NavMenuKey | null
  selectedOption: import('./types').NavMenuOption | undefined
  /** 业务当前入口；独立于 highlight 和 open。 */
  active: boolean
  open: boolean
  select: (key: import('./types').NavMenuKey | null, event?: Event) => void
  close: () => void
}

export interface NavMenuItemExposed {
  close(): void
  select(key: import('./types').NavMenuKey | null, event?: Event): void
  setOpen(open: boolean): void
}
