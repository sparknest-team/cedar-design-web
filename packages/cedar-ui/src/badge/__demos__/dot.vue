<template>
  <c-space :size="40">
    <c-badge :content="9" dot :offset="[6, -2]">
      <a href="#">Link</a>
    </c-badge>
    <c-badge :content="9" dot :offset="[2, -2]">
      <c-icon-notification :style="{ color: '#888', fontSize: '18px', verticalAlign: '-3px' }" />
    </c-badge>
  </c-space>
</template>
<script lang="ts" setup>
</script>
