<template>
  <c-form :style="{ width: '600px' }">
    <c-form-item field="name" label="Username" validate-status="success" feedback>
      <c-input placeholder="please enter your username..." />
    </c-form-item>
  </c-form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
