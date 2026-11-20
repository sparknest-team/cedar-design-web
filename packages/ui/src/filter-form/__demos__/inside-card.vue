<script setup lang="ts">
import { computed, ref } from 'vue'
import { Select, type FilterFormField } from '@cedar-design/ui-vue'

const copy = {
  title: "筛选订单",
  keyword: "订单号或客户名称",
  order: "订单号",
  customer: "客户",
  status: "状态",
  open: "处理中",
  closed: "已完成",
  search: "查询",
  reset: "重置",
  orders: "订单"
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
  <c-card title="筛选订单" variant="outline">
    <c-filter-form v-model="filter" :fields="fields" :collapsible="false">
      <template #actions>
        <c-button @click="reset">重置</c-button>
        <c-button status="primary" @click="appliedStatus = String(filter.status ?? '')">查询</c-button>
      </template>
    </c-filter-form>
  </c-card>
  <ul aria-label="订单">
    <li v-for="order in rows" :key="order.id">{{ order.id }} · {{ copy[order.status] }}</li>
  </ul>
</template>
