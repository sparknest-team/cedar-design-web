<template>
  <c-row :gutter="[40, 20]">
    <c-col :span="12">
      <c-alert closable>This is an info alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert status="success" closable>This is an success alert.</c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert status="warning" closable>
        <template #title> Warning </template>
        This is an warning alert.
      </c-alert>
    </c-col>
    <c-col :span="12">
      <c-alert status="danger" closable>
        <template #title> Error </template>
        This is a danger alert.
      </c-alert>
    </c-col>
  </c-row>
</template>

<script lang="ts" setup>
</script>
