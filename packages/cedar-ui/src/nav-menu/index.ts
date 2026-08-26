import { withInstall } from '../_utils/global-config'
import _NavMenu from './menu'
import _NavMenuItem from './item'
import _NavMenuItemGroup from './item-group.vue'
import _NavMenuSubMenu from './sub-menu'
import { navMenuProps } from './props'

const NavMenu = withInstall(_NavMenu, Object.assign(_NavMenu, {
  Item: _NavMenuItem,
  ItemGroup: _NavMenuItemGroup,
  SubMenu: _NavMenuSubMenu,
}), { components: [_NavMenu, _NavMenuItem, _NavMenuItemGroup, _NavMenuSubMenu] })

export type NavMenuInstance = InstanceType<typeof _NavMenu>
export type NavMenuItemInstance = InstanceType<typeof _NavMenuItem>
export type NavMenuItemGroupInstance = InstanceType<typeof _NavMenuItemGroup>
export type NavMenuSubMenuInstance = InstanceType<typeof _NavMenuSubMenu>
export type { NavMenuProps } from './types'

export { _NavMenuItem as NavMenuItem, _NavMenuItemGroup as NavMenuItemGroup, _NavMenuSubMenu as NavMenuSubMenu }

export const _NavMenuComponent = NavMenu

export { NavMenu }

export { navMenuProps }

export default NavMenu
