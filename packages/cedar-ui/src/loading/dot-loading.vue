<template>
  <div
    :class="n()"
    :style="
      size ? { width: `${size * DOT_COUNT}px`, height: `${size}px` } : undefined
    "
  >
    <span
      v-for="index in DOT_COUNT"
      :key="index"
      :class="n('item')"
      :style="{
        backgroundColor: color,
        width: size ? `${size}px` : undefined,
        height: size ? `${size}px` : undefined,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "../_utils/global-config";

defineOptions({
  name: createNamespace("dot-loading").name,
});

defineProps<{ size?: number; color?: string }>();

const DOT_COUNT = 5;
const { n } = createNamespace("dot-loading");
</script>
