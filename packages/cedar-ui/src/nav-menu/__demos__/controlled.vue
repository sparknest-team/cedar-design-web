<script setup lang="ts">
import { ref } from 'vue'
import type { NavMenuKey } from '../types'
import { options } from './data'
const selected = ref<NavMenuKey | null>(0)
const expanded = ref<NavMenuKey[]>([])
const acceptUpdates = ref(true)
const lastRequest = ref('尚未操作')
function select(key: NavMenuKey | null) {
  lastRequest.value = `请求选择：${key}`
  if (acceptUpdates.value) selected.value = key
}
function expand(keys: NavMenuKey[]) {
  lastRequest.value = `请求展开：${keys.join('、') || '无'}`
  if (acceptUpdates.value) expanded.value = keys
}
</script>
<template>
  <div>
    <c-button @click="acceptUpdates = !acceptUpdates">{{ acceptUpdates ? '当前接受更新，点击拒绝' : '当前拒绝更新，点击接受' }}</c-button>
    <c-nav-menu :options="options" :model-value="selected" :expanded-keys="expanded" @update:model-value="select" @update:expanded-keys="expand" />
    <p aria-live="polite">{{ lastRequest }}；实际选中：{{ selected }}；实际展开：{{ expanded.join('、') || '无' }}</p>
  </div>
</template>
