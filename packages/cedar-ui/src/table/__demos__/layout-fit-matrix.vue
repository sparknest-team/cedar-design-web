<template>
  <c-space direction="column" size="lg" block>
    <c-alert type="info" :show-icon="false">
      平铺/分组 × <code>table-layout</code> × <code>fit</code> 全部 8 种组合。 表格始终至少铺满父容器宽度（列宽之和溢出才横向滚动）：<code>fit</code>
      开启时剩余空间全给弹性列（<code>名称</code>、<code>更新时间</code> 只设
      <code>min-width</code>），关闭时按各列基础宽度比例放大分摊。
      <code>优先级</code> 左冻结、<code>状态</code> 右冻结；<code>auto</code>
      布局下冻结偏移以渲染后测量的真实宽度为准。
      <b>拖拽调宽仅 <code>fixed</code> 布局可用</b>，<code>auto</code>
      布局不渲染拖拽把手（列宽由浏览器按内容分配，拖拽宽度不会生效）。
    </c-alert>

    <div v-for="combo in combos" :key="combo.key">
      <div
        style="
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: 8px;
        "
      >
        <c-tag size="sm" :color="combo.grouped ? 'orange' : 'gray'">
          {{ combo.grouped ? "分组表头" : "平铺列" }}
        </c-tag>
        <c-tag size="sm" :color="combo.layout === 'fixed' ? 'blue' : 'gray'">
          table-layout={{ combo.layout }}
        </c-tag>
        <c-tag size="sm" :color="combo.fit ? 'green' : 'gray'">
          fit={{ combo.fit }}
        </c-tag>
        <span
          v-if="combo.layout === 'auto'"
          style="color: var(--color-text-3); font-size: 12px"
        >
          无拖拽把手
        </span>
        <span v-else style="color: var(--color-text-3); font-size: 12px">
          可拖拽调宽
        </span>
      </div>
      <c-table
        :columns="combo.grouped ? groupedColumns : flatColumns"
        :data="data"
        :table-layout="combo.layout"
        :fit="combo.fit"
        column-resizable
        :bordered="{ cell: true }"
        :pagination="false"
        size="xs"
      >
        <template #priority="{ record }">
          <c-tag :color="record.priority === 'P0' ? 'red' : 'orange'" size="sm">
            {{ record.priority }}
          </c-tag>
        </template>
        <template #status="{ record }">
          <c-tag :color="statusColor(record.status)" size="sm">
            {{ record.status }}
          </c-tag>
        </template>
      </c-table>
    </div>
  </c-space>
</template>

<script lang="ts" setup>
import type { TableColumnData } from "@cedar-design/ui";

// 6 列混合配置：显式 width 定宽列 + 只设 minWidth 的弹性列 + 左右冻结
const flatColumns: TableColumnData[] = [
  {
    dataIndex: "priority",
    title: "优先级",
    width: 100,
    fixed: "left",
    slotName: "priority",
  },
  { dataIndex: "name", title: "名称", minWidth: 160 },
  { dataIndex: "bizLine", title: "业务线", width: 120 },
  { dataIndex: "owner", title: "负责人", width: 100 },
  { dataIndex: "updatedAt", title: "更新时间", minWidth: 140 },
  {
    dataIndex: "status",
    title: "状态",
    width: 100,
    fixed: "right",
    slotName: "status",
  },
];

const groupedColumns: TableColumnData[] = [
  {
    title: "任务信息",
    children: [flatColumns[0], flatColumns[1], flatColumns[2]],
  },
  {
    title: "人员与状态",
    children: [flatColumns[3], flatColumns[4], flatColumns[5]],
  },
];

const combos = ([false, true] as const).flatMap((grouped) =>
  (["fixed", "auto"] as const).flatMap((layout) =>
    ([true, false] as const).map((fit) => ({
      key: `${grouped ? "grouped" : "flat"}-${layout}-fit-${fit}`,
      grouped,
      layout,
      fit,
    })),
  ),
);

const statusColor = (value: string) => {
  if (value === "进行中") return "blue";
  if (value === "已完成") return "green";
  return "red";
};

const data = [
  {
    priority: "P0",
    name: "任务 A",
    bizLine: "交易",
    owner: "张三",
    updatedAt: "2026-07-21 10:30",
    status: "进行中",
  },
  {
    priority: "P1",
    name: "任务 B",
    bizLine: "物流",
    owner: "李四",
    updatedAt: "2026-07-22 14:00",
    status: "已完成",
  },
  {
    priority: "P0",
    name: "任务 C",
    bizLine: "交易",
    owner: "王五",
    updatedAt: "2026-07-25 09:15",
    status: "已阻塞",
  },
];
</script>
