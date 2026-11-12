<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
const props = defineProps<{ kind: 'empty' | 'footer' | 'summary-cell' | 'value'; start?: boolean }>()
const enabled = ref(props.start ?? false)
const columns = [{ title: 'Name', dataIndex: 'name', slotName: 'value' }]
const data = props.kind === 'empty' ? [] : [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <button id="toggle" @click="enabled = !enabled">Toggle</button>
  <Table :columns="columns" :data="data" :pagination="false" :height="200" :summary="kind === 'summary-cell'">
    <template v-if="kind === 'empty' && enabled" #empty><span data-dynamic-content="empty">Custom empty</span></template>
    <template v-if="kind === 'footer' && enabled" #footer><span data-dynamic-content="footer">Custom footer</span></template>
    <template v-if="kind === 'summary-cell' && enabled" #summary-cell><span data-dynamic-content="summary-cell">Custom summary</span></template>
    <template v-if="kind === 'value' && enabled" #value><span data-dynamic-content="value">Custom cell</span></template>
  </Table>
</template>
