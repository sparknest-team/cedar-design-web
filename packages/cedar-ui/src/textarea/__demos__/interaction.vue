<template>
  <c-space direction="column" size="lg" fill>
    <c-textarea
      v-model="value"
      clearable
      placeholder="输入、换行并失焦以观察事件"
      @input="record('input', $event)"
      @change="record('change', $event)"
      @keydown="record('keydown')"
      @clear="record('clear')"
      @blur="record('blur')"
    />
    <span>最近事件：{{ latest || "-" }}</span>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("Cedar");
const latest = ref("");

const record = (name: string, value?: string) => {
  latest.value = value === undefined ? name : `${name}: ${value}`;
};
</script>
