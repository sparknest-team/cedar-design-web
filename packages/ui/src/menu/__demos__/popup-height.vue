<template>
  <c-space wrap>
    <c-menu :popup-max-height="120">
      <c-button>限制为 120px</c-button>
      <template #content>
        <c-menu-option v-for="item in options" :key="item" :label="item" />
      </template>
    </c-menu>
    <c-menu :popup-max-height="false">
      <c-button>不限制高度</c-button>
      <template #content>
        <c-menu-option v-for="item in options" :key="item" :label="item" />
      </template>
    </c-menu>
  </c-space>
</template>

<script lang="ts" setup>
const options = Array.from({ length: 8 }, (_, index) => `Option ${index + 1}`);
</script>
