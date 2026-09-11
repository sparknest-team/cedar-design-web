<template>
  <c-dropdown-menu>
    <c-button>页脚</c-button>
    <template #content>
      <c-menu-option>Option 1</c-menu-option>
      <c-menu-option>Option 2</c-menu-option>
    </template>
    <template #footer>
      <div style="padding: 8px 12px">自定义页脚</div>
    </template>
  </c-dropdown-menu>
</template>
