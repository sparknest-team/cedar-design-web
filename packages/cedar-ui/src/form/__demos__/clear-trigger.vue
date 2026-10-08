<script setup lang="ts">
import { reactive, ref } from 'vue'

const model = reactive({ keyword: 'Cedar' })
const formRef = ref()
</script>

<template>
  <c-form ref="formRef" :model="model" layout="vertical" style="max-width: 360px">
    <c-form-item field="keyword" label="关键词" :rules="[{ required: true, message: '请输入关键词' }]" validate-trigger="clear">
      <c-input v-model="model.keyword" clearable placeholder="清空后立即校验" />
    </c-form-item>
    <c-button @click="formRef?.resetFields()">重置</c-button>
  </c-form>
</template>
