<template>
  <c-space size="lg">
    <c-dropdown-button>
      Publish
      <template #content>
        <c-doption>Save now</c-doption>
        <c-doption>Save and Publish</c-doption>
      </template>
    </c-dropdown-button>

    <c-dropdown-button disabled>
      Disabled
      <template #content>
        <c-doption>Save now</c-doption>
        <c-doption>Save and Publish</c-doption>
      </template>
    </c-dropdown-button>

    <c-dropdown-button>
      Publish
      <template #icon>
        <c-icon-down />
      </template>
      <template #content>
        <c-doption>Save now</c-doption>
        <c-doption>Save and Publish</c-doption>
      </template>
    </c-dropdown-button>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const handleSelect = (v) => {
  console.log(v)
}
</script>

<style>
.c-dropdown-open .c-icon-down {
  transform: rotate(180deg);
}
</style>
