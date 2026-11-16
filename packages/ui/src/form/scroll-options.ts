// Keep this structural type aligned with scroll-into-view-if-needed without
// exposing its ESM-only declaration through the CommonJS Form declaration.
interface FormScrollAction {
  el: Element
  top: number
  left: number
}

interface FormScrollBaseOptions {
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
  scrollMode?: 'always' | 'if-needed'
  boundary?: Element | ((parent: Element) => boolean) | null
  skipOverflowHiddenElements?: boolean
}

export type FormScrollOptions = FormScrollBaseOptions & (
  | { behavior?: ScrollBehavior }
  | { behavior: (actions: FormScrollAction[]) => unknown }
)
