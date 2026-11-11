<template>
  <c-typography>
    <c-typography-paragraph copyable>Click the icon to copy this text.</c-typography-paragraph>
    <c-typography-paragraph editable v-model:edit-text="str">
      {{ str }}
    </c-typography-paragraph>
  </c-typography>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const str = ref('Click the icon to edit this text.')
</script>
