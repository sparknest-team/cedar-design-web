import type { PopoverPlacement } from "../../popover";
interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}
/** Viewport coordinates. Prefer an intact side/corner before clamping. */
export function getEventSummaryPosition(
  card: Rect,
  popup: { width: number; height: number },
  viewport: Rect,
  gap = 10,
  margin = 8,
) {
  const left = viewport.left + margin,
    top = viewport.top + margin;
  const right = Math.max(left, viewport.right - margin),
    bottom = Math.max(top, viewport.bottom - margin);
  const width = Math.min(popup.width, Math.max(0, right - left)),
    height = Math.min(popup.height, Math.max(0, bottom - top));
  const candidates: { placement: PopoverPlacement; x: number; y: number }[] = [
    { placement: "right-start", x: card.right + gap, y: card.top },
    { placement: "left-start", x: card.left - gap - width, y: card.top },
    { placement: "right-end", x: card.right + gap, y: card.bottom - height },
    {
      placement: "left-end",
      x: card.left - gap - width,
      y: card.bottom - height,
    },
  ];
  const fitsX = (c: { x: number }) => c.x >= left && c.x + width <= right;
  const fitsY = (c: { y: number }) => c.y >= top && c.y + height <= bottom;
  let chosen = candidates.find((c) => fitsX(c) && fitsY(c));
  if (!chosen) {
    const sides = candidates.filter(fitsX);
    if (sides.length) {
      const overflow = (c: { y: number }) =>
        Math.max(0, top - c.y) + Math.max(0, c.y + height - bottom);
      chosen = sides.reduce((best, c) =>
        overflow(c) < overflow(best) ? c : best,
      );
    } else {
      const below = {
        placement: "bottom-start" as const,
        x: card.left,
        y: card.bottom + gap,
      };
      const above = {
        placement: "top-start" as const,
        x: card.left,
        y: card.top - gap - height,
      };
      chosen = fitsY(below)
        ? below
        : fitsY(above)
          ? above
          : bottom - card.bottom >= card.top - top
            ? below
            : above;
    }
  }
  return {
    ...chosen,
    x: Math.min(Math.max(chosen.x, left), right - width),
    y: Math.min(Math.max(chosen.y, top), bottom - height),
    width,
    height,
  };
}
