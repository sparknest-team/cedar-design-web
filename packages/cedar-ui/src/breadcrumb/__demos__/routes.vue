<template>
  <c-space direction="column">
    <c-breadcrumb :routes="routes" @click.prevent />
    <c-breadcrumb :routes="routes">
      <template #item-render="{ route, paths }">
        <c-link :href="paths.join('/')" @click.prevent>
          {{ route.label }}
        </c-link>
      </template>
    </c-breadcrumb>
    <c-breadcrumb :routes="routes">
      <template #item-render="{ route }">
        <RouterLink :to="route.to">
          {{ route.label }}
        </RouterLink>
      </template>
    </c-breadcrumb>
  </c-space>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink },
  setup() {
    const routes = [
      {
        path: '/',
        to: { query: { breadcrumb: 'home' } },
        label: 'Home',
      },
      {
        path: '/channel',
        to: { query: { breadcrumb: 'channel' } },
        label: 'Channel',
      },
      {
        path: '/news',
        to: { query: { breadcrumb: 'news' } },
        label: 'News',
      },
    ]
    return { routes }
  },
}
</script>
