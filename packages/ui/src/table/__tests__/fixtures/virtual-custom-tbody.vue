<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../table'
const enabled = ref(false)
const marker = ref('one')
const rows = Array.from({ length: 30 }, (_, key) => ({ key, name: `Row ${key}` }))
const columns = [{ title: 'Name', dataIndex: 'name', slotName: 'cell' }]
</script>
<template>
  <main>
    <button id="toggle" @click="enabled = !enabled">Toggle tbody</button>
    <button id="change" @click="marker = 'two'">Change marker</button>
    <Table :columns="columns" :data="rows" :pagination="false" :virtual-list-props="{ height: 100, estimatedSize: 30 }">
      <template v-if="enabled" #tbody><tbody :data-marker="marker" /></template>
      <template #cell><input class="editor" /></template>
    </Table>
  </main>
</template>
