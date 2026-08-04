<template>
  <c-space size="lg">
    <c-menu-button @click="handleClick" @select="handleSelect">
      Publish
      <template #content>
        <c-menu-option label="Save now" />
        <c-menu-option label="Save and Publish" />
      </template>
    </c-menu-button>

    <c-menu-button disabled>
      Disabled
      <template #content>
        <c-menu-option label="Save now" />
        <c-menu-option label="Save and Publish" />
      </template>
    </c-menu-button>

    <c-menu-button @click="handleClick" @select="handleSelect">
      Publish
      <template #icon>
        <c-icon-down />
      </template>
      <template #content>
        <c-menu-option label="Save now" />
        <c-menu-option label="Save and Publish" />
      </template>
    </c-menu-button>
  </c-space>
</template>

<script lang="ts" setup>
const handleSelect = (v) => {
  console.log(v);
};

const handleClick = () => {
  console.log("Publish");
};
</script>

<style>
.c-menu-open .c-icon-down {
  transform: rotate(180deg);
}
</style>
