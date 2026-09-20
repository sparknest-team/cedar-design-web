<template>
  <c-space direction="column">
    <c-search :style="inputStyle" placeholder="加载中" loading />
    <c-search
      :style="inputStyle"
      placeholder="按钮加载中"
      search-button
      loading
    />
    <c-search :style="inputStyle" default-value="只读内容" readonly />
  </c-space>
</template>

<script lang="ts" setup>
const inputStyle = { width: "360px" };
</script>
