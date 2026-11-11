<template>
  <c-space direction="column">
    <c-verification-code
      default-value="123456"
      style="width: 300px"
      :formatter="(inputValue) => (/^\d*$/.test(inputValue) ? inputValue : false)"
    />
    <c-verification-code
      type="text"
      default-value="abcdef"
      style="width: 300px"
      :formatter="(inputValue) => (/^[a-zA-Z]*$/.test(inputValue) ? inputValue.toUpperCase() : '')"
    />
  </c-space>
</template>

<script lang="ts" setup>
</script>
