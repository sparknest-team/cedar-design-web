<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-button @click="divider = !divider">
      {{ divider ? 'Hide divider' : 'Show divider' }}
    </c-button>
    <c-collapse :default-value="[]" :divider="divider">
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="2">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="3">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
    </c-collapse>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const divider = ref(true)
</script>
