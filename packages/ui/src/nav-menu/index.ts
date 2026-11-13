import { withInstall } from '../_utils/global-config'
import _NavMenu from './menu'
import _NavMenuItem from './item'
export { navMenuItemProps } from './item-props'
export type { NavMenuItemProps, NavMenuItemSlotContext, NavMenuItemExposed } from './item-props'
const NavMenuItem: import('../_utils/global-config').ComponentWithInstall<typeof _NavMenuItem> = withInstall(_NavMenuItem)
export { NavMenuItem }
export type NavMenuItemInstance = InstanceType<typeof _NavMenuItem> & import('./item-props').NavMenuItemExposed
export const _NavMenuItemComponent: typeof NavMenuItem = NavMenuItem
export { navMenuProps } from './props'
export type { NavMenuProps, NavMenuKey, NavMenuOption, NavMenuFieldNames, NavMenuContent, NavMenuRenderContext, NavMenuMode, NavMenuPopupLayout, NavMenuExposed } from './types'
export const NavMenu: import('../_utils/global-config').ComponentWithInstall<typeof _NavMenu & { Item: typeof NavMenuItem }> = withInstall(_NavMenu, Object.assign(_NavMenu, { Item: NavMenuItem }), { components: [_NavMenu, _NavMenuItem] })
export type NavMenuInstance = InstanceType<typeof _NavMenu> & import('./types').NavMenuExposed
export const _NavMenuComponent: typeof NavMenu = NavMenu
export default NavMenu
