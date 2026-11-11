<script setup lang="ts">
import { ref } from 'vue'
import FieldDecorator from '../index'
const value = ref('可编辑的审查内容')
</script>
<template>
  <c-input v-model="value" aria-label="字段内容" placeholder="编辑装饰器内容 / Edit field content" />
  <FieldDecorator :value="value" placeholder="字段标签" hint clearable @clear="value = ''">
    <span>{{ value }}</span>
    <template #prefix>前缀</template>
    <template #suffix>后缀</template>
  </FieldDecorator>
</template>
