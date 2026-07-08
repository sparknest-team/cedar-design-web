<template>
  <div>
    <c-button
      type="primary"
      @click="
        () => {
          timestamp = String(Date.now())
        }
      "
      style="margin-bottom: 20px"
    >
      reload
    </c-button>
  </div>
  <c-image
    width="200"
    height="200"
    :src="`https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`"
  >
    <template #loader>
      <img
        width="200"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
        style="filter: blur(5px)"
      />
    </template>
  </c-image>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const timestamp = ref('')
</script>
