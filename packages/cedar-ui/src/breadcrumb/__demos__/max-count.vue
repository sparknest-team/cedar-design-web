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
    <c-breadcrumb :routes="maxRoutes" :max-count="3" @click.prevent>
      <template #more-icon="{ omittedItems }">
        <c-tooltip :trigger="['hover', 'focus', 'click']" :content="omittedItems.map((item) => item.label).join(' / ')">
          <c-icon-more />
        </c-tooltip>
      </template>
    </c-breadcrumb>
  </c-space>
</template>

<script lang="ts">
export default {
  setup() {
    const maxRoutes = [
      { path: '/', label: 'Home' },
      { path: '/sub-home', label: 'Sub Home' },
      { path: '/all-channel', label: 'All Channel' },
      { path: '/channel', label: 'Channel' },
      { path: '/news', label: 'News' },
      { path: '/post', label: 'Post' },
    ]
    return { maxRoutes }
  },
}
</script>
