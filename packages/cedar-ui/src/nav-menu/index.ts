import { withInstall } from '../_utils/global-config'
import _NavMenu from './menu'
import _NavMenuItem from './item'
export { navMenuItemProps } from './item-props'
export type { NavMenuItemProps, NavMenuItemSlotContext, NavMenuItemExposed } from './item-props'
const NavMenuItem = withInstall(_NavMenuItem)
export { NavMenuItem }
export type NavMenuItemInstance = InstanceType<typeof _NavMenuItem> & import('./item-props').NavMenuItemExposed
export const _NavMenuItemComponent = NavMenuItem
export { navMenuProps } from './props'
export type { NavMenuProps, NavMenuKey, NavMenuOption, NavMenuFieldNames, NavMenuContent, NavMenuRenderContext, NavMenuMode, NavMenuTheme, NavMenuPopupLayout, NavMenuExposed } from './types'
export const NavMenu = withInstall(_NavMenu, Object.assign(_NavMenu, { Item: NavMenuItem }), { components: [_NavMenu, _NavMenuItem] })
export type NavMenuInstance = InstanceType<typeof _NavMenu> & import('./types').NavMenuExposed
export const _NavMenuComponent = NavMenu
export default NavMenu
