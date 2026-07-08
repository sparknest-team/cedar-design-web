<template>
  <c-textarea
    default-value="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
    auto-size />
  <c-textarea
    default-value="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
    :auto-size="{
      minRows: 2,
      maxRows: 5,
    }"
    style="margin-top: 20px" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  })
</script>
