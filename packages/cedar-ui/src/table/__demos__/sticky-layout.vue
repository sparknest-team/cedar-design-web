<script setup lang="ts">
import { ref } from 'vue'
const pageScroll = ref(false)
const custom = ref(false)
const external = ref(false)
const pagerHost = ref<HTMLElement>()
const page = ref(1)
const rows = Array.from({ length: 160 }, (_, index) => ({ key: index + 1, name: `User ${index + 1}`, city: 'Shanghai', email: `user${index + 1}@example.com`, description: `Rightmost field ${index + 1}` }))
const columns = [{ title: 'Name', dataIndex: 'name', width: 200 }, { title: 'City', dataIndex: 'city', width: 200 }, { title: 'Email', dataIndex: 'email', width: 360 }, { title: 'Description', dataIndex: 'description', width: 480 }]
</script>
<template>
 <c-space direction="column">
  <c-space>
   <c-checkbox v-model="pageScroll">整页滚动</c-checkbox>
   <c-checkbox v-model="custom">自定义分页</c-checkbox>
   <c-checkbox v-model="external">将底部区域移到 Table 外部</c-checkbox>
  </c-space>
  <p>滚动发生在外层容器；Table 不设置 height 或 max-height。切换整页滚动，验证相同的表头和底部区域。</p>
  <p role="status">当前页: {{ page }}</p>
  <div :class="['sticky-table-demo', { 'sticky-table-demo--page': pageScroll }]">
   <c-table
    :columns="columns" :data="rows"
    :sticky-header="0" :sticky-pagination="0"
    :pagination="{ modelValue: page, pageSize: 40, container: external ? pagerHost : undefined }"
    @page-change="page = $event"
   >
    <template v-if="custom" #pagination="{ page: current, pageSize, total, onChange }">
     <c-space>
      <c-button :disabled="current <= 1" @click="onChange(current - 1)">上一页</c-button>
      <span>{{ current }} / {{ Math.max(1, Math.ceil(total / pageSize)) }}</span>
      <c-button :disabled="current * pageSize >= total" @click="onChange(current + 1)">下一页</c-button>
     </c-space>
    </template>
   </c-table>
   <div ref="pagerHost" class="sticky-table-pagination-host" />
  </div>
 </c-space>
</template>
<style scoped>
.sticky-table-demo { max-height: 420px; overflow: auto; isolation: isolate; }
.sticky-table-demo--page { max-height: none; overflow: visible; }
.sticky-table-pagination-host { display: contents; }
</style>
