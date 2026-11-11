import { getSchedulerDays } from "./base";
import type { SchedulerRange } from "./types";

export function isValidSchedulerHiddenDays(days: readonly number[]): boolean {
  return (
    Array.isArray(days) &&
    days.every((day) => Number.isInteger(day) && day >= 0 && day <= 6) &&
    new Set(days).size < 7
  );
}
/** Filter display dates without changing the continuous query or validation range. */
export function getSchedulerVisibleDays(
  range: SchedulerRange,
  hiddenDays: readonly number[] = [],
): Date[] {
  if (!isValidSchedulerHiddenDays(hiddenDays))
    throw new RangeError("At least one valid weekday must remain visible");
  if (
    !Number.isFinite(+range.start) ||
    !Number.isFinite(+range.end) ||
    +range.end <= +range.start
  )
    throw new RangeError("Invalid display range");
  const hidden = new Set(hiddenDays);
  return getSchedulerDays(range).filter((day) => !hidden.has(day.getDay()));
}
