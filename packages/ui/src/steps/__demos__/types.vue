<script setup lang="ts">
import { ref } from "vue";
import type { StepsType } from "@cedar-design/ui-vue";

const current = ref(2);
const statuses = ["wait", "process", "finish", "error"] as const;
const status = ref<(typeof statuses)[number]>("process");
const types: StepsType[] = ["default", "arrow", "dot", "navigation"];
</script>

<template>
  <section class="step-type-comparison">
    <c-form-item layout="vertical" size="sm" label="当前步骤">
      <c-radio-group
        v-model="current"
        aria-label="当前步骤"
        :options="[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
        ]"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-form-item layout="vertical" size="sm" label="状态"
      ><c-radio-group
        v-model="status"
        aria-label="状态"
        :options="statuses.map((value) => ({ label: value, value }))"
    /></c-form-item>
    <p>
      点击步骤或选择序号，对比同一进度的四种外观。
    </p>
    <section v-for="type in types" :key="type" :data-step-type="type">
      <p>
        <code>{{ type }}</code>
      </p>
      <c-steps v-model="current" :type="type" :status="status" changeable>
        <c-step
          >提交<template #description>提交信息</template></c-step
        >
        <c-step
          >审核<template #description>审核信息</template></c-step
        >
        <c-step
          >完成<template #description>完成信息</template></c-step
        >
      </c-steps>
    </section>
  </section>
</template>

<style scoped></style>
