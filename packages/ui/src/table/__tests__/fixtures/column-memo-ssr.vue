<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
import TableColumn from '../../table-column'
defineProps<{ split?: boolean }>()
const cols = ref(['name', 'city'])
const data = [{ key: 'a', name: 'Ada', city: 'Paris' }]
</script>
<template>
 <main>
  <button id="reverse" @click="cols.reverse()">Reverse</button>
  <button id="remove" @click="cols = cols.filter(x => x !== 'city')">Remove</button>
  <button id="add" @click="cols.push('city')">Add</button>
  <Table :height="split ? 200 : undefined" :data="data" :pagination="false">
   <template #columns>
    <TableColumn v-for="column in cols" :key="column" v-memo="[column]" :title="column" :data-index="column" />
   </template>
  </Table>
 </main>
</template>
