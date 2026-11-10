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
          <c-button html-type="button" variant="text" class="more-trigger" aria-label="查看隐藏路径"><c-icon-more aria-hidden="true" /></c-button>
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

<style scoped>
.more-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
}
</style>
