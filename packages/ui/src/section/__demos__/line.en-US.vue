<template>
  <c-section title="Release history" variant="heading-line">
    <template #extra>
      <c-button :aria-expanded="expanded" @click="expanded = !expanded">
        {{ expanded ? 'Show latest' : 'Show all' }}
      </c-button>
    </template>
    <ul>
      <li>v1.2 · Added project export</li>
      <li v-if="expanded">v1.1 · Added member management</li>
    </ul>
  </c-section>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const expanded = ref(false)
</script>
