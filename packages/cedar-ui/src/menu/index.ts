import { withInstall } from '../_utils/global-config'
import _Menu from './Menu.vue'
import _MenuOption from './MenuOption.vue'
import { menuProps } from './props'

const Menu = withInstall(_Menu, Object.assign(_Menu, {
  Option: _MenuOption,
}), { components: [_Menu, _MenuOption] })

export type MenuInstance = InstanceType<typeof _Menu>
export type MenuOptionInstance = InstanceType<typeof _MenuOption>
export type { MenuProps, MenuPosition, MenuValue, MenuOptionData, MenuFieldNames, MenuContent, MenuRenderContext, MenuOptionLabel, MenuOptionLabelRender } from './types'

export {
  Menu,
  _MenuOption as MenuOption,
}

export const _MenuComponent = Menu
export const _MenuOptionComponent = _MenuOption

export { menuProps }

export default Menu

export { menuOptionProps } from './option-props'
export type { MenuOptionProps } from './option-props'

export type { MenuStrategy, MenuSubmenuTrigger, MenuReference } from './types'

export type { MenuSlots, MenuOptionSlots } from './types'
