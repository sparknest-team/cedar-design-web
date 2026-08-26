<template>
  <c-space size="lg">
    <c-split-button @click="handleClick" @select="handleSelect">
      Publish
      <template #content>
        <c-menu-option label="Save now" />
        <c-menu-option label="Save and Publish" />
      </template>
    </c-split-button>

    <c-split-button disabled>
      Disabled
      <template #content>
        <c-menu-option label="Save now" />
        <c-menu-option label="Save and Publish" />
      </template>
    </c-split-button>

    <c-split-button @click="handleClick" @select="handleSelect">
      Publish
      <template #icon="{ open }">
        <c-icon-down :style="{ transform: open ? 'rotate(180deg)' : undefined }" />
      </template>
      <template #content>
        <c-menu-option label="Save now" />
        <c-menu-option label="Save and Publish" />
      </template>
    </c-split-button>
  </c-space>
</template>

<script lang="ts" setup>
const handleSelect = () => undefined
const handleClick = () => undefined
</script>
