<template>
  <c-space direction="column">
    <c-breadcrumb :routes="routes" />
    <c-breadcrumb>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item :droplist="droplist"> Channel </c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <c-breadcrumb>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>
        <template #droplist>
          <c-doption>Option 1</c-doption>
          <c-dsubmenu value="option-1">
            <template #default>Option 2</template>
            <template #content>
              <c-doption>Option 2-1</c-doption>
              <c-doption>Option 2-2</c-doption>
              <c-doption>Option 2-3</c-doption>
            </template>
            <template #footer>
              <div style="padding: 6px; text-align: center">
                <c-button>Click</c-button>
              </div>
            </template>
          </c-dsubmenu>
          <c-doption>Option 3</c-doption>
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
