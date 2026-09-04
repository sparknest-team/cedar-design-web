<template>
  <c-collapse>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1">
      <template #extra>
        <c-icon-copy />
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="2">
      <template #extra>
        <c-button status="primary" size="xs" @click="sayHello">hello</c-button>
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="3">
      <template #extra>
        <c-tag size="sm">city</c-tag>
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>

<script lang="ts" setup>

const sayHello = () => {
  Message.info('hello')
}
</script>
