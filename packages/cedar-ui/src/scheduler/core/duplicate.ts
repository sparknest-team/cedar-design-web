import {
  cloneSchedulerEvent,
  validateSchedulerEvent,
  SchedulerError,
} from "./index";
import type { SchedulerEvent } from "./types";

/** Copy standard event fields into an independent event, without recurrence identity. */
export function duplicateSchedulerEvent(
  event: SchedulerEvent,
  id: string,
): SchedulerEvent {
  validateSchedulerEvent(event);
  if (event.readonly) throw new SchedulerError("readonly", "Event is readonly");
  if (!id.trim() || id === event.id)
    throw new SchedulerError(
      "duplicate-id",
      "A new non-empty event id is required",
    );
  return cloneSchedulerEvent({
    id,
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay,
    milestone: event.milestone,
    resourceIds: event.resourceIds,
    resourceDetails: event.resourceDetails,
    taskId: event.taskId,
    description: event.description,
    color: event.color,
    accentColor: event.accentColor,
    backgroundColor: event.backgroundColor,
    backgroundPattern: event.backgroundPattern,
    metadata: event.metadata,
  });
}
