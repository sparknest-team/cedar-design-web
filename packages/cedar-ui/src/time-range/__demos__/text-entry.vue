<script setup>
import { ref } from 'vue'

const value = ref(['09:00', '10:00'])
const editable = ref(true)
</script>

<template>
  <c-space direction="column" :size="12" style="width: 100%">
    <label><input v-model="editable" type="checkbox" /> 允许手输</label>
    <p>回车或失焦提交，Esc 撤销。合法范围为 08:00–18:00。</p>
    <c-time-range v-model="value" :input-editable="editable" format="HH:mm" min="08:00" max="18:00" clearable />
    <span>{{ value }}</span>
  </c-space>
</template>
