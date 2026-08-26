<template>
  <c-button type="primary" @click="open = true">Open preview</c-button>
  <c-image
    v-model:preview-open="open"
    width="200"
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const open = ref(false)
</script>
