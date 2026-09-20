<template>
  <c-input-number
    v-model="value"
    :style="{ width: '360px' }"
    clearable
    mode="button"
    placeholder="请输入金额"
  >
    <template #prepend>金额</template>
    <template #prefix>¥</template>
    <template #suffix>元</template>
    <template #append>含税</template>
    <template #plus>＋</template>
    <template #minus>－</template>
    <template #clear-icon="{ clear }">
      <button type="button" aria-label="清空金额" @click="clear">清空</button>
    </template>
  </c-input-number>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    return { value: ref(100) };
  },
};
</script>
