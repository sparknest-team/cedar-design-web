<script setup lang="ts">
import { ref } from "vue";
import { Ripple } from "@cedar-design/ui-vue";
import "@cedar-design/ui-vue/ripple/style";

const vRipple = Ripple;
const disabled = ref(false);
</script>

<template>
  <c-space wrap>
    <div role="button" tabindex="0" v-ripple="{ disabled }" class="ripple-demo"
      >Ripple</div
    >
    <div
      role="button" tabindex="0"
      v-ripple="{ disabled }"
      class="ripple-demo ripple-demo--long"
      >600ms 扩散／800ms 消退</div
    >
    <c-button @click="disabled = !disabled">{{
      disabled ? "启用水波" : "禁用水波"
    }}</c-button>
  </c-space>
</template>

<style scoped>
.ripple-demo--long {
  --c-ripple-expand-duration: 600ms;
  --c-ripple-fade-duration: 800ms;
}
.ripple-demo {
  position: relative;
  overflow: hidden;
  padding: 8px 20px;
  border: 1px solid var(--c-sys-color-border-default);
  border-radius: var(--c-sys-radius-sm);
  color: var(--c-sys-color-action-primary);
  background: var(--c-sys-color-surface-overlay);
  cursor: pointer;
}
</style>
