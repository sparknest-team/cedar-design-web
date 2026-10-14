<template><UploadDrawer :open="Boolean(file)" placement="bottom" :header="false" :footer="false" :aria-label="label" @update:open="open => !open && $emit('close')" @closed="$emit('closed')"><video v-if="file" controls playsinline :src="file.url" style="width: 100%; max-height: 70vh" /></UploadDrawer></template>
<script setup lang="ts">
import UploadDrawer from '../drawer'
import type { UploadFileItem } from './interfaces'
defineProps<{ file?: UploadFileItem; label: string }>()
defineEmits<{ close: []; closed: [] }>()
</script>

