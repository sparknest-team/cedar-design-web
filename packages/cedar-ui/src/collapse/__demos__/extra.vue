<template>
  <c-collapse>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1">
      <template #extra>
        <c-icon-copy />
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." :key="2">
      <template #extra>
        <c-button type="primary" size="xs" @click.stop="sayHello">hello</c-button>
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="3">
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
