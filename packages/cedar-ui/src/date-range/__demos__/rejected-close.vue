<script setup>
import { ref } from 'vue'

const value = ref(['2026-09-22', '2026-09-24'])
const open = ref(false)
const closeRequests = ref(0)
const commits = ref(0)

function requestOpen(next) {
  if (next) open.value = true
  else closeRequests.value++
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <p>关闭请求会被父级拒绝；修改起止日期后可再次确认，重复确认不应重复提交。</p>
    <c-date-range v-model="value" :open="open" @update:open="requestOpen" @change="commits++">
      <template #actions="{ confirm, disabled }">
        <c-button :disabled="disabled" @click="confirm()">确认</c-button>
        <c-button @click="open = false">允许关闭</c-button>
      </template>
    </c-date-range>
    <span data-test="date-range-transaction-state">值：{{ value.join(' ~ ') }}；提交：{{ commits }}；拒绝关闭：{{ closeRequests }}</span>
  </div>
</template>
