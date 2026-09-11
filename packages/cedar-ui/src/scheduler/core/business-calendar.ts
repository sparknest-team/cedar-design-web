import { schedulerDate, schedulerDateKey } from "./index";
import { SchedulerError } from "./types";
import type { SchedulerDate, SchedulerRange } from "./types";
import type { SchedulerDisabledRange } from "./availability";
export interface SchedulerCalendarOverride {
  date: string;
  working: boolean;
  label?: string;
}
export interface SchedulerBusinessCalendar {
  /** Default Monday–Friday; an empty array means no regular working days. */
  workingDays?: number[];
  overrides?: SchedulerCalendarOverride[];
}
/** Compile a detached lookup once for recurrence/availability scans. */
export function createSchedulerBusinessCalendar(
  calendar: SchedulerBusinessCalendar,
) {
  const weekdays = new Set(calendar.workingDays ?? [1, 2, 3, 4, 5]);
  const overrides = new Map<string, SchedulerCalendarOverride>();
  const fail = (): never => {
    throw new SchedulerError("invalid-event", "Invalid business calendar");
  };
  if ([...weekdays].some((day) => !Number.isInteger(day) || day < 0 || day > 6))
    fail();
  for (const entry of calendar.overrides ?? []) {
    const date = schedulerDate(entry.date);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(entry.date) ||
      !Number.isFinite(+date) ||
      schedulerDateKey(date) !== entry.date ||
      typeof entry.working !== "boolean" ||
      overrides.has(entry.date)
    )
      fail();
    overrides.set(entry.date, { ...entry });
  }
  return (date: Date) => {
    if (!Number.isFinite(+date)) fail();
    const override = overrides.get(schedulerDateKey(date));
    return {
      working: override?.working ?? weekdays.has(date.getDay()),
      label: override?.label,
    };
  };
}
export function isSchedulerWorkingDate(
  date: SchedulerDate,
  calendar: SchedulerBusinessCalendar,
): boolean {
  return createSchedulerBusinessCalendar(calendar)(schedulerDate(date)).working;
}
/** Adapt closed calendar dates to existing availability constraints. */
export function getSchedulerCalendarDisabledRanges(
  calendar: SchedulerBusinessCalendar,
  range: SchedulerRange,
  maxDays = 3660,
): SchedulerDisabledRange[] {
  const lookup = createSchedulerBusinessCalendar(calendar);
  if (
    !Number.isFinite(+range.start) ||
    !Number.isFinite(+range.end) ||
    range.end <= range.start ||
    !Number.isInteger(maxDays) ||
    maxDays < 1
  )
    throw new SchedulerError(
      "invalid-event",
      "Invalid business calendar range",
    );
  const cursor = new Date(range.start);
  cursor.setHours(0, 0, 0, 0);
  const result: SchedulerDisabledRange[] = [];
  let scanned = 0;
  while (cursor < range.end) {
    if (++scanned > maxDays)
      throw new SchedulerError(
        "invalid-event",
        "Business calendar scan limit exceeded",
      );
    const day = new Date(cursor);
    cursor.setDate(cursor.getDate() + 1);
    cursor.setHours(0, 0, 0, 0);
    const status = lookup(day);
    if (!status.working)
      result.push({
        id: `business-calendar:${schedulerDateKey(day)}`,
        start: day,
        end: new Date(cursor),
        label: status.label,
      });
  }
  return result;
}
