<template>
  <c-space direction="column" size="lg">
    <c-cascader :options="options" :style="{ width: '320px' }" placeholder="Please select ..." check-strictly />
    <c-cascader
      :options="options"
      default-value="datunli"
      expand-trigger="hover"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple
      check-strictly />
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
    return {
      options,
    }
  },
})
</script>
