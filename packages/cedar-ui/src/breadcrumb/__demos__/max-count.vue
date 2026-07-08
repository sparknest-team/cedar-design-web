<template>
  <c-space direction="column">
    <c-breadcrumb :max-count="3">
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>Sub Home</c-breadcrumb-item>
      <c-breadcrumb-item>All Channel</c-breadcrumb-item>
      <c-breadcrumb-item>Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
      <c-breadcrumb-item>Post</c-breadcrumb-item>
    </c-breadcrumb>
    <c-breadcrumb :max-count="3">
      <template #more-icon>
        <c-tooltip content="more routes a/b/c">
          <c-icon-more />
        </c-tooltip>
      </template>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>Sub Home</c-breadcrumb-item>
      <c-breadcrumb-item>All Channel</c-breadcrumb-item>
      <c-breadcrumb-item>Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
      <c-breadcrumb-item>Post</c-breadcrumb-item>
    </c-breadcrumb>
  </c-space>
</template>

<script lang="ts">
export default {
  setup() {
    const routes = [
      {
        path: '/',
        label: 'Home',
      },
      {
        path: '/channel',
        label: 'Channel',
      },
      {
        path: '/news',
        label: 'News',
      },
    ]
    return { routes }
  },
}
</script>
