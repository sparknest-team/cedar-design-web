import type { NavMenuRenderContext } from '..'
import type { NavMenuItemProps, NavMenuItemSlotContext } from '../item-props'
export const visual: NavMenuItemProps = { highlight: false }
// @ts-expect-error visual active prop was removed
export const oldVisual: NavMenuItemProps = { active: true }
export function checkActive(context: NavMenuRenderContext, entry: NavMenuItemSlotContext) {
  const active: boolean = context.active
  const entryActive: boolean = entry.active
  // @ts-expect-error selected was replaced by exact active
  void context.selected
  // @ts-expect-error ancestor selection remains private
  void context.hasSelectedDescendant
  return [active, entryActive]
}
