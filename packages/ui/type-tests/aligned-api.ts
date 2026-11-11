import type { MenuProps, MenuStrategy, MenuSubmenuTrigger, CardProps, ProgressProps, SwitchProps, RateProps, AffixProps, BadgeProps, MessageProps, PopupContainer, FormProps, PaginationProps, TriggerProps } from '@cedar-design/ui-vue'

const card: CardProps = { variant: 'outline', size: 'sm', direction: 'row' }
const progress: ProgressProps[] = [{}, { size: 24 }, { size: '2rem' }, { size: 'xl' }]
const switches: SwitchProps[] = [{}, { size: 'lg' }]
const rate: RateProps = { size: '1.5rem' }
const affix: AffixProps = { offsetBottom: 0, cssMode: true }
const badge: BadgeProps = { status: 'danger' }
const target: PopupContainer = false
const message: MessageProps = { status: 'danger' }
const trigger: TriggerProps = { popupContainer: target, cover: true, placement: 'bottom-end' }
const form: FormProps = { model: {}, scrollToError: 'end', scrollToErrorOffsetY: 40 }
const pagination: PaginationProps = { total: 10 }
// @ts-expect-error Switch only implements sm/md/lg presets.
const badSwitch: SwitchProps = { size: 24 }
// @ts-expect-error Card does not implement lg.
const badCard: CardProps = { size: 'lg' }
// Form provides a fresh empty model by default; callers may omit it.
const optionalModel: FormProps = {}
// @ts-expect-error Required runtime inputs must remain required for callers.
const missingTotal: PaginationProps = {}
void [card, progress, switches, rate, affix, badge, message, trigger, form, pagination, badSwitch, badCard, optionalModel, missingTotal]

// Switch and Progress use the same public types on both platforms.
const fractionalProgress: ProgressProps = { percent: '12.5' }
const tonalSwitch: SwitchProps = { variant: 'tonal', readonly: true, beforeChange: async ({ value }) => value !== 'blocked' }
// @ts-expect-error Removed Maple alias; use line.
const oldVariant: SwitchProps = { variant: 'standard' }
// @ts-expect-error The callback completes with a boolean, not a payload object.
const oldInterceptor: SwitchProps = { beforeChange: (value, done) => done(value) }
// @ts-expect-error Shadow levels are numbers, not numeric strings.
const oldElevation: SwitchProps = { handleElevation: '4' }
void [fractionalProgress, tonalSwitch, oldVariant, oldInterceptor, oldElevation]


import NavMenu, { type NavMenuProps, type NavMenuOption, type NavMenuInstance } from '@cedar-design/ui-vue/nav-menu'
const navOptions: NavMenuOption[] = [{ key: 0, label: 'Home' }, { key: 'group', type: 'group', children: [{ key: 'leaf', label: ({ active }) => active ? 'Selected' : 'Leaf' }] }]
const navProps: NavMenuProps = { options: navOptions, modelValue: 0, expandedKeys: ['group'], mode: 'horizontal' }
const navMethods = (menu: NavMenuInstance) => { menu.showOption(0); menu.scrollTo('leaf'); menu.resize(); menu.setCollapsed(true) }
import { NavMenuItem } from '@cedar-design/ui-vue/nav-menu'
// @ts-expect-error old pop mode has been removed
const invalidNavMode: NavMenuProps = { mode: 'pop' }
// @ts-expect-error navigation is single selection
const invalidNavValue: NavMenuProps = { modelValue: ['leaf'] }
void navProps; void navMethods; void invalidNavMode; void invalidNavValue

import type { NavMenuItemProps, NavMenuItemInstance, NavMenuItemSlotContext } from '@cedar-design/ui-vue/nav-menu'
const independentItem: NavMenuItemProps = { options: navOptions, modelValue: 0, highlight: false, popupLayout: 'full-width' }
const itemMethods = (item: NavMenuItemInstance) => { item.close(); item.select(null); item.setOpen(true) }
const itemSlot = (slot: NavMenuItemSlotContext) => { slot.select('custom'); slot.close() }
// @ts-expect-error unknown panel layout
const invalidItem: NavMenuItemProps = { popupLayout: 'fullscreen' }
// @ts-expect-error labels now follow selection; use the label slot for manual rendering
const removedItemLabelSwitch: NavMenuItemProps = { updateLabel: true }

const menuStrategy: MenuStrategy = 'fixed'
const submenuTrigger: MenuSubmenuTrigger = 'click'
const positionedMenu: MenuProps = { strategy: menuStrategy, submenuTrigger }
const defaultMenu: MenuProps = {}
// @ts-expect-error strategy is not a CSS position free-form string
const invalidMenuStrategy: MenuStrategy = 'sticky'
void [positionedMenu, defaultMenu, invalidMenuStrategy]
