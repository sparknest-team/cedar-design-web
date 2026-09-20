<template>
  <c-popover v-model:open="open" title="快速备注">
    <c-button>编辑备注</c-button>
    <template #content>
      <c-space direction="vertical">
        <c-input v-model="draft" placeholder="关闭后再次打开，草稿仍会保留" />
        <c-button status="primary" @click="open = false">完成</c-button>
      </c-space>
    </template>
  </c-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const draft = ref('')
</script>
