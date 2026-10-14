<script setup>
import { ref } from 'vue'

const value = ref('remote')
const options = ref([])
async function load() {
  options.value = await Promise.resolve([
    { label: '异步设备', value: 'remote' },
    { label: '设备 A', value: 'a' },
    { label: '停用设备', value: 'locked', disabled: true },
  ])
}
</script>

<template>
  <c-space direction="column">
    <p>业务值独立于当前选项，加载或移除选项不会清空已选值：{{ value }}</p>
    <c-space>
      <c-button size="sm" @click="load">加载选项</c-button>
      <c-button size="sm" @click="options = []">移除选项</c-button>
    </c-space>
    <c-radio-group v-model="value" :options="options" />
  </c-space>
</template>
