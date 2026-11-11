<template>
  <c-space direction="column">
    <c-breadcrumb>
      <template #separator>
        <c-icon-oblique-line />
      </template>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <c-breadcrumb separator="~">
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <c-breadcrumb>
      <template #separator>
        <c-icon-oblique-line />
      </template>
      <c-breadcrumb-item separator="->">Home</c-breadcrumb-item>
      <c-breadcrumb-item>Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
  </c-space>
</template>

<script lang="ts">
</script>
