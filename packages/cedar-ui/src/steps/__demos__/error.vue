<template>
  <c-steps :current="2" status="error">
    <c-step description="This is a description">Succeeded</c-step>
    <c-step description="This is a description">Error</c-step>
    <c-step description="This is a description">Pending</c-step>
  </c-steps>
</template>
<script lang="ts">
</script>
