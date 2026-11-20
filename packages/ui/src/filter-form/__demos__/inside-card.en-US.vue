<script setup lang="ts">
import { computed, ref } from 'vue'
import { Select, type FilterFormField } from '@cedar-design/ui-vue'

const copy = {
  title: "Order filters",
  keyword: "Order number or customer",
  order: "Order",
  customer: "Customer",
  status: "Status",
  open: "Open",
  closed: "Closed",
  search: "Search",
  reset: "Reset",
  orders: "Orders"
};
const filter = ref<Record<string, unknown>>({})
const appliedStatus = ref('')
const fields = computed<FilterFormField[]>(() => [{
  field: 'status',
  label: copy.status,
  component: Select,
  props: { clearable: true, options: [
    { label: copy.open, value: 'open' },
    { label: copy.closed, value: 'closed' },
  ] },
}])
const orders = [
  { id: 'SO-1042', status: 'open' },
  { id: 'SO-1043', status: 'closed' },
  { id: 'SO-1044', status: 'open' },
] as const
const rows = computed(() => orders.filter(order => !appliedStatus.value || order.status === appliedStatus.value))
function reset() {
  filter.value = {}
  appliedStatus.value = ''
}
</script>

<template>
  <c-card title="Order filters" variant="outline">
    <c-filter-form v-model="filter" :fields="fields" :collapsible="false">
      <template #actions>
        <c-button @click="reset">Reset</c-button>
        <c-button status="primary" @click="appliedStatus = String(filter.status ?? '')">Search</c-button>
      </template>
    </c-filter-form>
  </c-card>
  <ul aria-label="Orders">
    <li v-for="order in rows" :key="order.id">{{ order.id }} · {{ copy[order.status] }}</li>
  </ul>
</template>
