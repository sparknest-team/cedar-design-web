<template>
  <Table :data="rows" :pagination="false">
    <template v-if="branch" #columns>
      <Column title="Name" data-index="name" />
      <Column title="Original" data-index="value" :filterable="filterable">
        <template #filter-content="{ setFilterValue, handleFilterConfirm }">
          <button class="choose-other" @click="setFilterValue(['other']); handleFilterConfirm($event)">Apply</button>
        </template>
      </Column>
    </template>
    <template v-else #columns>
      <Column title="Replacement" data-index="value" :filterable="filterable">
        <template #filter-content="{ setFilterValue, handleFilterConfirm }">
          <button class="choose-other" @click="setFilterValue(['other']); handleFilterConfirm($event)">Apply</button>
        </template>
      </Column>
    </template>
  </Table>
</template>
<script setup lang="ts">
import Table from '../../table'
import Column from '../../table-column'
defineProps<{branch: boolean}>()
const rows = [{key:'a',name:'A',value:2},{key:'b',name:'B',value:5}]
const filterable = {defaultFilteredValue:['keep'],filters:[{text:'keep',value:'keep'}],filter:(values:string[],row:any)=>values.includes('keep') ? row.value===2 : row.value===5}
</script>
