<script setup lang="ts">
const variants = ['circle', 'round', 'line', 'tonal'] as const
</script>

<template>
  <c-space wrap
    ><c-switch v-for="variant in variants" :key="variant" :variant="variant" :aria-label="variant"
      ><template #checked-icon>✓</template><template #unchecked-icon>×</template></c-switch
    ></c-space
  >
</template>
