<script setup lang="ts">
import { useDemoLocale } from '../../__demos__/locale'

const copy = useDemoLocale('section')
</script>

<template>
  <c-section variant="card" show-marker :heading-level="3">
    <template #title>{{ copy.history }}</template>
    <template #description>{{ copy.latestRelease }}</template>
    <p>{{ copy.exportRelease }}</p>
  </c-section>
</template>
