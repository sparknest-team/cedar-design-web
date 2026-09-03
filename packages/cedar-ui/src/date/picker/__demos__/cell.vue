<template>
  <c-date-picker>
    <template #cell="{ date }">
      <div class="c-picker-date">
        <div class="c-picker-date-value" :style="getCellStyle(date)">
          {{ date.getDate() }}
        </div>
      </div>
    </template>
  </c-date-picker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const highlightDates = [6, 14, 22]
    const highlightStyle = {
      border: '1px solid rgb(var(--brand-6))',
    }
    return {
      getCellStyle(date: any) {
        return highlightDates.includes(date.getDate()) ? highlightStyle : {}
      },
    }
  },
})
</script>
