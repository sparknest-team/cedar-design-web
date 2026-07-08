<template>
  <c-space direction="column">
    <c-space>
      <c-typography-text style="width: 80px">Disabled:</c-typography-text>
      <c-verification-code defaultValue="123456" style="width: 300px" disabled />
    </c-space>
    <c-space>
      <c-typography-text style="width: 80px">Readonly:</c-typography-text>
      <c-verification-code defaultValue="123456" style="width: 300px" readonly />
    </c-space>
    <c-space>
      <c-typography-text style="width: 80px">Error:</c-typography-text>
      <c-verification-code defaultValue="123456" style="width: 300px" error />
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
</script>
