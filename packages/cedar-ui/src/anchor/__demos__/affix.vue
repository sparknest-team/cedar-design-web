<template>
  <c-affix :offsetTop="80">
    <c-anchor :style="{ backgroundColor: 'var(--color-bg-1)' }">
      <c-anchor-link href="#basic">Basic</c-anchor-link>
      <c-anchor-link href="#show-line">Show Rail</c-anchor-link>
      <c-anchor-link href="#affix">
        Affix
        <template #sublist>
          <c-anchor-link href="#boundary">Scroll Boundary</c-anchor-link>
          <c-anchor-link href="#hash">Hash mode</c-anchor-link>
        </template>
      </c-anchor-link>
    </c-anchor>
  </c-affix>
</template>
<script lang="ts" setup>
</script>
