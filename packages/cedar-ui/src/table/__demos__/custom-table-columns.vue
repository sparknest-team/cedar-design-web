<template>
  <c-link @click="showDrawer">自定义表头</c-link>
  <c-table
    v-model:showColumnConfig="showColumnConfig"
    :beforeCustomColumnsConfirm="handleConfirm"
    :columnRememberHandler="columnRememberHandler"
    :columns="columns"
    :columns-metadata="columnsMetadata"
    :data="data"
    size="xs" />
</template>

<script lang="ts" setup>
import { h, onMounted, reactive, ref } from 'vue'

const showColumnConfig = ref(false)
// 异步加载
const isInit = ref(false)
const loadComplete = ref(true)
const columns = ref<any[]>([
  {
    dataIndex: 'connectorId',
    width: 100,
    title: '枪ID',
  },
])
const columnsMetadata = [
  {
    groupName: '枪基本信息',
    groupId: 'connectorBasicInfo',
    children: [
      {
        dataIndex: 'connectorId',
        __required__: true,
      },
      {
        dataIndex: 'connectorName',
        __selected__: true,
      },
      {
        dataIndex: 'connectorNo',
        __selected__: true,
      },
      {
        dataIndex: 'workingStatus',
      },
      {
        dataIndex: 'connectStatus',
        __selected__: true,
      },
      {
        dataIndex: 'parkNo',
      },
    ],
  },
  {
    groupName: '桩基本信息',
    groupId: 'chargerBasicInfo',
    children: [
      {
        dataIndex: 'deviceId',
      },
      {
        dataIndex: 'deviceName',
        __required__: true,
        __selected__: true,
      },
      {
        dataIndex: 'lockStatus',
      },
      {
        dataIndex: 'ratedVoltage',
        __selected__: true,
      },
    ],
  },
  {
    groupName: '其他信息',
    groupId: 'other',
    children: [
      {
        dataIndex: 'other',
        __hidden__: true,
        __selected__: true,
      },
      {
        title: '电池状态',
        dataIndex: 'batteryStatus',
        __selected__: true,
        width: 100,
      },
      {
        title: '温度',
        dataIndex: 'temperature',
        __selected__: true,
        width: 100,
      },
      {
        title: '电流',
        dataIndex: 'current',
        width: 100,
      },
      {
        title: '功率',
        dataIndex: 'power',
        width: 100,
      },
      {
        title: '充电时长',
        dataIndex: 'chargingTime',
        width: 100,
      },
      {
        title: '剩余电量',
        dataIndex: 'remainingCharge',
        width: 100,
      },
      {
        title: '电压',
        dataIndex: 'voltage',
        width: 100,
      },
      {
        title: '功耗',
        dataIndex: 'energyConsumption',
        width: 100,
      },
      {
        title: '操作员ID',
        dataIndex: 'operatorId',
        width: 100,
      },
      {
        title: '操作员名称',
        dataIndex: 'operatorName',
        width: 100,
      },
      {
        title: '充电桩位置',
        dataIndex: 'chargingPileLocation',
        width: 100,
      },
      {
        title: '维护状态',
        dataIndex: 'maintenanceStatus',
        width: 100,
      },
    ],
  },
]
const data = reactive([
  {
    connectorId: '1',
    connectorName: 'Jane Doe',
    connectorNo: '001',
    workingStatus: '正常',
    connectStatus: '连接中',
    parkNo: 'A1',
    deviceId: 'D001',
    deviceName: 'Device A',
    lockStatus: '解锁',
    ratedVoltage: '220V',
  },
  {
    connectorId: '2',
    connectorName: 'Alisa Ross',
    connectorNo: '002',
    workingStatus: '异常',
    connectStatus: '断开',
    parkNo: 'A2',
    deviceId: 'D002',
    deviceName: 'Device B',
    lockStatus: '上锁',
    ratedVoltage: '220V',
  },
  {
    connectorId: '3',
    connectorName: 'Kevin Sandra',
    connectorNo: '003',
    workingStatus: '正常',
    connectStatus: '连接中',
    parkNo: 'A3',
    deviceId: 'D003',
    deviceName: 'Device C',
    lockStatus: '解锁',
    ratedVoltage: '220V',
  },
  {
    connectorId: '4',
    connectorName: 'Ed Hellen',
    connectorNo: '004',
    workingStatus: '异常',
    connectStatus: '断开',
    parkNo: 'A4',
    deviceId: 'D004',
    deviceName: 'Device D',
    lockStatus: '上锁',
    ratedVoltage: '220V',
  },
  {
    connectorId: '5',
    connectorName: 'William Smith',
    connectorNo: '005',
    workingStatus: '正常',
    connectStatus: '连接中',
    parkNo: 'A5',
    deviceId: 'D005',
    deviceName: 'Device E',
    lockStatus: '解锁',
    ratedVoltage: '220V',
  },
])
const delay = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}
const initData = async () => {
  await delay(4000)
  columns.value = [
    {
      title: '枪ID',
      dataIndex: 'connectorId',
      fixed: 'left',
      width: 100,
    },
    {
      dataIndex: 'connectorName',
      title: '枪IDconnectorName枪IDconnectorName枪IDconnectorName',
      width: 100,
    },
    {
      // title: '额定电压',
      dataIndex: 'ratedVoltage',
      width: 100,
      title: () => {
        return h(
          Tooltip,
          {
            content: '额定电压的含义是设备在正常工作时，电压的额定值',
          },
          [
            '额定电压',
            h(IconInfoCircle, {
              class: 'ml-4',
            }),
          ],
        )
      },
    },
    {
      title: '枪序号',
      dataIndex: 'connectorNo',
      width: 100,
    },
    {
      title: '工作状态',
      dataIndex: 'workingStatus',
      width: 100,
    },
    {
      title: '连接状态',
      dataIndex: 'connectStatus',
      width: 100,
    },
    {
      title: '停车位',
      dataIndex: 'parkNo',
      width: 100,
    },
    {
      title: '设备ID',
      dataIndex: 'deviceId',
      width: 100,
    },
    {
      title: '设备名称设备名称设备名称设备名称设备名称设备名称设备名称',
      dataIndex: 'deviceName',
      width: 100,
    },
    {
      title: '地锁',
      dataIndex: 'lockStatus',
      width: 100,
    },
    {
      title: '操作',
      dataIndex: 'other',
      fixed: 'right',
      width: 100,
    },
    {
      title: '电池状态',
      dataIndex: 'batteryStatus',
      width: 100,
    },
    {
      title: '温度',
      dataIndex: 'temperature',
      width: 100,
    },
    {
      title: '电流',
      dataIndex: 'current',
      width: 100,
    },
    {
      title: '功率',
      dataIndex: 'power',
      width: 100,
    },
    {
      title: '充电时长',
      dataIndex: 'chargingTime',
      width: 100,
    },
    {
      title: '剩余电量',
      dataIndex: 'remainingCharge',
      width: 100,
    },
    {
      title: '电压',
      dataIndex: 'voltage',
      width: 100,
    },
    {
      title: '功耗',
      dataIndex: 'energyConsumption',
      width: 100,
    },
    {
      title: '操作员ID',
      dataIndex: 'operatorId',
      width: 100,
    },
    {
      title: '操作员名称',
      dataIndex: 'operatorName',
      width: 100,
    },
    {
      title: '充电桩位置',
      dataIndex: 'chargingPileLocation',
      width: 100,
    },
    {
      title: '维护状态',
      dataIndex: 'maintenanceStatus',
      width: 100,
    },
  ]
  loadComplete.value = false
}
const init = async () => {
  isInit.value = true
  await delay(1000)
  await initData()
}

async function setStore(value: any) {
  window.localStorage.setItem('columns', JSON.stringify(value))
  await delay(1000)
  return true
}

const store = ref([])
onMounted(() => {
  store.value = JSON.parse(window.localStorage.getItem('columns') || '[]')
})

async function getStore() {
  // 等待 onMounted
  await delay(1000)
  return store.value
}

const columnRememberHandler = async () => {
  const store = await getStore()
  console.log('columnRememberHandler---store', store)
  // return store
  return []
}
const handleConfirm = async (value: any) => {
  console.log('handleConfirm---value', value)
  return await setStore(value)
}
const showDrawer = () => {
  showColumnConfig.value = true
}
init()
</script>
