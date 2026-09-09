import type { CSSProperties, Slots, Ref } from 'vue'
import type { MenuProps } from './props'
import type { MenuViewOptions } from './render'
export interface OptionState { optionSelected: Ref<boolean>; optionIndeterminate: Ref<boolean>; disabled: Ref<boolean>; multiple: Ref<boolean>; size: Ref<string>; isFocusing: Ref<boolean>; labelVNode: Ref<any> }
import { computed, h } from 'vue'
import Trigger, { triggerProps } from '../trigger'
import { getPrefixCls } from '../_utils/global-config'
import { toPxNum } from '../_utils/maple/elements'
import Checkbox from '../checkbox'
import Scrollbar from '../scrollbar'
import Empty from '../empty'
import { IconRight } from '@cedarjs/icons-vue/icon-right'
export { Trigger }
export type { Reference as MenuReference } from '../trigger'
export type { TriggerPlacement as MenuPosition } from '../trigger'
export { componentSizes, type ComponentSize } from '../_utils/constant'
export const triggerPropDefaults = triggerProps
export const submenuTrigger = 'click'
export const checkboxActivation: 'click' | 'change' = 'change'
export function rootTriggerAppearance(props: MenuProps) {
  return { disabled: props.disabled, placement: props.placement, cover: props.cover, popupContainer: props.popupContainer, popupClass: props.popupClass,
    popupTranslate: [toPxNum(props.offsetX), toPxNum(props.offsetY)], popupOffset: 4, autoFitPopupWidth: props.autoFitPopupWidth,
    reference: props.reference, mouseEnterDelay: props.mouseEnterDelay, mouseLeaveDelay: props.mouseLeaveDelay, closeOnClickReference: props.closeOnClickReference,
    alignPoint: props.alignPoint, animationName: 'slide-dynamic-origin', autoFitTransformOrigin: true, openedClass: `${getPrefixCls('menu')}-open` }
}
export function submenuTriggerAppearance() { return { popupOffset: 4, cascadeOptimization: true, mouseEnterDelay: 0, mouseLeaveDelay: 0, closeOnClickReference: false } }
export function groupAppearance() {
  const p = getPrefixCls('menu-group')
  return { tag: 'li', class: p, titleClass: `${p}-title`, listTag: 'ul', listClass: `${p}-list` }
}
export function panelAppearance(props: { isEmpty: boolean; submenu: boolean }, slots: Slots, style?: CSSProperties): MenuViewOptions {
  const p = getPrefixCls('menu')
  return { class: [p, { [`${p}-has-footer`]: !!slots.footer, [`${p}-submenu`]: props.submenu }], empty: props.isEmpty, emptyClass: `${p}-empty`, emptyContent: () => slots.empty?.() ?? h(Empty),
    scroll: Scrollbar, scrollClass: `${p}-list-wrapper`, scrollStyle: style, listTag: 'ul', listClass: `${p}-list`, footerClass: `${p}-footer` }
}
export function useOptionAppearance(props: { active: boolean; childrenTrigger: boolean }, state: OptionState, slots: Slots) {
  const p = getPrefixCls('menu-option')
  return computed<MenuViewOptions>(() => ({ tag: 'li', class: [p, { [`${p}-disabled`]: state.disabled.value, [`${p}-active`]: props.active, [`${p}-selected`]: state.optionSelected.value, [`${p}-has-suffix`]: !!slots.suffix || props.childrenTrigger }],
    checkbox: Checkbox, checkboxProps: { uninjectGroupContext: true }, contentTag: 'span', contentClass: `${p}-content`, label: state.labelVNode.value,
    iconClass: `${p}-icon`, suffixClass: `${p}-suffix`, arrow: props.childrenTrigger && !slots.suffix ? () => h(IconRight) : undefined, arrowClass: `${p}-suffix` }))
}

export const rootPlatformProps = {}

export const menuDefaults = { unmountOnClose: true, closeOnClickReference: true }
