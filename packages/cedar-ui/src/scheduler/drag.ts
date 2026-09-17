import {
  addSchedulerDays,
  cloneSchedulerEvent,
  moveSchedulerEvent,
  schedulerDate,
  schedulerDateKey,
} from "./core";
import type { SchedulerEvent } from "./core";

// true preserves the existing end-handle gesture; start is the upper handle.
export type SchedulerResize = boolean | "start";
export function projectSchedulerDrag(
  event: SchedulerEvent,
  at: Date,
  resize: SchedulerResize,
  step: number,
  startHour: number,
  fromResourceId?: string,
  toResourceId?: string,
  allDay?: boolean,
): SchedulerEvent | undefined {
  const start = new Date(at);
  if (!Number.isFinite(+start)) return;
  if (allDay === undefined && !event.allDay) {
    const oldStart =
      event.start == null ? undefined : schedulerDate(event.start);
    start.setHours(
      oldStart?.getHours() ?? startHour,
      oldStart?.getMinutes() ?? 0,
    );
  }
  if (resize && (event.milestone || event.resizable === false)) return;
  if (resize) {
    if (
      allDay !== false ||
      event.allDay ||
      event.start == null ||
      event.end == null
    )
      return;
    const next = cloneSchedulerEvent(event);
    if (resize === "start")
      next.start = new Date(
        Math.min(+start, +schedulerDate(event.end) - step * 60000),
      ).toISOString();
    else
      next.end = new Date(
        Math.max(
          +start + step * 60000,
          +schedulerDate(event.start) + step * 60000,
        ),
      ).toISOString();
    return next;
  }
  const next = moveSchedulerEvent(event, start, fromResourceId, toResourceId);
  if (allDay === true && !next.allDay) {
    next.allDay = true;
    next.start = schedulerDateKey(start);
    next.end = schedulerDateKey(addSchedulerDays(start, 1));
  }
  if (allDay === false && next.allDay) {
    next.allDay = false;
    next.start = start.toISOString();
    next.end = new Date(+start + step * 60000).toISOString();
  }
  return next;
}
