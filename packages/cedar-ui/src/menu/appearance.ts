import { getRootTriggerOptions } from './trigger-options'
import type { MenuSubmenuTrigger } from './types'
import type { CSSProperties, Slots, Ref } from 'vue'
import type { MenuProps } from './props'
import type { MenuViewOptions } from './view'
export interface OptionState { optionSelected: Ref<boolean>; disabled: Ref<boolean>; size: Ref<string>; isFocusing: Ref<boolean>; labelVNode: Ref<any> }
import { computed, h } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import Scrollbar from '../scrollbar'
import Empty from '../empty'
import { IconRight } from '@cedarjs/icons-vue/icon-right'
export function rootTriggerAppearance(props: MenuProps) {
  return { ...getRootTriggerOptions(props), popupOffset: 4, animationName: 'slide-dynamic-origin', autoFitTransformOrigin: true, openedClass: `${getPrefixCls('menu')}-open` }
}
export function submenuTriggerAppearance() { return { popupOffset: 4, cascadeOptimization: true, mouseEnterDelay: menuDefaults.mouseEnterDelay, mouseLeaveDelay: menuDefaults.mouseLeaveDelay, closeOnClickReference: false } }
export function panelAppearance(props: { isEmpty: boolean; submenu: boolean }, slots: Slots, style?: CSSProperties): MenuViewOptions {
  const p = getPrefixCls('menu')
  return { class: [p, { [`${p}-has-footer`]: !!slots.footer, [`${p}-submenu`]: props.submenu }], empty: props.isEmpty, emptyClass: `${p}-empty`, emptyContent: () => slots.empty?.() ?? h(Empty),
    scroll: Scrollbar, scrollClass: `${p}-list-wrapper`, scrollStyle: style, listTag: 'ul', listClass: `${p}-list`, footerClass: `${p}-footer` }
}
export function useOptionAppearance(props: { active: boolean; childrenTrigger: boolean }, state: OptionState, slots: Slots) {
  const p = getPrefixCls('menu-option')
  return computed<MenuViewOptions>(() => ({ tag: 'li', class: [p, { [`${p}-disabled`]: state.disabled.value, [`${p}-active`]: props.active, [`${p}-selected`]: state.optionSelected.value, [`${p}-has-suffix`]: !!slots.suffix || props.childrenTrigger }],
    contentTag: 'span', contentClass: `${p}-content`, label: state.labelVNode.value,
    iconClass: `${p}-icon`, suffixClass: `${p}-suffix`, arrow: props.childrenTrigger && !slots.suffix ? () => h(IconRight) : undefined, arrowClass: `${p}-suffix` }))
}

/** Hover needs a grace period: the popup sits `popupOffset` away, so a zero delay closes it mid-travel. */
export const menuDefaults = { unmountOnClose: true, closeOnClickReference: true, mouseEnterDelay: 100, mouseLeaveDelay: 100, submenuTrigger: 'hover' as MenuSubmenuTrigger }
