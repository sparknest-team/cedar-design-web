<script setup lang="ts">
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
import type { FormItemValidateStatus } from "@cedar-design/ui";
const status = ref<FormItemValidateStatus>("warning");
const __demoState = __demoReactive({ disabled: false, readonly: false });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-checkbox v-model="__demoState['disabled']">disabled</c-checkbox>
      <c-checkbox v-model="__demoState['readonly']">readonly</c-checkbox>
    </c-space>
    <c-form layout="vertical" v-bind="__demoState">
      <c-form-item
        label="展示状态"
        feedback
        :validate-status="status"
        help="显式状态只控制外观，不改变实际校验结果。"
      >
        <c-input placeholder="切换上方状态" />
      </c-form-item>
    </c-form>
  </c-space>
</template>
<style scoped>
.status-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
