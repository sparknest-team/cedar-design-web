<script setup>
import { ref } from "vue";

const value = ref("09:00");
const hint = ref(true);
const error = ref(false);
const line = ref(true);
</script>

<template>
  <c-space direction="column" :size="12" style="width: 100%">
    <c-checkbox v-model="hint"> 浮动提示</c-checkbox>
    <c-checkbox v-model="error"> 显式错误状态</c-checkbox>
    <c-checkbox v-model="line"> 边框 / 底线</c-checkbox>
    <c-time
      v-model="value"
      format="HH:mm"
      variant="outline"
      placeholder="请选择时间"
      :hint="hint"
      :error="error"
      :line="line"
      focus-color="#6750a4"
    />
    <span>{{ value }}</span>
  </c-space>
</template>
