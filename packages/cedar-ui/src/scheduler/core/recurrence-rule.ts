import { createSchedulerBusinessCalendar } from "./business-calendar";
import { schedulerDate } from "./base";
import { SchedulerError } from "./types";
import type { SchedulerRecurrenceRule } from "./recurrence";
const dayNumber = (date: Date) =>
  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000;

/** Internal shared rule validation and calendar matching; no instance/exception state. */
export function createSchedulerRecurrenceMatcher(
  rule: SchedulerRecurrenceRule,
  start: Date,
): (date: Date) => boolean {
  const fail = (): never => {
    throw new SchedulerError("invalid-event", "Invalid recurrence rule");
  };
  const interval = rule.interval ?? 1;
  const calendar = rule.frequency === "monthly" || rule.frequency === "yearly";
  const ordinal = rule.weekOfMonth !== undefined;
  const business = rule.businessCalendar
    ? createSchedulerBusinessCalendar(rule.businessCalendar)
    : undefined;
  const weekdays = rule.daysOfWeek ?? [start.getDay()];
  if (
    (business !== undefined &&
      (!calendar || !ordinal || rule.daysOfWeek !== undefined)) ||
    !["daily", "weekly", "monthly", "yearly"].includes(rule.frequency) ||
    !Number.isInteger(interval) ||
    interval < 1 ||
    (rule.count !== undefined &&
      (!Number.isInteger(rule.count) || rule.count < 1)) ||
    (rule.daysOfWeek !== undefined &&
      rule.frequency !== "weekly" &&
      !(calendar && ordinal)) ||
    !weekdays.length ||
    weekdays.some((day) => !Number.isInteger(day) || day < 0 || day > 6) ||
    (!calendar &&
      (rule.dayOfMonth !== undefined ||
        ordinal ||
        rule.overflow !== undefined)) ||
    (rule.dayOfMonth !== undefined &&
      (!Number.isInteger(rule.dayOfMonth) ||
        (rule.dayOfMonth !== -1 &&
          (rule.dayOfMonth < 1 || rule.dayOfMonth > 31)))) ||
    (ordinal &&
      (!Number.isInteger(rule.weekOfMonth) ||
        (rule.weekOfMonth !== -1 &&
          (rule.weekOfMonth! < 1 || rule.weekOfMonth! > 5)))) ||
    (ordinal &&
      (rule.dayOfMonth !== undefined || rule.overflow !== undefined)) ||
    (rule.overflow !== undefined &&
      !["skip", "last-day"].includes(rule.overflow)) ||
    (rule.monthOfYear !== undefined &&
      (rule.frequency !== "yearly" ||
        !Number.isInteger(rule.monthOfYear) ||
        rule.monthOfYear < 1 ||
        rule.monthOfYear > 12))
  )
    fail();
  const until =
    rule.until === undefined ? Infinity : +schedulerDate(rule.until);
  if (Number.isNaN(until) || until < +start) fail();
  const weekStart = dayNumber(start) - ((start.getDay() + 6) % 7);
  return (date) => {
    if (rule.frequency === "daily")
      return (dayNumber(date) - dayNumber(start)) % interval === 0;
    if (rule.frequency === "weekly")
      return (
        Math.floor((dayNumber(date) - weekStart) / 7) % interval === 0 &&
        weekdays.includes(date.getDay())
      );
    if (rule.frequency === "monthly") {
      const months =
        (date.getFullYear() - start.getFullYear()) * 12 +
        date.getMonth() -
        start.getMonth();
      if (months % interval !== 0) return false;
    } else if (
      (date.getFullYear() - start.getFullYear()) % interval !== 0 ||
      date.getMonth() !== (rule.monthOfYear ?? start.getMonth() + 1) - 1
    )
      return false;
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    if (ordinal) {
      const firstWeekday = (date.getDay() - ((date.getDate() - 1) % 7) + 7) % 7;
      const candidates = Array.from(
        { length: days },
        (_, index) => index + 1,
      ).filter((day) => {
        if (!business) return weekdays.includes((firstWeekday + day - 1) % 7);
        const candidate = new Date(date);
        candidate.setDate(day);
        return business(candidate).working;
      });
      const target =
        rule.weekOfMonth === -1
          ? candidates[candidates.length - 1]
          : candidates[rule.weekOfMonth! - 1];
      return date.getDate() === target;
    }
    const requested = rule.dayOfMonth ?? start.getDate();
    const target =
      requested === -1 || rule.overflow === "last-day"
        ? Math.min(requested === -1 ? days : requested, days)
        : requested;
    return date.getDate() === target;
  };
}
