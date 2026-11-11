// Private visual scroll policy: preserve300ms/quartOut, not a CSS completion timer.
export function slide(el: HTMLElement, top: number, cb: () => void, isCurrent = () => true): () => void {
  const view = el.ownerDocument.defaultView
  let active = true
  let frame: number | undefined
  let generation = 0
  const cancel = () => {
    active = false
    generation++
    if (frame !== undefined) view?.cancelAnimationFrame(frame)
    frame = undefined
  }
  const from = el.scrollTop
  const start = view?.performance.now() ?? 0
  const current = () => active && isCurrent() && el.ownerDocument.defaultView === view
  const reduced = () => typeof view?.matchMedia === 'function' && view.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finish = () => {
    if (!current()) return
    active = false
    generation++
    frame = undefined
    cb()
  }
  const schedule = () => {
    if (!view || !current()) return
    const request = ++generation
    frame = view.requestAnimationFrame((time) => {
      if (!current() || request !== generation) return
      generation++
      frame = undefined
      const progress = Math.min(1, Math.max(0, (time - start) / 300))
      const instant = reduced()
      if (!current()) return
      el.scrollTop = instant ? top : from + (top - from) * (1 - (1 - progress) ** 4)
      if (!current()) return
      if (instant || progress === 1) finish()
      else schedule()
    })
  }
  if (!Number.isFinite(from) || !Number.isFinite(top)) cancel()
  else if (!view || reduced()) {
    if (current()) {
      el.scrollTop = top
      finish()
    }
  } else schedule()
  return cancel
}
