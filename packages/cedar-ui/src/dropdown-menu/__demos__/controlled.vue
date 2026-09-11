<template>
  <c-space direction="column">
    <c-button @mousedown.stop @click.stop="open = !open">{{
      open ? "关闭菜单" : "打开菜单"
    }}</c-button>
    <c-dropdown-menu v-model:open="open">
      <c-button>菜单触发器</c-button>
      <template #content>
        <c-menu-option label="Option 1" />
        <c-menu-option label="Option 2" />
      </template>
    </c-dropdown-menu>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const open = ref(false);
</script>
