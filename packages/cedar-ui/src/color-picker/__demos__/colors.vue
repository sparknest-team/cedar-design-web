<template>
  <c-color-picker
    defaultValue="#00BEBE"
    :historyColors="history"
    showHistory
    showPreset
    @popup-visible-change="addHistory" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const history = ref(['#00BEBE'])
const addHistory = (visible, color) => {
  if (!visible) {
    const index = history.value.indexOf(color)
    if (index !== -1) {
      history.value.splice(index, 1)
    }
    history.value.unshift(color)
  }
}
</script>
