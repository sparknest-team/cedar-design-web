<template>
  <c-affix :offsetBottom="80" @change="onChange">
    <c-button type="primary">80px to affix bottom</c-button>
  </c-affix>
</template>

<script lang="ts" setup>
const onChange = (fixed) => {
  console.log(`${fixed}`)
}
</script>
