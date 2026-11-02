<script setup lang="ts">
import { ref } from 'vue'
import type { TableColumnData } from '@cedar-design/ui'

const tableWidth = ref('100%')
const data = [{ key: '1', name: '设备巡检', owner: '张三', status: '进行中' }]
const base: TableColumnData[] = [
  { title: '任务', dataIndex: 'name' },
  { title: '负责人', dataIndex: 'owner' },
  { title: '状态', dataIndex: 'status' },
]
const scenarios = [
  { title: '不指定列宽', description: '每列以 80px 为基础，均分剩余空间。', columns: base },
  { title: '全部使用 minWidth', description: '按 160 : 80 : 80 的基础宽度比例分配剩余空间。', columns: base.map((column, index) => ({ ...column, minWidth: index === 0 ? 160 : 80 })) },
  { title: '定宽列与弹性列混合', description: '负责人、状态各保持 120px，任务列吸收剩余空间。', columns: base.map((column, index) => ({ ...column, ...(index === 0 ? { minWidth: 160 } : { width: 120 }) })) },
  { title: '全部指定 width', description: '列宽之和不足容器时，Cedar 按比例放大普通数据列以铺满容器。', columns: base.map((column, index) => ({ ...column, width: index === 0 ? 160 : 80 })) },
  { title: '列宽之和超出容器', description: '三列各 280px，保留列宽并自动出现横向滚动条，无需 scroll.x。', columns: base.map(column => ({ ...column, width: 280 })) },
  { title: '左右固定列与混合列宽', description: '左右各固定 140px、120px，中间列 minWidth 为 440px；无需 scroll.x，底部粘性滚动条随表格悬浮显示。', columns: [{ ...base[0], width: 140, fixed: 'left' as const }, { ...base[1], minWidth: 440 }, { ...base[2], width: 120, fixed: 'right' as const }], sticky: true },
  { title: '选择列、弹性列与扩展列', description: '选择列保持 40px，扩展列保持 28px，任务列分配剩余空间。', columns: base.map((column, index) => ({ ...column, ...(index === 0 ? { minWidth: 160 } : { width: 120 }) })), operations: true },
]
</script>

<template>
  <div class="column-width-scenarios">
    <c-radio-group v-model="tableWidth" type="button" aria-label="表格宽度">
      <c-radio value="480px">定宽 480px</c-radio>
      <c-radio value="100%">100% 宽度</c-radio>
      <c-radio value="360px">窄屏 360px</c-radio>
    </c-radio-group>
    <section v-for="scenario in scenarios" :key="scenario.title">
      <h4>{{ scenario.title }}</h4>
      <p>{{ scenario.description }}</p>
      <c-table
        :columns="scenario.columns"
        :data="data"
        :style="{ width: tableWidth }"
        :pagination="scenario.sticky ? { pageSize: 5 } : false"
        :sticky-pagination="scenario.sticky ? 0 : false"
        :row-selection="scenario.operations ? { width: 40 } : undefined"
        :extra-column="scenario.operations"
      />
    </section>
  </div>
</template>

<style scoped>
.column-width-scenarios { width: 640px; max-width: 100%; }
.column-width-scenarios > section { margin-top: 24px; }
h4 { margin: 0 0 8px; }
p { margin: 0 0 12px; }
</style>
