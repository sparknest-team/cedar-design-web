<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-button @click="disabled = !disabled">
      {{ disabled ? 'Enable' : 'Disable' }}
    </c-button>
    <c-collapse :default-value="[1]">
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="1" :disabled="disabled">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="2" :disabled="disabled">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
    </c-collapse>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const disabled = ref(false)
</script>
