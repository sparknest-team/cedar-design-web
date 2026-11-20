<script setup lang="ts">

import { ref } from "vue";

const active = ref(true);
</script>

<template>
  <div>
    <c-button variant="outline" @click="active = !active">切换局部变量</c-button>
    <c-theme-provider
      tag="section"
      :style-vars="active ? { '--c-demo-color': 'teal' } : null"
    >
      <p style="color: var(--c-demo-color, currentColor)">
        局部颜色
      </p>
      <c-theme-provider :style-vars="{ '--c-demo-color': 'coral' }">
        <p style="color: var(--c-demo-color)">
          嵌套覆盖
        </p>
      </c-theme-provider>
    </c-theme-provider>
    <p>外部不受影响</p>
  </div>
</template>
