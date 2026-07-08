<template>
  <c-collapse :default-active-key="['1', 2]" destroy-on-hide>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1">
      <c-collapse :default-active-key="['1.1']" destroy-on-hide>
        <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1.1">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </c-collapse-item>
        <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1.2">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </c-collapse-item>
      </c-collapse>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." :key="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>

<script lang="ts" setup>
</script>
