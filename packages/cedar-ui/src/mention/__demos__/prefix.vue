<template>
  <c-space direction="column" size="lg" style="width: 100%">
    <c-mention :data="['Bytedance', 'Bytedesign', 'Bytenumner']" placeholder="input @" />
    <c-mention :data="['Bytedance', 'Bytedesign', 'Bytenumner']" prefix="#" placeholder="input #" />
    <c-mention :data="['Bytedance', 'Bytedesign', 'Bytenumner']" prefix="$" placeholder="input $" />
  </c-space>
</template>

<script lang="ts" setup>
</script>
