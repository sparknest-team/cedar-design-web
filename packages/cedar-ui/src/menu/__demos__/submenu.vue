<template>
  <c-menu>
    <c-button>多级菜单</c-button>
    <template #content>
      <c-menu-option label="首页" />
      <c-menu-submenu>
        <template #default>产品</template>
        <template #content>
          <c-menu-option label="产品概览" />
          <c-menu-submenu trigger="hover">
            <template #default>解决方案</template>
            <template #content>
              <c-menu-option label="企业版" />
              <c-menu-option label="团队版" />
            </template>
          </c-menu-submenu>
        </template>
      </c-menu-submenu>
      <c-menu-option label="关于我们" />
    </template>
  </c-menu>
</template>
