import { schedulerDate } from "./index";
import type { SchedulerDate, SchedulerRange } from "./types";
/** Resolve a pointer inside a displayed cell to a snapped local minute. */
export function getSchedulerCellDate(
  value: SchedulerDate,
  duration: number,
  fraction: number,
  snap: number,
): Date {
  if (
    !Number.isFinite(duration) ||
    duration <= 0 ||
    !Number.isFinite(snap) ||
    snap <= 0 ||
    !Number.isFinite(fraction)
  )
    throw new RangeError("Invalid cell interval");
  const date = schedulerDate(value);
  if (!Number.isFinite(+date)) throw new RangeError("Invalid cell date");
  const minutes = Math.max(0, Math.min(0.999999, fraction)) * duration;
  // Anchor to the actual cell instant: arbitrary intervals cannot snap before
  // the cell, and a repeated DST hour keeps its original UTC offset.
  date.setTime(+date + Math.floor(minutes / snap) * snap * 60000);
  return date;
}
export function getSchedulerSelectionRange(
  from: SchedulerDate,
  to: SchedulerDate,
  snap: number,
): SchedulerRange {
  const a = +schedulerDate(from),
    b = +schedulerDate(to);
  if (
    !Number.isFinite(a) ||
    !Number.isFinite(b) ||
    !Number.isFinite(snap) ||
    snap <= 0
  )
    throw new RangeError("Invalid selection range");
  return {
    start: new Date(Math.min(a, b)),
    end: new Date(Math.max(a, b) + snap * 60000),
  };
}
