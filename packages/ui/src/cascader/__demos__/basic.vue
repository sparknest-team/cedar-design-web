<template>
  <c-space direction="column" size="lg">
    <c-cascader v-model="value" :options="options" placeholder="请选择地区" />
    <p role="status">当前值：{{ value ?? '未选择' }}</p>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CascaderProps } from '@cedar-design/ui-vue'

const value = ref<CascaderProps['modelValue']>()

const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
  },
]
</script>
