<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
const props = defineProps<{ kind: 'thead' | 'tbody' | 'tr' | 'td'; start?: boolean }>()
const enabled = ref(props.start ?? false)
const columns = [{ title: 'Name', dataIndex: 'name', slotName: 'value' }]
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <button id="toggle" @click="enabled = !enabled">Toggle</button>
  <Table :columns="columns" :data="data" :pagination="false" :height="200">
    <template v-if="kind === 'thead' && enabled" #thead><thead data-dynamic="thead" /></template>
    <template v-if="kind === 'tbody' && enabled" #tbody><tbody data-dynamic="tbody" /></template>
    <template v-if="kind === 'tr' && enabled" #tr><tr data-dynamic="tr" /></template>
    <template v-if="kind === 'td' && enabled" #td><td data-dynamic="td" /></template>
    <template #value><input data-editor></template>
  </Table>
</template>
