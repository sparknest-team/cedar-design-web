import type { SchedulerRange, SchedulerResource } from "./types";

export type SchedulerScale = "hour" | "day";
/** Pure time-axis projection. Hour slots use elapsed time, including DST. */
export function createSchedulerTimeAxis(
  range: SchedulerRange,
  scale: SchedulerScale,
) {
  const start = +range.start;
  const end = +range.end;
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start)
    throw new RangeError("Invalid scheduler axis range");
  const cells: { start: Date; end: Date; position: number; width: number }[] =
    [];
  let cursor = start;
  while (cursor < end) {
    const next = new Date(cursor);
    if (scale === "hour") next.setTime(cursor + 3600000);
    else next.setDate(next.getDate() + 1);
    const finish = Math.min(+next, end);
    cells.push({
      start: new Date(cursor),
      end: new Date(finish),
      position: (cursor - start) / (end - start),
      width: (finish - cursor) / (end - start),
    });
    cursor = finish;
  }
  return {
    cells,
    position: (date: Date) =>
      Math.max(0, Math.min(1, (+date - start) / (end - start))),
    dateAt: (position: number) =>
      new Date(start + Math.max(0, Math.min(1, position)) * (end - start)),
  };
}
export function groupSchedulerResources(
  resources: readonly SchedulerResource[],
  groupBy?: (resource: SchedulerResource) => string,
) {
  const groups = new Map<string, SchedulerResource[]>();
  for (const resource of resources) {
    const key = groupBy?.(resource) ?? "";
    const items = groups.get(key) ?? [];
    items.push(resource);
    groups.set(key, items);
  }
  return [...groups].map(([key, resources]) => ({ key, resources }));
}
