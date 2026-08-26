<template>
  <c-space wrap>
    <!-- 无需导入、注册组件 -->
    <c-button status="primary" autoLoading @click="handleClick">自动加载</c-button>
    <c-button status="primary" autoLoading loadingType="fill" @click="handleClick">自动加载 Fill</c-button>
    <c-button status="primary" autoLoading loadingType="line" @click="handleClick">自动加载 Line</c-button>
  </c-space>
</template>

<script setup lang="ts">
const handleClick = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 3000)
  })
}

const handleClick2 = async () => {
}
</script>
