import { expect, test } from "vitest";
import {
  createWorkbenchMock,
  createWorkbenchApi,
  projectWorkbench,
  pendingWorkbenchTasks,
  orderEnd,
  orderTasks,
  moveWorkbenchOrder,
  copyData,
  nearestPunch,
  weekLabel,
  remainingDays,
} from "../__demos__/workbench-model";
const today = new Date(2026, 8, 15);
const options = { role: "dispatcher" as const };

test("dynamic mock includes this week, next week, overdue, due soon and weekday rest", () => {
  for (const now of [today, new Date(2027, 0, 1), new Date(2030, 5, 30)]) {
    const data = createWorkbenchMock(now);
    expect(data.tasks.some((task) => remainingDays(task, now) < 0)).toBe(true);
    expect(data.tasks.some((task) => remainingDays(task, now) === 0)).toBe(
      true,
    );
    expect(
      data.orders
        .filter((o) => o.kind === "rest")
        .every((o) => ![0, 6].includes(new Date(o.start).getDay())),
    ).toBe(true);
    expect(data.orders.some((o) => o.status === "closed")).toBe(true);
    expect(
      new Date(data.orders.find((o) => o.id === "ATT-104")!.start) > now,
    ).toBe(true);
  }
  expect(weekLabel(new Date(2027, 0, 1))).toContain("第53周");
});

test("one task per block; person and device projections have stable distinct identities", () => {
  const data = createWorkbenchMock(today);
  const events = projectWorkbench(data, ["me", "station-a"]);
  const group = events.filter((e) => e.metadata?.orderId === "ATT-101");
  expect(group).toHaveLength(4);
  expect(new Set(group.map((e) => e.id)).size).toBe(4);
  expect(new Set(group.map((e) => e.layoutGroupId)).size).toBe(2);
  expect(group[0].end).toBe(group[1].start);
  expect(group.every((e) => e.resizable === false)).toBe(true);
  expect(projectWorkbench(data, [])).toEqual([]);
  expect(projectWorkbench(data, ["station-a", "me"])).toEqual(events);
  expect(group[0]).not.toHaveProperty("tasks");
});

test("all-day order projects once per owner; closed tasks use actual interval and readonly", () => {
  const data = createWorkbenchMock(today);
  const events = projectWorkbench(data, ["me", "station-a", "station-b"]);
  expect(events.filter((e) => e.metadata?.orderId === "ATT-105")).toHaveLength(
    2,
  );
  expect(
    events
      .filter((e) => e.metadata?.orderId === "ATT-105")
      .every((e) => e.allDay),
  ).toBe(true);
  const closed = events.find((e) => e.metadata?.orderId === "ATT-103")!;
  expect(closed.start).toBe(data.punches[0].start);
  expect(closed.end).toBe(data.punches[0].end);
  expect(closed.readonly).toBe(true);
});

test("moving a task projection translates the whole order and retains standard durations", () => {
  const data = createWorkbenchMock(today);
  const old = projectWorkbench(data, ["station-a"]).find(
    (e) => e.metadata?.taskId === "WO-102",
  )!;
  const event = {
    ...old,
    start: new Date(+new Date(old.start!) + 3600000).toISOString(),
  };
  const next = moveWorkbenchOrder(data, event, old);
  expect(+new Date(next.start) - +new Date(data.orders[0].start)).toBe(3600000);
  expect(next.end).toBe(orderEnd(next.start, orderTasks(next, data)));
  expect(data.orders[0].start).not.toBe(next.start);
});

test("server rejects permissions, locked records, skill mismatch and stale writes without changing data", async () => {
  const data = createWorkbenchMock(today),
    api = createWorkbenchApi(data, 0);
  const draft = copyData(data.orders[0]);
  await expect(api.save(draft, { role: "viewer" })).rejects.toThrow("查看权限");
  await expect(
    api.save({ ...draft, personId: "unknown" }, options),
  ).rejects.toThrow("技能");
  await expect(
    api.save(
      data.orders.find((o) => o.status === "closed")!,
      options,
    ),
  ).rejects.toThrow("不可修改");
  await expect(api.save({ ...draft, version: 0 }, options)).rejects.toThrow(
    "版本",
  );
  await expect(api.save(draft, { ...options, fail: true })).rejects.toThrow(
    "保存失败",
  );
  expect(api.load()).toEqual(data);
});

test("prepared changes have no side effects until committed; CAS catches competing saves", async () => {
  const data = createWorkbenchMock(today),
    api = createWorkbenchApi(data, 0);
  const draft = copyData(data.orders[0]);
  const commit = await api.prepare(draft, options);
  expect(api.load()).toEqual(data);
  await api.save(draft, options);
  expect(() => commit()).toThrow("版本");
  expect(api.load().orders.find((o) => o.id === draft.id)!.version).toBe(2);
});

test("merge, removal and dissolution update the pending pool atomically", async () => {
  const data = createWorkbenchMock(today),
    api = createWorkbenchApi(data, 0);
  let draft = copyData(data.orders[0]);
  const entry = pendingWorkbenchTasks(data, today).find(
    (t) => t.deviceId === "station-a",
  )!;
  draft.taskIds.push(entry.id);
  draft.end = orderEnd(draft.start, orderTasks(draft, data));
  let saved = await api.save(draft, options);
  expect(
    pendingWorkbenchTasks(saved.data, today).some((t) => t.id === entry.id),
  ).toBe(false);
  draft = saved.data.orders.find((o) => o.id === draft.id)!;
  draft.taskIds = draft.taskIds.filter((id) => id !== entry.id);
  draft.end = orderEnd(draft.start, orderTasks(draft, data));
  saved = await api.save(draft, options);
  expect(
    pendingWorkbenchTasks(saved.data, today).some((t) => t.id === entry.id),
  ).toBe(true);
  draft = saved.data.orders.find((o) => o.id === draft.id)!;
  const taskIds = [...draft.taskIds];
  saved = await api.save(draft, options, true);
  expect(
    taskIds.every((id) =>
      pendingWorkbenchTasks(saved.data, today).some((t) => t.id === id),
    ),
  ).toBe(true);
});

test("closing requires matching punches and accepts atomic manual creation", async () => {
  const data = createWorkbenchMock(today),
    api = createWorkbenchApi(data, 0);
  const draft = { ...copyData(data.orders[0]), status: "closed" as const };
  await expect(api.save(draft, options)).rejects.toThrow("打卡");
  const punch = {
    id: "manual",
    personId: draft.personId,
    deviceId: "station-a",
    start: draft.start,
    end: draft.end,
  };
  const saved = await api.save(
    { ...draft, punchIds: [punch.id] },
    options,
    false,
    punch,
  );
  expect(saved.data.punches.some((p) => p.id === "manual")).toBe(true);
  const events = projectWorkbench(saved.data, ["me"]).filter(
    (e) => e.metadata?.orderId === draft.id,
  );
  expect(events).toHaveLength(2);
  expect(events.every((e) => e.readonly)).toBe(true);
  expect(events[0].end).toBe(events[1].start);
  expect(nearestPunch(data.tasks[0], draft.start, saved.data.punches)).toBe(
    "manual",
  );
});

test("overlap, workload and late dates warn without blocking; invalid duration and mixed devices block", async () => {
  const data = createWorkbenchMock(today),
    api = createWorkbenchApi(data, 0);
  const draft = copyData(data.orders[0]);
  await expect(
    api.save(
      { ...draft, end: new Date(+new Date(draft.end) + 60000).toISOString() },
      options,
    ),
  ).rejects.toThrow("标准工时");
  const mixed = { ...draft, taskIds: [...draft.taskIds, "WO-109"] };
  await expect(api.save(mixed, options)).rejects.toThrow("同一设备");
  const saved = await api.save(draft, options);
  expect(saved.warnings.some((warning) => warning.includes("重叠"))).toBe(true);
  const overloaded = copyData(data);
  overloaded.tasks[0].minutes = 540;
  overloaded.tasks[0].deadline = "2026-09-01";
  const longOrder = copyData(overloaded.orders[0]);
  longOrder.end = orderEnd(longOrder.start, orderTasks(longOrder, overloaded));
  const warned = await createWorkbenchApi(overloaded, 0).save(
    longOrder,
    options,
  );
  expect(warned.warnings.some((warning) => warning.includes("8 小时"))).toBe(
    true,
  );
  expect(warned.warnings.some((warning) => warning.includes("截止日"))).toBe(
    true,
  );
  expect(
    warned.data.orders.find((order) => order.id === longOrder.id)?.version,
  ).toBe(longOrder.version + 1);
});
