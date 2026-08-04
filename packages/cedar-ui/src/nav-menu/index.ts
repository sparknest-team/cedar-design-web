import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _NavMenu from './menu'
import _NavMenuItem from './item'
import _NavMenuItemGroup from './item-group.vue'
import _NavMenuSubMenu from './sub-menu'

const NavMenu = Object.assign(_NavMenu, {
  Item: _NavMenuItem,
  ItemGroup: _NavMenuItemGroup,
  SubMenu: _NavMenuSubMenu,
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _NavMenu.name, _NavMenu)
    app.component(componentPrefix + _NavMenuItem.name, _NavMenuItem)
    app.component(componentPrefix + _NavMenuItemGroup.name, _NavMenuItemGroup)
    app.component(componentPrefix + _NavMenuSubMenu.name, _NavMenuSubMenu)
  },
})

export type NavMenuInstance = InstanceType<typeof _NavMenu>
export type NavMenuItemInstance = InstanceType<typeof _NavMenuItem>
export type NavMenuItemGroupInstance = InstanceType<typeof _NavMenuItemGroup>
export type NavMenuSubMenuInstance = InstanceType<typeof _NavMenuSubMenu>
export type { NavMenuProps } from './types'

export { _NavMenuItem as NavMenuItem, _NavMenuItemGroup as NavMenuItemGroup, _NavMenuSubMenu as NavMenuSubMenu }

export default NavMenu
