<template>
  <c-space class="Home">
    <div v-tooltip:ellipsis class="text-container">
      相见时难别亦难，东风无力百花残。 春蚕到死丝方尽，蜡炬成灰泪始干。 晓镜但愁云鬓改，夜吟应觉月光寒。
      蓬山此去无多路，青鸟殷勤为探看。
    </div>
    <div v-tooltip:ellipsis class="text-container">没溢出</div>
  </c-space>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const state = reactive({})
</script>

<style lang="scss" scoped>
.text-container {
  width: 100px;
}
</style>
