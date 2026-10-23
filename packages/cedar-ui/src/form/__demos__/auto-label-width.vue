<script setup>
import { reactive, ref } from "vue";
const model = reactive({ name: "", department: "", contact: "" });
const showExtra = ref(true);
const label = ref("联系方式");
</script>

<template>
  <c-space direction="column" :size="12" style="width: 100%">
    <p>自动对齐最长的可见标签。试着修改标签或移除额外字段。</p>
    <c-checkbox v-model="showExtra"> 显示额外字段</c-checkbox>
    <label>修改最长标签 <c-input v-model="label" /></label>
    <c-form
      :model="model"
      layout="horizontal"
      auto-label-width
      label-align="left"
    >
      <c-form-item field="name" label="姓名"
        ><c-input v-model="model.name"
      /></c-form-item>
      <c-form-item field="department" label="部门"
        ><c-input v-model="model.department"
      /></c-form-item>
      <c-form-item v-if="showExtra" field="contact" :label="label">
        <c-input v-model="model.contact" />
      </c-form-item>
    </c-form>
  </c-space>
</template>
