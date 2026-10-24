import { schedulerDate, schedulerDateKey } from "./base";
import type { SchedulerDate } from "./types";

/** Local wall-clock percentage on the same time grid as event layout. */
export function getSchedulerNowPosition(
  now: SchedulerDate,
  day: SchedulerDate,
  startHour = 0,
  endHour = 24,
): number | undefined {
  const time = schedulerDate(now),
    date = schedulerDate(day);
  if (
    !Number.isFinite(+time) ||
    !Number.isFinite(+date) ||
    !Number.isInteger(startHour) ||
    !Number.isInteger(endHour) ||
    startHour < 0 ||
    endHour > 24 ||
    endHour <= startHour ||
    schedulerDateKey(time) !== schedulerDateKey(date)
  )
    return undefined;
  const minute =
    time.getHours() * 60 + time.getMinutes() + time.getSeconds() / 60;
  if (minute < startHour * 60 || minute >= endHour * 60) return undefined;
  return ((minute - startHour * 60) / ((endHour - startHour) * 60)) * 100;
}
