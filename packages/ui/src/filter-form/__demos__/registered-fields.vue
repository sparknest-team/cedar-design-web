<template>
  <c-filter-form v-model="filter" :fields="fields" :field-map="fieldMap" :collapsible="false" />
  <pre>{{ filter }}</pre>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Input, Select, type FilterFormField, type FilterFormFieldMap } from '@cedar-design/ui-vue'

const filter = ref<Record<string, unknown>>({ keyword: '', status: undefined })
const fieldMap: FilterFormFieldMap = {
  input: Input,
  select: { component: Select, defaultProps: { clearable: true, placeholder: '全部' } },
}
const fields: FilterFormField[] = [
  { field: 'keyword', label: '关键词', component: 'input', props: { clearable: true } },
  {
    field: 'status',
    label: '状态',
    component: 'select',
    props: { options: [{ label: '启用', value: 'enabled' }, { label: '停用', value: 'disabled' }] },
  },
]
</script>
