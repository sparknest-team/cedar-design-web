<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("mentionAtomicMentionInline");

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
    <p>{{ inlineCopy.typeToSelectAPerson }}</p>
    <c-mention
      v-model="content"
      atomic
      type="textarea"
      :options="people"
      :fallback-option="fallbackOption"
      :aria-label="inlineCopy.atomicMentions"
    />
    <c-button @click="names['shuai.meng'] = '孟帅（已更新）'">{{
      inlineCopy.updateMockName
    }}</c-button>
    <pre>{{ content }}</pre>
    <p>{{ inlineCopy.withoutOptionsTypeXiaomingAnd }}</p>
    <c-mention
      v-model="fallbackContent"
      atomic
      :options="[]"
      :fallback-option="fallbackOption"
      :aria-label="inlineCopy.fallbackOnly"
    />
    <pre>{{ fallbackContent }}</pre>
  </c-space>
</template>
