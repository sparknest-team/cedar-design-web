<template>
  <span :class="n()"><slot /></span>
</template>

<script setup lang="ts">
import { createNamespace } from '../_utils/global-config'

defineOptions({ name: createNamespace('input-group-label').name })
const { n } = createNamespace('input-group-label')
</script>
