import type { SchedulerEvent } from "../core";

export type TaskCalendarTask = {
  id: string;
  title: string;
  deviceId: string;
  skill: string;
  standardMinutes: number;
};

export type TaskCalendarPunchRecord = {
  id: string;
  deviceId: string;
  checkedInAt: string;
  checkedOutAt?: string;
};

export type TaskCalendarOrder = {
  id: string;
  kind: "work" | "rest";
  status: "planned" | "active" | "review" | "closed";
  source?: string;
  personId: string;
  plannedStart: string;
  plannedEnd: string;
  actualStart?: string;
  actualEnd?: string;
  tasks: TaskCalendarTask[];
  punchRecords: TaskCalendarPunchRecord[];
  color: string;
};

/** Demo-only adapter: the Scheduler receives display fields and stable business IDs. */
export function toTaskCalendarEvent(order: TaskCalendarOrder): SchedulerEvent {
  const closed = order.status === "closed";
  const rest = order.kind === "rest";
  const deviceIds = [...new Set(order.tasks.map((task) => task.deviceId))];
  return {
    id: order.id,
    title: rest
      ? "休息"
      : order.tasks.map((task) => task.title).join("、") || "无主题",
    start: closed && order.actualStart ? order.actualStart : order.plannedStart,
    end: closed && order.actualEnd ? order.actualEnd : order.plannedEnd,
    resourceIds: [order.personId, ...deviceIds],
    readonly: closed || rest,
    color: order.color,
    backgroundColor: rest ? "#f0fff4" : "#e6f4ff",
    backgroundPattern: rest ? "diagonal-stripes" : "solid",
    metadata: {
      attendanceOrderId: order.id,
      taskIds: order.tasks.map((task) => task.id),
      typeId: order.kind,
      status: order.status,
    },
  };
}

export function taskCalendarEnd(
  start: string | Date,
  tasks: TaskCalendarTask[],
) {
  const date = new Date(start);
  date.setMinutes(
    date.getMinutes() +
      tasks.reduce((total, task) => total + task.standardMinutes, 0),
  );
  return date;
}
