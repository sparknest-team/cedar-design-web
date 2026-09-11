<template>
  <c-menu>
    <c-button>选项分组</c-button>
    <template #content>
      <c-menu-group title="文件操作">
        <c-menu-option label="新建" />
        <c-menu-option label="打开" />
      </c-menu-group>
      <c-menu-group title="编辑操作">
        <c-menu-option label="复制" />
        <c-menu-option label="粘贴" />
      </c-menu-group>
    </template>
  </c-menu>
</template>
