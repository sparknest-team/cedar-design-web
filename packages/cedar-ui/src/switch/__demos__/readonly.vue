<script setup lang="ts">
const variants = ['circle', 'round', 'line', 'tonal'] as const
</script>

<template>
  <c-space wrap
    ><template v-for="variant in variants" :key="variant"
      ><c-switch :variant="variant" readonly :aria-label="variant + ' off'" /><c-switch
        :variant="variant"
        :default-value="true"
        readonly
        :aria-label="variant + ' on'" /></template
  ></c-space>
</template>
