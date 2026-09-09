import type { ComputedRef, InjectionKey, Ref, Slots } from 'vue'
import type { NavMenuKey, NavMenuNode, NavMenuProps, NavMenuRenderContext } from './types'
export interface NavMenuContext {
  props: NavMenuProps
  selected: ComputedRef<NavMenuKey | null>
  expanded: ComputedRef<NavMenuKey[]>
  collapsed: ComputedRef<boolean>
  theme: ComputedRef<string>
  activePath: ComputedRef<Set<NavMenuKey>>
  focusKey: Ref<NavMenuKey | undefined>
  slots: Slots
  context(node: NavMenuNode): NavMenuRenderContext
  select(node: NavMenuNode, event: Event): void
  expand(node: NavMenuNode, open: boolean): void
  register(node: NavMenuNode, element: HTMLElement | null): void
  focus(key: NavMenuKey): void
  registerItem(id: symbol, close: () => void): () => void
  activateItem(id?: symbol): void
  labelField: ComputedRef<string>
}
export const navMenuKey: InjectionKey<NavMenuContext> = Symbol('NavMenu')
