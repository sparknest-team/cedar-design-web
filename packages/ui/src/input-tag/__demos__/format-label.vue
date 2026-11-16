<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("inputTagFormatLabelInline");

const selected = [{ value: "alice", label: "Alice", department: "设计" }];
const formatLabel = (item: { label?: string; department?: string }) =>
  `${item.label} · ${item.department}`;
</script>

<template>
  <c-space direction="column" style="width: 100%" :size="12">
    <p>{{ inlineCopy.formatSelectedText }}</p>
    <c-input-tag
      :default-value="['alice']"
      :options="selected"
      :format-label="formatLabel"
    />
    <p>{{ inlineCopy.customizeSelectedContent }}</p>
    <c-input-tag :default-value="['alice']" :options="selected">
      <template #label="{ data }"
        ><strong>{{ data.label }}</strong> · {{ data.department }}</template
      >
    </c-input-tag>
  </c-space>
</template>
