<script setup>
import { ref } from 'vue'
const control = ref()
const value = ref(false)
const selected = ref([0])
</script>
<template>
  <c-space direction="column">
    <p>布尔模型始终返回布尔值；数组模型用 value 标识选项。 当前值：{{ value }}</p>
    <c-checkbox ref="control" v-model="value">启用通知</c-checkbox>
    <c-space wrap>
      <c-button size="sm" @click="control?.toggle()">切换选择</c-button>
      <c-button size="sm" @click="control?.focus()">聚焦</c-button>
      <c-button size="sm" @click="value = false">重置</c-button>
    </c-space>
    <p>数组模型：{{ selected }}</p>
    <c-checkbox v-model="selected" :value="0">数值 0</c-checkbox>
    <c-checkbox v-model="selected" :value="false">布尔 false</c-checkbox>
    <p>只读允许聚焦，禁用不允许操作；Enter/空格只影响当前控件。</p>
    <c-checkbox :default-value="true" readonly>只读</c-checkbox>
    <c-checkbox :default-value="true" disabled>禁用</c-checkbox>
  </c-space>
</template>
