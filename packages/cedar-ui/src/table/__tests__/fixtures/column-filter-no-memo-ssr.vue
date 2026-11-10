<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
import TableColumn from '../../table-column'
defineProps<{ split?: boolean; mode: 'icon' | 'content' }>()
const count = ref(1)
const show = ref(true)
const filterable = { filter: () => true, triggerProps: { open: true, popupContainer: false, unmountOnClose: false } }
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <main>
    <button id="toggle" @click="show = !show">Toggle</button>
    <button id="increment" @click="count++">Increment</button>
    <Table :height="split ? 200 : undefined" :data="data" :pagination="false">
      <template #columns>
        <TableColumn title="Name" data-index="name" :filterable="filterable">
          <template v-if="show && mode === 'icon'" #filter-icon>
            <span v-for="n in [count]" :key="n" data-probe @click.stop="count++">{{ n }}</span>
          </template>
          <template v-if="show && mode === 'content'" #filter-content="{ filterValue, setFilterValue }">
            <span v-for="n in [count]" :key="n" data-probe :data-value="filterValue.join(',')" @click="setFilterValue(['active'])">{{ n }}</span>
          </template>
        </TableColumn>
      </template>
    </Table>
  </main>
</template>
