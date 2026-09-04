import { withInstall } from '../_utils/global-config'
import _Menu from './menu.vue'
import _MenuOption from './menu-option.vue'
import _MenuGroup from './menu-group.vue'
import _MenuSubmenu from './menu-submenu.vue'
import { menuProps } from './props'

const Menu = withInstall(_Menu, Object.assign(_Menu, {
  Option: _MenuOption,
  Group: _MenuGroup,
  Submenu: _MenuSubmenu,
}), { components: [_Menu, _MenuOption, _MenuGroup, _MenuSubmenu] })

export type MenuInstance = InstanceType<typeof _Menu>
export type MenuOptionInstance = InstanceType<typeof _MenuOption>
export type MenuGroupInstance = InstanceType<typeof _MenuGroup>
export type MenuSubmenuInstance = InstanceType<typeof _MenuSubmenu>

export type { MenuProps, MenuPosition, MenuValue } from './types'

export {
  Menu,
  _MenuOption as MenuOption,
  _MenuGroup as MenuGroup,
  _MenuSubmenu as MenuSubmenu,
}

export const _MenuComponent = Menu
export const _MenuOptionComponent = _MenuOption
export const _MenuGroupComponent = _MenuGroup
export const _MenuSubmenuComponent = _MenuSubmenu

export { menuProps }

export default Menu
