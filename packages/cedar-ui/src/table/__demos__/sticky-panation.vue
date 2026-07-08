<template>
  <c-space
    ><c-button type="primary" @click="handleClick">sticky -24</c-button>
    <c-button type="primary" @click="handleClick2">sticky -14</c-button>
  </c-space>
  <c-table stickyPagination :columns="columns" :data="data1" :pagination="pagination" />
  <c-drawer :width="540" v-model:visible="visible" unmountOnClose>
    <c-table :sticky-pagination="-24" :columns="columns" :data="data" :pagination="pagination" />
  </c-drawer>
  <c-drawer :width="540" v-model:visible="visible2" unmountOnClose>
    <c-table :sticky-pagination="-14" :columns="columns" :data="data" :pagination="pagination" />
  </c-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
const handleClick = () => {
  visible.value = true
}
const handleClick2 = () => {
  visible2.value = true
}
const pagination = { pageSize: 100 }

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]
const data = ref<any[]>([])
const data1 = ref<any[]>([])
data.value = Array.from({ length: 1000 }, (_, index) => ({
  key: index.toString(),
  name: `Jane Doe ${index}`,
  salary: 23000,
  address: '32 Park Road, London',
  email: 'jane.doe@example.com',
}))
data1.value = data.value.slice(0, 10)
</script>
