<template>
  <c-space>
    <c-menu position="bl">
      <c-button>Bottom Left</c-button>
      <template #content>
        <c-menu-option>Option 1</c-menu-option>
        <c-menu-option>Option 2</c-menu-option>
        <c-menu-option>Option 3</c-menu-option>
      </template>
    </c-menu>

    <c-menu position="bottom">
      <c-button>Bottom</c-button>
      <template #content>
        <c-menu-option>Option 1</c-menu-option>
        <c-menu-option>Option 2</c-menu-option>
        <c-menu-option>Option 3</c-menu-option>
      </template>
    </c-menu>

    <c-menu position="br">
      <c-button>Bottom Right</c-button>
      <template #content>
        <c-menu-option>Option 1</c-menu-option>
        <c-menu-option>Option 2</c-menu-option>
        <c-menu-option>Option 3</c-menu-option>
      </template>
    </c-menu>

    <c-menu position="tl">
      <c-button>Top Left</c-button>
      <template #content>
        <c-menu-option>Option 1</c-menu-option>
        <c-menu-option>Option 2</c-menu-option>
        <c-menu-option>Option 3</c-menu-option>
      </template>
    </c-menu>

    <c-menu position="top">
      <c-button>Top</c-button>
      <template #content>
        <c-menu-option>Option 1</c-menu-option>
        <c-menu-option>Option 2</c-menu-option>
        <c-menu-option>Option 3</c-menu-option>
      </template>
    </c-menu>

    <c-menu position="tr">
      <c-button>Top Right</c-button>
      <template #content>
        <c-menu-option>Option 1</c-menu-option>
        <c-menu-option>Option 2</c-menu-option>
        <c-menu-option>Option 3</c-menu-option>
      </template>
    </c-menu>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const handleSelect = (v) => {
  console.log(v)
}
</script>

<style>
.c-menu-open .c-icon-down {
  transform: rotate(180deg);
}
</style>
