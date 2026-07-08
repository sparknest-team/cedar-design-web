<template>
  <Radio-group v-model="size" type="button">
    <c-radio value="xs">xs</c-radio>
    <c-radio value="sm">sm</c-radio>
    <c-radio value="md">md</c-radio>
    <c-radio value="lg">lg</c-radio>
    <c-radio value="xl">xl</c-radio>
  </Radio-group>

  <c-space :size="sizeSpace[size]" direction="column" fill>
    <c-descriptions :column="1" :data="data" :size="size" title="User Info" />

    <c-descriptions :column="4" :data="data" :size="size" layout="inline-auto" title="inline-auto" />
    <c-descriptions :column="4" :data="data" :size="size" layout="horizontal" title="horizontal" />

    <c-descriptions :column="4" :data="data" :size="size" layout="vertical" title="vertical" />
    <c-descriptions :column="4" :data="data" :size="size" layout="inline-vertical" title="inline-vertical" />
    <c-descriptions :column="4" :data="data" :size="size" layout="inline-horizontal" title="inline-horizontal" />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const sizeSpace = ref({
  xs: 6,
  sm: 12,
  md: 24,
  lg: 48,
  xl: 64,
})
const size = ref('md')
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
