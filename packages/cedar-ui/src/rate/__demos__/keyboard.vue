<script setup>
import { ref } from 'vue'
const score = ref(2.5)
</script>

<template>
  <c-space direction="vertical">
    <p>Tab 聚焦；方向键按半分调整；Home 清零，End 满分。重复点击当前分数可清空。</p>
    <c-rate v-model="score" allow-half clearable aria-label="服务评分" />
    <span>当前评分：{{ score }}</span>
    <c-rate :default-value="3" readonly aria-label="只读评分" />
    <c-rate :default-value="3" disabled aria-label="禁用评分" />
  </c-space>
</template>
