<template>
  <c-space direction="column">
    <c-input-number
      :style="{ width: '320px' }"
      :step="1.2"
      :precision="2"
      clearable
      placeholder="请输入"
      :default-value="3.6"
    ></c-input-number>
    <c-input-number
      :style="{ width: '320px' }"
      value="1.22"
      :step="1.22"
      clearable
      placeholder="请输入"
      :default-value="1.2"
    ></c-input-number>
  </c-space>
</template>

<script lang="ts">
</script>
