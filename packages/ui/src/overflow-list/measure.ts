const pixels = (value: string | undefined) => Number.parseFloat(value ?? '') || 0
export function contentWidth(element: HTMLElement): number {
  const style = element.ownerDocument.defaultView?.getComputedStyle(element)
  if (!style) return element.clientWidth
  const padding = pixels(style.paddingLeft) + pixels(style.paddingRight)
  const border = pixels(style.borderLeftWidth) + pixels(style.borderRightWidth)
  const width = Number.parseFloat(style.width)
  return Math.max(0, Number.isFinite(width) ? width - (style.boxSizing === 'border-box' ? padding + border : 0) : element.clientWidth - padding)
}
export function outerWidth(element: Element): number {
  const style = element.ownerDocument.defaultView?.getComputedStyle(element)
  if (style?.display === 'none') return 0
  const measured = Number.parseFloat(style?.width ?? '')
  const padding = pixels(style?.paddingLeft) + pixels(style?.paddingRight)
  const border = pixels(style?.borderLeftWidth) + pixels(style?.borderRightWidth)
  const box = Number.isFinite(measured) ? measured + (style?.boxSizing === 'border-box' ? 0 : padding + border) : (element as HTMLElement).offsetWidth ?? element.getBoundingClientRect().width
  return Math.max(0, box + pixels(style?.marginLeft) + pixels(style?.marginRight))
}
export function effectiveGap(element: HTMLElement, fallback: number, available: number): number {
  const value = element.ownerDocument.defaultView?.getComputedStyle(element).columnGap ?? ''
  if (value === 'normal') return 0
  if (/^[\d.]+px$/.test(value)) return pixels(value)
  if (/^[\d.]+%$/.test(value)) return available * pixels(value) / 100
  return fallback
}
