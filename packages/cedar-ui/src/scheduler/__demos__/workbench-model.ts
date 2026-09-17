import type {
  SchedulerEvent,
  SchedulerEventLayout,
  SchedulerResource,
} from "../core";
import { addSchedulerDays, schedulerDateKey, schedulerDay } from "../core";

// Application DTOs: none of these types are exported by Scheduler.
export interface WorkbenchResource extends SchedulerResource {
  dimensionId: "person" | "device";
  account?: string;
  background: string;
  skills?: string[];
  managers?: string[];
}
export interface WorkbenchTask {
  id: string;
  title: string;
  deviceId: string;
  skill: string;
  people: number;
  minutes: number;
  deadline: string;
  source: string;
}
export interface WorkbenchPunch {
  id: string;
  personId: string;
  deviceId: string;
  start: string;
  end: string;
}
export interface WorkbenchOrder {
  id: string;
  version: number;
  personId: string;
  taskIds: string[];
  start: string;
  end: string;
  kind: "work" | "rest";
  status: "planned" | "active" | "submit" | "review" | "closed";
  allDay?: boolean;
  rejected?: boolean;
  punchIds: string[];
}
export interface WorkbenchData {
  resources: WorkbenchResource[];
  tasks: WorkbenchTask[];
  orders: WorkbenchOrder[];
  punches: WorkbenchPunch[];
}
export const copyData = <T>(value: T): T => JSON.parse(JSON.stringify(value));
export function weekStart(value: Date) {
  return addSchedulerDays(schedulerDay(value), -((value.getDay() + 6) % 7));
}
export function weekLabel(value: Date) {
  const start = weekStart(value),
    end = addSchedulerDays(start, 6);
  const thursday = addSchedulerDays(start, 3);
  const first = weekStart(new Date(thursday.getFullYear(), 0, 4));
  // UTC calendar dates avoid DST skew in ISO week numbering.
  const utc = (date: Date) =>
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const week = Math.round((utc(start) - utc(first)) / 604800000) + 1;
  return `${start.getFullYear()}年${start.getMonth() + 1}月${start.getDate()}日 – ${end.getMonth() + 1}月${end.getDate()}日（第${week}周）`;
}
export function orderTasks(order: WorkbenchOrder, data: WorkbenchData) {
  return order.taskIds
    .map((id) => data.tasks.find((task) => task.id === id))
    .filter((task): task is WorkbenchTask => !!task);
}
export function orderEnd(start: string, tasks: WorkbenchTask[]) {
  return new Date(
    +new Date(start) +
      tasks.reduce((sum, task) => sum + task.minutes, 0) * 60000,
  ).toISOString();
}
export const workbenchLayout: SchedulerEventLayout = ({ column, columns }) => {
  const left = (column * 0.9) / columns;
  return {
    left,
    width: Math.min(0.9, Math.max(0.45, 1 - columns * 0.1), 0.9 - left),
  };
};
export function projectWorkbench(
  data: WorkbenchData,
  selected: readonly string[],
): SchedulerEvent[] {
  return data.orders.flatMap((order) => {
    const tasks = orderTasks(order, data);
    const owners = data.resources.filter(
      (resource) =>
        selected.includes(resource.id) &&
        (resource.id === order.personId ||
          tasks.some((task) => task.deviceId === resource.id)),
    );
    const punches = data.punches.filter((punch) =>
      order.punchIds.includes(punch.id),
    );
    const closed = order.status === "closed";
    const start =
      closed && punches.length
        ? Math.min(...punches.map((p) => +new Date(p.start)))
        : +new Date(order.start);
    const end =
      closed && punches.length
        ? Math.max(...punches.map((p) => +new Date(p.end)))
        : +new Date(order.end);
    const acrossDays =
      schedulerDateKey(new Date(start)) !== schedulerDateKey(new Date(end - 1));
    const allDay = !!order.allDay || acrossDays;
    const total = tasks.reduce((sum, task) => sum + task.minutes, 0);
    const blocks: { task?: WorkbenchTask; start: number; end: number }[] = [];
    if (allDay || order.kind === "rest" || !tasks.length)
      blocks.push({ start, end });
    else {
      let cursor = start;
      tasks.forEach((task, index) => {
        const next =
          index === tasks.length - 1
            ? end
            : cursor +
              (closed
                ? ((end - start) * task.minutes) / total
                : task.minutes * 60000);
        blocks.push({ task, start: cursor, end: next });
        cursor = next;
      });
    }
    return owners.flatMap((owner) => {
      const visible = blocks.filter(
        (block) =>
          !block.task ||
          owner.dimensionId === "person" ||
          block.task.deviceId === owner.id,
      );
      return visible.map((block, index): SchedulerEvent => ({
        id: JSON.stringify([order.id, owner.id, block.task?.id ?? "order"]),
        layoutGroupId: JSON.stringify([order.id, owner.id]),
        title:
          order.kind === "rest"
            ? `${owner.label} 休息`
            : (block.task?.title ?? `出勤单 ${order.id}`),
        start: allDay
          ? schedulerDateKey(new Date(start))
          : new Date(block.start).toISOString(),
        end: allDay
          ? schedulerDateKey(
              addSchedulerDays(schedulerDay(new Date(end - 1)), 1),
            )
          : new Date(block.end).toISOString(),
        allDay,
        resourceIds: [
          order.personId,
          ...new Set(tasks.map((task) => task.deviceId)),
        ],
        color: owner.color,
        accentColor: order.rejected ? "#c43d4a" : owner.color,
        backgroundColor: owner.background,
        backgroundPattern: order.kind === "rest" ? "diagonal-stripes" : "solid",
        readonly: closed || order.kind === "rest",
        resizable: false,
        metadata: {
          orderId: order.id,
          taskId: block.task?.id,
          ownerId: owner.id,
          version: order.version,
          kind: order.kind,
          closed,
          edge:
            visible.length === 1
              ? "single"
              : index === 0
                ? "first"
                : index === visible.length - 1
                  ? "last"
                  : "middle",
          counterpart:
            owner.dimensionId === "person"
              ? (data.resources.find((r) => r.id === block.task?.deviceId)
                  ?.label ?? "")
              : (data.resources.find((r) => r.id === order.personId)?.label ??
                ""),
        },
      }));
    });
  });
}
export function moveWorkbenchOrder(
  data: WorkbenchData,
  event: SchedulerEvent,
  previous: SchedulerEvent,
) {
  const current = data.orders.find(
    (order) => order.id === event.metadata?.orderId,
  );
  if (!current || event.start == null || previous.start == null)
    throw new Error("日程已不存在，请刷新");
  const draft = copyData(current);
  const delta = +new Date(event.start) - +new Date(previous.start);
  draft.start = new Date(+new Date(current.start) + delta).toISOString();
  draft.end = current.allDay
    ? new Date(+new Date(current.end) + delta).toISOString()
    : orderEnd(draft.start, orderTasks(draft, data));
  draft.version = Number(event.metadata?.version);
  return draft;
}
export function remainingDays(task: WorkbenchTask, now: Date) {
  const a = schedulerDay(task.deadline),
    b = schedulerDay(now);
  return Math.round(
    (Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) -
      Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())) /
      86400000,
  );
}
export function pendingWorkbenchTasks(data: WorkbenchData, now: Date) {
  const assigned = new Set(data.orders.flatMap((order) => order.taskIds));
  return data.tasks
    .filter((task) => !assigned.has(task.id))
    .sort(
      (a, b) =>
        remainingDays(a, now) - remainingDays(b, now) ||
        a.id.localeCompare(b.id),
    );
}
export function nearestPunch(
  task: WorkbenchTask,
  start: string,
  punches: WorkbenchPunch[],
) {
  return punches
    .filter((punch) => punch.deviceId === task.deviceId)
    .sort(
      (a, b) =>
        Math.abs(+new Date(a.start) - +new Date(start)) -
        Math.abs(+new Date(b.start) - +new Date(start)),
    )[0]?.id;
}

export function createWorkbenchMock(today = new Date()): WorkbenchData {
  const monday = weekStart(today);
  const at = (days: number, hours = 9, minutes = 0) => {
    const date = addSchedulerDays(monday, days);
    date.setHours(hours, minutes, 0, 0);
    return date.toISOString();
  };
  const deadline = (days: number) =>
    schedulerDateKey(addSchedulerDays(today, days));
  const resources: WorkbenchResource[] = [
    {
      id: "me",
      label: "孟帅",
      account: "shuai.meng",
      dimensionId: "person",
      color: "#466caa",
      background: "#e7eef9",
      skills: ["点检", "电池", "预警"],
    },
    {
      id: "li",
      label: "李卫东",
      account: "weidong.li",
      dimensionId: "person",
      color: "#ad813c",
      background: "#faf1df",
      skills: ["点检", "电池"],
    },
    {
      id: "zhang",
      label: "张志强",
      account: "zhiqiang.zhang",
      dimensionId: "person",
      color: "#4b8d70",
      background: "#e6f4eb",
      skills: ["点检", "预警"],
    },
    {
      id: "station-a",
      label: "上海徐汇站",
      dimensionId: "device",
      color: "#8670ac",
      background: "#efeaf7",
      managers: ["me", "li"],
    },
    {
      id: "station-b",
      label: "上海莘庄站",
      dimensionId: "device",
      color: "#a1657e",
      background: "#f8e9ef",
      managers: ["me", "zhang"],
    },
    {
      id: "station-c",
      label: "上海虹桥站",
      dimensionId: "device",
      color: "#458c98",
      background: "#e4f2f5",
      managers: ["li", "zhang"],
    },
  ];
  const tasks: WorkbenchTask[] = Array.from({ length: 15 }, (_, index) => ({
    id: `WO-${101 + index}`,
    title: ["月检", "双月检", "电池划痕复核", "预警处理", "设备点检"][
      index % 5
    ],
    deviceId:
      index < 4
        ? "station-a"
        : index < 7
          ? "station-b"
          : `station-${["a", "b", "c"][index % 3]}`,
    skill: index % 5 === 2 ? "电池" : index % 5 === 3 ? "预警" : "点检",
    people: 1,
    minutes: [60, 90, 45, 30][index % 4],
    deadline: deadline(index < 7 ? 3 : [-2, 0, 2, 6][index % 4]),
    source: ["点检计划", "手动创建", "系统预警"][index % 3],
  }));
  const order = (
    id: string,
    personId: string,
    taskIds: string[],
    days: number,
    hour: number,
    extra: Partial<WorkbenchOrder> = {},
  ): WorkbenchOrder => ({
    id,
    version: 1,
    personId,
    taskIds,
    kind: "work",
    status: "planned",
    start: at(days, hour),
    end: orderEnd(
      at(days, hour),
      tasks.filter((task) => taskIds.includes(task.id)),
    ),
    punchIds: [],
    ...extra,
  });
  const day = (today.getDay() + 6) % 7;
  const punches: WorkbenchPunch[] = [
    {
      id: "punch-1",
      personId: "me",
      deviceId: "station-a",
      start: at(day, 8, 12),
      end: at(day, 10, 41),
    },
    {
      id: "punch-2",
      personId: "me",
      deviceId: "station-a",
      start: at(day, 13, 3),
      end: at(day, 14, 30),
    },
    {
      id: "punch-3",
      personId: "li",
      deviceId: "station-b",
      start: at(day, 8, 40),
      end: at(day, 10, 5),
    },
  ];
  const orders = [
    order("ATT-101", "me", ["WO-101", "WO-102"], day, 9),
    order("ATT-102", "me", ["WO-103"], day, 10, {
      rejected: true,
      status: "active",
    }),
    order("ATT-103", "me", ["WO-104"], day, 8, {
      status: "closed",
      punchIds: ["punch-1"],
    }),
    order("ATT-104", "li", ["WO-105", "WO-106"], 7, 9),
    order("ATT-105", "me", ["WO-107"], 1, 0, { allDay: true, end: at(3, 0) }),
    ...[0, 2, 4].map((d, index) =>
      order(`REST-${index}`, ["me", "li", "zhang"][index], [], d, 13, {
        kind: "rest",
        end: at(d, 17),
      }),
    ),
  ];
  return { resources, tasks, orders, punches };
}

export interface SaveOptions {
  role: "dispatcher" | "viewer";
  fail?: boolean;
  conflict?: boolean;
}
export interface SaveResult {
  data: WorkbenchData;
  warnings: string[];
}
export function createWorkbenchApi(seed: WorkbenchData, delay = 180) {
  let data = copyData(seed);
  const validate = (
    draft: WorkbenchOrder,
    options: SaveOptions,
    remove = false,
    manual?: WorkbenchPunch,
  ) => {
    if (options.role !== "dispatcher") throw new Error("当前账号只有查看权限");
    const old = data.orders.find((order) => order.id === draft.id);
    if ((old?.version ?? 0) !== draft.version)
      throw new Error("版本已过期，请重新加载后再编辑");
    if (old?.status === "closed" || old?.kind === "rest")
      throw new Error("已完成或休息记录不可修改");
    if (remove) return [];
    if (draft.kind !== "work") throw new Error("休息记录来自排班系统");
    if (
      !draft.taskIds.length ||
      new Set(draft.taskIds).size !== draft.taskIds.length
    )
      throw new Error("请选择任务，且任务不能重复");
    const tasks = orderTasks(draft, data);
    if (tasks.length !== draft.taskIds.length) throw new Error("任务已不存在");
    if (new Set(tasks.map((task) => task.deviceId)).size !== 1)
      throw new Error("一张出勤单只能安排同一设备的任务");
    if (
      data.orders.some(
        (order) =>
          order.id !== draft.id &&
          order.taskIds.some((id) => draft.taskIds.includes(id)),
      )
    )
      throw new Error("任务已被其他出勤单安排，请刷新");
    const person = data.resources.find(
      (resource) =>
        resource.id === draft.personId && resource.dimensionId === "person",
    );
    if (!person || tasks.some((task) => !person.skills?.includes(task.skill)))
      throw new Error("执行人技能不匹配");
    if (
      !Number.isFinite(+new Date(draft.start)) ||
      !Number.isFinite(+new Date(draft.end)) ||
      +new Date(draft.end) <= +new Date(draft.start)
    )
      throw new Error("开始和结束时间无效");
    if (!draft.allDay && draft.end !== orderEnd(draft.start, tasks))
      throw new Error("结束时间必须按标准工时计算");
    if (draft.status === "closed") {
      const records = [...data.punches, ...(manual ? [manual] : [])].filter(
        (punch) => draft.punchIds.includes(punch.id),
      );
      if (
        !records.length ||
        records.length !== new Set(draft.punchIds).size ||
        records.some(
          (punch) =>
            punch.personId !== draft.personId ||
            punch.deviceId !== tasks[0].deviceId ||
            !Number.isFinite(+new Date(punch.start)) ||
            !Number.isFinite(+new Date(punch.end)) ||
            +new Date(punch.end) <= +new Date(punch.start),
        )
      )
        throw new Error("请关联该执行人和设备的有效登录、注销打卡记录");
      if (manual && data.punches.some((punch) => punch.id === manual.id))
        throw new Error("打卡记录已存在");
    }
    const warnings: string[] = [];
    if (
      data.orders.some(
        (order) =>
          order.id !== draft.id &&
          order.personId === draft.personId &&
          +new Date(order.start) < +new Date(draft.end) &&
          +new Date(order.end) > +new Date(draft.start),
      )
    )
      warnings.push("执行人时间重叠，已保留本次安排");
    const minutes =
      tasks.reduce((sum, task) => sum + task.minutes, 0) +
      data.orders
        .filter(
          (order) =>
            order.id !== draft.id &&
            order.personId === draft.personId &&
            schedulerDateKey(order.start) === schedulerDateKey(draft.start),
        )
        .reduce(
          (sum, order) =>
            sum +
            orderTasks(order, data).reduce(
              (total, task) => total + task.minutes,
              0,
            ),
          0,
        );
    if (minutes > 480) warnings.push("当日安排超过 8 小时，已保留本次安排");
    if (tasks.some((task) => schedulerDateKey(draft.start) > task.deadline))
      warnings.push("安排晚于任务截止日，已保留本次安排");
    return warnings;
  };
  async function prepare(
    draftInput: WorkbenchOrder,
    options: SaveOptions,
    remove = false,
    manual?: WorkbenchPunch,
  ) {
    const draft = copyData(draftInput),
      record = manual ? copyData(manual) : undefined;
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (options.fail) throw new Error("模拟保存失败，草稿与勾选已保留");
    if (options.conflict) {
      const old = data.orders.find((order) => order.id === draft.id);
      if (old) old.version++;
      throw new Error("版本已过期，请重新加载后再编辑");
    }
    validate(draft, options, remove, record);
    // Commit only after Scheduler accepts the gesture; a canceled/stale gesture has no server side effect.
    return (): SaveResult => {
      const warnings = validate(draft, options, remove, record);
      const next = copyData(data);
      next.orders = next.orders.filter((order) => order.id !== draft.id);
      if (!remove) next.orders.push({ ...draft, version: draft.version + 1 });
      if (record) next.punches.push(record);
      data = next;
      return { data: copyData(data), warnings };
    };
  }
  return {
    load: () => copyData(data),
    prepare,
    save: async (
      draft: WorkbenchOrder,
      options: SaveOptions,
      remove = false,
      manual?: WorkbenchPunch,
    ) => (await prepare(draft, options, remove, manual))(),
  };
}
