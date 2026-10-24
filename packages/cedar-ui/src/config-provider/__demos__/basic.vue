<template>
  <c-space direction="column">
    <c-button @click="large = !large">切换尺寸</c-button>
    <c-config-provider :size="large ? 'lg' : 'sm'">
      <c-space>
        <c-input placeholder="继承全局尺寸" />
        <c-button>继承尺寸</c-button>
      </c-space>
    </c-config-provider>
    <p role="status">当前尺寸：{{ large ? 'lg' : 'sm' }}</p>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const large = ref(false)
</script>
