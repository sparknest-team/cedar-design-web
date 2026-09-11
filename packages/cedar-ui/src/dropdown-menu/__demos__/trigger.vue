<template>
  <c-space>
    <c-dropdown-menu trigger="click">
      <c-button>点击触发</c-button>
      <template #content>
        <c-menu-option label="Option 1" />
        <c-menu-option label="Option 2" />
      </template>
    </c-dropdown-menu>
    <c-dropdown-menu trigger="hover">
      <c-button>悬浮触发</c-button>
      <template #content>
        <c-menu-option label="Option 1" />
        <c-menu-option label="Option 2" />
      </template>
    </c-dropdown-menu>
  </c-space>
</template>
