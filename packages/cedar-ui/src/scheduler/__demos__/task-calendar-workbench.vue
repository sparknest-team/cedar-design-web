<template>
  <c-alert>
    业务工作台只组合 Scheduler、Tree、Select、Button 等 Cedar
    组件。资源来源、待排聚合和卡片文案都由页面处理，Scheduler
    只接收资源、日程和模板。
  </c-alert>
  <c-space wrap>
    <span>当前权限</span>
    <c-select v-model="role" :options="roleOptions" style="width: 140px" />
    <span>展示维度</span>
    <c-select v-model="axis" :options="axisOptions" style="width: 160px" />
    <c-tag>已筛选 {{ filterResourceIds.length }} 个资源</c-tag>
    <c-tag>待排 {{ pendingTasks.length }} 项</c-tag>
    <c-checkbox v-model="rejectSave">模拟保存失败</c-checkbox>
    <c-checkbox v-model="simulateVersionConflict">模拟他人已更新</c-checkbox>
    <c-button @click="reloadVersions">重新加载版本</c-button>
  </c-space>

  <c-scheduler
    class="task-calendar-workbench"
    v-model="schedulerEvents"
    v-model:date="date"
    default-mode="resource-day"
    :start-hour="0"
    :end-hour="24"
    :initial-scroll-minute="420"
    :resources="axisResources"
    :resource-label="axis === 'person' ? '执行人' : '设备'"
    :overlap-event-limit="3"
    :readonly="role === 'viewer'"
    :before-change="validateAndSave"
    :rule-policy="{ conflict: 'warn' }"
  >
    <template #sidebar="{ startDrag, cancelDrag, disabled }">
      <c-row class="workbench-sidebar">
        <c-col :span="24">
          <section>
            <strong>资源来源</strong>
            <c-tree
              v-model:checked-keys="checkedSourceKeys"
              :data="resourceTree"
              checkable
              only-check-leaf
              block-node
            />
          </section>
          <c-divider />
          <section>
            <strong>待排任务</strong>
            <div class="pending-list">
              <div
                v-for="task in pendingTasks"
                :key="task.id"
                class="pending-task"
              >
                <c-checkbox
                  :model-value="selectedPendingIds.includes(task.id)"
                  :disabled="disabled"
                  @update:model-value="selectPending(task.id, $event)"
                />
                <c-button
                  :draggable="!disabled"
                  :disabled="disabled"
                  @dragstart="startDrag(toTemplate(task), $event)"
                  @dragend="cancelDrag"
                >
                  {{ task.title }} · {{ task.standardMinutes }} 分钟
                </c-button>
              </div>
            </div>
          </section>
        </c-col>
      </c-row>
    </template>

    <template #event="{ event }">
      <strong>{{ event.title }}</strong>
      <span> · {{ counterpart(event) }}</span>
      <small> · v{{ event.metadata?.version ?? 0 }}</small>
    </template>

    <template
      #editor="{
        event,
        action,
        save,
        remove,
        close,
        readonly,
        pending,
        errorMessage,
      }"
    >
      <h3>{{ action === "create" ? "创建出勤单" : "出勤单详情" }}</h3>
      <c-alert v-if="errorMessage || editorNotice" status="danger">
        {{ errorMessage || editorNotice }}
      </c-alert>
      <c-form
        :model="event"
        layout="vertical"
        @submit="prepareAndSave(event, save)"
      >
        <c-form-item label="执行人">
          <c-select
            :model-value="personId(event)"
            :options="personOptions"
            :disabled="readonly || pending"
            @update:model-value="setPerson(event, $event)"
          />
        </c-form-item>
        <c-form-item label="任务（结束时间按标准工时自动计算）">
          <c-space direction="vertical" fill>
            <div v-for="task in assignedTasks(event)" :key="task.id">
              {{ task.title }} · {{ task.standardMinutes }} 分钟
              <c-button
                v-if="!readonly"
                variant="text"
                :disabled="pending"
                @click="removeTask(event, task.id, remove)"
                >移出</c-button
              >
            </div>
            <c-button
              v-if="!readonly"
              :disabled="pending || !selectedPendingIds.length"
              @click="addSelected(event)"
            >
              加入左侧已勾选任务（{{ selectedPendingIds.length }}）
            </c-button>
          </c-space>
        </c-form-item>
        <p>
          计划：{{ displayTime(event.start) }} – {{ displayTime(event.end) }}
        </p>
        <c-space>
          <c-button v-if="!readonly" html-type="submit" :loading="pending"
            >保存</c-button
          >
          <c-button @click="close">{{ readonly ? "关闭" : "取消" }}</c-button>
          <c-button
            v-if="action === 'edit' && !readonly"
            status="danger"
            @click="remove"
            >删除出勤单</c-button
          >
        </c-space>
      </c-form>
    </template>
  </c-scheduler>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type {
  SchedulerEvent,
  SchedulerEventTemplate,
  SchedulerResource,
  SchedulerChangeContext,
} from "@cedarjs/ui";
import {
  taskCalendarEnd,
  toTaskCalendarEvent,
  type TaskCalendarOrder,
  type TaskCalendarTask,
} from "./task-calendar-model";

type Axis = "person" | "device";
type Role = "dispatcher" | "viewer";
const axis = ref<Axis>("person");
const role = ref<Role>("dispatcher");
const rejectSave = ref(false);
const simulateVersionConflict = ref(false);
const selectedPendingIds = ref<string[]>([]);
const editorNotice = ref("");
const date = ref(new Date("2026-09-09T00:00:00"));
const axisOptions = [
  { label: "按执行人", value: "person" },
  { label: "按设备", value: "device" },
];
const roleOptions = [
  { label: "调度员（可编辑）", value: "dispatcher" },
  { label: "查看者（只读）", value: "viewer" },
];
const people: SchedulerResource[] = [
  { id: "person-me", dimensionId: "person", label: "我（孟帅）" },
  { id: "person-li", dimensionId: "person", label: "李卫东" },
  { id: "person-zhang", dimensionId: "person", label: "张志强" },
];
const personOptions = people.map((person) => ({
  label: person.label,
  value: person.id,
}));
const devices: SchedulerResource[] = [
  { id: "device-a", dimensionId: "device", label: "月检站 A" },
  { id: "device-b", dimensionId: "device", label: "电池检测台 B" },
  { id: "device-c", dimensionId: "device", label: "预警处理台 C" },
];
const allResources = [...people, ...devices];
const axisResources = computed(() =>
  axis.value === "person" ? people : devices,
);

// 树节点 key 表示来源路径；叶子通过映射指向全局唯一的资源 ID。
const sourceResource = new Map([
  ["self/person-me", "person-me"],
  ["recent/person-li", "person-li"],
  ["recent/device-a", "device-a"],
  ["station/person-li", "person-li"],
  ["station/person-zhang", "person-zhang"],
  ["station/device-a", "device-a"],
  ["station/device-b", "device-b"],
  ["favorite/device-a", "device-a"],
  ["favorite/device-c", "device-c"],
]);
const resourceTree = [
  {
    title: "自己",
    key: "self",
    children: [{ title: "我（孟帅）", key: "self/person-me" }],
  },
  {
    title: "最近使用",
    key: "recent",
    children: [
      { title: "李卫东", key: "recent/person-li" },
      { title: "月检站 A", key: "recent/device-a" },
    ],
  },
  {
    title: "我的站",
    key: "station",
    children: [
      { title: "李卫东", key: "station/person-li" },
      { title: "张志强", key: "station/person-zhang" },
      { title: "月检站 A", key: "station/device-a" },
      { title: "电池检测台 B", key: "station/device-b" },
    ],
  },
  {
    title: "收藏",
    key: "favorite",
    children: [
      { title: "月检站 A", key: "favorite/device-a" },
      { title: "预警处理台 C", key: "favorite/device-c" },
    ],
  },
];
const checkedSourceKeys = ref<Array<string | number>>([]);
const filterResourceIds = computed(() => [
  ...new Set(
    checkedSourceKeys.value
      .map((key) => sourceResource.get(String(key)))
      .filter((id): id is string => !!id),
  ),
]);

const allTasks: TaskCalendarTask[] = [
  {
    id: "task-201",
    title: "月检",
    deviceId: "device-a",
    skill: "inspection",
    standardMinutes: 90,
  },
  {
    id: "task-202",
    title: "电池划痕复核",
    deviceId: "device-b",
    skill: "battery",
    standardMinutes: 60,
  },
  {
    id: "task-203",
    title: "预警处理",
    deviceId: "device-c",
    skill: "warning",
    standardMinutes: 45,
  },
  {
    id: "task-204",
    title: "双月检",
    deviceId: "device-a",
    skill: "inspection",
    standardMinutes: 75,
  },
];
const orders: TaskCalendarOrder[] = [
  {
    id: "order-101",
    kind: "work",
    status: "planned",
    personId: "person-li",
    plannedStart: "2026-09-09T09:00:00",
    plannedEnd: "2026-09-09T10:30:00",
    tasks: [allTasks[0]],
    punchRecords: [],
    color: "#1677ff",
  },
  {
    id: "order-102",
    kind: "rest",
    status: "planned",
    personId: "person-zhang",
    plannedStart: "2026-09-09T12:00:00",
    plannedEnd: "2026-09-09T13:00:00",
    tasks: [],
    punchRecords: [],
    color: "#00a854",
  },
];
const events = ref<SchedulerEvent[]>(
  orders.map((order) => withVersion(toTaskCalendarEvent(order), 1)),
);
const serverVersions = new Map(events.value.map((event) => [event.id, 1]));
const assignedTaskIds = computed(
  () => new Set(events.value.flatMap((event) => taskIds(event))),
);
const pendingTasks = computed(() =>
  allTasks.filter((task) => !assignedTaskIds.value.has(task.id)),
);
const schedulerEvents = computed({
  get() {
    const ids = filterResourceIds.value;
    return ids.length
      ? events.value.filter((event) =>
          event.resourceIds?.some((id) => ids.includes(id)),
        )
      : events.value;
  },
  set(next: SchedulerEvent[]) {
    const visible = new Set(schedulerEvents.value.map((event) => event.id));
    events.value = [
      ...events.value.filter((event) => !visible.has(event.id)),
      ...next.map((event) =>
        withVersion(event, serverVersions.get(event.id) ?? eventVersion(event)),
      ),
    ];
  },
});

function toTemplate(task: TaskCalendarTask): SchedulerEventTemplate {
  return {
    title: task.title,
    taskId: task.id,
    duration: task.standardMinutes,
    resourceIds: [task.deviceId],
    color: "#1677ff",
    accentColor: task.skill === "warning" ? "#f53f3f" : "#1677ff",
    backgroundColor: "#e6f4ff",
    metadata: { taskIds: [task.id], source: "pending-pool", version: 0 },
  };
}
function withVersion(event: SchedulerEvent, version: number): SchedulerEvent {
  return { ...event, metadata: { ...event.metadata, version } };
}
function eventVersion(event: SchedulerEvent) {
  const version = event.metadata?.version;
  return typeof version === "number" ? version : 0;
}
function reloadVersions() {
  events.value = events.value.map((event) =>
    withVersion(event, serverVersions.get(event.id) ?? eventVersion(event)),
  );
  editorNotice.value = "已按 metadata ID 重新加载服务端版本";
}
function counterpart(event: SchedulerEvent) {
  const ids = event.resourceIds ?? [];
  const resources = axis.value === "person" ? devices : people;
  return resources
    .filter((resource) => ids.includes(resource.id))
    .map((resource) => resource.label)
    .join("、");
}

const skillsByPerson: Record<string, string[]> = {
  "person-me": ["inspection", "battery", "warning"],
  "person-li": ["inspection", "battery"],
  "person-zhang": ["inspection", "warning"],
};
function taskIds(event: SchedulerEvent) {
  const ids = event.metadata?.taskIds;
  return Array.isArray(ids)
    ? ids.filter((id): id is string => typeof id === "string")
    : event.taskId
      ? [event.taskId]
      : [];
}
function assignedTasks(event: SchedulerEvent) {
  const ids = taskIds(event);
  return allTasks.filter((task) => ids.includes(task.id));
}
function personId(event: SchedulerEvent) {
  return (
    event.resourceIds?.find((id) => id.startsWith("person-")) ?? "person-me"
  );
}
function setPerson(event: SchedulerEvent, id: string) {
  event.resourceIds = [
    id,
    ...(event.resourceIds ?? []).filter((item) => !item.startsWith("person-")),
  ];
  editorNotice.value = "";
}
function setTasks(event: SchedulerEvent, ids: string[]) {
  const tasks = allTasks.filter((task) => ids.includes(task.id));
  event.metadata = { ...event.metadata, taskIds: [...ids] };
  event.taskId = ids[0];
  event.title = tasks.map((task) => task.title).join("、") || "无主题";
  event.resourceIds = [
    personId(event),
    ...new Set(tasks.map((task) => task.deviceId)),
  ];
  if (event.start)
    event.end = taskCalendarEnd(event.start, tasks).toISOString();
}
function selectPending(id: string, checked: boolean) {
  selectedPendingIds.value = checked
    ? [...new Set([...selectedPendingIds.value, id])]
    : selectedPendingIds.value.filter((item) => item !== id);
}
function addSelected(event: SchedulerEvent) {
  const nextIds = [
    ...new Set([...taskIds(event), ...selectedPendingIds.value]),
  ];
  const unsupported = allTasks.find(
    (task) =>
      nextIds.includes(task.id) &&
      !skillsByPerson[personId(event)]?.includes(task.skill),
  );
  if (unsupported) {
    editorNotice.value = `${people.find((item) => item.id === personId(event))?.label}不具备“${unsupported.title}”所需技能`;
    return;
  }
  setTasks(event, nextIds);
  editorNotice.value = "";
}
function removeTask(
  event: SchedulerEvent,
  id: string,
  removeEvent: () => void,
) {
  const nextIds = taskIds(event).filter((item) => item !== id);
  if (!nextIds.length) {
    removeEvent();
    return;
  }
  setTasks(event, nextIds);
}
function prepareAndSave(
  event: SchedulerEvent,
  save: (event?: SchedulerEvent) => void,
) {
  editorNotice.value = "";
  setTasks(event, taskIds(event));
  save(event);
}
async function validateAndSave(context: SchedulerChangeContext) {
  await new Promise((resolve) => setTimeout(resolve, 250));
  if (role.value === "viewer") throw new Error("当前账号只有查看权限");
  if (rejectSave.value)
    throw new Error("模拟后端保存失败，草稿与待办勾选已保留");
  const clientVersion = eventVersion(context.event);
  const serverVersion = serverVersions.get(context.event.id) ?? 0;
  if (simulateVersionConflict.value) {
    serverVersions.set(context.event.id, serverVersion + 1);
    simulateVersionConflict.value = false;
    throw new Error("版本已过期：其他用户刚刚修改了此出勤单，请重新加载");
  }
  if (clientVersion !== serverVersion)
    throw new Error(
      `版本已过期：当前 v${clientVersion}，服务端 v${serverVersion}，请重新加载`,
    );
  if (context.type === "remove") {
    serverVersions.delete(context.event.id);
    return true;
  }
  const taskList = assignedTasks(context.event);
  if (!taskList.length && context.event.metadata?.typeId !== "rest")
    throw new Error("出勤单至少需要一个任务");
  const unsupported = taskList.find(
    (task) => !skillsByPerson[personId(context.event)]?.includes(task.skill),
  );
  if (unsupported)
    throw new Error(`执行人不具备“${unsupported.title}”所需技能`);
  const nextVersion = serverVersion + 1;
  serverVersions.set(context.event.id, nextVersion);
  selectedPendingIds.value = selectedPendingIds.value.filter(
    (id) => !taskIds(context.event).includes(id),
  );
  return true;
}
function displayTime(value: SchedulerEvent["start"]) {
  return value == null
    ? "未设置"
    : new Date(value).toLocaleString("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
}
</script>

<style scoped>
.task-calendar-workbench {
  --c-scheduler-sidebar-width: 280px;
}
.workbench-sidebar {
  height: 100%;
}
.workbench-sidebar > * {
  min-width: 0;
  height: 100%;
  overflow-y: auto;
}
.workbench-sidebar section {
  min-width: 0;
}
.pending-task {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 4px;
  width: 100%;
  margin-bottom: 8px;
}
.pending-task .c-button {
  min-width: 0;
}
</style>
