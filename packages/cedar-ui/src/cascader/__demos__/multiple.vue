<template>
  <c-space direction="column" size="lg">
    <c-cascader :options="options" :style="{ width: '320px' }" placeholder="Please select ..." multiple />
  </c-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const options = [
      {
        value: 'beijing',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'ChaoYang',
          },
          {
            value: 'haidian',
            label: 'Haidian',
            isLeaf: true,
          },
          {
            value: 'dongcheng',
            label: 'Dongcheng',
            isLeaf: true,
          },
          {
            value: 'xicheng',
            label: 'Xicheng',
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
            isLeaf: true,
          },
        ],
      },
    ]
    return {
      options,
    }
  },
})
</script>
