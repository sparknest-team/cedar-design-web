<template>
  <div style="height: 520px">
    <c-transfer
      v-model="value"
      :data="data"
      :target-actions="targetActions"
      source-filterable
      target-draggable
      target-operation="menu"
      source-filter-placeholder="请输入关键词搜索"
      @target-action="handleTargetAction"
    />
  </div>
  <c-dialog v-model:show="customVisible" title="自定义操作" :width="420"> 当前操作项：{{ activeLabel }} </c-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = [
  { value: 'gunId', label: '枪ID', group: '基本信息', disabled: true, tip: '系统必选字段' },
  { value: 'gunName', label: '枪名称', group: '基本信息' },
  { value: 'company', label: '区域公司区域公司区域公司', group: '基本信息', tip: '所属区域公司' },
  { value: 'deviceId', label: '设备ID', group: '设备信息' },
  { value: 'deviceName', label: '设备名称', group: '设备信息' },
  { value: 'lock', label: '地锁', group: '设备信息' },
  { value: 'workStatus', label: '工作状态', group: '设备信息' },
  { value: 'connectStatus', label: '连接状态', group: '设备信息' },
]

const value = ref([{ value: 'gunId' }, { value: 'gunName' }, { value: 'deviceName' }])
const customVisible = ref(false)
const activeLabel = ref('')
const targetActions = [{ key: 'custom', label: '自定义弹窗' }]

const handleTargetAction = (_key: string, item: (typeof data)[number]) => {
  activeLabel.value = item.label
  customVisible.value = true
}
</script>
