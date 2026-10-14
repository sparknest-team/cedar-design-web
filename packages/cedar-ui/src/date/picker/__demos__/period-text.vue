<script setup lang="ts">
import { ref } from 'vue'

const week = ref('2020-12-28')
const quarter = ref('2025-04')
const range = ref(['2020-12-28', '2021-01-04'])
</script>

<template>
  <p>周一起始，中文可手输 2020-53周；切换英文后使用英文序数。提交为该周起始日。</p>
  <c-date v-model="week" type="week" :date-picker-props="{ dayStartOfWeek: 1 }" />
  <p>周模型：{{ week }}</p>
  <c-date v-model="quarter" type="quarter" />
  <p>季度输入 2025-Q2，模型为季度首月：{{ quarter }}</p>
  <c-date-range v-model="range" type="week" :date-range-picker-props="{ dayStartOfWeek: 1 }" />
  <p>周范围不自动交换手输端点：{{ range }}</p>
</template>
