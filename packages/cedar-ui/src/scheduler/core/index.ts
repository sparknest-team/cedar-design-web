export * from "./types";
import { SchedulerError } from "./types";
import type {
  SchedulerDate,
  SchedulerMode,
  SchedulerRange,
  SchedulerEvent,
  SchedulerChange,
  SchedulerConflict,
  SchedulerLayoutItem,
} from "./types";

export function schedulerDate(value: SchedulerDate): Date {
  // Date-only strings are local calendar days, not UTC midnights.
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [y, m, d] = value.split("-").map(Number);
    const result = new Date(y, m - 1, d);
    if (
      result.getFullYear() !== y ||
      result.getMonth() !== m - 1 ||
      result.getDate() !== d
    )
      return new Date(NaN);
    return result;
  }
  return new Date(value instanceof Date ? value.getTime() : value);
}
export function schedulerDay(value: SchedulerDate): Date {
  const date = schedulerDate(value);
  date.setHours(0, 0, 0, 0);
  return date;
}
export function addSchedulerDays(value: SchedulerDate, days: number): Date {
  const date = schedulerDate(value);
  date.setDate(date.getDate() + days);
  return date;
}
export function schedulerDateKey(value: SchedulerDate): string {
  const date = schedulerDate(value);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function getSchedulerRange(
  value: SchedulerDate,
  mode: SchedulerMode,
  firstDayOfWeek = 1,
): SchedulerRange {
  let start = schedulerDay(value);
  if (!Number.isFinite(+start))
    throw new SchedulerError("invalid-event", "Invalid display date");
  if (mode === "day" || mode === "resource-day")
    return { start, end: addSchedulerDays(start, 1) };
  if (mode === "month") start.setDate(1);
  const first = ((Math.trunc(firstDayOfWeek) % 7) + 7) % 7;
  start = addSchedulerDays(start, -((start.getDay() - first + 7) % 7));
  return { start, end: addSchedulerDays(start, mode === "month" ? 42 : 7) };
}
export function getSchedulerDays(range: SchedulerRange): Date[] {
  const days: Date[] = [];
  for (
    let date = schedulerDay(range.start);
    date < range.end;
    date = addSchedulerDays(date, 1)
  )
    days.push(date);
  return days;
}
export function navigateSchedulerDate(
  value: SchedulerDate,
  mode: SchedulerMode,
  direction: number,
): Date {
  const date = schedulerDate(value);
  if (mode !== "month")
    return addSchedulerDays(
      date,
      direction * (mode === "day" || mode === "resource-day" ? 1 : 7),
    );
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + direction);
  const last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, last));
  return date;
}
export function cloneSchedulerEvent(event: SchedulerEvent): SchedulerEvent {
  return {
    ...event,
    start: event.start instanceof Date ? new Date(event.start) : event.start,
    end: event.end instanceof Date ? new Date(event.end) : event.end,
    resourceIds: [...(event.resourceIds ?? [])],
  };
}
export function validateSchedulerEvent(event: SchedulerEvent): void {
  if (!event.id || !event.title.trim())
    throw new SchedulerError("invalid-event", "An id and title are required");
  if ((event.start == null) !== (event.end == null))
    throw new SchedulerError(
      "invalid-event",
      "Start and end must both be provided",
    );
  if (event.start == null) return;
  const start = schedulerDate(event.start);
  const end = schedulerDate(event.end!);
  if (!Number.isFinite(+start) || !Number.isFinite(+end) || end <= start)
    throw new SchedulerError("invalid-event", "End must be after start");
  if (
    event.allDay &&
    ![event.start, event.end].every(
      (value) => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value),
    )
  ) {
    throw new SchedulerError(
      "invalid-event",
      "All-day values must be date-only strings with an exclusive end",
    );
  }
}
export function isSchedulerEventInRange(
  event: SchedulerEvent,
  range: SchedulerRange,
): boolean {
  return (
    event.start != null &&
    event.end != null &&
    schedulerDate(event.start) < range.end &&
    schedulerDate(event.end) > range.start
  );
}
export function getSchedulerConflicts(
  event: SchedulerEvent,
  events: readonly SchedulerEvent[],
): SchedulerConflict[] {
  if (event.start == null || event.end == null) return [];
  return events.flatMap((other) => {
    const resourceIds = [...new Set(event.resourceIds ?? [])].filter((id) =>
      other.resourceIds?.includes(id),
    );
    return other.id !== event.id &&
      resourceIds.length &&
      isSchedulerEventInRange(other, {
        start: schedulerDate(event.start!),
        end: schedulerDate(event.end!),
      })
      ? [{ eventId: other.id, resourceIds }]
      : [];
  });
}
export function applySchedulerChange(
  events: readonly SchedulerEvent[],
  change: SchedulerChange,
): SchedulerEvent[] {
  const index = events.findIndex((item) => item.id === change.event.id);
  if (change.type === "create" && index >= 0)
    throw new SchedulerError("duplicate-id", "Event id already exists");
  if (change.type !== "create" && index < 0)
    throw new SchedulerError("missing-event", "Event no longer exists");
  if (index >= 0 && events[index].readonly)
    throw new SchedulerError("readonly", "Event is read-only");
  if (change.type !== "remove") validateSchedulerEvent(change.event);
  const next = events.map(cloneSchedulerEvent);
  if (change.type === "remove") next.splice(index, 1);
  else if (change.type === "create")
    next.push(cloneSchedulerEvent(change.event));
  else next[index] = cloneSchedulerEvent(change.event);
  return next;
}
export function moveSchedulerEvent(
  event: SchedulerEvent,
  start: SchedulerDate,
  fromResourceId?: string,
  toResourceId?: string,
): SchedulerEvent {
  const next = cloneSchedulerEvent(event);
  let resourceIds = next.resourceIds ?? [];
  if (toResourceId != null)
    resourceIds = [
      ...new Set([
        ...resourceIds.filter((id) => id !== fromResourceId),
        toResourceId,
      ]),
    ];
  next.resourceIds = resourceIds;
  if (event.allDay) {
    const oldStart =
      event.start == null ? schedulerDay(start) : schedulerDay(event.start);
    const oldEnd =
      event.end == null
        ? addSchedulerDays(oldStart, 1)
        : schedulerDay(event.end);
    // UTC calendar components count dates independent of DST day length.
    const utcDay = (d: Date) =>
      Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    const days = Math.max(
      1,
      Math.round((utcDay(oldEnd) - utcDay(oldStart)) / 86400000),
    );
    next.start = schedulerDateKey(start);
    next.end = schedulerDateKey(addSchedulerDays(start, days));
  } else {
    const duration =
      event.start != null && event.end != null
        ? +schedulerDate(event.end) - +schedulerDate(event.start)
        : 3600000;
    next.start = schedulerDate(start).toISOString();
    next.end = new Date(+schedulerDate(start) + duration).toISOString();
  }
  return next;
}
/** Pack connected overlap groups; adjacent events share a lane. Numbers are local minutes. */
export function layoutSchedulerEvents(
  events: readonly SchedulerEvent[],
  day: Date,
  startHour = 0,
  endHour = 24,
): SchedulerLayoutItem[] {
  const range = {
    start: schedulerDay(day),
    end: addSchedulerDays(schedulerDay(day), 1),
  };
  const minute = (date: Date) =>
    date <= range.start
      ? 0
      : date >= range.end
        ? 1440
        : date.getHours() * 60 + date.getMinutes();
  const items = events
    .filter((event) => !event.allDay && isSchedulerEventInRange(event, range))
    .map((event) => ({
      event,
      start: Math.max(startHour * 60, minute(schedulerDate(event.start!))),
      end: Math.min(endHour * 60, minute(schedulerDate(event.end!))),
      column: 0,
      columns: 1,
    }))
    .filter((item) => item.end > item.start)
    .sort(
      (a, b) =>
        a.start - b.start ||
        b.end - a.end ||
        a.event.id.localeCompare(b.event.id),
    );
  let group: SchedulerLayoutItem[] = [];
  let ends: number[] = [];
  const flush = () => {
    group.forEach((item) => {
      item.columns = ends.length;
    });
    group = [];
    ends = [];
  };
  for (const item of items) {
    if (ends.length && ends.every((end) => end <= item.start)) flush();
    let column = ends.findIndex((end) => end <= item.start);
    if (column < 0) column = ends.length;
    ends[column] = item.end;
    item.column = column;
    group.push(item);
  }
  flush();
  return items;
}

/** Timeline positions are fractions of the visible calendar-day range. */
export function layoutSchedulerTimeline(
  events: readonly SchedulerEvent[],
  range: SchedulerRange,
  granularity: "time" | "day" = "time",
): SchedulerLayoutItem[] {
  const days = getSchedulerDays(range);
  const coordinate = (value: SchedulerDate) => {
    const date = schedulerDate(value);
    if (date <= range.start) return 0;
    if (date >= range.end) return 1;
    const index = days.findIndex(
      (day) => schedulerDateKey(day) === schedulerDateKey(date),
    );
    return (
      (index + (date.getHours() * 60 + date.getMinutes()) / 1440) / days.length
    );
  };
  const ends: number[] = [];
  const items = events
    .filter((event) => isSchedulerEventInRange(event, range))
    .map((event) => ({
      event,
      start: coordinate(
        granularity === "day" ? schedulerDay(event.start!) : event.start!,
      ),
      end: coordinate(
        granularity === "day" &&
          +schedulerDate(event.end!) !== +schedulerDay(event.end!)
          ? addSchedulerDays(schedulerDay(event.end!), 1)
          : event.end!,
      ),
      column: 0,
      columns: 1,
    }))
    .sort(
      (a, b) =>
        a.start - b.start ||
        b.end - a.end ||
        a.event.id.localeCompare(b.event.id),
    );
  for (const item of items) {
    let lane = ends.findIndex((end) => end <= item.start);
    if (lane < 0) lane = ends.length;
    ends[lane] = item.end;
    item.column = lane;
  }
  items.forEach((item) => {
    item.columns = Math.max(1, ends.length);
  });
  return items;
}
