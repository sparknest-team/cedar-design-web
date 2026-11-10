<script setup lang="ts">
import { computed, ref } from 'vue'
import Table from '../../index'
const props = defineProps<{ mode: 'title' | 'cell' | 'footer' | 'empty'; split?: boolean }>()
const count = ref(1)
const show = ref(true)
const columns = computed(() => [{ title: 'Name', dataIndex: 'name', ...(props.mode === 'title' ? { titleSlotName: 'probe' } : props.mode === 'cell' ? { slotName: 'probe' } : {}) }])
const data = computed(() => props.mode === 'empty' ? [] : [{ key: 'a', name: 'Ada' }])
</script>
<template>
  <main>
    <button id="toggle" @click="show = !show">Toggle</button>
    <button id="increment" @click="count++">Increment</button>
    <Table :columns="columns" :data="data" :height="split ? 200 : undefined" :pagination="false">
      <template v-if="(mode === 'title' || mode === 'cell') && show" #probe>
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe @click="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'footer' && show" #footer>
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe @click="count++">{{ n }}</span>
      </template>
      <template v-if="mode === 'empty' && show" #empty>
        <span v-for="n in [count]" :key="n" v-memo="[n]" data-probe @click="count++">{{ n }}</span>
      </template>
    </Table>
  </main>
</template>
