<script setup>
import { ref } from 'vue'
const minute = ref()
const second = ref()
</script>

<template>
  <c-space direction="column" size="lg">
    <span>分钟精度：显式设置显示格式和模型格式</span>
    <c-date v-model="minute" show-time format="YYYY-MM-DD HH:mm" value-format="YYYY-MM-DD HH:mm" clearable />
    <span>已提交值：{{ minute || '未选择' }}</span>
    <span>秒精度：Cedar 的日期时间默认格式</span>
    <c-date v-model="second" show-time clearable />
    <span>已提交值：{{ second || '未选择' }}</span>
  </c-space>
</template>
