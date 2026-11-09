/** Owns the suppression window for programmatic map moves. */
export function createMapUpdateGuard(setUpdating: (active: boolean) => void) {
  let generation = 0
  let disposed = false
  let timer: ReturnType<typeof setTimeout> | undefined
  const current = (token: number) => !disposed && token === generation
  const clear = () => {
    if (timer !== undefined) clearTimeout(timer)
    timer = undefined
  }
  return {
    begin() {
      clear()
      const token = ++generation
      if (!disposed) setUpdating(true)
      return token
    },
    current,
    finish(token: number) {
      if (!current(token)) return
      clear()
      setUpdating(false)
    },
    releaseAfter(token: number, delay: number) {
      if (!current(token)) return
      clear()
      timer = setTimeout(() => {
        timer = undefined
        if (current(token)) setUpdating(false)
      }, delay)
    },
    dispose() {
      disposed = true
      generation++
      clear()
    },
  }
}
