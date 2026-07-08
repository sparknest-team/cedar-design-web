<template>
  <c-button @click="handleOpenModal">点击弹出Modal</c-button>
  <c-button @click="handleOpenDrawer">点击弹出Drawer</c-button>
  <c-drawer v-model:visible="visibleDrawer" title="插入列" @ok="handleOk">
    <c-select-transfer
      v-model:modelValue="modelValue"
      :options="options"
      multiple
      showSelected
      :remoteSearch="handleRemoteSearch"
      :fallbackOptions="fallbackOptions"
      @update:modelValue="handleUpdateModelValue"
    >
      <template #tooltip="{ item }">
        <c-tooltip v-if="item.value === 'areaCompany'" background-color="#fff" :content-style="{ color: 'red' }">
          <div class="checkbox-item-tooltip">
            <c-icon-info-circle />
          </div>
          <template #content>
            <div>
              {{ item.tip ?? 'tooltip' }}
            </div>
          </template>
        </c-tooltip>
      </template>
    </c-select-transfer>
  </c-drawer>
  <c-modal v-model:visible="visibleModal" title="插入列" @ok="handleOk" :body-padding="false">
    <c-select-transfer
      :defaultValue="defaultValue"
      :options="options"
      multiple
      :fallbackOptions="fallbackOptions"
      @update:modelValue="handleUpdateModelValue"
    ></c-select-transfer>
  </c-modal>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
const visibleModal = ref(false)
const visibleDrawer = ref(false)
const modelValue = ref<string[]>()
const defaultValue = ref<string[]>(['remoteConfig1'])
const handleOpenModal = () => {
  visibleModal.value = true
}
const handleOpenDrawer = () => {
  visibleDrawer.value = true
}
const handleOk = () => {
  visibleModal.value = false
  visibleDrawer.value = false
}

const fallbackOptionList = ref<any[]>([
  {
    label: 'fallbackOptions1',
    value: 'selectedValue1',
  },
  {
    label: 'fallbackOptions2',
    value: 'selectedValue2',
  },
])
const options = ref<any[]>([
  {
    label: '基本信息',
    value: 'basicInfo',
    options: [
      {
        label:
          '区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司区域公司',
        value: 'areaCompany',
        tip: '区域公司tooltip!!!',
        required: true,
      },
      {
        label: '项目公司',
        value: 'projectCompany',
        required: true,
        tip: '项目公司tooltip!!!',
      },
    ],
  },
  {
    label: '远程配置',
    value: 'remoteConfig',
    options: [
      { label: '远程配置1', value: 'remoteConfig1' },
      { label: '远程配置2', value: 'remoteConfig2' },
    ],
  },
  {
    label: '实时信息',
    value: 'realTimeInfo',
    options: [
      { label: '电池SOC', value: 'batterySOC' },
      { label: '电池电压', value: 'batteryVoltage' },
    ],
  },
  { label: '不分组内容1', value: 'noGroup1', disabled: true },
  { label: '不分组内容2', value: 'noGroup2' },
  { label: '不分组内容21', value: 'noGroup21' },
  { label: '不分组内容22', value: 'noGroup22' },
  { label: '不分组内容23', value: 'noGroup23' },
  { label: '不分组内容24', value: 'noGroup24' },
  { label: '不分组内容25', value: 'noGroup25' },
])
const handleRemoteSearch = async (searchValue: string) => {
  console.log('handleRemoteSearch', searchValue)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  options.value = [
    { label: '远程配置1', value: 'remoteConfig1', tooltip: '远程配置1tooltip!!!' },
    { label: '远程配置2', value: 'remoteConfig2', tooltip: '远程配置2tooltip!!!' },
    { label: '不分组内容1', value: 'noGroup1', tooltip: '不分组内容1tooltip!!!' },
    { label: '不分组内容2', value: 'noGroup2', tooltip: '不分组内容2tooltip!!!' },
    { label: '不分组内容3', value: 'noGroup3', tooltip: '不分组内容3tooltip!!!' },
    { label: '不分组内容4', value: 'noGroup4', tooltip: '不分组内容4tooltip!!!' },
    { label: '不分组内容5', value: 'noGroup5', tooltip: '不分组内容5tooltip!!!' },
    { label: '不分组内容6', value: 'noGroup6', tooltip: '不分组内容6tooltip!!!' },
    { label: '不分组内容7', value: 'noGroup7', tooltip: '不分组内容7tooltip!!!' },
  ]
}
const fallbackOptions = (value: string) => {
  console.log('fallbackOptions', value)
  const item = fallbackOptionList.value.find((item) => item.value === value)
  return item ?? { label: `${value}fallbackOptions`, value }
}
const handleUpdateModelValue = (value: string[]) => {
  console.log('handleUpdateModelValue', value)
}
</script>
