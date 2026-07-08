<template>
  <c-steps>
    <c-step description="This is a description">
      Succeeded
      <template #icon>
        <c-icon-home />
      </template>
    </c-step>
    <c-step description="This is a description">
      Processing
      <template #icon>
        <c-icon-loading />
      </template>
    </c-step>
    <c-step description="This is a description">
      Pending
      <template #icon>
        <c-icon-thumb-up />
      </template>
    </c-step>
  </c-steps>
</template>
<script lang="ts">
</script>
