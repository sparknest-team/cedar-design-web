import { nextTick, watch } from 'vue'
import { onActiveLifecycle } from './active-target'
import { canRestoreFocus, isTabStop } from './focusable'

const selector = 'a[href],button,input,select,textarea,[tabindex], [contenteditable]'
const focusOrigins = new WeakMap<HTMLElement, HTMLElement[]>()
type ScrollBranch = () => HTMLElement | undefined

export function useModalScrollBranch(_branch: ScrollBranch) {}

/** Modal ownership follows the popup stack, including teleported child Triggers. */
export function useModalFocus(
  root: () => HTMLElement | undefined,
  active: () => boolean,
  isTop: (event?: Event) => boolean,
  _lockScroll: () => boolean = () => true,
  ownerDocument?: () => Document | undefined,
  _isTopForScroll = isTop,
) {
  let previous: HTMLElement[] = []
  let element: HTMLElement | undefined
  let owner: Document | undefined
  let enabled = false
  let captured = false
  // A modal may live in an iframe while its opener lives in a same-origin
  // ancestor. Follow only accessible DOM focus chains, never global realm types.
  function readFocusChain() {
    let doc = owner
    let focused = doc?.activeElement as HTMLElement | null
    let owned = true
    try {
      while (doc) {
        const frame = doc.defaultView?.frameElement
        if (!frame) break
        doc = frame.ownerDocument
        if (doc.activeElement !== frame) {
          focused = doc.activeElement as HTMLElement | null
          if (focused !== doc.body) owned = false
        }
      }
    } catch {
      /* Stop at the accessible document boundary. */
    }
    return { focused, owned }
  }
  function focus() {
    const target = root()
    if (!enabled || !active() || !target || !isTop()) return
    element = target
    if (!target.contains((target.getRootNode() as Document | ShadowRoot).activeElement))
      target.focus({ preventScroll: true })
  }
  function focusAfterEnter() {
    const doc = root()?.ownerDocument
    const current = doc?.activeElement
    // The user may move focus while the opening transition is running.
    if (
      !current ||
      current === doc?.body ||
      current === doc?.documentElement ||
      previous.includes(current as HTMLElement)
    ) {
      focus()
    }
  }
  function restore() {
    const focused = owner?.activeElement
    const target = previous.find(canRestoreFocus)
    if (target && readFocusChain().owned && (!focused || focused === owner?.body || element?.contains(focused)))
      target.focus({ preventScroll: true })
    if (element) {
      focusOrigins.delete(element)
    }
    previous = []
    captured = false
  }
  function capture() {
    if (!owner) return
    if (!captured) {
      const { focused } = readFocusChain()
      // Snapshot ancestor modal origins before a lower layer can close first.
      // Its hidden trigger is skipped later; a still-visible ancestor is kept.
      previous = focused && typeof focused.focus === 'function' ? [focused] : []
      for (let node = focused; node; node = node.parentElement) {
        const origins = focusOrigins.get(node)
        if (origins) {
          previous.push(...origins)
          break
        }
      }
      const target = root()
      if (target) {
        focusOrigins.set(target, [...previous])
      }
      captured = true
    }
    nextTick(focus)
  }
  function trap(event: KeyboardEvent) {
    const target = root()
    if (event.key !== 'Tab' || event.defaultPrevented || !active() || !enabled || !target || !isTop(event)) return
    const items = Array.from(target.querySelectorAll<HTMLElement>(selector)).filter(isTabStop)
    // Positive tabindex precedes the natural/zero order; equal values retain DOM order.
    items.sort((left, right) => {
      const a = left.tabIndex > 0 ? left.tabIndex : 0
      const b = right.tabIndex > 0 ? right.tabIndex : 0
      return a && b ? a - b : a ? -1 : b ? 1 : 0
    })
    const focused = target.ownerDocument.activeElement
    const first = items[0],
      last = items[items.length - 1]
    if (
      !items.length ||
      !target.contains(focused) ||
      focused === target ||
      (event.shiftKey ? focused === first : focused === last)
    ) {
      event.preventDefault()
      ;(event.shiftKey ? last : first)?.focus({ preventScroll: true })
      if (!items.length) target.focus({ preventScroll: true })
    }
  }
  function bind() {
    owner = root()?.ownerDocument
    owner?.addEventListener('keydown', trap, true)
  }
  function unbind() {
    owner?.removeEventListener('keydown', trap, true)
  }
  watch(
    [active, root, () => ownerDocument?.() ?? root()?.ownerDocument],
    ([value]) => {
      if (!enabled) return
      if (root()?.ownerDocument !== owner) {
        unbind()
        bind()
      }
      if (value && (!captured || root() !== element)) capture()
    },
    { flush: 'post' },
  )
  onActiveLifecycle(
    () => {
      if (enabled) return
      enabled = true
      bind()
      if (active()) capture()
    },
    () => {
      enabled = false
      unbind()
      restore()
    },
  )
  return { focus, focusAfterEnter, restore, trap }
}
