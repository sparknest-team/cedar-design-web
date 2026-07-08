<template>
  <c-space direction="column">
    <c-input :style="{ width: '320px' }" placeholder="请输入">
      <template #prefix> +86 </template>
    </c-input>
    <c-input :style="{ width: '320px' }" placeholder="请输入">
      <template #suffix> RMB </template>
    </c-input>
  </c-space>
</template>

<script lang="ts"></script>
