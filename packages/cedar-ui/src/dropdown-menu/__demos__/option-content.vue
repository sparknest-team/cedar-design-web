<template>
  <c-menu>
    <c-button>自定义选项内容</c-button>
    <template #content>
      <c-menu-option>
        <template #icon><c-icon-edit /></template>
        编辑
        <template #suffix>⌘ E</template>
      </c-menu-option>
      <c-menu-option>
        <template #icon><c-icon-copy /></template>
        复制
        <template #suffix>⌘ C</template>
      </c-menu-option>
      <c-menu-option disabled>
        <template #icon><c-icon-delete /></template>
        删除
        <template #suffix>⌫</template>
      </c-menu-option>
    </template>
  </c-menu>
</template>
