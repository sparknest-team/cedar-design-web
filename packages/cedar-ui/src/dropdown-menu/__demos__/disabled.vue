<template>
  <c-space>
    <c-dropdown-menu disabled>
      <c-button disabled>菜单禁用</c-button>
      <template #content><c-menu-option label="Option 1" /></template>
    </c-dropdown-menu>
    <c-dropdown-menu>
      <c-button>选项禁用</c-button>
      <template #content>
        <c-menu-option label="可用选项" />
        <c-menu-option label="禁用选项" disabled />
        <c-menu-option label="另一个可用选项" />
      </template>
    </c-dropdown-menu>
  </c-space>
</template>
