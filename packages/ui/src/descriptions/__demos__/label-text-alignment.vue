<template>
  <c-space direction="column" size="lg">
    <c-descriptions :data="data" align="right" title="User Info" />
    <c-descriptions :align="{ label: 'right' }" :data="data" title="User Info" />
    <c-descriptions :data="data" layout="inline-vertical" title="User Info" />
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
  {
    label: 'Hometown',
    value: 'Beijing',
  },
  {
    label: 'Address',
    value: 'Yingdu Building, Zhichun Road, Beijing',
  },
]
</script>
