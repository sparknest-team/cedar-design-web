<script setup>
import { ref } from 'vue'
const disabled = ref(false)
const date = ref('2026-09-22')
const dateRange = ref(['2026-09-22', '2026-09-24'])
const time = ref('09:00:00')
const timeRange = ref(['23:00:00', '01:00:00'])
</script>

<template>
  <c-space direction="column">
    <p>范围字段：点击右侧输入可从结束端选择；Tab 切换两端不提交，回车或离开整个字段再提交。</p>
    <span>禁用字段</span>
    <c-switch v-model="disabled" aria-label="禁用字段" />
    <c-date v-model="date" :disabled="disabled" clearable placeholder="日期" />
    <c-date-range v-model="dateRange" :disabled="disabled" clearable :placeholder="['开始日期', '结束日期']" />
    <c-time v-model="time" :disabled="disabled" clearable placeholder="时间" />
    <c-time-range v-model="timeRange" :disabled="disabled" clearable show-next-day :placeholder="['开始时间', '结束时间']" />
    <p>日期：{{ date || '未选择' }}；日期范围：{{ dateRange }}</p>
    <p>时间：{{ time || '未选择' }}；时间范围：{{ timeRange }}</p>
  </c-space>
</template>
