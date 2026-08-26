<template>
  <c-space direction="column">
    <c-breadcrumb :routes="routes" @click.prevent />
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
          <c-menu-submenu value="option-1">
            <template #default>Option 2</template>
            <template #content>
              <c-menu-option>Option 2-1</c-menu-option>
              <c-menu-option>Option 2-2</c-menu-option>
              <c-menu-option>Option 2-3</c-menu-option>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center">
                <c-button>Click</c-button>
              </div>
            </template>
          </c-menu-submenu>
          <c-menu-option>Option 3</c-menu-option>
        </template>
        Channel
      </c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
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
    return { routes, droplist }
  },
}
</script>
