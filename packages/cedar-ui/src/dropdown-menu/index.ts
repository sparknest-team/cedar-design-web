import { withInstall } from '../_utils/global-config'
import _DropdownMenu from './dropdown-menu.vue'
import _MenuOption from './menu-option.vue'
import { dropdownMenuProps } from './props'

const DropdownMenu = withInstall(_DropdownMenu, Object.assign(_DropdownMenu, {
  Option: _MenuOption,
}), { components: [_DropdownMenu, _MenuOption] })

export type DropdownMenuInstance = InstanceType<typeof _DropdownMenu>
export type MenuOptionInstance = InstanceType<typeof _MenuOption>
export type { DropdownMenuProps, DropdownMenuPosition, MenuValue, DropdownMenuOption, DropdownMenuFieldNames, DropdownMenuContent, DropdownMenuRenderContext, MenuOptionLabel, MenuOptionLabelRender } from './types'

export {
  DropdownMenu,
  _MenuOption as MenuOption,
}

export const _DropdownMenuComponent = DropdownMenu
export const _MenuOptionComponent = _MenuOption

export { dropdownMenuProps }

export default DropdownMenu

export { menuOptionProps } from './option-props'
export type { MenuOptionProps } from './option-props'
