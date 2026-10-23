import type { SchedulerEvent, SchedulerResource } from "./types";

export interface SchedulerResourceDimension {
  id: string;
  label: string;
}
export type SchedulerResourceFilters = Record<string, string[]>;

/** OR within each dimension, AND between dimensions. Empty groups do not constrain. */
export function filterSchedulerEventsByResources(
  events: readonly SchedulerEvent[],
  resources: readonly SchedulerResource[],
  filters: Readonly<Record<string, readonly string[]>>,
): SchedulerEvent[] {
  const directory = new Map(
    resources.map((resource) => [resource.id, resource]),
  );
  const groups = Object.entries(filters)
    .filter(([, ids]) => ids.length)
    .map(([dimensionId, ids]) => ({
      dimensionId,
      ids: new Set(ids),
    }));
  return events.filter((event) =>
    groups.every((group) =>
      event.resourceIds?.some(
        (id) =>
          group.ids.has(id) &&
          directory.get(id)?.dimensionId === group.dimensionId,
      ),
    ),
  );
}

/** Replace one dimension's assignments, preserving all other and unresolved IDs. */
export function setSchedulerResourceDimension(
  resourceIds: readonly string[],
  dimensionId: string,
  selectedIds: readonly string[],
  resources: readonly SchedulerResource[],
): string[] {
  const directory = new Map(
    resources.map((resource) => [resource.id, resource]),
  );
  if (selectedIds.some((id) => directory.get(id)?.dimensionId !== dimensionId))
    throw new RangeError("Selected resource does not belong to this dimension");
  return [
    ...new Set([
      ...resourceIds.filter(
        (id) => directory.get(id)?.dimensionId !== dimensionId,
      ),
      ...selectedIds,
    ]),
  ];
}

/** A display projection only: key must never be stored in event.resourceIds. */
export interface SchedulerResourceRow {
  key: string;
  groupKey: string;
  groupLabel: string;
  resources: SchedulerResource[];
  resourceIds: string[];
}

/** Cartesian rows in dimension order; filter the resource directory before calling. */
export function createSchedulerResourceRows(
  resources: readonly SchedulerResource[],
  dimensionIds: readonly string[],
): SchedulerResourceRow[] {
  if (
    dimensionIds.length < 2 ||
    new Set(dimensionIds).size !== dimensionIds.length ||
    dimensionIds.some((id) => !id)
  )
    throw new RangeError(
      "Resource grouping requires at least two distinct dimensions",
    );
  let combinations: SchedulerResource[][] = [[]];
  for (const dimensionId of dimensionIds) {
    const choices = resources.filter(
      (resource) => resource.dimensionId === dimensionId,
    );
    combinations = combinations.flatMap((prefix) =>
      choices.map((resource) => [...prefix, resource]),
    );
  }
  return combinations.map((items) => ({
    key: JSON.stringify(items.map((resource) => resource.id)),
    groupKey: JSON.stringify(items.slice(0, -1).map((resource) => resource.id)),
    groupLabel: items
      .slice(0, -1)
      .map((resource) => resource.label)
      .join(" / "),
    resources: items,
    resourceIds: items.map((resource) => resource.id),
  }));
}

/** Replace only the source row's assignments, retaining other participants. */
export function moveSchedulerResourceRow(
  resourceIds: readonly string[],
  from: SchedulerResourceRow,
  to: SchedulerResourceRow,
): string[] {
  if (
    from.resources.length !== to.resources.length ||
    from.resources.some(
      (resource, index) =>
        resource.dimensionId !== to.resources[index].dimensionId,
    ) ||
    from.resourceIds.some((id) => !resourceIds.includes(id))
  )
    throw new RangeError("Incompatible scheduler resource rows");
  if (
    from.resourceIds.length === to.resourceIds.length &&
    from.resourceIds.every((id, index) => id === to.resourceIds[index])
  )
    return [...resourceIds];
  return [
    ...new Set([
      ...resourceIds.filter((id) => !from.resourceIds.includes(id)),
      ...to.resourceIds,
    ]),
  ];
}
