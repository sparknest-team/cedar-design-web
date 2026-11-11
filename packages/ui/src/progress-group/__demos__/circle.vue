<script setup lang="ts">
const items = [
  { label: "系统", value: 24, color: "#64748b" },
  { label: "应用", value: 18, color: "#f53f3f" },
  { label: "媒体", value: 32, color: "#00b42a" },
];
</script>

<template>
  <c-space wrap size="48px" align="flex-start">
    <c-progress-group mode="circle" :items="items" show-text />
    <c-progress-group
      mode="circle"
      :items="items"
      :circle-size="168"
      :stroke-width="12"
      show-text
    >
      <template #text="{ value, max }">
        <div style="text-align: center">
          <strong>{{ value }}</strong
          ><br /><small>/ {{ max }} GB</small>
        </div>
      </template>
    </c-progress-group>
  </c-space>
</template>
