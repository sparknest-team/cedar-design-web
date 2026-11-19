<script setup lang="ts">
import { reactive } from 'vue'
import { useDemoLocale } from '../../__demos__/locale'

const copy = useDemoLocale('layout')
const section = useDemoLocale('section')
const model = reactive({ name: '', department: '' })
</script>

<template>
  <c-form :model="model" layout="inline" edit-mode="direct">
    <c-section :title="section.memberDetails" show-end-divider>
      <c-form-item field="name" :label="copy.labels.name">
        <c-input v-model="model.name" />
      </c-form-item>
      <c-form-item field="department" :label="copy.labels.department">
        <c-input v-model="model.department" />
      </c-form-item>
    </c-section>
  </c-form>
</template>
