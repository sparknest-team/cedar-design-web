<template>
  <c-date-range-picker @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="week" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="month" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="year" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="quarter" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker
    show-time
    :default-value="['2025-01-05 00:00:00', '2025-01-10 00:00:00']"
    @change="onChange"
    @select="onSelect" />
  <p>{{ feedback }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DateSelection } from '@cedar-design/ui-vue'

const feedback = ref('选择日期后查看事件值')
const onSelect = (value: DateSelection) => { feedback.value = '选择：' + JSON.stringify(value) }
const onChange = (value: DateSelection) => { feedback.value = '提交：' + JSON.stringify(value) }
</script>
