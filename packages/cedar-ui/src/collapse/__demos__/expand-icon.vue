<template>
  <c-collapse :default-active-names="['1', 2]">
    <template #expand-icon="{ active }">
      <c-icon-face-smile-fill v-if="active" />
      <c-icon-face-frown-fill v-else />
    </template>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1">
      <template #expand-icon="{ active }">
        <c-icon-double-down v-if="active" />
        <c-icon-double-right v-else />
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>

<script lang="ts" setup>
</script>
