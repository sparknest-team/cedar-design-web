<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-upload action="/" @before-upload="beforeUpload" />
  </c-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const beforeUpload = (file) => {
      return new Promise((resolve, reject) => {
        Modal.confirm({
          title: 'beforeUpload',
          content: `确认上传 ${file.name}`,
          onOk: () => resolve(true),
          onCancel: () => reject('cancel'),
        })
      })
    }
    return {
      beforeUpload,
    }
  },
})
</script>
