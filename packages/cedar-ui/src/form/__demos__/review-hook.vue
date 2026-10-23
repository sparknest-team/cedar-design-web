<script setup lang="ts">
import { reactive } from 'vue'
import ReviewHookField from './review-hook-field.vue'
const model = reactive({ name: '' })
</script>
<template>
  <c-form :model="model" :rules="{ name: [{ required: true, message: '请输入审查值' }] }">
    <c-form-item field="name" label="useFormItem / FormItemEventHandler" :validate-trigger="['change', 'input', 'focus', 'blur']">
      <c-space direction="column">
        <c-input v-model="model.name" placeholder="输入值后比较四种回调的校验结果" />
        <ReviewHookField />
      </c-space>
    </c-form-item>
  </c-form>
</template>
