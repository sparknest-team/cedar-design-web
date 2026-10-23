<template>
  <c-space direction="column" size="md">
    <c-alert type="info" :show-icon="false">
      不分组列示例：目录就是普通数组。工号为必选左冻结列，备注和入职日期默认隐藏；支持搜索、显隐、拖拽排序、冻结、删除、重命名和列宽记忆。
    </c-alert>

    <div class="demo-toolbar">
      <c-button status="secondary" size="sm" @click="open">管理列</c-button>
      <c-link @click="resetToDefault">恢复默认</c-link>
      <span class="demo-summary"
        >已展示 {{ leafColumns.length }} /
        {{ columnDefinitions.length }} 列</span
      >
    </div>

    <c-table
      v-model:columns="columns"
      extra-column
      column-resizable
      :data="data"
      :pagination="false"
      :bordered="{ cell: true, headerCell: true }"
      size="xs"
      @column-resize="handleColumnResize"
    >
      <template #extra-column-header>
        <c-button variant="text" size="xs" aria-label="管理列" @click="open"
          ><c-icon-settings
        /></c-button>
      </template>
      <template #extra-column-cell />

      <template #header-cell-actions="{ column, dataIndex }">
        <HeaderAction :data-index="dataIndex" :column="column" />
      </template>

      <template #status="{ record }">
        <c-tag :color="record.status === '在职' ? 'green' : 'gray'" size="sm">{{
          record.status
        }}</c-tag>
      </template>
    </c-table>

    <c-table-column-manager v-bind="managerProps" />
  </c-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTableColumnManager } from "@cedarjs/ui";
import type { ColumnDefinitions, ManagedTableColumn } from "@cedarjs/ui";

const defaultColumns: ManagedTableColumn[] = [
  {
    dataIndex: "employeeId",
    title: "工号",
    manager: { required: true },
    fixed: "left",
    width: 110,
  },
  { dataIndex: "name", title: "姓名", minWidth: 140 },
  { dataIndex: "department", title: "部门", width: 140 },
  { dataIndex: "position", title: "职位", minWidth: 160 },
  { dataIndex: "phone", title: "手机号", width: 150 },
  { dataIndex: "status", title: "状态", width: 100, slotName: "status" },
];

const columnDefinitions: ColumnDefinitions = [
  {
    dataIndex: "employeeId",
    title: "工号",
    tip: "必选规则来自 defaultColumns",
  },
  { dataIndex: "name", title: "姓名" },
  { dataIndex: "department", title: "部门" },
  { dataIndex: "position", title: "职位" },
  { dataIndex: "phone", title: "手机号" },
  { dataIndex: "status", title: "状态" },
  { dataIndex: "joinedAt", title: "入职日期" },
  { dataIndex: "remark", title: "备注", tip: "不在默认列中，可从弹窗添加" },
];

const {
  columns,
  managerProps,
  leafColumns,
  open,
  handleColumnResize,
  HeaderAction,
  resetToDefault,
} = useTableColumnManager({
  defaultColumns,
  columnDefinitions,
  columnDefaults: { width: 130, ellipsis: true },
  createColumn: (definition) =>
    definition.dataIndex === "remark"
      ? {
          dataIndex: definition.dataIndex,
          title: definition.title,
          minWidth: 220,
          width: undefined,
        }
      : { dataIndex: definition.dataIndex, title: definition.title },
});

const data = ref([
  {
    employeeId: "E-1001",
    name: "张三",
    department: "产品研发部",
    position: "前端工程师",
    phone: "138****1024",
    status: "在职",
    joinedAt: "2023-04-18",
    remark: "负责组件库和中后台基础设施",
  },
  {
    employeeId: "E-1002",
    name: "李四",
    department: "质量保障部",
    position: "测试工程师",
    phone: "139****3072",
    status: "在职",
    joinedAt: "2022-11-07",
    remark: "负责自动化测试平台",
  },
  {
    employeeId: "E-1003",
    name: "王五",
    department: "数据平台部",
    position: "数据分析师",
    phone: "136****8841",
    status: "离职",
    joinedAt: "2021-08-23",
    remark: "历史项目成员",
  },
]);
</script>

<style scoped>
.demo-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
}

.demo-summary {
  margin-left: auto;
  color: var(--c-color-text-3);
}
</style>
