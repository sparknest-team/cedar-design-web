<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
defineProps<{ kind: 'thead' | 'tbody' | 'tr' | 'th' | 'td'; height?: number }>()
const items = ref([{ id: 'alpha', version: 1 }, { id: 'beta', version: 1 }])
const columns = [{ title: 'Name', dataIndex: 'name' }]
const data = [{ key: 'a', name: 'Ada' }]
</script>
<template>
  <button id="reverse" @click="items.reverse()">Reverse</button>
  <button id="advance" @click="items[0].version++">Advance</button>
  <button id="remove" @click="items.shift()">Remove</button>
  <button id="add" @click="items.push({ id: 'gamma', version: 3 })">Add</button>
  <Table :columns="columns" :data="data" :pagination="false" :height="height">
    <template v-if="kind === 'thead'" #thead><thead v-for="item in items" :key="item.id" v-memo="[item.version]" :data-marker="item.id" :data-version="item.version" /></template>
    <template v-if="kind === 'tbody'" #tbody><tbody v-for="item in items" :key="item.id" v-memo="[item.version]" :data-marker="item.id" :data-version="item.version" /></template>
    <template v-if="kind === 'tr'" #tr><tr v-for="item in items" :key="item.id" v-memo="[item.version]" :data-marker="item.id" :data-version="item.version" /></template>
    <template v-if="kind === 'th'" #th><th v-for="item in items" :key="item.id" v-memo="[item.version]" :data-marker="item.id" :data-version="item.version" /></template>
    <template v-if="kind === 'td'" #td><td v-for="item in items" :key="item.id" v-memo="[item.version]" :data-marker="item.id" :data-version="item.version" /></template>
  </Table>
</template>
