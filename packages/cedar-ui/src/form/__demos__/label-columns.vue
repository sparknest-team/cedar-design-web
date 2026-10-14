<script setup>
import { reactive } from 'vue'
const model = reactive({ name: '', department: '' })
</script>

<template>
  <c-space direction="column" :size="12" style="width: 100%">
    <p>响应式 6/24 标签列；视口小于 576px 时每列独占一行。</p>
    <c-form :model="model" layout="horizontal" label-align="left"
      :label-col-props="{ span: 6, xs: 24, sm: 6 }"
      :wrapper-col-props="{ span: 18, xs: 24, sm: 18 }">
      <c-form-item field="name" label="姓名"><c-input v-model="model.name" /></c-form-item>
      <c-form-item field="department" label="部门"><c-input v-model="model.department" /></c-form-item>
    </c-form>
  </c-space>
</template>
