<template>
  <div class="divider-text-demo" :dir="isLtr ? 'ltr' : 'rtl'">
    <c-switch v-model="isLtr" />{{ isLtr ? 'LTR' : 'RTL' }}
    <p>左边文字分割线</p>
    <c-divider text-align="start" description="内容1" :orientation="orientation"></c-divider>
    <p>中间文字分割线</p>
    <c-divider text-align="center" description="内容" :orientation="orientation"></c-divider>
    <p>右边文字分割线</p>
    <c-divider text-align="end" description="内容" :orientation="orientation"></c-divider>
    <p>自定义图标分割线</p>
    <c-divider :size-x="[100, 0]" :orientation="orientation">
      <c-icon-star />
    </c-divider>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const isLtr = ref(true)
const orientation = ref('horizontal')
</script>
<style scoped>
.divider-text-demo {
  box-sizing: border-box;
  width: 560px;
  padding: 24px;
  border: 30px solid rgb(var(--gray-2));
}
</style>
