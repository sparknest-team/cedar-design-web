import type { ReadingDirection } from "../_utils/direction";

/** Screen coordinates stay physical; only horizontal time runs from inline start. */
export function schedulerPointerFraction(
  rect: Pick<DOMRect, "left" | "right" | "top" | "width" | "height">,
  x: number,
  y: number,
  horizontal: boolean,
  direction: ReadingDirection,
): number {
  const extent = horizontal ? rect.width : rect.height;
  if (extent <= 0) return 0;
  return (horizontal
    ? direction === "rtl" ? rect.right - x : x - rect.left
    : y - rect.top) / extent;
}

export function schedulerTimeEdge(
  rect: Pick<DOMRect, "left" | "right">,
  edge: string,
  direction: ReadingDirection,
): number {
  return (edge === "start") !== (direction === "rtl") ? rect.left : rect.right;
}
