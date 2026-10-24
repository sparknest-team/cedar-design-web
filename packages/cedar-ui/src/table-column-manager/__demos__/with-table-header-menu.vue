<template>
  <c-space direction="column" size="md">
    <c-alert type="info" :show-icon="false">
      分组列示例：左侧 <code>优先级</code> 冻结，右侧 <code>状态</code> 冻结；
      <code>名称</code>、<code>更新时间</code> 只设
      <code>min-width</code> 作为弹性列。表格始终铺满父容器：<code>fit</code>
      开启时剩余空间按 min-width
      比例分给弹性列，关闭时按各列宽度比例放大；extra-column 固定 28px
      不参与分配。<code>table-layout="auto"</code> 时 colgroup 不渲染
      <code>col</code>，列宽交给浏览器按内容分配，且不显示拖拽把手（拖拽仅
      <code>fixed</code> 布局可用）。
    </c-alert>

    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
      <c-button status="secondary" size="sm" @click="open">列管理</c-button>
      <c-link @click="resetToDefault">重置</c-link>
      <c-switch
        v-model="fit"
        checked-text="fit"
        unchecked-text="fit"
        size="sm"
      />
      <c-switch
        v-model="isFixedLayout"
        checked-text="fixed"
        unchecked-text="auto"
        size="sm"
      />
      <span style="color: var(--c-color-text-3); margin-left: 8px">
        当前 {{ leafColumns.length }} 列
      </span>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <c-tag
        v-for="col in leafColumns"
        :key="col.dataIndex"
        size="sm"
        color="gray"
      >
        {{ col.title }}
        <template v-if="col.width"> · {{ col.width }}px</template>
        <template v-if="col.fixed"
          >（{{ col.fixed === "left" ? "左冻" : "右冻" }}）</template
        >
      </c-tag>
    </div>

    <c-table
      v-model:columns="columns"
      extra-column
      column-resizable
      :data="data"
      :pagination="false"
      :bordered="{ cell: true, headerCell: true }"
      :fit="fit"
      :table-layout="tableLayout"
      size="xs"
      @column-resize="handleColumnResize"
    >
      <template #extra-column-header>
        <c-button variant="text" size="xs" aria-label="管理列" @click="open">
          <c-icon-settings />
        </c-button>
      </template>
      <template #extra-column-cell />

      <template #header-cell-actions="{ column, dataIndex }">
        <HeaderAction :data-index="dataIndex" :column="column" />
      </template>

      <template #priority="{ record }">
        <c-tag :color="priorityColor(record.priority)" size="sm">{{
          record.priority
        }}</c-tag>
      </template>
      <template #status="{ record }">
        <c-tag :color="statusColor(record.status)" size="sm">{{
          record.status
        }}</c-tag>
      </template>
    </c-table>

    <!-- 列管理抽屉 + 插入/编辑弹窗 -->
    <c-table-column-manager v-bind="managerProps" />
  </c-space>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useTableColumnManager } from "@cedar-design/ui";
import type { ColumnDefinitions, ManagedTableColumn } from "@cedar-design/ui";

const STORAGE_KEY = "cedar-demo:table-column-manager:with-table-header-menu";
let storage: Storage | undefined;
const storageReady = ref(false);

const fit = ref(true);
// fixed：列宽由布局引擎计算写入 col，不被内容撑开；auto：不渲染 col，交给浏览器按内容分配
const tableLayout = ref<"fixed" | "auto">("fixed");
const isFixedLayout = computed({
  get: () => tableLayout.value === "fixed",
  set: (val: boolean) => {
    tableLayout.value = val ? "fixed" : "auto";
  },
});

const defaultColumns: ManagedTableColumn[] = [
  {
    title: "基本信息",
    children: [
      {
        dataIndex: "priority",
        title: "优先级",
        manager: { required: true },
        fixed: "left",
        width: 120,
        slotName: "priority",
      },
      {
        dataIndex: "name",
        title: "名称",
        minWidth: 200,
      },
      {
        dataIndex: "bizLine",
        title: "业务线",
        width: 120,
      },
    ],
  },
  {
    title: "人员与状态",
    children: [
      {
        dataIndex: "owner",
        title: "负责人",
        width: 100,
      },
      {
        dataIndex: "updatedAt",
        title: "更新时间",
        minWidth: 140,
      },
      {
        dataIndex: "status",
        title: "状态",
        fixed: "right",
        width: 120,
        slotName: "status",
      },
    ],
  },
];

// 候选定义只服务于弹窗展示和搜索，不重复配置 Table 宽度、插槽或必选规则。
const columnDefinitions: ColumnDefinitions = [
  {
    key: "base",
    title: "基本信息",
    children: [
      {
        dataIndex: "priority",
        title: "优先级",
        tip: "必选规则来自 defaultColumns",
      },
      { dataIndex: "name", title: "名称" },
      { dataIndex: "bizLine", title: "业务线" },
      {
        dataIndex: "description",
        title: "任务描述",
        tip: "候选的新列，通过 createColumn 设置特殊宽度",
      },
    ],
  },
  {
    key: "people",
    title: "人员与状态",
    children: [
      { dataIndex: "owner", title: "负责人" },
      { dataIndex: "updatedAt", title: "更新时间" },
      { dataIndex: "status", title: "状态" },
      { dataIndex: "deadline", title: "截止时间" },
    ],
  },
];

// ---------- 核心：一行接入列管理 ----------

const manager = useTableColumnManager({
  defaultColumns,
  columnDefinitions,
  // 普通新增列统一使用该默认 Table 配置。
  columnDefaults: { width: 140, ellipsis: true },
  // 少量特殊候选列在这里补充本地渲染配置。
  createColumn: (definition) =>
    definition.dataIndex === "description"
      ? {
          dataIndex: definition.dataIndex,
          title: definition.title,
          minWidth: 240,
          width: undefined,
        }
      : { dataIndex: definition.dataIndex, title: definition.title },
});
const {
  columns,
  state,
  restore,
  managerProps,
  leafColumns,
  open,
  handleColumnResize,
  HeaderAction,
  resetToDefault: resetManagerToDefault,
} = manager;

// 持久化属于业务层：组件和 useTableColumnManager 不读写 localStorage。
onMounted(async () => {
  storage = window.localStorage;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (raw) await restore(JSON.parse(raw));
  } catch {
    storage.removeItem(STORAGE_KEY);
  } finally {
    storageReady.value = true;
  }
});

watch(
  state,
  (value) => {
    if (!storageReady.value) return;
    storage?.setItem(STORAGE_KEY, JSON.stringify(value));
  },
  { deep: true },
);

const resetToDefault = () => {
  storage?.removeItem(STORAGE_KEY);
  resetManagerToDefault();
};

// ---------- 渲染辅助 ----------

const priorityColor = (value: string) => {
  if (value === "P0") return "red";
  if (value === "P1") return "orange";
  return "gray";
};

const statusColor = (value: string) => {
  if (value === "进行中") return "blue";
  if (value === "已完成") return "green";
  if (value === "已阻塞") return "red";
  return "gray";
};

const data = ref([
  {
    priority: "P0",
    name: "任务 A",
    bizLine: "交易",
    description: "修复支付链路并补充异常监控",
    owner: "张三",
    updatedAt: "2026-07-21 10:30",
    status: "进行中",
    deadline: "2026-08-10",
  },
  {
    priority: "P1",
    name: "任务 B",
    bizLine: "物流",
    description: "优化仓配系统的库存同步效率",
    owner: "李四",
    updatedAt: "2026-07-22 14:00",
    status: "已完成",
    deadline: "2026-08-05",
  },
  {
    priority: "P0",
    name: "任务 C",
    bizLine: "交易",
    description: "排查高峰期订单重复提交问题",
    owner: "王五",
    updatedAt: "2026-07-25 09:15",
    status: "已阻塞",
    deadline: "2026-08-12",
  },
]);
</script>
