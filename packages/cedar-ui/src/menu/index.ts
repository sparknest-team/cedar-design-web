import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Menu from './menu.vue'
import _MenuOption from './menu-option.vue'
import _MenuGroup from './menu-group.vue'
import _MenuSubmenu from './menu-submenu.vue'
import _MenuButton from './menu-button.vue'

const Menu = Object.assign(_Menu, {
  Option: _MenuOption,
  Group: _MenuGroup,
  Submenu: _MenuSubmenu,
  Button: _MenuButton,
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Menu.name, _Menu)
    app.component(componentPrefix + _MenuOption.name, _MenuOption)
    app.component(componentPrefix + _MenuGroup.name, _MenuGroup)
    app.component(componentPrefix + _MenuSubmenu.name, _MenuSubmenu)
    app.component(componentPrefix + _MenuButton.name, _MenuButton)
  },
})

export type MenuInstance = InstanceType<typeof _Menu>
export type MenuOptionInstance = InstanceType<typeof _MenuOption>
export type MenuGroupInstance = InstanceType<typeof _MenuGroup>
export type MenuSubmenuInstance = InstanceType<typeof _MenuSubmenu>
export type MenuButtonInstance = InstanceType<typeof _MenuButton>

export type { MenuProps, MenuOptionData, MenuOptionConfig, MenuGroupConfig, MenuSubmenuConfig } from './types'

export {
  Menu,
  _MenuOption as MenuOption,
  _MenuGroup as MenuGroup,
  _MenuSubmenu as MenuSubmenu,
  _MenuButton as MenuButton,
}

export default Menu
