<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-button @click="disabled = !disabled">
      {{ disabled ? '启用' : '禁用' }}
    </c-button>
    <c-collapse :default-active-names="[1]">
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="1" :disabled="disabled">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="2" :disabled="disabled">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
    </c-collapse>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const disabled = ref(false)
</script>
