<script setup lang="ts">
import { ref } from 'vue'
const first = ref('2021-01-03')
const second = ref('2021-01-03')
const monday = ref(true)
const monthModel = ref('2025 January 15')
</script>

<template>
  <p>两个实例独立管理周起始日。可切换顶部语言，模型不随展示语言改变。</p>
  <c-date v-model="first" type="week" :date-picker-props="{ dayStartOfWeek: 0 }" />
  <c-date v-model="second" type="week" :date-picker-props="{ dayStartOfWeek: monday ? 1 : 2 }" />
  <c-checkbox v-model="monday">第二个实例周一起始（关闭为周二）</c-checkbox>
  <c-date-picker type="week" v-model="first" picker-value="2021-01-01" :day-start-of-week="0" />
  <c-date-picker type="week" v-model="second" picker-value="2021-01-01" :day-start-of-week="monday ? 1 : 2" />
  <c-date v-model="monthModel" value-format="YYYY MMMM DD" format="YYYY MMMM DD" />
  <p>月份名称模型（稳定英文协议）：{{ monthModel }}</p>
</template>
