import type { CSSProperties, Slots, Ref } from 'vue'
import type { DropdownMenuProps } from './props'
import type { DropdownMenuViewOptions } from './view'
export interface OptionState { optionSelected: Ref<boolean>; disabled: Ref<boolean>; size: Ref<string>; isFocusing: Ref<boolean>; labelVNode: Ref<any> }
import { computed, h } from 'vue'
import Trigger, { triggerProps } from '../trigger'
import { getPrefixCls } from '../_utils/global-config'
import { toPxNum } from '../_utils/maple/elements'
import Scrollbar from '../scrollbar'
import Empty from '../empty'
import { IconRight } from '@cedarjs/icons-vue/icon-right'
export { Trigger }
export type { Reference as DropdownMenuReference } from '../trigger'
export type { TriggerPlacement as DropdownMenuPosition } from '../trigger'
export { componentSizes, type ComponentSize } from '../_utils/constant'
export const triggerPropDefaults = triggerProps
export type DropdownMenuSubmenuTrigger = 'click' | 'hover'
export function rootTriggerAppearance(props: DropdownMenuProps) {
  return { disabled: props.disabled, placement: props.placement, cover: props.cover, popupContainer: props.popupContainer, popupClass: props.popupClass,
    popupTranslate: [toPxNum(props.offsetX), toPxNum(props.offsetY)], popupOffset: 4, autoFitPopupWidth: props.autoFitPopupWidth,
    reference: props.reference, mouseEnterDelay: props.mouseEnterDelay, mouseLeaveDelay: props.mouseLeaveDelay, closeOnClickReference: props.closeOnClickReference,
    alignPoint: props.alignPoint, animationName: 'slide-dynamic-origin', autoFitTransformOrigin: true, openedClass: `${getPrefixCls('dropdown-menu')}-open` }
}
export function submenuTriggerAppearance() { return { popupOffset: 4, cascadeOptimization: true, mouseEnterDelay: menuDefaults.mouseEnterDelay, mouseLeaveDelay: menuDefaults.mouseLeaveDelay, closeOnClickReference: false } }
export function panelAppearance(props: { isEmpty: boolean; submenu: boolean }, slots: Slots, style?: CSSProperties): DropdownMenuViewOptions {
  const p = getPrefixCls('dropdown-menu')
  return { class: [p, { [`${p}-has-footer`]: !!slots.footer, [`${p}-submenu`]: props.submenu }], empty: props.isEmpty, emptyClass: `${p}-empty`, emptyContent: () => slots.empty?.() ?? h(Empty),
    scroll: Scrollbar, scrollClass: `${p}-list-wrapper`, scrollStyle: style, listTag: 'ul', listClass: `${p}-list`, footerClass: `${p}-footer` }
}
export function useOptionAppearance(props: { active: boolean; childrenTrigger: boolean }, state: OptionState, slots: Slots) {
  const p = getPrefixCls('dropdown-menu-option')
  return computed<DropdownMenuViewOptions>(() => ({ tag: 'li', class: [p, { [`${p}-disabled`]: state.disabled.value, [`${p}-active`]: props.active, [`${p}-selected`]: state.optionSelected.value, [`${p}-has-suffix`]: !!slots.suffix || props.childrenTrigger }],
    contentTag: 'span', contentClass: `${p}-content`, label: state.labelVNode.value,
    iconClass: `${p}-icon`, suffixClass: `${p}-suffix`, arrow: props.childrenTrigger && !slots.suffix ? () => h(IconRight) : undefined, arrowClass: `${p}-suffix` }))
}

export const rootPlatformProps = {}

/** Hover needs a grace period: the popup sits `popupOffset` away, so a zero delay closes it mid-travel. */
export const menuDefaults = { unmountOnClose: true, closeOnClickReference: true, mouseEnterDelay: 100, mouseLeaveDelay: 100, submenuTrigger: 'hover' as DropdownMenuSubmenuTrigger }
