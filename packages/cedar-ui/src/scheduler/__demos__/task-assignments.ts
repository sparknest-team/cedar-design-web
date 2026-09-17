import { cloneSchedulerEvent, validateSchedulerEvent } from "../core";
import type { SchedulerEvent } from "../core";
export interface SchedulerTask {
  id: string;
  title: string;
  description?: string;
}
export interface SchedulerTaskAssignment extends Pick<
  SchedulerEvent,
  "start" | "end" | "allDay" | "resourceIds" | "resourceDetails" | "color"
> {
  id: string;
}
/** Independent station/person relationships become separate time blocks sharing metadata.taskId. */
export function createSchedulerTaskEvents(
  task: SchedulerTask,
  assignments: readonly SchedulerTaskAssignment[],
): SchedulerEvent[] {
  if (!task.id || !task.title.trim())
    throw new RangeError("Task id and title are required");
  const ids = new Set<string>();
  return assignments.map((assignment) => {
    if (!assignment.id || ids.has(assignment.id))
      throw new RangeError("Assignment ids must be unique");
    ids.add(assignment.id);
    const event = cloneSchedulerEvent({
      ...assignment,
      id: JSON.stringify([task.id, assignment.id]),
      metadata: { taskId: task.id },
      title: task.title,
      description: task.description,
    });
    validateSchedulerEvent(event);
    return event;
  });
}
