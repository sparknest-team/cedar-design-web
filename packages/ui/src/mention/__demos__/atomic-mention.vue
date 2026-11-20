<script setup lang="ts">

import { reactive, ref } from "vue";

const content = ref("请联系 @[shuai.meng] 跟进");
const fallbackContent = ref("");
const people = [{ value: "xiaoming", label: "小明" }];
const names = reactive<Record<string, string>>({
  "shuai.meng": "孟帅",
  xiaoming: "小明",
});
const fallbackOption = (value: string | number | boolean) => ({
  value,
  label: names[String(value)] ?? String(value),
});
</script>

<template>
  <c-space direction="column" style="width: 100%" :size="12">
    <p>输入 @ 选择人员；在提及旁按 Backspace 可整体删除。</p>
    <c-mention
      v-model="content"
      atomic
      type="textarea"
      :options="people"
      :fallback-option="fallbackOption"
      aria-label="原子提及"
    />
    <c-button @click="names['shuai.meng'] = '孟帅（已更新）'">模拟更新姓名</c-button>
    <pre>{{ content }}</pre>
    <p>无候选项时输入 @xiaoming 并按回车，通过 fallback 解析姓名。</p>
    <c-mention
      v-model="fallbackContent"
      atomic
      :options="[]"
      :fallback-option="fallbackOption"
      aria-label="仅回退"
    />
    <pre>{{ fallbackContent }}</pre>
  </c-space>
</template>
