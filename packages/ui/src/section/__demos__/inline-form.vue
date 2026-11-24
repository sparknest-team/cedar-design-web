<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive({ name: '', department: '' })
</script>

<template>
  <c-form :model="model" layout="inline" edit-mode="direct">
    <c-section title="成员信息" show-marker>
      <c-form-item field="name" label="姓名">
        <c-input v-model="model.name" />
      </c-form-item>
      <c-form-item field="department" label="部门">
        <c-input v-model="model.department" />
      </c-form-item>
    </c-section>
  </c-form>
</template>
