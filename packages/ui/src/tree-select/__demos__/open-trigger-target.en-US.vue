<template>
  <c-space direction="column">
    <c-radio-group
      v-model="target"
      :options="[
        { label: 'Whole field', value: 'field' },
        { label: 'Suffix icon only', value: 'icon' },
      ]"
    />
    <label><c-switch v-model="editable" /> Allow editing / search</label>
    <c-tree-select
      v-model="value"
      edit-mode="direct"
      :open-trigger-target="target"
      :filterable="editable"
      :options="[
        { value: 'a', label: 'Alpha' },
        { value: 'b', label: 'Beta' },
      ]"
    />
    <p>
      Disable editing to copy existing text. In icon mode, editing does not open
      the panel.
    </p>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const target = ref<"field" | "icon">("icon");
const editable = ref(true);
const value = ref("a");
</script>
