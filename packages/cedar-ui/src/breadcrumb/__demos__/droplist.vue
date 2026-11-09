<template>
  <c-space direction="column">
    <c-breadcrumb :routes="routes" @click.prevent @select="handleSelect" />
    <span v-if="selectedPath">Selected: {{ selectedPath }}</span>
    <c-breadcrumb>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item :droplist="droplist"> Channel </c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <c-breadcrumb>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>
        <template #droplist>
          <c-menu-option>Option 1</c-menu-option>
          <c-menu-option>Option 2</c-menu-option>
          <c-menu-option>Option 3</c-menu-option>
        </template>
        Channel
      </c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
  </c-space>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const selectedPath = ref('')
    const handleSelect = (route: { path: string }) => { selectedPath.value = route.path }
    const routes = [
      {
        path: '/',
        label: 'Home',
      },
      {
        path: '/channel',
        label: 'Channel',
        children: [
          { path: '/goods', label: 'Goods' },
          { path: '/wallet', label: 'Wallet' },
        ],
      },
      {
        path: '/news',
        label: 'News',
      },
    ]
    const droplist = [
      {
        path: '/goods',
        label: 'Goods',
      },
      {
        path: '/wallet',
        label: 'Wallet',
      },
    ]
    return { routes, droplist, selectedPath, handleSelect }
  },
}
</script>
