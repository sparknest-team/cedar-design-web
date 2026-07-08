<template>
  <c-space direction="column" size="lg">
    <c-radio-group v-model="isVertical" type="button">
      <c-radio value="horizontal">Horizontal</c-radio>
      <c-radio value="vertical">Vertical</c-radio>
    </c-radio-group>
    <c-radio-group v-model="variant" type="button">
      <c-radio value="line">Line</c-radio>
      <c-radio value="card">Card</c-radio>
      <c-radio value="outline">Outline</c-radio>
      <c-radio value="plain">Plain</c-radio>
      <c-radio value="capsule">Capsule</c-radio>
      <c-radio value="enclosed">Enclosed</c-radio>
    </c-radio-group>
    <c-radio-group v-model="size" type="button">
      <c-radio value="xs">Xs</c-radio>
      <c-radio value="sm">Sm</c-radio>
      <c-radio value="md">Md</c-radio>
      <c-radio value="lg">Lg</c-radio>
      <c-radio value="xl">Xl</c-radio>
    </c-radio-group>
  </c-space>
  <c-tabs
    :variant="variant"
    :size="size"
    :vertical="isVertical === 'vertical'"
    :editable="true"
    @add="handleAdd"
    @delete="handleDelete"
    show-add-button
    auto-switch
    :style="isVertical !== 'vertical' ? { height: '240px' } : undefined"
  >
    <c-tabs-navs>
      <c-tab-nav v-for="(item, index) of data" :key="item.key" :title="item.title" :closable="index !== 2" />
      <template #prefix><c-button size="xs">Action</c-button></template>
      <template #suffix>suffix</template>
    </c-tabs-navs>
    <c-tabs-items>
      <c-tab-item v-for="(item, index) of data" :key="item.key">{{ item?.content }}</c-tab-item>
    </c-tabs-items>
  </c-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const variant = ref('line')
const size = ref('md')
const isVertical = ref('horizontal')
const data = ref([
  {
    key: '1',
    title: 'Tab 1',
    content: 'Content of Tab Panel 1',
  },
  {
    key: '2',
    title: 'Tab 2',
    content: 'Content of Tab Panel 2',
  },
  {
    key: '3',
    title: 'Tab 3',
    content: 'Content of Tab Panel 3',
  },
  {
    key: '4',
    title: 'Tab 4',
    content: 'Content of Tab Panel 4',
  },
])
let count = 5
const handleAdd = () => {
  const number = count++
  data.value = data.value.concat({
    key: `${number}`,
    title: `New Tab ${number}`,
    content: `Content of New Tab Panel ${number}`,
  })
}
const handleDelete = (key) => {
  data.value = data.value.filter((item) => item.key !== key)
}
</script>
