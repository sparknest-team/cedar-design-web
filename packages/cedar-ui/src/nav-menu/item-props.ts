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
  active: { type: Boolean, default: undefined },
  disabled: Boolean,
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  hideOnSelect: { type: Boolean, default: true },
  trigger: { ...triggerProps.trigger, default: 'click' },
  placement: { ...triggerProps.placement, default: 'bottom-start' },
  popupContainer: navMenuProps.popupContainer,
  popupClass: navMenuProps.popupClass,
  popupLayout: { type: String as PropType<'dropdown' | 'full-width' | 'full-height'>, default: 'dropdown' },
  popupStyle: Object as PropType<CSSProperties>,
  optionsMode: navMenuProps.mode,
}
export type NavMenuItemProps = import('vue').ExtractPublicPropTypes<typeof navMenuItemProps>
export interface NavMenuItemSlotContext {
  modelValue: import('./types').NavMenuKey | null
  selectedOption: import('./types').NavMenuOption | undefined
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
