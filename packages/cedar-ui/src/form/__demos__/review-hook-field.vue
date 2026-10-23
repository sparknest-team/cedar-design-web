<script setup lang="ts">
import { ref } from 'vue'
import { useFormItem } from '@cedarjs/ui'
const { mergedSize, mergedDisabled, mergedError, feedback, eventHandlers } = useFormItem()
const notices = ref<string[]>([])
function notify(name: 'onChange' | 'onInput' | 'onFocus' | 'onBlur', event: Event) {
  eventHandlers.value?.[name]?.(event)
  notices.value = [...notices.value.slice(-7), name]
}
</script>
<template>
  <c-space wrap>
    <c-button v-for="name in (['onChange', 'onInput', 'onFocus', 'onBlur'] as const)" :key="name" :size="mergedSize" :disabled="mergedDisabled" @click="notify(name, $event)">{{ name }}</c-button>
    <c-tag :status="mergedError ? 'danger' : 'normal'">{{ feedback || (mergedError ? '字段校验失败' : '无校验错误') }}</c-tag>
    <span role="status">{{ notices.join(' → ') || '选择回调触发表单项校验' }}</span>
  </c-space>
</template>
