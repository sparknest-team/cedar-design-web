<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-button @click="offset = !offset">
      {{ offset ? '隐藏间距' : '显示间距' }}
    </c-button>
    <c-collapse v-model:active-names="activeNames" :offset="offset">
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

const offset = ref(true)
const activeNames = ref<(string | number)[]>(['1', '2'])
</script>
