<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
defineProps<{ kind: 'thead' | 'tbody' | 'tr' | 'th' | 'td'; height?: number }>()
const version = ref(1)
const columns = [{ title: 'Name', dataIndex: 'name' }]
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <button id="advance" @click="version++">Advance</button>
  <Table :columns="columns" :data="data" :pagination="false" :height="height">
    <template v-if="kind === 'thead'" #thead><thead v-memo="[version]" :data-version="version" /></template>
    <template v-if="kind === 'tbody'" #tbody><tbody v-memo="[version]" :data-version="version" /></template>
    <template v-if="kind === 'tr'" #tr><tr v-memo="[version]" :data-version="version" /></template>
    <template v-if="kind === 'th'" #th><th v-memo="[version]" :data-version="version" /></template>
    <template v-if="kind === 'td'" #td><td v-memo="[version]" :data-version="version" /></template>
  </Table>
</template>
