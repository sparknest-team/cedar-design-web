<template>
  <c-space direction="column">
    <c-breadcrumb :routes="routes" />
    <c-breadcrumb :routes="routes">
      <template #item-render="{ route, paths }">
        <c-link :href="paths.join('/')">
          {{ route.label }}
        </c-link>
      </template>
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
