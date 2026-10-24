<script setup lang="ts">
const variants = ['circle', 'round', 'line', 'tonal'] as const
</script>

<template>
  <c-space wrap
    ><template v-for="variant in variants" :key="variant"
      ><c-switch :variant="variant" loading :aria-label="variant + ' off'" /><c-switch
        :variant="variant"
        :default-value="true"
        loading
        :aria-label="variant + ' on'" /></template
  ></c-space>
</template>
