<script setup lang="ts">
import Table from '../../index'
import TableColumn from '../../table-column'
defineProps<{ split?: boolean; grouped?: boolean; propMode?: boolean }>()
const data = [{ key: 'a', name: 'Ada' }]
const columns = [{ title: 'Name', dataIndex: 'name' }]
</script>
<template>
  <Table :height="split ? 200 : undefined" :data="data" :pagination="false" :columns="propMode ? columns : undefined">
    <template v-if="!propMode" #columns>
      <TableColumn v-if="grouped" title="Group">
        <TableColumn title="Name" data-index="name" />
      </TableColumn>
      <TableColumn v-else title="Name" data-index="name" />
    </template>
  </Table>
</template>
