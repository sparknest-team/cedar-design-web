<template>
  <c-space direction="column" size="lg">
    <c-cascader :options="options" :style="{ width: '320px' }" placeholder="Please select ..." :load-more="loadMore" />
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
    const loadMore = (option: any, done: any) => {
      window.setTimeout(() => {
        const nodes = [
          {
            value: `${option.value}-option1`,
            label: `${option.label}-Option1`,
            isLeaf: true,
          },
          {
            value: `${option.value}-option2`,
            label: `${option.label}-Option2`,
            isLeaf: true,
          },
        ]
        done(nodes)
      }, 2000)
    }

    return {
      options,
      loadMore,
    }
  },
})
</script>
