<script setup lang="ts">
import { computed, ref } from 'vue'
import { Input, type FilterFormField } from '@cedar-design/ui-vue'

const copy = {
  keyword: "Order number or customer",
  order: "Order",
  customer: "Customer"
};
const filter = ref<Record<string, unknown>>({})
const fields = computed<FilterFormField[]>(() => [
  { field: 'keyword', label: copy.keyword, component: Input, props: { clearable: true } },
])
const columns = computed(() => [
  { title: copy.order, dataIndex: 'key' },
  { title: copy.customer, dataIndex: 'customer' },
])
const orders = [
  { key: 'SO-1042', customer: 'Lin Chen' },
  { key: 'SO-1043', customer: 'Maya Patel' },
  { key: 'SO-1044', customer: 'Alex Kim' },
]
const rows = computed(() => {
  const keyword = String(filter.value.keyword ?? '').trim().toLowerCase()
  return orders.filter(({ key, customer }) => [key, customer].some(value => value.toLowerCase().includes(keyword)))
})
</script>

<template>
  <div class="order-table">
    <c-filter-form v-model="filter" :fields="fields" :collapsible="false" />
    <c-table :columns="columns" :data="rows" :pagination="false" />
  </div>
</template>

<style scoped>
.order-table {
  display: grid;
  gap: var(--c-sys-space-5);
}
</style>
