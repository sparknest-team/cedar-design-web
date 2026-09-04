<template>
  <c-button status="primary" @click="onClick">Click me to preview image</c-button>
  <c-image-preview
    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    v-model:open="open"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const open = ref(false);
const onClick = () => {
  open.value = true;
};
</script>
