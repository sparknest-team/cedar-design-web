import type { SchedulerLayoutItem } from "./types";

/** Pure interval packing; group IDs carry no editing or persistence semantics. */
export function packSchedulerLayout(
  items: readonly SchedulerLayoutItem[],
): SchedulerLayoutItem[] {
  type Unit = {
    start: number;
    end: number;
    id: string;
    items: SchedulerLayoutItem[];
  };
  const buckets = new Map<string, SchedulerLayoutItem[]>();
  for (const item of items) {
    const key = JSON.stringify(
      item.event.layoutGroupId == null
        ? ["event", item.event.id]
        : ["group", item.event.layoutGroupId],
    );
    const bucket = buckets.get(key) ?? [];
    bucket.push({ ...item });
    buckets.set(key, bucket);
  }
  const units: Unit[] = [];
  for (const [key, bucket] of buckets) {
    bucket.sort(
      (a, b) =>
        a.start - b.start ||
        b.end - a.end ||
        a.event.id.localeCompare(b.event.id),
    );
    let unit: Unit | undefined;
    for (const item of bucket) {
      if (!unit || item.start > unit.end) {
        unit = {
          start: item.start,
          end: item.end,
          id: JSON.stringify([key, item.event.id]),
          items: [],
        };
        units.push(unit);
      }
      unit.end = Math.max(unit.end, item.end);
      unit.items.push(item);
      item.layoutUnitId = unit.id;
    }
  }
  units.sort(
    (a, b) => a.start - b.start || b.end - a.end || a.id.localeCompare(b.id),
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
  for (const unit of units) {
    if (ends.length && ends.every((end) => end <= unit.start)) flush();
    let column = ends.findIndex((end) => end <= unit.start);
    if (column < 0) column = ends.length;
    ends[column] = unit.end;
    unit.items.forEach((item) => {
      item.column = column;
      group.push(item);
    });
  }
  flush();
  return units
    .flatMap((unit) => unit.items)
    .sort(
      (a, b) =>
        a.start - b.start ||
        b.end - a.end ||
        a.event.id.localeCompare(b.event.id),
    );
}
