import { withInstall } from '../_utils/global-config'
import _Menu from './Menu.vue'
import _MenuOption from './MenuOption.vue'
import { menuProps } from './props'

const Menu: import('../_utils/global-config').CedarComponentWithInstall<typeof _Menu & { Option: typeof _MenuOption }> = withInstall(_Menu, Object.assign(_Menu, {
  Option: _MenuOption,
}), { components: [_Menu, _MenuOption] })

export type MenuInstance = InstanceType<typeof _Menu>
export type MenuOptionInstance = InstanceType<typeof _MenuOption>
export type { MenuProps, MenuPlacement, MenuValue, MenuOptionData, MenuFieldNames, MenuContent, MenuRenderContext, MenuOptionLabel, MenuOptionLabelRender } from './types'

export {
  Menu,
  _MenuOption as MenuOption,
}

export const _MenuComponent: typeof Menu = Menu
export const _MenuOptionComponent: typeof _MenuOption = _MenuOption

export { menuProps }
export type { MenuSize } from './props'

export default Menu

export { menuOptionProps } from './option-props'
export type { MenuOptionProps } from './option-props'

export type { MenuStrategy, MenuSubmenuTrigger, MenuReference } from './types'

export type { MenuSlots, MenuOptionSlots } from './types'
