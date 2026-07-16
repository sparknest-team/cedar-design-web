<template>
  <c-button type="primary" @click="onClick">Click me to preview multiple images</c-button>
  <c-image-preview-group
    v-model:visible="visible"
    v-model:current="current"
    infinite
    :images="[
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    ]"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const current = ref(1)

const onClick = () => {
  visible.value = true
}
</script>
