/** Framework-independent scheduling contracts. All ranges are [start, end). */
export type SchedulerDate = Date | string | number;
export const schedulerModes = [
  "day",
  "week",
  "month",
  "agenda",
  "resource-day",
  "resource-timeline",
] as const;
export type SchedulerMode = (typeof schedulerModes)[number];

export interface SchedulerResource {
  id: string;
  label: string;
  color?: string;
  disabled?: boolean;
}

/** One time block; taskId can associate multiple independently scheduled blocks. */
export interface SchedulerEvent {
  id: string;
  title: string;
  start?: SchedulerDate;
  end?: SchedulerDate;
  allDay?: boolean;
  resourceIds?: string[];
  taskId?: string;
  description?: string;
  color?: string;
  readonly?: boolean;
}

export interface SchedulerRange {
  start: Date;
  end: Date;
}
export interface SchedulerCell {
  date: Date;
  resourceId?: string;
}
export type SchedulerChangeType =
  "create" | "update" | "remove" | "move" | "resize";
export interface SchedulerChange {
  type: SchedulerChangeType;
  event: SchedulerEvent;
  previous?: SchedulerEvent;
}
export interface SchedulerConflict {
  eventId: string;
  resourceIds: string[];
}
export interface SchedulerChangeContext extends SchedulerChange {
  value: SchedulerEvent[];
  conflicts: SchedulerConflict[];
}
export type SchedulerErrorCode =
  | "invalid-event"
  | "duplicate-id"
  | "missing-event"
  | "readonly"
  | "conflict"
  | "stale"
  | "rejected";
export class SchedulerError extends Error {
  constructor(
    public code: SchedulerErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "SchedulerError";
  }
}
export interface SchedulerLayoutItem {
  event: SchedulerEvent;
  start: number;
  end: number;
  column: number;
  columns: number;
}
