<template>
  <c-row :gutter="[40, 20]">
    <c-col :span="12">
      <c-alert closable>
        <template #close-icon>
          <c-icon-close-circle />
        </template>
        This is an info alert.
      </c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert closable>
        <template #close-icon> Close </template>
        This is an info alert.
      </c-alert>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
</script>
