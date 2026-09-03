<template>
  <c-space direction="column" size="lg">
    <c-select
      multiple
      :default-value="['urgent', 'high', 'medium', 'low', 'custom', 'outline']"
      :style="{ width: '520px' }"
      placeholder="Please select ..."
      :options="colorOptions"
    />
    <c-select
      multiple
      :default-value="['long']"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :options="widthOptions"
    />
  </c-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const colorOptions = [
      { value: 'urgent', label: '紧急', tagProps: { color: 'red' } },
      { value: 'high', label: '高', tagProps: { status: 'danger' } },
      { value: 'medium', label: '中', tagProps: { status: 'warning' } },
      { value: 'low', label: '低', tagProps: { status: 'success' } },
      { value: 'custom', label: '自定义色', tagProps: { color: '#165DFF' } },
      {
        value: 'outline',
        label: '描边',
        tagProps: { variant: 'outline', status: 'primary' },
      },
    ]

    const widthOptions = [
      {
        value: 'long',
        label: '这是一段很长的选项文案，用来演示 Tag 最大宽度截断',
        tagProps: {
          nowrap: true,
          style: { maxWidth: '160px' },
        },
      },
      { value: 'short', label: '短标签' },
    ]

    return {
      colorOptions,
      widthOptions,
    }
  },
})
</script>
