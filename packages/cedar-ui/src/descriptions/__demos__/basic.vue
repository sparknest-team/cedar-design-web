<template>
  <c-space direction="column" fill size="lg">
    <c-descriptions :data="data" layout="inline-horizontal" title="User Info" style="width: auto" />
    <c-descriptions :column="{ xs: 1, md: 3, lg: 4 }">
      <template #title>
        <c-page-header title="列表页标题132列表页标题132列表页标题132列表页标题132" subtitle="subtitle描述信息">
          <template #extra> xs </template>
        </c-page-header>
      </template>
      <c-descriptions-item v-for="item of data" :key="item.label" :label="item.label" :span="item.span ?? 1">
        <c-tag>{{ item.value }}</c-tag>
      </c-descriptions-item>
    </c-descriptions>
  </c-space>
</template>

<script lang="ts" setup>
const data = [
  {
    label: 'Name',
    value: 'Socrates',
  },
  {
    label: 'Mobile',
    value: '123-1234-1234',
  },
  {
    label: 'Residence',
    value: 'Beijing',
  },
]
</script>
