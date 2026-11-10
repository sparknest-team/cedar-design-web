<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
import TableColumn from '../../table-column'
defineProps<{ split?: boolean; mode: 'title' | 'cell' }>()
const count = ref(1)
const show = ref(true)
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <main>
    <button id="toggle" @click="show = !show">Toggle</button>
    <button id="increment" @click="count++">Increment</button>
    <Table :height="split ? 200 : undefined" :data="data" :pagination="false">
      <template #columns>
        <TableColumn title="Name" data-index="name">
          <template v-if="show && mode === 'title'" #title>
            <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe @click="count++">{{ n }}</span>
          </template>
          <template v-if="show && mode === 'cell'" #cell="{ record, rowIndex }">
            <span v-for="n in [count]" :key="n" v-memo="[n, record.name]" data-probe :data-value="record.name + rowIndex" @click="count++">{{ n }}</span>
          </template>
        </TableColumn>
      </template>
    </Table>
  </main>
</template>
