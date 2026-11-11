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
export type SchedulerEventBackgroundPattern =
  "solid" | "diagonal-stripes" | "dots" | "crosshatch";

export interface SchedulerResource {
  id: string;
  /** Resource IDs remain globally unique across dimensions. */
  dimensionId?: string;
  label: string;
  color?: string;
  disabled?: boolean;
  /** Maximum simultaneous events; omitted means unlimited, zero closes assignments. */
  capacity?: number;
}

export interface SchedulerAssignmentDetails {
  /** Capacity units consumed by this event; defaults to 1. */
  units?: number;
  role?: string;
}
export type SchedulerRulePolicy = Partial<
  Record<"capacity" | "unavailable" | "conflict", "allow" | "warn" | "block">
>;

/** One time block. Application relationships belong in metadata. */
export interface SchedulerEvent {
  id: string;
  title: string;
  start?: SchedulerDate;
  end?: SchedulerDate;
  allDay?: boolean;
  /** A timed, zero-duration checkpoint; consumes no capacity. */
  milestone?: boolean;
  resourceIds?: string[];
  /** Optional metadata, keyed by the same globally unique resource IDs. */
  resourceDetails?: Record<string, SchedulerAssignmentDetails>;
  /** Adjacent/overlapping blocks with this ID share a time-grid layout lane. */
  layoutGroupId?: string;
  description?: string;
  /** Text/foreground and pattern color. */
  color?: string;
  /** Operation accent shown at the leading edge; defaults to color. */
  accentColor?: string;
  /** Card fill color; defaults to the Scheduler theme. */
  backgroundColor?: string;
  /** Optional semantic background pattern for event categories. */
  backgroundPattern?: SchedulerEventBackgroundPattern;
  /** Application-owned metadata. Scheduler preserves it without interpreting it. */
  metadata?: Record<string, unknown>;
  readonly?: boolean;
  /** Disable duration changes while retaining moving and viewing. */
  resizable?: boolean;
}

export interface SchedulerRange {
  start: Date;
  end: Date;
}
export interface SchedulerCell {
  /** Real resource IDs for a cross-group timeline cell. */
  resourceIds?: string[];
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
  | "dependency"
  | "invalid-event"
  | "duplicate-id"
  | "missing-event"
  | "readonly"
  | "transaction-hook-required"
  | "unavailable"
  | "capacity"
  | "conflict"
  | "stale"
  | "rejected";
export class SchedulerError extends Error {
  constructor(
    public code: SchedulerErrorCode,
    message: string,
    public issues?: import("./availability").SchedulerAvailabilityIssue[],
    public capacityIssues?: import("./capacity").SchedulerCapacityIssue[],
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
  /** Identity of a continuous layout unit within the rendered day. */
  layoutUnitId?: string;
}

/** Horizontal geometry in fractions of the time column (0–1). */
export interface SchedulerEventPosition {
  left: number;
  width: number;
}
export type SchedulerEventLayout =
  | "stack"
  | "columns"
  | ((item: Readonly<SchedulerLayoutItem>) => SchedulerEventPosition);
