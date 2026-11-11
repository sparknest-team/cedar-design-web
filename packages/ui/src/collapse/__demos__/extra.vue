<template>
  <c-collapse>
    <c-collapse-item :heading-level="3" :region="false" title="Beijing Toutiao Technology Co., Ltd." name="1">
      <template #extra>Extra</template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item :heading-level="3" :region="false" title="Beijing Toutiao Technology Co., Ltd." :name="2">
      <template #extra>
        <c-button status="primary" size="sm">Action</c-button>
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item :heading-level="3" :region="false" title="Beijing Toutiao Technology Co., Ltd." name="3">
      <template #extra>
        <c-tag size="sm">city</c-tag>
      </template>
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>
<script lang="ts" setup>
</script>
