import type { SchedulerDate, SchedulerEvent } from "./types";
import { schedulerDate, schedulerDateKey } from "./base";

export interface SchedulerWorkingHours {
  daysOfWeek: number[];
  startMinute: number;
  endMinute: number;
  resourceIds?: string[];
}
export interface SchedulerDateWorkingHours {
  date: string;
  intervals: { startMinute: number; endMinute: number }[];
  resourceIds?: string[];
}
export interface SchedulerDisabledRange {
  id: string;
  start: SchedulerDate;
  end: SchedulerDate;
  resourceIds?: string[];
  label?: string;
}
export interface SchedulerAvailabilityIssue {
  code: "outside-working-hours" | "disabled-range" | "invalid-config";
  resourceId?: string;
  rangeId?: string;
  label?: string;
}
export interface SchedulerAvailabilityOptions {
  workingHours?: readonly SchedulerWorkingHours[];
  dateWorkingHours?: readonly SchedulerDateWorkingHours[];
  disabledRanges?: readonly SchedulerDisabledRange[];
}
const global = (ids?: string[]) => !ids?.length;

/** Checks every assigned resource. No Vue, DOM, networking or input mutation. */
export function getSchedulerAvailabilityIssues(
  event: SchedulerEvent,
  options: SchedulerAvailabilityOptions,
): SchedulerAvailabilityIssue[] {
  if (event.start == null && event.end == null) return [];
  const start = schedulerDate(event.start!);
  const end = schedulerDate(event.end!);
  if (!Number.isFinite(+start) || !Number.isFinite(+end) || +end <= +start)
    return [{ code: "invalid-config" }];
  const hours = options.workingHours;
  const overrides = options.dateWorkingHours ?? [];
  const scopes = new Set<string>();
  for (const override of overrides) {
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(override.date) ||
      !Number.isFinite(+schedulerDate(override.date)) ||
      schedulerDateKey(schedulerDate(override.date)) !== override.date ||
      !Array.isArray(override.intervals) ||
      override.intervals.some(
        (w) =>
          !Number.isInteger(w.startMinute) ||
          !Number.isInteger(w.endMinute) ||
          w.startMinute < 0 ||
          w.endMinute > 1440 ||
          w.endMinute <= w.startMinute,
      )
    )
      return [{ code: "invalid-config" }];
    for (const id of override.resourceIds?.length
      ? override.resourceIds
      : [null]) {
      const key = JSON.stringify([override.date, id]);
      if (scopes.has(key)) return [{ code: "invalid-config" }];
      scopes.add(key);
    }
  }
  const blocked = options.disabledRanges ?? [];
  if (
    hours?.some(
      (h) =>
        !Array.isArray(h.daysOfWeek) ||
        h.daysOfWeek.some((d) => !Number.isInteger(d) || d < 0 || d > 6) ||
        !Number.isInteger(h.startMinute) ||
        !Number.isInteger(h.endMinute) ||
        h.startMinute < 0 ||
        h.endMinute > 1440 ||
        h.endMinute <= h.startMinute,
    ) ||
    blocked.some(
      (r) =>
        !Number.isFinite(+schedulerDate(r.start)) ||
        !Number.isFinite(+schedulerDate(r.end)) ||
        +schedulerDate(r.end) <= +schedulerDate(r.start),
    )
  )
    return [{ code: "invalid-config" }];
  const resources: (string | undefined)[] = event.resourceIds?.length
    ? [...new Set(event.resourceIds)]
    : [undefined];
  const issues: SchedulerAvailabilityIssue[] = [];
  for (const resourceId of resources) {
    for (const range of blocked) {
      if (
        (global(range.resourceIds) ||
          (resourceId !== undefined &&
            range.resourceIds!.includes(resourceId))) &&
        +start < +schedulerDate(range.end) &&
        +end > +schedulerDate(range.start)
      )
        issues.push({
          code: "disabled-range",
          resourceId,
          rangeId: range.id,
          label: range.label,
        });
    }
    if (event.allDay) continue;
    const specific =
      resourceId === undefined
        ? []
        : (hours ?? []).filter((h) => h.resourceIds?.includes(resourceId));
    const windows = specific.length
      ? specific
      : (hours ?? []).filter((h) => global(h.resourceIds));
    let cursor = +start;
    while (cursor < +end) {
      const day = new Date(cursor);
      day.setHours(0, 0, 0, 0);
      const tomorrow = new Date(day);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const limit = Math.min(+tomorrow, +end);
      const dateOverrides = overrides.filter(
        (w) => w.date === schedulerDateKey(day),
      );
      const override =
        dateOverrides.find(
          (w) =>
            resourceId !== undefined && w.resourceIds?.includes(resourceId),
        ) ?? dateOverrides.find((w) => global(w.resourceIds));
      const dailyWindows = override
        ? override.intervals
        : hours === undefined || (hours.length > 0 && !windows.length)
          ? [{ startMinute: 0, endMinute: 1440 }]
          : windows.filter((w) => w.daysOfWeek.includes(day.getDay()));
      const spans = dailyWindows
        .map((w) => {
          const a = new Date(day),
            b = new Date(day);
          a.setMinutes(w.startMinute);
          b.setMinutes(w.endMinute);
          return [+a, +b];
        })
        .sort((a, b) => a[0] - b[0]);
      let covered = cursor;
      for (const [a, b] of spans) {
        if (a > covered) break;
        if (b > covered) covered = b;
      }
      if (covered < limit) {
        issues.push({ code: "outside-working-hours", resourceId });
        break;
      }
      cursor = limit;
    }
  }
  return issues;
}
