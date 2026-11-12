<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
const props = defineProps<{ kind: 'thead' | 'tbody' | 'tr' | 'th' | 'td'; height?: number; initiallyEnabled?: boolean }>()
const enabled = ref(props.initiallyEnabled ?? false)
const columns = [{ title: 'Name', dataIndex: 'name' }]
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <button id="toggle-structure" @click="enabled = !enabled">Toggle</button>
  <Table :columns="columns" :data="data" :pagination="false" :height="props.height">
    <template #[props.kind]><component :is="props.kind" v-if="enabled" data-conditional-structure /></template>
  </Table>
</template>
