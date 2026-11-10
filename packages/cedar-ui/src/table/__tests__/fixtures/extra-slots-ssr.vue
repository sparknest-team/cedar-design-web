<script setup lang="ts">
import { computed, ref } from 'vue'
import Table from '../../index'
const props = defineProps<{ mode: 'expandrow' | 'expandicon' | 'pagination' | 'left' | 'right' | 'summary' | 'drag'; split?: boolean }>()
const count = ref(1)
const show = ref(true)
const columns = [{ title: 'Name', dataIndex: 'name' }]
const data = computed(() => props.mode === 'expandicon' ? [{ key: 'a', name: 'Ada', children: [{ key: 'b', name: 'Bob' }] }] : [{ key: 'a', name: 'Ada' }])
</script>
<template>
  <main>
    <button id="toggle" @click="show = !show">Toggle</button>
    <button id="increment" @click="count++">Increment</button>
    <Table :columns="columns" :data="data" :height="split ? 200 : undefined" :pagination="['pagination', 'left', 'right'].includes(mode) ? {} : false" :expanded-keys="['a']" :summary="mode === 'summary'" :draggable="mode === 'drag' ? { type: 'handle' } : undefined">
      <template v-if="mode === 'expandrow' && show" #expand-row="{ record }">
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe :data-scope="record.name" @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'expandicon' && show" #expand-icon="{ record }">
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe :data-scope="record.name" @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'pagination' && show" #pagination="{ total }">
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe :data-scope="total" @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'left' && show" #pagination-left>
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'right' && show" #pagination-right>
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'drag' && show" #drag-handle-icon>
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe @click.stop="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'summary' && show" #summary-cell="{ column }">
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe :data-scope="column.dataIndex" @click.stop="count++">{{ n }}</span>
      </template>
    </Table>
  </main>
</template>
