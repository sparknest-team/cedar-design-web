<template>
  <c-anchor :change-hash="false">
    <c-anchor-link href="#basic">Basic</c-anchor-link>
    <c-anchor-link href="#show-line">Show Line</c-anchor-link>
    <c-anchor-link href="#affix">
      Affix
      <template #sublist>
        <c-anchor-link href="#boundary">Scroll Boundary</c-anchor-link>
        <c-anchor-link href="#hash">Hash mode</c-anchor-link>
      </template>
    </c-anchor-link>
  </c-anchor>
</template>

<script lang="ts" setup>
</script>
