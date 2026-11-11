<template>
  <c-config-provider>
    <template #empty="{ component }"><p>No content ({{ component }})</p></template>
    <template #loading><span>◌</span></template>
    <c-config-provider>
      <c-space direction="column">
        <c-empty />
        <c-loading tip="Preparing content" />
      </c-space>
    </c-config-provider>
  </c-config-provider>
</template>
