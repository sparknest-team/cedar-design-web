<template>
  <UploadDrawer
    :popup-container="popupContainer"
    :open="Boolean(file)"
    placement="bottom"
    :header="false"
    :footer="false"
    :ariaLabel="label"
    @update:open="(open) => !open && $emit('close')"
    @closed="$emit('closed')"
    ><video v-if="file" controls playsinline :src="file.url" style="width: 100%; max-height: 70vh"
  /></UploadDrawer>
</template>
<script setup lang="ts">
import UploadDrawer from '../drawer'
import type { UploadFileItem } from './interfaces'
import type { UploadProps } from './props'

defineProps<{ file?: UploadFileItem; label: string; popupContainer?: UploadProps['popupContainer'] }>()
defineEmits<{ close: []; closed: [] }>()
</script>
