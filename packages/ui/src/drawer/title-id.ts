import { getCurrentInstance, type VNode } from 'vue'
import { useId } from '../_utils/vue-compat'

// Raw render() service roots do not share Vue's per-root useId counter.
const serviceTitleIds = new WeakMap<VNode, string>()
let serviceSequence = 0

export function registerDrawerServiceTitle(vnode: VNode) {
  serviceTitleIds.set(vnode, `c-drawer-service-title-${++serviceSequence}`)
}

export function useDrawerTitleId(prefix: string) {
  const instance = getCurrentInstance()!
  const id = useId()
  return serviceTitleIds.get(instance.vnode) ?? `${prefix}-${id}-title`
}
