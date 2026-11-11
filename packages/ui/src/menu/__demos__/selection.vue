<template>
  <c-space direction="column">
    <c-menu v-model="active" :options="options" @select="handleSelect">
      <c-button>{{ selectedLabel || "请选择操作" }}</c-button>
    </c-menu>
    <span
      >当前值：{{ active || "-" }}，最近选择：{{ selectedLabel || "-" }}</span
    >
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref("edit");
const selectedLabel = ref("编辑");
const options = [
  { label: '编辑', value: 'edit' },
  { label: '复制', value: 'copy' },
  { label: '删除', value: 'delete' },
]

const handleSelect = (_value: unknown, option: { label?: string | number }) => {
  selectedLabel.value = String(option.label ?? "");
};
</script>
