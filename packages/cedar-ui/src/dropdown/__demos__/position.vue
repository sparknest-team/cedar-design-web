<template>
  <c-space>
    <c-dropdown position="bl">
      <c-button>Bottom Left</c-button>
      <template #content>
        <c-doption>Option 1</c-doption>
        <c-doption>Option 2</c-doption>
        <c-doption>Option 3</c-doption>
      </template>
    </c-dropdown>

    <c-dropdown position="bottom">
      <c-button>Bottom</c-button>
      <template #content>
        <c-doption>Option 1</c-doption>
        <c-doption>Option 2</c-doption>
        <c-doption>Option 3</c-doption>
      </template>
    </c-dropdown>

    <c-dropdown position="br">
      <c-button>Bottom Right</c-button>
      <template #content>
        <c-doption>Option 1</c-doption>
        <c-doption>Option 2</c-doption>
        <c-doption>Option 3</c-doption>
      </template>
    </c-dropdown>

    <c-dropdown position="tl">
      <c-button>Top Left</c-button>
      <template #content>
        <c-doption>Option 1</c-doption>
        <c-doption>Option 2</c-doption>
        <c-doption>Option 3</c-doption>
      </template>
    </c-dropdown>

    <c-dropdown position="top">
      <c-button>Top</c-button>
      <template #content>
        <c-doption>Option 1</c-doption>
        <c-doption>Option 2</c-doption>
        <c-doption>Option 3</c-doption>
      </template>
    </c-dropdown>

    <c-dropdown position="tr">
      <c-button>Top Right</c-button>
      <template #content>
        <c-doption>Option 1</c-doption>
        <c-doption>Option 2</c-doption>
        <c-doption>Option 3</c-doption>
      </template>
    </c-dropdown>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const handleSelect = (v) => {
  console.log(v)
}
</script>

<style>
.cedar-dropdown-open .cedar-icon-down {
  transform: rotate(180deg);
}
</style>
