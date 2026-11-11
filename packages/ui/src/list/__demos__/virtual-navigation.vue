<script setup>
import { ref } from 'vue'
const list = ref()
const rows = Array.from({ length: 1000 }, (_, id) => ({ id, name: '记录 ' + (id + 1) }))
</script>
<template>
  <c-space direction="column" style="width: 100%">
    <c-space wrap>
      <c-button @click="list.scrollIntoView({ key: 499, align: 'top' })">第 500 项置顶</c-button>
      <c-button @click="list.scrollIntoView({ key: 499, align: 'bottom' })">第 500 项置底</c-button>
      <c-button @click="list.scrollIntoView({ key: 499, align: 'auto' })">仅滚动到可见</c-button>
    </c-space>
    <c-list ref="list" :data="rows" :virtual-list-props="{ height: 240, itemKey: 'id', estimatedSize: 48, buffer: 10 }">
      <template #item="{ item, index }"><c-list-item><template #prefix>{{ index + 1 }}</template>{{ item.name }}</c-list-item></template>
    </c-list>
  </c-space>
</template>
