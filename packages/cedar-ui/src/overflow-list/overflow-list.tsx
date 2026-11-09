import { cloneVNode, defineComponent, isVNode, normalizeClass, normalizeStyle, onActivated, onBeforeUnmount, onDeactivated, onMounted, onUpdated, ref, warn, watch, type VNode, type VNodeChild, type SlotsType } from 'vue'
import { useElementResize } from '../_utils/resize-observer'
import { getAllElements } from '../_utils/vue-utils'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import Tag from '../tag'
import { overflowListProps } from './props'
import { isOverflowFrom, overflowMargin, visibleOverflowItems } from './layout'
import { contentWidth, effectiveGap, outerWidth } from './measure'

type Shape = { type: VNode['type']; key: VNode['key']; props: [string, unknown][]; children: unknown }
type Item = { key: NonNullable<VNode['key']>; type: VNode['type']; shape: Shape; vnode: VNode; rendered?: VNode; width?: number; warned?: boolean }
function styleShape(value: unknown) {
  const normalized = normalizeStyle(value as Parameters<typeof normalizeStyle>[0])
  return normalized && typeof normalized === 'object' ? { ...normalized } : normalized
}
function childShape(value: unknown): unknown {
  return isVNode(value) ? shape(value) : Array.isArray(value) ? value.map(childShape) : typeof value === 'object' || typeof value === 'function' ? null : value
}
function shape(node: VNode): Shape {
  const props = Object.entries(node.props ?? {}).filter(([key]) => key !== 'key' && key !== 'ref' && !/^on[A-Z]/.test(key)).map(([key, value]): [string, unknown] => [key, key === 'class' ? normalizeClass(value) : key === 'style' ? styleShape(value) : value])
  return { type: node.type, key: node.key, props, children: childShape(node.children) }
}
function sameChildren(a: unknown, b: unknown): boolean {
  if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((child, i) => sameChildren(child, b[i]))
  if (a && b && typeof a === 'object' && typeof b === 'object') return sameShape(a as Shape, b as Shape)
  return Object.is(a, b)
}
function sameShape(a: Shape, b: Shape): boolean {
  if (a.type !== b.type || a.key !== b.key || a.props.length !== b.props.length) return false
  if (!a.props.every(([key, value], i) => {
    const other = b.props[i]
    if (key !== other[0]) return false
    if (key === 'style' && value && other[1] && typeof value === 'object' && typeof other[1] === 'object') {
      const left = value as Record<string, unknown>, right = other[1] as Record<string, unknown>
      const keys = Object.keys(left)
      return keys.length === Object.keys(right).length && keys.every(k => Object.is(left[k], right[k]))
    }
    return Object.is(value, other[1])
  })) return false
  return sameChildren(a.children, b.children)
}
const element = (node: VNode | undefined): Element | undefined => node?.el?.nodeType === 1 ? node.el as Element : undefined
export default defineComponent({
  name: createNamespace('overflow-list').name,
  props: overflowListProps,
  slots: Object as SlotsType<{ default?: () => VNode[]; overflow?: (props: { number: number }) => VNodeChild }>,
  /** @event change Hidden item count changed; notification only. */
  emits: { change: (value: number) => true },
  setup(props, { slots, emit }) {
    const prefixCls = getPrefixCls('overflow-list')
    const listRef = ref<HTMLElement>(), overflowRef = ref<HTMLElement>()
    const hidden = ref(0), revision = ref(0)
    const cache = new Map<NonNullable<VNode['key']>, Item>()
    const fallbackKeys: symbol[] = []
    const overflowKey = Symbol('overflow-indicator')
    let records: Item[] = [], displayed: Item[] = []
    let previousKeys: NonNullable<VNode['key']>[] = []
    let previousSlot = slots.default
    let measuring = true, renderedAll = true, active = true, disposed = false
    let upperBound = Infinity, lastWidth: number | undefined, lastGap: number | undefined, indicatorWidth = 0, operation = 0
    let mutation: MutationObserver | undefined
    let mutationBinding = 0
    const available = () => active && !disposed
    function invalidate() {
      if (!available()) return
      operation++
      measuring = true; upperBound = records.length
      revision.value++
    }
    function measure(external = false) {
      const root = listRef.value
      if (!available() || !root || !root.getClientRects().length || measuring && !renderedAll) return
      const token = ++operation
      const current = () => available() && listRef.value === root && token === operation
      const width = contentWidth(root), gap = effectiveGap(root, overflowMargin(props.margin), width)
      const sizes: [Item, number][] = []
      let changed = false, unknown = false
      for (const item of displayed) {
        const node = element(item.rendered)
        if (!node) { unknown = true; continue }
        const value = outerWidth(node)
        changed ||= item.width !== undefined && Math.abs(item.width - value) > 0.001
        sizes.push([item, value])
      }
      const overflow = overflowRef.value ? outerWidth(overflowRef.value) : 0
      changed ||= overflowRef.value !== undefined && Math.abs(indicatorWidth - overflow) > 0.001
      if (!current()) return
      const containerChanged = lastWidth !== undefined && Math.abs(lastWidth - width) > 0.001
      const gapChanged = lastGap !== undefined && Math.abs(lastGap - gap) > 0.001
      if (!renderedAll && (containerChanged || gapChanged || external && changed)) { invalidate(); return }
      for (const [item, value] of sizes) item.width = value
      lastWidth = width; lastGap = gap; indicatorWidth = overflow
      if (containerChanged || gapChanged || external && changed || measuring) upperBound = records.length
      if (unknown || records.some(item => item.width === undefined)) {
        for (const item of displayed) if (!element(item.rendered) && !item.warned) {
          item.warned = true
          if (process.env.NODE_ENV !== 'production') warn('[OverflowList] Items need a single measurable element root; keeping all content visible.')
        }
        upperBound = records.length
      }
      const count = unknown || records.some(item => item.width === undefined) ? records.length : Math.min(upperBound, visibleOverflowItems(records.map(item => item.width!), width, gap, overflow, props.min, isOverflowFrom(props.from) ? props.from : 'end'))
      if (!current()) return
      upperBound = count
      const wasMeasuring = measuring
      measuring = false
      const next = records.length - count, previous = hidden.value
      hidden.value = next
      if (wasMeasuring && next === previous && next > 0) revision.value++
      if (next !== previous && current()) emit('change', next)
    }
    useElementResize(() => [listRef.value, overflowRef.value, ...displayed.map(item => element(item.rendered))], () => true, () => measure(true))
    watch(() => [props.min, props.margin, props.from], invalidate, { flush: 'pre' })
    function bindMutation() {
      const binding = ++mutationBinding
      mutation?.disconnect()
      const root = listRef.value
      const Observer = root?.ownerDocument.defaultView?.MutationObserver
      if (root && Observer && available()) {
        mutation = new Observer(() => {
          const current = () => available() && binding === mutationBinding && listRef.value === root
          if (!current()) return
          measure(true)
          // Async component roots may change without resizing the list; refresh observed targets.
          if (current()) revision.value++
        })
        mutation.observe(root, { childList: true })
      }
    }
    onMounted(() => { bindMutation(); measure() })
    onUpdated(() => measure())
    onDeactivated(() => { active = false; operation++; mutationBinding++; mutation?.disconnect() })
    onActivated(() => {
      if (!disposed && !active) {
        active = true
        bindMutation()
        invalidate()
      }
    })
    onBeforeUnmount(() => { disposed = true; active = false; operation++; mutationBinding++; mutation?.disconnect(); cache.clear() })
    return () => {
      revision.value
      const nodes = getAllElements(slots.default?.())
      const seen = new Set<NonNullable<VNode['key']>>()
      let dirty = previousSlot !== slots.default
      previousSlot = slots.default
      records = nodes.map((vnode, index) => {
        fallbackKeys[index] ??= Symbol('overflow-item')
        let key = vnode.key ?? fallbackKeys[index]
        if (seen.has(key)) {
          if (process.env.NODE_ENV !== 'production') warn('[OverflowList] Item keys must be unique; using an index identity for the duplicate.')
          key = fallbackKeys[index]
        }
        seen.add(key)
        const next = shape(vnode), old = cache.get(key)
        if (!old || old.type !== vnode.type || !sameShape(old.shape, next)) { dirty = true; cache.set(key, { key, type: vnode.type, shape: next, vnode }) }
        const item = cache.get(key)!
        item.vnode = vnode; item.rendered = undefined
        return item
      })
      for (const key of cache.keys()) if (!seen.has(key)) cache.delete(key)
      const keys = records.map(item => item.key)
      if (keys.length !== previousKeys.length || keys.some((key, index) => key !== previousKeys[index])) dirty = true
      previousKeys = keys
      if (dirty) { measuring = true; upperBound = records.length }
      const number = Math.min(hidden.value, records.length)
      const from = isOverflowFrom(props.from) ? props.from : 'end'
      displayed = measuring ? records : from === 'start' ? records.slice(number) : records.slice(0, records.length - number)
      renderedAll = displayed.length === records.length
      const children = displayed.map(item => item.rendered = cloneVNode(item.vnode, { key: item.key }))
      const overflow = number > 0 ? <div key={overflowKey} ref={overflowRef} class={`${prefixCls}-overflow`}>{slots.overflow?.({ number }) ?? <Tag>+{number}</Tag>}</div> : null
      return <div ref={listRef} class={prefixCls} style={{ columnGap: `${overflowMargin(props.margin)}px` }}>{from === 'start' && overflow}{children}{from === 'end' && overflow}</div>
    }
  },
})
