<template>
  <c-space direction="column" size="lg" style="width: 100%">
    <c-mention :options="['Bytedance', 'Bytedesign', 'Bytenumner']" placeholder="input @" />
    <c-mention :options="['Bytedance', 'Bytedesign', 'Bytenumner']" prefix="#" placeholder="input #" />
    <c-mention :options="['Bytedance', 'Bytedesign', 'Bytenumner']" prefix="$" placeholder="input $" />
  </c-space>
</template>

<script lang="ts" setup>
</script>
