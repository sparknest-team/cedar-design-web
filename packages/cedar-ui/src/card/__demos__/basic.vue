<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
  >
    <c-card
      title="Title Card Title Card Title Card Title Card Title Card Title Card"
      subtitle="Sub Title Card"
      description="Description Card"
      :loading="loading"
      spinTip="加载中..."
      top-divider
      bottom-divider
    >
      <template #title-action>
        <c-link>More</c-link>
      </template>
      <template #action>
        <c-space><c-button>取消</c-button><c-button status="primary">确定</c-button></c-space>
      </template>
    </c-card>
    <br />
    <c-card
      title="Title Card2"
      subtitle="Sub Title Card2"
      description="Description Card2"
      :loading="loading2"
      spinTip="5秒后消失，加载中..."
    >
      <template #title-action>
        <c-button>编辑</c-button>
      </template>
      <c-descriptions :data="data" layout="inline-vertical" title="User Info" />
      <template #action>
        <c-space><c-button>取消</c-button><c-button status="primary">确定</c-button></c-space>
      </template>
    </c-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)
const loading2 = ref(true)

setTimeout(() => {
  loading2.value = false
}, 3000)
const data1 = [
  {
    label: 'Name',
    value: 'Socrates',
  },
]
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
