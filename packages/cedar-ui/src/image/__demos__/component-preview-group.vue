<template>
  <c-button status="primary" @click="onClick"
    >Click me to preview multiple image</c-button
  >
  <c-image-preview-group
    v-model:open="open"
    v-model:current="current"
    loop
    :images="[
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
    ]"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const open = ref(false);
const current = ref(3);
const onClick = () => {
  open.value = true;
};
</script>
