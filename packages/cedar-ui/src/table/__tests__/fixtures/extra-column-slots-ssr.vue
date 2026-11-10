<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
defineProps<{ mode: 'header' | 'cell' | 'actions'; split?: boolean }>()
const count = ref(1)
const show = ref(true)
</script>
<template>
  <main>
    <button id="toggle" @click="show = !show">Toggle</button>
    <button id="increment" @click="count++">Increment</button>
    <Table :columns="[{ title: 'Name', dataIndex: 'name' }]" :data="[{ key: 'a', name: 'Ada' }]" :height="split ? 200 : undefined" :pagination="false" :extra-column="true">
      <template v-if="mode === 'header' && show" #extra-column-header="{ column }">
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe :data-scope="column.dataIndex" @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'cell' && show" #extra-column-cell="{ record }">
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe :data-scope="record.name" @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'actions' && show" #header-cell-actions="{ dataIndex }">
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe :data-scope="dataIndex" @click.stop="count++">{{ n }}</span>
      </template>
    </Table>
  </main>
</template>
