import { inject } from 'vue'
import { NavMenuContext, NavMenuInjectionKey } from '../context'

export default function useMenuContext(): Partial<NavMenuContext> {
  const menuContext = inject(NavMenuInjectionKey)
  return menuContext || {}
}
