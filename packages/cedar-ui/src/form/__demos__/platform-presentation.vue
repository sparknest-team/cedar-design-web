<script setup>
import { computed, ref } from "vue";
const initialModel = () => ({
  title: "设备巡检",
  department: "design",
  date: undefined,
  time: undefined,
});
const model = ref(initialModel());
const departments = [
  { value: "dev", label: "研发部" },
  { value: "design", label: "设计部" },
  { value: "ops", label: "运营部" },
];
const committed = computed(() =>
  JSON.stringify({
    title: model.value.title,
    department: model.value.department,
    date: model.value.date ?? null,
    time: model.value.time ?? null,
  }),
);
function reset() {
  model.value = initialModel();
}
</script>
<template>
  <c-space direction="column" class="platform-presentation-demo">
    <p>桌面字段在当前位置展开面板；选择后观察已提交模型。</p>
    <c-form :model="model" layout="vertical">
      <c-form-item label="任务名称" field="title"
        ><c-input
          v-model="model.title"
          edit-mode="direct"
          placeholder="输入任务名称"
      /></c-form-item>
      <c-form-item label="负责部门" field="department"
        ><c-select
          v-model="model.department"
          :options="departments"
          edit-mode="direct"
          placeholder="选择部门"
      /></c-form-item>
      <c-form-item label="执行日期" field="date"
        ><c-date v-model="model.date" edit-mode="direct" placeholder="选择日期"
      /></c-form-item>
      <c-form-item label="执行时间" field="time"
        ><c-time v-model="model.time" edit-mode="direct" placeholder="选择时间"
      /></c-form-item>
    </c-form>
    <div class="platform-presentation-demo__model">
      <strong>已提交模型</strong
      ><output aria-label="已提交模型" role="status">{{ committed }}</output>
    </div>
    <c-button @click="reset">重置本例</c-button>
  </c-space>
</template>
<style scoped>
.platform-presentation-demo {
  width: 100%;
  min-width: 0;
}
.platform-presentation-demo__model {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background: var(--c-color-fill-1);
  color: var(--c-color-text-1);
}
.platform-presentation-demo__model output {
  display: block;
  margin-top: 8px;
  overflow-wrap: anywhere;
  font-size: 12px;
}
</style>
