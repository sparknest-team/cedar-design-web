<script setup>
import { ref } from 'vue'
const control = ref()
const value = ref(null)

</script>
<template>
  <c-space direction="column">
    <p>null 表示未选中；重复选择不会取消。 当前值：{{ value }}</p>
    <c-radio ref="control" v-model="value" :value="false">选择 false 选项</c-radio>
    <c-space wrap>
      <c-button size="sm" @click="control?.select()">选中</c-button>
      <c-button size="sm" @click="control?.focus()">聚焦</c-button>
      <c-button size="sm" @click="value = null">重置</c-button>
    </c-space>
    
    <p>只读允许聚焦，禁用不允许操作；Enter/空格只影响当前控件。</p>
    <c-radio :default-value="true" readonly>只读</c-radio>
    <c-radio :default-value="true" disabled>禁用</c-radio>
  </c-space>
</template>
