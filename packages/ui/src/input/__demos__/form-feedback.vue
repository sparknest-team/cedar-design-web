<template>
  <c-form :model="model">
    <c-form-item field="account" label="账户" feedback :validate-status="status" :help="status === 'error' ? '请输入账户后重试' : undefined">
      <c-input v-model="model.account" placeholder="请输入账户" clearable />
    </c-form-item>
    <c-button status="primary" :loading="status === 'validating'" @click="validate">模拟异步校验</c-button>
  </c-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const model = reactive({ account: '' })
const status = ref<'validating' | 'success' | 'error'>()
let request = 0
async function validate() {
  const current = ++request
  const value = model.account
  status.value = 'validating'
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (current === request) status.value = value.trim() ? 'success' : 'error'
}
</script>
