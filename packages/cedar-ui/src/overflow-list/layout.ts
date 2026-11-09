export const isOverflowNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0
export const overflowMinimum = (value: unknown, total: number) => Math.min(total, isOverflowNumber(value) ? Math.floor(value) : 0)
export const overflowMargin = (value: unknown) => isOverflowNumber(value) ? value : 8
export const isOverflowFrom = (value: unknown): value is 'start' | 'end' => value === 'start' || value === 'end'
/** Inclusive layout budget with a subpixel CSSOM round-off allowance, not a one-pixel exclusion. */
export function visibleOverflowItems(widths: readonly number[], available: number, margin: number, overflow: number, min: number, from: 'start' | 'end') {
  const total = widths.length
  const minimum = overflowMinimum(min, total)
  const fits = (width: number) => width <= available + 0.001
  if (minimum === total || fits(widths.reduce((sum, width) => sum + width, 0) + margin * Math.max(0, total - 1))) return total
  let used = overflow, count = 0
  const ordered = from === 'start' ? [...widths].reverse() : widths
  for (const width of ordered) {
    const next = used + margin + width
    if (!fits(next)) break
    used = next; count++
  }
  return Math.max(minimum, count)
}
