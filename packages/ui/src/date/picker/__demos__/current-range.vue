<script setup lang="ts">
import { ref } from 'vue'

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
const selected = ref(yesterday)
const showCurrent = ref(true)
const showNowButton = ref(true)
const exchangeTime = ref(true)
const range = ref(['2025-01-05 09:00', '2025-01-10 18:00'])
</script>
<template>
  <div>
    <p>今日高亮和选择当前是两个独立功能。</p>
    <c-checkbox v-model="showCurrent"> 今日高亮</c-checkbox>
    <c-checkbox v-model="showNowButton"> 选择当前按钮</c-checkbox>
    <c-date-picker
      v-model="selected"
      value-format="Date"
      :default-picker-value="new Date()"
      :show-current="showCurrent"
      :show-now-button="showNowButton"
      :disable-confirm="false"
    />
    <p>确认后选中：{{ selected }}</p>
    <c-checkbox v-model="exchangeTime"> 日期反序时连同时间交换</c-checkbox>
    <p>先选较晚日期，再选较早日期，对比起止时间。</p>
    <c-date-range-picker
      v-model="range"
      show-time
      format="YYYY-MM-DD HH:mm"
      value-format="YYYY-MM-DD HH:mm"
      :exchange-time="exchangeTime"
      :disable-confirm="false"
    />
    <p>确认后范围：{{ range }}</p>
  </div>
</template>
