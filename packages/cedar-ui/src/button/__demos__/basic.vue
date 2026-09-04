<template>
  <c-space wrap>
    <!-- 无需导入、注册组件 -->
    <c-button>默认按钮</c-button>
    <c-button status="primary" @click="handleClick">主要按钮</c-button>
    <c-button status="info">信息按钮</c-button>
    <c-button status="success">成功按钮</c-button>
    <c-button status="warning">警告按钮</c-button>
    <c-button status="danger">危险按钮</c-button>
  </c-space>
</template>

<script setup lang="ts">
import { Dialog } from '@cedarjs/ui'

const handleClick = () => {
  Dialog.open({
    title: '标题',
    message: '内容',
  })
}
</script>
