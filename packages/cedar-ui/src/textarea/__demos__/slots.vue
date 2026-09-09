<template>
  <c-textarea v-model="value" clearable placeholder="带前后缀和自定义清除按钮">
    <template #prefix>说明</template>
    <template #suffix>Markdown</template>
    <template #clear-icon="{ clear }">
      <button type="button" aria-label="清空文本" @click="clear">×</button>
    </template>
  </c-textarea>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("可清空内容");
</script>
