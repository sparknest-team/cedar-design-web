<template>
  <SearchDrawer
    :open="open" placement="top" height="100vh" :overlay="false"
    :header="false" :footer="false" :closable="false"
    :drawer-class="n('popup')" :body-style="{ padding: 0 }"
    :aria-label="historyText"
    @update:open="$emit('update:open', $event)" @closed="$emit('closed')"
  ><slot /></SearchDrawer>
</template>
<script setup lang="ts">
import SearchDrawer from '../drawer'
import { createNamespace } from '../_utils/global-config'
import { useSearchLocale } from './use-search-locale'
const { historyText } = useSearchLocale()
defineProps<{ open: boolean }>()
defineEmits<{ 'update:open': [open: boolean]; closed: [] }>()
const { n } = createNamespace('search')
</script>
