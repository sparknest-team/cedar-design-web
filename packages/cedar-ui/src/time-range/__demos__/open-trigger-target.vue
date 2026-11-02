<template>
  <c-space direction="column">
    <c-radio-group
      v-model="target"
      :options="[
        { label: '整个字段', value: 'field' },
        { label: '仅右侧图标', value: 'icon' },
      ]"
    />
    <label><c-switch v-model="editable" /> 允许编辑 / 搜索</label>
    <c-time-range
      v-model="value"
      edit-mode="direct"
      :open-trigger-target="target"
      :input-editable="editable"
    />
    <p>关闭编辑后，可以复制已有文本；仅图标模式下编辑不会展开。</p>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const target = ref<"field" | "icon">("icon");
const editable = ref(true);
const value = ref(["09:30:00", "10:30:00"]);
</script>
