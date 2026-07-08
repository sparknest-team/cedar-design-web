<template>
  <c-result status="error" title="No internet ">
    <template #icon>
      <c-icon-face-frown-fill />
    </template>
    <template #subtitle> DNS_PROBE_FINISHED_NO_INTERNET</template>

    <template #extra>
      <c-button type="primary">Refresh</c-button>
    </template>
    <c-typography style="background: var(--color-fill-2); padding: 24px">
      <c-typography-paragraph>Try:</c-typography-paragraph>
      <ul>
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnecting to Wi-Fi</li>
      </ul>
    </c-typography>
  </c-result>
</template>

<script lang="ts" setup>
</script>
