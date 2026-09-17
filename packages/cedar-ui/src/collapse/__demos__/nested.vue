<template>
  <c-collapse :default-active-names="['1', 2]" destroy-on-hide>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1">
      <c-collapse :default-active-names="['1.1']" destroy-on-hide>
        <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1.1">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </c-collapse-item>
        <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1.2">
          <div>Beijing Toutiao Technology Co., Ltd.</div>
        </c-collapse-item>
      </c-collapse>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." :name="2">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
    <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="3">
      <div>Beijing Toutiao Technology Co., Ltd.</div>
    </c-collapse-item>
  </c-collapse>
</template>
<script lang="ts" setup>
</script>
