<script setup>
import { computed, ref } from "vue";
import { usePracticeData, projectError } from "../shared/usePracticeData.js";
import { usePracticeNavigation } from "../shared/usePracticeNavigation.js";
const data = usePracticeData();
const {
  workspace,
  rows,
  projects,
  favorites,
  activity,
  savedDraft,
  latest,
  query,
  applied,
  current,
  selected,
  notice,
  statusOptions,
  categories,
  categoryOptions,
  priorities,
  filtered,
  pageRows,
  done,
  budget,
  overdue,
  active,
  detailOpen,
  createOpen,
  archiveOpen,
  editingKey,
  draft,
  fresh,
  search,
  clear,
  show,
  finish,
  finishSelected,
  startCreate,
  startEdit,
  create,
  requestArchive,
  confirmArchive,
  restore,
  favorite,
  reset,
  exportCsv,
} = data;
const { route, go, href } = usePracticeNavigation();
const required = [
  { required: true, whitespace: true, message: "此项不能为空" },
];
const money = (value) =>
  Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
const state = ref(String(route.query.state || "success"));
const retries = ref(0);
const lastProject = computed(() =>
  rows.value.find((row) => row.key === (route.query.project || latest.value)),
);
const resultOptions = [
  { value: "success", label: "办理成功" },
  { value: "500", label: "服务异常" },
  { value: "403", label: "无权限访问" },
  { value: "404", label: "项目不存在" },
  { value: "empty", label: "暂无项目" },
];
const content = computed(
  () =>
    ({
      success: [
        "办理成功",
        lastProject.value
          ? `${lastProject.value.key} · ${lastProject.value.name}`
          : "可返回项目列表，或创建一份新申请。",
      ],
      500: ["保存暂时失败", "这是一种本地演示状态，重试恢复后可继续处理。"],
      403: ["暂时无法访问", "当前演示权限不足，请返回工作台。"],
      404: ["未找到项目", "请从项目列表重新选择，避免使用失效的项目编号。"],
      empty: ["尚未建立项目", "创建一份申请，建立完整的项目与任务清单。"],
    })[state.value] || ["结果类型无效", "请从下方选择一个演示状态。"],
);
function recover() {
  if (state.value === "500") {
    retries.value++;
    state.value = "success";
    notice.value = `重试成功（${retries.value} 次），可以继续处理。`;
  } else if (state.value === "empty") go("form");
  else go("list");
}
</script>
<template>
  <c-space class="practice-page" direction="column" block size="lg"
    ><c-page-header
      title="办理结果与异常恢复"
      subtitle="结合实际项目记录提供下一步操作"
      :show-back="false"
      ><template #extra><c-space wrap></c-space></template></c-page-header
    ><c-space wrap size="sm"
      ><c-button @click="go('dashboard')">工作台</c-button
      ><c-button @click="go('list')">项目列表</c-button
      ><c-button @click="go('card')">卡片视图</c-button
      ><c-button status="primary" @click="go('form')"
        >创建申请</c-button
      ></c-space
    ><c-card title="结果体验"
      ><c-form layout="vertical"
        ><c-form-item label="演示结果类型"
          ><c-select
            v-model="state"
            :options="resultOptions"
            edit-mode="direct" /></c-form-item></c-form></c-card
    ><c-card
      ><c-result
        :status="
          resultOptions.some((item) => item.value === state) ? state : 'warning'
        "
        :title="content[0]"
        :subtitle="content[1]"
        ><template #extra
          ><c-space wrap
            ><c-button status="primary" @click="recover">{{
              state === "500"
                ? "重试处理"
                : state === "empty"
                  ? "创建项目申请"
                  : "返回项目列表"
            }}</c-button
            ><c-button
              v-if="state === 'success' && lastProject"
              @click="go('detail', { project: lastProject.key })"
              >查看最新项目</c-button
            ><c-button @click="go('dashboard')">返回工作台</c-button></c-space
          ></template
        ></c-result
      ></c-card
    ><c-typography-paragraph role="status" aria-live="polite">{{
      notice
    }}</c-typography-paragraph></c-space
  >
</template>
<style scoped>
.practice-page {
  width: 100%;
  min-width: 0;
}
.practice-page :deep(.c-grid-item) {
  min-width: 0;
}
.practice-page :deep(.c-grid) {
  width: 100%;
}
.practice-page :deep(.c-space__item) {
  min-width: 0;
}
</style>
