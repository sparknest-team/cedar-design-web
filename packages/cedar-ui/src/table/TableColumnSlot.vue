<template><slot /></template>
<script setup lang="ts">
import { onUpdated } from 'vue'
const props = defineProps<{ onChanged: () => void }>()
onUpdated(() => props.onChanged())
</script>
