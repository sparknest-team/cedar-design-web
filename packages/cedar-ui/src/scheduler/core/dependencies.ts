import { schedulerDate } from "./base";
import type { SchedulerEvent } from "./types";
export interface SchedulerDependency {
  id: string;
  fromId: string;
  toId: string;
  type?:
    | "finish-to-start"
    | "start-to-start"
    | "finish-to-finish"
    | "start-to-finish";
  /** Minimum distance in elapsed minutes; negative values allow overlap. */
  lag?: number;
}
export interface SchedulerDependencyIssue {
  dependencyId: string;
  code: "invalid" | "missing-event" | "cycle" | "order";
}
export function getSchedulerDependencyIssues(
  events: readonly SchedulerEvent[],
  dependencies: readonly SchedulerDependency[],
): SchedulerDependencyIssue[] {
  const directory = new Map(events.map((event) => [event.id, event]));
  const result: SchedulerDependencyIssue[] = [];
  const ids = new Set<string>();
  const edges = new Map<string, string[]>();
  const indegree = new Map<string, number>();
  for (const dependency of dependencies) {
    if (
      !dependency.id ||
      ids.has(dependency.id) ||
      !Number.isFinite(dependency.lag ?? 0) ||
      ![
        "finish-to-start",
        "start-to-start",
        "finish-to-finish",
        "start-to-finish",
      ].includes(dependency.type ?? "finish-to-start")
    ) {
      result.push({ dependencyId: dependency.id, code: "invalid" });
      continue;
    }
    ids.add(dependency.id);
    const from = directory.get(dependency.fromId),
      to = directory.get(dependency.toId);
    if (!from || !to) {
      result.push({ dependencyId: dependency.id, code: "missing-event" });
      continue;
    }
    edges.set(from.id, [...(edges.get(from.id) ?? []), to.id]);
    indegree.set(from.id, indegree.get(from.id) ?? 0);
    indegree.set(to.id, (indegree.get(to.id) ?? 0) + 1);
    const [a, b] = (dependency.type ?? "finish-to-start").split("-to-");
    const fromDate = a === "start" ? from.start : from.end,
      toDate = b === "start" ? to.start : to.end;
    if (
      fromDate != null &&
      toDate != null &&
      +schedulerDate(toDate) <
        +schedulerDate(fromDate) + (dependency.lag ?? 0) * 60000
    )
      result.push({ dependencyId: dependency.id, code: "order" });
  }
  const queue = [...indegree].filter(([, count]) => !count).map(([id]) => id);
  for (let index = 0; index < queue.length; index++)
    for (const id of edges.get(queue[index]) ?? []) {
      indegree.set(id, indegree.get(id)! - 1);
      if (!indegree.get(id)) queue.push(id);
    }
  const blocked = new Set(
    [...indegree].filter(([, count]) => count > 0).map(([id]) => id),
  );
  for (const dependency of dependencies)
    if (blocked.has(dependency.fromId) && blocked.has(dependency.toId))
      result.push({ dependencyId: dependency.id, code: "cycle" });
  return result;
}
