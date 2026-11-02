<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedar-design/ui'
const files = ref<UploadFileItem[]>([])
</script>
<template>
  <c-space direction="column">
    <p>选择目录后查看文件列表；本例只读取本地文件，不发送请求。目录选择取决于浏览器与系统文件选择器，移动设备可使用普通多选入口。</p>
    <p>目录选择</p>
    <c-upload v-model="files" directory multiple />
    <p>普通文件多选</p>
    <c-upload multiple />
  </c-space>
</template>
