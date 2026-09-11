import { schedulerDate, validateSchedulerEvent, SchedulerError } from "./index";
import type {
  SchedulerEvent,
  SchedulerRange,
  SchedulerResource,
} from "./types";

export interface SchedulerResourceLoad extends SchedulerRange {
  resourceId: string;
  /** Each scheduled event occupies one unit, including all-day events. */
  load: number;
  capacity?: number;
  exceeded: boolean;
  eventIds: string[];
}
export interface SchedulerCapacityIssue extends SchedulerResourceLoad {
  capacity: number;
  exceeded: true;
}

/** Occupied half-open spans, split whenever the active event set changes. */
export function getSchedulerResourceLoad(
  events: readonly SchedulerEvent[],
  resource: SchedulerResource,
  range?: SchedulerRange,
): SchedulerResourceLoad[] {
  if (
    resource.capacity !== undefined &&
    (!Number.isSafeInteger(resource.capacity) || resource.capacity < 0)
  )
    throw new SchedulerError(
      "invalid-event",
      "Capacity must be a non-negative safe integer",
    );
  if (
    range &&
    (!Number.isFinite(+range.start) ||
      !Number.isFinite(+range.end) ||
      +range.end <= +range.start)
  )
    throw new SchedulerError("invalid-event", "Invalid load range");
  const points = new Map<number, { add: string[]; remove: string[] }>();
  const ids = new Set<string>();
  const units = new Map<string, number>();
  const point = (time: number) => {
    if (!points.has(time)) points.set(time, { add: [], remove: [] });
    return points.get(time)!;
  };
  for (const event of events) {
    if (!event.resourceIds?.includes(resource.id)) continue;
    if (ids.has(event.id))
      throw new SchedulerError("duplicate-id", "Duplicate load event");
    ids.add(event.id);
    validateSchedulerEvent(event);
    units.set(event.id, event.resourceDetails?.[resource.id]?.units ?? 1);
    if (event.start == null) continue;
    const start = Math.max(
      +schedulerDate(event.start),
      range ? +range.start : -Infinity,
    );
    const end = Math.min(
      +schedulerDate(event.end!),
      range ? +range.end : Infinity,
    );
    if (end <= start) continue;
    point(start).add.push(event.id);
    point(end).remove.push(event.id);
  }
  const times = [...points.keys()].sort((a, b) => a - b);
  const active = new Set<string>();
  const result: SchedulerResourceLoad[] = [];
  for (let i = 0; i < times.length - 1; i++) {
    const time = times[i];
    const changes = points.get(time)!;
    changes.remove.forEach((id) => active.delete(id));
    changes.add.forEach((id) => active.add(id));
    const load = [...active].reduce((sum, id) => sum + (units.get(id) ?? 1), 0);
    if (active.size)
      result.push({
        resourceId: resource.id,
        start: new Date(time),
        end: new Date(times[i + 1]),
        load,
        capacity: resource.capacity,
        exceeded:
          resource.capacity !== undefined && load > resource.capacity + 1e-9,
        eventIds: [...active].sort(),
      });
  }
  return result;
}

/** Replace the candidate by id, then check only its time span and assigned resources. */
export function getSchedulerCapacityIssues(
  event: SchedulerEvent,
  events: readonly SchedulerEvent[],
  resources: readonly SchedulerResource[],
): SchedulerCapacityIssue[] {
  validateSchedulerEvent(event);
  if (event.milestone || event.start == null) return [];
  const range = {
    start: schedulerDate(event.start),
    end: schedulerDate(event.end!),
  };
  const next = [...events.filter((item) => item.id !== event.id), event];
  const directory = new Map(
    resources.map((resource) => [resource.id, resource]),
  );
  return [...new Set(event.resourceIds ?? [])].flatMap((id) => {
    const resource = directory.get(id);
    if (resource?.capacity === undefined) return [];
    return getSchedulerResourceLoad(next, resource, range).filter(
      (span): span is SchedulerCapacityIssue => span.exceeded,
    );
  });
}

export interface SchedulerResourceSummary {
  resourceId: string;
  peakLoad: number;
  unitMinutes: number;
  /** Percentage of the entire supplied elapsed range, not working-hours-only utilization. */
  utilization?: number;
}
export function getSchedulerResourceSummary(
  events: readonly SchedulerEvent[],
  resource: SchedulerResource,
  range: SchedulerRange,
): SchedulerResourceSummary {
  const spans = getSchedulerResourceLoad(events, resource, range);
  const unitMinutes = spans.reduce(
    (sum, span) => sum + ((+span.end - +span.start) / 60000) * span.load,
    0,
  );
  return {
    resourceId: resource.id,
    peakLoad: Math.max(0, ...spans.map((span) => span.load)),
    unitMinutes,
    utilization:
      resource.capacity && resource.capacity > 0
        ? (unitMinutes /
            ((resource.capacity * (+range.end - +range.start)) / 60000)) *
          100
        : undefined,
  };
}
