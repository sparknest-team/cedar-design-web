<template>
  <c-table :columns="columns" :data="data">
    <template #optional="{ record }">
      <c-button @click="$dialog.info({ title: 'Name', content: record.name })">view</c-button>
    </template>
  </c-table>
  <c-table :data="data" style="margin-top: 30px">
    <template #columns>
      <c-table-column title="Name">
        <c-table-column data-index="first" title="First Name"></c-table-column>
        <c-table-column data-index="last" title="Last Name"></c-table-column>
      </c-table-column>
      <c-table-column data-index="salary" title="Salary"></c-table-column>
      <c-table-column data-index="address" title="Address"></c-table-column>
      <c-table-column data-index="email" title="Email"></c-table-column>
      <c-table-column title="Optional">
        <template #cell="{ record }">
          <c-button @click="$dialog.info({ title: 'Name', content: record.name })">view</c-button>
        </template>
      </c-table-column>
    </template>
  </c-table>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const show = ref(true)

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
      {
        title: 'Optional',
        slotName: 'optional',
      },
    ]
    const data = [
      {
        key: '1',
        name: 'Jane Doe',
        first: 'Jane',
        last: 'Doe',
        salary: 23000,
        address: '32 Park Road, London',
        email: 'jane.doe@example.com',
      },
      {
        key: '2',
        name: 'Alisa Ross',
        first: 'Alisa',
        last: 'Ross',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com',
      },
      {
        key: '3',
        name: 'Kevin Sandra',
        first: 'Kevin',
        last: 'Sandra',
        salary: 22000,
        address: '31 Park Road, London',
        email: 'kevin.sandra@example.com',
      },
      {
        key: '4',
        name: 'Ed Hellen',
        first: 'Ed',
        last: 'Hellen',
        salary: 17000,
        address: '42 Park Road, London',
        email: 'ed.hellen@example.com',
      },
      {
        key: '5',
        name: 'William Smith',
        first: 'William',
        last: 'Smith',
        salary: 27000,
        address: '62 Park Road, London',
        email: 'william.smith@example.com',
      },
    ]

    return {
      columns,
      data,
      show,
    }
  },
}
</script>
