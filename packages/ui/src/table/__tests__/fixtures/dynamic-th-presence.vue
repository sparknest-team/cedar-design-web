<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
const props = defineProps<{ start?: boolean }>()
const enabled = ref(props.start ?? false)
const label = ref('First name')
const columns = [{ title: 'Name', dataIndex: 'name' }]
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <button id="toggle" @click="enabled = !enabled">Toggle</button>
  <button id="rename" @click="label = 'Updated name'">Rename</button>
  <Table :columns="columns" :data="data" :pagination="false" :height="200">
    <template v-if="enabled" #th><th data-custom :aria-label="label" /></template>
  </Table>
</template>
