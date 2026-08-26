<template>
  <div style="width: 360px">
    <c-segmented v-model="value" block :options="['列表', '看板', '日历']" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('列表')
</script>
