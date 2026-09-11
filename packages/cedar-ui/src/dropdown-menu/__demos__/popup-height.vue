<template>
  <c-space>
    <c-dropdown-menu :popup-max-height="120">
      <c-button>限制为 120px</c-button>
      <template #content>
        <c-menu-option v-for="item in options" :key="item" :label="item" />
      </template>
    </c-dropdown-menu>
    <c-dropdown-menu :popup-max-height="false">
      <c-button>不限制高度</c-button>
      <template #content>
        <c-menu-option v-for="item in options" :key="item" :label="item" />
      </template>
    </c-dropdown-menu>
  </c-space>
</template>

<script lang="ts" setup>
const options = Array.from({ length: 8 }, (_, index) => `Option ${index + 1}`);
</script>
