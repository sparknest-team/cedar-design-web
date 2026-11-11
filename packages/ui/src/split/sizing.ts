/** Supported sizes are finite nonnegative numeric ratios/pixels, px strings and percentages. */
export function parseSplitSize(value: unknown): { value: number; isPx: boolean } | undefined {
  if (typeof value === 'number') {
    return Number.isFinite(value) && value >= 0 ? { value, isPx: value > 1 } : undefined
  }
  if (typeof value !== 'string') return undefined
  const match = /^((?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)(px|%)?$/i.exec(value.trim())
  if (!match) return undefined
  const amount = Number(match[1])
  if (!Number.isFinite(amount)) return undefined
  const unit = match[2]?.toLowerCase()
  return { value: unit === '%' ? amount / 100 : amount, isPx: unit === 'px' || !unit && amount > 1 }
}
export const isSplitSize = (value: unknown) => parseSplitSize(value) !== undefined
export function splitSizeToPx(value: unknown, total: number, fallback: number | string): number {
  const parsed = parseSplitSize(value) ?? parseSplitSize(fallback)!
  return parsed.isPx ? parsed.value : parsed.value * total
}
/** The minimum wins a reversed range, but the container always wins over both bounds. */
export function splitBounds(min: unknown, max: unknown, total: number) {
  const lower = Math.min(total, Math.max(0, splitSizeToPx(min, total, 0)))
  const upper = Math.max(lower, Math.min(total, splitSizeToPx(max, total, 1)))
  return { min: lower, max: upper }
}
export function legalSplitSize(value: unknown, min: unknown, max: unknown, total: number) {
  const bounds = splitBounds(min, max, total)
  return Math.min(bounds.max, Math.max(bounds.min, splitSizeToPx(value, total, 0.5)))
}
