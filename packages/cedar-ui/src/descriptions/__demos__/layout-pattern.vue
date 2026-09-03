<template>
  <c-radio-group v-model="size" variant="button">
    <c-radio value="xs">xs</c-radio>
    <c-radio value="sm">sm</c-radio>
    <c-radio value="md">md</c-radio>
    <c-radio value="lg">lg</c-radio>
    <c-radio value="xl">xl</c-radio>
  </c-radio-group>
  <div style="margin-top: 20px">
    <c-descriptions :data="data" :size="size" title="User Info (horizontal)" bordered />
    <c-descriptions :data="data" :size="size" title="User Info (inline-horizontal)" layout="inline-horizontal" bordered />
    <c-descriptions :data="data" :size="size" title="User Info (vertical)" layout="vertical" bordered />
    <c-descriptions :data="data" :size="size" title="User Info (inline-vertical)" layout="inline-vertical" bordered />
    <c-descriptions :data="inlineAutoData" :size="size" title="User Info (inline-auto)" layout="inline-auto" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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

const inlineAutoData = [
  {
    label: 'Name:',
    value: 'Socrates',
  },
  {
    label: 'Mobile:',
    value: '123-1234-1234',
  },
  {
    label: 'Residence:',
    value: 'Beijing',
  },
]
</script>
