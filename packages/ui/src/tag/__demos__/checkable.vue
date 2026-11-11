<template>
  <c-space wrap>
    <c-tag checkable>Awesome</c-tag>
    <c-tag checkable status="primary" :default-value="false">点击选中</c-tag>
    <c-tag checkable status="warning" variant="outline">描边状态</c-tag>
    <c-tag checkable status="success" loading>加载中</c-tag>
    <c-tag checkable color="red" :default-value="true">Toutiao</c-tag>
    <c-tag checkable color="brand" :default-value="true">Lark</c-tag>
  </c-space>
</template>

<script lang="ts" setup>
</script>
