<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
defineProps<{ split?: boolean }>()
const count = ref(1)
const show = ref(true)
const columns = [{ title: 'Name', dataIndex: 'name', filterable: { filter: () => true, slotName: 'custom', triggerProps: { open: true, popupContainer: false, unmountOnClose: false } } }]
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <main>
    <button id="toggle" @click="show = !show">Toggle</button>
    <button id="increment" @click="count++">Increment</button>
    <Table :height="split ? 200 : undefined" :data="data" :pagination="false" :columns="columns">
      <template v-if="show" #custom="{ filterValue, setFilterValue }">
        <span v-for="n in [count]" :key="n" data-probe :data-value="filterValue.join(',')" @click="setFilterValue(['active'])">{{ n }}</span>
      </template>
    </Table>
  </main>
</template>
